/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-10 15:48:17
 * @Description  : 编译模板
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-10 17:50:10
 */

class Compiler {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    if (this.el) {
      // 开始编译
      // 1. 先把真实的dom移入到内存中
      const fragment = this.node2fragment(this.el);
      // 2. 编译，提取想要的元素节点 v-mode v-html v-text
      this.compile(fragment);
      // 把编译好的fragment塞到页面中去
      this.el.appendChild(fragment);
    }
  }

  // ------辅助方法-----
  isElementNode(node) {
    return node.nodeType === 1;
  }
  isDirective(name) {
    return /^(v-)/g.test(name);
  }
  // ------核心方法-----
  compileElment(node) {
    const attrs = node.attributes;
    Array.from(attrs).forEach((attr) => {
      const attrName = attr.name;
      if (this.isDirective(attrName)) {
        const expr = attr.value;
        const [, key] = attrName.split("-");
        CompilerUtil[key](node, this.vm, expr);
      }
    });
  }
  compileText(node) {
    const expr = node.textContent;
    const reg = /\{\{([^}]+)\}\}/g;
    if (reg.test(expr)) {
      CompilerUtil["text"](node, this.vm, expr);
    }
  }
  compile(element) {
    const childrenNodes = element.childNodes;
    Array.from(childrenNodes).forEach((node) => {
      if (this.isElementNode(node)) {
        // 编译元素节点
        this.compileElment(node);
        // 继续递归编译
        this.compile(node);
      } else {
        // 编译文本
        this.compileText(node);
      }
    });
  }
  node2fragment(el) {
    const fragment = document.createDocumentFragment();
    let firstChild;
    while ((firstChild = el.firstChild)) {
      fragment.appendChild(firstChild);
    }
    return fragment;
  }
}

CompilerUtil = {
  getVal(vm, expr) {
    return expr.split(".").reduce((pre, item, index) => {
      return pre[item] ? pre[item] : "";
    }, vm.$data);
  },
  setVal(vm, expr, value) {
    const exprs = expr.split(".");
    return exprs.reduce((pre, item, index) => {
      if (index === exprs.length - 1) {
        pre[item] = value;
      }
      return pre[item] ? pre[item] : "";
    }, vm.$data);
  },
  getTextVal(vm, expr) {
    const reg = /\{\{([^}]+)\}\}/g;
    return expr.replace(reg, (...arguments) => {
      return this.getVal(vm, arguments[1]);
    });
  },
  // 文本处理
  text(node, vm, expr) {
    const updateMethod = this.updater["textUpdater"];
    const value = this.getTextVal(vm, expr);
    const reg = /\{\{([^}]+)\}\}/g;
    expr.replace(reg, (...arguments) => {
      new Watcher(vm, arguments[1], (value) => {
        updateMethod && updateMethod(node, this.getTextVal(vm, expr));
      });
    });
    updateMethod && updateMethod(node, value);
  },
  // v-model处理
  model(node, vm, expr) {
    const updateMethod = this.updater["modelUpdater"];
    new Watcher(vm, expr, (value) => {
      updateMethod && updateMethod(node, value);
    });
    node.addEventListener("input", (event) => {
        this.setVal(vm,expr,event.target.value)
    });
    updateMethod && updateMethod(node, this.getVal(vm, expr));
  },
  updater: {
    textUpdater(node, value) {
      node.textContent = value;
    },
    modelUpdater(node, value) {
      node.value = value;
    },
  },
};

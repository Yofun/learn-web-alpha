/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-11 13:36:48
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-11 14:54:35
 */
class Compiler {
    constructor(el,vm){
        this.el = this.isElementNode(el)?el:document.querySelector(el)
        this.vm = vm
        if(this.el) {
            const fragment = this.node2fragment(this.el)
            this.compile(fragment)
            this.el.appendChild(fragment)
        }
    }

    isElementNode(node) {
        return node.nodeType===1
    }
    isDerective(name) {
        return /^(v-)/g.test(name)
    }
    // ----------
    compileElement(node) {
        const attrs = node.attributes
        Array.from(attrs).forEach(attr=>{
            const attrName = attr.name
            if(this.isDerective(attrName)) {
                const [,type] = attrName.split('-')
                CompileUtil[type](node,this.vm,attr.value)
            }
        })
    }
    compileText(node) {
        const expr = node.textContent
        const reg = /\{\{([^}]+)\}\}/g
        if(reg.test(expr)) {
            CompileUtil['text'](node,this.vm,expr)
        }
    }
    compile(fragment){
        Array.from(fragment.childNodes).forEach(node=>{
            if(this.isElementNode(node)) {
                this.compileElement(node)
                this.compile(node)
            }else {
                this.compileText(node)
            }
        })
    }
    node2fragment(node) {
        const fragment = document.createDocumentFragment()
        let firstChild;
        while(firstChild = node.firstChild) {
            fragment.appendChild(firstChild)
        }
        return fragment
    }
}

CompileUtil = {
    getValue(data,expr) {
        return expr.split('.').reduce((pre,item)=>{
            return pre[item]
        },data)
    },
    getTextValue(data,expr) {
        const reg = /\{\{([^}]+)\}\}/g
        return expr.replace(reg,(...argments)=>{
            return this.getValue(data,argments[1])
        })
    },
    setValue(data,expr,value) {
        const exprs = expr.split('.')
        return exprs.reduce((pre,item,index)=>{
            if(index===exprs.length-1) {
                pre[item] = value
            }
            return pre[item]
        },data)
    },
    model(node,vm,expr) {
        new Watcher(vm,expr,newVal=>{
            CompileUpdater['model'](node,newVal)
        })
        node.addEventListener('input', event=>{
            const value = event.target.value
            this.setValue(vm.$data,expr,value)
        })
        CompileUpdater['model'](node,this.getValue(vm.$data,expr))
    },
    text(node,vm,expr) {
        expr.replace(/\{\{([^}]+)\}\}/g,(...args)=>{
            new Watcher(vm,args[1],newVal=>{
                CompileUpdater['text'](node,this.getTextValue(vm.$data,expr))
            })
        })
        CompileUpdater['text'](node,this.getTextValue(vm.$data,expr))
    }
}

CompileUpdater = {
    model(node,value) {
        node.value = value
    },
    text(node,value) {
        node.textContent = value
    }
}
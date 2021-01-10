/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-10 17:09:10
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-10 17:24:15
 */
class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    // 先获取老的值
    this.value = this.get();
  }
  getVal(vm, expr) {
    return expr.split(".").reduce((pre, item, index) => {
      return pre[item] ? pre[item] : "";
    }, vm.$data);
  }
  get() {
    Dep.target = this
    const value = this.getVal(this.vm, this.expr)
    Dep.target = null
    return value;
  }
  update() {
      const newValue = this.getVal(this.vm,this.expr)
      if (newValue != this.value && this.cb && typeof this.cb === "function") {
        this.cb(newValue);
      }
  }
}

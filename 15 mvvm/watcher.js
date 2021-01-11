/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-11 14:30:01
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-11 14:38:52
 */
class Watcher{
    constructor(vm,expr,cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb
        this.value = this.get()
    }
    getValue(data,expr) {
        return expr.split('.').reduce((pre,item)=>{
            return pre[item]
        },data)
    }
    get() {
        Dep.target = this
        const value = this.getValue(this.vm.$data,this.expr)
        Dep.target = null
        return value
    }
    update() {
        const newVal = this.getValue(this.vm.$data,this.expr)
        if(newVal!=this.value) {
            this.cb(newVal)
        }
    }
}
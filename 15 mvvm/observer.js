/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-11 14:21:18
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-11 14:52:34
 */
class Observer {
    constructor(data) {
        this.dep = new Dep()
        this.data = data
        this.observe(this.data)
    }
    observe(data) {
        if(!data || typeof data !== 'object'){
            return
        }
        Object.keys(data).forEach(key=>{
            this.defineReactive(data,key,data[key])
            this.observe(data[key])
        })
    }
    defineReactive(data,key,value) {
        const that = this
        Object.defineProperty(data,key,{
            enumerable: true,
            configurable: true,
            get() {
                Dep.target && that.dep.addSub(Dep.target)
                return value
            },
            set(newVal){
                if(newVal != value) {
                    value = newVal
                    that.dep.notify()
                }
            }
        })
    }
}
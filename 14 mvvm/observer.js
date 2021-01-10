/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-10 15:50:56
 * @Description  : 数据劫持
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-10 17:35:00
 */

class Observer {
  constructor(data) {
    this.dep = new Dep()
    this.observe(data);
  }
  observe(data) {
    if (!data || typeof data !== "object") {
      return;
    }
    Object.keys(data).forEach(key=>{
        // 劫持
        this.defineReactive(data,key,data[key])
        this.observe(data[key])
    })
  }

  defineReactive(obj,key,value){
    const that = this
    Object.defineProperty(obj,key,{
        enumerable: true,
        configurable: true,
        get() {
            Dep.target && that.dep.addSub(Dep.target)
            if(typeof value === 'object') {
                return value
            }else {
                return value
            }
        },
        set(newVal) {
            if(newVal!=value){
                that.observe(newVal)
                value = newVal
                that.dep.notify()
            }
        }
    })
  }
}

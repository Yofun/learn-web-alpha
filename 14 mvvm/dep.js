/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-10 17:24:43
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-10 17:25:58
 */
class Dep {
    constructor() {
        this.subs = []
    }

    addSub(watcher) {
        this.subs.push(watcher)
    }
    notify() {
        this.subs.forEach(item=>{
            item.update()
        })
    }
}
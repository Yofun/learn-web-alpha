/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-11 14:33:56
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-11 14:33:56
 */
class Dep {
    constructor() {
        this.subs = []
    }

    addSub(watcher) {
        this.subs.push(watcher)
    }

    notify(){
        this.subs.forEach(watcher=>{
            watcher.update()
        })
    }
}
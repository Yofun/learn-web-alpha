/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-11 13:34:58
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-11 13:36:39
 */
class Vue{
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data
        if(this.$el){
            new Observer(this.$data)
            new Compiler(this.$el,this)
        }
    }
}
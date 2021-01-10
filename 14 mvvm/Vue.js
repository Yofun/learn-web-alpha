/*
 * @Author       : heyongfeng
 * @Date         : 2021-01-10 15:40:14
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-01-10 17:53:10
 */

class Vue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    if (this.$el) {
      // 编译之前需要数据劫持
      new Observer(this.$data);
      // 代理数据
      this.proxyData(this.$data)
      // 开始编译
      new Compiler(this.$el, this);
    }
  }

  proxyData(data) {
      Object.keys(data).forEach(key=>{
          Object.defineProperty(this,key,{
              get() {
                  return data[key]
              },
              set(newVal) {
                data[key] = newVal
              }
          })
      })
  }
}

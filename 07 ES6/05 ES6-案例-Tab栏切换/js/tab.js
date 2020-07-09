; (function () {
    var _that;
    class Tab {
        constructor(id) {
            _that = this;
            // 获取元素
            this.main = document.querySelector(id);
            this.ul = this.main.querySelector('.fisrstnav ul');
            this.tabcon = this.main.querySelector('.tabscon');
            this.add = this.main.querySelector('.tabadd');  // 新增

            // 调用初始化方法
            this.init();
        }

        // 初始化操作  让相关的元素绑定事件
        init() {
            // 重新获取
            this.lis = this.main.querySelectorAll('li');
            this.remove = this.main.querySelectorAll('.icon-guanbi');
            this.sections = this.main.querySelectorAll('section');
            this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
            // 切换tab事件
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
                this.remove[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.editTap;
                this.sections[i].ondblclick = this.editTap;
            }

            // 添加tab事件
            this.add.onclick = this.addTab;
        }

        // 1. 切换功能
        toggleTab() {
            // console.log(this.index);
            // 当前的this指向的是当前点击的li
            // 清除所有人
            _that.clearClass();
            // 留下自己
            this.className = 'liactive';
            _that.sections[this.index].className = 'conactive';

        }

        clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }

        // 2. 添加功能
        addTab() {
            _that.clearClass();
            // 1) 创建li元素和section元素
            var li = document.createElement('li');
            li.className = 'liactive';
            li.innerHTML = '<span>新建Tab栏</span><span class="iconfont icon-guanbi"></span>';
            var section = document.createElement('section');
            section.className = 'conactive';
            section.innerHTML = '新建Tab内容';
            // 2) 将这两个元素追加到对应区域中
            _that.ul.appendChild(li);
            _that.tabcon.appendChild(section);

            // 3) 刷新事件
            _that.init();
        }

        // 3. 删除功能
        removeTab(e) {
            var e = e || window.event;
            // 阻止冒泡，防止触发点击li的事件
            e.stopPropagation();

            // 1) 获取到当前点击的tab位置
            var index = this.parentNode.index;

            // 2) 移除当前的tab和tab内容
            // this.parentNode.parentNode.removeChild(this.parentNode);
            // _that.tabcon.removeChild(_that.tabcon.children[index]);

            this.parentNode.remove();
            _that.tabcon.children[index].remove();

            // 3) 刷新事件
            _that.init();

            // 4) 选中最后一个tab栏
            // 删除之后还有选中的tab栏
            if(_that.ul.querySelector('.liactive')){
            }else if (_that.ul.children.length > 0) {
                // 清空所有的
                _that.clearClass();
                // 选中最后一个tab
                _that.ul.children[_that.ul.children.length - 1].className = 'liactive';
                // 显示最后一个tab内容
                _that.tabcon.children[_that.tabcon.children.length - 1].className = 'conactive';
            }

        }

        // 4. 修改功能
        editTap() {
            // 双击禁止选用文字
            window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty();
            var text = this.innerHTML;
            this.innerHTML = '<input type="text" value='+text+' />';
            var input = this.querySelector('input');
            // 选中文本框文字
            input.select();
            input.onblur = function() {
                this.parentNode.innerHTML = this.value;
            }
            // 按下回车也可以使用
            input.onkeyup = function(e) {
                if(e.keyCode == 13) {
                    // 手动调用失去焦点事件
                    this.blur();
                }
            }
        }
    }
    new Tab('#tab');
})();

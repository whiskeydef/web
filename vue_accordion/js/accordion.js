// 定义个父组件collapse
Vue.component('Collapse', {
    methods: {
        cut(childId) {
            this.$children.forEach(child => {
                console.log('ci', child._uid);
                if(child._uid !== childId) {
                    child.show = false;
                }
            });
        }
    },
    template: `<div class="wrap">
      <slot></slot>
    </div>`
});
//定义这个子组件collapsItem
Vue.component('CollapseItem', {
    props: ['title'],
    data() {
        return {show: false}
    },
    methods: {
        change() {
            console.log(this._uid);
            this.$parent.cut(this._uid);
            this.show = !this.show;
        }
    },
    // language=HTML format=false
    template: `<div>
      <div class="title" @click="change">{{title}}</div>
      <div v-show="show">
        <slot></slot>
      </div>
    </div>`
});
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{293:function(t,a,e){"use strict";e.r(a);var v=e(14),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue虚拟dom和diff算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue虚拟dom和diff算法"}},[t._v("#")]),t._v(" Vue虚拟DOM和diff算法")]),t._v(" "),a("h2",{attrs:{id:"虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[t._v("#")]),t._v(" 虚拟DOM")]),t._v(" "),a("p",[t._v("虚拟DOM(Virtual DOM)是对DOM的JS抽象表示，它们是"),a("strong",[t._v("JS")]),t._v("对象，能够描述DOM结构和关系。应用 的各种状态变化会作用于虚拟DOM，最终映射到DOM上。")]),t._v(" "),a("h2",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("虚拟DOM轻量、快速:当它们发生变化时通过新旧虚拟DOM比对可以得到最小DOM操作量，配 合异步更新策略减少刷新频率，从而提升性能")]),t._v(" "),a("li",[t._v("跨平台:将虚拟dom更新转换为不同运行时特殊操作实现跨平台")]),t._v(" "),a("li",[t._v("兼容性:还可以加入兼容性代码增强操作的兼容性")])]),t._v(" "),a("h2",{attrs:{id:"必要性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必要性"}},[t._v("#")]),t._v(" 必要性")]),t._v(" "),a("p",[t._v("vue 1.0中有细粒度的数据变化侦测，它是不需要虚拟DOM的，但是细粒度造成了大量开销，这对于大 型项目来说是不可接受的。因此，vue 2.0选择了中等粒度的解决方案，每一个组件一个watcher实例， 这样状态变化时只能通知到组件，再通过引入虚拟DOM去进行比对和渲染。")]),t._v(" "),a("h2",{attrs:{id:"patch实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patch实现"}},[t._v("#")]),t._v(" patch实现")]),t._v(" "),a("p",[t._v("首先进行树级别比较，可能有三种情况:增删改")]),t._v(" "),a("ul",[a("li",[t._v("new VNode不存在就删;")]),t._v(" "),a("li",[t._v("old VNode不存在就增;")]),t._v(" "),a("li",[t._v("都存在就执行diff执行更新")])]),t._v(" "),a("h2",{attrs:{id:"diff算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" diff算法")]),t._v(" "),a("ol",[a("li",[t._v("diff算法是虚拟DOM技术的产物，vue里面实际叫做patch，它的核心实现来自于snabbdom；通过新旧虚拟DOM作对比（即patch），将变化的地方转换为DOM操作")]),t._v(" "),a("li",[t._v("在vue 1中是没有patch的，因为界面中每个依赖都有专门的watcher负责更新，这样项目规模变大就会成为性能瓶颈，vue 2中为了降低watcher粒度，每个组件只有一个watcher，但是当需要更新的时候，怎样才能精确找到发生变化的地方？这就需要引入patch才行。")]),t._v(" "),a("li",[t._v("组件中数据发生变化时，对应的watcher会通知更新并执行其更新函数，它会执行渲染函数获取全新虚拟dom：newVnode，此时就会执行patch比对上次渲染结果oldVnode和新的渲染结果newVnode。")]),t._v(" "),a("li",[t._v("patch过程遵循深度优先、同层比较的策略；两个节点之间比较时，如果它们拥有子节点，会先比较子节点；比较两组子节点时，会假设头尾节点可能相同先做尝试，没有找到相同节点后才按照通用方式遍历查找；查找结束再按情况处理剩下的节点；借助key通常可以非常精确找到相同节点，因此整个patch过程非常高效。")])]),t._v(" "),a("h2",{attrs:{id:"key的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key的作用"}},[t._v("#")]),t._v(" key的作用")]),t._v(" "),a("ol",[a("li",[t._v("key的作用主要是为了更高效的更新虚拟DOM。")]),t._v(" "),a("li",[t._v("vue在patch过程中"),a("strong",[t._v("判断两个节点是否是相同节点是key是一个必要条件")]),t._v("，渲染一组列表时，key往往是唯一标识，所以如果不定义key的话，vue只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个patch过程比较低效，影响性能。")]),t._v(" "),a("li",[t._v("实际使用中在渲染一组列表时key必须设置，而且必须是唯一标识，应该避免使用数组索引作为key，这可能导致一些隐蔽的bug；vue中在使用相同标签元素过渡切换时，也会使用key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。")]),t._v(" "),a("li",[t._v("从源码中可以知道，vue判断两个节点是否相同时主要判断两者的key和元素类型等，因此如果不设置key，它的值就是undefined，则可能永远认为这是两个相同节点，只能去做更新操作，这造成了大量的dom更新操作，明显是不可取的。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);
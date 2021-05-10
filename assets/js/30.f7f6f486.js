(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{452:function(a,s,e){"use strict";e.r(s);var t=e(31),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"移动端开发笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动端开发笔记"}},[a._v("#")]),a._v(" 移动端开发笔记")]),a._v(" "),e("p",[a._v("HTML\n")]),a._v(" "),e("h1",{attrs:{id:"移动端开发笔记-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动端开发笔记-2"}},[a._v("#")]),a._v(" 移动端开发笔记")]),a._v(" "),e("h2",{attrs:{id:"_1-移动端基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-移动端基础"}},[a._v("#")]),a._v(" 1. 移动端基础")]),a._v(" "),e("h3",{attrs:{id:"_1-1-浏览器现状"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-浏览器现状"}},[a._v("#")]),a._v(" 1.1 浏览器现状")]),a._v(" "),e("p",[a._v("兼容移动端主流浏览器，处理Webkit内核浏览器即可。")]),a._v(" "),e("h3",{attrs:{id:"_1-2-手机屏幕现状"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-手机屏幕现状"}},[a._v("#")]),a._v(" 1.2 手机屏幕现状")]),a._v(" "),e("p",[a._v("无需关心分辨率，尺寸单位是px。")]),a._v(" "),e("h2",{attrs:{id:"_2-视口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-视口"}},[a._v("#")]),a._v(" 2. 视口")]),a._v(" "),e("p",[a._v("视口（viewport）就是浏览器显示页面内容的屏幕区域，视口可以分为布局视口、视觉视口和理想视口。")]),a._v(" "),e("h3",{attrs:{id:"_2-1-布局视口-layout-viewport"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-布局视口-layout-viewport"}},[a._v("#")]),a._v(" 2.1 布局视口 layout viewport")]),a._v(" "),e("p",[a._v("ios，安卓一般将视口分辨率设置为980px，所以PC上的网页大多都能在手机上呈现。")]),a._v(" "),e("h3",{attrs:{id:"_2-2-视觉视口-visual-viewport"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-视觉视口-visual-viewport"}},[a._v("#")]),a._v(" 2.2 视觉视口 visual viewport")]),a._v(" "),e("ul",[e("li",[a._v("是用户正在看到的网站的区域")]),a._v(" "),e("li",[a._v("可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。")])]),a._v(" "),e("h3",{attrs:{id:"_2-3-理想视口-ideal-viewport"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-理想视口-ideal-viewport"}},[a._v("#")]),a._v(" 2.3 理想视口 ideal viewport")]),a._v(" "),e("ul",[e("li",[a._v("为了使网站在移动端有最理想的浏览和阅读宽度而设定")]),a._v(" "),e("li",[a._v("理想视口，对设备来讲，是最理想的视口尺寸")]),a._v(" "),e("li",[a._v("需要手动添写meta视口标签通知浏览器操作")]),a._v(" "),e("li",[a._v("meta视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简答理解就是设备有多宽，我们布局的视口就有多宽")])]),a._v(" "),e("h3",{attrs:{id:"_2-4-meta视口标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-meta视口标签"}},[a._v("#")]),a._v(" 2.4 meta视口标签")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<meta name="viewport"\n          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("table",[e("tr",[e("th",[a._v("属性")]),a._v(" "),e("th",[a._v("解释说明")])]),a._v(" "),e("tr",[e("td",[a._v("width")]),a._v(" "),e("td",[a._v("宽度设置的是viewport宽度，可以设置device-width特殊值")])]),a._v(" "),e("tr",[e("td",[a._v("initial-scale")]),a._v(" "),e("td",[a._v("初始缩放比，大于0的数字")])]),a._v(" "),e("tr",[e("td",[a._v("maximum-scale")]),a._v(" "),e("td",[a._v("最大缩放比，大于0的数字")])]),a._v(" "),e("tr",[e("td",[a._v("minimum-scale")]),a._v(" "),e("td",[a._v("最小缩放比，大于0的数字")])]),a._v(" "),e("tr",[e("td",[a._v("user-scalable")]),a._v(" "),e("td",[a._v("用户是否可以缩放，yes或no（1或0）")])])]),a._v(" "),e("h3",{attrs:{id:"_2-5-物理像素与物理像素比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-物理像素与物理像素比"}},[a._v("#")]),a._v(" 2.5 物理像素与物理像素比")]),a._v(" "),e("h3",{attrs:{id:"_2-6-二倍图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-二倍图"}},[a._v("#")]),a._v(" 2.6 二倍图")]),a._v(" "),e("p",[a._v("获得设备像素比后，便可得知设备像素与CSS像素之间的比例。也就是window.devicePixelRatio。")]),a._v(" "),e("p",[a._v("一倍图：当这个比率为1:1时，使用1个设备像素显示1个CSS像素。")]),a._v(" "),e("p",[a._v("二倍图：当这个比率为2:1时，使用4个设备像素显示1个CSS像素，")]),a._v(" "),e("p",[a._v("三倍图：当这个比率为3:1时，使用9（3*3）个设备像素显示1个CSS像素。")]),a._v(" "),e("h3",{attrs:{id:"_2-7-背景缩放-background-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-背景缩放-background-size"}},[a._v("#")]),a._v(" 2.7 背景缩放 background-size")]),a._v(" "),e("p",[a._v("background-size属性规定背景图像的尺寸")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("background-size:背景图片宽度 背景图片高度;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("单位：长度|百分比|cover|contain;")]),a._v(" "),e("li",[a._v("cover把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。")]),a._v(" "),e("li",[a._v("contain把背景图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。")])]),a._v(" "),e("p",[a._v("cover要完全覆盖div盒子，可能后部分背景图片显示不全。")]),a._v(" "),e("p",[a._v("contain当宽度或高度铺满div盒子就不再进行拉伸了。")]),a._v(" "),e("h2",{attrs:{id:"_3-移动端开发选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-移动端开发选择"}},[a._v("#")]),a._v(" 3. 移动端开发选择")]),a._v(" "),e("h3",{attrs:{id:"_3-1-单独制作移动端页面（主流）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-单独制作移动端页面（主流）"}},[a._v("#")]),a._v(" 3.1 单独制作移动端页面（主流）")]),a._v(" "),e("h3",{attrs:{id:"_3-2-响应式页面兼容移动端（其次）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-响应式页面兼容移动端（其次）"}},[a._v("#")]),a._v(" 3.2 响应式页面兼容移动端（其次）")]),a._v(" "),e("h3",{attrs:{id:"_3-3-响应式兼容pc客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-响应式兼容pc客户端"}},[a._v("#")]),a._v(" 3.3 响应式兼容PC客户端")]),a._v(" "),e("h2",{attrs:{id:"_4-移动端技术解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-移动端技术解决方案"}},[a._v("#")]),a._v(" 4. 移动端技术解决方案")]),a._v(" "),e("h3",{attrs:{id:"_4-1-移动端浏览器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-移动端浏览器"}},[a._v("#")]),a._v(" 4.1 移动端浏览器")]),a._v(" "),e("p",[a._v("移动端浏览器基本以webkit内核为主，因此只考虑webkit兼容性问题。\n可以放心使用H5标签和CSS3样式。\n浏览器的私有前缀只需要考虑添加webkit即可。")]),a._v(" "),e("h3",{attrs:{id:"_4-2-css初始化normalize-css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-css初始化normalize-css"}},[a._v("#")]),a._v(" 4.2 CSS初始化normalize.css")]),a._v(" "),e("p",[a._v("移动端CSS初始化推荐使用normalize.css：")]),a._v(" "),e("ul",[e("li",[a._v("Normalize.css：包含了有价值的默认值")]),a._v(" "),e("li",[a._v("Normalize.css：修复了浏览器的bug")]),a._v(" "),e("li",[a._v("Normalize.css：是模块化的")]),a._v(" "),e("li",[a._v("Normalize.css：拥有详细的文档")])]),a._v(" "),e("h3",{attrs:{id:"_4-3-css3盒子模型box-sizing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-css3盒子模型box-sizing"}},[a._v("#")]),a._v(" 4.3 CSS3盒子模型box-sizing")]),a._v(" "),e("p",[a._v("CSS中可以通过box-sizing来指定模型，有2个值：即可指定为content-box、border-box，这样我们计算盒子大小的方式就发生了改变。 可以分成两种：")]),a._v(" "),e("p",[a._v("box-sizing：content-box盒子大小为width+padding+border。\nbox-sizing：border-box 盒子大小为width。")]),a._v(" "),e("h3",{attrs:{id:"_4-4-特殊样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-特殊样式"}},[a._v("#")]),a._v(" 4.4 特殊样式")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/*CSS3盒子模型*/\nbox-sizing: border-box; \n-webkit-box-sizing: border-box;\n/*点击高亮我们需要清除清除设置为transparent 完成透明*/\n-webkit-tap-highlight-color: transparent;\n/*在移动端浏览器默认的外观在ios,上加，上这个属性才能给按钮和输入框自定义样式*/\n-webkit-appearance: none;\n/*禁用长按页面时的弹出菜单*/\nimg,a { -webkit-touch-callout: none; }\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("h2",{attrs:{id:"_5-移动端技术选型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-移动端技术选型"}},[a._v("#")]),a._v(" 5. 移动端技术选型")]),a._v(" "),e("ul",[e("li",[a._v("单独制作移动端页面（主流）\n"),e("ul",[e("li",[a._v("流式布局（百分比布局）")]),a._v(" "),e("li",[a._v("flex弹性布局（强烈推荐）")]),a._v(" "),e("li",[a._v("less+rem+媒体查询布局")]),a._v(" "),e("li",[a._v("混合布局")])])]),a._v(" "),e("li",[a._v("响应式页面兼容移动端（其次）\n"),e("ul",[e("li",[a._v("媒体查询")]),a._v(" "),e("li",[a._v("bootstrap")])])]),a._v(" "),e("li",[a._v("响应式兼容PC客户端")])]),a._v(" "),e("h3",{attrs:{id:"_5-1-流式布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-流式布局"}},[a._v("#")]),a._v(" 5.1 流式布局")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("width: 100%\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("max-width: xpx;\nmin-width: xpx;")]),a._v(" "),e("h2",{attrs:{id:"_6-移动web开发flex布局导读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-移动web开发flex布局导读"}},[a._v("#")]),a._v(" 6. 移动WEB开发flex布局导读")]),a._v(" "),e("p",[a._v("flex弹性布局：")]),a._v(" "),e("ul",[e("li",[a._v("操作方便，布局极为简单，移动端应用很广泛")]),a._v(" "),e("li",[a._v("PC端浏览器支持情况较差")]),a._v(" "),e("li",[a._v("IE11或者更低版本，不支持或仅部分支持")])]),a._v(" "),e("h3",{attrs:{id:"_6-1-布局原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-布局原理"}},[a._v("#")]),a._v(" 6.1 布局原理")]),a._v(" "),e("p",[a._v("flex是flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为flex布局。")]),a._v(" "),e("ul",[e("li",[a._v("当我们为父盒子设为flex布局以后，子元素的float、clear和vertical-align属性将失效。")]),a._v(" "),e("li",[a._v("伸缩布局=弹性布局=伸缩盒布局=弹性盒布局=flex布局")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".parent {\n    display:flex;\n}\n\n.child {\n    flex: 20%;\n    flex: 1;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("p",[a._v("采用Flex布局的元素，称为Flex容器，简称“容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称“项目”。")]),a._v(" "),e("h3",{attrs:{id:"_6-2-常见父项属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-常见父项属性"}},[a._v("#")]),a._v(" 6.2 常见父项属性")]),a._v(" "),e("ul",[e("li",[a._v("flex-direction：设置主轴的方向")]),a._v(" "),e("li",[a._v("justify-content：设置主轴上的子元素排列方式")]),a._v(" "),e("li",[a._v("flex-wrap：设置子元素是否换行")]),a._v(" "),e("li",[a._v("align-center：设置侧轴上的子元素的排列方式（多行）")]),a._v(" "),e("li",[a._v("align-items：设置侧轴上的子元素排列方式（单行）")]),a._v(" "),e("li",[a._v("flex-flow：复合属性，相当于同时设置了flex-direction和flex-wrap")])]),a._v(" "),e("h3",{attrs:{id:"_6-3-设置主轴方向（flex-direction）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-设置主轴方向（flex-direction）"}},[a._v("#")]),a._v(" 6.3 设置主轴方向（flex-direction）")]),a._v(" "),e("p",[a._v("主轴：x轴\n侧轴：y轴")]),a._v(" "),e("ul",[e("li",[a._v("flex-direction：row（默认，由左到右）")]),a._v(" "),e("li",[a._v("flex-direction：row-reverse（由右到左）")]),a._v(" "),e("li",[a._v("flex-direction：column（从上到下）")]),a._v(" "),e("li",[a._v("flex-direction：column-reverse（从下到上）")])]),a._v(" "),e("h3",{attrs:{id:"_6-4-设置主轴上的子元素排列方式（justify-content）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-设置主轴上的子元素排列方式（justify-content）"}},[a._v("#")]),a._v(" 6.4 设置主轴上的子元素排列方式（justify-content）")]),a._v(" "),e("ul",[e("li",[a._v("flex-start：默认值从头部开始，如果主轴是x轴，则从左到右")]),a._v(" "),e("li",[a._v("flex-end：从尾部开始排列")]),a._v(" "),e("li",[a._v("center：在主轴居中对齐（如果主轴是x轴则水平居中）")]),a._v(" "),e("li",[a._v("space-around：平分剩余空间")]),a._v(" "),e("li",[a._v("space-between：先两边贴边，再平分剩余空间（重要）")])]),a._v(" "),e("h3",{attrs:{id:"_6-5-设置子元素是否换行（flex-wrap）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-设置子元素是否换行（flex-wrap）"}},[a._v("#")]),a._v(" 6.5 设置子元素是否换行（flex-wrap）")]),a._v(" "),e("ul",[e("li",[a._v("flex-wrap：no-wrap（默认不换行）")]),a._v(" "),e("li",[a._v("flex-wrap：wrap（换行）")])]),a._v(" "),e("h3",{attrs:{id:"_6-6-设置侧轴子元素排列方式（单行）（align-items）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-设置侧轴子元素排列方式（单行）（align-items）"}},[a._v("#")]),a._v(" 6.6 设置侧轴子元素排列方式（单行）（align-items）")]),a._v(" "),e("ul",[e("li",[a._v("flex-start：从上到下")]),a._v(" "),e("li",[a._v("flex-end：从下到上")]),a._v(" "),e("li",[a._v("center：垂直居中（挤在一起居中）")]),a._v(" "),e("li",[a._v("stretch：拉伸（默认值）")])]),a._v(" "),e("h3",{attrs:{id:"_6-7-设置侧轴子元素排列方式（多行）（align-content）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-设置侧轴子元素排列方式（多行）（align-content）"}},[a._v("#")]),a._v(" 6.7 设置侧轴子元素排列方式（多行）（align-content）")]),a._v(" "),e("p",[a._v("只能用于出现换行（多行）的情况，在单行下是没有效果的")]),a._v(" "),e("ul",[e("li",[a._v("flex-start：从上到下")]),a._v(" "),e("li",[a._v("flex-end：从下到上")]),a._v(" "),e("li",[a._v("center：垂直居中（挤在一起居中）")]),a._v(" "),e("li",[a._v("space-around：子项在侧轴平分剩余空间")]),a._v(" "),e("li",[a._v("space-between：子项在侧轴先分布在两头，再平分剩余空间")]),a._v(" "),e("li",[a._v("stretch：设置子项元素高度平分父元素高度")])]),a._v(" "),e("h3",{attrs:{id:"_6-8-flex-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-flex-flow"}},[a._v("#")]),a._v(" 6.8 flex-flow")]),a._v(" "),e("p",[a._v("flex-flow属性是flwx-direction和flex-wrap属性的复合属性")]),a._v(" "),e("h3",{attrs:{id:"_6-9-控制子项自己在侧轴上的排列方式（align-self）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-9-控制子项自己在侧轴上的排列方式（align-self）"}},[a._v("#")]),a._v(" 6.9 控制子项自己在侧轴上的排列方式（align-self）")]),a._v(" "),e("p",[a._v("align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。")]),a._v(" "),e("h3",{attrs:{id:"_6-10-order属性定义项目的排列顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-10-order属性定义项目的排列顺序"}},[a._v("#")]),a._v(" 6.10 order属性定义项目的排列顺序")]),a._v(" "),e("p",[a._v("数值越小，排列越靠前，默认为0。\n注意：和z-index不一样。")]),a._v(" "),e("h2",{attrs:{id:"_7-背景渐变linear-gradient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-背景渐变linear-gradient"}},[a._v("#")]),a._v(" 7. 背景渐变linear-gradient")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("background: -webkit-linear-gradient(left,red,blue);\nbackground: -webkit-linear-gradient(top left,red,blue);\nbackground: -webkit-linear-gradient(red,blue);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"_8-rem布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-rem布局"}},[a._v("#")]),a._v(" 8. rem布局")]),a._v(" "),e("h3",{attrs:{id:"_8-1-rem单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-rem单位"}},[a._v("#")]),a._v(" 8.1 rem单位")]),a._v(" "),e("p",[a._v("rem是一个相对单位，类似于em，em是父元素字体大小。\n不同的是rem的基准是相对于html元素的字体大小。\n比如，根元素（html）设置font-size=12px;非根元素设置width:2rem;则换成px表示就是24px。")]),a._v(" "),e("h3",{attrs:{id:"_8-2-媒体查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-媒体查询"}},[a._v("#")]),a._v(" 8.2 媒体查询")]),a._v(" "),e("p",[a._v("媒体查询（Media Query）是CSS3新语法。")]),a._v(" "),e("ul",[e("li",[a._v("使用@media查询，可以针对不同的媒体类型定义不同的样式")]),a._v(" "),e("li",[a._v("@media可以针对不同的屏幕尺寸设置不同的样式")]),a._v(" "),e("li",[a._v("重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面")]),a._v(" "),e("li",[a._v("目前针对很多手机、平板等设备都用得到多媒体查询")])]),a._v(" "),e("p",[a._v("语法规范：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@media mediatype and|not|only (media feature){\n    css-code;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("ul",[e("li",[a._v("mediatype：\n"),e("ul",[e("li",[a._v("all：用于所有设备")]),a._v(" "),e("li",[a._v("print：用于打印机和打印预览")]),a._v(" "),e("li",[a._v("screen：用于电脑屏幕，平板电脑，智能手机等")])])])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//这句话的意思是：在我们屏幕上 并且最大的宽度是800像素 设置我们想要的样式\n//max-width小于等于800\n@media screen and (max-width: 800px){\n    body {\n        background-color: pink;\n    }\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("媒体查询引入资源：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"_9-less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-less"}},[a._v("#")]),a._v(" 9. less")]),a._v(" "),e("h3",{attrs:{id:"_9-1-less基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-less基础"}},[a._v("#")]),a._v(" 9.1 less基础")]),a._v(" "),e("p",[a._v("css是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。")]),a._v(" "),e("p",[a._v("Less(Leaner Style Sheets的缩写)是一门CSS扩展语言，也成为CSS预处理器。")]),a._v(" "),e("p",[a._v("作为CSS的一种形式的扩展，它并没有减少CSS的功能，而是在现有的CSS语法上，为CSS加入程序式语言的特性。")]),a._v(" "),e("p",[a._v("它在CSS的语法基础之上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了CSS的编写，并且降低了CSS的维护成本，就像它的名称所说的那样，Less可以让我们用更少的代码做更多的事情。")]),a._v(" "),e("p",[a._v("常见的CSS预处理器：Sass、Less、Stylus。")]),a._v(" "),e("h3",{attrs:{id:"_9-2-less变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-less变量"}},[a._v("#")]),a._v(" 9.2 Less变量")]),a._v(" "),e("p",[a._v("变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@变量名:值;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("变量命名规范：")]),a._v(" "),e("ul",[e("li",[a._v("必须有@为前缀")]),a._v(" "),e("li",[a._v("不能包含特殊字符")]),a._v(" "),e("li",[a._v("不能以数字开头")]),a._v(" "),e("li",[a._v("大小写敏感")])]),a._v(" "),e("h3",{attrs:{id:"_9-3-easy-less插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-easy-less插件"}},[a._v("#")]),a._v(" 9.3 easy less插件")]),a._v(" "),e("p",[a._v("vscode里可以把less转css")]),a._v(" "),e("h3",{attrs:{id:"_9-4-less嵌套"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-less嵌套"}},[a._v("#")]),a._v(" 9.4 less嵌套")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".header {\n    .child {\n        color: pink;\n    }\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("如果遇见（交集|伪类|伪元素选择器）")]),a._v(" "),e("ul",[e("li",[a._v("内层选择器的前面没有&符号，则它被解析为父选择器的后代；")]),a._v(" "),e("li",[a._v("如果有&符号，它就被解析为父元素自身或父元素的伪类。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('.header {\n    .a {\n        &:hover {\n            color: blue;\n        }\n        &::before {\n            content: "";\n        }\n    }\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("h3",{attrs:{id:"_9-5-rem适配方案技术使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-rem适配方案技术使用"}},[a._v("#")]),a._v(" 9.5 rem适配方案技术使用")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("技术方案1")]),a._v(" "),e("ul",[e("li",[a._v("less")]),a._v(" "),e("li",[a._v("媒体查询")]),a._v(" "),e("li",[a._v("rem")])])]),a._v(" "),e("li",[e("p",[a._v("技术方案2（推荐）")]),a._v(" "),e("ul",[e("li",[a._v("flexible.js")]),a._v(" "),e("li",[a._v("rem")])])])]),a._v(" "),e("h3",{attrs:{id:"_9-6-rem适配方案2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-rem适配方案2"}},[a._v("#")]),a._v(" 9.6 rem适配方案2")]),a._v(" "),e("p",[a._v("简洁高效的rem适配方案flexible.js")]),a._v(" "),e("h2",{attrs:{id:"_9-响应式布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-响应式布局"}},[a._v("#")]),a._v(" 9. 响应式布局")]),a._v(" "),e("h3",{attrs:{id:"_9-1-响应式开发原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-响应式开发原理"}},[a._v("#")]),a._v(" 9.1 响应式开发原理")]),a._v(" "),e("p",[a._v("就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。")]),a._v(" "),e("h3",{attrs:{id:"_9-2-响应式布局容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-响应式布局容器"}},[a._v("#")]),a._v(" 9.2 响应式布局容器")]),a._v(" "),e("p",[a._v("响应式需要一个父级作为布局容器，来配合子级元素来实现变化效果。原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。")])])}),[],!1,null,null,null);s.default=r.exports}}]);
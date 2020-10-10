(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{P3y7:function(e,t,s){e.exports=s("rMEE")},rMEE:function(e,t,s){"use strict";s.r(t);var a=s("JFUb"),r=Object(a.a)({data:function(){return{polylines:[{positions:[{lng:105.24884033203125,lat:25.31311798095703,height:1183.3186645507812},{lng:108.24906555725647,lat:30.312892755731806,height:1183.3186645507812}],area:100000.3},{positions:[{lng:109.24884033203125,lat:30.313392639160156,height:1183.804443359375},{lng:112.24906555725632,lat:35.31316741393502,height:1183.684988424182}],area:8000.658},{positions:[{lng:113.24884033203125,lat:35.313655853271484,height:1184.2783203125},{lng:116.24906555725632,lat:40.31343062804635,height:1184.1093236654997}],area:200000.55}]}},methods:{ready:function(e){e.Cesium,e.viewer}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("Label")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Example")]),e._v(" "),e._m(1),e._v(" "),s("h4",[e._v("Preview")]),e._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:e.ready}},[s("vc-collection-primitive-label",[e._l(e.polylines,(function(e,t){return[s("vc-primitive-label",{key:"label"+t,attrs:{position:e.positions[e.positions.length-1],text:"Area: "+(e.area>1e6?(e.area/1e6).toFixed(2)+"km²":e.area.toFixed(2)+"㎡"),showBackground:"",horizontalOrigin:1}})]}))],2)],1)],1)]],2),e._v(" "),s("h4",[e._v("Code")]),e._v(" "),e._m(2),e._v(" "),s("h2",[e._v("Instance Properties")]),e._v(" "),e._m(3),e._v(" "),s("hr"),e._v(" "),e._m(4),e._v(" "),s("h2",[e._v("Events")]),e._v(" "),e._m(5),e._v(" "),s("hr")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-primitive-label")]),this._v(" component is used to load a Label draws viewport-aligned text positioned in the 3D scene. This can only be used as a subcomponent of "),t("code",{pre:!0},[this._v("vc-collection-primitive-label")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("Load labels with "),t("code",{pre:!0},[this._v("vc-primitive-label")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-collection-primitive-label")]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-for")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"(polyline, index) of polylines"')]),e._v(">")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-label")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":position")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"polyline.positions[polyline.positions.length-1]"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":key")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("\"'label'+index\"")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":text")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("\"'Area: '+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')\"")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("showBackground")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":horizontalOrigin")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"1"')]),e._v("\n          >")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-label")]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-collection-primitive-label")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("polylines")]),e._v(": [\n          {\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("positions")]),e._v(": [\n              { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("105.24884033203125")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("25.313117980957031")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("height")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1183.3186645507812")]),e._v(" },\n              { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("108.24906555725647")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("30.312892755731806")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("height")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1183.3186645507812")]),e._v(" }\n            ],\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("area")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("100000.3")]),e._v("\n          },\n          {\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("positions")]),e._v(": [\n              { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("109.24884033203125")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("30.313392639160156")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("height")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1183.804443359375")]),e._v(" },\n              { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("112.24906555725632")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("35.31316741393502")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("height")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1183.6849884241819")]),e._v(" }\n            ],\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("area")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("8000.658")]),e._v("\n          },\n          {\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("positions")]),e._v(": [\n              { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("113.24884033203125")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("35.313655853271484")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("height")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1184.2783203125")]),e._v(" },\n              { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("116.24906555725632")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("40.313430628046348")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("height")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1184.1093236654997")]),e._v(" }\n            ],\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("area")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("200000.55")]),e._v("\n          }\n        ]\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready(cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = cesiumInstance\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("type")]),e._v(" "),s("th",[e._v("default")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("backgroundColor")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[e._v("Array")]),e._v(" "),s("td",[e._v("String")])]),e._v(" "),s("tr",[s("td",[e._v("backgroundPadding")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the background padding, in pixels, of this label. The x value controls horizontal padding, and the y value controls vertical padding. "),s("strong",[e._v("Structure: { x: number, y: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("disableDepthTestDistance")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied.")])]),e._v(" "),s("tr",[s("td",[e._v("distanceDisplayCondition")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the condition specifying at what distance from the camera that this label will be displayed. "),s("strong",[e._v("Structure: { near: number, far: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("eyeOffset")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("{x: 0, y: 0, z: 0}")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets and sets the 3D Cartesian offset applied to this label in eye coordinates. Eye coordinates is a left-handed coordinate system, where x points towards the viewer's right, y points up, and z points into the screen. Eye coordinates use the same scale as world and model coordinates, which is typically meter. "),s("strong",[e._v("Structure{ x: number, y: number, z: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("fillColor")]),e._v(" "),s("td",[e._v("Object|String|Array")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("white")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the fill color of this label.")])]),e._v(" "),s("tr",[s("td",[e._v("font")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("'30px sans-serif'")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("Gets or sets the font used to draw this label. Fonts are specified using the same syntax as the CSS 'font' property.")])]),e._v(" "),s("tr",[s("td",[e._v("heightReference")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the height reference of this billboard. "),s("strong",[e._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),e._v(" "),s("tr",[s("td",[e._v("horizontalOrigin")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the horizontal origin of this label, which determines if the label is drawn to the left, center, or right of its anchor position. "),s("strong",[e._v("CENTER: 0, LEFT: 1, RIGHT: -1")])])]),e._v(" "),s("tr",[s("td",[e._v("id")]),e._v(" "),s("td",[e._v("*")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the user-defined value returned when the label is picked.")])]),e._v(" "),s("tr",[s("td",[e._v("outlineColor")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[e._v("Array")]),e._v(" "),s("td",[e._v("String")])]),e._v(" "),s("tr",[s("td",[e._v("outlineWidth")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the outline width of this label.")])]),e._v(" "),s("tr",[s("td",[e._v("pixelOffset")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("{x: 0, y: 0}")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the pixel offset in screen space from the origin of this label. This is commonly used to align multiple labels and billboards at the same position, e.g., an image and text. The screen space origin is the top, left corner of the canvas; x increases from left to right, and y increases from top to bottom. "),s("strong",[e._v("Structure{ x: number, y: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("pixelOffsetScaleByDistance")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets near and far pixel offset scaling properties of a Label based on the Label's distance from the camera. A label's pixel offset will be scaled between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the label's pixel offset scaling remains clamped to the nearest bound. If undefined, pixelOffsetScaleByDistance will be disabled. "),s("strong",[e._v("Structure{ near: number, nearValue: number, far: number, farValue: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("position")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the Cartesian position of this label. "),s("strong",[e._v("Structure{ lng: number, lat: number, height: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("scale")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the uniform scale that is multiplied with the label's size in pixels. A scale of 1.0 does not change the size of the label; a scale greater than 1.0 enlarges the label; a positive scale less than 1.0 shrinks the label.")])]),e._v(" "),s("tr",[s("td",[e._v("scaleByDistance")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets near and far scaling properties of a Label based on the label's distance from the camera. A label's scale will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the label's scale remains clamped to the nearest bound. If undefined, scaleByDistance will be disabled. "),s("strong",[e._v("Structure { near: number, nearValue: number, far: number, farValue: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("show")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if this label will be shown. Use this to hide or show a label, instead of removing it and re-adding it to the collection.")])]),e._v(" "),s("tr",[s("td",[e._v("showBackground")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if a background behind this label will be shown.")])]),e._v(" "),s("tr",[s("td",[e._v("text")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the text of this label.")])]),e._v(" "),s("tr",[s("td",[e._v("totalScale")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets the total scale of the label, which is the label's scale multiplied by the computed relative size of the desired font compared to the generated glyph size.")])]),e._v(" "),s("tr",[s("td",[e._v("translucencyByDistance")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets near and far translucency properties of a Label based on the Label's distance from the camera. A label's translucency will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the label's translucency remains clamped to the nearest bound. If undefined, translucencyByDistance will be disabled. "),s("strong",[e._v("Structure { near: number, nearValue: number, far: number, farValue: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("verticalOrigin")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the vertical origin of this label, which determines if the label is to the above, below, or at the center of its anchor position. "),s("strong",[e._v("CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1")])])]),e._v(" "),s("tr",[s("td",[e._v("labelStyle")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A Property specifying the LabelStyle. "),s("strong",[e._v("FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Label.html"}},[this._v("Label")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("parameter")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ready")]),e._v(" "),s("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),s("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=92.754fae17139a72497f81.js.map
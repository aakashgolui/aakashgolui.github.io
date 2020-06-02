(this["webpackJsonpcontact-tracing"]=this["webpackJsonpcontact-tracing"]||[]).push([[3],{347:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),r=f(a),i=f(n(20)),l=f(n(6)),s=n(348),c=f(n(349)),u=f(n(350)),d=f(n(351));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,b=0,g=0,y=0,w="data-lazyload-listened",E=[],O=[],N=!1;try{var _=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,_)}catch(A){}var C=!!N&&{capture:!1,passive:!0},k=function(e){var t=i.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,c.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=i.default.findDOMNode(e),o=void 0,a=void 0,r=void 0,l=void 0;try{var s=t.getBoundingClientRect();o=s.top,a=s.left,r=s.height,l=s.width}catch(A){o=v,a=b,r=y,l=g}var c=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,d=Math.max(o,0),f=Math.max(a,0),p=Math.min(c,o+r)-d,m=Math.min(u,a+l)-f,h=void 0,w=void 0,E=void 0,O=void 0;try{var N=n.getBoundingClientRect();h=N.top,w=N.left,E=N.height,O=N.width}catch(A){h=v,w=b,E=y,O=g}var _=h-d,C=w-f,k=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return _-k[0]<=p&&_+E+k[1]>=0&&C-k[0]<=m&&C+O+k[1]>=0}(e,n):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var a=t.getBoundingClientRect();n=a.top,o=a.height}catch(A){n=v,o=y}var r=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=r&&n+o+l[1]>=0}(e))?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},j=function(){O.forEach((function(e){var t=E.indexOf(e);-1!==t&&E.splice(t,1)})),O=[]},M=function(){for(var e=0;e<E.length;++e){var t=E[e];k(t)}j()},D=void 0,L=null,P=function(e){function t(e){p(this,t);var n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return h(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===D||"debounce"===D&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",L,C),(0,s.off)(window,"resize",L,C),L=null),L||(void 0!==this.props.debounce?(L=(0,u.default)(M,"number"===typeof this.props.debounce?this.props.debounce:300),D="debounce"):void 0!==this.props.throttle?(L=(0,d.default)(M,"number"===typeof this.props.throttle?this.props.throttle:300),D="throttle"):L=M),this.props.overflow){var o=(0,c.default)(i.default.findDOMNode(this));if(o&&"function"===typeof o.getAttribute){var a=+o.getAttribute(w)+1;1===a&&o.addEventListener("scroll",L,C),o.setAttribute(w,a)}}else if(0===E.length||n){var r=this.props,l=r.scroll,f=r.resize;l&&(0,s.on)(e,"scroll",L,C),f&&(0,s.on)(window,"resize",L,C)}E.push(this),k(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(i.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",L,C),e.removeAttribute(w)):e.setAttribute(w,t)}}var n=E.indexOf(this);-1!==n&&E.splice(n,1),0===E.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",L,C),(0,s.off)(window,"scroll",L,C))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:r.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(a.Component);P.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},P.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var T=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){p(this,a);var e=m(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+T(t),e}return h(a,n),o(a,[{key:"render",value:function(){return r.default.createElement(P,e,r.default.createElement(t,this.props))}}]),a}(a.Component)}},t.default=P,t.forceCheck=M,t.forceVisible=function(){for(var e=0;e<E.length;++e){var t=E[e];t.visible=!0,t.forceUpdate()}j()}},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(o),r=a.position,i=a.overflow,l=a["overflow-x"],s=a["overflow-y"];if("static"===r&&t)o=o.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,a=void 0,r=void 0,i=void 0,l=void 0,s=function s(){var c=+new Date-i;c<t&&c>=0?o=setTimeout(s,t-c):(o=null,n||(l=e.apply(r,a),o||(r=null,a=null)))};return function(){r=this,a=arguments,i=+new Date;var c=n&&!o;return o||(o=setTimeout(s,t)),c&&(l=e.apply(r,a),r=null,a=null),l}}},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,a;return t||(t=250),function(){var r=n||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(a),a=setTimeout((function(){o=i,e.apply(r,l)}),t)):(o=i,e.apply(r,l))}}},352:function(e,t,n){"use strict";n.r(t);var o=n(7),a=n(8),r=n(10),i=n(9),l=n(0),s=n.n(l),c=n(23),u=n(15),d=n(347),f=n.n(d),p=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).signout=function(){Object(l.setGlobal)({token:"",company:""}),c.a.signout()},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("header",{className:"navbar navbar-expand-md navbar-dark fixed-top home-header",id:"banner"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{className:"navbar-brand",onClick:function(){e.props.history.push("/")}},s.a.createElement(f.a,null,s.a.createElement("img",{src:"".concat("https://aakashgolui.github.io","/assets/images/logo.png"),alt:"logo"}))),s.a.createElement("div",{className:"buttonprt"},s.a.createElement("button",{className:"normal-link",onClick:function(){e.props.history.push("/contactus")}},s.a.createElement("i",{className:"fa fa-phone"}),s.a.createElement("span",null,"Contact Us")),s.a.createElement("button",{onClick:function(){e.props.history.push("/plans")},className:"pricing-btn"},"PRICING"),c.a.isAuthenticated?s.a.createElement("div",{className:"dropdown userListprt"},s.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},s.a.createElement("div",{className:"rounduserprt"},this.global.company.company_name.split("")[0].toUpperCase()),s.a.createElement("span",{className:"headerCompanyName"},this.global.company.company_name)),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown"},s.a.createElement(u.b,{className:"dropdown-item",to:"/dashboard/".concat(this.global.company.company_name.toLowerCase())},s.a.createElement("i",null,s.a.createElement("img",{src:"".concat("https://aakashgolui.github.io","/assets/images/envelop.png")})),"Dashboard"),s.a.createElement(u.b,{className:"dropdown-item",to:"/dashboard/".concat(this.global.company.company_name.toLowerCase(),"/change-pass")},s.a.createElement("i",null,s.a.createElement("img",{src:"".concat("https://aakashgolui.github.io","/assets/images/lock.png")})),"Change Password"),s.a.createElement("a",{className:"dropdown-item",onClick:function(){return e.signout()}},s.a.createElement("i",null,s.a.createElement("img",{src:"".concat("https://aakashgolui.github.io","/assets/images/logout.png")})),"Logout"))):s.a.createElement("button",{className:"sign-btn",onClick:function(){e.props.history.push("/login")}},"SIGN IN"))))}}]),n}(l.Component);t.default=p}}]);
//# sourceMappingURL=3.5cc40084.chunk.js.map
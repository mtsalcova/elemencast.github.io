webpackJsonp([4],{"+UYJ":function(t,e,n){"use strict";function r(t){n("NLOG")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),o=n("NYxO"),a=n("EzWK"),u=n("w6rL"),c={components:{icones:a.b,links:a.d,mainFooter:a.e,conteiner:u.a},computed:i()({},Object(o.c)(["getLinks","getIcons"]))},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"elemencast"}},[n("conteiner"),n("links",{attrs:{items:t.getLinks}}),n("icones",{attrs:{items:t.getIcons}}),n("main-footer")],1)},d=[],f={render:l,staticRenderFns:d},p=f,m=n("VU/8"),v=r,g=m(c,p,!1,v,null,null);e.default=g.exports},"1SMS":function(t,e,n){"use strict";var r={};n.d(r,"set",function(){return f}),n.d(r,"get",function(){return p}),n.d(r,"remove",function(){return m}),n.d(r,"clear",function(){return v});var s={};n.d(s,"log",function(){return y}),n.d(s,"warn",function(){return w}),n.d(s,"error",function(){return O}),n.d(s,"fatal",function(){return x});var i=n("//Fk"),o=n.n(i),a=n("mvHQ"),u=n.n(a),c=n("QmSG"),l=c.a.prefix,d=window.localStorage,f=function(t,e){try{var n=u()(e);return d[""+l+t]=n,o.a.resolve(e)}catch(t){return o.a.reject(t)}},p=function(t,e){try{var n=d[""+l+t];return void 0===n?o.a.resolve(e):o.a.resolve(JSON.parse(n))}catch(t){return o.a.reject(t)}},m=function(t){try{var e=d.removeItem(""+l+t);return o.a.resolve(e)}catch(t){return o.a.reject(t)}},v=function(){try{var t=d.clear();return o.a.resolve(t)}catch(t){return o.a.reject(t)}},g=c.a.prefix,h=0,_=0,b=0,C=0,E=function(t,e,n){var r=void 0!==n?n:"",s=function(e,n){return h+" ["+t+"|"+g+"] "+n};switch(t){case"LOG":return h++,console.log(s(0,e),r);case"WARN":return C++,console.warn(s(0,e),r);case"ERROR":return _++,console.error(s(0,e),r);case"FATAL":throw b++,new Error(s(0,e));default:return console.log(e,r)}},y=function(t,e){return E("LOG",t,e)},w=function(t,e){return E("WARN",t,e)},O=function(t,e){return E("ERROR",t,e)},x=function(t){return E("FATAL",t)};window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;var P=function(t,e){function n(){var t=new Uint8Array(s.frequencyBinCount);s.getByteFrequencyData(t);var e=Math.round(t.length/l);r.clearRect(0,0,i,o);for(var p=0;p<l;p++){var m=t[p*e];d.length<Math.round(l)&&d.push(m),r.fillStyle=c,m<d[p]?r.fillRect(12*p,o- --d[p],a,u):(r.fillRect(12*p,o-m,a,u),d[p]=m),r.fillStyle=f,r.fillRect(12*p,o-m+u,a,o)}requestAnimationFrame(n)}var r=new AudioContext,s=r.createAnalyser();r.createMediaElementSource(t).connect(s),s.connect(r.destination);var i=e.width,o=e.height-2,a=3,u=10,c="#000",l=1e4/90,d=[];r=e.getContext("2d");var f=r.createLinearGradient(0,0,0,300);f.addColorStop(1,"#000"),f.addColorStop(.5,"#000"),f.addColorStop(0,"#000"),n()};n.d(e,!1,function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"a",function(){return P})},"3XPc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),s=n.n(r),i=n("NYxO"),o=n("mGAV"),a={components:{ferramenta:o.e,setaScroll:o.i},computed:s()({},Object(i.c)(["getTools"]))},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ferramentas"}},[n("seta-scroll"),n("div",{staticClass:"square"},t._l(t.getTools,function(t,e){return n("div",{key:e,staticClass:"content"},[n("ferramenta",{attrs:{type:t.type,area:t.area,href:t.href,title:t.title,subtitle:t.subtitle,description:t.description,image:t.image}})],1)}))],1)},c=[],l={render:u,staticRenderFns:c},d=l,f=n("VU/8"),p=f(a,d,!1,null,null,null);e.default=p.exports},"4IZu":function(t,e){},"5/TG":function(t,e,n){"use strict";function r(t){n("xroV")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("mGAV"),i={props:["items"],components:{itemLink:s.g}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"items m__t--s"},t._l(t.items,function(e,r){return n("div",{key:r,staticClass:"item"},[n("item-link",{attrs:{href:e.href,title:e.title}}),r<t.items.length-1?n("div",{staticClass:"pipe"}):t._e()],1)})),n("a",{staticClass:"newsletter m__t--s",attrs:{href:"https://tinyletter.com/elemencast",target:"_blank"}},[t._v("me inscrever na newsletter")])])},a=[],u={render:o,staticRenderFns:a},c=u,l=n("VU/8"),d=r,f=l(i,c,!1,d,null,null);e.default=f.exports},"647L":function(t,e){},"7vD9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={props:["type","area","href","title","subtitle","description","image"]},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[t.type?n("h2",{staticClass:"m__t--s"},[t._v(t._s(t.type))]):t._e(),t.area?n("h4",{staticClass:"m__t--s m__b--xs area"},[t._v(t._s(t.area))]):t._e(),n("a",{staticClass:"link",attrs:{href:t.href}},[t._l(t.title,function(e,r){return t.title.length>1?n("h3",{key:r,staticClass:"title m__t--s"},[t._v(t._s(e))]):n("h3",{staticClass:"title m__t--s"},[t._v(t._s(t.title[0]))])}),t.subtitle?n("h4",{staticClass:"subtitle m__b--m"},[t._v(t._s(t.subtitle))]):t._e(),t.description?n("h5",{staticClass:"description"},[t._v(t._s(t.description))]):t._e(),t.image?n("img",{attrs:{src:t.image,width:"70px"}}):t._e()],2)])},i=[],o={render:s,staticRenderFns:i},a=o,u=n("VU/8"),c=u(r,a,!1,null,null,null);e.default=c.exports},"9Gd7":function(t,e,n){"use strict";function r(t){n("OyYq")}Object.defineProperty(e,"__esModule",{value:!0});var s={props:["href","image","name"],computed:{fileName:function(){var t=this.href.split("/");return t[t.length-1]}}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icone"},[n("div",{staticClass:"icone__item"},[n("div",{staticClass:"icone__item--tip m__b--s"},[t._v(t._s(t.name))]),"download"==t.name?n("a",{attrs:{href:t.href,target:"_blank",download:t.fileName}},[n("img",{attrs:{src:t.image}})]):n("a",{attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.image}})])])])},o=[],a={render:i,staticRenderFns:o},u=a,c=n("VU/8"),l=r,d=c(s,u,!1,l,null,null);e.default=d.exports},"9Q2L":function(t,e,n){"use strict";function r(t){n("Hmgn")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-msg__big"},[t._v("produzido inteiramente com ferramentas livres e gratuitas")]),n("div",{staticClass:"footer-msg__small"},[n("p",[t._v("Luigui Delyer - 2018")]),n("p",{staticClass:"m__l--s"},[t._v("|")]),n("router-link",{staticClass:"m__l--s",attrs:{to:"/ferramentas"}},[t._v("Softwares / Hardwares / Licenças")])],1)])},i=[],o={render:s,staticRenderFns:i},a=o,u=n("VU/8"),c=r,l=u(null,a,!1,c,null,null);e.default=l.exports},Aa3h:function(t,e,n){"use strict";function r(t){n("kBEF")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"seta"})},i=[],o={render:s,staticRenderFns:i},a=o,u=n("VU/8"),c=r,l=u(null,a,!1,c,null,null);e.default=l.exports},CQ9c:function(t,e,n){"use strict";function r(t){n("nhQH")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),o=n("NYxO"),a={props:["id","title","subtitle"],data:function(){return{}},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){},components:{},computed:i()({},Object(o.c)([])),methods:Object(o.b)(["setCurrentEpisode"]),filters:{},watch:{}},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"card m__b--s",attrs:{to:"/episodios/"+t.id}},[n("h3",[t._v(t._s(t.title))]),n("h4",[t._v(t._s(t.subtitle))])])},c=[],l={render:u,staticRenderFns:c},d=l,f=n("VU/8"),p=r,m=f(a,d,!1,p,"data-v-1f92ef11",null);e.default=m.exports},Ebew:function(t,e){},Eo0J:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={props:["downloading"]},s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loading",class:{"loading-pulse":t.downloading}})},i=[],o={render:s,staticRenderFns:i},a=o,u=n("VU/8"),c=u(r,a,!1,null,null,null);e.default=c.exports},Euxk:function(t,e){},EzWK:function(t,e,n){"use strict";var r=n("uECE"),s=n("5/TG"),i=n("9Q2L"),o=n("N7yX"),a=n("MquD");n.d(e,"b",function(){return r.default}),n.d(e,"d",function(){return s.default}),n.d(e,"e",function(){return i.default}),n.d(e,"a",function(){return o.default}),n.d(e,"c",function(){return a.default})},GNpS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),s=n.n(r),i=n("NYxO"),o={props:["src"],mounted:function(){var t=this;this.setPlayer(this.$refs.audio),this.$refs.audio.addEventListener("timeupdate",function(e){return t.setCurrentTime(t.processingTime(e))},!1)},destroyed:function(){return this.setPlayer(null)},methods:s()({},Object(i.b)(["setPlayer","setCurrentTime"]),{processingTime:function(t){var e=Number(),n=Number();return e=Math.floor(t.target.currentTime),n=Math.floor(e/60),n=n>=10?n:"0"+n,e=Math.floor(e%60),e=e>=10?e:"0"+e,n+":"+e}})},a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("audio",{ref:"audio",attrs:{src:t.src,controls:"controls"}})},u=[],c={render:a,staticRenderFns:u},l=c,d=n("VU/8"),f=d(o,l,!1,null,null,null);e.default=f.exports},HYcw:function(t,e){},Hmgn:function(t,e){},Iza1:function(t,e,n){"use strict";function r(t){n("Ebew")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("EzWK"),i={components:{informacoes:s.c}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("informacoes"),n("div",{staticClass:"wrapper wrapper__white"},[n("router-view",{attrs:{name:"content"}})],1)],1),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/static/img/letras-logo.svg"}})])}],u={render:o,staticRenderFns:a},c=u,l=n("VU/8"),d=r,f=l(i,c,!1,d,null,null);e.default=f.exports},MquD:function(t,e,n){"use strict";function r(t){n("HYcw")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),o=n("NYxO"),a=n("mGAV"),u={props:[],data:function(){return{episodio:{titulo:{resumido:"",completo:""},subtitulo:"",participantes:[{foto:"",nome:"",email:"",github:"",twitter:"",minibio:""}],audio:"",texto:""}}},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){},components:{setaScroll:a.i},computed:i()({},Object(o.c)(["getInfoPanel","getCurrentEpisode","getEpisodes"]),{infoStatus:function(){return this.getInfoPanel?(this.setEpisodes(this.$route.params.id),"box--open"):"box--close"},showContent:function(){return this.getInfoPanel?"content--show":"content--hide"},closeIcon:function(){return this.getInfoPanel?"/static/img/close2.svg":"/static/img/close.svg"}}),methods:i()({},Object(o.b)(["setInfoPanel"]),{setEpisodes:function(){if(this.getEpisodes.length>0){var t=this.getCurrentEpisode;return void 0!==t.titulo.completo&&(this.episodio=t),this.episodio}},toggleInfo:function(){if(this.getCurrentEpisode.audio&&void 0!==this.getCurrentEpisode.audio&&""!==this.getCurrentEpisode.audio)return this.getInfoPanel?this.setInfoPanel(!1):this.setInfoPanel(!0)}}),watcher:{getInfoPanel:function(t){t&&this.setEpisodes()}}},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.infoStatus,attrs:{id:"informacoes"}},[n("div",{staticClass:"button small",on:{click:function(e){t.toggleInfo()}}},[n("img",{attrs:{src:t.closeIcon}})]),n("div",{staticClass:"content",class:t.showContent},[n("div",{staticClass:"left"},[t.getInfoPanel?n("seta-scroll"):t._e(),n("div",{staticClass:"square"},[n("h2",{staticClass:"m__b--m"},[t._v(t._s(t.episodio.titulo.completo))]),n("pre",[t._v(t._s(t.episodio.texto))])])],1),n("hr",{staticClass:"line"}),n("div",{staticClass:"right"},[t.getInfoPanel?n("seta-scroll"):t._e(),n("div",{staticClass:"square"},[n("h4",{staticClass:"m__b--s"},[t._v("Participantes desta edição")]),t._l(t.episodio.participantes,function(e,r){return n("div",{key:r,staticClass:"participante"},[n("div",{staticClass:"pessoa m__b--s"},[n("div",{staticClass:"imagem m__r--s"},[n("img",{attrs:{src:e.foto}})]),n("div",{staticClass:"dados"},[n("h2",[t._v(t._s(e.nome))]),n("div",{staticClass:"links"},[n("a",{staticClass:"m__r--s",attrs:{href:"mailto:"+e.email,target:"_blank"}},[t._v("email")]),n("a",{staticClass:"m__r--s",attrs:{href:e.github,target:"_blank"}},[t._v("github")]),n("a",{staticClass:"m__r--s",attrs:{href:e.twitter,target:"_blank"}},[t._v("twitter")])])])]),n("pre",[t._v(t._s(e.minibio))])])}),n("a",{staticClass:"quero-participar m__t--s",attrs:{href:"https://github.com/elemencast/episodios",target:"_blank"}},[t._v("quero participar")])],2)],1)])])},l=[],d={render:c,staticRenderFns:l},f=d,p=n("VU/8"),m=r,v=p(u,f,!1,m,null,null);e.default=v.exports},N7yX:function(t,e,n){"use strict";function r(t){n("647L")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),o=n("NYxO"),a={props:["src"],mounted:function(){this.setAudioStatus("stop"),this.setCurrentTime("00:00")},computed:i()({},Object(o.c)(["getCurrentTime","getAudioStatus","getInfoPanel","getCurrentEpisode"]),{buttonIcon:function(){return"play"===this.getAudioStatus?"/static/img/pause.svg":"/static/img/play.svg"},infoIcon:function(){return this.getInfoPanel?"/static/img/info2.svg":"/static/img/info.svg"},downloadFile:function(){return this.src.split("/")[3]},noEpisode:function(){return this.getCurrentEpisode.audio&&void 0!==this.getCurrentEpisode.audio&&""!==this.getCurrentEpisode.audio?"":"disabled"}}),methods:i()({},Object(o.b)(["setAudioStatus","setCurrentTime","setInfoPanel"]),{toggleAudio:function(){if(this.getCurrentEpisode.audio&&void 0!==this.getCurrentEpisode.audio&&""!==this.getCurrentEpisode.audio)return"play"===this.getAudioStatus?this.setAudioStatus("pause"):this.setAudioStatus("play")},toggleInfo:function(){if(this.getCurrentEpisode.audio&&void 0!==this.getCurrentEpisode.audio&&""!==this.getCurrentEpisode.audio)return this.getInfoPanel?this.setInfoPanel(!1):this.setInfoPanel(!0)}})},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control"},[n("div",{staticClass:"buttons"},[n("div",{staticClass:"button small",class:t.noEpisode,on:{click:function(e){t.toggleInfo()}}},[n("img",{attrs:{src:t.infoIcon}})]),n("div",{staticClass:"button big",class:t.noEpisode,on:{click:function(e){t.toggleAudio()}}},[n("img",{attrs:{src:t.buttonIcon}})]),n("a",{staticClass:"button small",class:t.noEpisode,attrs:{href:t.src,target:"_blank",download:t.downloadFile}},[n("img",{attrs:{src:"/static/img/download.svg"}})])]),n("div",{staticClass:"duration"},[n("div",{staticClass:"currentTime",class:t.noEpisode},[t._v(t._s(t.getCurrentTime))])])])},c=[],l={render:u,staticRenderFns:c},d=l,f=n("VU/8"),p=r,m=f(a,d,!1,p,"data-v-5025ef08",null);e.default=m.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={};n.d(r,"getAll",function(){return E});var s=n("7+uW"),i=n("/ocq"),o=n("NYxO"),a={currentEpisode:{},allEpisodes:[],informationPopup:!1,player:null,canvas:null,currentTime:"00:00",audioStatus:"stop",links:[{href:"/episodios",title:"episódios"},{href:"/sobre",title:"sobre"}],icons:[{href:"https://elemencast.github.io/static/rss.xml",image:"/static/img/feed.svg",name:"feed rss"},{href:"https://open.spotify.com/show/5Chtv58MNINrj6ADC5e8ak?si=7wQaBy4XRnGnqI5SOXpKLQ",image:"/static/img/spotify.svg",name:"spotify"},{href:"https://www.github.com/luiguild",image:"/static/img/github.svg",name:"github"},{href:"https://www.twitter.com/luiguild",image:"/static/img/twitter.svg",name:"twitter"},{href:"https://telegram.me/luiguild",image:"/static/img/telegram.svg",name:"telegram"},{href:"mailto:elemencast@s1x.com.br",image:"/static/img/email.svg",name:"email"},{href:"https://www.instagram.com/luiguild",image:"/static/img/instagram.svg",name:"instagram"},{href:"https://www.facebook.com/luiguild",image:"/static/img/facebook.svg",name:"facebook"}],tools:[{type:"hardware",area:"microfone",href:"https://zoom-na.com/products/field-video-recording/video-recording/zoom-q4-handy-video-recorder",title:["ZOOM Q4"],subtitle:"The Camera for Creators"},{type:"softwares",area:"edição de áudio",href:"http://www.audacityteam.org/",title:["AUDACITY"],subtitle:"Audacity® is free, open source, cross-platform audio software for multi-track recording and editing"},{area:"design",href:"https://gravit.io/",title:["GRAVIT DESIGNER"],subtitle:"A cross-platform design tool for the 21st century"},{area:"edição de texto",href:"https://www.libreoffice.org/",title:["LIBREOFFICE"],subtitle:"Its clean interface and feature-rich tools help you unleash your creativity and enhance your productivity"},{type:"webdev",area:"framework Javascript",href:"http://vuejs.org/",title:["VUEJS"],subtitle:"The progressive JavaScript framework"},{area:"gerência de estados",href:"https://vuex.vuejs.org/",title:["VUEX"],subtitle:"A state management pattern + library for Vue.js applications"},{area:"gerenciador de requisições ajax",href:"https://github.com/axios/axios",title:["AXIOS"],subtitle:"Promise based HTTP client for the browser and node.js"},{area:"webplayer",href:"https://github.com/wayou",title:["WAYOU LIU"],subtitle:"HTML5 Audio Visualizer"},{area:"template engine",href:"http://pugjs.org/",title:["PUGJS"],subtitle:"Robust, elegant, feature rich template engine for Node.js"},{area:"pre-processor css",href:"http://sass-lang.com/",title:["SASS"],subtitle:"CSS with superpowers"},{type:"trilha sonora",href:"http://dig.ccmixter.org/",title:["KARA SQUARE Transmutation","DysfunctionAL Where you are"],subtitle:"DIG CC MIXTER",image:"/static/img/cc.png"}]},u={audioStatus:function(t,e){return t.audioStatus=e,t},player:function(t,e){return t.player=e,t},playerStatus:function(t,e){return t.player&&t.player[e](),t},canvas:function(t,e){return t.canvas=e,t},displayInformation:function(t,e){return t.informationPopup=e,t},currentTime:function(t,e){return t.currentTime=e,t},allEpisodes:function(t,e){return s.a.set(t,"allEpisodes",e)},currentEpisode:function(t,e){var n=t.allEpisodes.reduce(function(t,n,r){return n.id===e&&(t=n),t},{});return s.a.set(t,"currentEpisode",n)}},c=u,l=n("Dd8w"),d=n.n(l),f=n("1SMS"),p=n("QmSG"),m=function(t){switch(t){case"stage":return void 0===p.a.stage||""===p.a.stage||"string"!=typeof p.a.stage?f.b.typeError("Informe a URL correta de stage"):p.a.stage;case"development":return void 0===p.a.development||""===p.a.development||"string"!=typeof p.a.development?f.b.typeError("Informe a URL correta de development"):p.a.development;case"production":default:return void 0===p.a.production||""===p.a.production||"string"!=typeof p.a.production?f.b.typeError("Informe a URL correta de production"):p.a.production}},v=function(t){return void 0===t||"string"!=typeof t?(f.b.typeError("Você precisa informar um level correto para consumir a API"),null):m(t)+"/"},g=v,h=n("mtWM"),_=n.n(h),b=_.a.create({baseURL:g("production"),timeout:1e6}),C=b,E=function(){return C.get("/static/json/episodios.json",{}).then(function(t){return t.data}).then(function(t){return t.episodios.map(function(t,e){return d()({},t,{id:(e+1).toString()})})})},y={episodios:r},w={setAudioStatus:function(t,e){var n=t.commit;n("playerStatus",e),n("audioStatus",e)},setPlayer:function(t,e){return(0,t.commit)("player",e)},setCanvas:function(t,e){return(0,t.commit)("canvas",e)},setCurrentTime:function(t,e){return(0,t.commit)("currentTime",e)},setInfoPanel:function(t,e){return(0,t.commit)("displayInformation",e)},setEpisodes:function(t,e){var n=t.dispatch,r=t.commit;return y.episodios.getAll().then(function(t){r("allEpisodes",t),e&&n("setCurrentEpisode",e)})},setCurrentEpisode:function(t,e){return(0,t.commit)("currentEpisode",e)}},O=w,x={getLinks:function(t){return t.links},getTools:function(t){return t.tools},getIcons:function(t){return t.icons},getCurrentTime:function(t){return t.currentTime},getAudioStatus:function(t){return t.audioStatus},getEpisodes:function(t){return t.allEpisodes.reverse()},getCurrentEpisode:function(t){return t.currentEpisode},getPlayer:function(t){return t.player},getCanvas:function(t){return t.canvas},getInfoPanel:function(t){return t.informationPopup}},P=x,S={state:a,mutations:c,actions:O,getters:P},j={elemencast:S};s.a.use(o.a);var I=new o.a.Store({modules:j});s.a.use(i.a);var A=function(t){return function(){return n("mUJ2")("./"+t+".vue")}},k=new i.a({mode:"hash",routes:[{path:"/sobre",name:"sobre",components:{content:A("pages/sobre")}},{path:"/ferramentas",name:"ferramentas",components:{content:A("pages/ferramentas")}},{path:"/episodios",name:"episodios",components:{content:A("pages/episodios")}},{path:"/episodios/:id",name:"episodio",components:{content:A("pages/episodios")},props:!0},{path:"*",redirect:"/episodios/ultimo"}]});k.beforeEach(function(t,e,n){I.dispatch("setInfoPanel",!1),n()});var R=k,U=n("kk15");s.a.config.productionTip=!0,s.a.config.debug=!0,new s.a({router:R,store:I,render:function(t){return t(U.default)}}).$mount("#app")},NLOG:function(t,e){},OyYq:function(t,e){},OzuR:function(t,e,n){"use strict";function r(t){n("4IZu")}Object.defineProperty(e,"__esModule",{value:!0});var s={props:["href","title"]},i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-link",{attrs:{to:t.href}},[t._v(t._s(t.title))])},o=[],a={render:i,staticRenderFns:o},u=a,c=n("VU/8"),l=r,d=c(s,u,!1,l,null,null);e.default=d.exports},QmSG:function(t,e,n){"use strict";var r={prefix:"ELEMENCAST",development:"http://localhost:8080",stage:"",production:"https://elemencast.github.io"};e.a=r},Qspt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("NYxO"),s={props:["width","height"],mounted:function(){return this.setCanvas(this.$refs.canvas)},methods:Object(r.b)(["setCanvas"])},i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("canvas",{ref:"canvas",attrs:{width:t.width,height:t.height}})},o=[],a={render:i,staticRenderFns:o},u=a,c=n("VU/8"),l=c(s,u,!1,null,null,null);e.default=l.exports},"aLa+":function(t,e,n){"use strict";var r=n("rpOJ"),s=n("m8J4"),i=n("+UYJ"),o=n("3XPc");n.d(e,"d",function(){return r.default}),n.d(e,"b",function(){return s.default}),n.d(e,"a",function(){return i.default}),n.d(e,"c",function(){return o.default})},bf8f:function(t,e){},"gJ/H":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),s=n.n(r),i=n("NYxO"),o={props:["action","buttonIcon"],data:function(){return{}},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){},components:{},computed:s()({},Object(i.c)([]),Object(i.d)({})),methods:s()({},Object(i.b)([])),filters:{},watch:{}},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button",attrs:{click:t.action}},[n("img",{attrs:{src:t.buttonIcon}})])},u=[],c={render:a,staticRenderFns:u},l=c,d=n("VU/8"),f=d(o,l,!1,null,null,null);e.default=f.exports},"jCq+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("NYxO"),s=n("1SMS"),i=n("EzWK"),o=n("mGAV"),a={props:["audio"],mounted:function(){return Object(s.a)(this.getPlayer,this.getCanvas)},components:{controles:i.a,espectro:o.d,audioPlayer:o.a},computed:Object(r.c)(["getPlayer","getCanvas"])},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},[n("controles",{attrs:{src:t.audio}}),n("espectro",{attrs:{width:"111px",height:"305px"}}),n("audio-player",{attrs:{src:t.audio}})],1)},c=[],l={render:u,staticRenderFns:c},d=l,f=n("VU/8"),p=f(a,d,!1,null,null,null);e.default=p.exports},kBEF:function(t,e){},kk15:function(t,e,n){"use strict";function r(t){n("pjUD")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("aLa+"),i={components:{elemencast:s.a}},o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("elemencast")},a=[],u={render:o,staticRenderFns:a},c=u,l=n("VU/8"),d=r,f=l(i,c,!1,d,null,null);e.default=f.exports},m8J4:function(t,e,n){"use strict";function r(t){n("Euxk")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),o=n("NYxO"),a=n("mGAV"),u=n("w6rL"),c={data:function(){return{episodio:{titulo:{resumido:"",completo:""},subtitulo:"",participantes:[],audio:"",texto:""}}},components:{episodioHeader:a.c,episodioCard:a.b,loading:a.h,player:u.b,setaScroll:a.i},created:function(){this.setEpisodes(this.$route.params.id)},computed:i()({},Object(o.c)(["getCurrentEpisode","getEpisodes"]),{downloading:function(){return""===this.episodio.audio}}),methods:i()({},Object(o.b)(["setEpisodes","setCurrentEpisode"]),{setEpisode:function(t){return"ultimo"===t&&this.$router.push("/episodios/"+this.getEpisodes.length),this.setCurrentEpisode(t),this.episodio=this.getCurrentEpisode,void 0===this.episodio.titulo&&(this.episodio={id:"9999",titulo:{resumido:"Episódio fail :(",completo:""},subtitulo:"Tente novamente",participantes:[],audio:"",texto:""}),this.episodio}}),watch:{"$route.params.id":function(t){return this.setEpisode(t)},getEpisodes:function(t){t.length>0&&this.setEpisode(this.$route.params.id)}}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"episodios"}},[t.getEpisodes.length>3&&!this.$route.params.id?n("seta-scroll"):t._e(),t.$route.params.id?n("loading",{attrs:{downloading:t.downloading}}):t._e(),t.$route.params.id?t._e():n("div",{staticClass:"cards square"},t._l(t.getEpisodes,function(t,e){return n("episodio-card",{key:e,attrs:{id:t.id,title:t.titulo.resumido,subtitle:t.subtitulo}})})),t.$route.params.id?n("episodio-header",{attrs:{episodio:t.episodio.id,titulo:t.episodio.titulo.resumido,subtitulo:t.episodio.subtitulo}}):t._e(),t.$route.params.id?n("player",{attrs:{audio:t.episodio.audio}}):t._e()],1)},d=[],f={render:l,staticRenderFns:d},p=f,m=n("VU/8"),v=r,g=m(c,p,!1,v,"data-v-ee200016",null);e.default=g.exports},mGAV:function(t,e,n){"use strict";var r=n("9Gd7"),s=n("OzuR"),i=n("rKUL"),o=n("CQ9c"),a=n("Qspt"),u=n("GNpS"),c=n("7vD9"),l=n("Eo0J"),d=(n("gJ/H"),n("Aa3h"));n.d(e,"f",function(){return r.default}),n.d(e,"g",function(){return s.default}),n.d(e,"c",function(){return i.default}),n.d(e,"b",function(){return o.default}),n.d(e,"d",function(){return a.default}),n.d(e,"a",function(){return u.default}),n.d(e,"e",function(){return c.default}),n.d(e,"h",function(){return l.default}),n.d(e,"i",function(){return d.default})},mUJ2:function(t,e,n){function r(t){var e=s[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var s={"./atoms/audio-player.vue":["GNpS"],"./atoms/episodio-card.vue":["CQ9c"],"./atoms/episodio-header.vue":["rKUL"],"./atoms/espectro.vue":["Qspt"],"./atoms/ferramenta.vue":["7vD9"],"./atoms/icone.vue":["9Gd7"],"./atoms/item-link.vue":["OzuR"],"./atoms/loading.vue":["Eo0J"],"./atoms/round-button.vue":["gJ/H"],"./atoms/seta-scroll.vue":["Aa3h"],"./molecules/controles.vue":["N7yX"],"./molecules/icones.vue":["uECE"],"./molecules/informacoes.vue":["MquD"],"./molecules/links.vue":["5/TG"],"./molecules/main-footer.vue":["9Q2L"],"./organisms/conteiner.vue":["Iza1"],"./organisms/player.vue":["jCq+"],"./pages/elemencast.vue":["kk15"],"./pages/episodios.vue":["HcWT",2],"./pages/ferramentas.vue":["wG7F",1],"./pages/sobre.vue":["crKq",0],"./templates/elemencast.vue":["+UYJ"],"./templates/episodios.vue":["m8J4"],"./templates/ferramentas.vue":["3XPc"],"./templates/sobre.vue":["rpOJ"]};r.keys=function(){return Object.keys(s)},r.id="mUJ2",t.exports=r},nhQH:function(t,e){},pjUD:function(t,e){},rKUL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={props:["episodio","titulo","subtitulo"]},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t.episodio?n("h4",{staticClass:"ep-id"},[t._v("# "+t._s(t.episodio))]):t._e(),t.titulo?n("h1",{staticClass:"m__b--xs"},[t._v(t._s(t.titulo))]):t._e(),t.subtitulo?n("h2",[t._v(t._s(t.subtitulo))]):t._e()])},i=[],o={render:s,staticRenderFns:i},a=o,u=n("VU/8"),c=u(r,a,!1,null,null,null);e.default=c.exports},rpOJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("mGAV"),s={components:{setaScroll:r.i}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sobre"}},[n("seta-scroll"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"square"},[n("h1",[t._v("oi!")]),n("p",[t._v("Que bom que você está aqui!\nO intuito desse podcast é devolver pra comunidade o que\ntenho aprendido com ela durante anos e espero\nfortemente que você me ajude nessa jornada.\nToda semana eu, Luigui Delyer, pretendo trazer\nalguns drops de conteúdo direto sobre diversos assuntos\nrelacionados a Front-end, Javascript, CSS, SASS, Pug,\nHTML5, programação funcional, NodeJS, mapas e GIS,\ndentre outros temas que surgirão no decorrer do caminho.\nMuitos amigos da comunidade também estarão aqui comigo,\nentão pode ficar tranquilo que vem coisa boa pela frente!"),n("br"),t._v("Me ajude a fazer este podcast ficar ainda mais com a cara\nda nossa comunidade, vem trocar ideia comigo e vamos juntos\nmoldar o conteúdo que queremos ter.\nQuero te motivar a criar conteúdo também!\nEntão trata de postar no seu blog ou abrir um canal\nno YouTube. Assim a gente troca conteúdo!"),n("br"),t._v(" "),n("br"),t._v("Esse site foi inteiramente construído com Atomic Design\ne várias outras coisas legais, além do fato de que\ntoda produção do podcast é totalmente feita com\nferramentas gratuitas e/ou open-source. Dá uma olhada\nno link ali em baixo sobre as ferramentas que usei,\ntá tudo listado ali."),n("br"),t._v(" "),n("br"),t._v("Se você encontrou alguma coisa no site que não gostou,\nestou aguardando seu PR :)")])])}],a={render:i,staticRenderFns:o},u=a,c=n("VU/8"),l=c(s,u,!1,null,null,null);e.default=l.exports},uECE:function(t,e,n){"use strict";function r(t){n("bf8f")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("mGAV"),i={props:["items"],components:{icone:s.f}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icones"},t._l(t.items,function(t,e){return n("icone",{key:e,attrs:{name:t.name,href:t.href,image:t.image}})}))},a=[],u={render:o,staticRenderFns:a},c=u,l=n("VU/8"),d=r,f=l(i,c,!1,d,null,null);e.default=f.exports},w6rL:function(t,e,n){"use strict";var r=n("Iza1"),s=n("jCq+");n.d(e,"a",function(){return r.default}),n.d(e,"b",function(){return s.default})},xroV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d6e9d64342e6fdd5022e.js.map
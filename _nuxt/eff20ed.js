(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(t,e,n){"use strict";n.r(e);var l=n(94),r=n(90),o={name:"NavBar",components:{XIcon:l.c,MenuIcon:l.a,UserIcon:l.b,NavBarItem:r.default},data:function(){return{isOpen:!1}}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"fixed w-full z-30 top-0 text-white bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-1"},[l("div",{staticClass:"flex justify-between items-center px-4 py-1 sm:p-0"},[l("nav-bar-item",{attrs:{link:"/"}},[l("div",{staticClass:"flex flex-row items-center"},[l("img",{staticClass:"w-16 h-16 object-cover object-left-top rounded-full ring-2 ring-pink-400",attrs:{src:n(258),alt:"Crush your so-called peer-birds, and be the fastest flamingo in the flock"}}),t._v(" "),l("p",{staticClass:"font-bold text-sm text-pink-600 px-2"},[t._v("\n          Supercalifragilisticexpialdociously...RUN!\n        ")])])]),t._v(" "),l("div",{staticClass:"sm:hidden"},[l("button",{staticClass:"block text-gray-500 hover:text-white focus:text-white focus:outline-none",attrs:{type:"button"},on:{click:function(e){t.isOpen=!t.isOpen}}},[t.isOpen?l("XIcon"):t._e(),t._v(" "),t.isOpen?t._e():l("MenuIcon")],1)])],1),t._v(" "),l("nav",{staticClass:"px-2 pt-2 pb-4 sm:flex sm:items-center text-white sm:p-0",class:t.isOpen?"block":"hidden"},[l("nav-bar-item",{attrs:{link:"/about"}},[t._v("\n      💁‍♀️ About the game\n    ")]),t._v(" "),l("nav-bar-item",{attrs:{link:"/engineering"}},[t._v("\n      👩🏽‍💻 Engineering\n    ")]),t._v(" "),l("nav-bar-item",{attrs:{link:"/challenge"}},[t._v("\n      🦩 Challenge\n    ")]),t._v(" "),l("nav-bar-item",{attrs:{link:"/profile"}},[t._v("\n      Profile\n    ")]),t._v(" "),l("nav-bar-item",{attrs:{link:"/signup"}},[t._v("\n      🏃‍♀️Lets run\n    ")]),t._v(" "),l("LazyAccountDropdown",{staticClass:"hidden sm:block mx-2 sm:ml-8 text-gray-700"}),t._v(" "),l("div",{staticClass:"sm:hidden border-t-2 border-gray-600"},[l("button",{staticClass:"flex items-center mt-2"},[l("UserIcon",{staticClass:"text-pink-50 rounded-full border-2 hover:border-pink-50 border-pink-600 p-2",attrs:{size:"2x"}}),t._v(" "),l("span",{staticClass:"ml-3 font-semibold text-white"},[t._v("Jane Doe")])],1),t._v(" "),t._m(0)])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-gray-100"},[n("a",{staticClass:"block px-4 py-1 hover:bg-pink-400",attrs:{href:"#"}},[t._v("Your Account")]),t._v(" "),n("a",{staticClass:"block px-4 py-1 hover:bg-pink-400",attrs:{href:"#"}},[t._v("Contact us")]),t._v(" "),n("a",{staticClass:"block px-4 py-1 hover:bg-pink-400",attrs:{href:"#"}},[t._v("Logout")])])}],!1,null,"36c5c164",null);e.default=component.exports},125:function(t,e,n){"use strict";n.r(e);var l={name:"GettingStartedBox",props:{title:{type:String,default:"title"},subtitle:{type:String,default:"subtitle"}}},r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},[n("div",{staticClass:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"},[n("a",{staticClass:"flex flex-wrap no-underline hover:no-underline",attrs:{href:"#"}},[n("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[t._v("\n        "+t._s(t.subtitle)+"\n      ")]),t._v(" "),n("div",{staticClass:"w-full font-bold text-xl text-gray-800 px-6"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"text-gray-800 text-base px-6 mb-5"},[t._t("default",[t._v(" info text\n        ")])],2)])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"},[n("div",{staticClass:"flex items-center justify-start"},[n("button",{staticClass:"mx-auto lg:mx-0\n        hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg\n        focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"},[t._v("\n        Action\n      ")])])])}],!1,null,null,null);e.default=component.exports},126:function(t,e,n){"use strict";n.r(e);var l={name:"MainHero",components:{HeroButton:n(45).default}},r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"},[t._m(0),t._v(" "),n("h1",{staticClass:"my-4 text-5xl font-bold leading-tight"},[t._v("\n    Running is more fun, when you can mock your friends!\n  ")]),t._v(" "),t._m(1),t._v(" "),n("hero-button",[t._v("\n    🦩Sign up!\n  ")])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"uppercase tracking-loose w-full"},[t._v("\n    A spoonful of sugar helps the medicine go down "),n("span",{staticClass:"italic text-right text-xs"},[t._v(" - ☂️  Mary Poppins.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"leading-normal text-2xl mb-8"},[n("li",[t._v(" Collect stars.")]),t._v(" "),n("li"),t._v(" Mock your friends."),t._v(" "),n("li",[t._v(" Get in shape.")]),t._v(" "),n("li",[t._v(" Win the prize pool.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroButton:n(45).default})},127:function(t,e,n){"use strict";n.r(e);var l={name:"HeroPageWave",props:{imageUrl:{type:String,default:""},isTop:{type:Boolean,default:!1}}},r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative",class:t.isTop?"-mt-6 lg:-mt-12 lg:-mb-12":"mb-4 lg:mb-8"},[n("img",{attrs:{src:t.imageUrl}})])}),[],!1,null,null,null);e.default=component.exports},128:function(t,e,n){"use strict";n.r(e);var l={name:"MainCallToAction",components:{HeroButton:n(45).default}},r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"container mx-auto text-center py-6 mb-12"},[n("h1",{staticClass:"w-full my-2 text-5xl font-bold leading-tight text-center text-white"},[t._v("\n      Hey you, flamingo, get off the couch!\n    ")]),t._v(" "),t._m(0),t._v(" "),n("h3",{staticClass:"my-4 text-3xl leading-tight"},[t._v("\n      Don't be a laggard. Tie your shoelaces. Join your flock, and RUN.\n    ")]),t._v(" "),n("hero-button",[t._v("\n      🦩 Sign up!\n    ")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mb-4"},[e("div",{staticClass:"h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroButton:n(45).default})},135:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full md:w-3/5 py-6 text-center"},[e("img",{staticClass:"w-full md:w-4/5 z-50",attrs:{src:n(263)}})])}],r=n(57),o={name:"Hero",components:{SideBySideTextPictureCard:n(91).default,PageSectionTitle:r.default}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"pt-24"},[l("div",{staticClass:"container px-3 mx-auto flex flex-wrap flex-column md:flex-row items-center"},[l("main-hero"),t._v(" "),t._m(0)],1)]),t._v(" "),l("hero-page-vawe",{attrs:{"is-top":!0,"image-url":n(260)}}),t._v(" "),l("section",{staticClass:"\n    bg-white\n    border-b\n    py-8"},[l("div",{staticClass:"container max-w-5xl mx-auto m-8"},[l("page-section-title",[t._v("\n        Add the FUN to RUN\n      ")]),t._v(" "),l("side-by-side-text-picture-card",{attrs:{title:"Mock your friends","image-url":n(178)}},[t._v("\n        Show your friends, that you are not the laziest flamingo from the flock.\n        "),l("br"),t._v("\n        You get points for getting off the couch, and running.\n        "),l("br"),t._v("\n        You get points for overtaking your more lazy friends, that stayed on the couch.\n        "),l("br"),t._v("\n        You get the right to mock them, as you run by.\n      ")]),t._v(" "),l("side-by-side-text-picture-card",{attrs:{reverse:!0,title:"Run for the stars","image-url":n(261)}},[t._v("\n        Get ready for some urban exploring.\n        "),l("br"),t._v("\n        Every player in the challenge brings some star locations.\n        "),l("br"),t._v("\n        You get points for running by star locations, and you get more points the larger your star collection becomes.\n      ")])],1)]),t._v(" "),l("section",{staticClass:"bg-white border-b py-8"},[l("page-section-title",[t._v("\n      Join the Running Challenge\n    ")]),t._v(" "),l("div",{staticClass:"container mx-auto flex flex-wrap flex-row pt-4 pb-12"},[l("getting-started-box",{attrs:{title:"Integrated with running apps",subtitle:"Automated point tracking"}},[t._v("\n        You don't have to worry about book keeping.\n        Just use a running app, and all metrics will be collected.\n        At this point, we offer integration with the running app Strava.\n      ")]),t._v(" "),l("getting-started-box",{attrs:{subtitle:"We value privacy",title:"All your data are secure"}},[t._v("\n        We use modern cloud computing, and security mechanisms.\n        "),l("br"),t._v("\n        OAuth 2.0 authentication, together with server side encryption ensures, that your personal data are safe.\n      ")]),t._v(" "),l("getting-started-box",{attrs:{title:"Prize pool",subtitle:"Increase motivation by incentives"}},[t._v("\n        Pay up to the prize pool, it will increase your motivation for running.\n      ")])],1)],1),t._v(" "),l("hero-page-vawe",{attrs:{"is-top":!1,"image-url":n(262)}}),t._v(" "),l("main-call-to-action")],1)}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{MainHero:n(126).default,HeroPageVawe:n(127).default,GettingStartedBox:n(125).default,MainCallToAction:n(128).default})},136:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9"},[e("img",{staticClass:"w-full h-full object-cover object-left-top",attrs:{src:n(178),alt:"Crush your so-called peer-birds, and be the fastest flamingo in the flock"}})])}],r={name:"Leaderboard",components:{PageSectionTitle:n(57).default}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container max-w-5xl mx-auto m-8"},[n("page-section-title",[t._v("\n    Situation overview\n  ")]),t._v(" "),n("h1",[t._v("Events")]),t._v(" "),t._m(0),t._v(" "),n("h1",[t._v("Leaderboard for the Spring 2021 Challenge:")])],1)}),l,!1,null,"80ecc40a",null);e.default=component.exports},137:function(t,e,n){"use strict";n.r(e);var l=n(264),r={name:"Run",data:function(){return{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",icon:null,polyline:{latlngs:[],color:"DeepPink"},center:{lat:41.279736,lng:.723744}}},methods:{initMap:function(){this.setIconStyles(),this.decode()},setIconStyles:function(){this.icon=this.$L.icon({iconUrl:n(265)})},decode:function(){this.polyline.latlngs=l.decode("im}zFkjlCWpADBGHLBCUISIK@FCGKI[e@Om@KUC[EU@CJHCc@GM?Y@@@ABHALHB\\\\GNAPGNSZQf@Af@ICDDA?BNA?HLPXDl@Qb@UHBVn@NVRR`@HJFpBnC^^LXHh@JVVZVBNHdABRD`A@h@C@?C@D?fAe@ZELBPNTFf@A`@JFANDDARJl@p@Pj@HFLAHDHL@NAKDCBVRp@A@JTRTVPZh@BHFD^p@@DCL@RDV?NRLHLLh@HJRh@JNZx@Hp@BH?PCRCEDa@DM@KGQ?QK_@m@{AWw@U_@KW@WKe@O_@MMc@y@gAqAEM?IQ]C?SOIC_@o@IEa@e@_@OMA?@MGC@M?A@E?CDQKm@SKMG?M?GB?AIHOBs@\\\\UA_@DUEI@q@AI@ME_@A_@GC@E?UOIQOs@We@q@y@}@wAIGU]SGIAWMa@k@O]@QDCLWGSIA[Ha@@GBONKDICGKI_@Eu@YaBAUDSHgBHe@@k@TwAH[Hs@b@m@Ty@HMRk@l@}@E?EBGLWRGJ]|@Sv@MTMJEJGZK~@M`@Ij@S|BEz@En@Z`BLfADNHNAHEBIJq@FO?KBc@AWP[DEDUBOFE@OICB?FHHEJ?LCDDFABGCAH@XD`@AL@PDF@LHJ@HDJf@j@DCB@@JABHF?D?CMOm@_@IFE@BHCFO?Qb@MPOx@Iz@FPBA@DAEE@r@R")}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-2xl text-bold text-gray-800"},[t._v("\n    Run\n  ")]),t._v(" "),n("div",{staticClass:"min-w-1/2 w-1/2",staticStyle:{height:"40vw",width:"40vw",overflow:"auto"},attrs:{id:"map-wrap"}},[n("client-only",[n("l-map",{attrs:{zoom:15,center:t.center},on:{ready:t.initMap}},[n("l-tile-layer",{attrs:{url:t.url}}),t._v(" "),n("l-marker",{attrs:{"lat-lng":[t.center.lat,t.center.lng],icon:t.icon}},[n("l-popup",[t._v(" Hello, this is a star on Agatas run from "+t._s(t.center))])],1),t._v(" "),n("l-polyline",{attrs:{"lat-lngs":t.polyline.latlngs,color:t.polyline.color}})],1)],1)],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-xs"},[t._v("\n    Icons made by "),n("a",{attrs:{href:"https://www.freepik.com",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),n("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])])}],!1,null,"727bbf69",null);e.default=component.exports},138:function(t,e,n){"use strict";n.r(e);var l={name:"Card"},r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-1/2 rounded-lg shadow-md m-2 overflow-hidden"},[t._t("default",[n("h1",[t._v("Your content is missing")])])],2)}),[],!1,null,"293506e2",null);e.default=component.exports},177:function(t,e,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("7abdbb3d",content,!0,{sourceMap:!1})},178:function(t,e,n){t.exports=n.p+"img/Overtaking.f13c122.svg"},206:function(t,e,n){"use strict";n(256);var l=n(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar"),t._v(" "),n("Nuxt",{staticClass:"main-container leading-normal tracking-normal text-white gradient font-sans auto-mx"}),t._v(" "),n("footer",{staticClass:"text-center font-mono uppercase"},[t._v("\n    Powered by 🔥 & 🦄. © Mathmagicians, 2021.\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:n(124).default})},209:function(t,e,n){n(210),t.exports=n(211)},256:function(t,e,n){"use strict";n(177)},257:function(t,e,n){var l=n(54)((function(i){return i[1]}));l.push([t.i,".main-container{display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center}.gradient{background:linear-gradient(90deg,#d53369,#daae51)}",""]),t.exports=l},258:function(t,e,n){t.exports=n.p+"img/flamingo.669807f.jpeg"},259:function(t,e){},260:function(t,e,n){t.exports=n.p+"img/hero_art_top.3a3e33a.svg"},261:function(t,e,n){t.exports=n.p+"img/Star.3372d5d.svg"},262:function(t,e,n){t.exports=n.p+"img/hero_art_bottom.22b4c40.svg"},263:function(t,e,n){t.exports=n.p+"img/Super-run.eff87f5.svg"},265:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMnSURBVFiFtdZLjJ5TGAfw3zR0jLSjgukYdelCLFwWJL24LJAYDJ0uSMpKNCFsJS4L1ghRXTRuddmwIBXSpBFiRUkagoku2kXTUKqdVqOuHTOfxfO85p133u/r93395p+cnPf8z3N7n3POc06fzrAC47gDK3MMP2AftuMDHOjQ7klxPl7CFBqldjhbmTuBLRjulfNR/JrGJ/EM1qK/JNOPa3NuMmWP4pZTdb4R/2IGz+GsNnSW4fnUmcL93Tq/OQ38ibuayJyLc5rM3Y2/xJLc1Knzs0UqZ3BPE5mHM8ApPNRE5t60cUhkpm08K9ZxS5P5xWKN/852NLk6vJy2nm7X+VKR9t8w1ETmtjS6De/n961NZJfjeNpcUp08rUbhdgxgq0gdnIE1JfkHst+W/Xo8KDas7L8U2fkF7+G+DPzdJoH+j9fzj9bluB/fmXvWG2l4abZDNfPfml2W9cm9VnVWl4FLsp/IfjWuxEF8mNwxkaHjOb5BHLdio63DVViFz0q2CtstsTujHcjxMH5P7m0MttAdTJlGBlfsoTOT291JAOeVuNWi1jewR2ysKoaxN2X2pU6B5clP1OjNw8cpvKrCLxOXTQOP1eg9kXPbzT/za3Luo6rSohpDX2V/dYU/Jv6QOPdVTGa/N2XLKGx9XaM3D9eJaD+p8H3Yj2lxO47hm2xjyU2nTF9F99O0ubadABbhJ1Fiy4XoijSyC5tEiS2O3Exyu3J8eUlvSNSFA+ozXotNaejJErdS/GH5LXBntvKbYBoXl/SeSv6Fdp3DRfgHR0ShKbBRFKV3MFLiR5KbMPf6XZLBnagE1RbeFJE/2qliCY+nja3dKF8m1u6IuTWhXQyJ0zKFS7sJADaLP3ijC923dLH2VQziR7HLb+xA7/rU+Vl7z7iW2GC2jg+cRJa4ur9PnQ2n6rzAjjS4uQ3ZYtl29Mo5saEOirSOtZAbTZnDojL2FONmHyIrauYvNPswGe+18wJFenea+whdjC9y7sWFcl442pmOXinxryb3OU5fyADgAnE0G3gkWyO5kRZ6PcU1+ENcPNPiyVZ9Pyw4RsXdvz+/u8J/XSLkQ3XyzHgAAAAASUVORK5CYII="},45:function(t,e,n){"use strict";n.r(e);var l={name:"HeroButton"},r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg\n  focus:outline-none focus:shadow-outline\n  transform transition hover:scale-105 duration-300 ease-in-out"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},57:function(t,e,n){"use strict";n.r(e);var l={name:"PageSectionTitle"},r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 text-center"},[t._t("default")],2),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mb-4"},[e("div",{staticClass:"h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"})])}],!1,null,"63c0a496",null);e.default=component.exports},90:function(t,e,n){"use strict";n.r(e);var l={name:"MenuItem",props:{link:{type:String,default:"#"}}},r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{staticClass:"block text-gray- font-semibold rounded hover:bg-gray-400 sm:ml-2 px-2",attrs:{to:t.link}},[t._t("default")],2)}),[],!1,null,"013f0098",null);e.default=component.exports},91:function(t,e,n){"use strict";n.r(e);var l={name:"SideBySideTextPictureCard",props:{title:{type:String,default:"title"},imageUrl:{type:String,default:""},reverse:{type:Boolean,default:!1}}},r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap",class:t.reverse?"md:flex-row-reverse flex-col-reverse":"md:flex-row flex-col"},[n("div",{staticClass:"w-5/6 sm:w-1/2 p-8"},[n("h3",{staticClass:"text-3xl text-gray-800 font-bold leading-none mb-3"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"text-gray-600 my-8"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"w-full sm:w-1/2 p-6 mt-6"},[n("img",{attrs:{src:t.imageUrl}})])])}),[],!1,null,"74dc792f",null);e.default=component.exports}},[[209,8,1,9]]]);
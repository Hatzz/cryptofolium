(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],d=0,g=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&g.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(g.length)g.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},2784:function(e,t,n){e.exports=n.p+"img/coingecko.40639979.svg"},"387e":function(e,t,n){e.exports=n.p+"img/github.1bb02710.svg"},"45f3":function(e,t,n){"use strict";n("da08")},"54f3":function(e,t,n){e.exports=n.p+"img/x.eae35b4b.svg"},"553a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"max-w-2xl mx-auto",attrs:{id:"app"}},[n("router-view")],1)},r=[],o=n("5530"),s=n("1da1"),c=(n("96cf"),n("2f62")),l={beforeMount:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.getCoinListFromLocalStorage(),e.$store.state.coins.coinList){t.next=4;break}return t.next=4,e.getCoinList();case 4:return e.getCoinsFromLocalStorage(),t.next=7,e.updateCoinMarkets();case 7:e.getHoldingsFromLocalStorage();case 8:case"end":return t.stop()}}),t)})))()},methods:Object(o["a"])({},Object(c["b"])({getCoinListFromLocalStorage:"coins/getCoinListFromLocalStorage",getHoldingsFromLocalStorage:"holdings/getHoldingsFromLocalStorage",getCoinsFromLocalStorage:"coins/getCoinsFromLocalStorage",updateCoinMarkets:"coins/updateCoinMarkets",getCoinList:"coins/getCoinList"}))},u=l,d=n("2877"),g=Object(d["a"])(u,i,r,!1,null,null,null),m=g.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col"},[e._m(0),a("h1",{staticClass:"text-4xl text-gray-50 py-12 text-center"},[e._v("$"+e._s(e.holdingsValue))]),e._l(e.holdings,(function(t,n){return a("Holding",{key:n,attrs:{openHolding:e.openHolding,id:n},on:{open:function(t){e.openHolding=t}}})})),a("div",{staticClass:"flex justify-between items-center p-4"},[0!==Object.keys(e.holdings).length?a("button",{staticClass:"btn bg-blue-500 text-gray-50",on:{click:e.updateHoldingMarkets}},[e._v("Update coins")]):e._e(),a("router-link",{staticClass:"ml-auto",attrs:{to:{name:"Search"}}},[a("img",{staticClass:"bg-gray-800 p-3 w-11 rounded-full",attrs:{src:n("8a37"),alt:""}})])],1)],2)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"absolute flex"},[a("a",{attrs:{href:"https://www.coingecko.com/en/api",target:"_blank"}},[a("img",{staticClass:"w-12 p-2",attrs:{src:n("2784"),alt:"Coingecko"}})]),a("a",{attrs:{href:"https://github.com/Hatzz/cryptofolium/",target:"_blank"}},[a("img",{staticClass:"w-12 p-2",attrs:{src:n("387e"),alt:"github"}})])])}],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.openHolding===e.id?"bg-gray-800":""},[a("div",{staticClass:"flex items-center p-2",on:{click:e.openMenu}},[a("img",{staticClass:"w-8",attrs:{src:e.coins[e.id].image.large,alt:e.coins[e.id].name+" logo"}}),a("div",{staticClass:"flex-grow px-2 py-1"},[a("div",{staticClass:"flex justify-between"},[a("h3",{staticClass:"font-semibold text-gray-50"},[e._v(e._s(e.coins[e.id].name))]),a("h3",{staticClass:"font-semibold text-gray-50"},[e._v("$"+e._s((e.holdings[e.id]*e.markets[e.id].current_price).toFixed(1)))])]),a("div",{staticClass:"flex justify-between"},[a("h4",{staticClass:"font-light text-gray-100"},[e._v("$"+e._s(e.markets[e.id].current_price.toFixed(4)))]),a("h4",{staticClass:"font-light text-gray-100 uppercase"},[e._v(e._s(e.holdings[e.id])+" "+e._s(e.coins[e.id].symbol))])])]),a("div",{staticClass:"flex flex-col py-1"},[null!==e.markets[e.id].price_change_percentage_24h?a("p",{class:"font-semibold "+e.percentageChangeColor},[e._v(e._s(e.markets[e.id].price_change_percentage_24h.toFixed(1))+"%")]):e._e(),a("p",{staticClass:"font-light text-gray-100"},[e._v(" "+e._s((e.holdings[e.id]*e.markets[e.id].current_price/e.holdingsValue*100).toFixed(1))+"% ")])])]),e.openHolding===e.id?a("div",{staticClass:"flex flex-col"},[e.edit?a("input",{directives:[{name:"model",rawName:"v-model",value:e.holding,expression:"holding"}],staticClass:"flex-grow p-1 bg-gray-700 rounded-md text-gray-50 mx-4",attrs:{type:"number"},domProps:{value:e.holding},on:{input:function(t){t.target.composing||(e.holding=t.target.value)}}}):e._e(),a("div",{staticClass:"flex justify-between p-4 items-center"},[e.edit?e._e():a("button",{staticClass:"bg-blue-500 btn text-gray-50",on:{click:function(t){e.edit=!0}}},[e._v("Edit")]),e.edit?a("div",[a("button",{staticClass:"btn bg-green-500 text-gray-50 mr-4",on:{click:e.save}},[e._v("Save")]),a("button",{staticClass:"btn bg-gray-500 text-gray-200",on:{click:e.cancelEdit}},[e._v("Cancel")])]):e._e(),a("button",{on:{click:function(t){return e.deleteHolding(e.id)}}},[a("img",{attrs:{src:n("c637"),alt:"delete holding"}})])])]):e._e()])},v=[],_=(n("a9e3"),{name:"Holding",data:function(){return{edit:!1,holding:void 0}},props:{id:String,openHolding:String},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])({deleteHolding:"holdings/deleteHolding",updateHolding:"holdings/updateHolding"})),{},{openMenu:function(){this.openHolding===this.id?this.$emit("open",""):(this.edit=!1,this.$emit("open",this.id))},cancelEdit:function(){this.holding=this.holdings[this.id],this.edit=!1},save:function(){this.updateHolding({id:this.id,amount:Number(this.holding)}),this.edit=!1,this.menu=!1}}),mounted:function(){this.holding=this.holdings[this.id]},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["d"])("coins",{coins:"coins",markets:"markets"})),Object(c["d"])("holdings",{holdings:"holdings"})),Object(c["c"])("holdings",{holdingsValue:"holdingsValue"})),{},{percentageChangeColor:function(){var e="text-red-400",t="text-green-400",n="text-gray-400",a=this.markets[this.id].price_change_percentage_24h;return a<0?e:a>0?t:n}})}),x=_,k=(n("45f3"),Object(d["a"])(x,b,v,!1,null,"f0ce0cfe",null)),C=k.exports,O={name:"Home",components:{Holding:C},data:function(){return{openHolding:""}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])({updateHoldingMarkets:"coins/updateHoldingMarkets",deleteHoldings:"holdings/deleteHoldings"})),{},{update:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateHoldingMarkets();case 2:case"end":return t.stop()}}),t)})))()},removeHoldings:function(){this.deleteHoldings()}}),computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["d"])("coins",{coinList:"coinList",coins:"coins",markets:"markets"})),Object(c["d"])("holdings",{holdings:"holdings"})),Object(c["c"])("holdings",{holdingsValue:"holdingsValue"}))},w=O,j=Object(d["a"])(w,f,h,!1,null,"4f135969",null),y=j.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.selectedCoin?e._e():n("h1",{staticClass:"text-4xl text-center text-gray-50"},[e._v("New Holding")]),e.selectedCoin?n("NewHolding",{attrs:{coinId:e.selectedCoin},on:{add:function(t){e.selectedCoin=void 0}}}):e._e(),n("Search",{on:{select:function(t){e.selectedCoin=t}}})],1)},H=[],L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"p-4 flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"flex-grow p-1 bg-gray-800 rounded-md text-gray-50",attrs:{type:"text"},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},e.searchCoins]}}),a("router-link",{staticClass:"ml-2 flex",attrs:{to:{name:"Home"}}},[a("img",{staticClass:"w-4",attrs:{src:n("54f3"),alt:"close"}})])],1),e._l(e.searchedCoins,(function(t){return a("div",{key:t,staticClass:"flex items-center p-2",on:{click:function(n){return e.handleClick(t)}}},[a("img",{staticClass:"w-8",attrs:{src:e.markets[t].image,alt:e.markets[t].name}}),a("div",{staticClass:"flex-grow px-2 py-1"},[a("div",{staticClass:"flex justify-between"},[a("h3",{staticClass:"font-semibold text-gray-50"},[e._v(e._s(e.markets[t].name))]),a("h3",{staticClass:"font-semibold text-gray-50"},[e._v("#"+e._s(e.markets[t].market_cap_rank))])]),a("div",{staticClass:"flex justify-between"},[a("h4",{staticClass:"font-light text-gray-100 uppercase"},[e._v(e._s(e.markets[t].symbol))]),a("h4",{staticClass:"font-light text-gray-100"},[e._v("$"+e._s(e.markets[t].current_price))])])])])}))],2)},E=[],T=(n("5319"),n("ac1f"),n("841c"),n("b0c0"),n("fb6a"),n("d81d"),n("31d5")),I=n.n(T),M={name:"Search",data:function(){return{search:"",searchedCoins:[]}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])({getMarkets:"coins/getMarkets",getCoin:"coins/getCoin"})),{},{largeToSmallImage:function(e){return e.replace("large","thumb_2x")},handleClick:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getCoin(e);case 2:t.$emit("select",e);case 3:case"end":return n.stop()}}),n)})))()},searchCoins:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.search.length>=3?(clearTimeout(e.timer),e.timer=setTimeout(Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.coinList,a=n.sort((function(t,n){return I()(t.name.toLowerCase(),e.search.toLowerCase())-I()(n.name.toLowerCase(),e.search.toLowerCase())})),i=a.slice(0,9),r=i.map((function(e){return e.id})),t.next=6,e.getMarkets(r);case 6:r.sort((function(t,n){return null===e.markets[t].market_cap_rank&&e.markets[n].market_cap_rank||null===e.markets[t].market_cap_rank&&null===e.markets[n].market_cap_rank?1:e.markets[t].market_cap_rank-e.markets[n].market_cap_rank})),e.searchedCoins=r;case 8:case"end":return t.stop()}}),t)}))),3e3)):e.searchedCoins=[];case 1:case"end":return t.stop()}}),t)})))()}}),computed:Object(o["a"])({},Object(c["d"])("coins",{coinList:"coinList",markets:"markets"}))},N=M,R=Object(d["a"])(N,L,E,!1,null,"697828c2",null),F=R.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex justify-center items-center p-4"},[n("img",{staticClass:"w-16",attrs:{src:e.coins[e.coinId].image.large,alt:e.coins[e.coinId].name+" logo"}}),n("h1",{staticClass:"text-4xl text-gray-50"},[e._v(e._s(e.coins[e.coinId].name))])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.coinAmount,expression:"coinAmount"}],staticClass:"mx-4 flex-grow p-1 bg-gray-800 rounded-md text-gray-50 placeholder-gray-500",attrs:{type:"number",placeholder:"Holding amount"},domProps:{value:e.coinAmount},on:{input:function(t){t.target.composing||(e.coinAmount=t.target.value)}}}),n("button",{staticClass:"text-gray-50 bg-green-500 rounded-md py-2 mx-4 mt-4",on:{click:e.newHolding}},[e._v("Add coin")])])},D=[],A={name:"NewHolding",props:{coinId:String},data:function(){return{coinAmount:void 0}},computed:Object(o["a"])({},Object(c["d"])("coins",{coins:"coins",markets:"markets"})),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])({addHolding:"holdings/addHolding"})),{},{newHolding:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.addHolding({id:e.coinId,amount:Number(e.coinAmount)});case 2:e.$emit("add"),e.$router.push({name:"Home"});case 4:case"end":return t.stop()}}),t)})))()}})},P=A,G=(n("c4bd"),Object(d["a"])(P,$,D,!1,null,"2967bb39",null)),V=G.exports,J={name:"SearchCoins",components:{Search:F,NewHolding:V},data:function(){return{selectedCoin:void 0}}},K=J,z=Object(d["a"])(K,S,H,!1,null,null,null),U=z.exports;a["a"].use(p["a"]);var q=[{path:"/",name:"Home",component:y},{path:"/search",name:"Search",component:U}],B=new p["a"]({mode:"history",base:"/",routes:q}),Q=B,W=n("ade3"),X=(n("b64b"),n("13d5"),n("2edf")),Y=n.n(X),Z=new Y.a,ee={coinList:[],coins:{},markets:{}};function te(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ne(e){var t=localStorage.getItem(e);return JSON.parse(t)}var ae={SET_COIN_LIST:function(e,t){e.coinList=t,te("coinList",e.coinList)},SET_COIN:function(e,t){e.coins=Object(o["a"])(Object(o["a"])({},e.coins),{},Object(W["a"])({},t.id,t)),te("coins",e.coins)},SET_COINS:function(e,t){e.coins=Object(o["a"])({},t)},SET_MARKET:function(e,t){e.markets=Object(o["a"])(Object(o["a"])({},e.markets),{},Object(W["a"])({},t.id,t)),te("markets",e.markets)},SET_MARKETS:function(e,t){e.markets=Object(o["a"])(Object(o["a"])({},e.markets),t),te("markets",e.markets)}},ie={},re={getCoinList:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.coins.list();case 2:n=t.sent.data,e.commit("SET_COIN_LIST",n);case 4:case"end":return t.stop()}}),t)})))()},getCoin:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.state.coins[t]){n.next=7;break}return n.next=3,Z.coins.fetch(t,{tickers:!1,market_data:!1,community_data:!1,developer_data:!1,localization:!1});case 3:a=n.sent.data,i={id:a.id,name:a.name,symbol:a.symbol,image:a.image,rank:a.coingecko_rank},e.dispatch("getMarket",t),e.commit("SET_COIN",i);case 7:case"end":return n.stop()}}),n)})))()},updateHoldingMarkets:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object.keys(e.rootState.holdings.holdings),t.next=3,e.dispatch("getMarkets",n);case 3:case"end":return t.stop()}}),t)})))()},updateCoinMarkets:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object.keys(e.state.coins),t.next=3,e.dispatch("getMarkets",n);case 3:case"end":return t.stop()}}),t)})))()},getMarkets:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Z.coins.markets({ids:t});case 2:a=n.sent.data,i=a.reduce((function(e,t){return e[t.id]=t,e}),{}),e.commit("SET_MARKETS",i);case 5:case"end":return n.stop()}}),n)})))()},getMarket:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Z.coins.markets({id:t});case 2:a=n.sent.data[0],e.commit("SET_MARKET",a);case 4:case"end":return n.stop()}}),n)})))()},getCoinsFromLocalStorage:function(e){var t=ne("coins");e.commit("SET_COINS",t)},getMarketsFromLocalStorage:function(e){var t=ne("markets");e.commit("SET_MARKETS",t)},getCoinListFromLocalStorage:function(e){var t=ne("coinList");e.commit("SET_COIN_LIST",t)}},oe={namespaced:!0,state:ee,mutations:ae,getters:ie,actions:re},se=(n("b680"),{holdings:{}});function ce(e){var t=JSON.stringify(e);localStorage.setItem("holdings",t)}function le(){var e=localStorage.getItem("holdings");return JSON.parse(e)}var ue={SET_HOLDING:function(e,t){e.holdings=Object(o["a"])(Object(o["a"])({},e.holdings),{},Object(W["a"])({},t.id,t.amount)),ce(e.holdings)},DELETE_HOLDING:function(e,t){a["a"].delete(e.holdings,t),ce(e.holdings)},SET_HOLDINGS:function(e,t){e.holdings=Object(o["a"])({},t)},DELETE_HOLDINGS:function(e){a["a"].set(e,"holdings",{}),ce(e.holdings)}},de={holdingsValue:function(e,t,n){return Object.keys(e.holdings).reduce((function(t,a){return n.coins.markets[a]?t+e.holdings[a]*n.coins.markets[a].current_price:0}),0).toFixed(0)}},ge={addHolding:function(e,t){e.commit("SET_HOLDING",t)},updateHolding:function(e,t){e.commit("SET_HOLDING",t)},deleteHolding:function(e,t){e.commit("DELETE_HOLDING",t)},deleteHoldings:function(e){e.commit("DELETE_HOLDINGS")},getHoldingsFromLocalStorage:function(e){var t=le();e.commit("SET_HOLDINGS",t)}},me={namespaced:!0,state:se,mutations:ue,getters:de,actions:ge};a["a"].use(c["a"]);var pe=new c["a"].Store({state:{},mutations:{},actions:{},modules:{coins:oe,holdings:me}});n("a766");a["a"].config.productionTip=!1,new a["a"]({router:Q,store:pe,render:function(e){return e(m)}}).$mount("#app")},"8a37":function(e,t,n){e.exports=n.p+"img/plus.94e9bf6c.svg"},a766:function(e,t,n){},c4bd:function(e,t,n){"use strict";n("553a")},c637:function(e,t,n){e.exports=n.p+"img/trash.088f3635.svg"},da08:function(e,t,n){}});
//# sourceMappingURL=app.16875503.js.map
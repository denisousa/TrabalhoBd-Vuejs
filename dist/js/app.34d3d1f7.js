(function(t){function a(a){for(var s,n,c=a[0],l=a[1],o=a[2],v=0,u=[];v<c.length;v++)n=c[v],i[n]&&u.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(u.length)u.shift()();return r.push.apply(r,o||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,c=1;c<e.length;c++){var l=e[c];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"03dd":function(t,a,e){"use strict";var s=e("5758"),i=e.n(s);a["default"]=i.a},"0b70":function(t,a,e){"use strict";var s=e("1423"),i=e.n(s);i.a},1423:function(t,a,e){},1940:function(t,a,e){"use strict";var s=e("19e1"),i=e.n(s);a["default"]=i.a},"19e1":function(t,a){$(document).ready(function(){$(".slider").slider({height:600,indicators:!1,interval:3500,duration:600})}),$(document).ready(function(){$(".tabs").tabs()})},"2bd6":function(t,a){t.exports="data:image/png;base64,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"},"2d5a":function(t,a,e){t.exports=e.p+"img/background5.70e0c933.jpg"},4212:function(t,a,e){},4683:function(t,a,e){"use strict";var s=e("6456"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("Slider"),e("Quemsomos"),e("Recomendadosdia"),e("Listareceitasmin"),e("Footer")],1)},c=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{role:"navigation"}},[e("div",{staticClass:"nav-wrapper container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v("CookChef")]),e("ul",{staticClass:"right hide-on-med-and-down"},[e("li",[e("router-link",{attrs:{to:"/cadastro"}},[t._v("Cadastre-se")])],1),e("li",[e("router-link",{attrs:{to:"/login"}},[t._v("Logar")])],1)]),e("ul",{staticClass:"sidenav",attrs:{id:"nav-mobile"}},[e("li",[e("router-link",{attrs:{to:"/cadastro"}},[t._v("Cadastre-se")])],1),e("li",[e("router-link",{attrs:{to:"/login"}},[t._v("Logar")])],1)]),e("router-link",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"nav-mobile"}},[e("i",{staticClass:"material-icons"},[t._v("menu")])])],1)])])},o=[],d=e("2877"),v={},u=Object(d["a"])(v,l,o,!1,null,null,null),p=u.exports,m=e("89fb"),f=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("h4",[t._v("Quem somos?")]),e("hr")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 m4"},[e("div",{staticClass:"icon-block"},[e("h2",{staticClass:"center color-default"},[e("i",{staticClass:"fab fa-leanpub"})]),e("h5",{staticClass:"center"},[t._v("Local de Aprendizado sobre receitas")]),e("p",{staticClass:"light"},[t._v("Todos são capazes de compartilhar várias receitas de um mesmo prato de comida.")])])]),e("div",{staticClass:"col s12 m4"},[e("div",{staticClass:"icon-block"},[e("h2",{staticClass:"center color-default"},[e("i",{staticClass:"fas fa-smile-beam"})]),e("h5",{staticClass:"center"},[t._v("Compartilhameto de Conhecimento")]),e("p",{staticClass:"light"},[t._v("Você pode colocar nests site as receitas que você quer que todos saibam.")])])]),e("div",{staticClass:"col s12 m4"},[e("div",{staticClass:"icon-block"},[e("h2",{staticClass:"center color-default"},[e("i",{staticClass:"fas fa-utensils"})]),e("h5",{staticClass:"center"},[t._v("Desenvolvimento como chefe de cozinha")]),e("p",{staticClass:"light"},[t._v("Aprenda os melhores pratos para ser o melhor dos chefes de cozinha")])])])])])])])}],h={},_=Object(d["a"])(h,f,C,!1,null,null,null),b=_.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"section"},[e("div",{staticClass:"row"},[e("ul",t._l(t.receitas,function(a){return e("li",{key:a.id},[e("div",{staticClass:"col s12 m6 l4 center"},[t._m(1,!0),e("div",{staticClass:"card"},[e("div",{staticClass:"card-image waves-effect waves-block waves-light"},[e("img",{staticClass:"activator image-card-size",attrs:{src:a.img}})]),e("div",{staticClass:"card-content"},[e("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(t._s(a.nome))]),e("p",[t._v("Calorias: "+t._s(a.calorias)+" (cal)")]),e("br")]),e("div",{staticClass:"card-reveal"},[e("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("\n                      "+t._s(a.nome)+"\n                      "),e("i",{staticClass:"material-icons right"},[t._v("close")])]),e("p",[t._v("Calorias: "+t._s(a.calorias)+" minutos")])])])])])}),0)])])])]),t._m(2)])},x=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("h4",[t._v("Lista de ingredientes")]),e("hr")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"parallax-container valign-wrapper"},[s("div",{staticClass:"section no-pad-bot"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row center"},[s("h5",{staticClass:"header col s12 light"},[t._v("Não perca a oportunidade de se torna um grnade chefe de cozinha.")])])])]),s("div",{staticClass:"parallax"},[s("img",{attrs:{src:e("5c2a"),alt:"Unsplashed background img 3"}})])])}],w=e("bc3a"),A=e.n(w),k=A.a.create({baseURL:"https://sistema-receitas-back.herokuapp.com/"}),y={salvar:function(t){return k.post("addReceita",t)},atualizar:function(t){return k.put(t)},listar:function(){return k.get("getReceitas")},apagar:function(t){return k.delete("removeReceita",{data:t})},listarIngrediente:function(){return k.get("getingredientes")}},E={data:function(){return{receitas:[]}},mounted:function(){var t=this;y.listarIngrediente().then(function(a){console.log(a.data),t.receitas=a.data})}},O=E,N=(e("0b70"),Object(d["a"])(O,g,x,!1,null,null,null)),R=N.exports,j=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"section"},[s("div",{staticClass:"row"},[s("ul",t._l(t.receitas,function(a){return s("li",{key:a.id},[s("div",{staticClass:"col s12 m6 l4 center card-receita"},[t._m(1,!0),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator image-card-size",attrs:{src:a.imgs}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(t._s(a.nome))]),s("p",{staticClass:"left"},[s("img",{staticClass:"icon-info-time",attrs:{src:e("cc06"),alt:""}}),t._v("\n                      : "+t._s(a.tempo_preparo)+" min\n                    ")]),s("p",{staticClass:"right"},[s("img",{staticClass:"icon-info-porcao",attrs:{src:e("c9eb"),alt:""}}),t._v("\n                      : "+t._s(a.qnt_porcoes)+" porções\n                    ")]),s("br")]),s("div",{staticClass:"card-reveal"},[s("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("\n                      "+t._s(a.nome)+"\n                      "),s("i",{staticClass:"material-icons right"},[t._v("close")])]),s("ol",t._l(a.passos,function(a){return s("li",{key:a},[t._v(t._s(a))])}),0),s("p",[t._v("Tempo de Preparo: "+t._s(a.tempo_preparo)+" minutos")]),s("p",[t._v("Quantidade de Porções: "+t._s(a.qnt_porcoes)+" porções")])])])])])}),0)])])])]),t._m(2)])},z=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("h4",[t._v("Lista de Receitas")]),e("hr")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"parallax-container valign-wrapper"},[s("div",{staticClass:"section no-pad-bot"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row center"},[s("h5",{staticClass:"header col s12 light"},[t._v("Não perca a oportunidade de se torna um grnade chefe de cozinha.")])])])]),s("div",{staticClass:"parallax"},[s("img",{attrs:{src:e("6a8c"),alt:"Unsplashed background img 3"}})])])}],L={data:function(){return{receitas:[]}},mounted:function(){var t=this;y.listar().then(function(a){console.log(a.data),t.receitas=a.data})}},P=L,Q=(e("4683"),Object(d["a"])(P,j,z,!1,null,null,null)),U=Q.exports,J=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"page-footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col l6 s12"},[e("h5",{staticClass:"white-text"},[t._v("CookChef")]),e("p",{staticClass:"grey-text text-lighten-4"},[t._v("\n          Nós somos alunos da Universidade Estadual do Ceará desenvolvendo um\n          sistema que funciona como uma plataforma de compartilhamento de receitas.\n        ")])]),e("div",{staticClass:"col l6 s12"},[e("h5",{staticClass:"white-text"},[t._v("Não deixe de compartilhar suas receitas!")]),e("br"),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",[e("i",{staticClass:"fas fa-hamburger fa-4x"}),e("i",{staticClass:"fas fa-pizza-slice fa-4x"}),e("i",{staticClass:"fas fa-drumstick-bite fa-4x"}),e("i",{staticClass:"fas fa-hotdog fa-4x"}),e("i",{staticClass:"fas fa-cookie-bite fa-4x"})])])])])])]),e("div",{staticClass:"footer-copyright"},[e("div",{staticClass:"container"},[t._v("\n      Feito pela\n      "),e("a",{staticClass:"brown-text text-lighten-3",attrs:{href:"http://materializecss.com"}},[t._v("Turma de BD")])])])])}],S={},G=Object(d["a"])(S,J,q,!1,null,null,null),M=G.exports,D={components:{Navbar:p,Slider:m["default"],Quemsomos:b,Recomendadosdia:R,Listareceitasmin:U,Footer:M}},I=D,W=Object(d["a"])(I,n,c,!1,null,null,null),F=W.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("Cadastrar"),e("Footer")],1)},Y=[],T=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("h4",[t._v("Cadastre-se")]),e("hr")])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("form",{staticClass:"col s12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s6"},[e("input",{staticClass:"validate",attrs:{id:"nome",type:"text"}}),e("label",{attrs:{for:"nome"}},[t._v("Nome")])]),e("div",{staticClass:"input-field col s6"},[e("input",{staticClass:"validate",attrs:{id:"sobrenome",type:"text"}}),e("label",{attrs:{for:"sobrenome"}},[t._v("Sobrenome")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s6 l12"},[e("input",{staticClass:"datepicker validate",attrs:{type:"text",placeholder:"Data de Nascimento"}})])]),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12 validate"},[e("select",[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Tipo de Autor")]),e("option",{attrs:{value:"1"}},[t._v("Amador")]),e("option",{attrs:{value:"2"}},[t._v("Estudante")]),e("option",{attrs:{value:"3"}},[t._v("Profissional")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{staticClass:"validate",attrs:{id:"email",type:"email"}}),e("label",{attrs:{for:"email"}},[t._v("Email")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{staticClass:"validate",attrs:{id:"password",type:"password"}}),e("label",{attrs:{for:"password"}},[t._v("Senha")])])])]),e("div",{staticClass:"center"},[e("button",{staticClass:"waves-effect waves-light btn"},[t._v("Cadastrar")])])])]),e("br")])}],K={},Z=Object(d["a"])(K,T,H,!1,null,null,null),V=Z.exports,$={components:{Navbar:p,Cadastrar:V,Footer:M}},X=$,tt=Object(d["a"])(X,B,Y,!1,null,null,null),at=tt.exports,et={name:"app",components:{Home:F,Cadastro:at}},st=et,it=Object(d["a"])(st,i,r,!1,null,null,null),rt=it.exports,nt=e("78f8"),ct=e.n(nt),lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("Logindados"),e("Footer")],1)},ot=[],dt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("h4",[t._v("Login")]),e("hr")])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("form",{staticClass:"col s12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{staticClass:"validate",attrs:{id:"email",type:"email"}}),e("label",{attrs:{for:"email"}},[t._v("Email")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{staticClass:"validate",attrs:{id:"password",type:"password"}}),e("label",{attrs:{for:"password"}},[t._v("Senha")])])])]),e("div",{staticClass:"center"},[e("button",{staticClass:"waves-effect waves-light btn"},[t._v("Logar")])])])]),e("br")])}],ut={},pt=Object(d["a"])(ut,dt,vt,!1,null,null,null),mt=pt.exports,ft={components:{Navbar:p,Logindados:mt,Footer:M}},Ct=ft,ht=Object(d["a"])(Ct,lt,ot,!1,null,null,null),_t=ht.exports,bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbaradmin"),e("Administrando"),e("Footer")],1)},gt=[],xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{role:"navigation"}},[e("div",{staticClass:"nav-wrapper container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v("CookChef")]),e("ul",{staticClass:"right hide-on-med-and-down"},[e("li",[e("router-link",{attrs:{to:"/admin"}},[t._v("Administrar")])],1)]),e("ul",{staticClass:"sidenav",attrs:{id:"nav-mobile"}},[e("li",[e("router-link",{attrs:{to:"/admin"}},[t._v("Administrar")])],1)]),e("router-link",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"nav-mobile"}},[e("i",{staticClass:"material-icons"},[t._v("menu")])])],1)])])},wt=[],At={},kt=Object(d["a"])(At,xt,wt,!1,null,null,null),yt=kt.exports,Et=e("f3b7"),Ot={components:{Navbaradmin:yt,Administrando:Et["default"],Footer:M}},Nt=Ot,Rt=Object(d["a"])(Nt,bt,gt,!1,null,null,null),jt=Rt.exports,zt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbaradmin"),e("Addreceita"),e("Footer")],1)},Lt=[],Pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("form",{staticClass:"col l7 s12",on:{submit:function(a){return a.preventDefault(),t.salvar(a)}}},[t._v("\n        "+t._s(t.receita.passos)+"\n        "+t._s(t.receita.autor)+"\n        "+t._s(t.receita.imgs)+"\n        "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col l10 s10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.receita.nome,expression:"receita.nome"}],staticClass:"validate",attrs:{id:"nome-receita",type:"text"},domProps:{value:t.receita.nome},on:{input:function(a){a.target.composing||t.$set(t.receita,"nome",a.target.value)}}}),e("label",{attrs:{for:"nome-receita"}},[t._v("Nome da Receita")])])]),t._m(1),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col l10 s10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.receita.passos,expression:"receita.passos"}],staticClass:"validate",attrs:{id:"passos-da-receita",type:"text",name:"receita.passos[]"},domProps:{value:t.receita.passos},on:{input:function(a){a.target.composing||t.$set(t.receita,"passos",a.target.value)}}}),e("label",{attrs:{for:"passos-da-receita"}},[t._v("Passos da Receita")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col l10 s10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.receita.tempo_preparo,expression:"receita.tempo_preparo"}],staticClass:"validate",attrs:{id:"tempo-de-preparo",type:"number"},domProps:{value:t.receita.tempo_preparo},on:{input:function(a){a.target.composing||t.$set(t.receita,"tempo_preparo",a.target.value)}}}),e("label",{attrs:{for:"tempo-de-preparo"}},[t._v("Tempo de preparo")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col l10 s10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.receita.qnt_porcoes,expression:"receita.qnt_porcoes"}],staticClass:"validate",attrs:{id:"quantidade",type:"number"},domProps:{value:t.receita.qnt_porcoes},on:{input:function(a){a.target.composing||t.$set(t.receita,"qnt_porcoes",a.target.value)}}}),e("label",{attrs:{for:"quantidade"}},[t._v("Quantidade de porções")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col l10 s10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.receita.imgs,expression:"receita.imgs"}],staticClass:"validate",attrs:{id:"img",type:"text",name:"receita.imgs[]"},domProps:{value:t.receita.imgs},on:{input:function(a){a.target.composing||t.$set(t.receita,"imgs",a.target.value)}}}),e("label",{attrs:{for:"img"}},[t._v("Imagem")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col l10 s10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.receita.prato,expression:"receita.prato"}],staticClass:"validate",attrs:{id:"quantidade",type:"number"},domProps:{value:t.receita.prato},on:{input:function(a){a.target.composing||t.$set(t.receita,"prato",a.target.value)}}}),e("label",{attrs:{for:"quantidade"}},[t._v("Prato de comida")])])]),e("br"),t._m(2),e("br")]),t._m(3)])])])},Qt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("h4",[t._v("Adicionar Receitas")]),e("hr")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("p",[e("label",{staticClass:"col s3"},[e("input",{attrs:{type:"radio",checked:"",name:"group1"}}),e("span",[t._v("Entrada")])]),e("label",{staticClass:"col s3"},[e("input",{attrs:{type:"radio",name:"group1"}}),e("span",[t._v("Principal")])]),e("label",{staticClass:"col s3"},[e("input",{attrs:{type:"radio",name:"group1"}}),e("span",[t._v("Sobremesa")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"center"},[e("button",{staticClass:"waves-effect waves-light btn"},[t._v("Cadastrar")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col l5 s12"},[s("img",{attrs:{width:"400",src:e("2bd6")}})])}],Ut={data:function(){return{receita:{nome:"sd",passos:"d",qnt_porcoes:1,tempo_preparo:2,imgs:"[]",autor:1,prato:4}}},methods:{salvar:function(){this.receita["imgs"]=[this.receita.imgs],this.receita.passos=[this.receita.passos],console.log(this.receita),y.salvar(this.receita).then(function(t){alert("Salvo com sucesso")})}}},Jt=Ut,qt=Object(d["a"])(Jt,Pt,Qt,!1,null,null,null),St=qt.exports,Gt={components:{Navbaradmin:yt,Addreceita:St,Footer:M}},Mt=Gt,Dt=Object(d["a"])(Mt,zt,Lt,!1,null,null,null),It=Dt.exports,Wt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbaradmin"),e("Avaliareceita"),e("Footer")],1)},Ft=[],Bt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Yt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("h4",[t._v("Avaliar Receitas")]),e("hr")])]),e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"section"},[e("div",{staticClass:"row"},[e("form",{staticClass:"col s12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s6"},[e("i",{staticClass:"material-icons prefix"},[t._v("search")]),e("input",{staticClass:"validate",attrs:{id:"icon_prefix",type:"text"}}),e("label",{attrs:{for:"icon_prefix"}},[t._v("Pesquisar Receitas")])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 m6 l4 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-image waves-effect waves-block waves-light"},[e("img",{staticClass:"activator",attrs:{src:"photos/macarronada.jpg"}})]),e("div",{staticClass:"card-content"},[e("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v("Macarronada")])]),e("div",{staticClass:"card-reveal"},[e("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("\n                  Avaliar\n                  "),e("i",{staticClass:"material-icons right"},[t._v("close")])]),e("div",{staticClass:"input-field col s12 validate"},[e("select",[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Pontuar")]),e("option",{attrs:{value:"1"}},[t._v("1")]),e("option",{attrs:{value:"2"}},[t._v("2")]),e("option",{attrs:{value:"3"}},[t._v("3")]),e("option",{attrs:{value:"3"}},[t._v("4")]),e("option",{attrs:{value:"3"}},[t._v("5")])])]),e("div",{staticClass:"center"},[e("button",{staticClass:"waves-effect waves-light btn"},[t._v("Atualizar Pontos")])])])])]),e("div",{staticClass:"col s12 m6 l4 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-image waves-effect waves-block waves-light"},[e("img",{staticClass:"activator",attrs:{src:"photos/fricase.jpg"}})]),e("div",{staticClass:"card-content"},[e("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v("Fricase")])]),e("div",{staticClass:"card-reveal"},[e("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("\n                  Avaliar\n                  "),e("i",{staticClass:"material-icons right"},[t._v("close")])]),e("div",{staticClass:"input-field col s12 validate"},[e("select",[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Pontuar")]),e("option",{attrs:{value:"1"}},[t._v("1")]),e("option",{attrs:{value:"2"}},[t._v("2")]),e("option",{attrs:{value:"3"}},[t._v("3")]),e("option",{attrs:{value:"3"}},[t._v("4")]),e("option",{attrs:{value:"3"}},[t._v("5")])])]),e("div",{staticClass:"center"},[e("button",{staticClass:"waves-effect waves-light btn"},[t._v("Atualizar Pontos")])])])])]),e("div",{staticClass:"col s12 m6 l4 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-image waves-effect waves-block waves-light"},[e("img",{staticClass:"activator",attrs:{src:"photos/peixe.jpg"}})]),e("div",{staticClass:"card-content"},[e("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v("Peixe")])]),e("div",{staticClass:"card-reveal"},[e("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("\n                  Card Title\n                  "),e("i",{staticClass:"material-icons right"},[t._v("close")])]),e("div",{staticClass:"input-field col s12 validate"},[e("select",[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Pontuar")]),e("option",{attrs:{value:"1"}},[t._v("1")]),e("option",{attrs:{value:"2"}},[t._v("2")]),e("option",{attrs:{value:"3"}},[t._v("3")]),e("option",{attrs:{value:"3"}},[t._v("4")]),e("option",{attrs:{value:"3"}},[t._v("5")])])]),e("div",{staticClass:"center"},[e("button",{staticClass:"waves-effect waves-light btn"},[t._v("Atualizar Pontos")])])])])])])])])])])}],Tt={},Ht=Object(d["a"])(Tt,Bt,Yt,!1,null,null,null),Kt=Ht.exports,Zt={components:{Navbaradmin:yt,Avaliareceita:Kt,Footer:M}},Vt=Zt,$t=Object(d["a"])(Vt,Wt,Ft,!1,null,null,null),Xt=$t.exports,ta=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbaradmin"),e("Removereceita"),e("Footer")],1)},aa=[],ea=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"section"},[e("div",{staticClass:"row"},[e("ul",t._l(t.receitas,function(a){return e("li",{key:a.id},[e("div",{staticClass:"col s12 m6 l4 center card-receita"},[t._m(1,!0),e("div",{staticClass:"card"},[e("div",{staticClass:"card-image waves-effect waves-block waves-light"},[e("img",{staticClass:"activator",attrs:{src:a.imgs}})]),e("div",{staticClass:"card-content"},[e("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(t._s(a.nome))])]),e("div",{staticClass:"card-reveal"},[e("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("\n                      "+t._s(a.nome)+"\n                      "),e("i",{staticClass:"material-icons right"},[t._v("close")])]),e("p",[t._v("Passos: "+t._s(a.passos))]),e("p",[t._v("Tempo de Preparo: "+t._s(a.tempo_preparo))]),e("p",[t._v("Quantidade de Porções: "+t._s(a.qnt_porcoes))]),t._m(2,!0)])])])])}),0)])])])])])},sa=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("h4",[t._v("Remover Receitas")]),e("hr")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{attrs:{action:""}},[e("div",{staticClass:"center"},[e("button",{staticClass:"waves-effect waves-light btn"},[t._v("Remover")])])])}],ia={data:function(){return{receitas:[]}},mounted:function(){var t=this;y.listar().then(function(a){console.log(a.data),t.receitas=a.data})},methods:{}},ra=ia,na=(e("d25c"),Object(d["a"])(ra,ea,sa,!1,null,null,null)),ca=na.exports,la={components:{Navbaradmin:yt,Removereceita:ca,Footer:M}},oa=la,da=Object(d["a"])(oa,ta,aa,!1,null,null,null),va=da.exports,ua=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbaradmin"),e("Avaliareceita"),e("Footer")],1)},pa=[],ma={components:{Navbaradmin:yt,Avaliareceita:Kt,Footer:M}},fa=ma,Ca=Object(d["a"])(fa,ua,pa,!1,null,null,null),ha=Ca.exports;s["a"].use(ct.a);var _a=[{path:"/",component:F,titulo:"Home"},{path:"/cadastro",component:at,titulo:"Cadastre-se"},{path:"/login",component:_t,titulo:"Login"},{path:"/admin",component:jt,titulo:"Admin"},{path:"/admin/addreceita",component:It},{path:"/admin/avaliareceita",component:ha},{path:"/admin/removereceita",component:va},{path:"/admin/atualizareceita",component:Xt}],ba=new ct.a({routes:_a,mode:"history"});new s["a"]({el:"#app",router:ba,render:function(t){return t(rt)}}).$mount("#app")},5758:function(t,a){$(document).ready(function(){$(".collapsible").collapsible()})},"5c2a":function(t,a,e){t.exports=e.p+"img/background3.e1fdaf6d.jpg"},6456:function(t,a,e){},"6a8c":function(t,a,e){t.exports=e.p+"img/background7.e89b7433.jpg"},"700c":function(t,a,e){t.exports=e.p+"img/background1.4e7c5d44.jpg"},7212:function(t,a,e){t.exports=e.p+"img/background4.d82b28be.jpg"},"89fb":function(t,a,e){"use strict";var s=e("ecf5"),i=e("1940"),r=e("2877"),n=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=n.exports},a263:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"corpo-admin"},[t._m(0),e("br"),e("div",{staticClass:"container"},[t._m(1),e("ul",{staticClass:"collapsible"},[e("li",[t._m(2),e("div",{staticClass:"collapsible-body"},[e("span",{staticClass:"white-text"},[t._v("Adicione a receita que você acredita ser incrível")]),e("br"),e("br"),e("router-link",{staticClass:"waves-effect waves-light btn",attrs:{to:"/admin/addreceita"}},[t._v("Adicionar")])],1)]),e("li",[t._m(3),e("div",{staticClass:"collapsible-body"},[e("span",{staticClass:"white-text"},[t._v("Coloque um nota para as receitas")]),e("br"),e("br"),e("router-link",{staticClass:"waves-effect waves-light btn",attrs:{to:"/admin/avaliareceita"}},[t._v("Avaliar")])],1)]),e("li",[t._m(4),e("div",{staticClass:"collapsible-body"},[e("span",{staticClass:"white-text"},[t._v("Remova a receita")]),e("br"),e("br"),e("router-link",{staticClass:"waves-effect waves-light btn",attrs:{to:"/admin/removereceita"}},[t._v("Remover")])],1)]),e("li",[t._m(5),e("div",{staticClass:"collapsible-body"},[e("span",{staticClass:"white-text"},[t._v("Atualize uma informação sobre a receita")]),e("br"),e("br"),e("router-link",{staticClass:"waves-effect waves-light btn",attrs:{to:"/admin/atualizareceita"}},[t._v("Atualizar")])],1)])])]),e("br"),e("br")])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 center"},[e("h3",[e("i",{staticClass:"mdi-content-send brown-text"})]),e("h4",{staticClass:"white-text"},[t._v("Chefe de Cozinha - Administrador")]),e("hr")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"center"},[e("h5",{staticClass:"white-text"},[t._v("Opções sobre Receitas")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapsible-header"},[e("i",{staticClass:"fas fa-hamburger fa-4x"}),t._v("Adicionar Receita\n        ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapsible-header"},[e("i",{staticClass:"fas fa-pizza-slice fa-4x"}),t._v("Avaliar Receita\n        ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapsible-header"},[e("i",{staticClass:"fas fa-drumstick-bite fa-4x"}),t._v("Remover Receita\n        ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapsible-header"},[e("i",{staticClass:"fas fa-hotdog fa-4x"}),t._v("Atualizar Receita\n        ")])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},b9a7:function(t,a,e){"use strict";var s=e("e6c3"),i=e.n(s);i.a},c9eb:function(t,a,e){t.exports=e.p+"img/restaurant.e5a2e8a0.png"},cc06:function(t,a,e){t.exports=e.p+"img/alarm-clock.47e107dd.png"},d25c:function(t,a,e){"use strict";var s=e("4212"),i=e.n(s);i.a},e6c3:function(t,a,e){},ecf5:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"slider"},[s("ul",{staticClass:"slides"},[s("li",[s("img",{attrs:{src:e("700c"),id:"img-cabecalho"}})]),s("li",[s("img",{attrs:{src:e("7212")}}),s("div",{staticClass:"caption left-align"},[s("h3",[t._v("Aprenda novas receitas")]),s("h5",{staticClass:"light grey-text text-lighten-3"},[t._v("Aqui você está em uma sala de aula.")])])]),s("li",[s("img",{attrs:{src:e("2d5a")}}),s("div",{staticClass:"caption right-align"},[s("h3",[t._v("Se torne um chefe")]),s("h5",{staticClass:"light grey-text text-lighten-3"},[t._v("Compartilhe todo seu conhecimento.")])])]),s("li",[s("img",{attrs:{src:e("fcd9")}}),s("div",{staticClass:"caption center-align"},[s("h3",[t._v("Experimente algo novo")]),s("h5",{staticClass:"light grey-text text-lighten-3"},[t._v("Se torne o melhor dos chefes.")])])])])])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},f3b7:function(t,a,e){"use strict";var s=e("a263"),i=e("03dd"),r=(e("b9a7"),e("2877")),n=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,"0d4df581",null);a["default"]=n.exports},fcd9:function(t,a,e){t.exports=e.p+"img/background6.2aee33c7.jpg"}});
//# sourceMappingURL=app.34d3d1f7.js.map
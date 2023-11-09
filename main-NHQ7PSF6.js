import{$ as k,$a as $,Aa as F,B as y,Ba as T,Bc as te,Ca as jt,Cb as U,Cc as N,Da as b,Dc as G,Ea as Ft,Ec as ee,F as ft,Fc as Z,G as m,Gc as ie,Hc as oe,I as R,Ia as D,Ic as ne,Ja as wt,Jc as W,Je as De,K as g,Ka as xt,L as d,M as gt,Ma as w,Mb as Zt,Na as L,Nc as re,Ne as Oe,Oa as Pt,Oc as Y,P as ot,Pc as se,Q as nt,Qb as Wt,R as j,Sb as Yt,Sc as h,Va as Rt,W as vt,Wa as Nt,Wd as he,X as ht,Xa as O,Y as Tt,Ya as Et,Z as _t,Za as I,Zb as Kt,_ as rt,_a as x,_b as qt,a as mt,ab as _,ac as Jt,ba as st,bb as kt,ca as yt,cb as Bt,cd as le,da as Ct,db as Lt,dd as ae,ea as Mt,eb as $t,ed as K,fa as v,fb as Ut,fd as ce,ga as r,gb as Vt,gd as q,ha as C,hb as zt,id as pe,j as E,ja as Dt,jd as ue,k as P,kd as me,l as A,la as Ot,ld as J,ma as s,md as de,me as Te,na as It,nd as fe,oa as B,pd as ge,pe as _e,qa as a,qb as Gt,qd as ve,qe as ye,ra as p,rb as lt,s as dt,sa as c,sb as at,sc as Xt,se as Ce,ta as f,tb as ct,ua as bt,ub as pt,va as Ht,vc as V,wa as M,wc as z,xa as St,ya as At,zc as Qt,ze as Me}from"./chunk-4AVP7BVJ.js";function Ue(t,i){if(t&1&&(M(0,3),w(1,"tuiMapper")),t&2){let e=i.$implicit,o=T(2);s("ngComponentOutlet",e.component.component)("ngComponentOutletInjector",Pt(1,2,e,o.mapper))}}function Ve(t,i){if(t&1&&(p(0,"div",1),a(1,Ue,2,5,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0),v(1),s("ngForOf",e)}}var Ie=(()=>{class t{constructor(e,o,n,l){this.allAlerts=e,this.injector=o,this.destroy$=n,this.cdr=l,this.alerts=[],this.trackBy=u=>u,this.mapper=u=>Tt.create({providers:[{provide:Xt,useValue:u}],parent:this.injector})}ngOnInit(){A(this.allAlerts).pipe(y(this.destroy$)).subscribe(e=>{this.alerts=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(ne),r(vt),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-alert-host"]],features:[D([h])],decls:1,vars:2,consts:[["class","t-wrapper",4,"ngFor","ngForOf","ngForTrackBy"],[1,"t-wrapper"],[3,"ngComponentOutlet","ngComponentOutletInjector",4,"ngFor","ngForOf"],[3,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(e,o){e&1&&a(0,Ve,2,2,"div",0),e&2&&s("ngForOf",o.alerts)("ngForTrackBy",o.trackBy)},dependencies:[I,Et,le],styles:["tui-alert-host>.t-wrapper{position:fixed;top:0;left:0;display:flex;width:100%;height:100%;flex-direction:column;pointer-events:none}tui-alert-host>.t-wrapper>*{pointer-events:auto}\n"],encapsulation:2,data:{animation:[U]}}),t})(),be=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,ae]]}),t})();var He=(()=>{class t{constructor(e,o,n){this.doc=e,this.el=o,this.renderer=n,this.activeElement=Kt(this.doc),Promise.resolve().then(()=>{this.el.nativeElement.focus()})}onBlur(){this.renderer.removeAttribute(this.el.nativeElement,"tabIndex")}onFocusIn(e){let{nativeElement:o}=this.el;if(Wt(o,e))return;let n=Jt({initial:o,root:o});n&&n.focus()}ngOnDestroy(){qt(this.doc),Promise.resolve().then(()=>{Yt(this.activeElement)&&this.activeElement.focus()})}}return t.\u0275fac=function(e){return new(e||t)(r(O),r(yt),r(Mt))},t.\u0275dir=gt({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(e,o){e&1&&F("blur",function(){return o.onBlur()})("focusin.silent",function(l){return o.onFocusIn(l.target)},!1,k)}}),t})(),Se=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({}),t})();function Ge(t,i){t&1&&M(0)}function Ze(t,i){t&1&&f(0,"tui-scroll-controls",5)}function We(t,i){if(t&1&&(p(0,"section",2),a(1,Ge,1,0,"ng-container",3)(2,Ze,1,0,"tui-scroll-controls",4),c()),t&2){let e=i.$implicit,o=T();s("@host",void 0),Ot("aria-labelledby",e.id),v(1),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",e),v(1),s("ngIf",!o.isMobile)}}function Ye(t,i){if(t&1){let e=St();p(0,"div",6),F("transitionend",function(n){let u=ot(e).tuiLet,S=T();return nt(S.onDialog(n,!!S.dialogs.length,!!u))})("popstate",function(){let l=ot(e).tuiLet,u=T();return nt(u.closeLast(u.dialogs,!!l))},!1,k),c()}if(t&2){let e=T();B("t-overlay_visible",e.dialogs.length)}}var Ke=Zt(E(!1)),ut={label:"ignoreMe"},qe=t=>(t==null?void 0:t.label)===ut.label,Ae=(()=>{class t{constructor(e,o,n,l,u,S,tt,et){this.isMobile=e,this.isDialogClosesOnBack$=o,this.dialogsByType=n,this.historyRef=l,this.titleService=u,this.destroy$=S,this.cdr=tt,this.doc=et,this.dialogs=[]}ngOnInit(){A(this.dialogsByType).pipe(P(e=>[].concat(...e).sort((o,n)=>o.createdAt-n.createdAt)),y(this.destroy$)).subscribe(e=>{this.dialogs=e,this.cdr.markForCheck(),this.doc.documentElement.classList.toggle("t-overscroll-none",!!e.length)})}closeLast(e,o){if(!o)return;let[n]=e.slice(-1);n&&(e.length>1&&this.historyRef.pushState(ut,this.titleService.getTitle()),n.$implicit.complete())}onDialog({propertyName:e},o,n){!n||e!=="letter-spacing"||(o?this.historyRef.pushState(ut,this.titleService.getTitle()):qe(this.historyRef.state)&&this.historyRef.back())}}return t.\u0275fac=function(e){return new(e||t)(r(Y),r(Ke),r(W),r(Qt),r($t),r(h,2),r(C),r(O))},t.\u0275cmp=g({type:t,selectors:[["tui-dialog-host"]],features:[D([h])],decls:3,vars:4,consts:[["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["class","t-overlay",3,"t-overlay_visible","transitionend","popstate",4,"tuiLet"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-scrollbars",4,"ngIf"],[1,"t-scrollbars"],[1,"t-overlay",3,"transitionend","popstate"]],template:function(e,o){e&1&&(a(0,We,3,5,"section",0)(1,Ye,1,2,"div",1),w(2,"async")),e&2&&(s("ngForOf",o.dialogs),v(1),s("tuiLet",L(2,2,o.isDialogClosesOnBack$)))},dependencies:[K,I,He,de,ce,V,x,me,$],styles:["[_nghost-%COMP%]{position:fixed;left:0;bottom:0;width:100%;height:0}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-start;outline:none;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}.t-dialog[_ngcontent-%COMP%]{bottom:auto;height:100%}.t-overlay[_ngcontent-%COMP%]{height:100%;pointer-events:none;touch-action:none;opacity:0;letter-spacing:normal;transition:opacity var(--tui-duration, .3s),letter-spacing .01s;background:rgba(0,0,0,.75);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;letter-spacing:1px}.t-dialog[_ngcontent-%COMP%]:last-of-type{z-index:1}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;margin:0;color:#747474}"],data:{animation:[Gt("host",[at(":enter",[lt({overflow:"clip"}),pt(":scope > *",[ct()],{optional:!0})]),at(":leave",[lt({overflow:"clip"}),pt(":scope > *",[ct()],{optional:!0})])])]}}),t})(),je=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,z,fe,Se,J,q]]}),t})();function Xe(t,i){t&1&&M(0)}var Qe=t=>({$implicit:t});function ti(t,i){if(t&1&&(p(0,"div",1),a(1,Xe,1,0,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0)("tuiActiveZoneParent",e.activeZone||null),v(1),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",xt(4,Qe,e))}}var Fe=(()=>{class t{constructor(e,o,n){this.hints$=e,this.destroy$=o,this.cdr=n,this.hints=[]}ngOnInit(){this.hints$.pipe(y(this.destroy$)).subscribe(e=>{this.hints=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(ye),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-hints-host"]],hostAttrs:["aria-live","polite"],features:[D([h])],decls:1,vars:1,consts:[["role","tooltip",3,"tuiActiveZoneParent",4,"ngFor","ngForOf"],["role","tooltip",3,"tuiActiveZoneParent"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(e,o){e&1&&a(0,ti,2,6,"div",0),e&2&&s("ngForOf",o.hints)},dependencies:[I,pe,V],styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:0}"],data:{animation:[U]}}),t})(),we=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,z,ue]]}),t})();function ii(t,i){if(t&1&&(j(),f(0,"defs",4)),t&2){let e=i.$implicit;s("innerHTML",e,st)}}function oi(t,i){if(t&1&&(j(),bt(0),a(1,ii,1,1,"defs",3),Ht()),t&2){let e=T();v(1),s("ngForOf",e.items)}}function ni(t,i){if(t&1&&(j(),p(0,"defs"),f(1,"svg",6),c()),t&2){let e=i.$implicit;v(1),s("outerHTML",e,st)}}function ri(t,i){if(t&1&&(j(),a(0,ni,2,1,"defs",5)),t&2){let e=T();s("ngForOf",e.items)}}var xe=(()=>{class t{constructor(e,o,n,l){this.svgService=e,this.cdr=o,this.destroy$=n,this.isBrowser=!0,this.isBrowser=!kt(l)}ngOnInit(){this.svgService.items$.pipe(y(this.destroy$)).subscribe(e=>{this.items=e.values(),this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(Ce),r(C),r(h,2),r(_t))},t.\u0275cmp=g({type:t,selectors:[["tui-svg-defs-host"]],features:[D([h])],decls:4,vars:2,consts:[["version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","xmlns","http://www.w3.org/2000/svg"],[4,"ngIf","ngIfElse"],["server",""],[3,"innerHTML",4,"ngFor","ngForOf"],[3,"innerHTML"],[4,"ngFor","ngForOf"],[3,"outerHTML"]],template:function(e,o){if(e&1&&(j(),p(0,"svg",0),a(1,oi,2,1,"ng-container",1)(2,ri,1,1,"ng-template",null,2,Rt),c()),e&2){let n=Ft(3);v(1),s("ngIf",o.isBrowser)("ngIfElse",n)}},dependencies:[x,I],styles:["[_nghost-%COMP%]{display:none}"],changeDetection:0}),t})(),Pe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,J]]}),t})();function li(t,i){t&1&&f(0,"tui-scroll-controls",2)}var ai=["*",[["tuiOverContent"]],[["tuiOverDialogs"]],[["tuiOverAlerts"]],[["tuiOverPortals"]],[["tuiOverHints"]]],ci=["*","tuiOverContent","tuiOverDialogs","tuiOverAlerts","tuiOverPortals","tuiOverHints"],Re=(()=>{class t{constructor(e,o,n,l,u,S,{body:tt},et){this.duration=e,this.dialogs=o,this.isMobile=n,this.breakpoint=l,this.isIOS=u,this.isAndroid=S,this.isMobileRes$=this.breakpoint.pipe(P(it=>it==="mobile")),this.scrollbars$=this.dialogs.length&&!this.isMobile?A([...this.dialogs]).pipe(P(it=>!it.some(({length:$e})=>$e)),dt(0)):E(!this.isMobile),tt.setAttribute("data-tui-theme",et.toLowerCase())}}return t.\u0275fac=function(e){return new(e||t)(r(he),r(W),r(Y),r(_e),r(re),r(se),r(O),r(Te))},t.\u0275cmp=g({type:t,selectors:[["tui-root"]],hostAttrs:["data-tui-version","3.53.0"],hostVars:7,hostBindings:function(e,o){e&1&&F("$.class._mobile",function(){return o.isMobileRes$}),e&2&&(At("$.class._mobile",o.isMobileRes$),It("--tui-duration",o.duration,"ms"),B("_ios",o.isIOS)("_android",o.isAndroid))},ngContentSelectors:ci,decls:14,vars:3,consts:[["class","t-root-scrollbar",4,"ngIf"],[1,"t-root-content"],[1,"t-root-scrollbar"]],template:function(e,o){e&1&&(jt(ai),a(0,li,1,0,"tui-scroll-controls",0),w(1,"async"),f(2,"tui-svg-defs-host"),p(3,"tui-dropdown-host")(4,"div",1),b(5),c(),b(6,1),f(7,"tui-dialog-host"),b(8,2),f(9,"tui-alert-host"),b(10,3),c(),b(11,4),f(12,"tui-hints-host"),b(13,5)),e&2&&s("ngIf",L(1,1,o.scrollbars$))},dependencies:[K,xe,ge,Ae,Ie,Fe,x,$],styles:['@keyframes tuiPresent{to{content:"1"}}@keyframes tuiSkeletonVibe{to{opacity:.5}}html,.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar,html::-webkit-scrollbar-thumb,.tui-zero-scrollbar::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}body{font:var(--tui-font-text-s);color:var(--tui-text-01);background:var(--tui-base-01);margin:0}tui-root{position:relative;display:block;flex:1;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;margin:0}.t-root-content{height:100%;isolation:isolate}.t-overscroll-none{overscroll-behavior:none;overflow:hidden}\n'],encapsulation:2}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,Me,ve,Pe,we,je,be,q]]}),t})();var Ne=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=g({type:i,selectors:[["app"]],standalone:!0,features:[wt],decls:7,vars:0,consts:[["ngProjectAs","tuiOverContent",5,["tuiOverContent"]],["ngProjectAs","tuiOverDialogs",5,["tuiOverDialogs"]],["ngProjectAs","tuiOverAlerts",5,["tuiOverAlerts"]],["ngProjectAs","tuiOverPortals",5,["tuiOverPortals"]],["ngProjectAs","tuiOverHints",5,["tuiOverHints"]]],template:function(n,l){n&1&&(p(0,"tui-root"),f(1,"router-outlet"),M(2,0)(3,1)(4,2)(5,3)(6,4),c())},dependencies:[Q,Re,Vt],encapsulation:2,changeDetection:0});let t=i;return t})();var pi=(()=>{let i=class i extends Z{constructor(o,n,l,u){super(o,n,l)}ngOnDestroy(){this.flush()}};i.\u0275fac=function(n){return new(n||i)(R(O),R(N),R(G),R(Nt))},i.\u0275prov=ft({token:i,factory:i.\u0275fac});let t=i;return t})();function ui(){return new ee}function mi(t,i,e){return new oe(t,i,e)}var Ee=[{provide:G,useFactory:ui},{provide:Z,useClass:pi},{provide:Ct,useFactory:mi,deps:[Bt,Z,Dt]}],di=[{provide:N,useFactory:()=>new ie},{provide:rt,useValue:"BrowserAnimations"},...Ee],Qo=[{provide:N,useClass:te},{provide:rt,useValue:"NoopAnimations"},...Ee];function ke(){return[...di]}var Be=[{path:"",loadComponent:()=>mt(void 0,null,function*(){return(yield import("./chunk-4J6RCPS4.js")).HomeComponent})}];var Le={providers:[ke(),zt(Be),Ut(),ht(Q,De,Oe)]};Lt(Ne,Le).catch(t=>console.error(t));

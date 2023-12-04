import{$ as k,$a as I,$b as qt,Aa as jt,Ac as ee,B as y,Bc as R,Ca as F,Cc as G,Da as T,Dc as ie,Ea as Ft,Eb as U,Ec as Z,Ee as Oe,F as ft,Fa as b,Fc as oe,G as m,Ga as wt,Gc as ne,Hc as re,I as N,Ic as W,Ie,Je as be,K as g,Ka as D,L as d,La as xt,M as gt,Ma as Pt,Mc as se,Nc as Y,Oa as w,Ob as Wt,Oc as le,P as ot,Pa as L,Q as nt,Qa as Nt,R as j,Rc as h,Sb as Yt,Ub as Kt,Vd as Te,W as vt,X as ht,Xa as Rt,Y as Tt,Ya as Et,Z as _t,Za as O,_ as rt,_a as kt,a as mt,ab as x,ac as Jt,bb as $,bd as ae,ca as st,cb as _,cc as Xt,cd as ce,da as yt,db as Bt,dd as K,ea as Ct,eb as Lt,ed as pe,fa as Mt,fb as $t,fd as q,ga as Dt,gb as Ut,ha as v,hb as Vt,hd as ue,he as _e,ia as r,ib as zt,id as me,j as E,ja as C,jb as Gt,jd as de,k as P,kd as J,ke as ye,l as A,la as Ot,ld as fe,le as Ce,md as ge,na as It,ne as Me,oa as s,od as ve,pa as bt,pd as he,qa as B,rc as Qt,s as dt,sa as a,sb as Zt,ta as p,tb as lt,ua as c,ub as at,uc as V,ue as De,va as f,vb as ct,vc as z,wa as St,wb as pt,xa as Ht,ya as M,yc as te,za as At}from"./chunk-JJTNSYRY.js";function ze(t,i){if(t&1&&(M(0,3),w(1,"tuiMapper")),t&2){let e=i.$implicit,o=T(2);s("ngComponentOutlet",e.component.component)("ngComponentOutletInjector",Nt(1,2,e,o.mapper))}}function Ge(t,i){if(t&1&&(p(0,"div",1),a(1,ze,2,5,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0),v(1),s("ngForOf",e)}}var Se=(()=>{class t{constructor(e,o,n,l){this.allAlerts=e,this.injector=o,this.destroy$=n,this.cdr=l,this.alerts=[],this.trackBy=u=>u,this.mapper=u=>Tt.create({providers:[{provide:Qt,useValue:u}],parent:this.injector})}ngOnInit(){A(this.allAlerts).pipe(y(this.destroy$)).subscribe(e=>{this.alerts=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(re),r(vt),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-alert-host"]],features:[D([h])],decls:1,vars:2,consts:[["class","t-wrapper",4,"ngFor","ngForOf","ngForTrackBy"],[1,"t-wrapper"],[3,"ngComponentOutlet","ngComponentOutletInjector",4,"ngFor","ngForOf"],[3,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(e,o){e&1&&a(0,Ge,2,2,"div",0),e&2&&s("ngForOf",o.alerts)("ngForTrackBy",o.trackBy)},dependencies:[I,kt,ae],styles:["tui-alert-host>.t-wrapper{position:fixed;top:0;left:0;display:flex;width:100%;height:100%;flex-direction:column;pointer-events:none}tui-alert-host>.t-wrapper>*{pointer-events:auto}\n"],encapsulation:2,data:{animation:[U]}}),t})(),He=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,ce]]}),t})();var Ae=(()=>{class t{constructor(e,o,n){this.doc=e,this.el=o,this.renderer=n,this.activeElement=qt(this.doc),Promise.resolve().then(()=>this.el.nativeElement.focus())}onBlur(){this.renderer.removeAttribute(this.el.nativeElement,"tabIndex")}onFocusIn(e){let{nativeElement:o}=this.el;if(Yt(o,e))return;let n=Xt({initial:o,root:o});n&&n.focus()}ngOnDestroy(){Jt(this.doc),Promise.resolve().then(()=>{Kt(this.activeElement)&&this.activeElement.focus()})}}return t.\u0275fac=function(e){return new(e||t)(r(O),r(yt),r(Mt))},t.\u0275dir=gt({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(e,o){e&1&&F("blur",function(){return o.onBlur()})("focusin.silent",function(l){return o.onFocusIn(l.target)},!1,k)}}),t})(),je=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({}),t})();function We(t,i){t&1&&M(0)}function Ye(t,i){t&1&&f(0,"tui-scroll-controls",5)}function Ke(t,i){if(t&1&&(p(0,"section",2),a(1,We,1,0,"ng-container",3)(2,Ye,1,0,"tui-scroll-controls",4),c()),t&2){let e=i.$implicit,o=T();s("@host",void 0),It("aria-labelledby",e.id),v(1),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",e),v(1),s("ngIf",!o.isMobile)}}function qe(t,i){if(t&1){let e=At();p(0,"div",6),F("transitionend",function(n){let u=ot(e).tuiLet,H=T();return nt(H.onDialog(n,!!H.dialogs.length,!!u))})("popstate",function(){let l=ot(e).tuiLet,u=T();return nt(u.closeLast(u.dialogs,!!l))},!1,k),c()}if(t&2){let e=T();B("t-overlay_visible",e.dialogs.length)}}var ut={label:"ignoreMe"},Je=t=>(t==null?void 0:t.label)===ut.label,Xe=Wt(E(!1)),Fe=(()=>{class t{constructor(e,o,n,l,u,H,tt,et){this.isMobile=e,this.isDialogClosesOnBack$=o,this.dialogsByType=n,this.historyRef=l,this.titleService=u,this.destroy$=H,this.cdr=tt,this.doc=et,this.dialogs=[]}ngOnInit(){A(this.dialogsByType).pipe(P(e=>[].concat(...e).sort((o,n)=>o.createdAt-n.createdAt)),y(this.destroy$)).subscribe(e=>{this.dialogs=e,this.cdr.markForCheck(),this.doc.documentElement.classList.toggle("t-overscroll-none",!!e.length)})}closeLast(e,o){if(!o)return;let[n]=e.slice(-1);n&&(e.length>1&&this.historyRef.pushState(ut,this.titleService.getTitle()),n.$implicit.complete())}onDialog({propertyName:e},o,n){!n||e!=="letter-spacing"||(o?this.historyRef.pushState(ut,this.titleService.getTitle()):Je(this.historyRef.state)&&this.historyRef.back())}}return t.\u0275fac=function(e){return new(e||t)(r(Y),r(Xe),r(W),r(te),r(Ut),r(h,2),r(C),r(O))},t.\u0275cmp=g({type:t,selectors:[["tui-dialog-host"]],features:[D([h])],decls:3,vars:4,consts:[["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["class","t-overlay",3,"t-overlay_visible","transitionend","popstate",4,"tuiLet"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-scrollbars",4,"ngIf"],[1,"t-scrollbars"],[1,"t-overlay",3,"transitionend","popstate"]],template:function(e,o){e&1&&(a(0,Ke,3,5,"section",0)(1,qe,1,2,"div",1),w(2,"async")),e&2&&(s("ngForOf",o.dialogs),v(1),s("tuiLet",L(2,2,o.isDialogClosesOnBack$)))},dependencies:[K,I,Ae,fe,pe,V,x,de,$],styles:["[_nghost-%COMP%]{position:fixed;left:0;bottom:0;width:100%;height:0}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-start;outline:none;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}.t-dialog[_ngcontent-%COMP%]{bottom:auto;height:100%}.t-overlay[_ngcontent-%COMP%]{height:100%;pointer-events:none;touch-action:none;opacity:0;letter-spacing:normal;transition:opacity var(--tui-duration, .3s),letter-spacing .01s;background:rgba(0,0,0,.75);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;letter-spacing:1px}.t-dialog[_ngcontent-%COMP%]:last-of-type{z-index:1}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;margin:0;color:#747474}"],data:{animation:[Zt("host",[at(":enter",[lt({overflow:"clip"}),pt(":scope > *",[ct()],{optional:!0})]),at(":leave",[lt({overflow:"clip"}),pt(":scope > *",[ct()],{optional:!0})])])]}}),t})(),we=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,z,ge,je,J,q]]}),t})();function ti(t,i){t&1&&M(0)}var ei=t=>({$implicit:t});function ii(t,i){if(t&1&&(p(0,"div",1),a(1,ti,1,0,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0)("tuiActiveZoneParent",e.activeZone||null),v(1),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",Pt(4,ei,e))}}var xe=(()=>{class t{constructor(e,o,n){this.hints$=e,this.destroy$=o,this.cdr=n,this.hints=[]}ngOnInit(){this.hints$.pipe(y(this.destroy$)).subscribe(e=>{this.hints=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(Ce),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-hints-host"]],hostAttrs:["aria-live","polite"],features:[D([h])],decls:1,vars:1,consts:[["role","tooltip",3,"tuiActiveZoneParent",4,"ngFor","ngForOf"],["role","tooltip",3,"tuiActiveZoneParent"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(e,o){e&1&&a(0,ii,2,6,"div",0),e&2&&s("ngForOf",o.hints)},dependencies:[I,ue,V],styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:0}"],data:{animation:[U]}}),t})(),Pe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,z,me]]}),t})();function ni(t,i){if(t&1&&(j(),f(0,"defs",4)),t&2){let e=i.$implicit;s("innerHTML",e,st)}}function ri(t,i){if(t&1&&(j(),St(0),a(1,ni,1,1,"defs",3),Ht()),t&2){let e=T();v(1),s("ngForOf",e.items)}}function si(t,i){if(t&1&&(j(),p(0,"defs"),f(1,"svg",6),c()),t&2){let e=i.$implicit;v(1),s("outerHTML",e,st)}}function li(t,i){if(t&1&&(j(),a(0,si,2,1,"defs",5)),t&2){let e=T();s("ngForOf",e.items)}}var Ne=(()=>{class t{constructor(e,o,n,l){this.svgService=e,this.cdr=o,this.destroy$=n,this.isBrowser=!0,this.isBrowser=!Bt(l)}ngOnInit(){this.svgService.items$.pipe(y(this.destroy$)).subscribe(e=>{this.items=e.values(),this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(Me),r(C),r(h,2),r(_t))},t.\u0275cmp=g({type:t,selectors:[["tui-svg-defs-host"]],features:[D([h])],decls:4,vars:2,consts:[["version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","xmlns","http://www.w3.org/2000/svg"],[4,"ngIf","ngIfElse"],["server",""],[3,"innerHTML",4,"ngFor","ngForOf"],[3,"innerHTML"],[4,"ngFor","ngForOf"],[3,"outerHTML"]],template:function(e,o){if(e&1&&(j(),p(0,"svg",0),a(1,ri,2,1,"ng-container",1)(2,li,1,1,"ng-template",null,2,Rt),c()),e&2){let n=wt(3);v(1),s("ngIf",o.isBrowser)("ngIfElse",n)}},dependencies:[x,I],styles:["[_nghost-%COMP%]{display:none}"],changeDetection:0}),t})(),Re=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,J]]}),t})();function ci(t,i){t&1&&f(0,"tui-scroll-controls",2)}var pi=["*",[["tuiOverContent"]],[["tuiOverDialogs"]],[["tuiOverAlerts"]],[["tuiOverPortals"]],[["tuiOverHints"]]],ui=["*","tuiOverContent","tuiOverDialogs","tuiOverAlerts","tuiOverPortals","tuiOverHints"],Ee=(()=>{class t{constructor(e,o,n,l,u,H,{body:tt},et){this.duration=e,this.dialogs=o,this.isMobile=n,this.breakpoint=l,this.isIOS=u,this.isAndroid=H,this.isMobileRes$=this.breakpoint.pipe(P(it=>it==="mobile")),this.scrollbars$=this.dialogs.length&&!this.isMobile?A([...this.dialogs]).pipe(P(it=>!it.some(({length:Ve})=>Ve)),dt(0)):E(!this.isMobile),tt.setAttribute("data-tui-theme",et.toLowerCase())}}return t.\u0275fac=function(e){return new(e||t)(r(Te),r(W),r(Y),r(ye),r(se),r(le),r(O),r(_e))},t.\u0275cmp=g({type:t,selectors:[["tui-root"]],hostAttrs:["data-tui-version","3.56.0"],hostVars:7,hostBindings:function(e,o){e&1&&F("$.class._mobile",function(){return o.isMobileRes$}),e&2&&(jt("$.class._mobile",o.isMobileRes$),bt("--tui-duration",o.duration,"ms"),B("_ios",o.isIOS)("_android",o.isAndroid))},ngContentSelectors:ui,decls:14,vars:3,consts:[["class","t-root-scrollbar",4,"ngIf"],[1,"t-root-content"],[1,"t-root-scrollbar"]],template:function(e,o){e&1&&(Ft(pi),a(0,ci,1,0,"tui-scroll-controls",0),w(1,"async"),f(2,"tui-svg-defs-host"),p(3,"tui-dropdown-host")(4,"div",1),b(5),c(),b(6,1),f(7,"tui-dialog-host"),b(8,2),f(9,"tui-alert-host"),b(10,3),c(),b(11,4),f(12,"tui-hints-host"),b(13,5)),e&2&&s("ngIf",L(1,1,o.scrollbars$))},dependencies:[K,Ne,ve,Fe,Se,xe,x,$],styles:['@keyframes tuiPresent{to{content:"1"}}@keyframes tuiSkeletonVibe{to{opacity:.5}}html,.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar,html::-webkit-scrollbar-thumb,.tui-zero-scrollbar::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}body{font:var(--tui-font-text-s);color:var(--tui-text-01);background:var(--tui-base-01);margin:0}tui-root{position:relative;display:block;flex:1;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;margin:0}.t-root-content{height:100%;isolation:isolate}.t-overscroll-none{overscroll-behavior:none;overflow:hidden}\n'],encapsulation:2}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,De,he,Re,Pe,we,He,q]]}),t})();var ke=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=g({type:i,selectors:[["app"]],standalone:!0,features:[xt],decls:7,vars:0,consts:[["ngProjectAs","tuiOverContent",5,["tuiOverContent"]],["ngProjectAs","tuiOverDialogs",5,["tuiOverDialogs"]],["ngProjectAs","tuiOverAlerts",5,["tuiOverAlerts"]],["ngProjectAs","tuiOverPortals",5,["tuiOverPortals"]],["ngProjectAs","tuiOverHints",5,["tuiOverHints"]]],template:function(n,l){n&1&&(p(0,"tui-root"),f(1,"router-outlet"),M(2,0)(3,1)(4,2)(5,3)(6,4),c())},dependencies:[Q,Ee,zt],encapsulation:2,changeDetection:0});let t=i;return t})();var mi=(()=>{let i=class i extends Z{constructor(o,n,l,u){super(o,n,l)}ngOnDestroy(){this.flush()}};i.\u0275fac=function(n){return new(n||i)(N(O),N(R),N(G),N(Et))},i.\u0275prov=ft({token:i,factory:i.\u0275fac});let t=i;return t})();function di(){return new ie}function fi(t,i,e){return new ne(t,i,e)}var Be=[{provide:G,useFactory:di},{provide:Z,useClass:mi},{provide:Ct,useFactory:fi,deps:[Lt,Z,Ot]}],gi=[{provide:R,useFactory:()=>new oe},{provide:rt,useValue:"BrowserAnimations"},...Be],en=[{provide:R,useClass:ee},{provide:rt,useValue:"NoopAnimations"},...Be];function Le(){return[...gi]}var $e=[{path:"",pathMatch:"full",loadComponent:()=>mt(void 0,null,function*(){return import("./chunk-NHV4AMOE.js").then(t=>t.HomeComponent)})}];var Ue={providers:[Le(),Gt($e),Vt(),ht(Q,Oe,Ie),{provide:Dt,useClass:be}]};$t(ke,Ue).catch(t=>console.error(t));
//# sourceMappingURL=main-TO467EE5.js.map

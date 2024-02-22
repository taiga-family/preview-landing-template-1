import{$a as kt,$d as ye,Aa as Ft,Ab as ct,Ac as V,B as y,Ba as M,Bb as pt,Bc as z,Ca as wt,Cb as ut,Ce as Se,Da as Nt,Ec as ie,Fa as F,G as g,Ga as T,Gc as oe,H as u,Ha as Pt,Hc as x,I as gt,Ia as b,Ic as G,Jc as ne,K as nt,Kb as $,Kc as Z,L as rt,Lc as re,M as j,Mc as se,Me as He,N as vt,Na as xt,Nc as le,O as ht,Oc as W,P as m,Qe as Ae,R as Tt,Re as je,S as st,Sc as ae,Tc as Y,U as E,Ua as D,Ub as Kt,Uc as ce,V as _t,Va as Rt,Wa as Et,Xc as h,Yb as qt,Z as yt,Za as w,_ as Ct,_a as L,_b as Jt,a as dt,ae as Ce,ba as Mt,cb as Bt,da as lt,db as I,ea as k,eb as Lt,fb as O,fc as Xt,ga as v,gb as N,gc as Qt,ha as r,hb as U,hd as pe,ib as _,ic as te,id as ue,j as R,ja as Dt,jb as Ut,jd as K,k as P,ka as It,kb as $t,kd as me,ke as Me,l as A,la as Ot,lb as Vt,ld as q,ma as C,mb as zt,na as bt,nb as Gt,nd as de,oa as St,ob as Zt,od as fe,pb as Wt,pd as ge,pe as De,qd as J,ra as a,rd as ve,s as ft,sa as Ht,sd as he,se as Ie,ta as s,te as Oe,ua as At,ud as Te,va as B,vd as _e,ve as be,wa as p,xa as c,xc as ee,ya as d,yb as Yt,za as jt,zb as at}from"./chunk-ECOQD4JZ.js";function Ye(t,i){if(t&1&&(M(0,3),w(1,"tuiMapper")),t&2){let e=i.$implicit,o=T(2);s("ngComponentOutlet",e.component.component)("ngComponentOutletInjector",kt(1,2,e,o.mapper))}}function Ke(t,i){if(t&1&&(p(0,"div",1),a(1,Ye,2,5,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0),v(),s("ngForOf",e)}}var Fe=(()=>{class t{constructor(e,o,n,l){this.allAlerts=e,this.injector=o,this.destroy$=n,this.cdr=l,this.alerts=[],this.trackBy=f=>f,this.mapper=f=>Mt.create({providers:[{provide:ee,useValue:f}],parent:this.injector})}ngOnInit(){A(this.allAlerts).pipe(y(this.destroy$)).subscribe(e=>{this.alerts=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(le),r(yt),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-alert-host"]],features:[D([h])],decls:1,vars:2,consts:[["class","t-wrapper",4,"ngFor","ngForOf","ngForTrackBy"],[1,"t-wrapper"],[3,"ngComponentOutlet","ngComponentOutletInjector",4,"ngFor","ngForOf"],[3,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(e,o){e&1&&a(0,Ke,2,2,"div",0),e&2&&s("ngForOf",o.alerts)("ngForTrackBy",o.trackBy)},dependencies:[O,Lt,pe],styles:[`tui-alert-host>.t-wrapper{position:fixed;top:0;left:0;display:flex;width:100%;height:100%;flex-direction:column;pointer-events:none}tui-alert-host>.t-wrapper>*{pointer-events:auto}
`],encapsulation:2,data:{animation:[$]}}),t})(),we=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({imports:[[_,ue]]}),t})();var Ne=(()=>{class t{constructor(e,o,n){this.doc=e,this.el=o,this.renderer=n,this.activeElement=Xt(this.doc),Promise.resolve().then(()=>this.el.nativeElement.focus())}onBlur(){this.renderer.removeAttribute(this.el.nativeElement,"tabIndex")}onFocusIn(e){let{nativeElement:o}=this.el;if(qt(o,e))return;let n=te({initial:o,root:o});n&&n.focus()}ngOnDestroy(){Qt(this.doc),Promise.resolve().then(()=>{Jt(this.activeElement)&&this.activeElement.focus()})}}return t.\u0275fac=function(e){return new(e||t)(r(I),r(vt),r(Ot))},t.\u0275dir=gt({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(e,o){e&1&&F("blur",function(){return o.onBlur()})("focusin.silent",function(l){return o.onFocusIn(l.target)},!1,k)}}),t})(),Pe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({}),t})();function Je(t,i){t&1&&M(0)}function Xe(t,i){t&1&&d(0,"tui-scroll-controls",5)}function Qe(t,i){if(t&1&&(p(0,"section",2),a(1,Je,1,0,"ng-container",3)(2,Xe,1,0,"tui-scroll-controls",4),c()),t&2){let e=i.$implicit,o=T();s("@host",void 0),Ht("aria-labelledby",e.id),v(),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",e),v(),s("ngIf",!o.isMobile)}}function ti(t,i){if(t&1){let e=wt();p(0,"div",6),F("transitionend",function(n){let f=nt(e).tuiLet,H=T();return rt(H.onDialog(n,!!H.dialogs.length,!!f))})("popstate",function(){let l=nt(e).tuiLet,f=T();return rt(f.closeLast(f.dialogs,!!l))},!1,k),c()}if(t&2){let e=T();B("t-overlay_visible",e.dialogs.length)}}var mt={label:"ignoreMe"},ei=t=>(t==null?void 0:t.label)===mt.label,ii=Kt(R(!1)),xe=(()=>{class t{constructor(e,o,n,l,f,H,tt,et){this.isMobile=e,this.isDialogClosesOnBack$=o,this.dialogsByType=n,this.historyRef=l,this.titleService=f,this.destroy$=H,this.cdr=tt,this.doc=et,this.dialogs=[]}ngOnInit(){A(this.dialogsByType).pipe(P(e=>[].concat(...e).sort((o,n)=>o.createdAt-n.createdAt)),y(this.destroy$)).subscribe(e=>{var o;this.dialogs=e,this.cdr.markForCheck(),(o=this.doc.defaultView)===null||o===void 0||o.document.documentElement.classList.toggle("t-overscroll-none",!!e.length)})}closeLast(e,o){if(!o)return;let[n]=e.slice(-1);n&&(e.length>1&&this.historyRef.pushState(mt,this.titleService.getTitle()),n.$implicit.complete())}onDialog({propertyName:e},o,n){!n||e!=="letter-spacing"||(o?this.historyRef.pushState(mt,this.titleService.getTitle()):ei(this.historyRef.state)&&this.historyRef.back())}}return t.\u0275fac=function(e){return new(e||t)(r(Y),r(ii),r(W),r(ie),r(zt),r(h,2),r(C),r(I))},t.\u0275cmp=g({type:t,selectors:[["tui-dialog-host"]],features:[D([h])],decls:3,vars:4,consts:[["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["class","t-overlay",3,"t-overlay_visible","transitionend","popstate",4,"tuiLet"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-scrollbars",4,"ngIf"],[1,"t-scrollbars"],[1,"t-overlay",3,"transitionend","popstate"]],template:function(e,o){e&1&&(a(0,Qe,3,5,"section",0)(1,ti,1,2,"div",1),w(2,"async")),e&2&&(s("ngForOf",o.dialogs),v(),s("tuiLet",L(2,2,o.isDialogClosesOnBack$)))},dependencies:[K,O,Ne,ve,me,V,N,ge,U],styles:["[_nghost-%COMP%]{position:fixed;left:0;bottom:0;width:100%;height:0}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-start;outline:none;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}.t-dialog[_ngcontent-%COMP%]{bottom:auto;height:100%}.t-overlay[_ngcontent-%COMP%]{height:100%;pointer-events:none;touch-action:none;opacity:0;letter-spacing:normal;transition:opacity var(--tui-duration, .3s),letter-spacing .01s;background:rgba(0,0,0,.75);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;letter-spacing:1px}.t-dialog[_ngcontent-%COMP%]:last-of-type{z-index:1}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;margin:0;color:#747474}"],data:{animation:[Yt("host",[ct(":enter",[at({overflow:"clip"}),ut(":scope > *",[pt()],{optional:!0})]),ct(":leave",[at({overflow:"clip"}),ut(":scope > *",[pt()],{optional:!0})])])]}}),t})(),Re=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({imports:[[_,z,he,Pe,J,q]]}),t})();function ni(t,i){t&1&&M(0)}var ri=t=>({$implicit:t});function si(t,i){if(t&1&&(p(0,"div",1),a(1,ni,1,0,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0)("tuiActiveZoneParent",e.activeZone||null),v(),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",Et(4,ri,e))}}var Ee=(()=>{class t{constructor(e,o,n){this.hints$=e,this.destroy$=o,this.cdr=n,this.hints=[]}ngOnInit(){this.hints$.pipe(y(this.destroy$)).subscribe(e=>{this.hints=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(Oe),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-hints-host"]],hostAttrs:["aria-live","polite"],features:[D([h])],decls:1,vars:1,consts:[["role","tooltip",3,"tuiActiveZoneParent",4,"ngFor","ngForOf"],["role","tooltip",3,"tuiActiveZoneParent"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(e,o){e&1&&a(0,si,2,6,"div",0),e&2&&s("ngForOf",o.hints)},dependencies:[O,de,V],styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:0}"],data:{animation:[$]}}),t})(),ke=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({imports:[[_,z,fe]]}),t})();function ai(t,i){if(t&1&&(j(),d(0,"defs",4)),t&2){let e=i.$implicit;s("innerHTML",e,lt)}}function ci(t,i){if(t&1&&(j(),jt(0),a(1,ai,1,1,"defs",3),Ft()),t&2){let e=T();v(),s("ngForOf",e.items)}}function pi(t,i){if(t&1&&(j(),p(0,"defs"),d(1,"svg",6),c()),t&2){let e=i.$implicit;v(),s("outerHTML",e,lt)}}function ui(t,i){if(t&1&&(j(),a(0,pi,2,1,"defs",5)),t&2){let e=T();s("ngForOf",e.items)}}var Be=(()=>{class t{constructor(e,o,n,l){this.svgService=e,this.cdr=o,this.destroy$=n,this.isBrowser=!0,this.isBrowser=!Ut(l)}ngOnInit(){this.svgService.items$.pipe(y(this.destroy$)).subscribe(e=>{this.items=e.values(),this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(be),r(C),r(h,2),r(Tt))},t.\u0275cmp=g({type:t,selectors:[["tui-svg-defs-host"]],features:[D([h])],decls:4,vars:2,consts:[["version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","xmlns","http://www.w3.org/2000/svg"],[4,"ngIf","ngIfElse"],["server",""],[3,"innerHTML",4,"ngFor","ngForOf"],[3,"innerHTML"],[4,"ngFor","ngForOf"],[3,"outerHTML"]],template:function(e,o){if(e&1&&(j(),p(0,"svg",0),a(1,ci,2,1,"ng-container",1)(2,ui,1,1,"ng-template",null,2,Bt),c()),e&2){let n=xt(3);v(),s("ngIf",o.isBrowser)("ngIfElse",n)}},dependencies:[N,O],styles:["[_nghost-%COMP%]{display:none}"],changeDetection:0}),t})(),Le=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({imports:[[_,J]]}),t})();function di(t,i){t&1&&d(0,"tui-scroll-controls",2)}var fi=["*",[["tuiOverContent"]],[["tuiOverDialogs"]],[["tuiOverAlerts"]],[["tuiOverPortals"]],[["tuiOverHints"]]],gi=["*","tuiOverContent","tuiOverDialogs","tuiOverAlerts","tuiOverPortals","tuiOverHints"],Ue=(()=>{class t{constructor(e,o,n,l,f,H,tt,et,Ze){var it;this.reducedMotion=e,this.duration=o,this.dialogs=n,this.isMobile=l,this.breakpoint=f,this.isIOS=H,this.isAndroid=tt,this.isMobileRes$=this.breakpoint.pipe(P(ot=>ot==="mobile")),this.scrollbars$=this.dialogs.length&&!this.isMobile?A([...this.dialogs]).pipe(P(ot=>!ot.some(({length:We})=>We)),ft(0)):R(!this.isMobile),(it=et.defaultView)===null||it===void 0||it.document.body.setAttribute("data-tui-theme",Ze.toLowerCase())}}return t.\u0275fac=function(e){return new(e||t)(r(ye),r(Ce),r(W),r(Y),r(Ie),r(ae),r(ce),r(I),r(De))},t.\u0275cmp=g({type:t,selectors:[["tui-root"]],hostAttrs:["data-tui-version","3.67.0"],hostVars:9,hostBindings:function(e,o){e&1&&F("touchstart.passive.silent",function(){return 0})("$.class._mobile",function(){return o.isMobileRes$}),e&2&&(Nt("$.class._mobile",o.isMobileRes$),At("--tui-duration",o.duration,"ms"),B("_ios",o.isIOS)("_android",o.isAndroid)("_reduced-motion",o.reducedMotion))},ngContentSelectors:gi,decls:14,vars:3,consts:[["class","t-root-scrollbar",4,"ngIf"],[1,"t-root-content"],[1,"t-root-scrollbar"]],template:function(e,o){e&1&&(Pt(fi),a(0,di,1,0,"tui-scroll-controls",0),w(1,"async"),d(2,"tui-svg-defs-host"),p(3,"tui-dropdown-host")(4,"div",1),b(5),c(),b(6,1),d(7,"tui-dialog-host"),b(8,2),d(9,"tui-alert-host"),b(10,3),c(),b(11,4),d(12,"tui-hints-host"),b(13,5)),e&2&&s("ngIf",L(1,1,o.scrollbars$))},dependencies:[K,Be,Te,xe,Fe,Ee,N,U],styles:[`@keyframes tuiPresent{to{content:"1"}}@keyframes tuiSkeletonVibe{to{opacity:.5}}html,.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar,html::-webkit-scrollbar-thumb,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body[data-tui-theme]{font:var(--tui-font-text-s);color:var(--tui-text-01);background:var(--tui-base-01);margin:0}tui-root{position:relative;display:block;flex:1;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{height:100%;isolation:isolate}.t-overscroll-none{overscroll-behavior:none}
`],encapsulation:2}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({imports:[[_,Se,_e,Le,ke,Re,we,q]]}),t})();var $e=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=g({type:i,selectors:[["app"]],standalone:!0,features:[Rt],decls:7,vars:0,consts:[["ngProjectAs","tuiOverContent",5,["tuiOverContent"]],["ngProjectAs","tuiOverDialogs",5,["tuiOverDialogs"]],["ngProjectAs","tuiOverAlerts",5,["tuiOverAlerts"]],["ngProjectAs","tuiOverPortals",5,["tuiOverPortals"]],["ngProjectAs","tuiOverHints",5,["tuiOverHints"]]],template:function(n,l){n&1&&(p(0,"tui-root"),d(1,"router-outlet"),M(2,0)(3,1)(4,2)(5,3)(6,4),c())},dependencies:[Q,Ue,Zt],encapsulation:2,changeDetection:0});let t=i;return t})();var vi=(()=>{let i=class i extends Z{constructor(o,n,l){super(o,n,l,_t(Dt,{optional:!0}))}ngOnDestroy(){this.flush()}};i.\u0275fac=function(n){return new(n||i)(E(I),E(x),E(G))},i.\u0275prov=ht({token:i,factory:i.\u0275fac});let t=i;return t})();function hi(){return new ne}function Ti(t,i,e){return new se(t,i,e)}var Ve=[{provide:G,useFactory:hi},{provide:Z,useClass:vi},{provide:It,useFactory:Ti,deps:[$t,Z,St]}],_i=[{provide:x,useFactory:()=>new re},{provide:st,useValue:"BrowserAnimations"},...Ve],sn=[{provide:x,useClass:oe},{provide:st,useValue:"NoopAnimations"},...Ve];function ze(){return bt("NgEagerAnimations"),[..._i]}var Ge={providers:[ze(),Wt([{path:"",pathMatch:"full",loadComponent:()=>dt(void 0,null,function*(){return import("./chunk-4WXNFQF2.js")})}]),Gt(),Ct(Q,He,Ae),{provide:Me,useClass:je}]};Vt($e,Ge).catch(t=>console.error(t));
//# sourceMappingURL=main-YRR5B4UM.js.map

import{$ as rt,$a as I,Aa as At,Ac as Qt,B as y,Ca as F,Cc as te,Da as T,Dc as x,Ea as jt,Ec as G,F as ft,Fa as b,Fc as ee,G as m,Gb as $,Gc as Z,Hc as ie,I as R,Ic as oe,Ie as Oe,Jc as ne,Kc as W,L as g,La as Ft,M as d,Me as be,N as gt,Ne as Se,Oc as re,Pa as D,Pc as Y,Q as ot,Qa as wt,Qb as Zt,Qc as se,R as nt,Ra as Pt,S as j,Tc as h,Ua as w,Ub as Wt,Va as L,Wa as Nt,Wb as Yt,X as vt,Xd as he,Y as ht,Yd as Te,Z as Tt,Za as Rt,_ as _t,_a as xt,a as mt,aa as k,ab as Et,bb as O,bc as Kt,cb as P,cc as qt,da as st,db as U,dd as le,ea as yt,eb as _,ec as Jt,ed as ae,fa as Ct,fb as kt,fd as K,ga as Mt,gb as Bt,gd as ce,ge as _e,ha as v,hb as Lt,hd as q,ia as r,ib as Ut,j as E,ja as C,jb as $t,jd as pe,k as N,kb as Vt,kd as ue,l as A,la as Dt,lb as zt,ld as me,le as ye,md as J,nd as de,oa as a,od as fe,oe as Ce,pa as It,pe as Me,qa as s,qd as ge,ra as Ot,rd as ve,re as De,s as dt,sa as B,ta as p,tc as Xt,ua as c,ub as Gt,va as f,vb as lt,wa as bt,wb as at,wc as V,xa as St,xb as ct,xc as z,ya as M,yb as pt,ye as Ie,za as Ht}from"./chunk-B3P3OZRF.js";function Ge(t,i){if(t&1&&(M(0,3),w(1,"tuiMapper")),t&2){let e=i.$implicit,o=T(2);s("ngComponentOutlet",e.component.component)("ngComponentOutletInjector",Nt(1,2,e,o.mapper))}}function Ze(t,i){if(t&1&&(p(0,"div",1),a(1,Ge,2,5,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0),v(),s("ngForOf",e)}}var He=(()=>{class t{constructor(e,o,n,l){this.allAlerts=e,this.injector=o,this.destroy$=n,this.cdr=l,this.alerts=[],this.trackBy=u=>u,this.mapper=u=>Tt.create({providers:[{provide:Xt,useValue:u}],parent:this.injector})}ngOnInit(){A(this.allAlerts).pipe(y(this.destroy$)).subscribe(e=>{this.alerts=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(ne),r(vt),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-alert-host"]],features:[D([h])],decls:1,vars:2,consts:[["class","t-wrapper",4,"ngFor","ngForOf","ngForTrackBy"],[1,"t-wrapper"],[3,"ngComponentOutlet","ngComponentOutletInjector",4,"ngFor","ngForOf"],[3,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(e,o){e&1&&a(0,Ze,2,2,"div",0),e&2&&s("ngForOf",o.alerts)("ngForTrackBy",o.trackBy)},dependencies:[O,Et,le],styles:["tui-alert-host>.t-wrapper{position:fixed;top:0;left:0;display:flex;width:100%;height:100%;flex-direction:column;pointer-events:none}tui-alert-host>.t-wrapper>*{pointer-events:auto}\n"],encapsulation:2,data:{animation:[$]}}),t})(),Ae=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,ae]]}),t})();var je=(()=>{class t{constructor(e,o,n){this.doc=e,this.el=o,this.renderer=n,this.activeElement=Kt(this.doc),Promise.resolve().then(()=>this.el.nativeElement.focus())}onBlur(){this.renderer.removeAttribute(this.el.nativeElement,"tabIndex")}onFocusIn(e){let{nativeElement:o}=this.el;if(Wt(o,e))return;let n=Jt({initial:o,root:o});n&&n.focus()}ngOnDestroy(){qt(this.doc),Promise.resolve().then(()=>{Yt(this.activeElement)&&this.activeElement.focus()})}}return t.\u0275fac=function(e){return new(e||t)(r(I),r(yt),r(Mt))},t.\u0275dir=gt({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(e,o){e&1&&F("blur",function(){return o.onBlur()})("focusin.silent",function(l){return o.onFocusIn(l.target)},!1,k)}}),t})(),Fe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({}),t})();function Ye(t,i){t&1&&M(0)}function Ke(t,i){t&1&&f(0,"tui-scroll-controls",5)}function qe(t,i){if(t&1&&(p(0,"section",2),a(1,Ye,1,0,"ng-container",3)(2,Ke,1,0,"tui-scroll-controls",4),c()),t&2){let e=i.$implicit,o=T();s("@host",void 0),It("aria-labelledby",e.id),v(),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",e),v(),s("ngIf",!o.isMobile)}}function Je(t,i){if(t&1){let e=Ht();p(0,"div",6),F("transitionend",function(n){let u=ot(e).tuiLet,H=T();return nt(H.onDialog(n,!!H.dialogs.length,!!u))})("popstate",function(){let l=ot(e).tuiLet,u=T();return nt(u.closeLast(u.dialogs,!!l))},!1,k),c()}if(t&2){let e=T();B("t-overlay_visible",e.dialogs.length)}}var ut={label:"ignoreMe"},Xe=t=>(t==null?void 0:t.label)===ut.label,Qe=Zt(E(!1)),we=(()=>{class t{constructor(e,o,n,l,u,H,tt,et){this.isMobile=e,this.isDialogClosesOnBack$=o,this.dialogsByType=n,this.historyRef=l,this.titleService=u,this.destroy$=H,this.cdr=tt,this.doc=et,this.dialogs=[]}ngOnInit(){A(this.dialogsByType).pipe(N(e=>[].concat(...e).sort((o,n)=>o.createdAt-n.createdAt)),y(this.destroy$)).subscribe(e=>{this.dialogs=e,this.cdr.markForCheck(),this.doc.documentElement.classList.toggle("t-overscroll-none",!!e.length)})}closeLast(e,o){if(!o)return;let[n]=e.slice(-1);n&&(e.length>1&&this.historyRef.pushState(ut,this.titleService.getTitle()),n.$implicit.complete())}onDialog({propertyName:e},o,n){!n||e!=="letter-spacing"||(o?this.historyRef.pushState(ut,this.titleService.getTitle()):Xe(this.historyRef.state)&&this.historyRef.back())}}return t.\u0275fac=function(e){return new(e||t)(r(Y),r(Qe),r(W),r(Qt),r(Ut),r(h,2),r(C),r(I))},t.\u0275cmp=g({type:t,selectors:[["tui-dialog-host"]],features:[D([h])],decls:3,vars:4,consts:[["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["class","t-overlay",3,"t-overlay_visible","transitionend","popstate",4,"tuiLet"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-scrollbars",4,"ngIf"],[1,"t-scrollbars"],[1,"t-overlay",3,"transitionend","popstate"]],template:function(e,o){e&1&&(a(0,qe,3,5,"section",0)(1,Je,1,2,"div",1),w(2,"async")),e&2&&(s("ngForOf",o.dialogs),v(),s("tuiLet",L(2,2,o.isDialogClosesOnBack$)))},dependencies:[K,O,je,de,ce,V,P,me,U],styles:["[_nghost-%COMP%]{position:fixed;left:0;bottom:0;width:100%;height:0}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-start;outline:none;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}.t-dialog[_ngcontent-%COMP%]{bottom:auto;height:100%}.t-overlay[_ngcontent-%COMP%]{height:100%;pointer-events:none;touch-action:none;opacity:0;letter-spacing:normal;transition:opacity var(--tui-duration, .3s),letter-spacing .01s;background:rgba(0,0,0,.75);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;letter-spacing:1px}.t-dialog[_ngcontent-%COMP%]:last-of-type{z-index:1}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;margin:0;color:#747474}"],data:{animation:[Gt("host",[at(":enter",[lt({overflow:"clip"}),pt(":scope > *",[ct()],{optional:!0})]),at(":leave",[lt({overflow:"clip"}),pt(":scope > *",[ct()],{optional:!0})])])]}}),t})(),Pe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,z,fe,Fe,J,q]]}),t})();function ei(t,i){t&1&&M(0)}var ii=t=>({$implicit:t});function oi(t,i){if(t&1&&(p(0,"div",1),a(1,ei,1,0,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0)("tuiActiveZoneParent",e.activeZone||null),v(),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",Pt(4,ii,e))}}var Ne=(()=>{class t{constructor(e,o,n){this.hints$=e,this.destroy$=o,this.cdr=n,this.hints=[]}ngOnInit(){this.hints$.pipe(y(this.destroy$)).subscribe(e=>{this.hints=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(Me),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-hints-host"]],hostAttrs:["aria-live","polite"],features:[D([h])],decls:1,vars:1,consts:[["role","tooltip",3,"tuiActiveZoneParent",4,"ngFor","ngForOf"],["role","tooltip",3,"tuiActiveZoneParent"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(e,o){e&1&&a(0,oi,2,6,"div",0),e&2&&s("ngForOf",o.hints)},dependencies:[O,pe,V],styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:0}"],data:{animation:[$]}}),t})(),Re=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,z,ue]]}),t})();function ri(t,i){if(t&1&&(j(),f(0,"defs",4)),t&2){let e=i.$implicit;s("innerHTML",e,st)}}function si(t,i){if(t&1&&(j(),bt(0),a(1,ri,1,1,"defs",3),St()),t&2){let e=T();v(),s("ngForOf",e.items)}}function li(t,i){if(t&1&&(j(),p(0,"defs"),f(1,"svg",6),c()),t&2){let e=i.$implicit;v(),s("outerHTML",e,st)}}function ai(t,i){if(t&1&&(j(),a(0,li,2,1,"defs",5)),t&2){let e=T();s("ngForOf",e.items)}}var xe=(()=>{class t{constructor(e,o,n,l){this.svgService=e,this.cdr=o,this.destroy$=n,this.isBrowser=!0,this.isBrowser=!kt(l)}ngOnInit(){this.svgService.items$.pipe(y(this.destroy$)).subscribe(e=>{this.items=e.values(),this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(De),r(C),r(h,2),r(_t))},t.\u0275cmp=g({type:t,selectors:[["tui-svg-defs-host"]],features:[D([h])],decls:4,vars:2,consts:[["version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","xmlns","http://www.w3.org/2000/svg"],[4,"ngIf","ngIfElse"],["server",""],[3,"innerHTML",4,"ngFor","ngForOf"],[3,"innerHTML"],[4,"ngFor","ngForOf"],[3,"outerHTML"]],template:function(e,o){if(e&1&&(j(),p(0,"svg",0),a(1,si,2,1,"ng-container",1)(2,ai,1,1,"ng-template",null,2,Rt),c()),e&2){let n=Ft(3);v(),s("ngIf",o.isBrowser)("ngIfElse",n)}},dependencies:[P,O],styles:["[_nghost-%COMP%]{display:none}"],changeDetection:0}),t})(),Ee=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,J]]}),t})();function pi(t,i){t&1&&f(0,"tui-scroll-controls",2)}var ui=["*",[["tuiOverContent"]],[["tuiOverDialogs"]],[["tuiOverAlerts"]],[["tuiOverPortals"]],[["tuiOverHints"]]],mi=["*","tuiOverContent","tuiOverDialogs","tuiOverAlerts","tuiOverPortals","tuiOverHints"],ke=(()=>{class t{constructor(e,o,n,l,u,H,tt,{body:et},Ve){this.reducedMotion=e,this.duration=o,this.dialogs=n,this.isMobile=l,this.breakpoint=u,this.isIOS=H,this.isAndroid=tt,this.isMobileRes$=this.breakpoint.pipe(N(it=>it==="mobile")),this.scrollbars$=this.dialogs.length&&!this.isMobile?A([...this.dialogs]).pipe(N(it=>!it.some(({length:ze})=>ze)),dt(0)):E(!this.isMobile),et.setAttribute("data-tui-theme",Ve.toLowerCase())}}return t.\u0275fac=function(e){return new(e||t)(r(he),r(Te),r(W),r(Y),r(Ce),r(re),r(se),r(I),r(ye))},t.\u0275cmp=g({type:t,selectors:[["tui-root"]],hostAttrs:["data-tui-version","3.62.0"],hostVars:9,hostBindings:function(e,o){e&1&&F("$.class._mobile",function(){return o.isMobileRes$}),e&2&&(At("$.class._mobile",o.isMobileRes$),Ot("--tui-duration",o.duration,"ms"),B("_ios",o.isIOS)("_android",o.isAndroid)("_reduced-motion",o.reducedMotion))},ngContentSelectors:mi,decls:14,vars:3,consts:[["class","t-root-scrollbar",4,"ngIf"],[1,"t-root-content"],[1,"t-root-scrollbar"]],template:function(e,o){e&1&&(jt(ui),a(0,pi,1,0,"tui-scroll-controls",0),w(1,"async"),f(2,"tui-svg-defs-host"),p(3,"tui-dropdown-host")(4,"div",1),b(5),c(),b(6,1),f(7,"tui-dialog-host"),b(8,2),f(9,"tui-alert-host"),b(10,3),c(),b(11,4),f(12,"tui-hints-host"),b(13,5)),e&2&&s("ngIf",L(1,1,o.scrollbars$))},dependencies:[K,xe,ge,we,He,Ne,P,U],styles:['@keyframes tuiPresent{to{content:"1"}}@keyframes tuiSkeletonVibe{to{opacity:.5}}html,.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar,html::-webkit-scrollbar-thumb,.tui-zero-scrollbar::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}body{font:var(--tui-font-text-s);color:var(--tui-text-01);background:var(--tui-base-01);margin:0}tui-root{position:relative;display:block;flex:1;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;margin:0}.t-root-content{height:100%;isolation:isolate}.t-overscroll-none{overscroll-behavior:none}\n'],encapsulation:2}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=m({imports:[[_,Ie,ve,Ee,Re,Pe,Ae,q]]}),t})();var Be=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=g({type:i,selectors:[["app"]],standalone:!0,features:[wt],decls:7,vars:0,consts:[["ngProjectAs","tuiOverContent",5,["tuiOverContent"]],["ngProjectAs","tuiOverDialogs",5,["tuiOverDialogs"]],["ngProjectAs","tuiOverAlerts",5,["tuiOverAlerts"]],["ngProjectAs","tuiOverPortals",5,["tuiOverPortals"]],["ngProjectAs","tuiOverHints",5,["tuiOverHints"]]],template:function(n,l){n&1&&(p(0,"tui-root"),f(1,"router-outlet"),M(2,0)(3,1)(4,2)(5,3)(6,4),c())},dependencies:[Q,ke,Vt],encapsulation:2,changeDetection:0});let t=i;return t})();var di=(()=>{let i=class i extends Z{constructor(o,n,l,u){super(o,n,l)}ngOnDestroy(){this.flush()}};i.\u0275fac=function(n){return new(n||i)(R(I),R(x),R(G),R(xt))},i.\u0275prov=ft({token:i,factory:i.\u0275fac});let t=i;return t})();function fi(){return new ee}function gi(t,i,e){return new oe(t,i,e)}var Le=[{provide:G,useFactory:fi},{provide:Z,useClass:di},{provide:Ct,useFactory:gi,deps:[Bt,Z,Dt]}],vi=[{provide:x,useFactory:()=>new ie},{provide:rt,useValue:"BrowserAnimations"},...Le],on=[{provide:x,useClass:te},{provide:rt,useValue:"NoopAnimations"},...Le];function Ue(){return[...vi]}var $e={providers:[Ue(),zt([{path:"",pathMatch:"full",loadComponent:()=>mt(void 0,null,function*(){return import("./chunk-26UKLWSR.js")})}]),$t(),ht(Q,Oe,be),{provide:_e,useClass:Se}]};Lt(Be,$e).catch(t=>console.error(t));
//# sourceMappingURL=main-7C7QGDYD.js.map

import{Ba as Ve,Ca as We,Da as Ge,Ea as Ze,Eb as ti,Fa as Ye,G as Ne,Ga as Xe,H as pt,I as we,Ib as ii,J as He,Jb as oi,K as je,L as Fe,La as Je,a as te,ab as Ke,b as ee,bb as qe,ca as xe,d as rt,da as Ee,e as de,ea as Re,g as w,h as H,ib as Qe,l as Ie,la as ke,ma as Be,na as Ue,o as be,oa as Le,p as De,q as ct,r as Se,s as ut,sa as ze,u as Pe,v as Ae,wa as mt,xa as $e}from"./chunk-OYA7AIRI.js";import{$ as fe,Ca as Oe,D as ce,E as ue,H as pe,Q as me,Qa as ei,b as Jt,ba as ge,c as Kt,ca as G,d as qt,da as st,ea as ve,f as Qt,fa as at,g as ie,ga as he,ha as _e,i as oe,j as Mt,ja as Te,k as Ot,ka as Ce,l as It,ma as lt,ra as ye,sa as B,ta as Me,w as nt,za as h}from"./chunk-MWN37B3H.js";import"./chunk-J5MQQQCD.js";import{$b as Wt,A as Pt,Ab as tt,Bb as c,Cb as u,Db as m,Dc as Yt,Ea as z,Eb as x,Ec as N,Fa as $,Fb as E,Fc as O,Ga as V,Gb as D,Hb as et,I as At,Ia as jt,Ib as Ut,Ic as k,Jb as Lt,Ka as J,Kb as y,La as Ft,Lb as v,Lc as _,Mb as it,Nb as I,Oc as Xt,Qa as xt,Ra as yt,Sb as zt,Tb as $t,V as Nt,Vb as Vt,_b as M,ba as C,bc as ot,cb as W,cd as ne,dd as re,eb as K,ec as S,fc as R,gc as Gt,hb as l,ia as Y,ib as n,id as se,ja as d,kc as Zt,mb as Et,na as j,nb as Rt,oa as wt,od as ae,pb as kt,q as Z,qb as Bt,rd as le,sa as X,tc as P,u as L,ua as g,v as F,va as f,wa as Ct,wb as a,xb as q,yb as s,z as Tt,za as Ht,zb as Q,zc as A}from"./chunk-WKCCMHJP.js";import{f as St}from"./chunk-GOOAHOWT.js";function Di(t,i){if(t&1&&(D(0,3),S(1,"tuiMapper")),t&2){let e=i.$implicit,o=v(2);s("ngComponentOutlet",e.component.component)("ngComponentOutletInjector",Gt(1,2,e,o.mapper))}}function Si(t,i){if(t&1&&(c(0,"div",1),a(1,Di,2,5,"ng-container",2),u()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0),l(),s("ngForOf",e)}}var ni=(()=>{class t{constructor(e,o,r,p){this.allAlerts=e,this.injector=o,this.destroy$=r,this.cdr=p,this.alerts=[],this.trackBy=T=>T,this.mapper=T=>jt.create({providers:[{provide:rt,useValue:T}],parent:this.injector})}ngOnInit(){F(this.allAlerts).pipe(C(this.destroy$)).subscribe(e=>{this.alerts=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(n(Te),n(X),n(h,2),n(P))},t.\u0275cmp=g({type:t,selectors:[["tui-alert-host"]],features:[M([h])],decls:1,vars:2,consts:[["class","t-wrapper",4,"ngFor","ngForOf","ngForTrackBy"],[1,"t-wrapper"],[3,"ngComponentOutlet","ngComponentOutletInjector",4,"ngFor","ngForOf"],[3,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(e,o){e&1&&a(0,Si,2,2,"div",0),e&2&&s("ngForOf",o.alerts)("ngForTrackBy",o.trackBy)},dependencies:[N,Yt,be],styles:[`tui-alert-host>.t-wrapper{position:fixed;top:0;left:0;display:flex;width:100%;height:100%;flex-direction:column;pointer-events:none}tui-alert-host>.t-wrapper>*{pointer-events:auto}
`],encapsulation:2,data:{animation:[nt]}}),t})(),ri=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f({type:t}),t.\u0275inj=d({imports:[[_,De]]}),t})();var si=(()=>{class t{constructor(e,o,r){this.doc=e,this.el=o,this.renderer=r,this.activeElement=ce(this.doc),Promise.resolve().then(()=>this.el.nativeElement.focus())}onBlur(){this.renderer.removeAttribute(this.el.nativeElement,"tabIndex")}onFocusIn(e){let{nativeElement:o}=this.el;if(ae(o,e))return;let r=pe({initial:o,root:o});r&&r.focus()}ngOnDestroy(){ue(this.doc),Promise.resolve().then(()=>{le(this.activeElement)&&this.activeElement.focus()})}}return t.\u0275fac=function(e){return new(e||t)(n(A),n(J),n(Rt))},t.\u0275dir=Ct({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(e,o){e&1&&y("blur",function(){return o.onBlur()})("focusin.silent",function(p){return o.onFocusIn(p.target)},!1,K)}}),t})(),ai=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f({type:t}),t.\u0275inj=d({}),t})();function Pi(t,i){t&1&&D(0)}function Ai(t,i){t&1&&m(0,"tui-scroll-controls",5)}function Ni(t,i){if(t&1&&(c(0,"section",2),a(1,Pi,1,0,"ng-container",3)(2,Ai,1,0,"tui-scroll-controls",4),u()),t&2){let e=i.$implicit,o=v();s("@host",void 0),q("aria-labelledby",e.id),l(),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",e),l(),s("ngIf",!o.isMobile)}}function wi(t,i){if(t&1){let e=et();c(0,"div",6),y("transitionend",function(r){let p=z(e).tuiLet,T=v();return $(T.onDialog(r,!!T.dialogs.length,!!p))})("popstate",function(){let r=z(e).tuiLet,p=v();return $(p.closeLast(p.dialogs,!!r))},!1,K),u()}if(t&2){let e=v();tt("t-overlay_visible",e.dialogs.length)}}var bt={label:"ignoreMe"},Hi=t=>(t==null?void 0:t.label)===bt.label,ji=ne(Z(!1)),li=(()=>{class t{constructor(e,o,r,p,T,ft,gt,vt){this.isMobile=e,this.isDialogClosesOnBack$=o,this.dialogsByType=r,this.historyRef=p,this.titleService=T,this.destroy$=ft,this.cdr=gt,this.doc=vt,this.dialogs=[]}ngOnInit(){F(this.dialogsByType).pipe(L(e=>[].concat(...e).sort((o,r)=>o.createdAt-r.createdAt)),C(this.destroy$)).subscribe(e=>{var o;this.dialogs=e,this.cdr.markForCheck(),(o=this.doc.defaultView)===null||o===void 0||o.document.documentElement.classList.toggle("t-overscroll-none",!!e.length)})}closeLast(e,o){if(!o)return;let[r]=e.slice(-1);r&&(e.length>1&&this.historyRef.pushState(bt,this.titleService.getTitle()),r.$implicit.complete())}onDialog({propertyName:e},o,r){!r||e!=="letter-spacing"||(o?this.historyRef.pushState(bt,this.titleService.getTitle()):Hi(this.historyRef.state)&&this.historyRef.back())}}return t.\u0275fac=function(e){return new(e||t)(n(B),n(ji),n(lt),n(fe),n(qt),n(h,2),n(P),n(A))},t.\u0275cmp=g({type:t,selectors:[["tui-dialog-host"]],features:[M([h])],decls:3,vars:4,consts:[["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["class","t-overlay",3,"t-overlay_visible","transitionend","popstate",4,"tuiLet"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-scrollbars",4,"ngIf"],[1,"t-scrollbars"],[1,"t-overlay",3,"transitionend","popstate"]],template:function(e,o){e&1&&(a(0,Ni,3,5,"section",0)(1,wi,1,2,"div",1),S(2,"async")),e&2&&(s("ngForOf",o.dialogs),l(),s("tuiLet",R(2,2,o.isDialogClosesOnBack$)))},dependencies:[ct,N,si,we,Se,w,O,Ne,k],styles:["[_nghost-%COMP%]{position:fixed;left:0;bottom:0;width:100%;height:0}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-start;outline:none;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-dialog[_ngcontent-%COMP%]{bottom:auto;height:100%}.t-overlay[_ngcontent-%COMP%]{height:100%;pointer-events:none;touch-action:none;opacity:0;letter-spacing:normal;transition:opacity var(--tui-duration, .3s),letter-spacing .01s;background:rgba(0,0,0,.75);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;letter-spacing:1px}.t-dialog[_ngcontent-%COMP%]:last-of-type{z-index:1}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;margin:0;color:#747474}"],data:{animation:[ie("host",[Mt(":enter",[oe({overflow:"clip"}),It(":scope > *",[Ot()],{optional:!0})]),Mt(":leave",[It(":scope > *",[Ot()],{optional:!0})])])]}}),t})(),ci=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f({type:t}),t.\u0275inj=d({imports:[[_,H,He,ai,pt,ut]]}),t})();var Fi=["*"],xi=t=>({$implicit:t});function Ei(t,i){if(t&1&&m(0,"tui-svg",5),t&2){let e=i.polymorpheusOutlet;s("src",e)}}function Ri(t,i){if(t&1&&(x(0),a(1,Ei,1,1,"tui-svg",4),E()),t&2){let e=v();l(),s("polymorpheusOutlet",e.icon)("polymorpheusOutletContext",ot(2,xi,e.status))}}function ki(t,i){if(t&1){let e=et();c(0,"button",6),S(1,"async"),y("click",function(){z(e);let r=v();return $(r.close.emit())}),u()}if(t&2){let e=v();s("icon",e.icons.close)("title",R(1,2,e.closeWord$))}}var ui=(()=>{class t{constructor(e,o,r){this.closeWord$=e,this.icons=o,this.options=r,this.hasIcon=this.options.hasIcon,this.icon=this.options.icon,this.status=this.options.status,this.size=this.options.size,this.hideClose=!1,this.close=new Ft}get hasClose(){return!this.hideClose&&me(this.close)}}return t.\u0275fac=function(e){return new(e||t)(n(ze),n(Le),n(mt))},t.\u0275cmp=g({type:t,selectors:[["tui-notification"],["a","tuiNotification",""],["button","tuiNotification",""]],hostVars:2,hostBindings:function(e,o){e&2&&q("data-status",o.status)("data-size",o.size)},inputs:{hasIcon:"hasIcon",icon:"icon",status:"status",size:"size",hideClose:"hideClose"},outputs:{close:"close"},ngContentSelectors:Fi,decls:5,vars:3,consts:[[4,"ngIf"],[1,"t-content"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button","class","t-close",3,"icon","title","click",4,"ngIf"],["automation-id","tui-notification__more",1,"t-more",3,"src"],["automation-id","tui-notification__icon","class","t-icon",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-notification__icon",1,"t-icon",3,"src"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button",1,"t-close",3,"click","icon","title"]],template:function(e,o){e&1&&(it(),a(0,Ri,2,4,"ng-container",0),c(1,"div",1),I(2),u(),a(3,ki,2,4,"button",2),m(4,"tui-svg",3)),e&2&&(s("ngIf",o.icon&&o.hasIcon),l(3),s("ngIf",o.hasClose),l(),s("src",o.icons.more))},dependencies:[Ye,Ke,O,w,k],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:flex;padding:.75rem 1rem;border-radius:var(--tui-radius-m);background:#fff;background:var(--tui-base-01);box-sizing:border-box;overflow:hidden;text-align:left}[_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{display:none}button[_nghost-%COMP%], a[_nghost-%COMP%]{border:none;cursor:pointer}button[_nghost-%COMP%]   .t-more[_ngcontent-%COMP%], a[_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{display:inline-flex;color:var(--tui-text-01);opacity:.5}[data-size=s][_nghost-%COMP%]{padding:.375rem .625rem}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1.25rem;margin:0 .375rem 0 -.125rem}[data-size=s][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem .75rem}[data-size=s][_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem 0}[data-size=m][_nghost-%COMP%]{padding:.75rem}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;margin-right:.5rem}[data-size=m][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.125rem -.125rem 1rem}[data-size=m][_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem 0}[data-size=l][_nghost-%COMP%]{padding:1rem;font:var(--tui-font-text-m);border-radius:var(--tui-radius-l)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:.5rem}[data-size=l][_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{margin-right:-.5rem}[data-status=info][_nghost-%COMP%]{color:var(--tui-info-fill);background:linear-gradient(var(--tui-info-bg),var(--tui-info-bg)),var(--tui-base-01)}[data-status=success][_nghost-%COMP%]{color:var(--tui-success-fill);background:linear-gradient(var(--tui-success-bg),var(--tui-success-bg)),var(--tui-base-01)}[data-status=error][_nghost-%COMP%]{color:var(--tui-error-fill);background:linear-gradient(var(--tui-error-bg),var(--tui-error-bg)),var(--tui-base-01)}[data-status=warning][_nghost-%COMP%]{color:var(--tui-warning-fill);background:linear-gradient(var(--tui-warning-bg),var(--tui-warning-bg)),var(--tui-base-01)}[data-status=neutral][_nghost-%COMP%]{color:var(--tui-neutral-fill);background:linear-gradient(var(--tui-neutral-bg),var(--tui-neutral-bg)),var(--tui-base-01)}.t-content[_ngcontent-%COMP%]{flex:1;word-break:break-word;color:var(--tui-text-01);text-align:inherit;align-self:center}"],changeDetection:0}),t})(),pi=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f({type:t}),t.\u0275inj=d({imports:[[_,Xe,qe,H]]}),t})();function Ui(t,i){if(t&1&&(x(0),$t(1),E()),t&2){let e=i.polymorpheusOutlet;l(),Vt(" ",e," ")}}function Li(t,i){if(t&1&&(c(0,"label",4),a(1,Ui,2,1,"ng-container",5),u()),t&2){let e=v();l(),s("polymorpheusOutlet",e.item.label)("polymorpheusOutletContext",e.item)}}function zi(t,i){if(t&1&&m(0,"div",6),t&2){let e=i.polymorpheusOutlet;s("innerHTML",e,W)}}var $i=re(()=>wt(B)?"1rem 1rem 0 auto":"2rem 3rem 0 auto"),Vi=(()=>{class t{constructor(e,o,r,p,T){this.el=e,this.destroy$=o,this.position=r,this.options=p,this.item=T,this.autoClose=typeof this.item.autoClose=="function"?this.item.autoClose(this.item.status):this.item.autoClose,this.animation=this.position.endsWith("auto")?Object.assign(Object.assign({},this.options),{value:"right"}):Object.assign(Object.assign({},this.options),{value:"left"})}ngOnInit(){this.initAutoClose()}close(){this.item.$implicit.complete()}initAutoClose(){this.autoClose&&Pt(se(this.autoClose)?this.autoClose:3e3).pipe(C(Tt(this.el.nativeElement,"mouseenter")),Nt(()=>Tt(this.el.nativeElement,"mouseleave")),C(this.destroy$)).subscribe(()=>this.close())}}return t.\u0275fac=function(e){return new(e||t)(n(J),n(h,2),n($i),n(Ue),n(rt))},t.\u0275cmp=g({type:t,selectors:[["tui-alert"]],hostAttrs:["role","alert"],hostVars:5,hostBindings:function(e,o){e&2&&(Lt("@tuiFadeIn",o.options)("@tuiSlideIn",o.animation)("@tuiHeightCollapse",o.animation),Q("margin",o.position))},features:[M([h])],decls:4,vars:7,consts:[[3,"close","hasIcon","hideClose","icon","status"],["automation-id","tui-notification-alert__heading","class","t-heading",4,"ngIf"],["automation-id","tui-notification-alert__content",1,"t-content"],[3,"innerHTML",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-notification-alert__heading",1,"t-heading"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[3,"innerHTML"]],template:function(e,o){e&1&&(c(0,"tui-notification",0),y("close",function(){return o.close()}),a(1,Li,2,2,"label",1),c(2,"div",2),a(3,zi,1,1,"div",3),u()()),e&2&&(s("hasIcon",o.item.hasIcon)("hideClose",!o.item.hasCloseButton)("icon",o.item.icon)("status",o.item.status),l(),s("ngIf",o.item.label),l(2),s("polymorpheusOutlet",o.item.content)("polymorpheusOutletContext",o.item))},dependencies:[ui,O,w],styles:["[_nghost-%COMP%]{display:block;box-shadow:var(--tui-shadow-dropdown);border-radius:var(--tui-radius-l);width:18rem}[_nghost-%COMP%]:not(:first-child){margin-top:.75rem!important}[_nghost-%COMP%]:not(:last-child){margin-bottom:0!important}.t-heading[_ngcontent-%COMP%]{margin:0}[data-size=s][_ngcontent-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-s);font-weight:bold}[data-size=m][_ngcontent-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem;font-weight:bold}[data-size=l][_ngcontent-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-l);line-height:1.5rem;font-weight:bold}.t-content[_ngcontent-%COMP%]{color:var(--tui-text-01);word-wrap:break-word;word-break:break-word}.t-content[_ngcontent-%COMP%]:empty{display:none}"],data:{animation:[Ee,Re,xe]},changeDetection:0}),t})(),Wi=(()=>{class t extends Ie{constructor(e,o){super(o),this.defaultOptions=e,this.component=new de(Vi)}}return t.\u0275fac=function(e){return new(e||t)(j(mt),j(Oe))},t.\u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var mi=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f({type:t}),t.\u0275inj=d({providers:[Ce(Wi)],imports:[[_,H,pi]]}),t})();var Zi=t=>({$implicit:t});function Yi(t,i){t&1&&D(0)}function Xi(t,i){if(t&1&&(c(0,"div",1),a(1,Yi,1,0,"ng-container",2),u()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0)("tuiActiveZoneParent",e.activeZone||null),l(),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",ot(4,Zi,e))}}var di=(()=>{class t{constructor(e,o,r){this.hints$=e,this.destroy$=o,this.cdr=r,this.hints=[]}ngOnInit(){this.hints$.pipe(C(this.destroy$)).subscribe(e=>{this.hints=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(n(Ge),n(h,2),n(P))},t.\u0275cmp=g({type:t,selectors:[["tui-hints-host"]],hostAttrs:["aria-live","polite"],features:[M([h])],decls:1,vars:1,consts:[["role","tooltip",3,"tuiActiveZoneParent",4,"ngFor","ngForOf"],["role","tooltip",3,"tuiActiveZoneParent"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(e,o){e&1&&a(0,Xi,2,6,"div",0),e&2&&s("ngForOf",o.hints)},dependencies:[N,Pe,w],styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:0}"],data:{animation:[nt]}}),t})(),fi=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f({type:t}),t.\u0275inj=d({imports:[[_,H,Ae]]}),t})();function Ki(t,i){if(t&1&&(V(),m(0,"defs",4)),t&2){let e=i.$implicit;s("innerHTML",e,W)}}function qi(t,i){if(t&1&&(V(),x(0),a(1,Ki,1,1,"defs",3),E()),t&2){let e=v();l(),s("ngForOf",e.items)}}function Qi(t,i){if(t&1&&(V(),c(0,"defs"),m(1,"svg",6),u()),t&2){let e=i.$implicit;l(),s("outerHTML",e,W)}}function to(t,i){if(t&1&&a(0,Qi,2,1,"defs",5),t&2){let e=v();s("ngForOf",e.items)}}var gi=(()=>{class t{constructor(e,o,r,p){this.svgService=e,this.cdr=o,this.destroy$=r,this.isBrowser=!0,this.isBrowser=!Xt(p)}ngOnInit(){this.svgService.items$.pipe(C(this.destroy$)).subscribe(e=>{this.items=e.values(),this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(n(Ze),n(P),n(h,2),n(xt))},t.\u0275cmp=g({type:t,selectors:[["tui-svg-defs-host"]],features:[M([h])],decls:4,vars:2,consts:[["server",""],["version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","xmlns","http://www.w3.org/2000/svg"],[4,"ngIf","ngIfElse"],[3,"innerHTML",4,"ngFor","ngForOf"],[3,"innerHTML"],[4,"ngFor","ngForOf"],[3,"outerHTML"]],template:function(e,o){if(e&1&&(V(),c(0,"svg",1),a(1,qi,2,1,"ng-container",2)(2,to,1,1,"ng-template",null,0,Zt),u()),e&2){let r=zt(3);l(),s("ngIf",o.isBrowser)("ngIfElse",r)}},dependencies:[O,N],styles:["[_nghost-%COMP%]{display:none}"],changeDetection:0}),t})(),vi=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f({type:t}),t.\u0275inj=d({imports:[[_,pt]]}),t})();var io=["*",[["tuiOverContent"]],[["tuiOverDialogs"]],[["tuiOverAlerts"]],[["tuiOverPortals"]],[["tuiOverHints"]]],oo=["*","tuiOverContent","tuiOverDialogs","tuiOverAlerts","tuiOverPortals","tuiOverHints"];function no(t,i){t&1&&m(0,"tui-scroll-controls",2)}var hi=(()=>{class t{constructor(e,o,r,p,T,ft,gt,vt,Ii){var ht;this.reducedMotion=e,this.duration=o,this.dialogs=r,this.isMobile=p,this.breakpoint=T,this.isIOS=ft,this.isAndroid=gt,this.isMobileRes$=this.breakpoint.pipe(L(_t=>_t==="mobile")),this.scrollbars$=this.dialogs.length&&!this.isMobile?F([...this.dialogs]).pipe(L(_t=>!_t.some(({length:bi})=>bi)),At(0)):Z(!this.isMobile),(ht=vt.defaultView)===null||ht===void 0||ht.document.body.setAttribute("data-tui-theme",Ii.toLowerCase())}}return t.\u0275fac=function(e){return new(e||t)(n(ke),n(Be),n(lt),n(B),n(We),n(ye),n(Me),n(A),n(Ve))},t.\u0275cmp=g({type:t,selectors:[["tui-root"]],hostAttrs:["data-tui-version","3.82.0"],hostVars:9,hostBindings:function(e,o){e&1&&y("touchstart.passive.silent",function(){return 0})("$.class._mobile",function(){return o.isMobileRes$}),e&2&&(Ut("$.class._mobile",o.isMobileRes$),Q("--tui-duration",o.duration,"ms"),tt("_ios",o.isIOS)("_android",o.isAndroid)("_reduced-motion",o.reducedMotion))},ngContentSelectors:oo,decls:14,vars:3,consts:[["class","t-root-scrollbar",4,"ngIf"],[1,"t-root-content"],[1,"t-root-scrollbar"]],template:function(e,o){e&1&&(it(io),a(0,no,1,0,"tui-scroll-controls",0),S(1,"async"),m(2,"tui-svg-defs-host"),c(3,"tui-dropdown-host")(4,"div",1),I(5),u(),I(6,1),m(7,"tui-dialog-host"),I(8,2),m(9,"tui-alert-host"),I(10,3),u(),I(11,4),m(12,"tui-hints-host"),I(13,5)),e&2&&s("ngIf",R(1,1,o.scrollbars$))},dependencies:[ct,gi,je,li,ni,di,O,k],styles:[`@keyframes tuiPresent{to{content:"1"}}@keyframes tuiSkeletonVibe{to{opacity:.5}}html,.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar,html::-webkit-scrollbar-thumb,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body[data-tui-theme]{font:var(--tui-font-text-s);color:var(--tui-text-01);background:var(--tui-base-01);margin:0}tui-root{position:relative;display:block;flex:1;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{height:100%;isolation:isolate;transform:translateY(var(--t-root-top))}[tuiDropdownButton][tuiDropdownButton]{display:none}.t-overscroll-none{overscroll-behavior:none}
`],encapsulation:2}),t})(),dt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f({type:t}),t.\u0275inj=d({imports:[[_,Je,Fe,vi,fi,ci,ri,ut]]}),t})();var ro=[import("./chunk-TDHOYHWP.js").then(({StarterKit:t})=>t).then(t=>t.configure({heading:{levels:[1,2,3,4,5,6]}})),import("./chunk-FIA4QGVF.js").then(({default:t})=>t.configure({types:["heading","paragraph"]})),import("./chunk-4UKZBYPS.js").then(({default:t})=>t),import("./chunk-FUMOYEVA.js").then(({default:t})=>t),import("./chunk-DAPS4CYE.js").then(({default:t})=>t),import("./chunk-YCMBXQIW.js").then(({default:t})=>t),import("./chunk-2C42PP3N.js").then(({FontColor:t})=>t),import("./chunk-Y5NTPBCX.js").then(({TuiLink:t})=>t),import("./chunk-JOF5LDD4.js").then(({TuiJumpAnchor:t})=>t),import("./chunk-4KXESJXW.js").then(({TuiFileLink:t})=>t),import("./chunk-LMX2ACGI.js").then(({BackgroundColor:t})=>t),import("./chunk-4TB5QD4Q.js").then(({TuiTable:t})=>t.configure({resizable:!0})),import("./chunk-WBOTJDKX.js").then(({TuiTableCell:t})=>t),import("./chunk-YBSSW44U.js").then(({default:t})=>t),import("./chunk-NRKGVSLD.js").then(({TableHeader:t})=>t),import("./chunk-WQ5F45AV.js").then(({TuiTabExtension:t})=>t),import("./chunk-NEE5JZUV.js").then(({TableCellBackground:t})=>t),import("./chunk-F434QMFB.js").then(({TuiDetailsContent:t})=>t),import("./chunk-F434QMFB.js").then(({TuiDetails:t})=>t),import("./chunk-F434QMFB.js").then(({TuiSummary:t})=>t),import("./chunk-ZISPUAXL.js").then(({TuiFontSize:t})=>t)],_i=ro;var Ti=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=g({type:i,selectors:[["app"]],standalone:!0,features:[Wt],decls:7,vars:0,consts:[["ngProjectAs","tuiOverContent",5,["tuiOverContent"]],["ngProjectAs","tuiOverDialogs",5,["tuiOverDialogs"]],["ngProjectAs","tuiOverAlerts",5,["tuiOverAlerts"]],["ngProjectAs","tuiOverPortals",5,["tuiOverPortals"]],["ngProjectAs","tuiOverHints",5,["tuiOverHints"]]],template:function(r,p){r&1&&(c(0,"tui-root"),m(1,"router-outlet"),D(2,0)(3,1)(4,2)(5,3)(6,4),u())},dependencies:[dt,hi,te,ii],encapsulation:2,changeDetection:0});let t=i;return t})();var so=(()=>{let i=class i extends at{constructor(o,r,p){super(o,r,p)}ngOnDestroy(){this.flush()}};i.\u0275fac=function(r){return new(r||i)(j(A),j(G),j(st))},i.\u0275prov=Y({token:i,factory:i.\u0275fac});let t=i;return t})();function ao(){return new ve}function lo(t,i,e){return new _e(t,i,e)}var Ci=[{provide:st,useFactory:ao},{provide:at,useClass:so},{provide:Et,useFactory:lo,deps:[Jt,at,Bt]}],co=[{provide:G,useFactory:()=>new he},{provide:yt,useValue:"BrowserAnimations"},...Ci],Fr=[{provide:G,useClass:ge},{provide:yt,useValue:"NoopAnimations"},...Ci];function yi(){return kt("NgEagerAnimations"),[...co]}var Mi={providers:[yi(),ee([{path:"",pathMatch:"full",loadComponent:()=>St(void 0,null,function*(){return import("./chunk-EEKT626J.js")})}]),Qt(),Ht(dt,mi,Qe,ti),{provide:ei,deps:[X],useFactory:t=>[..._i,import("./chunk-5VR3WYO2.js").then(({tuiCreateImageEditorExtension:i})=>i({injector:t}))]},{provide:$e,useClass:oi}]};var Oi={production:!1};Oi.production&&void 0;Kt(Ti,Mi).catch(t=>console.error(t));
//# sourceMappingURL=main-V55YYGSF.js.map

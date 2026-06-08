import{$ as pt,$a as f,$b as Zt,Ab as no,Ac as Co,B as qn,Bb as Xi,Bc as ni,C as Ui,Ca as I,Cb as vt,Cc as oi,Da as E,Db as oo,Dc as ri,Ea as x,Eb as oe,Fa as J,Fb as ro,G as Ut,Ga as Oe,Gb as P,H as qt,Hb as De,I as ve,Ia as Yt,Ib as ao,J as Ue,Ja as Qn,Jb as so,K,Kb as Qi,L as Gn,La as _t,Lb as lo,Ma as L,Mb as co,N as Gt,Na as _,Nb as ho,Oa as v,Ob as mo,P as ye,Pa as Gi,Pb as Qt,Q as G,Qa as Wi,R,Ra as y,Sa as l,T as C,Ta as c,Ua as V,V as s,Va as pe,Vb as Ze,Wa as fe,Wb as ue,X as Wt,Xa as Pe,Xb as Je,Ya as ge,Yb as yt,Z as U,Za as be,Zb as Kt,_ as q,_a as b,_b as Ce,a as $,aa as de,ab as W,ac as Ki,b as ce,ba as re,bb as O,bc as uo,c as xe,ca as qi,cb as Fe,cc as po,db as he,dc as ze,e as mt,ea as N,eb as D,ec as fo,f as Nn,fa as z,fb as S,fc as go,g as M,gb as Kn,gc as le,hb as Zn,hc as _o,i as Ln,ia as k,ib as $i,ic as Zi,j as zn,ja as ae,jb as qe,jc as et,k as Bn,ka as se,kb as Ge,kc as Jt,l as Hn,la as Me,lb as w,lc as tt,m as ut,ma as A,mb as Le,mc as Ji,na as Wn,nb as u,nc as en,o as Ht,ob as Y,oc as vo,pa as $n,pb as me,pc as Re,q as je,qa as Yn,qb as j,qc as Q,ra as $t,rb as Yi,rc as Te,sa as d,sb as Jn,sc as yo,ta as Ne,tb as eo,tc as ei,u as jn,ua as ft,ub as to,uc as bo,v as Un,va as Ie,vc as We,w as Ee,wa as ee,wb as ke,wc as ti,x as _e,xa as Z,xb as X,xc as Se,y as jt,ya as gt,yb as Xt,yc as B,za as Xn,zb as io,zc as ii}from"./chunk-TLNHV76H.js";var Po=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(Z(ee),Z(A))};static \u0275dir=x({type:n})}return n})(),Sa=(()=>{class n extends Po{static \u0275fac=(()=>{let e;return function(o){return(e||(e=Me(n)))(o||n)}})();static \u0275dir=x({type:n,features:[J]})}return n})(),vi=new C("");var Oa={provide:vi,useExisting:ye(()=>yi),multi:!0};function Pa(){let n=Qi()?Qi().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Ra=new C(""),yi=(()=>{class n extends Po{_compositionMode;_composing=!1;constructor(e,t,o){super(e,t),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Pa())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(Z(ee),Z(A),Z(Ra,8))};static \u0275dir=x({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,o){t&1&&b("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[j([Oa]),J]})}return n})();function on(n){return n==null||rn(n)===0}function rn(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Ye=new C(""),an=new C(""),Ea=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ot=class{static min(i){return Ia(i)}static max(i){return Fa(i)}static required(i){return Ro(i)}static requiredTrue(i){return Ta(i)}static email(i){return Aa(i)}static minLength(i){return Va(i)}static maxLength(i){return Eo(i)}static pattern(i){return Na(i)}static nullValidator(i){return si()}static compose(i){return No(i)}static composeAsync(i){return Lo(i)}};function Ia(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function Fa(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function Ro(n){return on(n.value)?{required:!0}:null}function Ta(n){return n.value===!0?null:{required:!0}}function Aa(n){return on(n.value)||Ea.test(n.value)?null:{email:!0}}function Va(n){return i=>{let e=i.value?.length??rn(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Eo(n){return i=>{let e=i.value?.length??rn(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Na(n){if(!n)return si;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(on(t.value))return null;let o=t.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function si(n){return null}function Io(n){return n!=null}function Fo(n){return Qn(n)?Hn(n):n}function To(n){let i={};return n.forEach(e=>{i=e!=null?$($({},i),e):i}),Object.keys(i).length===0?null:i}function Ao(n,i){return i.map(e=>e(n))}function La(n){return!n.validate}function Vo(n){return n.map(i=>La(i)?i:e=>i.validate(e))}function No(n){if(!n)return null;let i=n.filter(Io);return i.length==0?null:function(e){return To(Ao(e,i))}}function sn(n){return n!=null?No(Vo(n)):null}function Lo(n){if(!n)return null;let i=n.filter(Io);return i.length==0?null:function(e){let t=Ao(e,i).map(Fo);return Un(t).pipe(je(To))}}function ln(n){return n!=null?Lo(Vo(n)):null}function wo(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function zo(n){return n._rawValidators}function Bo(n){return n._rawAsyncValidators}function tn(n){return n?Array.isArray(n)?n:[n]:[]}function li(n,i){return Array.isArray(n)?n.includes(i):n===i}function xo(n,i){let e=tn(i);return tn(n).forEach(o=>{li(e,o)||e.push(o)}),e}function Mo(n,i){return tn(i).filter(e=>!li(n,e))}var ci=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=sn(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=ln(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},$e=class extends ci{name;get formDirective(){return null}get path(){return null}},Ae=class extends ci{_parent=null;name=null;valueAccessor=null},nn=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Ho=(()=>{class n extends nn{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(Z(Ae,2))};static \u0275dir=x({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,o){t&2&&w("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[J]})}return n})();var bt="VALID",ai="INVALID",it="PENDING",Ct="DISABLED",Be=class{},di=class extends Be{value;source;constructor(i,e){super(),this.value=i,this.source=e}},xt=class extends Be{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Mt=class extends Be{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},nt=class extends Be{status;source;constructor(i,e){super(),this.status=i,this.source=e}},hi=class extends Be{source;constructor(i){super(),this.source=i}},mi=class extends Be{source;constructor(i){super(),this.source=i}};function jo(n){return(bi(n)?n.validators:n)||null}function za(n){return Array.isArray(n)?sn(n):n||null}function Uo(n,i){return(bi(i)?i.asyncValidators:n)||null}function Ba(n){return Array.isArray(n)?ln(n):n||null}function bi(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Ha(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new Gt(1e3,"");if(!t[e])throw new Gt(1001,"")}function ja(n,i,e){n._forEachChild((t,o)=>{if(e[o]===void 0)throw new Gt(-1002,"")})}var ui=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return ke(this.statusReactive)}set status(i){ke(()=>this.statusReactive.set(i))}_status=X(()=>this.statusReactive());statusReactive=k(void 0);get valid(){return this.status===bt}get invalid(){return this.status===ai}get pending(){return this.status===it}get disabled(){return this.status===Ct}get enabled(){return this.status!==Ct}errors;get pristine(){return ke(this.pristineReactive)}set pristine(i){ke(()=>this.pristineReactive.set(i))}_pristine=X(()=>this.pristineReactive());pristineReactive=k(!0);get dirty(){return!this.pristine}get touched(){return ke(this.touchedReactive)}set touched(i){ke(()=>this.touchedReactive.set(i))}_touched=X(()=>this.touchedReactive());touchedReactive=k(!1);get untouched(){return!this.touched}_events=new M;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(xo(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(xo(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Mo(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Mo(i,this._rawAsyncValidators))}hasValidator(i){return li(this._rawValidators,i)}hasAsyncValidator(i){return li(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(ce($({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Mt(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Mt(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(ce($({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new xt(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new xt(!0,t))}markAsPending(i={}){this.status=it;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new nt(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(ce($({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ct,this.errors=null,this._forEachChild(o=>{o.disable(ce($({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new di(this.value,t)),this._events.next(new nt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ce($({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=bt,this._forEachChild(t=>{t.enable(ce($({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ce($({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===bt||this.status===it)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new di(this.value,e)),this._events.next(new nt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(ce($({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ct:bt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=it,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Fo(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,o)=>t&&t._find(o),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new nt(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?Ct:this.errors?ai:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(it)?it:this._anyControlsHaveStatus(ai)?ai:bt}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),o=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),o&&this._events.next(new xt(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Mt(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){bi(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=za(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Ba(this._rawAsyncValidators)}},pi=class extends ui{constructor(i,e,t){super(jo(e),Uo(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){ja(this,!0,i),Object.keys(i).forEach(t=>{Ha(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let o=this.controls[t];o&&o.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,o)=>{t.reset(i?i[o]:null,ce($({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new mi(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,o)=>((t.enabled||this.disabled)&&(e[o]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((o,r)=>{t=e(t,o,r)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Ci=new C("",{factory:()=>cn}),cn="always";function Ua(n,i){return[...i.path,n]}function fi(n,i,e=cn){dn(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),Ga(n,i),$a(n,i),Wa(n,i),qa(n,i)}function ko(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),_i(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function gi(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function qa(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function dn(n,i){let e=zo(n);i.validator!==null?n.setValidators(wo(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=Bo(n);i.asyncValidator!==null?n.setAsyncValidators(wo(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let o=()=>n.updateValueAndValidity();gi(i._rawValidators,o),gi(i._rawAsyncValidators,o)}function _i(n,i){let e=!1;if(n!==null){if(i.validator!==null){let o=zo(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.validator);r.length!==o.length&&(e=!0,n.setValidators(r))}}if(i.asyncValidator!==null){let o=Bo(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.asyncValidator);r.length!==o.length&&(e=!0,n.setAsyncValidators(r))}}}let t=()=>{};return gi(i._rawValidators,t),gi(i._rawAsyncValidators,t),e}function Ga(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&qo(n,i)})}function Wa(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&qo(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function qo(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function $a(n,i){let e=(t,o)=>{i.valueAccessor.writeValue(t),o&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Go(n,i){n==null,dn(n,i)}function Ya(n,i){return _i(n,i)}function Xa(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Qa(n){return Object.getPrototypeOf(n.constructor)===Sa}function Wo(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Ka(n,i){if(!i)return null;Array.isArray(i);let e,t,o;return i.forEach(r=>{r.constructor===yi?e=r:Qa(r)?t=r:o=r}),o||t||e||null}function Za(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var Ja={provide:$e,useExisting:ye(()=>kt)},wt=Promise.resolve(),kt=(()=>{class n extends $e{callSetDisabledState;get submitted(){return ke(this.submittedReactive)}_submitted=X(()=>this.submittedReactive());submittedReactive=k(!1);_directives=new Set;form;ngSubmit=new N;options;constructor(e,t,o){super(),this.callSetDisabledState=o,this.form=new pi({},sn(e),ln(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){wt.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),fi(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){wt.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){wt.then(()=>{let t=this._findContainer(e.path),o=new pi({});Go(o,e),t.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){wt.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){wt.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Wo(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new hi(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(Z(Ye,10),Z(an,10),Z(Ci,8))};static \u0275dir=x({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){t&1&&b("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[j([Ja]),J]})}return n})();function Do(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function So(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var $o=class extends ui{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(jo(e),Uo(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),bi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(So(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new mi(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Do(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Do(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){So(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var es=n=>n instanceof $o;var ts={provide:Ae,useExisting:ye(()=>hn)},Oo=Promise.resolve(),hn=(()=>{class n extends Ae{_changeDetectorRef;callSetDisabledState;control=new $o;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new N;constructor(e,t,o,r,a,h){super(),this._changeDetectorRef=a,this.callSetDisabledState=h,this._parent=e,this._setValidators(t),this._setAsyncValidators(o),this.valueAccessor=Ka(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Xa(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){fi(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Oo.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,o=t!==0&&P(t);Oo.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Ua(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(Z($e,9),Z(Ye,10),Z(an,10),Z(vi,10),Z(oe,8),Z(Ci,8))};static \u0275dir=x({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[j([ts]),J,se]})}return n})();var is=(()=>{class n extends $e{callSetDisabledState;get submitted(){return ke(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=X(()=>this._submittedReactive());_submittedReactive=k(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(_i(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return fi(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){ko(e.control||null,e,!1),Za(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Wo(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new hi(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,o=this.form.get(e.path);t!==o&&(ko(t||null,e),es(o)&&(fi(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Go(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Ya(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){dn(this.form,this),this._oldForm&&_i(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(Z(Ye,10),Z(an,10),Z(Ci,8))};static \u0275dir=x({type:n,features:[J,se]})}return n})();var ns={provide:$e,useExisting:ye(()=>Dt)},Dt=(()=>{class n extends is{form=null;ngSubmit=new N;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Me(n)))(o||n)}})();static \u0275dir=x({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,o){t&1&&b("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[j([ns]),J]})}return n})();function os(n){return typeof n=="number"?n:parseInt(n,10)}var Yo=(()=>{class n{_validator=si;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):si,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,features:[se]})}return n})();var rs={provide:Ye,useExisting:ye(()=>mn),multi:!0};var mn=(()=>{class n extends Yo{required;inputName="required";normalizeInput=P;createValidator=e=>Ro;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Me(n)))(o||n)}})();static \u0275dir=x({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,o){t&2&&L("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[j([rs]),J]})}return n})();var as={provide:Ye,useExisting:ye(()=>un),multi:!0},un=(()=>{class n extends Yo{maxlength;inputName="maxlength";normalizeInput=e=>os(e);createValidator=e=>Eo(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=Me(n)))(o||n)}})();static \u0275dir=x({type:n,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,o){t&2&&L("maxlength",o._enabled?o.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[j([as]),J]})}return n})();var ss=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({})}return n})();var Xo=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Ci,useValue:e.callSetDisabledState??cn}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[ss]})}return n})();var cs=["*"];var ds=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],hs=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],ms=new C("MAT_CARD_CONFIG"),Qo=(()=>{class n{appearance;constructor(){let e=s(ms,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,o){t&2&&w("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:cs,decls:1,vars:0,template:function(t,o){t&1&&(W(),O(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ko=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Zo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),Jo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})();var er=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:hs,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,o){t&1&&(W(ds),O(0),pe(1,"div",0),O(2,1),fe(),O(3,2))},encapsulation:2,changeDetection:0})}return n})();var tr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[B]})}return n})();var rt=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var at=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,o,r){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=r}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(o,e)??!1;r!==i&&(this.errorState=r,this._stateChanges.next())}};var pn=class{_box;_destroyed=new M;_resizeSubject=new M;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new mt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(_e(e=>e.some(t=>t.target===i)),qt({bufferSize:1,refCount:!0}),K(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ir=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(z);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new pn(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ps=["notch"],fs=["matFormFieldNotchedOutline",""],gs=["*"],nr=["iconPrefixContainer"],or=["textPrefixContainer"],rr=["iconSuffixContainer"],ar=["textSuffixContainer"],_s=["textField"],vs=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ys=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function bs(n,i){n&1&&V(0,"span",21)}function Cs(n,i){if(n&1&&(l(0,"label",20),O(1,1),_(2,bs,1,0,"span",21),c()),n&2){let e=f(2);y("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),L("for",e._control.disableAutomaticLabeling?null:e._control.id),d(2),v(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ws(n,i){if(n&1&&_(0,Cs,3,5,"label",20),n&2){let e=f();v(e._hasFloatingLabel()?0:-1)}}function xs(n,i){n&1&&V(0,"div",7)}function Ms(n,i){}function ks(n,i){if(n&1&&Oe(0,Ms,0,0,"ng-template",13),n&2){f(2);let e=qe(1);y("ngTemplateOutlet",e)}}function Ds(n,i){if(n&1&&(l(0,"div",9),_(1,ks,1,1,null,13),c()),n&2){let e=f();y("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),d(),v(e._forceDisplayInfixLabel()?-1:1)}}function Ss(n,i){n&1&&(l(0,"div",10,2),O(2,2),c())}function Os(n,i){n&1&&(l(0,"div",11,3),O(2,3),c())}function Ps(n,i){}function Rs(n,i){if(n&1&&Oe(0,Ps,0,0,"ng-template",13),n&2){f();let e=qe(1);y("ngTemplateOutlet",e)}}function Es(n,i){n&1&&(l(0,"div",14,4),O(2,4),c())}function Is(n,i){n&1&&(l(0,"div",15,5),O(2,5),c())}function Fs(n,i){n&1&&V(0,"div",16)}function Ts(n,i){n&1&&(l(0,"div",18),O(1,6),c())}function As(n,i){if(n&1&&(l(0,"mat-hint",22),u(1),c()),n&2){let e=f(2);y("id",e._hintLabelId),d(),Y(e.hintLabel)}}function Vs(n,i){if(n&1&&(l(0,"div",19),_(1,As,2,2,"mat-hint",22),O(2,7),V(3,"div",23),O(4,8),c()),n&2){let e=f();d(),v(e.hintLabel?1:-1)}}var St=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["mat-label"]]})}return n})(),ur=new C("MatError"),gn=(()=>{class n{id=s(le).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,o){t&2&&be("id",o.id)},inputs:{id:"id"},features:[j([{provide:ur,useExisting:n}])]})}return n})(),fn=(()=>{class n{align="start";id=s(le).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(be("id",o.id),L("align",null),w("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Ns=new C("MatPrefix");var Ls=new C("MatSuffix");var pr=new C("FloatingLabelParent"),sr=(()=>{class n{_elementRef=s(A);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(ir);_ngZone=s(z);_parent=s(pr);_resizeSubscription=new xe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return zs(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&w("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function zs(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var lr="mdc-line-ripple--active",wi="mdc-line-ripple--deactivating",cr=(()=>{class n{_elementRef=s(A);_cleanupTransitionEnd;constructor(){let e=s(z),t=s(ee);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(wi),e.add(lr)}deactivate(){this._elementRef.nativeElement.classList.add(wi)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(wi);e.propertyName==="opacity"&&o&&t.remove(lr,wi)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),dr=(()=>{class n{_elementRef=s(A);_ngZone=s(z);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,o){if(t&1&&he(ps,5),t&2){let r;D(r=S())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,o){t&2&&w("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:fs,ngContentSelectors:gs,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,o){t&1&&(W(),Pe(0,"div",1),pe(1,"div",2,0),O(3),fe(),Pe(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Ot=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n})}return n})();var Pt=new C("MatFormField"),Bs=new C("MAT_FORM_FIELD_DEFAULT_OPTIONS"),hr="fill",Hs="auto",mr="fixed",js="translateY(-50%)",xi=(()=>{class n{_elementRef=s(A);_changeDetectorRef=s(oe);_platform=s(ue);_idGenerator=s(le);_ngZone=s(z);_defaults=s(Bs,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=vt("iconPrefixContainer");_textPrefixContainerSignal=vt("textPrefixContainer");_iconSuffixContainerSignal=vt("iconSuffixContainer");_textSuffixContainerSignal=vt("textSuffixContainer");_prefixSuffixContainers=X(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=oo(St);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Te(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Hs}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||hr;this._appearanceSignal.set(t)}_appearanceSignal=k(hr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||mr}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||mr}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new M;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Re();constructor(){let e=this._defaults,t=s(Se);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ae(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=X(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(ve([void 0,void 0]),je(()=>[t.errorState,t.userAriaDescribedBy]),Ut(),_e(([[r,a],[h,m]])=>r!==h||a!==m)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(K(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ee(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ao({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=X(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(h=>h.align==="start"):null,a=this._hintChildren?this._hintChildren.find(h=>h.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,o;if(t){let r=this._describedByIds||e;o=e.concat(t.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,h=t?.getBoundingClientRect().width??0,m=o?.getBoundingClientRect().width??0,p=r?.getBoundingClientRect().width??0,g=this._currentDirection==="rtl"?"-1":"1",F=`${a+h}px`,ie=`calc(${g} * (${F} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ne=`var(--mat-mdc-form-field-label-transform, ${js} translateX(${ie}))`,T=a+h+m+p;return[ne,T]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,o,r){if(t&1&&(Kn(r,o._labelChild,St,5),Fe(r,Ot,5)(r,Ns,5)(r,Ls,5)(r,ur,5)(r,fn,5)),t&2){$i();let a;D(a=S())&&(o._formFieldControl=a.first),D(a=S())&&(o._prefixChildren=a),D(a=S())&&(o._suffixChildren=a),D(a=S())&&(o._errorChildren=a),D(a=S())&&(o._hintChildren=a)}},viewQuery:function(t,o){if(t&1&&(Zn(o._iconPrefixContainerSignal,nr,5)(o._textPrefixContainerSignal,or,5)(o._iconSuffixContainerSignal,rr,5)(o._textSuffixContainerSignal,ar,5),he(_s,5)(nr,5)(or,5)(rr,5)(ar,5)(sr,5)(dr,5)(cr,5)),t&2){$i(4);let r;D(r=S())&&(o._textField=r.first),D(r=S())&&(o._iconPrefixContainer=r.first),D(r=S())&&(o._textPrefixContainer=r.first),D(r=S())&&(o._iconSuffixContainer=r.first),D(r=S())&&(o._textSuffixContainer=r.first),D(r=S())&&(o._floatingLabel=r.first),D(r=S())&&(o._notchedOutline=r.first),D(r=S())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,o){t&2&&w("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[j([{provide:Pt,useExisting:n},{provide:pr,useExisting:n}])],ngContentSelectors:ys,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,o){if(t&1&&(W(vs),Oe(0,ws,1,1,"ng-template",null,0,to),l(2,"div",6,1),b("click",function(a){return o._control.onContainerClick(a)}),_(4,xs,1,0,"div",7),l(5,"div",8),_(6,Ds,2,2,"div",9),_(7,Ss,3,0,"div",10),_(8,Os,3,0,"div",11),l(9,"div",12),_(10,Rs,1,1,null,13),O(11),c(),_(12,Es,3,0,"div",14),_(13,Is,3,0,"div",15),c(),_(14,Fs,1,0,"div",16),c(),l(15,"div",17),_(16,Ts,2,0,"div",18)(17,Vs,5,1,"div",19),c()),t&2){let r;d(2),w("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),d(2),v(!o._hasOutline()&&!o._control.disabled?4:-1),d(2),v(o._hasOutline()?6:-1),d(),v(o._hasIconPrefix?7:-1),d(),v(o._hasTextPrefix?8:-1),d(2),v(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),d(2),v(o._hasTextSuffix?12:-1),d(),v(o._hasIconSuffix?13:-1),d(),v(o._hasOutline()?-1:14),d(),w("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();d(),v((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[sr,dr,co,cr,fn],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var Us=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],qs=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Gs(n,i){n&1&&(l(0,"span",3),O(1,1),c())}function Ws(n,i){n&1&&(l(0,"span",6),O(1,2),c())}var $s=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`,Ys=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Xs=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Qs(n,i){n&1&&V(0,"span",0)}function Ks(n,i){n&1&&(l(0,"span",1),O(1),c())}function Zs(n,i){n&1&&(l(0,"span",3),O(1,1),c())}function Js(n,i){n&1&&O(0,2)}function el(n,i){n&1&&V(0,"span",7)}function tl(n,i){if(n&1&&_(0,Js,1,0)(1,el,1,0,"span",7),n&2){let e=f();v(e.contentEditInput?0:1)}}function il(n,i){n&1&&O(0,3)}function nl(n,i){n&1&&(l(0,"span",6),O(1,4),c())}var ol=["*"];var rl=new C("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),fr=new C("MatChipAvatar"),gr=new C("MatChipTrailingIcon"),_r=new C("MatChipEdit"),vr=new C("MatChipRemove"),vn=new C("MatChip"),yr=(()=>{class n{_elementRef=s(A);_parentChip=s(vn);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){s(Ce).load(We),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,o){t&2&&(L("disabled",o._getDisabledAttribute())("aria-disabled",o.disabled),w("mdc-evolution-chip__action--primary",o._isPrimary)("mdc-evolution-chip__action--secondary",!o._isPrimary)("mdc-evolution-chip__action--trailing",!o._isPrimary&&!o._isLeading))},inputs:{disabled:[2,"disabled","disabled",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:De(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),br=(()=>{class n extends yr{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Me(n)))(o||n)}})();static \u0275dir=x({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,o){t&1&&b("click",function(a){return o._handleClick(a)})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(L("tabindex",o._getTabindex()),w("mdc-evolution-chip__action--presentational",!1))},features:[J]})}return n})();var Rt=(()=>{class n{_changeDetectorRef=s(oe);_elementRef=s(A);_tagName=s(io);_ngZone=s(z);_focusMonitor=s(Kt);_globalRippleOptions=s(yo,{optional:!0});_document=s(re);_onFocus=new M;_onBlur=new M;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Re();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=s(le).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new N;destroyed=new N;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=s(bo);_injector=s(de);constructor(){let e=s(Ce);e.load(We),e.load(Zt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Ee(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let o=t._elementRef.nativeElement;return o===e||o.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,o,r){if(t&1&&Fe(r,fr,5)(r,_r,5)(r,gr,5)(r,vr,5)(r,fr,5)(r,gr,5)(r,_r,5)(r,vr,5),t&2){let a;D(a=S())&&(o.leadingIcon=a.first),D(a=S())&&(o.editIcon=a.first),D(a=S())&&(o.trailingIcon=a.first),D(a=S())&&(o.removeIcon=a.first),D(a=S())&&(o._allLeadingIcons=a),D(a=S())&&(o._allTrailingIcons=a),D(a=S())&&(o._allEditIcons=a),D(a=S())&&(o._allRemoveIcons=a)}},viewQuery:function(t,o){if(t&1&&he(br,5),t&2){let r;D(r=S())&&(o.primaryAction=r.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,o){t&1&&b("keydown",function(a){return o._handleKeydown(a)}),t&2&&(be("id",o.id),L("role",o.role)("aria-label",o.ariaLabel),Le("mat-"+(o.color||"primary")),w("mdc-evolution-chip",!o._isBasicChip)("mdc-evolution-chip--disabled",o.disabled)("mdc-evolution-chip--with-trailing-action",o._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",o.leadingIcon)("mdc-evolution-chip--with-primary-icon",o.leadingIcon)("mdc-evolution-chip--with-avatar",o.leadingIcon)("mat-mdc-chip-with-avatar",o.leadingIcon)("mat-mdc-chip-highlighted",o.highlighted)("mat-mdc-chip-disabled",o.disabled)("mat-mdc-basic-chip",o._isBasicChip)("mat-mdc-standard-chip",!o._isBasicChip)("mat-mdc-chip-with-trailing-icon",o._hasTrailingIcon())("_mat-animation-noopable",o._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",P],highlighted:[2,"highlighted","highlighted",P],disableRipple:[2,"disableRipple","disableRipple",P],disabled:[2,"disabled","disabled",P]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[j([{provide:vn,useExisting:n}])],ngContentSelectors:qs,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,o){t&1&&(W(Us),V(0,"span",0),l(1,"span",1)(2,"span",2),_(3,Gs,2,0,"span",3),l(4,"span",4),O(5),V(6,"span",5),c()()(),_(7,Ws,2,0,"span",6)),t&2&&(d(3),v(o.leadingIcon?3:-1),d(4),v(o._hasTrailingIcon()?7:-1))},dependencies:[yr],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var _n=(()=>{class n{_elementRef=s(A);_document=s(re);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return n})(),Cr=(()=>{class n extends Rt{basicChipAttrName="mat-basic-chip-row";_renderer=s(ee);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new N;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(K(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,Ne(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,o,r){if(t&1&&Fe(r,_n,5),t&2){let a;D(a=S())&&(o.contentEditInput=a.first)}},viewQuery:function(t,o){if(t&1&&he(_n,5),t&2){let r;D(r=S())&&(o.defaultEditInput=r.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,o){t&1&&b("focus",function(){return o._handleFocus()})("click",function(a){return o._hasInteractiveActions()?o._handleClick(a):null})("dblclick",function(a){return o._handleDoubleclick(a)}),t&2&&(be("id",o.id),L("tabindex",o.disabled?null:-1)("aria-label",null)("aria-description",null)("role",o.role),w("mat-mdc-chip-with-avatar",o.leadingIcon)("mat-mdc-chip-disabled",o.disabled)("mat-mdc-chip-editing",o._isEditing)("mat-mdc-chip-editable",o.editable)("mdc-evolution-chip--disabled",o.disabled)("mdc-evolution-chip--with-leading-action",o._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",o._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",o.leadingIcon)("mdc-evolution-chip--with-primary-icon",o.leadingIcon)("mdc-evolution-chip--with-avatar",o.leadingIcon)("mat-mdc-chip-highlighted",o.highlighted)("mat-mdc-chip-with-trailing-icon",o._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[j([{provide:Rt,useExisting:n},{provide:vn,useExisting:n}]),J],ngContentSelectors:Xs,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,o){t&1&&(W(Ys),_(0,Qs,1,0,"span",0),_(1,Ks,2,0,"span",1),l(2,"span",2),_(3,Zs,2,0,"span",3),l(4,"span",4),_(5,tl,2,1)(6,il,1,0),V(7,"span",5),c()(),_(8,nl,2,0,"span",6)),t&2&&(v(o._isEditing?-1:0),d(),v(o._hasLeadingActionIcon()?1:-1),d(),y("disabled",o.disabled),L("aria-description",o.ariaDescription)("aria-label",o.ariaLabel),d(),v(o.leadingIcon?3:-1),d(2),v(o._isEditing?5:6),d(3),v(o._hasTrailingIcon()?8:-1))},dependencies:[br,_n],styles:[$s],encapsulation:2,changeDetection:0})}return n})(),Mi=(()=>{class n{_elementRef=s(A);_changeDetectorRef=s(oe);_dir=s(Se,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new M;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Wn;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(ve(null),Ue(()=>Ee(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(ve(this._chips)).subscribe(e=>{let t=[];e.forEach(o=>o._getActions().forEach(r=>t.push(r))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new go(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(K(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(K(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(ve(null),K(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(K(this._destroyed)).subscribe(e=>{let o=this._chips.toArray().indexOf(e.chip),r=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),h=r||a;this._isValidIndex(o)&&h&&(this._lastDestroyedFocusedChipIndex=o)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,o,r){if(t&1&&Fe(r,Rt,5),t&2){let a;D(a=S())&&(o._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,o){t&1&&b("keydown",function(a){return o._handleKeydown(a)}),t&2&&L("role",o.role)},inputs:{disabled:[2,"disabled","disabled",P],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:De(e)]},ngContentSelectors:ol,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,o){t&1&&(W(),pe(0,"div",0),O(1),fe())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var ki=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({providers:[rt,{provide:rl,useValue:{separatorKeyCodes:[13]}}],imports:[ii,B]})}return n})();var xr=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=Te(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Te(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,o){t&2&&(L("aria-orientation",o.vertical?"vertical":"horizontal"),w("mat-divider-vertical",o.vertical)("mat-divider-horizontal",!o.vertical)("mat-divider-inset",o.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return n})(),Mr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[B]})}return n})();var Xe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[uo,xi,B]})}return n})();var ll=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),cl={passive:!0},kr=(()=>{class n{_platform=s(ue);_ngZone=s(z);_renderer=s(Ie).createRenderer(null,null);_styleLoader=s(Ce);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Bn;this._styleLoader.load(ll);let t=yt(e),o=this._monitoredElements.get(t);if(o)return o.subject;let r=new M,a="cdk-text-field-autofilled",h=p=>{p.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!0}))):p.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!1})))},m=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",h,cl)));return this._monitoredElements.set(t,{subject:r,unlisten:m}),r}stopMonitoring(e){let t=yt(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Dr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({})}return n})();var Sr=new C("MAT_INPUT_VALUE_ACCESSOR");var dl=["button","checkbox","file","hidden","image","radio","range","reset","submit"],hl=new C("MAT_INPUT_CONFIG"),Or=(()=>{class n{_elementRef=s(A);_platform=s(ue);ngControl=s(Ae,{optional:!0,self:!0});_autofillMonitor=s(kr);_ngZone=s(z);_formField=s(Pt,{optional:!0});_renderer=s(ee);_uid=s(le).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(hl,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new M;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Te(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ot.required)??!1}set required(e){this._required=Te(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&en().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Te(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>en().has(e));constructor(){let e=s(kt,{optional:!0}),t=s(Dt,{optional:!0}),o=s(rt),r=s(Sr,{optional:!0,self:!0}),a=this._elementRef.nativeElement,h=a.nodeName.toLowerCase();r?Yt(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new at(o,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=h==="select",this._isTextarea=h==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ae(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){dl.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&b("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(be("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),L("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),w("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",P]},exportAs:["matInput"],features:[j([{provide:Ot,useExisting:n}]),se]})}return n})(),Pr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[Xe,Xe,Dr,B]})}return n})();function ul(n,i){n&1&&Pe(0,"div",2)}var pl=new C("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Er=(()=>{class n{_elementRef=s(A);_ngZone=s(z);_changeDetectorRef=s(oe);_renderer=s(ee);_cleanupTransitionEnd;constructor(){let e=vo(),t=s(pl,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Rr(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Rr(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new N;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,o){t&2&&(L("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),Le("mat-"+o.color),w("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",De],bufferValue:[2,"bufferValue","bufferValue",De],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,o){t&1&&(pe(0,"div",0),Pe(1,"div",1),_(2,ul,1,0,"div",2),fe(),pe(3,"div",3),Pe(4,"span",4),fe(),pe(5,"div",5),Pe(6,"span",4),fe()),t&2&&(d(),Ge("flex-basis",o._getBufferBarFlexBasis()),d(),v(o.mode==="buffer"?2:-1),d(),Ge("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Rr(n,i=0,e=100){return Math.max(i,Math.min(e,n))}var Ir=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[B]})}return n})();var Di=class{};function Fr(n){return n&&typeof n.connect=="function"&&!(n instanceof Nn)}var Si=class extends Di{_data;constructor(i){super(),this._data=i}connect(){return Ht(this._data)?this._data:ut(this._data)}disconnect(){}},It=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(It||{}),Oi=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,o,r){i.forEachOperation((a,h,m)=>{let p,g;if(a.previousIndex==null){let F=()=>t(a,h,m);p=this._insertView(F,m,e,o(a)),g=p?It.INSERTED:It.REPLACED}else m==null?(this._detachAndCacheView(h,e),g=It.REMOVED):(p=this._moveView(h,m,e,o(a)),g=It.MOVED);r&&r({context:p?.context,operation:g,record:a})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,o){let r=this._insertViewFromCache(e,t);if(r){r.context.$implicit=o;return}let a=i();return t.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,o){let r=t.get(i);return t.move(r,e),r.context.$implicit=o,r}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var Ft=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new M;constructor(i=!1,e,t=!0,o){this._multiple=i,this._emitChanges=t,this.compareWith=o,e&&e.length&&(i?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var gl=["contentWrapper"],_l=["*"],Vr=new C("VIRTUAL_SCROLL_STRATEGY"),yn=class{_scrolledIndexChange=new M;scrolledIndexChange=this._scrolledIndexChange.pipe(Ui());_viewport=null;_itemSize;_minBufferPx;_maxBufferPx;constructor(i,e,t){this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=t}attach(i){this._viewport=i,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(i,e,t){t<e,this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(i,e){this._viewport&&this._viewport.scrollToOffset(i*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;let i=this._viewport.getRenderedRange(),e={start:i.start,end:i.end},t=this._viewport.getViewportSize(),o=this._viewport.getDataLength(),r=this._viewport.measureScrollOffset(),a=this._itemSize>0?r/this._itemSize:0;if(e.end>o){let m=Math.ceil(t/this._itemSize),p=Math.max(0,Math.min(a,o-m));a!=p&&(a=p,r=p*this._itemSize,e.start=Math.floor(a)),e.end=Math.max(0,Math.min(o,e.start+m))}let h=r-e.start*this._itemSize;if(h<this._minBufferPx&&e.start!=0){let m=Math.ceil((this._maxBufferPx-h)/this._itemSize);e.start=Math.max(0,e.start-m),e.end=Math.min(o,Math.ceil(a+(t+this._minBufferPx)/this._itemSize))}else{let m=e.end*this._itemSize-(r+t);if(m<this._minBufferPx&&e.end!=o){let p=Math.ceil((this._maxBufferPx-m)/this._itemSize);p>0&&(e.end=Math.min(o,e.end+p),e.start=Math.max(0,Math.floor(a-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(Math.round(this._itemSize*e.start)),this._scrolledIndexChange.next(Math.floor(a))}};function vl(n){return n._scrollStrategy}var Nr=(()=>{class n{get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=Je(e)}_itemSize=20;get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=Je(e)}_minBufferPx=100;get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=Je(e)}_maxBufferPx=200;_scrollStrategy=new yn(this.itemSize,this.minBufferPx,this.maxBufferPx);ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[j([{provide:Vr,useFactory:vl,deps:[ye(()=>n)]}]),se]})}return n})(),yl=20,Ri=(()=>{class n{_ngZone=s(z);_platform=s(ue);_renderer=s(Ie).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new M;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=yl){return this._platform.isBrowser?new mt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(jt(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ut()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(_e(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let o=yt(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Lr=(()=>{class n{elementRef=s(A);scrollDispatcher=s(Ri);ngZone=s(z);dir=s(Se,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new M;_renderer=s(ee);_cleanupScroll;_elementScrolled=new M;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&tt()!=et.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),tt()==et.INVERTED?e.left=e.right:tt()==et.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Jt()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",o="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?o:t:e=="end"&&(e=a?t:o),a&&tt()==et.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&tt()==et.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),bl=20,Ve=(()=>{class n{_platform=s(ue);_listeners;_viewportSize=null;_change=new M;_document=s(re);constructor(){let e=s(z),t=s(Ie).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,h=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:a,left:h}}change(e=bl){return e>0?this._change.pipe(jt(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Tr=new C("VIRTUAL_SCROLLABLE"),Cl=(()=>{class n extends Lr{constructor(){super()}measureViewportSize(e){let t=this.elementRef.nativeElement;return e==="horizontal"?t.clientWidth:t.clientHeight}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,features:[J]})}return n})();function wl(n,i){return n.start==i.start&&n.end==i.end}var xl=typeof requestAnimationFrame<"u"?zn:Ln,bn=new C("CDK_VIRTUAL_SCROLL_VIEWPORT"),zr=(()=>{class n extends Cl{elementRef=s(A);_changeDetectorRef=s(oe);_scrollStrategy=s(Vr,{optional:!0});scrollable=s(Tr,{optional:!0});_platform=s(ue);_detachedSubject=new M;_renderedRangeSubject=new M;_renderedContentOffsetSubject=new M;get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}_orientation="vertical";appendOnly=!1;scrolledIndexChange=new mt(e=>this._scrollStrategy.scrolledIndexChange.subscribe(t=>Promise.resolve().then(()=>this.ngZone.run(()=>e.next(t)))));_contentWrapper;renderedRangeStream=this._renderedRangeSubject;renderedContentOffset=this._renderedContentOffsetSubject.pipe(_e(e=>e!==null),Ui());_totalContentSize=0;_totalContentWidth=k("");_totalContentHeight=k("");_renderedContentTransform;_renderedRange={start:0,end:0};_dataLength=0;_viewportSize=0;_forOf=null;_renderedContentOffset=0;_renderedContentOffsetNeedsRewrite=!1;_changeDetectionNeeded=k(!1);_runAfterChangeDetection=[];_viewportChanges=xe.EMPTY;_injector=s(de);_isDestroyed=!1;constructor(){super();let e=s(Ve);this._scrollStrategy,this._viewportChanges=e.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this);let t=ae(()=>{this._changeDetectionNeeded()&&this._doChangeDetection()},{injector:s(_t).injector});s(qi).onDestroy(()=>{t.destroy()})}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe(ve(null),jt(0,xl),K(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),this._isDestroyed=!0,super.ngOnDestroy()}attach(e){this._forOf,this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe(K(this._detachedSubject)).subscribe(t=>{let o=t.length;o!==this._dataLength&&(this._dataLength=o,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){wl(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&t==="to-start"?0:e;let o=this.dir&&this.dir.value=="rtl",r=this.orientation=="horizontal",a=r?"X":"Y",m=`translate${a}(${Number((r&&o?-1:1)*e)}px)`;this._renderedContentOffset=e,t==="to-end"&&(m+=` translate${a}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=m&&(this._renderedContentTransform=m,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){let o={behavior:t};this.orientation==="horizontal"?o.start=e:o.top=e,this.scrollable.scrollTo(o)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return this.scrollable==this?t=o=>super.measureScrollOffset(o):t=o=>this.scrollable.measureScrollOffset(o),Math.max(0,t(e??(this.orientation==="horizontal"?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t,o="left",r="right",a=this.dir?.value=="rtl";e=="start"?t=a?r:o:e=="end"?t=a?o:r:e?t=e:t=this.orientation==="horizontal"?"left":"top";let h=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-h}measureRenderedContentSize(){let e=this._contentWrapper.nativeElement;return this.orientation==="horizontal"?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),!ke(this._changeDetectionNeeded)&&this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this.ngZone.run(()=>{this._changeDetectionNeeded.set(!0)})})})}_doChangeDetection(){this._isDestroyed||this.ngZone.run(()=>{this._changeDetectorRef.markForCheck(),this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart()),Ne(()=>{this._changeDetectionNeeded.set(!1);let e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(let t of e)t()},{injector:this._injector})})}_calculateSpacerSize(){this._totalContentHeight.set(this.orientation==="horizontal"?"":`${this._totalContentSize}px`),this._totalContentWidth.set(this.orientation==="horizontal"?`${this._totalContentSize}px`:"")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,o){if(t&1&&he(gl,7),t&2){let r;D(r=S())&&(o._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,o){t&2&&w("cdk-virtual-scroll-orientation-horizontal",o.orientation==="horizontal")("cdk-virtual-scroll-orientation-vertical",o.orientation!=="horizontal")},inputs:{orientation:"orientation",appendOnly:[2,"appendOnly","appendOnly",P]},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[j([{provide:Lr,useFactory:()=>s(Tr,{optional:!0})||s(n)},{provide:bn,useExisting:n}]),J],ngContentSelectors:_l,decls:4,vars:4,consts:[["contentWrapper",""],[1,"cdk-virtual-scroll-content-wrapper"],[1,"cdk-virtual-scroll-spacer"]],template:function(t,o){t&1&&(W(),pe(0,"div",1,0),O(2),fe(),Pe(3,"div",2)),t&2&&(d(3),Ge("width",o._totalContentWidth())("height",o._totalContentHeight()))},styles:[`cdk-virtual-scroll-viewport {
  display: block;
  position: relative;
  transform: translateZ(0);
}

.cdk-virtual-scrollable {
  overflow: auto;
  will-change: scroll-position;
  contain: strict;
}

.cdk-virtual-scroll-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  contain: content;
}
[dir=rtl] .cdk-virtual-scroll-content-wrapper {
  right: 0;
  left: auto;
}

.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {
  min-height: 100%;
}
.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  border-left-width: 0;
  border-right-width: 0;
  outline: none;
}

.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {
  min-width: 100%;
}
.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  outline: none;
}

.cdk-virtual-scroll-spacer {
  height: 1px;
  transform-origin: 0 0;
  flex: 0 0 auto;
}
[dir=rtl] .cdk-virtual-scroll-spacer {
  transform-origin: 100% 0;
}
`],encapsulation:2,changeDetection:0})}return n})();function Ar(n,i,e){let t=e;if(!t.getBoundingClientRect)return 0;let o=t.getBoundingClientRect();return n==="horizontal"?i==="start"?o.left:o.right:i==="start"?o.top:o.bottom}var Br=(()=>{class n{_viewContainerRef=s(gt);_template=s(ft);_differs=s(ro);_viewRepeater=new Oi;_viewport=s(bn,{skipSelf:!0});viewChange=new M;_dataSourceChanges=new M;get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,Fr(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new Si(Ht(e)?e:Array.from(e||[])))}_cdkVirtualForOf;get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,o)=>e(t+(this._renderedRange?this._renderedRange.start:0),o):void 0}_cdkVirtualForTrackBy;set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=Je(e)}dataStream=this._dataSourceChanges.pipe(ve(null),Ut(),Ue(([e,t])=>this._changeDataSource(e,t)),qt(1));_differ=null;_data=[];_renderedItems=[];_renderedRange={start:0,end:0};_needsUpdate=!1;_destroyed=new M;constructor(){let e=s(z);this.dataStream.subscribe(t=>{this._data=t,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(K(this._destroyed)).subscribe(t=>{this._renderedRange=t,this.viewChange.observers.length&&e.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,t){if(e.start>=e.end)return 0;e.start<this._renderedRange.start||e.end>this._renderedRange.end;let o=e.start-this._renderedRange.start,r=e.end-e.start,a,h;for(let m=0;m<r;m++){let p=this._viewContainerRef.get(m+o);if(p&&p.rootNodes.length){a=h=p.rootNodes[0];break}}for(let m=r-1;m>-1;m--){let p=this._viewContainerRef.get(m+o);if(p&&p.rootNodes.length){h=p.rootNodes[p.rootNodes.length-1];break}}return a&&h?Ar(t,"end",h)-Ar(t,"start",a):0}ngDoCheck(){if(this._differ&&this._needsUpdate){let e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):ut()}_updateContext(){let e=this._data.length,t=this._viewContainerRef.length;for(;t--;){let o=this._viewContainerRef.get(t);o.context.index=this._renderedRange.start+t,o.context.count=e,this._updateComputedContextProperties(o.context),o.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(r,a,h)=>this._getEmbeddedViewArgs(r,h),r=>r.item),e.forEachIdentityChange(r=>{let a=this._viewContainerRef.get(r.currentIndex);a.context.$implicit=r.item});let t=this._data.length,o=this._viewContainerRef.length;for(;o--;){let r=this._viewContainerRef.get(o);r.context.index=this._renderedRange.start+o,r.context.count=t,this._updateComputedContextProperties(r.context)}}_updateComputedContextProperties(e){e.first=e.index===0,e.last=e.index===e.count-1,e.even=e.index%2===0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"}})}return n})();var Pi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({})}return n})(),Qe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[B,Pi,B,Pi]})}return n})();var Tt=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Cn=class extends Tt{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,o,r){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null}},At=class extends Tt{templateRef;viewContainerRef;context;injector;constructor(i,e,t,o){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},wn=class extends Tt{element;constructor(i){super(),this.element=i instanceof A?i.nativeElement:i}},xn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Cn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof At)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof wn)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ei=class extends xn{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,o=t.get(Xn,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=i.injector||this._defaultInjector||de.NULL,r=o.get(Wt,t.injector);e=so(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Hr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({})}return n})();var jr=Jt();function Qr(n){return new Ii(n.get(Ve),n.get(re))}var Ii=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=Q(-this._previousScrollPosition.left),i.style.top=Q(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,o=e.style,r=t.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),jr&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),jr&&(t.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Kr(n,i){return new Fi(n.get(Ri),n.get(z),n.get(Ve),i)}var Fi=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,o){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(_e(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Vt=class{enable(){}disable(){}attach(){}};function Mn(n,i){return i.some(e=>{let t=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,a=n.left>e.right;return t||o||r||a})}function Ur(n,i){return i.some(e=>{let t=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,a=n.right>e.right;return t||o||r||a})}function Lt(n,i){return new Ti(n.get(Ri),n.get(Ve),n.get(z),i)}var Ti=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,o){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();Mn(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Zr=(()=>{class n{_injector=s(de);constructor(){}noop=()=>new Vt;close=e=>Kr(this._injector,e);block=()=>Qr(this._injector);reposition=e=>Lt(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Nt=class{positionStrategy;scrollStrategy=new Vt;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Ai=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Jr=(()=>{class n{_attachedOverlays=[];_document=s(re);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ea=(()=>{class n extends Jr{_ngZone=s(z);_renderer=s(Ie).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Me(n)))(o||n)}})();static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ta=(()=>{class n extends Jr{_platform=s(ue);_ngZone=s(z);_renderer=s(Ie).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ze(e)};_clickListener=e=>{let t=Ze(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let h=r[a],m=h._outsidePointerEvents;if(!(!h.hasAttached()||!this.canReceiveEvent(h,e,m))){if(qr(h.overlayElement,t)||qr(h.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>m.next(e)):m.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Me(n)))(o||n)}})();static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qr(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var ia=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),na=(()=>{class n{_platform=s(ue);_containerElement;_document=s(re);_styleLoader=s(Ce);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ji()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Ji()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(ia)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,o){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Dn(n){return n&&n.nodeType===1}var Vi=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new M;_attachments=new M;_detachments=new M;_positionStrategy;_scrollStrategy;_locationChanges=xe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new M;_outsidePointerEvents=new M;_afterNextRenderRef;constructor(i,e,t,o,r,a,h,m,p,g=!1,F,te){this._portalOutlet=i,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=h,this._location=m,this._outsideClickDispatcher=p,this._animationsDisabled=g,this._injector=F,this._renderer=te,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ne(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=$($({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ce($({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Q(this._config.width),i.height=Q(this._config.height),i.minWidth=Q(this._config.minWidth),i.minHeight=Q(this._config.minHeight),i.maxWidth=Q(this._config.maxWidth),i.maxHeight=Q(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Dn(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new kn(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let o=Ki(e||[]).filter(r=>!!r);o.length&&(t?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ne(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Gr="cdk-overlay-connected-position-bounding-box",kl=/([A-Za-z%]+)$/;function Sn(n,i){return new Ni(i,n.get(Ve),n.get(re),n.get(ue),n.get(na))}var Ni=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new M;_resizeSubscription=xe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Gr),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],a;for(let h of this._preferredPositions){let m=this._getOriginPoint(i,o,h),p=this._getOverlayPoint(m,e,h),g=this._getOverlayFit(p,e,t,h);if(g.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(h,m);return}if(this._canFitWithFlexibleDimensions(g,p,t)){r.push({position:h,origin:m,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(m,h)});continue}(!a||a.overlayFit.visibleArea<g.visibleArea)&&(a={overlayFit:g,overlayPoint:p,originPoint:m,position:h,overlayRect:e})}if(r.length){let h=null,m=-1;for(let p of r){let g=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);g>m&&(m=g,h=p)}this._isPushed=!1,this._applyPosition(h.position,h.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ke(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Gr),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof A?this._origin.nativeElement:Dn(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let o;if(t.originX=="center")o=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,h=this._isRtl()?i.left:i.right;o=t.originX=="start"?a:h}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(i,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+o,y:i.y+r}}_getOverlayFit(i,e,t,o){let r=$r(e),{x:a,y:h}=i,m=this._getOffset(o,"x"),p=this._getOffset(o,"y");m&&(a+=m),p&&(h+=p);let g=0-a,F=a+r.width-t.width,te=0-h,ie=h+r.height-t.height,ne=this._subtractOverflows(r.width,g,F),T=this._subtractOverflows(r.height,te,ie),ct=ne*T;return{visibleArea:ct,isCompletelyWithinViewport:r.width*r.height===ct,fitsInViewportVertically:T===r.height,fitsInViewportHorizontally:ne==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,a=Wr(this._overlayRef.getConfig().minHeight),h=Wr(this._overlayRef.getConfig().minWidth),m=i.fitsInViewportVertically||a!=null&&a<=o,p=i.fitsInViewportHorizontally||h!=null&&h<=r;return m&&p}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=$r(e),r=this._viewportRect,a=Math.max(i.x+o.width-r.width,0),h=Math.max(i.y+o.height-r.height,0),m=Math.max(r.top-t.top-i.y,0),p=Math.max(r.left-t.left-i.x,0),g=0,F=0;return o.width<=r.width?g=p||-a:g=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,o.height<=r.height?F=m||-h:F=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:g,y:F},{x:i.x+g,y:i.y+F}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Dl(this._lastScrollVisibility,t)){let o=new Ai(i,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,o=this._isRtl(),r,a,h;if(e.overlayY==="top")a=i.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")h=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-h+this._getViewportMarginTop();else{let ie=Math.min(t.bottom-i.y+t.top,i.y),ne=this._lastBoundingBoxSize.height;r=ie*2,a=i.y-ie,r>ne&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-ne/2)}let m=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,p=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,g,F,te;if(p)te=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),g=i.x-this._getViewportMarginStart();else if(m)F=i.x,g=t.right-i.x-this._getViewportMarginEnd();else{let ie=Math.min(t.right-i.x+t.left,i.x),ne=this._lastBoundingBoxSize.width;g=ie*2,F=i.x-ie,g>ne&&!this._isInitialRender&&!this._growAfterOpen&&(F=i.x-ne/2)}return{top:a,left:F,bottom:h,right:te,width:g,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=Q(t.width),o.height=Q(t.height),o.top=Q(t.top)||"auto",o.bottom=Q(t.bottom)||"auto",o.left=Q(t.left)||"auto",o.right=Q(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=Q(r)),a&&(o.maxWidth=Q(a))}this._lastBoundingBoxSize=t,Ke(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Ke(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ke(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let g=this._viewportRuler.getViewportScrollPosition();Ke(t,this._getExactOverlayY(e,i,g)),Ke(t,this._getExactOverlayX(e,i,g))}else t.position="static";let h="",m=this._getOffset(e,"x"),p=this._getOffset(e,"y");m&&(h+=`translateX(${m}px) `),p&&(h+=`translateY(${p}px)`),t.transform=h.trim(),a.maxHeight&&(o?t.maxHeight=Q(a.maxHeight):r&&(t.maxHeight="")),a.maxWidth&&(o?t.maxWidth=Q(a.maxWidth):r&&(t.maxWidth="")),Ke(this._pane.style,t)}_getExactOverlayY(i,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=Q(r.y);return o}_getExactOverlayX(i,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let h=this._document.documentElement.clientWidth;o.right=`${h-(r.x+this._overlayRect.width)}px`}else o.left=Q(r.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ur(i,t),isOriginOutsideView:Mn(i,t),isOverlayClipped:Ur(e,t),isOverlayOutsideView:Mn(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,o)=>t-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Ki(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof A)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Ke(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function Wr(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(kl);return!e||e==="px"?parseFloat(i):null}return n||null}function $r(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Dl(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Yr="cdk-global-overlay-wrapper";function oa(n){return new Li}var Li=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Yr),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:h}=t,m=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),p=(r==="100%"||r==="100vh")&&(!h||h==="100%"||h==="100vh"),g=this._xPosition,F=this._xOffset,te=this._overlayRef.getConfig().direction==="rtl",ie="",ne="",T="";m?T="flex-start":g==="center"?(T="center",te?ne=F:ie=F):te?g==="left"||g==="end"?(T="flex-end",ie=F):(g==="right"||g==="start")&&(T="flex-start",ne=F):g==="left"||g==="start"?(T="flex-start",ie=F):(g==="right"||g==="end")&&(T="flex-end",ne=F),i.position=this._cssPosition,i.marginLeft=m?"0":ie,i.marginTop=p?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=m?"0":ne,e.justifyContent=T,e.alignItems=p?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Yr),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},ra=(()=>{class n{_injector=s(de);constructor(){}global(){return oa()}flexibleConnectedTo(e){return Sn(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),zt=new C("OVERLAY_DEFAULT_CONFIG");function On(n,i){n.get(Ce).load(ia);let e=n.get(na),t=n.get(re),o=n.get(le),r=n.get(_t),a=n.get(Se),h=n.get(ee,null,{optional:!0})||n.get(Ie).createRenderer(null,null),m=new Nt(i),p=n.get(zt,null,{optional:!0})?.usePopover??!0;m.direction=m.direction||a.value,"showPopover"in t.body?m.usePopover=i?.usePopover??p:m.usePopover=!1;let g=t.createElement("div"),F=t.createElement("div");g.id=o.getId("cdk-overlay-"),g.classList.add("cdk-overlay-pane"),F.appendChild(g),m.usePopover&&(F.setAttribute("popover","manual"),F.classList.add("cdk-overlay-popover"));let te=m.usePopover?m.positionStrategy?.getPopoverInsertionPoint?.():null;return Dn(te)?te.after(F):te?.type==="parent"?te.element.appendChild(F):e.getContainerElement().appendChild(F),new Vi(new Ei(g,r,n),F,g,m,n.get(z),n.get(ea),t,n.get(lo),n.get(ta),i?.disableAnimations??n.get($n,null,{optional:!0})==="NoopAnimations",n.get(Wt),h)}var aa=(()=>{class n{scrollStrategies=s(Zr);_positionBuilder=s(ra);_injector=s(de);constructor(){}create(e){return On(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sl=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Ol=new C("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(de);return()=>Lt(n)}}),st=(()=>{class n{elementRef=s(A);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),sa=new C("cdk-connected-overlay-default-config"),zi=(()=>{class n{_dir=s(Se,{optional:!0});_injector=s(de);_overlayRef;_templatePortal;_backdropSubscription=xe.EMPTY;_attachSubscription=xe.EMPTY;_detachSubscription=xe.EMPTY;_positionSubscription=xe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(Ol);_ngZone=s(z);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new N;positionChange=new N;attach=new N;detach=new N;overlayKeydown=new N;overlayOutsideClick=new N;constructor(){let e=s(ft),t=s(gt),o=s(sa,{optional:!0}),r=s(zt,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new At(e,t),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Sl);let e=this._overlayRef=On(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!ze(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let o=this._getOriginElement(),r=Ze(t);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Nt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Sn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof st?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof st?this.origin.elementRef.nativeElement:this.origin instanceof A?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Gn(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",P],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",P],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",P],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",P],push:[2,"cdkConnectedOverlayPush","push",P],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",P],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",P],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[se]})}return n})(),Pn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({providers:[aa],imports:[B,Hr,Qe,Qe]})}return n})();var la=(()=>{class n{_animationsDisabled=Re();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&w("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Pl=["text"],Rl=[[["mat-icon"]],"*"],El=["mat-icon","*"];function Il(n,i){if(n&1&&V(0,"mat-pseudo-checkbox",1),n&2){let e=f();y("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Fl(n,i){if(n&1&&V(0,"mat-pseudo-checkbox",3),n&2){let e=f();y("disabled",e.disabled)}}function Tl(n,i){if(n&1&&(l(0,"span",4),u(1),c()),n&2){let e=f();d(),me("(",e.group.label,")")}}var En=new C("MAT_OPTION_PARENT_COMPONENT"),In=new C("MatOptgroup");var Rn=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},lt=(()=>{class n{_element=s(A);_changeDetectorRef=s(oe);_parent=s(En,{optional:!0});group=s(In,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(le).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=k(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new N;_text;_stateChanges=new M;constructor(){let e=s(Ce);e.load(We),e.load(Zt),this._signalDisableRipple=!!this._parent&&Yt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ze(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Rn(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-option"]],viewQuery:function(t,o){if(t&1&&he(Pl,7),t&2){let r;D(r=S())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,o){t&1&&b("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(be("id",o.id),L("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),w("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",P]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:El,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,o){t&1&&(W(Rl),_(0,Il,1,2,"mat-pseudo-checkbox",1),O(1),l(2,"span",2,0),O(4,1),c(),_(5,Fl,1,1,"mat-pseudo-checkbox",3),_(6,Tl,2,1,"span",4),V(7,"div",5)),t&2&&(v(o.multiple?0:-1),d(5),v(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),d(),v(o.group&&o.group._inert?6:-1),d(),y("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[la,ei],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function ca(n,i,e){if(e.length){let t=i.toArray(),o=e.toArray(),r=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===o[r]&&r++;return r}return 0}function da(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var ha=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[B]})}return n})();var Fn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[ii,ha,lt,B]})}return n})();var Ll=["trigger"],zl=["panel"],Bl=[[["mat-select-trigger"]],"*"],Hl=["mat-select-trigger","*"];function jl(n,i){if(n&1&&(l(0,"span",4),u(1),c()),n&2){let e=f();d(),Y(e.placeholder)}}function Ul(n,i){n&1&&O(0)}function ql(n,i){if(n&1&&(l(0,"span",11),u(1),c()),n&2){let e=f(2);d(),Y(e.triggerValue)}}function Gl(n,i){if(n&1&&(l(0,"span",5),_(1,Ul,1,0)(2,ql,2,1,"span",11),c()),n&2){let e=f();d(),v(e.customTrigger?1:2)}}function Wl(n,i){if(n&1){let e=ge();l(0,"div",12,1),b("keydown",function(o){U(e);let r=f();return q(r._handleKeydown(o))}),O(2,1),c()}if(n&2){let e=f();Le(e.panelClass),w("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),L("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var $l=new C("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(de);return()=>Lt(n)}}),Yl=new C("MAT_SELECT_CONFIG"),Xl=new C("MatSelectTrigger"),Tn=class{source;value;constructor(i,e){this.source=i,this.value=e}},pa=(()=>{class n{_viewportRuler=s(Ve);_changeDetectorRef=s(oe);_elementRef=s(A);_dir=s(Se,{optional:!0});_idGenerator=s(le);_renderer=s(ee);_parentFormField=s(Pt,{optional:!0});ngControl=s(Ae,{self:!0,optional:!0});_liveAnnouncer=s(po);_defaultOptions=s(Yl,{optional:!0});_animationsDisabled=Re();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let o=this.panel.nativeElement,r=ca(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&r===1?o.scrollTop=0:o.scrollTop=da(a.offsetTop,a.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Tn(this,e)}_scrollStrategyFactory=s($l);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=k(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ot.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=jn(()=>{let e=this.options;return e?e.changes.pipe(ve(e),Ue(()=>Ee(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ue(()=>this.optionSelectionChanges))});openedChange=new N;_openedStream=this.openedChange.pipe(_e(e=>e),je(()=>{}));_closedStream=this.openedChange.pipe(_e(e=>!e),je(()=>{}));selectionChange=new N;valueChange=new N;constructor(){let e=s(rt),t=s(kt,{optional:!0}),o=s(Dt,{optional:!0}),r=s(new Xt("tabindex"),{optional:!0}),a=s(zt,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new at(e,this.ngControl,o,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ft(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(K(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(K(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ve(null),K(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute("aria-labelledby",e):o.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(qn(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Zi(this._trackedModal,"aria-owns",t),_o(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Zi(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,o=t===40||t===38||t===37||t===39,r=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&r&&!ze(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;a.onKeydown(e);let m=this.selected;m&&h!==m&&this._liveAnnouncer.announce(m.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,o=e.keyCode,r=o===40||o===38,a=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(o===13||o===32)&&t.activeItem&&!ze(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let h=this.options.some(m=>!m.disabled&&!m.selected);this.options.forEach(m=>{m.disabled||(h?m.select():m.deselect())})}else{let h=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==h&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ze(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof st?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new fo(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ee(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(K(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ee(...this.options.map(t=>t._stateChanges)).pipe(K(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,o)=>this.sortComparator?this.sortComparator(t,o,e):e.indexOf(t)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(o=>o.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ze(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-select"]],contentQueries:function(t,o,r){if(t&1&&Fe(r,Xl,5)(r,lt,5)(r,In,5),t&2){let a;D(a=S())&&(o.customTrigger=a.first),D(a=S())&&(o.options=a),D(a=S())&&(o.optionGroups=a)}},viewQuery:function(t,o){if(t&1&&he(Ll,5)(zl,5)(zi,5),t&2){let r;D(r=S())&&(o.trigger=r.first),D(r=S())&&(o.panel=r.first),D(r=S())&&(o._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,o){t&1&&b("keydown",function(a){return o._handleKeydown(a)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),t&2&&(L("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),w("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",P],disableRipple:[2,"disableRipple","disableRipple",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:De(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",P],placeholder:"placeholder",required:[2,"required","required",P],multiple:[2,"multiple","multiple",P],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",P],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",De],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",P]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[j([{provide:Ot,useExisting:n},{provide:En,useExisting:n}]),se],ngContentSelectors:Hl,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,o){if(t&1&&(W(Bl),l(0,"div",2,0),b("click",function(){return o.open()}),l(3,"div",3),_(4,jl,2,1,"span",4)(5,Gl,3,1,"span",5),c(),l(6,"div",6)(7,"div",7),pt(),l(8,"svg",8),V(9,"path",9),c()()()(),Oe(10,Wl,3,16,"ng-template",10),b("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(a){return o._handleOverlayKeydown(a)})),t&2){let r=qe(1);d(3),L("id",o._valueId),d(),v(o.empty?4:5),d(6),y("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[st,zi],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var fa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[Pn,Fn,B,Pi,Xe,Fn]})}return n})();var Kl=["mat-internal-form-field",""],Zl=["*"],ga=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,o){t&2&&w("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Kl,ngContentSelectors:Zl,decls:1,vars:0,template:function(t,o){t&1&&(W(),O(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Jl=["switch"],ec=["*"];function tc(n,i){n&1&&(l(0,"span",11),pt(),l(1,"svg",13),V(2,"path",14),c(),l(3,"svg",15),V(4,"path",16),c()())}var ic=new C("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Bi=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},An=(()=>{class n{_elementRef=s(A);_focusMonitor=s(Kt);_changeDetectorRef=s(oe);defaults=s(ic);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Bi(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Re();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new N;toggleChange=new N;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(Ce).load(We);let e=s(new Xt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=s(le).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Bi(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,o){if(t&1&&he(Jl,5),t&2){let r;D(r=S())&&(o._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,o){t&2&&(be("id",o.id),L("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Le(o.color?"mat-"+o.color:""),w("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",P],color:"color",disabled:[2,"disabled","disabled",P],disableRipple:[2,"disableRipple","disableRipple",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:De(e)],checked:[2,"checked","checked",P],hideIcon:[2,"hideIcon","hideIcon",P],disabledInteractive:[2,"disabledInteractive","disabledInteractive",P]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[j([{provide:vi,useExisting:ye(()=>n),multi:!0},{provide:Ye,useExisting:n,multi:!0}]),se],ngContentSelectors:ec,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,o){if(t&1&&(W(),l(0,"div",1)(1,"button",2,0),b("click",function(){return o._handleClick()}),V(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),V(8,"span",8),c(),l(9,"span",9),V(10,"span",10),c(),_(11,tc,5,0,"span",11),c()()(),l(12,"label",12),b("click",function(a){return a.stopPropagation()}),O(13),c()()),t&2){let r=qe(2);y("labelPosition",o.labelPosition),d(),w("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),y("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),L("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),d(9),y("matRippleTrigger",r)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),d(),v(o.hideIcon?-1:11),d(),y("for",o.buttonId),L("id",o._labelId)}},dependencies:[ei,ga],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),_a=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[An,B]})}return n})();var Vn=class{_document;_textarea;constructor(i,e){this._document=e;let t=this._textarea=this._document.createElement("textarea"),o=t.style;o.position="fixed",o.top=o.opacity="0",o.left="-999em",t.setAttribute("aria-hidden","true"),t.value=i,t.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(t)}copy(){let i=this._textarea,e=!1;try{if(i){let t=this._document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),e=this._document.execCommand("copy"),t&&t.focus()}}catch{}return e}destroy(){let i=this._textarea;i&&(i.remove(),this._textarea=void 0)}},va=(()=>{class n{_document=s(re);constructor(){}copy(e){let t=this.beginCopy(e),o=t.copy();return t.destroy(),o}beginCopy(e){return new Vn(e,this._document)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ya=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[Qe]})}return n})();var ba=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=R({imports:[ya,B]})}return n})();function dc(n,i){n&1&&(l(0,"mat-chip-row",21),u(1," Deleted "),c())}function hc(n,i){n&1&&(l(0,"mat-chip-row",22),u(1," Deleting... "),c())}function mc(n,i){if(n&1&&(l(0,"mat-chip-row",23),u(1),c()),n&2){let e=f().$implicit;d(),me(" ",e.statusDetails," ")}}function uc(n,i){if(n&1&&(l(0,"mat-chip-row",24),u(1),c()),n&2){let e=f().$implicit;d(),me(" ",e.unavailableReason," ")}}function pc(n,i){n&1&&(l(0,"mat-chip-row",25),u(1," Available "),c())}function fc(n,i){if(n&1){let e=ge();l(0,"button",33),b("click",function(){U(e);let o=f().$implicit,r=f();return q(r.openSearch.emit(o))}),l(1,"mat-icon"),u(2,"find_replace"),c()()}if(n&2){let e=f().$implicit;y("disabled",e.isDeleting)}}function gc(n,i){if(n&1){let e=ge();l(0,"button",34),b("click",function(){U(e);let o=f().$implicit,r=f();return q(r.searchGoogle(o))}),l(1,"mat-icon"),u(2,"search"),c()()}if(n&2){let e=f().$implicit;y("disabled",e.isDeleted||e.isDeleting)}}function _c(n,i){if(n&1){let e=ge();l(0,"div",11)(1,"div",12)(2,"span",13),u(3),c()(),l(4,"div",14),V(5,"img",15),c(),l(6,"div",16)(7,"div",17)(8,"span",18),u(9),c(),l(10,"span",19),u(11),c()()(),l(12,"div",20)(13,"mat-chip-set"),_(14,dc,2,0,"mat-chip-row",21)(15,hc,2,0,"mat-chip-row",22)(16,mc,2,1,"mat-chip-row",23)(17,uc,2,1,"mat-chip-row",24)(18,pc,2,0,"mat-chip-row",25),c()(),l(19,"div",26)(20,"div",27)(21,"button",28),b("click",function(){let o=U(e).$implicit,r=f();return q(r.viewInPlaylist(o))}),l(22,"mat-icon"),u(23,"playlist_play"),c()(),l(24,"button",29),b("click",function(){let o=U(e).$implicit,r=f();return q(r.copyVideoId(o.videoId))}),l(25,"mat-icon"),u(26,"content_copy"),c()(),l(27,"button",30),b("click",function(){let o=U(e).$implicit,r=f();return q(r.searchYouTube(o))}),l(28,"mat-icon"),u(29,"open_in_new"),c()(),_(30,fc,3,1,"button",31)(31,gc,3,1,"button",32),c()()()}if(n&2){let e=i.$implicit,t=i.index,o=f();w("track-deleted",e.isDeleted)("track-deleting",e.isDeleting),d(3),Y(t+1),d(2),y("src",e.thumbnailUrl,$t)("alt",e.title),d(3),y("title",e.title),d(),Y(e.title),d(2),Y(e.channelTitle),d(3),v(e.isDeleted?14:e.isDeleting?15:e.isSafeToRemove?16:e.isUnavailable?17:18),d(6),w("disabled-actions",e.isDeleted),d(),y("disabled",!o.playlistId()||e.isDeleted||e.isDeleting),d(3),y("disabled",e.isDeleted||e.isDeleting),d(3),y("disabled",e.isDeleted||e.isDeleting),d(3),v(e.isUnavailable&&!e.isDeleted?30:31)}}function vc(n,i){n&1&&(l(0,"div",10)(1,"mat-icon"),u(2,"search_off"),c(),l(3,"p"),u(4,"No tracks found matching your criteria."),c()())}var Hi=class n{clipboard=s(va);tracks=Xi.required();playlistId=Xi(null);openSearch=no();displayedColumns=["thumbnail","details","status","actions"];copyVideoId(i){this.clipboard.copy(i)}viewInPlaylist(i){let e=this.playlistId();e&&window.open(`https://www.youtube.com/watch?v=${i.videoId}&list=${e}`,"_blank","noopener,noreferrer")}searchYouTube(i){let e=encodeURIComponent(`${i.title} ${i.channelTitle}`);window.open(`https://www.youtube.com/results?search_query=${e}`,"_blank","noopener,noreferrer")}searchGoogle(i){let e=encodeURIComponent(`${i.title} ${i.channelTitle}`);window.open(`https://www.google.com/search?q=${e}`,"_blank","noopener,noreferrer")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-track-table"]],inputs:{tracks:[1,"tracks"],playlistId:[1,"playlistId"]},outputs:{openSearch:"openSearch"},decls:16,vars:4,consts:[[1,"table-container"],[1,"mat-mdc-table","youtube-list"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell","mat-column-index"],[1,"mat-mdc-header-cell","mat-column-thumbnail"],[1,"mat-mdc-header-cell","mat-column-details"],[1,"mat-mdc-header-cell","mat-column-status"],[1,"mat-mdc-header-cell","mat-column-actions"],["itemSize","110",1,"track-viewport",3,"minBufferPx","maxBufferPx"],["class","mat-mdc-row",3,"track-deleted","track-deleting",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"no-data-cell"],[1,"mat-mdc-row"],[1,"mat-mdc-cell","mat-column-index"],[1,"index-number"],[1,"mat-mdc-cell","mat-column-thumbnail"],["loading","lazy",1,"track-thumbnail",3,"src","alt"],[1,"mat-mdc-cell","mat-column-details"],[1,"details-container"],[1,"track-title",3,"title"],[1,"channel-title"],[1,"mat-mdc-cell","mat-column-status"],[1,"status-chip","deleted-success"],[1,"status-chip","deleting-warning"],["highlighted","",1,"status-chip","duplicate-warning"],["highlighted","",1,"status-chip","unavailable"],[1,"status-chip","available"],[1,"mat-mdc-cell","mat-column-actions"],[1,"action-buttons"],["mat-icon-button","","title","View in Playlist",3,"click","disabled"],["mat-icon-button","","title","Copy Video ID",3,"click","disabled"],["mat-icon-button","","title","Search on YouTube",3,"click","disabled"],["mat-icon-button","","title","Find Replacement",3,"disabled"],["mat-icon-button","","title","Search on Google",3,"disabled"],["mat-icon-button","","title","Find Replacement",3,"click","disabled"],["mat-icon-button","","title","Search on Google",3,"click","disabled"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),u(4,"#"),c(),l(5,"div",4),u(6,"Thumbnail"),c(),l(7,"div",5),u(8,"Track Details"),c(),l(9,"div",6),u(10,"Status"),c(),l(11,"div",7),u(12,"Actions"),c()(),l(13,"cdk-virtual-scroll-viewport",8),Oe(14,_c,32,17,"div",9),_(15,vc,5,0,"div",10),c()()()),e&2&&(d(13),y("minBufferPx",440)("maxBufferPx",880),d(),y("cdkVirtualForOf",t.tracks()),d(),v(t.tracks().length===0?15:-1))},dependencies:[Qt,ba,ki,Cr,Mi,ni,ti,ri,oi,Qe,Nr,Br,zr],styles:[".table-container[_ngcontent-%COMP%]{border-radius:12px;overflow:hidden;background-color:transparent}@media(max-width:768px){.table-container[_ngcontent-%COMP%]{border-radius:0}}.youtube-list[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.youtube-list[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 16px;min-height:48px;background-color:transparent;border-bottom:1px solid var(--mat-sys-outline-variant)}@media(max-width:768px){.youtube-list[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]{display:none}}.youtube-list[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant);font-weight:500;text-transform:uppercase;letter-spacing:.5px}.youtube-list[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 16px;min-height:100px;background-color:transparent;border-bottom:1px solid transparent;border-radius:12px;transition:background-color .2s ease}@media(max-width:768px){.youtube-list[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:16px;min-height:auto;gap:12px;border-bottom:1px solid var(--mat-sys-outline-variant);border-radius:0}}.youtube-list[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-surface-container-high)}.youtube-list[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover   .action-buttons[_ngcontent-%COMP%]{opacity:1}.youtube-list[_ngcontent-%COMP%]   .mat-mdc-row.track-deleted[_ngcontent-%COMP%]{opacity:.45;background-color:#00000005!important}.youtube-list[_ngcontent-%COMP%]   .mat-mdc-row.track-deleted[_ngcontent-%COMP%]   .track-title[_ngcontent-%COMP%]{text-decoration:line-through}.youtube-list[_ngcontent-%COMP%]   .mat-mdc-row.track-deleting[_ngcontent-%COMP%]{background-color:#ed6c020a!important}.youtube-list[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .youtube-list[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{display:flex;align-items:center;padding:8px}@media(max-width:768px){.youtube-list[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .youtube-list[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{padding:0;width:100%!important;flex:none!important}}.track-viewport[_ngcontent-%COMP%]{height:calc(100vh - 350px);min-height:400px;width:100%;outline:none}@media(max-width:768px){.track-viewport[_ngcontent-%COMP%]{height:calc(100vh - 450px)}}.track-viewport[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.track-viewport[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.track-viewport[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--mat-sys-outline-variant);border-radius:4px}.track-viewport[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--mat-sys-outline)}.index-number[_ngcontent-%COMP%]{font-size:14px;color:var(--mat-sys-on-surface-variant);font-weight:400;width:24px;text-align:center}@media(max-width:768px){.index-number[_ngcontent-%COMP%]{display:none}}.track-thumbnail[_ngcontent-%COMP%]{width:160px;aspect-ratio:16/9;object-fit:cover;border-radius:8px}@media(max-width:768px){.track-thumbnail[_ngcontent-%COMP%]{width:100%;max-width:500px;margin:0 auto}}.details-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.details-container[_ngcontent-%COMP%]   .track-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:var(--mat-sys-on-surface);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:20px}@media(max-width:768px){.details-container[_ngcontent-%COMP%]   .track-title[_ngcontent-%COMP%]{-webkit-line-clamp:3}}.details-container[_ngcontent-%COMP%]   .channel-title[_ngcontent-%COMP%]{font-size:12px;color:var(--mat-sys-on-surface-variant);margin-top:4px}.status-chip[_ngcontent-%COMP%]{min-height:24px!important;font-size:11px;font-weight:600}@media(max-width:768px){.status-chip[_ngcontent-%COMP%]{width:fit-content}}.status-chip.available[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: rgba(46, 125, 50, .1);--mdc-chip-label-text-color: #2e7d32}.status-chip.unavailable[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: rgba(211, 47, 47, .1);--mdc-chip-label-text-color: #d32f2f}.status-chip.duplicate-warning[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: rgba(237, 108, 2, .1);--mdc-chip-label-text-color: #ed6c02}.status-chip.deleted-success[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: rgba(46, 125, 50, .15);--mdc-chip-label-text-color: #2e7d32;border:1px solid rgba(46,125,50,.3)!important}.status-chip.deleting-warning[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: rgba(237, 108, 2, .15);--mdc-chip-label-text-color: #ed6c02;animation:_ngcontent-%COMP%_chip-pulse 1.5s infinite ease-in-out}.action-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;opacity:.6;transition:opacity .2s}.action-buttons.disabled-actions[_ngcontent-%COMP%]{pointer-events:none;opacity:.15!important}@media(max-width:768px){.action-buttons[_ngcontent-%COMP%]{opacity:1;width:100%;justify-content:flex-end}}.action-buttons[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{--mdc-icon-button-icon-size: 20px;width:36px!important;height:36px!important;min-width:36px!important;padding:0!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;border-radius:50%!important}.action-buttons[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-on-surface-variant-opacity-08, rgba(0, 0, 0, .08))!important}.action-buttons[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]     .mat-mdc-button-touch-target{display:none}.action-buttons[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0!important;width:20px!important;height:20px!important;font-size:20px!important;display:flex!important;align-items:center!important;justify-content:center!important;line-height:20px!important}.no-data-cell[_ngcontent-%COMP%]{padding:64px;display:flex;flex-direction:column;align-items:center;gap:16px;color:var(--mat-sys-on-surface-variant)}.no-data-cell[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;opacity:.3}.mat-column-index[_ngcontent-%COMP%]{flex:0 0 40px}.mat-column-thumbnail[_ngcontent-%COMP%]{flex:0 0 180px}@media(max-width:768px){.mat-column-thumbnail[_ngcontent-%COMP%]{justify-content:center}}.mat-column-details[_ngcontent-%COMP%]{flex:1}.mat-column-status[_ngcontent-%COMP%]{flex:0 0 140px;justify-content:center}.mat-column-actions[_ngcontent-%COMP%]{flex:0 0 140px}@keyframes _ngcontent-%COMP%_chip-pulse{0%{opacity:.6}50%{opacity:1}to{opacity:.6}}"]})};var Ca=[{code:"US",name:"United States"},{code:"CA",name:"Canada"},{code:"MX",name:"Mexico"},{code:"AL",name:"Albania"},{code:"AT",name:"Austria"},{code:"BE",name:"Belgium"},{code:"BG",name:"Bulgaria"},{code:"CH",name:"Switzerland"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czech Republic"},{code:"DE",name:"Germany"},{code:"DK",name:"Denmark"},{code:"EE",name:"Estonia"},{code:"ES",name:"Spain"},{code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"GB",name:"United Kingdom"},{code:"GR",name:"Greece"},{code:"HR",name:"Croatia"},{code:"HU",name:"Hungary"},{code:"IE",name:"Ireland"},{code:"IS",name:"Iceland"},{code:"IT",name:"Italy"},{code:"LI",name:"Liechtenstein"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"LV",name:"Latvia"},{code:"MT",name:"Malta"},{code:"NL",name:"Netherlands"},{code:"NO",name:"Norway"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"RO",name:"Romania"},{code:"SE",name:"Sweden"},{code:"SI",name:"Slovenia"},{code:"SK",name:"Slovakia"},{code:"TR",name:"Turkey"},{code:"UA",name:"Ukraine"},{code:"AU",name:"Australia"},{code:"CN",name:"China"},{code:"HK",name:"Hong Kong"},{code:"ID",name:"Indonesia"},{code:"IN",name:"India"},{code:"JP",name:"Japan"},{code:"KR",name:"South Korea"},{code:"MY",name:"Malaysia"},{code:"NZ",name:"New Zealand"},{code:"PH",name:"Philippines"},{code:"SG",name:"Singapore"},{code:"TH",name:"Thailand"},{code:"TW",name:"Taiwan"},{code:"VN",name:"Vietnam"},{code:"AR",name:"Argentina"},{code:"BR",name:"Brazil"},{code:"CL",name:"Chile"},{code:"CO",name:"Colombia"},{code:"PE",name:"Peru"},{code:"AE",name:"United Arab Emirates"},{code:"EG",name:"Egypt"},{code:"IL",name:"Israel"},{code:"NG",name:"Nigeria"},{code:"SA",name:"Saudi Arabia"},{code:"ZA",name:"South Africa"}].sort((n,i)=>n.name.localeCompare(i.name));var wa="yt_vcheck_last_results",xa="yt_vcheck_toggle_state",Ma="yt_vcheck_dupe_toggle_state",ji=class n{tracksSignal=k(this.loadCache());loading=k(!1);error=k(null);currentPlaylistId=k(this.getInitialPlaylistId());quotaUsed=k(this.getQuotaUsed());quotaLimit=1e4;quotaPercentage=X(()=>Math.min(Math.round(this.quotaUsed()/this.quotaLimit*100),100));processedTracks=X(()=>{let i=this.tracksSignal(),e=new Set,t=new Set;i.forEach(a=>{!a.isUnavailable&&!a.isDeleted&&(e.add(`${a.title.toLowerCase()}|${a.channelTitle.toLowerCase()}`),t.add(a.videoId))});let o=new Set,r=new Set;return i.map(a=>{if(a.isDeleted)return a;let h=`${a.title.toLowerCase()}|${a.channelTitle.toLowerCase()}`;if(a.isUnavailable){if(e.has(h)||t.has(a.videoId))return ce($({},a),{isSafeToRemove:!0,statusDetails:"Duplicate - Safe to Remove"})}else{if(o.has(h)||r.has(a.videoId))return ce($({},a),{isSafeToRemove:!0,statusDetails:"Duplicate - Safe to Remove"});o.add(h),r.add(a.videoId)}return a})});tracks=X(()=>this.processedTracks());isLoading=this.loading.asReadonly();errorMessage=this.error.asReadonly();showUnavailableOnly=k(this.getInitialToggle());showDuplicatesOnly=k(this.getInitialDupeToggle());searchTerm=k("");getInitialToggle(){return typeof window<"u"?localStorage.getItem(xa)==="true":!1}getInitialDupeToggle(){return typeof window<"u"?localStorage.getItem(Ma)==="true":!1}getInitialPlaylistId(){return typeof window<"u"&&localStorage.getItem("yt_vcheck_playlist_id_last_success")||null}totalTracks=X(()=>this.tracksSignal().length);unavailableTracksCount=X(()=>this.tracksSignal().filter(i=>i.isUnavailable).length);duplicateTracksCount=X(()=>this.processedTracks().filter(i=>i.isSafeToRemove).length);filteredTracks=X(()=>{let i=this.processedTracks(),e=this.showUnavailableOnly(),t=this.showDuplicatesOnly(),o=this.searchTerm().toLowerCase(),r=i;return t?r=r.filter(a=>a.isSafeToRemove):e&&(r=r.filter(a=>a.isUnavailable)),o&&(r=r.filter(a=>a.title.toLowerCase().includes(o)||a.channelTitle.toLowerCase().includes(o))),r});loadCache(){if(typeof window>"u")return[];try{let i=localStorage.getItem(wa);return i?JSON.parse(i):[]}catch{return[]}}saveCache(i){if(!(typeof window>"u"))try{localStorage.setItem(wa,JSON.stringify(i))}catch(e){console.error("Failed to save to cache",e)}}constructor(){ae(()=>{let i=this.showUnavailableOnly();typeof window<"u"&&localStorage.setItem(xa,String(i))}),ae(()=>{let i=this.showDuplicatesOnly();typeof window<"u"&&localStorage.setItem(Ma,String(i))})}async checkPlaylist(i,e,t="US"){if(i){if(!e){this.error.set("API Key is required for standalone mode.");return}this.loading.set(!0),this.error.set(null),this.tracksSignal.set([]),this.currentPlaylistId.set(i),typeof window<"u"&&localStorage.setItem("yt_vcheck_playlist_id_last_success",i),this.saveCache([]);try{let o;do{let r=new URL("https://www.googleapis.com/youtube/v3/playlistItems");r.searchParams.append("part","snippet,contentDetails"),r.searchParams.append("playlistId",i),r.searchParams.append("maxResults","50"),r.searchParams.append("key",e),o&&r.searchParams.append("pageToken",o);let a=await fetch(r.toString());if(this.incrementQuota(1),!a.ok){let T=await a.json();throw T.error?.code===404?new Error("Playlist not found. Please check the ID."):T.error?.code===403?new Error("Access denied. The playlist might be private or the API key is invalid."):new Error(T.error?.message||"Failed to fetch playlist items")}let h=await a.json(),m=h.items||[];if(m.length===0)break;let p=m.map(T=>T.contentDetails.videoId).filter(T=>!!T),g=new URL("https://www.googleapis.com/youtube/v3/videos");g.searchParams.append("part","status,contentDetails,snippet"),g.searchParams.append("id",p.join(",")),g.searchParams.append("key",e);let F=await fetch(g.toString());if(this.incrementQuota(1),!F.ok)throw new Error("Failed to fetch video details for validation");let te=await F.json(),ie=new Map;(te.items||[]).forEach(T=>ie.set(T.id,T));let ne=m.map(T=>{let ct=T.contentDetails.videoId,Bt=ie.get(ct),dt=!1,ht=null;return Bt?Bt.status.privacyStatus==="private"?(dt=!0,ht="Private"):Bt.status.uploadStatus==="deleted"?(dt=!0,ht="Deleted"):this.isRegionLocked(Bt.contentDetails.regionRestriction,t)&&(dt=!0,ht="Region Locked"):(dt=!0,ht="Deleted or Private"),{playlistItemId:T.id,videoId:ct,title:T.snippet.title||"Unknown Title",channelTitle:T.snippet.videoOwnerChannelTitle||T.snippet.channelTitle||"Unknown Channel",thumbnailUrl:T.snippet.thumbnails?.maxres?.url||T.snippet.thumbnails?.medium?.url||T.snippet.thumbnails?.default?.url||"",isUnavailable:dt,unavailableReason:ht||"",position:T.snippet.position}});this.tracksSignal.update(T=>[...T,...ne]),o=h.nextPageToken}while(o);this.saveCache(this.tracksSignal())}catch(o){console.error("Error scanning playlist:",o),this.error.set(o.message||"An unexpected error occurred while scanning.")}finally{this.loading.set(!1)}}}async deletePlaylistItem(i,e){let t=`https://www.googleapis.com/youtube/v3/playlistItems?id=${encodeURIComponent(i)}`,o=await fetch(t,{method:"DELETE",headers:{Authorization:`Bearer ${e}`}});if(this.incrementQuota(50),!o.ok){let r=await o.json().catch(()=>({}));throw r.error?.code===403&&r.error?.message?.includes("quota")?new Error("QUOTA_EXCEEDED"):new Error(r.error?.message||"Failed to delete playlist item.")}}updateTrackStatus(i,e){this.tracksSignal.update(t=>t.map(o=>o.playlistItemId===i?$($({},o),e):o))}removeTrackFromLocalList(i){this.tracksSignal.update(e=>e.filter(t=>t.playlistItemId!==i)),this.saveCache(this.tracksSignal())}async searchReplacements(i,e,t,o){let r=new URL("https://www.googleapis.com/youtube/v3/search");if(r.searchParams.append("part","snippet"),r.searchParams.append("type","video"),r.searchParams.append("maxResults","5"),r.searchParams.append("q",i),o){r.searchParams.append("regionCode",o);let g={JP:"ja",KR:"ko",TW:"zh-Hant",CN:"zh-Hans",FR:"fr",DE:"de",ES:"es",IT:"it",BR:"pt",RU:"ru"}[o.toUpperCase()];g&&r.searchParams.append("relevanceLanguage",g)}let a={};t?a.Authorization=`Bearer ${t}`:r.searchParams.append("key",e);let h=await fetch(r.toString(),{headers:a});if(this.incrementQuota(100),!h.ok){let p=await h.json().catch(()=>({}));throw p.error?.code===403&&p.error?.message?.includes("quota")?new Error("QUOTA_EXCEEDED"):new Error(p.error?.message||"Failed to search YouTube.")}return((await h.json()).items||[]).map(p=>({videoId:p.id.videoId,title:p.snippet.title,channelTitle:p.snippet.channelTitle,thumbnailUrl:p.snippet.thumbnails?.medium?.url||p.snippet.thumbnails?.default?.url||"",publishedAt:p.snippet.publishedAt}))}async insertPlaylistItem(i,e,t,o){let r="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet",a={snippet:{playlistId:i,position:t,resourceId:{kind:"youtube#video",videoId:e}}},h=await fetch(r,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(a)});if(this.incrementQuota(50),!h.ok){let p=await h.json().catch(()=>({}));throw p.error?.code===403&&p.error?.message?.includes("quota")?new Error("QUOTA_EXCEEDED"):new Error(p.error?.message||"Failed to insert playlist item.")}return(await h.json()).id}replaceTrackInLocalList(i,e){this.tracksSignal.update(t=>t.map(o=>o.playlistItemId===i?e:o)),this.saveCache(this.tracksSignal())}isRegionLocked(i,e){return i?i.allowed&&i.allowed.length>0?!i.allowed.some(t=>t.toUpperCase()===e.toUpperCase()):i.blocked&&i.blocked.length>0?i.blocked.some(t=>t.toUpperCase()===e.toUpperCase()):!1:!1}getQuotaTodayKey(){return`yt_vcheck_quota_${new Date().toLocaleDateString("en-US",{timeZone:"America/Los_Angeles"})}`}getQuotaUsed(){return typeof window>"u"?0:parseInt(localStorage.getItem(this.getQuotaTodayKey())||"0",10)}incrementQuota(i){if(typeof window>"u")return;let t=this.getQuotaUsed()+i;localStorage.setItem(this.getQuotaTodayKey(),String(t)),this.quotaUsed.set(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})};function ka(n){if(!n)return null;let i=n.trim(),e=i.match(/[?&]list=([a-zA-Z0-9_-]+)/);return e&&e[1]?e[1]:/^[a-zA-Z0-9_-]{12,}$/.test(i)?i:null}var yc=(n,i)=>i.code,bc=(n,i)=>i.videoId;function Cc(n,i){if(n&1&&(l(0,"mat-error"),u(1),c()),n&2){let e=f(2);d(),Y(e.idError())}}function wc(n,i){if(n&1&&(l(0,"mat-option",36),u(1),c()),n&2){let e=i.$implicit;y("value",e.code),d(),Y(e.name)}}function xc(n,i){if(n&1){let e=ge();l(0,"mat-form-field",38)(1,"mat-label"),u(2,"ISO Code"),c(),l(3,"input",39),b("ngModelChange",function(o){U(e);let r=f(2);return q(r.customCountryCode.set(o))}),c()()}if(n&2){let e=f(2);d(3),y("ngModel",e.customCountryCode())}}function Mc(n,i){if(n&1){let e=ge();l(0,"div",4)(1,"mat-form-field",27)(2,"mat-label"),u(3,"YouTube Playlist ID or URL"),c(),l(4,"input",28),b("ngModelChange",function(o){U(e);let r=f();return r.playlistId.set(o),q(r.idError.set(null))}),c(),_(5,Cc,2,1,"mat-error"),c(),l(6,"mat-form-field",27)(7,"input",29),b("ngModelChange",function(o){U(e);let r=f();return q(r.apiKey.set(o))}),c(),l(8,"mat-label"),u(9,"API Key"),c()(),l(10,"mat-form-field",27)(11,"input",30),b("ngModelChange",function(o){U(e);let r=f();return q(r.oauthClientId.set(o))}),c(),l(12,"mat-label"),u(13,"OAuth Client ID (For Deletion)"),c()(),l(14,"div",31)(15,"mat-form-field",32)(16,"mat-label"),u(17,"Test Region"),c(),l(18,"mat-select",33),b("ngModelChange",function(o){U(e);let r=f();return q(r.selectedCountry.set(o))}),l(19,"div",34)(20,"input",35),b("ngModelChange",function(o){U(e);let r=f();return q(r.countrySearch.set(o))})("keydown",function(o){return o.stopPropagation()}),c()(),V(21,"mat-divider"),Gi(22,wc,2,2,"mat-option",36,yc),l(24,"mat-option",37),u(25,"Custom..."),c()()(),_(26,xc,4,1,"mat-form-field",38),c()()}if(n&2){let e=f();d(4),y("ngModel",e.playlistId()),d(),v(e.idError()?5:-1),d(2),y("ngModel",e.apiKey()),d(4),y("ngModel",e.oauthClientId()),d(7),y("ngModel",e.selectedCountry()),d(2),y("ngModel",e.countrySearch()),d(2),Wi(e.filteredCountries()),d(4),v(e.selectedCountry()==="CUSTOM"?26:-1)}}function kc(n,i){if(n&1){let e=ge();l(0,"button",40),b("click",function(){U(e);let o=f();return q(o.onAuthorize())}),l(1,"mat-icon"),u(2),c(),u(3),c()}if(n&2){let e=f();y("color",e.oauthToken()?"accent":"primary")("disabled",e.isDeleting()||e.checkerService.isLoading()),d(2),Y(e.oauthToken()?"verified_user":"vpn_key"),d(),me(" ",e.oauthToken()?"Authorized":"Authorize Deletion"," ")}}function Dc(n,i){if(n&1){let e=ge();l(0,"button",41),b("click",function(){U(e);let o=f();return q(o.onRemoveDuplicates())}),l(1,"mat-icon"),u(2,"playlist_remove"),c(),u(3),c()}if(n&2){let e=f();y("disabled",e.isDeleting()||e.checkerService.isLoading()),d(3),me(" Remove All Duplicates (",e.checkerService.duplicateTracksCount(),") ")}}function Sc(n,i){if(n&1&&(l(0,"mat-chip",44)(1,"span",42),u(2,"Duplicates:"),c(),l(3,"strong"),u(4),c()()),n&2){let e=f(2);d(4),Y(e.checkerService.duplicateTracksCount())}}function Oc(n,i){if(n&1&&(l(0,"mat-chip-set",13)(1,"mat-chip")(2,"span",42),u(3,"Total:"),c(),l(4,"strong"),u(5),c()(),l(6,"mat-chip",43)(7,"span",42),u(8,"Unavailable:"),c(),l(9,"strong"),u(10),c()(),_(11,Sc,5,1,"mat-chip",44),c()),n&2){let e=f();d(5),Y(e.checkerService.totalTracks()),d(),w("has-unavailable",e.checkerService.unavailableTracksCount()>0),d(4),Y(e.checkerService.unavailableTracksCount()),d(),v(e.checkerService.duplicateTracksCount()>0?11:-1)}}function Pc(n,i){if(n&1&&(l(0,"div",21)(1,"div",45)(2,"span",46),u(3,"Deleting Duplicates..."),c(),l(4,"span",47)(5,"strong"),u(6),c(),u(7),c()(),V(8,"mat-progress-bar",48),c()),n&2){let e=i;d(6),Y(e.current),d(),me(" / ",e.total," deleted"),d(),y("value",e.current/e.total*100)}}function Rc(n,i){n&1&&V(0,"mat-progress-bar",22)}function Ec(n,i){n&1&&(l(0,"div",23)(1,"mat-card",49)(2,"mat-card-content")(3,"div",50)(4,"mat-icon"),u(5,"error"),c(),l(6,"span"),u(7),c()()()()()),n&2&&(d(7),Y(i))}function Ic(n,i){if(n&1&&(V(0,"mat-progress-bar",60),l(1,"div",61),u(2),c()),n&2){let e=f(2);y("color",e.isSwapping()?"accent":"primary"),d(2),me(" ",e.isSwapping()?"Swapping playlist items (inserting & deleting)...":"Searching YouTube..."," ")}}function Fc(n,i){n&1&&(l(0,"div",58)(1,"mat-icon"),u(2,"info"),c(),l(3,"p"),u(4,"No results found or search query empty."),c()())}function Tc(n,i){if(n&1&&(l(0,"span",68),u(1),Yi(2,"date"),c()),n&2){let e=f().$implicit;d(),me("Published: ",eo(2,1,e.publishedAt,"mediumDate"))}}function Ac(n,i){if(n&1){let e=ge();l(0,"div",63),V(1,"img",64),l(2,"div",65),V(3,"span",66),l(4,"span",67),u(5),c(),_(6,Tc,3,4,"span",68),c(),l(7,"button",69),b("click",function(){let o=U(e).$implicit,r=f(3);return q(r.onSwap(o))}),l(8,"mat-icon"),u(9,"swap_horiz"),c(),u(10," Swap "),c()()}if(n&2){let e=i.$implicit,t=f(3);w("disabled-card",t.isSwapping()),d(),y("src",e.thumbnailUrl,$t),d(2),y("title",e.title)("innerHTML",e.title,Yn),d(2),Y(e.channelTitle),d(),v(e.publishedAt?6:-1),d(),y("disabled",t.isSwapping()||t.isSearchingReplacements())}}function Vc(n,i){if(n&1&&(l(0,"div",59),Gi(1,Ac,11,8,"div",62,bc),c()),n&2){let e=f(2);d(),Wi(e.searchResults())}}function Nc(n,i){if(n&1){let e=ge();l(0,"div",51),b("click",function(){U(e);let o=f();return q(o.onCloseSearch())}),l(1,"div",52),b("click",function(o){return o.stopPropagation()}),l(2,"div",53)(3,"h3"),u(4,"Find Replacement Video"),c(),l(5,"button",54),b("click",function(){U(e);let o=f();return q(o.onCloseSearch())}),l(6,"mat-icon"),u(7,"close"),c()()(),l(8,"div",55)(9,"mat-form-field",27)(10,"mat-label"),u(11,"Search Query"),c(),l(12,"input",56),b("ngModelChange",function(o){U(e);let r=f();return q(r.replacementSearchQuery.set(o))})("keydown.enter",function(){U(e);let o=f();return q(o.executeReplacementSearch())}),c()(),l(13,"button",7),b("click",function(){U(e);let o=f();return q(o.executeReplacementSearch())}),l(14,"mat-icon"),u(15,"search"),c(),u(16," Search "),c()(),_(17,Ic,3,2),l(18,"div",57),_(19,Fc,5,0,"div",58)(20,Vc,3,0,"div",59),c()()()}if(n&2){let e=f();d(5),y("disabled",e.isSwapping()),d(7),y("ngModel",e.replacementSearchQuery())("disabled",e.isSwapping()||e.isSearchingReplacements()),d(),y("disabled",e.isSwapping()||e.isSearchingReplacements()||!e.replacementSearchQuery().trim()),d(4),v(e.isSearchingReplacements()||e.isSwapping()?17:-1),d(2),v(!e.isSearchingReplacements()&&e.searchResults().length===0?19:!e.isSearchingReplacements()&&e.searchResults().length>0?20:-1)}}var we={PLAYLIST_ID:"yt_vcheck_playlist_id",API_KEY:"yt_vcheck_api_key",COUNTRY_CODE:"yt_vcheck_country_code",CUSTOM_COUNTRY_CODE:"yt_vcheck_custom_country_code",OAUTH_CLIENT_ID:"yt_vcheck_oauth_client_id",SETTINGS_COLLAPSED:"yt_vcheck_settings_collapsed"},Da=class n{checkerService=s(ji);countries=Ca;playlistId=k(this.getInitialValue(we.PLAYLIST_ID));apiKey=k(this.getInitialValue(we.API_KEY));oauthClientId=k(this.getInitialValue(we.OAUTH_CLIENT_ID));selectedCountry=k(this.getInitialValue(we.COUNTRY_CODE)||"US");customCountryCode=k(this.getInitialValue(we.CUSTOM_COUNTRY_CODE));idError=k(null);oauthToken=k(null);isSettingsCollapsed=k(this.getInitialCollapsedState());isDeleting=k(!1);deletionProgress=k(null);activeSearchTrack=k(null);replacementSearchQuery=k("");isSearchingReplacements=k(!1);searchResults=k([]);isSwapping=k(!1);countrySearch=k("");filteredCountries=X(()=>{let i=this.countrySearch().toLowerCase().trim();return this.countries.filter(e=>e.name.toLowerCase().includes(i)||e.code.toLowerCase().includes(i))});activeCountryCode=X(()=>{let i=this.selectedCountry();if(i==="CUSTOM"){let e=this.customCountryCode().trim().toUpperCase();return/^[A-Z]{2}$/.test(e)?e:"US"}return i});constructor(){if(ae(()=>{let i=this.playlistId();typeof window<"u"&&localStorage.setItem(we.PLAYLIST_ID,i)}),ae(()=>{let i=this.apiKey();typeof window<"u"&&localStorage.setItem(we.API_KEY,i)}),ae(()=>{let i=this.oauthClientId();typeof window<"u"&&localStorage.setItem(we.OAUTH_CLIENT_ID,i)}),ae(()=>{let i=this.selectedCountry();typeof window<"u"&&localStorage.setItem(we.COUNTRY_CODE,i)}),ae(()=>{let i=this.customCountryCode();typeof window<"u"&&localStorage.setItem(we.CUSTOM_COUNTRY_CODE,i)}),ae(()=>{let i=this.isSettingsCollapsed();typeof window<"u"&&localStorage.setItem(we.SETTINGS_COLLAPSED,String(i))}),typeof window<"u"){window.addEventListener("message",e=>{e.origin===window.location.origin&&e.data&&e.data.type==="oauth_token"&&this.oauthToken.set(e.data.token)});let i=window.location.hash;if(i&&i.includes("access_token=")){let t=new URLSearchParams(i.substring(1)).get("access_token");t&&window.opener&&(window.opener.postMessage({type:"oauth_token",token:t},window.location.origin),window.close())}}}getInitialValue(i){return typeof window<"u"&&localStorage.getItem(i)||""}getInitialCollapsedState(){return typeof window<"u"?localStorage.getItem(we.SETTINGS_COLLAPSED)==="true":!1}onScan(){let i=this.playlistId().trim();if(!i)return;let e=ka(i);e?(this.idError.set(null),this.checkerService.checkPlaylist(e,this.apiKey().trim(),this.activeCountryCode()),this.isSettingsCollapsed.set(!0)):this.idError.set("Invalid Playlist ID or URL")}onAuthorize(){let i=this.oauthClientId().trim();if(!i){alert("Please enter a valid Google OAuth Client ID first.");return}let e="https://accounts.google.com/o/oauth2/v2/auth",t=new URLSearchParams({client_id:i,redirect_uri:window.location.origin+window.location.pathname,response_type:"token",scope:"https://www.googleapis.com/auth/youtube",include_granted_scopes:"true",state:"oauth2_callback"}),o=500,r=600,a=window.screen.width/2-o/2,h=window.screen.height/2-r/2;window.open(`${e}?${t.toString()}`,"oauth2_popup",`width=${o},height=${r},left=${a},top=${h},status=no,resizable=yes,scrollbars=yes`)}async onRemoveDuplicates(){let i=this.oauthToken();if(!i){alert('Please click "Authorize" to sign in first.');return}let e=this.checkerService.processedTracks().filter(r=>r.isSafeToRemove);if(e.length===0){alert("No duplicate tracks to remove.");return}let t=`Are you sure you want to delete ${e.length} duplicate tracks from this playlist? This will consume approximately ${e.length*50} units of your YouTube API quota.`;if(!confirm(t))return;this.isDeleting.set(!0),this.deletionProgress.set({current:0,total:e.length});let o=0;try{for(let r of e)if(r.playlistItemId){this.checkerService.updateTrackStatus(r.playlistItemId,{isDeleting:!0,statusDetails:"Deleting..."});try{await this.checkerService.deletePlaylistItem(r.playlistItemId,i),this.checkerService.updateTrackStatus(r.playlistItemId,{isDeleting:!1,isDeleted:!0,isSafeToRemove:!1,statusDetails:"Deleted"}),await new Promise(a=>setTimeout(a,150))}catch(a){if(a.message==="QUOTA_EXCEEDED"){alert("YouTube API Quota exceeded. Deletion process paused. You can resume tomorrow!");break}else console.error(`Failed to delete track ${r.playlistItemId}:`,a),this.checkerService.updateTrackStatus(r.playlistItemId,{isDeleting:!1,statusDetails:"Delete Failed"})}o++,this.deletionProgress.set({current:o,total:e.length})}}finally{this.isDeleting.set(!1),this.deletionProgress.set(null)}}onToggleFilter(i){this.checkerService.showUnavailableOnly.set(i),i&&this.checkerService.showDuplicatesOnly.set(!1)}onToggleDuplicates(i){this.checkerService.showDuplicatesOnly.set(i),i&&this.checkerService.showUnavailableOnly.set(!1)}onOpenSearch(i){this.activeSearchTrack.set(i),this.replacementSearchQuery.set(`${i.title} ${i.channelTitle}`),this.searchResults.set([]),this.executeReplacementSearch()}onCloseSearch(){this.activeSearchTrack.set(null),this.replacementSearchQuery.set(""),this.searchResults.set([]),this.isSearchingReplacements.set(!1)}async executeReplacementSearch(){let i=this.replacementSearchQuery().trim();if(i){this.isSearchingReplacements.set(!0);try{let e=await this.checkerService.searchReplacements(i,this.apiKey().trim(),this.oauthToken()||void 0,this.activeCountryCode());this.searchResults.set(e)}catch(e){console.error("Failed to search replacements:",e),alert(e.message||"An error occurred while searching.")}finally{this.isSearchingReplacements.set(!1)}}}async onSwap(i){let e=this.oauthToken();if(!e){alert("Please authorize YouTube write access first.");return}let t=this.activeSearchTrack();if(!t)return;let o=this.checkerService.currentPlaylistId();if(!o)return;let r=t.position??0,a=t.playlistItemId;if(!a)return;let h=`Are you sure you want to replace this video?

This will insert "${i.title}" at index ${r+1} and delete the old video.
This operation will consume 100 quota units.`;if(confirm(h)){this.isSwapping.set(!0);try{console.log(`[Swap] Starting swap: replacing old track ID ${a} at position ${r} with new video ${i.videoId}`);let m=await this.checkerService.insertPlaylistItem(o,i.videoId,r,e);console.log(`[Swap] Successfully inserted new video. New playlistItemId: ${m}`),console.log("[Swap] Waiting 1000ms before deletion to prevent API race conditions..."),await new Promise(g=>setTimeout(g,1e3)),console.log(`[Swap] Attempting to delete old playlistItem: ${a}`),await this.checkerService.deletePlaylistItem(a,e),console.log("[Swap] Successfully deleted old playlistItem.");let p={playlistItemId:m,videoId:i.videoId,title:i.title,channelTitle:i.channelTitle,thumbnailUrl:i.thumbnailUrl,isUnavailable:!1,unavailableReason:"",position:r};this.checkerService.replaceTrackInLocalList(a,p),this.onCloseSearch()}catch(m){console.error("[Swap] Swap operation failed:",m),alert(m.message||"Swap operation failed.")}finally{this.isSwapping.set(!1)}}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-playlist-checker"]],decls:48,vars:28,consts:[[1,"dashboard-container"],["appearance","outlined",1,"control-card"],[1,"header-spacer"],["mat-icon-button","","type","button",3,"click","title"],[1,"form-row"],[1,"action-row"],[1,"left-actions"],["mat-flat-button","","color","primary",3,"click","disabled"],["mat-stroked-button","",1,"oauth-auth-btn",3,"color","disabled"],["mat-flat-button","","color","warn",1,"remove-dupes-btn",3,"disabled"],["appearance","outline",1,"search-field"],["matInput","","placeholder","Title or channel",3,"ngModelChange","ngModel","disabled"],[1,"stats-toggle-group"],[1,"stats-chips"],[1,"toggles"],[3,"change","checked","disabled"],[1,"quota-container"],[1,"quota-info"],[1,"quota-title"],[1,"quota-stats"],["mode","determinate",3,"value"],[1,"deletion-progress-container"],["mode","indeterminate"],[1,"error-container"],[1,"results-container"],[3,"openSearch","tracks","playlistId"],[1,"modal-overlay"],["appearance","outline",1,"flex-grow"],["matInput","","placeholder","Paste Playlist ID or URL here","name","playlistId","required","",3,"ngModelChange","ngModel"],["matInput","","type","password","placeholder","Your YouTube Data API v3 Key","name","apiKey","required","",3,"ngModelChange","ngModel"],["matInput","","placeholder","Google OAuth Client ID","name","oauthClientId",3,"ngModelChange","ngModel"],[1,"region-container"],["appearance","outline",1,"country-select"],[3,"ngModelChange","ngModel"],[1,"search-container"],["placeholder","Search country...",1,"select-search-input",3,"ngModelChange","keydown","ngModel"],[3,"value"],["value","CUSTOM"],["appearance","outline",1,"country-custom"],["matInput","","maxlength","2","placeholder","e.g. KR",3,"ngModelChange","ngModel"],["mat-stroked-button","",1,"oauth-auth-btn",3,"click","color","disabled"],["mat-flat-button","","color","warn",1,"remove-dupes-btn",3,"click","disabled"],[1,"chip-label"],[1,"unavailable-chip"],[1,"duplicate-chip","has-duplicates"],[1,"progress-info"],[1,"progress-title"],[1,"progress-stats"],["mode","determinate","color","accent",3,"value"],["appearance","outlined",1,"error-card"],[1,"error-content"],[1,"modal-overlay",3,"click"],[1,"modal-card",3,"click"],[1,"modal-header"],["mat-icon-button","","title","Close",3,"click","disabled"],[1,"modal-search-bar"],["matInput","","placeholder","Enter video title, artist, or URL",3,"ngModelChange","keydown.enter","ngModel","disabled"],[1,"modal-results-container"],[1,"no-results"],[1,"results-list"],["mode","indeterminate",1,"modal-progress",3,"color"],[1,"modal-status-text"],[1,"result-card",3,"disabled-card"],[1,"result-card"],["alt","Result Thumbnail",1,"result-thumbnail",3,"src"],[1,"result-details"],[1,"result-title",3,"title","innerHTML"],[1,"result-channel"],[1,"result-date"],["mat-flat-button","","color","accent",3,"click","disabled"]],template:function(e,t){if(e&1&&(l(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),u(4,"YouTube Playlist Checker"),c(),l(5,"mat-card-subtitle"),u(6,"Scan playlists for unavailable or deleted videos"),c(),V(7,"span",2),l(8,"button",3),b("click",function(){return t.isSettingsCollapsed.set(!t.isSettingsCollapsed())}),l(9,"mat-icon"),u(10),c()()(),l(11,"mat-card-content"),_(12,Mc,27,7,"div",4),l(13,"div",5)(14,"div",6)(15,"button",7),b("click",function(){return t.onScan()}),l(16,"mat-icon"),u(17,"playlist_add_check"),c(),u(18," Scan Playlist "),c(),_(19,kc,4,4,"button",8),_(20,Dc,4,2,"button",9),l(21,"mat-form-field",10)(22,"mat-label"),u(23,"Search tracks..."),c(),l(24,"input",11),b("ngModelChange",function(r){return t.checkerService.searchTerm.set(r)}),c()()(),l(25,"div",12),_(26,Oc,12,5,"mat-chip-set",13),l(27,"div",14)(28,"mat-slide-toggle",15),b("change",function(r){return t.onToggleFilter(r.checked)}),u(29," Show Unavailable "),c(),l(30,"mat-slide-toggle",15),b("change",function(r){return t.onToggleDuplicates(r.checked)}),u(31," Show Duplicates "),c()()()(),l(32,"div",16)(33,"div",17)(34,"span",18),u(35,"Daily API Quota Used (Est.):"),c(),l(36,"span",19)(37,"strong"),u(38),Yi(39,"number"),c(),u(40),c()(),V(41,"mat-progress-bar",20),c(),_(42,Pc,9,3,"div",21),c(),_(43,Rc,1,0,"mat-progress-bar",22),c(),_(44,Ec,8,1,"div",23),l(45,"div",24)(46,"app-track-table",25),b("openSearch",function(r){return t.onOpenSearch(r)}),c()(),_(47,Nc,21,6,"div",26),c()),e&2){let o,r,a;d(8),y("title",t.isSettingsCollapsed()?"Expand settings":"Collapse settings"),d(2),Y(t.isSettingsCollapsed()?"expand_more":"expand_less"),d(2),v(t.isSettingsCollapsed()?-1:12),d(3),y("disabled",!t.playlistId()||!t.apiKey()||t.checkerService.isLoading()||t.isDeleting()),d(4),v(t.oauthClientId()?19:-1),d(),v(t.oauthToken()&&t.checkerService.duplicateTracksCount()>0?20:-1),d(4),y("ngModel",t.checkerService.searchTerm())("disabled",t.isDeleting()),d(2),v(t.checkerService.totalTracks()>0?26:-1),d(2),y("checked",t.checkerService.showUnavailableOnly())("disabled",t.isDeleting()),d(2),y("checked",t.checkerService.showDuplicatesOnly())("disabled",t.isDeleting()),d(8),Y(Jn(39,26,t.checkerService.quotaUsed())),d(2),me(" / 10,000 units (",t.checkerService.quotaPercentage(),"%) "),d(),w("high-quota",t.checkerService.quotaPercentage()>=80)("mid-quota",t.checkerService.quotaPercentage()>=50&&t.checkerService.quotaPercentage()<80),y("value",t.checkerService.quotaPercentage()),d(),v((o=t.isDeleting()&&t.deletionProgress())?42:-1,o),d(),v(t.checkerService.isLoading()?43:-1),d(),v((r=t.checkerService.errorMessage())?44:-1,r),d(2),y("tracks",t.checkerService.filteredTracks())("playlistId",t.checkerService.currentPlaylistId()),d(),v((a=t.activeSearchTrack())?47:-1,a)}},dependencies:[Qt,Xo,yi,Ho,mn,un,hn,tr,Qo,Zo,er,Jo,Ko,Xe,xi,St,gn,Pr,Or,ni,Co,ti,_a,An,Ir,Er,ri,oi,ki,Rt,Mi,fa,pa,lt,Mr,xr,Hi,mo,ho],styles:[".dashboard-container[_ngcontent-%COMP%]{padding:1.5rem 2rem 3rem;max-width:1100px;margin:0 auto;display:flex;flex-direction:column;gap:1.5rem}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]{padding:1rem;gap:1rem}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]{border-radius:12px;padding:8px;background-color:var(--mat-sys-surface-container);border:none}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]{border-radius:0;padding:4px}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin-bottom:24px;align-items:center}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin-bottom:16px}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .header-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);display:inline-flex!important;align-items:center!important;justify-content:center!important;margin-left:16px;align-self:flex-start;margin-top:-6px}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]     .mat-mdc-button-touch-target{display:none}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0!important;display:flex!important;align-items:center!important;justify-content:center!important}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);font-weight:600}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.25rem}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font:var(--mat-sys-body-medium);opacity:.7}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .flex-grow[_ngcontent-%COMP%]{flex:1;min-width:280px}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .flex-grow[_ngcontent-%COMP%]{min-width:100%}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .region-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex:0 0 auto}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .region-container[_ngcontent-%COMP%]{flex:1 1 100%;width:100%}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .region-container[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%]{flex:0 0 160px}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .region-container[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%]{flex:1}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .region-container[_ngcontent-%COMP%]   .country-custom[_ngcontent-%COMP%]{flex:0 0 100px}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .region-container[_ngcontent-%COMP%]   .country-custom[_ngcontent-%COMP%]{flex:1}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 16px;height:48px;position:sticky;top:0;background:var(--mat-sys-surface-container);z-index:100;color:var(--mat-sys-on-surface)}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .select-search-input[_ngcontent-%COMP%]{border:none;outline:none;background:transparent;width:100%;height:100%;font-size:14px;color:inherit}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .select-search-input[_ngcontent-%COMP%]::placeholder{color:var(--mat-sys-on-surface-variant);opacity:.6}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]     .mat-mdc-select-panel{padding-top:0!important}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]     .mat-mdc-select-panel::-webkit-scrollbar{width:0px;background:transparent}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]     .mat-mdc-select-panel{scrollbar-width:none;-ms-overflow-style:none}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:16px;flex-wrap:wrap;gap:16px}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;flex-wrap:wrap}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]{width:100%}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]{height:36px;padding:0 20px;gap:8px;font-size:14px;font-weight:500;border-radius:18px}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]{width:100%;height:44px}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px;margin-left:0;margin-right:0}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   .oauth-auth-btn[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   .remove-dupes-btn[_ngcontent-%COMP%]{height:36px;border-radius:18px!important;font-size:13px;font-weight:500;gap:6px;display:inline-flex;align-items:center}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   .oauth-auth-btn[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   .remove-dupes-btn[_ngcontent-%COMP%]{width:100%;height:44px}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   .oauth-auth-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   .remove-dupes-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{width:350px}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{width:100%}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .left-actions[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;flex-wrap:wrap;justify-content:flex-end;flex-grow:1}@media(max-width:600px){.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]{justify-content:space-between;width:100%}}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]   .toggles[_ngcontent-%COMP%]{display:flex;align-items:center}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{transform:scale(.9);transform-origin:left center;font-size:13px;font-weight:500}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mdc-label{padding-left:8px}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]   .stats-chips[_ngcontent-%COMP%]   .chip-label[_ngcontent-%COMP%]{margin-right:4px;font-size:13px;font-weight:500}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]   .stats-chips[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]{--mdc-chip-label-text-size: 13px;min-height:28px!important;border:none;font-weight:500;background-color:var(--mat-sys-surface-container);color:var(--mat-sys-on-surface-variant)}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]   .stats-chips[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px;font-weight:600}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]   .stats-chips[_ngcontent-%COMP%]   mat-chip.unavailable-chip.has-unavailable[_ngcontent-%COMP%]{background-color:#d32f2f1a;color:#d32f2f}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   .stats-toggle-group[_ngcontent-%COMP%]   .stats-chips[_ngcontent-%COMP%]   mat-chip.duplicate-chip.has-duplicates[_ngcontent-%COMP%]{background-color:#ed6c021a;color:#ed6c02}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{margin-top:24px;border-radius:4px}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]{margin-top:24px;padding:16px;background-color:var(--mat-sys-surface-container-low);border-radius:12px;border:1px solid var(--mat-sys-outline-variant)}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;font-size:13px;color:var(--mat-sys-on-surface-variant)}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .quota-title[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .progress-title[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .quota-title[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-title[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .quota-title[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .progress-title[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .quota-title[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-title[_ngcontent-%COMP%]{font-weight:500;color:var(--mat-sys-on-surface)}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .quota-stats[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .quota-stats[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .quota-stats[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .quota-stats[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]{font-size:12px}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .quota-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .quota-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .quota-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .quota-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .quota-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:600;color:var(--mat-sys-on-surface)}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{height:6px;border-radius:3px;margin-top:0}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   mat-progress-bar.high-quota[_ngcontent-%COMP%]     .mdc-linear-progress__bar-inner, .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   mat-progress-bar.high-quota[_ngcontent-%COMP%]     .mdc-linear-progress__bar-inner{background-color:var(--mat-sys-error)!important}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .quota-container[_ngcontent-%COMP%]   mat-progress-bar.mid-quota[_ngcontent-%COMP%]     .mdc-linear-progress__bar-inner, .dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   mat-progress-bar.mid-quota[_ngcontent-%COMP%]     .mdc-linear-progress__bar-inner{background-color:#ed6c02!important}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]{background-color:#ed6c0205;border-color:#ed6c0226}.dashboard-container[_ngcontent-%COMP%]   .control-card[_ngcontent-%COMP%]   .deletion-progress-container[_ngcontent-%COMP%]   .progress-title[_ngcontent-%COMP%]{color:#ed6c02}.dashboard-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]{border-radius:16px;background-color:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}.dashboard-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-weight:500}.dashboard-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--mat-sys-error)}.dashboard-container[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]{border-radius:28px;overflow:hidden}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#0009;display:flex;align-items:center;justify-content:center;z-index:1000;animation:_ngcontent-%COMP%_fadeIn .15s cubic-bezier(0,0,.2,1)}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-container-high);border:1px solid var(--mat-sys-outline-variant);border-radius:28px;padding:24px;width:90%;max-width:650px;max-height:85vh;display:flex;flex-direction:column;box-shadow:var(--mat-sys-level3-elevation, 0 8px 12px rgba(0, 0, 0, .3));animation:_ngcontent-%COMP%_slideUp .15s cubic-bezier(0,0,.2,1)}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.35rem;font-weight:600;color:var(--mat-sys-on-surface)}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);margin-top:0;margin-left:0;display:inline-flex!important;align-items:center!important;justify-content:center!important}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover{background-color:#ffffff0d}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]     .mat-mdc-button-touch-target{display:none}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0!important;display:flex!important;align-items:center!important;justify-content:center!important}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-search-bar[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:center;margin-bottom:16px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper{border-radius:14px!important}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-search-bar[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]{height:36px;border-radius:18px;padding:0 20px;font-weight:500;font-size:14px;gap:8px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-search-bar[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-progress[_ngcontent-%COMP%]{height:4px;border-radius:2px;margin-bottom:6px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-status-text[_ngcontent-%COMP%]{font-size:11px;font-weight:500;text-align:center;color:var(--mat-sys-on-surface);margin-bottom:16px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding-right:0;margin-bottom:8px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;width:0;height:0;background:transparent}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:180px;color:var(--mat-sys-on-surface-variant);opacity:.7;gap:8px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:36px;width:36px;height:36px;opacity:.5}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:13px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:center;padding:12px;background-color:var(--mat-sys-surface-container-low);border:1px solid var(--mat-sys-outline-variant);border-radius:16px;transition:background-color .2s ease}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-surface-container)}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card.disabled-card[_ngcontent-%COMP%]{opacity:.4;pointer-events:none}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-thumbnail[_ngcontent-%COMP%]{width:90px;height:60px;object-fit:cover;border-radius:8px;background-color:#0000004d}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:0}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:var(--mat-sys-on-surface);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-channel[_ngcontent-%COMP%]{font-size:11px;color:var(--mat-sys-on-surface-variant);opacity:.8;font-weight:500}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-date[_ngcontent-%COMP%]{font-size:10px;color:var(--mat-sys-on-surface-variant);opacity:.55;margin-top:2px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]{height:36px;border-radius:18px;font-weight:600;font-size:12px;padding:0 16px;gap:4px}.dashboard-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-card[_ngcontent-%COMP%]   .modal-results-container[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideUp{0%{transform:translateY(8px);opacity:0}to{transform:translateY(0);opacity:1}}"]})};export{Da as PlaylistCheckerComponent};

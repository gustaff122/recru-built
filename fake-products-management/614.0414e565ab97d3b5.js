"use strict";(self.webpackChunkfake_products_management=self.webpackChunkfake_products_management||[]).push([[614],{3614:(Y,y,s)=>{s.r(y),s.d(y,{EditSpecialOfferModule:()=>z});var c=s(6814),r=s(6223),f=s(4828),U=s(7394);const S=Symbol("SPECIAL_OFFER");var e=s(5879),v=s(2761),C=s(5318);function x(t,i){1&t&&(e.TgZ(0,"div",5),e._UZ(1,"app-form-step-header",6)(2,"app-form-step-header",7)(3,"app-form-step-header",8)(4,"app-form-step-header",9)(5,"app-form-step-header",10)(6,"app-form-step-header",11)(7,"app-form-step-header",12)(8,"app-form-step-header",13)(9,"app-form-step-header",14),e.qZA()),2&t&&(e.xp6(1),e.Q6J("number",1),e.xp6(1),e.Q6J("disabled",!0)("number",2),e.xp6(1),e.Q6J("disabled",!0)("number",3),e.xp6(1),e.Q6J("disabled",!0)("number",4),e.xp6(1),e.Q6J("disabled",!0)("number",5),e.xp6(1),e.Q6J("disabled",!0)("number",6),e.xp6(1),e.Q6J("disabled",!0)("number",7),e.xp6(1),e.Q6J("disabled",!0)("number",8),e.xp6(1),e.Q6J("disabled",!0)("number",9))}function k(t,i){if(1&t&&(e.TgZ(0,"div",5)(1,"a",15),e._UZ(2,"app-form-step-header",16),e.qZA(),e.TgZ(3,"a",17),e._UZ(4,"app-form-step-header",18),e.qZA(),e.TgZ(5,"a",19),e._UZ(6,"app-form-step-header",20),e.qZA(),e.TgZ(7,"a",21),e._UZ(8,"app-form-step-header",22),e.qZA(),e.TgZ(9,"a",23),e._UZ(10,"app-form-step-header",24),e.qZA(),e.TgZ(11,"a",25),e._UZ(12,"app-form-step-header",26),e.qZA(),e.TgZ(13,"a",27),e._UZ(14,"app-form-step-header",28),e.qZA(),e.TgZ(15,"a",29),e._UZ(16,"app-form-step-header",30),e.qZA(),e.TgZ(17,"a",31),e._UZ(18,"app-form-step-header",32),e.qZA()()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("active","definition"===n.routePath)("number",1),e.xp6(2),e.Q6J("active","choose-products"===n.routePath)("number",2),e.xp6(2),e.Q6J("active","exclude-products"===n.routePath)("number",3),e.xp6(2),e.Q6J("active","bonus-products"===n.routePath)("number",4),e.xp6(2),e.Q6J("active","products-limits"===n.routePath)("number",5),e.xp6(2),e.Q6J("active","choose-clients"===n.routePath)("number",6),e.xp6(2),e.Q6J("active","exclude-clients"===n.routePath)("number",7),e.xp6(2),e.Q6J("active","clients-limits"===n.routePath)("number",8),e.xp6(2),e.Q6J("active","summary"===n.routePath)("number",9)}}let A=(()=>{var t;class i{ngOnInit(){this.buildForm(),this.subscriptions.add(this.router.events.subscribe(()=>{this.routePath=this.router.url.split("/").pop()}))}ngOnDestroy(){this.subscriptions.unsubscribe()}constructor(o,a,l,d){this.formBuilder=o,this.router=a,this.specialOffersService=l,this.activatedRoute=d,this.subscriptions=new U.w0,this.routePath=this.router.url.split("/").pop()}buildForm(){const o=this.activatedRoute.snapshot.data[S];this.form=this.formBuilder.group({definition:this.formBuilder.group({description:this.formBuilder.group({marketingName:new r.NI(null,[r.kI.required,r.kI.maxLength(32)]),technicalName:new r.NI(null,[r.kI.maxLength(32)]),description:new r.NI(null,r.kI.maxLength(4096))}),conditions:this.formBuilder.group({portal:new r.NI(null,[r.kI.required]),orderType:new r.NI(null,[r.kI.required]),benefitAmount:new r.NI(null),startDate:new r.NI(null,[r.kI.required]),endDate:new r.NI(null),priceConditions:new r.NI("business"),connectedWithOtherPromotions:new r.NI(!1),backPromotion:new r.NI(!1)})})}),this.form.patchValue(o)}submit(){this.form.valid&&this.specialOffersService.editSpecialOffer(this.form.getRawValue())}}return(t=i).\u0275fac=function(o){return new(o||t)(e.Y36(r.qu),e.Y36(f.F0),e.Y36(v.$),e.Y36(f.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-special-offer-routing"]],decls:9,vars:2,consts:[[1,"offer"],[3,"ngTemplateOutlet"],[1,"offer--container",3,"formGroup"],["disabledTpl",""],["enabledTpl",""],[1,"offer--steps"],["header","definition",3,"number"],["header","choose products",3,"disabled","number"],["header","exclude products",3,"disabled","number"],["header","bonus products",3,"disabled","number"],["header","products limits",3,"disabled","number"],["header","choose clients",3,"disabled","number"],["header","exclude clients",3,"disabled","number"],["header","clients limits",3,"disabled","number"],["header","summary",3,"disabled","number"],["routerLink","definition"],["header","definition",3,"active","number"],["routerLink","choose-products"],["header","choose products",3,"active","number"],["routerLink","exclude-products"],["header","exclude products",3,"active","number"],["routerLink","bonus-products"],["header","bonus products",3,"active","number"],["routerLink","products-limits"],["header","products limits",3,"active","number"],["routerLink","choose-clients"],["header","choose clients",3,"active","number"],["routerLink","exclude-clients"],["header","exclude clients",3,"active","number"],["routerLink","clients-limits"],["header","clients limits",3,"active","number"],["routerLink","summary"],["header","summary",3,"active","number"]],template:function(o,a){if(1&o&&(e.TgZ(0,"div",0)(1,"div"),e.GkF(2,1),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()(),e.YNc(5,x,10,17,"ng-template",null,3,e.W1O),e.YNc(7,k,19,18,"ng-template",null,4,e.W1O)),2&o){const l=e.MAs(6),d=e.MAs(8);e.xp6(2),e.Q6J("ngTemplateOutlet",a.form.get("definition.description.marketingName").value||a.form.get("definition.description.technicalName").value?d:l),e.xp6(1),e.Q6J("formGroup",a.form)}},dependencies:[c.tP,r.JL,r.sg,f.lC,f.rH,C.d],styles:["[_nghost-%COMP%]{display:block;height:100%}"],changeDetection:0}),i})();var u=s(2032),h=s(1175),g=s(2596),_=s(8525),Z=s(8034),b=s(7466),T=s(5986),m=s(9157);function q(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Over 32 characters. Too much."),e.qZA())}function E(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Over 4096 characters. Too much."),e.qZA())}let N=(()=>{var t;class i{constructor(o){this.controlContainer=o}ngOnInit(){this.form=this.controlContainer.control.get("description")}}return(t=i).\u0275fac=function(o){return new(o||t)(e.Y36(r.gN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-special-offer-description-subform"]],standalone:!0,features:[e.jDz],decls:47,vars:3,consts:[[1,"offer-content--section",3,"formGroup"],[1,"offer-content--section__header"],[1,"offer-content--section__header__text"],[1,"offer-content--section__header__info"],[1,"offer-content--section__divider"],[1,"offer-content--form"],[1,"offer-content--form__input"],["readonly","","formControlName","marketingName","matInput","","placeholder","Marketing name","type","text"],["matSuffix","",1,"offer-content--form__input__locked"],[1,"offer-content--form__input__tooltip"],["matTooltip","Lorem ipsum"],["formControlName","technicalName","matInput","","placeholder","Technical name","type","text"],[4,"ngIf"],["formControlName","description","matInput","","placeholder","Description"],[1,"offer-content--text"]],template:function(o,a){1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"h1",2),e._uU(3,"Description"),e.qZA(),e.TgZ(4,"span",3),e._uU(5,"* is required"),e.qZA()(),e._UZ(6,"hr",4),e.TgZ(7,"div",5)(8,"div",6)(9,"mat-form-field")(10,"mat-label"),e._uU(11,"Marketing name"),e.qZA(),e._UZ(12,"input",7),e.TgZ(13,"mat-icon",8),e._uU(14,"lock"),e.qZA()(),e.TgZ(15,"div",9)(16,"mat-icon",10),e._uU(17,"info"),e.qZA()()(),e.TgZ(18,"div",6)(19,"mat-form-field")(20,"mat-label"),e._uU(21,"Technical name"),e.qZA(),e._UZ(22,"input",11),e.YNc(23,q,2,0,"mat-error",12),e.qZA(),e.TgZ(24,"div",9)(25,"mat-icon",10),e._uU(26,"info"),e.qZA()()(),e.TgZ(27,"div",6)(28,"mat-form-field")(29,"mat-label"),e._uU(30,"Description"),e.qZA(),e._UZ(31,"textarea",13),e.YNc(32,E,2,0,"mat-error",12),e.qZA(),e.TgZ(33,"div",9)(34,"mat-icon",10),e._uU(35,"info"),e.qZA()()()(),e.TgZ(36,"div",5)(37,"div",1)(38,"h1",2),e._uU(39,"Catalog promotion tutorial:"),e.qZA()(),e._UZ(40,"hr",4),e.TgZ(41,"div",14)(42,"p"),e._uU(43," The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat, and 1950s rock 'n' roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band also explored music styles ranging from folk and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements. "),e._UZ(44,"br")(45,"br"),e._uU(46,' Led by primary songwriters Lennon and McCartney, the Beatles evolved from Lennon\'s previous group, the Quarrymen, and built their reputation playing clubs in Liverpool and Hamburg over three years from 1960, initially with Stuart Sutcliffe playing bass. The core trio of Lennon, McCartney and Harrison, together since 1958, went through a succession of drummers, including Pete Best, before asking Starr to join them in 1962. Manager Brian Epstein moulded them into a professional act, and producer George Martin guided and developed their recordings, greatly expanding their domestic success after signing to EMI Records and achieving their first hit, "Love Me Do", in late 1962. As their popularity grew into the intense fan frenzy dubbed "Beatlemania", the band acquired the nickname "the Fab Four", with Epstein, Martin or another member of the band\'s entourage sometimes informally referred to as a "fifth Beatle". '),e.qZA()()()()),2&o&&(e.Q6J("formGroup",a.form),e.xp6(23),e.Q6J("ngIf",a.form.get("technicalName").hasError("maxlength")),e.xp6(9),e.Q6J("ngIf",a.form.get("description").hasError("maxlength")))},dependencies:[c.ez,c.O5,u.c,u.Nt,m.KE,m.hX,m.TO,m.R9,h.Ps,h.Hw,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,g.AV,g.gM],styles:["[_nghost-%COMP%]{display:block;height:100%}"],changeDetection:0}),i})();var J=s(3680);function M(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Required"),e.qZA())}function D(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Required"),e.qZA())}function I(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Required"),e.qZA())}let P=(()=>{var t;class i{constructor(o){this.controlContainer=o}ngOnInit(){this.form=this.controlContainer.control.get("conditions")}}return(t=i).\u0275fac=function(o){return new(o||t)(e.Y36(r.gN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-special-offer-conditions-subform"]],standalone:!0,features:[e.jDz],decls:88,vars:8,consts:[[1,"offer-content--section",3,"formGroup"],[1,"offer-content--section__header"],[1,"offer-content--section__header__text"],[1,"offer-content--section__header__info"],[1,"offer-content--section__divider"],[1,"offer-content--form"],[1,"offer-content--form__input"],["formControlName","portal","placeholder","Portal"],["value","MojeMaleZoo.pl"],["value","zwierzakowe-akcesoria.com"],["value","shiibainou.jp"],[4,"ngIf"],[1,"offer-content--form__input__tooltip"],["matTooltip","Lorem ipsum"],["formControlName","orderType","placeholder","Type"],["value","private"],["value","commercial"],["readonly","","formControlName","benefitAmount","matInput","","placeholder","Benefit amount","type","number"],["matSuffix","",1,"offer-content--form__input__locked"],["formControlName","startDate","matInput","","placeholder","Start date",3,"matDatepicker"],["matIconSuffix","",3,"for"],["startPicker",""],["formControlName","endDate","matInput","","placeholder","Finish date",3,"matDatepicker"],["finishPicker",""],["formControlName","priceConditions"],["value","business"],["value","base"],[1,"offer-content--form__input__tooltip","offer-content--form__input__tooltip__sm-pt"],["formControlName","connectedWithOtherPromotions"],["formControlName","backPromotion"]],template:function(o,a){if(1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"h1",2),e._uU(3,"Conditions"),e.qZA(),e.TgZ(4,"span",3),e._uU(5,"* is required"),e.qZA()(),e._UZ(6,"hr",4),e.TgZ(7,"div",5)(8,"div",6)(9,"mat-form-field")(10,"mat-label"),e._uU(11,"Portal"),e.qZA(),e.TgZ(12,"mat-select",7)(13,"mat-option",8),e._uU(14,"MojeMaleZoo.pl"),e.qZA(),e.TgZ(15,"mat-option",9),e._uU(16,"zwierzakowe-akcesoria.com"),e.qZA(),e.TgZ(17,"mat-option",10),e._uU(18,"shiibainou.jp"),e.qZA()(),e.YNc(19,M,2,0,"mat-error",11),e.qZA(),e.TgZ(20,"div",12)(21,"mat-icon",13),e._uU(22,"info"),e.qZA()()(),e.TgZ(23,"div",6)(24,"mat-form-field")(25,"mat-label"),e._uU(26,"Type"),e.qZA(),e.TgZ(27,"mat-select",14)(28,"mat-option",15),e._uU(29,"Private"),e.qZA(),e.TgZ(30,"mat-option",16),e._uU(31,"Commercial"),e.qZA()(),e.YNc(32,D,2,0,"mat-error",11),e.qZA(),e.TgZ(33,"div",12)(34,"mat-icon",13),e._uU(35,"info"),e.qZA()()(),e.TgZ(36,"div",6)(37,"mat-form-field")(38,"mat-label"),e._uU(39,"Benefit amount"),e.qZA(),e._UZ(40,"input",17),e.TgZ(41,"mat-icon",18),e._uU(42,"lock"),e.qZA()(),e.TgZ(43,"div",12)(44,"mat-icon",13),e._uU(45,"info"),e.qZA()()()(),e._UZ(46,"hr",4),e.TgZ(47,"div",5)(48,"div",6)(49,"mat-form-field")(50,"mat-label"),e._uU(51,"Start date"),e.qZA(),e._UZ(52,"input",19)(53,"mat-datepicker-toggle",20)(54,"mat-datepicker",null,21),e.YNc(56,I,2,0,"mat-error",11),e.qZA(),e.TgZ(57,"mat-form-field")(58,"mat-label"),e._uU(59,"Finish date"),e.qZA(),e._UZ(60,"input",22)(61,"mat-datepicker-toggle",20)(62,"mat-datepicker",null,23),e.qZA(),e.TgZ(64,"div",12)(65,"mat-icon",13),e._uU(66,"info"),e.qZA()()(),e.TgZ(67,"div",6)(68,"mat-radio-group",24)(69,"mat-radio-button",25),e._uU(70,"Business conditions"),e.qZA(),e.TgZ(71,"mat-radio-button",26),e._uU(72,"Base price 100%"),e.qZA()(),e.TgZ(73,"div",27)(74,"mat-icon",13),e._uU(75,"info"),e.qZA()()(),e.TgZ(76,"div",6)(77,"mat-checkbox",28),e._uU(78,"Connect with other promotions"),e.qZA(),e.TgZ(79,"div",27)(80,"mat-icon",13),e._uU(81,"info"),e.qZA()()(),e.TgZ(82,"div",6)(83,"mat-checkbox",29),e._uU(84,"Back promotion"),e.qZA(),e.TgZ(85,"div",27)(86,"mat-icon",13),e._uU(87,"info"),e.qZA()()()()()),2&o){const l=e.MAs(55),d=e.MAs(63);e.Q6J("formGroup",a.form),e.xp6(19),e.Q6J("ngIf",a.form.get("portal").hasError("required")),e.xp6(13),e.Q6J("ngIf",a.form.get("orderType").hasError("required")),e.xp6(20),e.Q6J("matDatepicker",l),e.xp6(1),e.Q6J("for",l),e.xp6(3),e.Q6J("ngIf",a.form.get("startDate").hasError("required")),e.xp6(4),e.Q6J("matDatepicker",d),e.xp6(1),e.Q6J("for",d)}},dependencies:[c.ez,c.O5,u.c,u.Nt,m.KE,m.hX,m.TO,m.R9,h.Ps,h.Hw,r.UX,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,g.AV,g.gM,Z.FA,Z.Mq,Z.hl,Z.nW,b.Fk,b.VQ,b.U0,T.p9,T.oG,_.LD,_.gD,J.ey],styles:["[_nghost-%COMP%]{display:block;height:100%}"],changeDetection:0}),i})(),F=(()=>{var t;class i{constructor(o){this.controlContainer=o}ngOnInit(){this.form=this.controlContainer.control.get("definition")}}return(t=i).\u0275fac=function(o){return new(o||t)(e.Y36(r.gN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-special-offer-definition-form"]],standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"offer-content",3,"formGroup"]],template:function(o,a){1&o&&(e.TgZ(0,"form",0)(1,"div"),e._UZ(2,"app-edit-special-offer-description-subform"),e.qZA(),e.TgZ(3,"div"),e._UZ(4,"app-edit-special-offer-conditions-subform"),e.qZA()()),2&o&&e.Q6J("formGroup",a.form)},dependencies:[c.ez,u.c,r.UX,r._Y,r.JL,r.sg,h.Ps,g.AV,_.LD,Z.FA,b.Fk,T.p9,N,P],styles:["[_nghost-%COMP%]{display:block;height:100%}"],changeDetection:0}),i})(),p=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-special-offer-dummy-form"]],standalone:!0,features:[e.jDz],decls:6,vars:0,consts:[[1,"dummy"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2," Sir Paul McCartney is a legendary British musician, singer, songwriter, and composer. He was born on June 18, 1942, in Liverpool, England. McCartney gained worldwide fame as a member of the iconic rock band, The Beatles, alongside John Lennon, George Harrison, and Ringo Starr. "),e._UZ(3,"br")(4,"br"),e._uU(5," As the bassist and one of the primary singers and songwriters of The Beatles, McCartney played a pivotal role in shaping the band's sound and contributing to their remarkable success during the 1960s. His melodic sensibilities and diverse songwriting styles helped create some of the most beloved and enduring songs in the history of popular music. "),e.qZA()())},dependencies:[c.ez],styles:["[_nghost-%COMP%]{display:block;height:100%}.dummy[_ngcontent-%COMP%]{padding:10px 30px}"],changeDetection:0}),i})();var O=s(2296);const R=[{path:":marketingName",component:A,canActivate:[t=>{const i=(0,e.f3M)(f.F0),n=(0,e.f3M)(v.$),o=t.params.marketingName;return!!n.getSpecialOffersList().find(d=>d.definition.description.marketingName===o)||i.createUrlTree(["special-offers-list"])}],resolve:{[S]:t=>(0,e.f3M)(v.$).getSpecialOffer(t.params.marketingName)},children:[{path:"",redirectTo:"definition",pathMatch:"full"},{path:"definition",component:F,title:"Edit definition"},{path:"choose-products",component:p,title:"Choose products"},{path:"exclude-products",component:p,title:"Exclude products"},{path:"bonus-products",component:p,title:"Add bonuses"},{path:"products-limits",component:p,title:"Limit products"},{path:"choose-clients",component:p,title:"Choose clients"},{path:"exclude-clients",component:p,title:"Exclude products"},{path:"clients-limits",component:p,title:"Limit clients"},{path:"summary",component:(()=>{var t;class i{constructor(o){this.createSpecialOfferRoutingComponent=o,this.formValid=this.createSpecialOfferRoutingComponent.form.valid}submitHandler(){this.createSpecialOfferRoutingComponent.submit()}}return(t=i).\u0275fac=function(o){return new(o||t)(e.Y36(A))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-special-offer-summary"]],standalone:!0,features:[e.jDz],decls:9,vars:1,consts:[[1,"offer-content--section"],[1,"offer-content--section__header"],[1,"offer-content--section__header__text"],[1,"offer-content--section__divider"],[1,"offer-content--form"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),e._uU(3,"Summary"),e.qZA()(),e._UZ(4,"hr",3),e.TgZ(5,"div",4)(6,"div")(7,"button",5),e.NdJ("click",function(){return a.submitHandler()}),e._uU(8,"Save"),e.qZA()()()()),2&o&&(e.xp6(7),e.Q6J("disabled",!a.formValid))},dependencies:[c.ez,O.ot,O.lW],styles:["[_nghost-%COMP%]{display:block;height:100%}"],changeDetection:0}),i})(),title:"Summary"},{path:"**",redirectTo:"definition",pathMatch:"full"}]}];let B=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.Bz.forChild(R),f.Bz]}),i})(),z=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,r.UX,B,C.d]}),i})()}}]);
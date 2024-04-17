"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6552],{6552:(b,a,o)=>{o.r(a),o.d(a,{SettingsPageModule:()=>S});var d=o(177),u=o(9417),l=o(9364),f=o(5260),e=o(4438),h=o(5609);const r=(t,i)=>({"background-color":t,color:i}),m=[{path:"",component:(()=>{var t;class i{constructor(s){this.settings=s}ngOnInit(){this.settings.tipoTemperatura$.subscribe(s=>{this.isCelsiusSelected=s}),this.settings.tipoVelocidad$.subscribe(s=>{this.isKmhSelected=s})}selectCelsius(){this.isCelsiusSelected=!0,this.settings.setTemperatura(this.isCelsiusSelected)}selectFahrenheit(){this.isCelsiusSelected=!1,this.settings.setTemperatura(this.isCelsiusSelected)}selectKmh(){this.isKmhSelected=!0,this.settings.setVelocidadEn(this.isKmhSelected)}selectMph(){this.isKmhSelected=!1,this.settings.setVelocidadEn(this.isKmhSelected)}}return(t=i).\u0275fac=function(s){return new(s||t)(e.rXU(h.h))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-settings"]],decls:25,vars:24,consts:[[2,"display","flex","justify-content","space-between"],["slot","start"],["color","primary","menu","main-menu"],["slot","end","href","https://www.dgac.gob.cl/"],["id","logo","src","../../assets/icon/DGAC-logo.jpg","alt","logo",2,"height","40px","width","30px","margin-right","1vh"],["slot","end","href","https://archivos.meteochile.gob.cl/portaldmc/movil/movil_inicio.php"],["id","logo","src","../../assets/icon/DMC-logo.png","alt","logo",2,"height","40px","width","40px","margin-right","1vh"],[2,"margin-top","35vh"],[1,"toggle-container"],[1,"toggle-button",3,"click","ngStyle"],[1,"divider"]],template:function(s,n){1&s&&(e.j41(0,"ion-toolbar",0)(1,"ion-buttons",1),e.nrm(2,"ion-menu-button",2),e.k0s(),e.j41(3,"a",3),e.nrm(4,"img",4),e.k0s(),e.j41(5,"a",5),e.nrm(6,"img",6),e.k0s()(),e.j41(7,"body")(8,"ion-card",7)(9,"ion-card-header")(10,"ion-card-title"),e.EFF(11," Opciones "),e.k0s()(),e.j41(12,"ion-card-content")(13,"div",8)(14,"button",9),e.bIt("click",function(){return n.selectCelsius()}),e.EFF(15,"Celsius"),e.k0s(),e.nrm(16,"div",10),e.j41(17,"button",9),e.bIt("click",function(){return n.selectFahrenheit()}),e.EFF(18,"Fahrenheit"),e.k0s()(),e.j41(19,"div",8)(20,"button",9),e.bIt("click",function(){return n.selectKmh()}),e.EFF(21,"Km/H"),e.k0s(),e.nrm(22,"div",10),e.j41(23,"button",9),e.bIt("click",function(){return n.selectMph()}),e.EFF(24,"Mph"),e.k0s()()()()()),2&s&&(e.R7$(14),e.AVh("selected",n.isCelsiusSelected),e.Y8G("ngStyle",e.l_i(12,r,n.isCelsiusSelected?"#04317A\n":"#ffffff",n.isCelsiusSelected?"#ffffff":"#000000")),e.R7$(3),e.AVh("selected",!n.isCelsiusSelected),e.Y8G("ngStyle",e.l_i(15,r,n.isCelsiusSelected?"#ffffff":"#04317A\n",n.isCelsiusSelected?"#000000":"#ffffff")),e.R7$(3),e.AVh("selected",n.isKmhSelected),e.Y8G("ngStyle",e.l_i(18,r,n.isKmhSelected?"#04317A\n":"#ffffff",n.isKmhSelected?"#ffffff":"#000000")),e.R7$(3),e.AVh("selected",!n.isKmhSelected),e.Y8G("ngStyle",e.l_i(21,r,n.isKmhSelected?"#ffffff":"#04317A\n",n.isKmhSelected?"#000000":"#ffffff")))},dependencies:[d.B3,l.QW,l.b_,l.I9,l.ME,l.tN,l.MC,l.ai],styles:['@charset "UTF-8";@font-face{font-family:Open Sans;src:url(OpenSans-Bold.c1fc02c2ea5dd4e9.ttf) format("truetype")}*[_ngcontent-%COMP%]{font-family:Open Sans}.toggle-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:5%}.toggle-button[_ngcontent-%COMP%]{padding:10px 20px;font-size:16px;border:none;outline:none;cursor:pointer;background-color:#04317a;color:#fff;transition:background-color .3s,color .3s}.toggle-button[_ngcontent-%COMP%]:first-child{border-top-left-radius:20px;border-bottom-left-radius:20px}.toggle-button[_ngcontent-%COMP%]:last-child{border-top-right-radius:20px;border-bottom-right-radius:20px}.toggle-button.selected[_ngcontent-%COMP%]{background-color:#ccc;color:#212121}.divider[_ngcontent-%COMP%]{height:40px;width:1px;background-color:#ccc}ion-toolbar[_ngcontent-%COMP%]{--background: rgba(255, 255, 255, .65)}body[_ngcontent-%COMP%]{background-image:url(settings.3be23b9d7e9e39ab.jpeg);background-position:center;background-size:cover}ion-card-title[_ngcontent-%COMP%]{text-align:center;color:#212121}ion-card[_ngcontent-%COMP%]{background-color:#ffffffa6}']}),i})()}];let p=(()=>{var t;class i{}return(t=i).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[f.iI.forChild(m),f.iI]}),i})(),S=(()=>{var t;class i{}return(t=i).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.MD,u.YN,l.bv,p]}),i})()}}]);
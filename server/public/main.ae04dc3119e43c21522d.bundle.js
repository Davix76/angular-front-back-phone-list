webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},"0H+Y":function(t,e){t.exports='<h1> Phone details </h1>\n    <a [routerLink]="[\'\']"> Back to list </a>\n\n<div *ngIf="phone">\n  <div class="phone-thumbnail">\n    <img height="300" [src]="phone.image" />\n  </div>\n\n  <div class="phone-info">\n    <h2> {{ phone.name }}&nbsp;</h2>\n    <h3> {{ phone.brand }} </h3>\n\n    <div *ngIf="phone.specs.length">\n      <h4> Features </h4>\n      <ul>\n        <li *ngFor="let spec of phone.specs"> {{ spec&nbsp;}} </li>\n      </ul>\n    </div>\n  </div>\n</div>\n'},"1b5j":function(t,e,n){"use strict";var o=n("/oeL"),r=n("BkNc"),i=n("B8sc"),c=n("RpuY");n.n(c);n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){var n=this;this.route=t,this.phS=e,t.params.mergeMap(function(t){return e.get(t.id)}).subscribe(function(t){console.log(t),n.phone=t})}return t.prototype.ngOnInit=function(){},t}();s=a([n.i(o._11)({selector:"app-phone-details",template:n("0H+Y"),styles:[n("Plog")]}),p("design:paramtypes",["function"==typeof(f=void 0!==r.b&&r.b)&&f||Object,"function"==typeof(u=void 0!==i.a&&i.a)&&u||Object])],s);var f,u},"B/fJ":function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,".blocky{display:inline-block;padding:10px;margin:10px}",""]),t.exports=t.exports.toString()},B8sc:function(t,e,n){"use strict";var o=n("/oeL"),r=n("CPp0"),i=n("5v8a"),c=(n.n(i),n("p5Ee"));n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.http=t,this.BASE_URL=c.a.baseURL}return t.prototype.getList=function(){return this.http.get(this.BASE_URL+"/api/phones").map(function(t){return t.json()})},t.prototype.get=function(t){return this.http.get(this.BASE_URL+"/api/phones/"+t).map(function(t){return t.json()})},t.prototype.edit=function(t){return this.http.put(this.BASE_URL+"/api/phones/"+t.id,t).map(function(t){return t.json()})},t.prototype.remove=function(t){return this.http.delete(this.BASE_URL+"/api/phones/"+t).map(function(t){return t.json()})},t}();s=a([n.i(o.c)(),p("design:paramtypes",["function"==typeof(f=void 0!==r.b&&r.b)&&f||Object])],s);var f},Ev6k:function(t,e,n){"use strict";var o=n("1b5j"),r=n("feZN");n.d(e,"a",function(){return i});var i=[{path:"",component:r.a},{path:"phone/:id",component:o.a},{path:"**",redirectTo:""}]},LeVd:function(t,e){t.exports='<h3> Phone list </h3>\n<div>\n  <div *ngFor="let phone of phones | async" class="blocky">\n    <img height=150 [src]="phone.image" />\n    <h3> {{ phone.name }} </h3>\n    <p> {{ phone.brand }} </p>\n    <a [routerLink]="[\'phone\', phone._id]"> View Details </a>\n  </div>\n</div>\n'},Plog:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},"aR8+":function(t,e,n){"use strict";var o=n("fc+i"),r=n("/oeL"),i=n("BkNc"),c=n("wQAS"),a=n("CPp0"),p=n("feZN"),s=n("1b5j"),f=n("Ev6k"),u=n("B8sc");n.d(e,"a",function(){return l});var h=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},l=function(){function t(){}return t}();l=h([n.i(r.b)({declarations:[c.a,p.a,s.a],imports:[o.a,a.a,i.a.forRoot(f.a)],providers:[u.a],bootstrap:[c.a]})],l)},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("/oeL"),r=n("Qa4U"),i=n("aR8+");n("p5Ee").a.production&&n.i(o.a)(),n.i(r.a)().bootstrapModule(i.a)},efyd:function(t,e){t.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n<h2>LA TIENDA EN CASA DE TELEFONOS. <span style="color:red">AHORA EN OFERTA</span></h2>\n<router-outlet></router-outlet>\n'},feZN:function(t,e,n){"use strict";var o=n("/oeL"),r=n("B8sc");n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.phoneService=t}return t.prototype.ngOnInit=function(){this.phones=this.phoneService.getList()},t}();a=i([n.i(o._11)({selector:"app-phone-list",template:n("LeVd"),styles:[n("B/fJ")]}),c("design:paramtypes",["function"==typeof(p=void 0!==r.a&&r.a)&&p||Object])],a);var p},hxJY:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},n7du:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="n7du"},p5Ee:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!1,baseURL:"http://localhost:3000"}},wQAS:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},i=function(){function t(){this.title="app"}return t}();i=r([n.i(o._11)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]})],i)}},[0]);
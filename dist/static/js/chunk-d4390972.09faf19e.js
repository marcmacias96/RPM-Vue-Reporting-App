(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4390972"],{"0604":function(e,t,a){"use strict";var r=a("acdc"),i=a.n(r);i.a},"0ccb":function(e,t,a){var r=a("50c4"),i=a("1148"),n=a("1d80"),o=Math.ceil,s=function(e){return function(t,a,s){var l,c,d=String(n(t)),u=d.length,p=void 0===s?" ":String(s),f=r(a);return f<=u||""==p?d:(l=f-u,c=i.call(p,o(l/p.length)),c.length>l&&(c=c.slice(0,l)),e?d+c:c+d)}};e.exports={start:s(!1),end:s(!0)}},1148:function(e,t,a){"use strict";var r=a("a691"),i=a("1d80");e.exports="".repeat||function(e){var t=String(i(this)),a="",n=r(e);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(a+=t);return a}},"13d5":function(e,t,a){"use strict";var r=a("23e7"),i=a("d58f").left,n=a("a640"),o=a("ae40"),s=n("reduce"),l=o("reduce",{1:0});r({target:"Array",proto:!0,forced:!s||!l},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"4d90":function(e,t,a){"use strict";var r=a("23e7"),i=a("0ccb").start,n=a("9a0c");r({target:"String",proto:!0,forced:n},{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},8785:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("fb6a"),a("dca8");function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},"9a0c":function(e,t,a){var r=a("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},a434:function(e,t,a){"use strict";var r=a("23e7"),i=a("23cb"),n=a("a691"),o=a("50c4"),s=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),u=a("ae40"),p=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,h=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!f},{splice:function(e,t){var a,r,d,u,p,f,v=s(this),y=o(v.length),w=i(e,y),_=arguments.length;if(0===_?a=r=0:1===_?(a=0,r=y-w):(a=_-2,r=h(m(n(t),0),y-w)),y+a-r>b)throw TypeError(g);for(d=l(v,r),u=0;u<r;u++)p=w+u,p in v&&c(d,u,v[p]);if(d.length=r,a<r){for(u=w;u<y-r;u++)p=u+r,f=u+a,p in v?v[f]=v[p]:delete v[f];for(u=y;u>y-r+a;u--)delete v[u-1]}else if(a>r)for(u=y-r;u>w;u--)p=u+r-1,f=u+a-1,p in v?v[f]=v[p]:delete v[f];for(u=0;u<a;u++)v[u+w]=arguments[u+2];return v.length=y-r+a,d}})},acdc:function(e,t,a){},b680:function(e,t,a){"use strict";var r=a("23e7"),i=a("a691"),n=a("408a"),o=a("1148"),s=a("d039"),l=1..toFixed,c=Math.floor,d=function(e,t,a){return 0===t?a:t%2===1?d(e,t-1,a*e):d(e*e,t/2,a)},u=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},p=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));r({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,a,r,s,l=n(this),p=i(e),f=[0,0,0,0,0,0],m="",h="0",b=function(e,t){var a=-1,r=t;while(++a<6)r+=e*f[a],f[a]=r%1e7,r=c(r/1e7)},g=function(e){var t=6,a=0;while(--t>=0)a+=f[t],f[t]=c(a/e),a=a%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var a=String(f[e]);t=""===t?a:t+o.call("0",7-a.length)+a}return t};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(t=u(l*d(2,69,1))-69,a=t<0?l*d(2,-t,1):l/d(2,t,1),a*=4503599627370496,t=52-t,t>0){b(0,a),r=p;while(r>=7)b(1e7,0),r-=7;b(d(10,r,1),0),r=t-1;while(r>=23)g(1<<23),r-=23;g(1<<r),b(1,1),g(2),h=v()}else b(0,a),b(1<<-t,0),h=v()+o.call("0",p);return p>0?(s=h.length,h=m+(s<=p?"0."+o.call("0",p-s)+h:h.slice(0,s-p)+"."+h.slice(s-p))):h=m+h,h}})},bb2f:function(e,t,a){var r=a("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d58f:function(e,t,a){var r=a("1c0b"),i=a("7b0b"),n=a("44ad"),o=a("50c4"),s=function(e){return function(t,a,s,l){r(a);var c=i(t),d=n(c),u=o(c.length),p=e?u-1:0,f=e?-1:1;if(s<2)while(1){if(p in d){l=d[p],p+=f;break}if(p+=f,e?p<0:u<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:u>p;p+=f)p in d&&(l=a(l,d[p],p,c));return l}};e.exports={left:s(!1),right:s(!0)}},dca8:function(e,t,a){var r=a("23e7"),i=a("bb2f"),n=a("d039"),o=a("861d"),s=a("f183").onFreeze,l=Object.freeze,c=n((function(){l(1)}));r({target:"Object",stat:!0,forced:c,sham:!i},{freeze:function(e){return l&&o(e)?l(s(e)):e}})},f183:function(e,t,a){var r=a("d012"),i=a("861d"),n=a("5135"),o=a("9bf2").f,s=a("90e3"),l=a("bb2f"),c=s("meta"),d=0,u=Object.isExtensible||function(){return!0},p=function(e){o(e,c,{value:{objectID:"O"+ ++d,weakData:{}}})},f=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!n(e,c)){if(!u(e))return"F";if(!t)return"E";p(e)}return e[c].objectID},m=function(e,t){if(!n(e,c)){if(!u(e))return!0;if(!t)return!1;p(e)}return e[c].weakData},h=function(e){return l&&b.REQUIRED&&u(e)&&!n(e,c)&&p(e),e},b=e.exports={REQUIRED:!1,fastKey:f,getWeakData:m,onFreeze:h};r[c]=!0},f834:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"-","start-placeholder":"Fecha Inicio","end-placeholder":"Fecha Fin",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.listQuery.fechas,callback:function(t){e.$set(e.listQuery,"fechas",t)},expression:"listQuery.fechas"}}),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},attrs:{placeholder:"Orden"},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1),a("el-select",{staticStyle:{width:"500px"},attrs:{multiple:"",filterable:"","collapse-tags":"",placeholder:"Tramites"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.listaTramites,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" Buscar ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" Exportar ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"total-container",attrs:{type:"info"}},[e._v(" Total Recaudado $ "+e._s(e.formatPrice(e.total))+" ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$apollo.loading,expression:"$apollo.loading"}],key:e.tableKey,staticClass:"table-container",staticStyle:{width:"100%"},attrs:{data:e.rep_tiposTramite,border:"",fit:"",height:"600","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:"Tipo de trámite","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.DscaTipoTramite))])]}}])}),a("el-table-column",{attrs:{label:"Cantidad",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Cantidad))])]}}])}),a("el-table-column",{attrs:{label:"Monto",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.formatPrice(r.AmountInvoiced)))])]}}])}),a("el-table-column",{attrs:{label:"Detalles",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.getDetalleList(r)}}},[e._v(" Listar ")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogoVisible,width:"90%",center:""},on:{"update:visible":function(t){e.dialogoVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"end",align:"middle"}},[a("el-col",{attrs:{span:2}},[a("span",[e._v(e._s(e.NombreTramite))])]),a("el-col",{attrs:{span:2,offset:9}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" Export ")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.listaDetalles,height:"450"}},[a("el-table-column",{attrs:{label:"Tipo Servicio",width:"150px",prop:"TpServicio"}}),a("el-table-column",{attrs:{label:"Tipo Tramite",width:"150px",prop:"DscaTipoTramite"}}),a("el-table-column",{attrs:{label:"Nro Orden",width:"130px",prop:"NroOrden"}}),a("el-table-column",{attrs:{label:"Cantidad",width:"100px",prop:"Cantidad",align:"center"}}),a("el-table-column",{attrs:{label:"Monto",width:"100px",prop:"AmountInvoiced",align:"center"}}),a("el-table-column",{attrs:{label:"Est Orden",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.ordersStatus[r.Estado]))])]}}])}),a("el-table-column",{attrs:{label:"Est Tarea",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.tasksStatus[r.StatusOT]))])]}}])}),a("el-table-column",{attrs:{label:"F. Creación",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.CreadoEn,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F. Inscripción",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaInscripcion,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F. Estimada E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaEstimadaEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F.Pospuesta E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaPospuestaEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F. Real Ent",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaRealEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F. Finalización",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaEstimadaEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"Avaluo",width:"100px",prop:"Avaluo",align:"center"}}),a("el-table-column",{attrs:{label:"Creado por",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.CreaNombre))])]}}])}),a("el-table-column",{attrs:{label:"Fojas Adc",width:"100px",prop:"FojasAdc",align:"center"}}),a("el-table-column",{attrs:{label:"Factura Cli",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Clinombre))])]}}])})],1)],1)],1)},i=[],n=(a("99af"),a("4160"),a("d81d"),a("13d5"),a("a434"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("159b"),a("6724")),o=a("ed08"),s=a("754d"),l=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],c=l.reduce((function(e,t){return e[t.key]=t.display_name,e}),{}),d={name:"ComplexTable",directives:{waves:n["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]},typeFilter:function(e){return c[e]}},data:function(){return{selected:[],listasTramites:[],ordersStatus:["Creación","Abierta","Por Cobrar","Pagada","Anulada","En Proceso","Para Entrega","Finalizada"],tasksStatus:["No Iniciado","Rev Jurídico","Rev Jurídico C","En Proceso","Por Firmar","Completado","Pendiente","Anulado"],NombreTramite:"",listaDetalles:[],dialogoVisible:!1,tableKey:0,rep_tiposTramite:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:"",type:void 0,sort:"",fechas:null},importanceOptions:[1,2,3],calendarTypeOptions:l,sortOptions:[{label:"Cantidad",key:"cant"},{label:"Monto",key:"mont"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:null,status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},methods:{getDetalleList:function(e){var t=this;this.dialogoVisible=!0,this.NombreTramite=e.DscaTipoTramite,console.log(this.tiposTramite);var a=e.OID.map((function(e){return e.OID}));this.$apollo.query({query:s["k"],variables:{OID:a},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(e){t.listaDetalles=e.data.OrdenTrabajo_Detalle.map((function(e){var t={TpServicio:e.TipoServicio.TpServicio,DscaTipoTramite:e.TipoTramite.DscaTipoTramite,StatusOT:e.StatusOT,CreadoEn:e.CreadoEn,FechaInscripcion:e.FechaInscripcion,FechaInicioTrabajo:e.FechaInicioTrabajo,FechaEstimadaEntrega:e.FechaEstimadaEntrega,FechaPospuestaEntrega:e.FechaPospuestaEntrega,FechaRealEntrega:e.FechaRealEntrega,Avaluo:e.Avaluo,AmountInvoiced:e.AmountInvoiced,FojasAdc:e.FojasAdc,Cantidad:e.Cantidad,CreaNombre:null==e.usuarioByCreadopor?"":"".concat(e.usuarioByCreadopor.Nombres," ").concat(e.usuarioByCreadopor.Apellidos),FechaFinalizacion:0===e.Usuario_OTs.length?"":e.Usuario_OTs[0].FechaFinalizacion,NroOrden:e.OrdenTrabajo_Cabecera.NroOrden,Estado:e.OrdenTrabajo_Cabecera.Estado,Clinombre:null==e.OrdenTrabajo_Cabecera.clienteByClientefactura?"":"".concat(e.OrdenTrabajo_Cabecera.clienteByClientefactura.Nombres," ").concat(e.OrdenTrabajo_Cabecera.clienteByClientefactura.Apellidos)};return t})),console.log(t.listaDetalles)}))},order:function(e){var t=null;"cant"===e?(t=this.rep_tiposTramite.pop(),this.rep_tiposTramite.sort((function(e,t){return e.Cantidad<t.Cantidad?1:e.Cantidad>t.Cantidad?-1:0})),this.rep_tiposTramite.push(t)):(t=this.rep_tiposTramite.pop(),this.rep_tiposTramite.sort((function(e,t){return e.AmountInvoiced<t.AmountInvoiced?1:e.AmountInvoiced>t.AmountInvoiced?-1:0})),this.rep_tiposTramite.push(t))},handleFilter:function(){var e=this;null!=this.listQuery.fechas&&(0===this.selected.length&&(this.selected=this.listaFiltro),this.$apollo.query({query:s["i"],variables:{fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString(),filtro:this.selected},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(t){e.rep_tiposTramite=[];var a={Cantidad:0,AmountInvoiced:0,DscaTipoTramite:"TOTAL"};t.data.TipoTramite.forEach((function(t){var r={DscaTipoTramite:t.DscaTipoTramite,Cantidad:t.OrdenTrabajo_Detalles_aggregate.aggregate.sum.Cantidad,AmountInvoiced:t.ProformaFacturaDetalles_aggregate.aggregate.sum.Total,OID:t.OrdenTrabajo_Detalles_aggregate.nodes};e.rep_tiposTramite.push(r),a.Cantidad+=t.OrdenTrabajo_Detalles_aggregate.aggregate.sum.Cantidad,a.AmountInvoiced+=t.ProformaFacturaDetalles_aggregate.aggregate.sum.Total})),e.total=a.AmountInvoiced,e.rep_tiposTramite.push(a),e.order(e.listQuery.type)})))},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleDelete:function(e,t){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.rep_tiposTramite.splice(t,1)},handleDownload:function(e){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-12076b3a"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(e){var a,r=[],i=[];t.dialogoVisible?(r=["Tipo de servicio","Tipo de tramite","Estatus","Creado en","Fecha de Inscripcion","Fecha de Inicio Trabajo","Fecha de Estimada de Entrega","Fecha de Pospuesta de Entrega","Fecha de Real de Entrega","Avaluo","Monto","Fojas Adicionales","Cantidad","Creado por","Fecha de Finalizacion","Nro Orden","Estado","Clinombre"],i=["TpServicio","DscaTipoTramite","StatusOT","CreadoEn","FechaInscripcion","FechaInicioTrabajo","FechaEstimadaEntrega","FechaPospuestaEntrega","FechaRealEntrega","Avaluo","AmountInvoiced","FojasAdc","Cantidad","CreaNombre","FechaFinalizacion","NroOrden","Estado","Clinombre"],a=t.formatJson(i,t.listaDetalles)):(r=["Tipo de trámite","Cantidad","Monto"],i=["DscaTipoTramite","Cantidad","AmountInvoiced"],a=t.formatJson(i,t.rep_tiposTramite)),console.log(a),e.export_json_to_excel({header:r,data:a,filename:"Reporte-tramites"}),t.downloadLoading=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(o["b"])(t[e]):t[e]}))}))},formatPrice:function(e){var t=(e/1).toFixed(2).replace(".",",");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"}},apollo:{listaTramites:{query:s["j"]}}},u=d,p=(a("0604"),a("2877")),f=Object(p["a"])(u,r,i,!1,null,"55bda11f",null);t["default"]=f.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-103ab913"],{"0ccb":function(e,t,a){var r=a("50c4"),n=a("1148"),i=a("1d80"),o=Math.ceil,l=function(e){return function(t,a,l){var s,c,u=String(i(t)),d=u.length,p=void 0===l?" ":String(l),f=r(a);return f<=d||""==p?u:(s=f-d,c=n.call(p,o(s/p.length)),c.length>s&&(c=c.slice(0,s)),e?u+c:c+u)}};e.exports={start:l(!1),end:l(!0)}},1148:function(e,t,a){"use strict";var r=a("a691"),n=a("1d80");e.exports="".repeat||function(e){var t=String(n(this)),a="",i=r(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(a+=t);return a}},"13d5":function(e,t,a){"use strict";var r=a("23e7"),n=a("d58f").left,i=a("a640"),o=a("ae40"),l=i("reduce"),s=o("reduce",{1:0});r({target:"Array",proto:!0,forced:!l||!s},{reduce:function(e){return n(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"2236a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"-","start-placeholder":"Fecha Inicio","end-placeholder":"Fecha Fin",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.listQuery.fechas,callback:function(t){e.$set(e.listQuery,"fechas",t)},expression:"listQuery.fechas"}}),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" Search ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"total-container",attrs:{type:"info"}},[e._v(" Total Recaudado $ "+e._s(e.formatPrice(e.total))+" ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" Exportar ")])],1),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$apollo.loading,expression:"$apollo.loading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.listaServicios,border:"",fit:"",height:"600","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{staticStyle:{width:"50%"},attrs:{data:t.row.Tareas}},[a("el-table-column",{attrs:{label:"Tipo Trámite","min-width":"150px",prop:"DscaTipoTramite"}}),a("el-table-column",{attrs:{label:"Cantidad",width:"120px",prop:"Cantidad",align:"center"}}),a("el-table-column",{attrs:{label:"Detalles",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.getUserList(r)}}},[e._v(" Listar ")])]}}],null,!0)})],1)]}}])}),a("el-table-column",{attrs:{label:"Tipo Servicios","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Nombre))])]}}])}),a("el-table-column",{attrs:{label:"Creación",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Creacion))])]}}])}),a("el-table-column",{attrs:{label:"Abierta",width:"70px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Abierta))])]}}])}),a("el-table-column",{attrs:{label:"Por Cobrar",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.porCobrar))])]}}])}),a("el-table-column",{attrs:{label:"Pagada",width:"80px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Pagada))])]}}])}),a("el-table-column",{attrs:{label:"Anulada",width:"80px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Anulada))])]}}])}),a("el-table-column",{attrs:{label:"En Proceso",width:"105px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.enProceso))])]}}])}),a("el-table-column",{attrs:{label:"Lista Entrega",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.paraEntrega))])]}}])}),a("el-table-column",{attrs:{label:"Finalizada",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Finalizada))])]}}])}),a("el-table-column",{attrs:{label:"Cantidad",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Total))])]}}])}),a("el-table-column",{attrs:{label:"Total Recaudado",width:"140px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.formatPrice(r.totalRecaudado)))])]}}])})],1)],1),a("el-dialog",{attrs:{visible:e.dialogTableVisible,width:"90%",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("span",[e._v(e._s(e.userName))])]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.listaDetalles,height:"450"}},[a("el-table-column",{attrs:{label:"Tipo Servicio",width:"150px",prop:"TipoServicio.TpServicio"}}),a("el-table-column",{attrs:{label:"Tipo Tramite",width:"150px",prop:"TipoTramite.DscaTipoTramite"}}),a("el-table-column",{attrs:{label:"Nro Orden",width:"130px",prop:"OrdenTrabajo_Cabecera.NroOrden"}}),a("el-table-column",{attrs:{label:"Cantidad",width:"100px",prop:"Cantidad",align:"center"}}),a("el-table-column",{attrs:{label:"Monto",width:"100px",prop:"AmountInvoiced",align:"center"}}),a("el-table-column",{attrs:{label:"Est Orden",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.ordersStatus[r.OrdenTrabajo_Cabecera.Estado]))])]}}])}),a("el-table-column",{attrs:{label:"Est Tarea",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.tasksStatus[r.StatusOT]))])]}}])}),a("el-table-column",{attrs:{label:"F. Creación",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.CreadoEn,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F. Inscripción",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaInscripcion,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F. Estimada E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaEstimadaEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F.Pospuesta E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaPospuestaEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F. Real Ent",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaRealEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"F. Finalización",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e._f("moment")(r.FechaFinalizacion,"YYYY-MM-DD hh:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"Avaluo",width:"100px",prop:"Avaluo",align:"center"}}),a("el-table-column",{attrs:{label:"Creado por",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.usuarioByCreadopor.Nombres))]),a("span",[e._v(e._s(r.usuarioByCreadopor.Apellidos))])]}}])}),a("el-table-column",{attrs:{label:"Fojas Adc",width:"100px",prop:"FojasAdc",align:"center"}}),a("el-table-column",{attrs:{label:"Factura Cli",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.OrdenTrabajo_Cabecera.clienteByClientefactura.Nombres))]),a("span",[e._v(e._s(r.OrdenTrabajo_Cabecera.clienteByClientefactura.Apellidos))])]}}])})],1)],1)],1)},n=[],i=(a("d81d"),a("13d5"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("6724")),o=a("ed08"),l=a("754d"),s=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],c=s.reduce((function(e,t){return e[t.key]=t.display_name,e}),{}),u={name:"ComplexTable",directives:{waves:i["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]},typeFilter:function(e){return c[e]}},data:function(){return{userName:"",ordersStatus:["Creación","Abierta","Por Cobrar","Pagada","Anulada","En Proceso","Para Entrega","Finalizada"],tasksStatus:["No Iniciado","Rev Jurídico","Rev Jurídico C","En Proceso","Por Firmar","Completado","Pendiente","Anulado"],dialogTableVisible:!1,tableKey:0,totRecaudado:"",listaDetalles:[],listaServicios:[],barChartData:null,rep_servicio:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:"",type:void 0,sort:"",fechas:null},importanceOptions:[1,2,3],calendarTypeOptions:s,sortOptions:[{label:"",key:"asc"},{label:"ID Descending",key:"desc"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},methods:{getUserList:function(e){var t=this;this.userName=e.DscaTipoTramite,this.dialogTableVisible=!0,this.$apollo.query({query:l["b"],variables:{orders:e.OID},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(e){t.listaDetalles=e.data.OrdenTrabajo_Detalle}))},handleFilter:function(){var e=this;null!=this.listQuery.fechas&&(console.log(this.listQuery.fechas[0].toString()),console.log(this.listQuery.fechas[1].toString()),this.$apollo.query({query:l["f"],variables:{fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString()},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(t){e.listaServicios=t.data.rep_tiposServicios,e.total=e.listaServicios[e.listaServicios.length-1].totalRecaudado})))},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-12076b3a"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(t){var a=["Tipo Servicios","Creación","Abierta","Por Cobrar","Pagada","Anulada","En Proceso","Lista Entrega","Finalizada","Cantidad","Total Recaudado"],r=["Nombre","Creacion","Abierta","porCobrar","Pagada","Anulada","enProceso","paraEntrega","Finalizada","Total","totalRecaudado"],n=e.formatJson(r);t.export_json_to_excel({header:a,data:n,filename:"Reporte-Servicios-Estados"}),e.downloadLoading=!1}))},formatJson:function(e){return this.listaServicios.map((function(t){return e.map((function(e){return"timestamp"===e?Object(o["b"])(t[e]):t[e]}))}))},formatPrice:function(e){var t=(e/1).toFixed(2).replace(".",",");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"}}},d=u,p=(a("bd2b"),a("2877")),f=Object(p["a"])(d,r,n,!1,null,"641f7200",null);t["default"]=f.exports},"4d90":function(e,t,a){"use strict";var r=a("23e7"),n=a("0ccb").start,i=a("9a0c");r({target:"String",proto:!0,forced:i},{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"81bc":function(e,t,a){},8785:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("fb6a"),a("dca8");function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},"9a0c":function(e,t,a){var r=a("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},bb2f:function(e,t,a){var r=a("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bd2b:function(e,t,a){"use strict";var r=a("81bc"),n=a.n(r);n.a},d58f:function(e,t,a){var r=a("1c0b"),n=a("7b0b"),i=a("44ad"),o=a("50c4"),l=function(e){return function(t,a,l,s){r(a);var c=n(t),u=i(c),d=o(c.length),p=e?d-1:0,f=e?-1:1;if(l<2)while(1){if(p in u){s=u[p],p+=f;break}if(p+=f,e?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:d>p;p+=f)p in u&&(s=a(s,u[p],p,c));return s}};e.exports={left:l(!1),right:l(!0)}},dca8:function(e,t,a){var r=a("23e7"),n=a("bb2f"),i=a("d039"),o=a("861d"),l=a("f183").onFreeze,s=Object.freeze,c=i((function(){s(1)}));r({target:"Object",stat:!0,forced:c,sham:!n},{freeze:function(e){return s&&o(e)?s(l(e)):e}})},f183:function(e,t,a){var r=a("d012"),n=a("861d"),i=a("5135"),o=a("9bf2").f,l=a("90e3"),s=a("bb2f"),c=l("meta"),u=0,d=Object.isExtensible||function(){return!0},p=function(e){o(e,c,{value:{objectID:"O"+ ++u,weakData:{}}})},f=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,c)){if(!d(e))return"F";if(!t)return"E";p(e)}return e[c].objectID},b=function(e,t){if(!i(e,c)){if(!d(e))return!0;if(!t)return!1;p(e)}return e[c].weakData},h=function(e){return s&&m.REQUIRED&&d(e)&&!i(e,c)&&p(e),e},m=e.exports={REQUIRED:!1,fastKey:f,getWeakData:b,onFreeze:h};r[c]=!0}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1311a790"],{"0ccb":function(e,a,n){var t=n("50c4"),r=n("1148"),i=n("1d80"),o=Math.ceil,s=function(e){return function(a,n,s){var c,l,u=String(i(a)),d=u.length,g=void 0===s?" ":String(s),f=t(n);return f<=d||""==g?u:(c=f-d,l=r.call(g,o(c/g.length)),l.length>c&&(l=l.slice(0,c)),e?u+l:l+u)}};e.exports={start:s(!1),end:s(!0)}},1148:function(e,a,n){"use strict";var t=n("a691"),r=n("1d80");e.exports="".repeat||function(e){var a=String(r(this)),n="",i=t(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(a+=a))1&i&&(n+=a);return n}},"13d5":function(e,a,n){"use strict";var t=n("23e7"),r=n("d58f").left,i=n("a640"),o=n("ae40"),s=i("reduce"),c=o("reduce",{1:0});t({target:"Array",proto:!0,forced:!s||!c},{reduce:function(e){return r(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"2236a":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-date-picker",{attrs:{type:"datetimerange","range-separator":"-","start-placeholder":"Fecha Inicio","end-placeholder":"Fecha Fin",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.listQuery.fechas,callback:function(a){e.$set(e.listQuery,"fechas",a)},expression:"listQuery.fechas"}}),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" Search ")]),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"total-container",attrs:{type:"info"}},[e._v(" Total Recaudado $ "+e._s(e.formatPrice(e.total))+" ")])],1),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$apollo.loading,expression:"$apollo.loading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.listaServicios,border:"",fit:"",height:"600","highlight-current-row":""},on:{"sort-change":e.sortChange}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(a){return[n("el-table",{staticStyle:{width:"50%"},attrs:{data:a.row.Tareas}},[n("el-table-column",{attrs:{label:"Tipo Trámite","min-width":"150px",prop:"DscaTipoTramite"}}),n("el-table-column",{attrs:{label:"Cantidad",width:"120px",prop:"Cantidad",align:"center"}}),n("el-table-column",{attrs:{label:"Detalles",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.getUserList(t)}}},[e._v(" Listar ")])]}}],null,!0)})],1)]}}])}),n("el-table-column",{attrs:{label:"Tipo Servicios","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.Nombre))])]}}])}),n("el-table-column",{attrs:{label:"Creación",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.Creacion))])]}}])}),n("el-table-column",{attrs:{label:"Abierta",width:"70px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.Abierta))])]}}])}),n("el-table-column",{attrs:{label:"Por Cobrar",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.porCobrar))])]}}])}),n("el-table-column",{attrs:{label:"Pagada",width:"80px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.Pagada))])]}}])}),n("el-table-column",{attrs:{label:"Anulada",width:"80px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.Anulada))])]}}])}),n("el-table-column",{attrs:{label:"En Proceso",width:"105px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.enProceso))])]}}])}),n("el-table-column",{attrs:{label:"Lista Entrega",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e._f("moment")(t.paraEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),n("el-table-column",{attrs:{label:"Finalizada",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.Finalizada))])]}}])}),n("el-table-column",{attrs:{label:"Cantidad",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.Total))])]}}])}),n("el-table-column",{attrs:{label:"Total Recaudado",width:"140px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e.formatPrice(t.totalRecaudado)))])]}}])})],1)],1),n("el-dialog",{attrs:{visible:e.dialogTableVisible,width:"90%",center:""},on:{"update:visible":function(a){e.dialogTableVisible=a}}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("span",[e._v(e._s(e.userName))])]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.listaDetalles,height:"450"}},[n("el-table-column",{attrs:{label:"Tipo Servicio",width:"150px",prop:"TipoServicio.TpServicio"}}),n("el-table-column",{attrs:{label:"Tipo Tramite",width:"150px",prop:"TipoTramite.DscaTipoTramite"}}),n("el-table-column",{attrs:{label:"Nro Orden",width:"130px",prop:"OrdenTrabajo_Cabecera.NroOrden"}}),n("el-table-column",{attrs:{label:"Cantidad",width:"100px",prop:"Cantidad",align:"center"}}),n("el-table-column",{attrs:{label:"Monto",width:"100px",prop:"AmountInvoiced",align:"center"}}),n("el-table-column",{attrs:{label:"Est Orden",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e.ordersStatus[t.OrdenTrabajo_Cabecera.Estado]))])]}}])}),n("el-table-column",{attrs:{label:"Est Tarea",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e.tasksStatus[t.StatusOT]))])]}}])}),n("el-table-column",{attrs:{label:"F. Creación",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e._f("moment")(t.CreadoEn,"YYYY-MM-DD hh:mm:ss")))])]}}])}),n("el-table-column",{attrs:{label:"F. Inscripción",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e._f("moment")(t.FechaInscripcion,"YYYY-MM-DD hh:mm:ss")))])]}}])}),n("el-table-column",{attrs:{label:"F. Estimada E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e._f("moment")(t.FechaEstimadaEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),n("el-table-column",{attrs:{label:"F.Pospuesta E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e._f("moment")(t.FechaPospuestaEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),n("el-table-column",{attrs:{label:"F. Real Ent",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e._f("moment")(t.FechaRealEntrega,"YYYY-MM-DD hh:mm:ss")))])]}}])}),n("el-table-column",{attrs:{label:"F. Finalización",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(e._f("moment")(t.Usuario_OTs[0].FechaFinalizacion,"YYYY-MM-DD hh:mm:ss")))])]}}])}),n("el-table-column",{attrs:{label:"Avaluo",width:"100px",prop:"Avaluo",align:"center"}}),n("el-table-column",{attrs:{label:"Creado por",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.usuarioByCreadopor.Nombres))]),n("span",[e._v(e._s(t.usuarioByCreadopor.Apellidos))])]}}])}),n("el-table-column",{attrs:{label:"Fojas Adc",width:"100px",prop:"FojasAdc",align:"center"}}),n("el-table-column",{attrs:{label:"Factura Cli",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.row;return[n("span",[e._v(e._s(t.OrdenTrabajo_Cabecera.clienteByClientefactura.Nombres))]),n("span",[e._v(e._s(t.OrdenTrabajo_Cabecera.clienteByClientefactura.Apellidos))])]}}])})],1)],1)],1)},r=[],i=(n("d81d"),n("13d5"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("6724")),o=n("ed08"),s=n("754d"),c=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],l=c.reduce((function(e,a){return e[a.key]=a.display_name,e}),{}),u={name:"ComplexTable",directives:{waves:i["a"]},filters:{statusFilter:function(e){var a={published:"success",draft:"info",deleted:"danger"};return a[e]},typeFilter:function(e){return l[e]}},data:function(){return{userName:"",ordersStatus:["Creación","Abierta","Por Cobrar","Pagada","Anulada","En Proceso","Para Entrega","Finalizada"],tasksStatus:["No Iniciado","Rev Jurídico","Rev Jurídico C","En Proceso","Por Firmar","Completado","Pendiente","Anulado"],dialogTableVisible:!1,tableKey:0,totRecaudado:"",listaDetalles:[],listaServicios:[],barChartData:null,rep_servicio:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:"",type:void 0,sort:"",fechas:null},importanceOptions:[1,2,3],calendarTypeOptions:c,sortOptions:[{label:"",key:"asc"},{label:"ID Descending",key:"desc"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},methods:{getUserList:function(e){var a=this;this.userName=e.DscaTipoTramite,this.dialogTableVisible=!0,this.$apollo.query({query:s["c"],variables:{orders:e.OID},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(e){a.listaDetalles=e.data.OrdenTrabajo_Detalle}))},handleFilter:function(){var e=this;null!=this.listQuery.fechas&&(console.log(this.listQuery.fechas[0].toString()),console.log(this.listQuery.fechas[1].toString()),this.$apollo.query({query:s["g"],variables:{fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString()},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(a){console.log("holaaa",a),e.listaServicios=a.data.rep_tiposServicios,console.log(e.listaServicios),e.total=e.listaServicios[e.listaServicios.length-1].totalRecaudado})))},handleModifyStatus:function(e,a){this.$message({message:"操作Success",type:"success"}),e.status=a},sortChange:function(e){var a=e.prop,n=e.order;"id"===a&&this.sortByID(n)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleUpdate:function(e){var a=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){a.$refs["dataForm"].clearValidate()}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-12076b3a"),n.e("chunk-2133cd4f")]).then(n.bind(null,"4bf8")).then((function(a){var n=["Tipo Servicios","Creación","Abierta","Por Cobrar","Pagada","Anulada","En Proceso","Lista Entrega","Finalizada","Cantidad","Total Recaudado"],t=["Nombre","Creacion","Abierta","porCobrar","Pagada","Anulada","enProceso","paraEntrega","Finalizada","Total","totalRecaudado"],r=e.formatJson(t);a.export_json_to_excel({header:n,data:r,filename:"Reporte-Servicios-Estados"}),e.downloadLoading=!1}))},formatJson:function(e){return this.listaServicios.map((function(a){return e.map((function(e){return"timestamp"===e?Object(o["b"])(a[e]):a[e]}))}))},formatPrice:function(e){var a=(e/1).toFixed(2).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},getSortClass:function(e){var a=this.listQuery.sort;return a==="+".concat(e)?"ascending":"descending"}}},d=u,g=(n("bf0c"),n("2877")),f=Object(g["a"])(d,t,r,!1,null,"129302b1",null);a["default"]=f.exports},"408a":function(e,a,n){var t=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=t(e))throw TypeError("Incorrect invocation");return+e}},"4d90":function(e,a,n){"use strict";var t=n("23e7"),r=n("0ccb").start,i=n("9a0c");t({target:"String",proto:!0,forced:i},{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},6724:function(e,a,n){"use strict";n("8d41");var t="@@wavesContext";function r(e,a){function n(n){var t=Object.assign({},a.value),r=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},t),i=r.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var o=i.getBoundingClientRect(),s=i.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",i.appendChild(s)),r.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=r.color,s.className="waves-ripple z-active",!1}}return e[t]?e[t].removeHandle=n:e[t]={removeHandle:n},n}var i={bind:function(e,a){e.addEventListener("click",r(e,a),!1)},update:function(e,a){e.removeEventListener("click",e[t].removeHandle,!1),e.addEventListener("click",r(e,a),!1)},unbind:function(e){e.removeEventListener("click",e[t].removeHandle,!1),e[t]=null,delete e[t]}},o=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;a["a"]=i},"754d":function(e,a,n){"use strict";n.d(a,"i",(function(){return $})),n.d(a,"g",(function(){return y})),n.d(a,"j",(function(){return O})),n.d(a,"h",(function(){return w})),n.d(a,"n",(function(){return I})),n.d(a,"m",(function(){return S})),n.d(a,"c",(function(){return D})),n.d(a,"d",(function(){return E})),n.d(a,"b",(function(){return C})),n.d(a,"l",(function(){return j})),n.d(a,"e",(function(){return k})),n.d(a,"f",(function(){return x})),n.d(a,"a",(function(){return P})),n.d(a,"k",(function(){return q}));var t=n("8785"),r=n("9530"),i=n.n(r);function o(){var e=Object(t["a"])(["\n  query ($OID: [Int!]){\n    OrdenTrabajo_Detalle (where:{OID:{_in: $OID}}){\n      TipoServicio {\n          TpServicio\n        }\n        TipoTramite {\n          DscaTipoTramite\n        }\n        StatusOT\n        CreadoEn\n        FechaInscripcion\n        FechaInicioTrabajo\n        FechaEstimadaEntrega\n        FechaPospuestaEntrega\n        FechaRealEntrega\n        Avaluo\n        AmountInvoiced\n        FojasAdc\n        Cantidad\n        usuarioByCreadopor {\n          Nombres\n          Apellidos\n        }\n        Usuario_OTs{\n        FechaFinalizacion\n        }\n        OrdenTrabajo_Cabecera {\n          NroOrden\n          Estado\n          clienteByClientefactura {\n            Nombres\n            Apellidos\n          }\n        }\n    }\n  }\n  "]);return o=function(){return e},e}function s(){var e=Object(t["a"])(["\n  query($fechaInicio: String!, $fechaFin: String!, $status: [Int]){\n    detalles_excel(fechaFin: $fechaFin, fechaInicio: $fechaInicio, status: $status){\n      Nro\n      TpServicio\n      fRegistro\n      Etarea\n      Asignado\n      tpTramite\n      NroOrden\n      FEfin\n      Observacion\n      CreadoEn\n      FInscripcion\n      FInicioTrabajo\n      FPostpuestaEntrega\n      FRealEntrega\n      Avaluo\n      Monto\n      FojasAdc\n      Cantidad\n      CreadoPor\n      FFinalizacion\n      ExcentoCobro\n      OrdenGubernamental\n      EstadoOrden\n      Cliente\n      Empresa\n      RepLegal\n      TerceraEdad\n      Discapacidad\n    }\n  }\n  "]);return s=function(){return e},e}function c(){var e=Object(t["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $limit: Int!, $offset: Int!, $status: [Int!]) {\n    OrdenTrabajo_Detalle(where: {CreadoEn: {_gte: $fechaInicio, _lte: $fechaFin}, StatusOT: {_in: $status}}, limit: $limit, offset: $offset) {\n      TipoServicio {\n        TpServicio\n      }\n      TipoTramite {\n        DscaTipoTramite\n      }\n      StatusOT\n      CreadoEn\n      FechaInscripcion\n      FechaInicioTrabajo\n      FechaEstimadaEntrega\n      FechaPospuestaEntrega\n      FechaRealEntrega\n      Avaluo\n      AmountInvoiced\n      FojasAdc\n      Cantidad\n      usuarioByIduserasignado {\n        Nombres\n        Apellidos\n      }\n      usuarioByCreadopor {\n        Nombres\n        Apellidos\n      }\n      Usuario_OTs {\n        FechaRegistro\n        FechaFinalizacion\n      }\n      OrdenTrabajo_Cabecera {\n        ExcentoCobro\n        OrdenGubernamental\n        NroOrden\n        Estado\n        clienteByClientefactura {\n          NombreEmpresa\n          RepresentanteLegal\n          TerceraEdad\n          Nombres\n          Apellidos\n          DiscapacidadValidaParaDescuento\n        }\n      }\n      Observacion\n    }\n    OrdenTrabajo_Detalle_aggregate(where: {CreadoEn: {_gte: $fechaInicio, _lte: $fechaFin}, StatusOT: {_in: $status}}) {\n      aggregate {\n        count\n      }\n    }\n  }\n  "]);return c=function(){return e},e}function l(){var e=Object(t["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $limit: Int!, $offset: Int!, $status: [Int!], $departamento: String) {\n    OrdenTrabajo_Detalle(where: {FechaEstimadaEntrega: {_gte: $fechaInicio, _lte: $fechaFin}, StatusOT: {_in: $status}, usuarioByIduserasignado : {Departamento : {IdDpto : {_ilike : $departamento}}} }, limit: $limit, offset: $offset) {\n      TipoServicio {\n        TpServicio\n      }\n      TipoTramite {\n        DscaTipoTramite\n      }\n      StatusOT\n      CreadoEn\n      FechaInscripcion\n      FechaInicioTrabajo\n      FechaEstimadaEntrega\n      FechaPospuestaEntrega\n      FechaRealEntrega\n      Avaluo\n      AmountInvoiced\n      FojasAdc\n      Cantidad\n      usuarioByIduserasignado {\n        Nombres\n        Apellidos\n      }\n      usuarioByCreadopor {\n        Nombres\n        Apellidos\n      }\n      Usuario_OTs {\n        FechaRegistro\n        FechaFinalizacion\n      }\n      OrdenTrabajo_Cabecera {\n        ExcentoCobro\n        OrdenGubernamental\n        NroOrden\n        Estado\n        clienteByClientefactura {\n          NombreEmpresa\n          RepresentanteLegal\n          TerceraEdad\n          Nombres\n          Apellidos\n          DiscapacidadValidaParaDescuento\n        }\n      }\n      Observacion\n    }\n    OrdenTrabajo_Detalle_aggregate(where: {FechaEstimadaEntrega: {_gte: $fechaInicio, _lte: $fechaFin}, StatusOT: {_in: $status}, usuarioByIduserasignado : {Departamento : {IdDpto : {_ilike : $departamento}}}}) {\n      aggregate {\n        count\n      }\n    }\n  }\n  "]);return l=function(){return e},e}function u(){var e=Object(t["a"])(["\n  subscription ($fechaInicio: timestamp, $fechaFin: timestamp, $departamento: String!) {\n    Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n      Nombres\n      Apellidos\n      porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 4}}}) {\n        aggregate {\n          count\n        }\n      }\n      completado: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 5}}}) {\n        aggregate {\n          count\n        }\n      }\n      total: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {_or: [{StatusOT: {_eq: 4}}, {StatusOT: {_eq: 5}}]}}) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n  "]);return u=function(){return e},e}function d(){var e=Object(t["a"])(["\n  query rep_comprobante($fechaInicio: timestamp!, $fechaFin: timestamp!, $factura: String!, $tipo: String!, $usuario: String!, $offset: Int!, $limit: Int!) {\n    ProformaFacturaDetalle(where: {ProformaFactura: {FacturadoEn: {_lte: $fechaFin, _gte: $fechaInicio}, NroFactura: {_ilike: $factura, _nilike: $tipo}, usuarioByCreadopor: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}]}}}, offset: $offset, limit: $limit, order_by: {FacturadoEn: asc}) {\n      ProformaFactura {\n        NroFactura\n        FacturadoEn\n        usuarioByCreadopor {\n          Nombres\n          Apellidos\n        }\n        clienteByCliente {\n          NombreEmpresa\n          CedRuc\n          Nombres\n          Apellidos\n        }\n      }\n      CantidadFactura\n      Dscto\n      ValorUnitario\n      Impuesto\n      Total\n    }\n    ProformaFacturaDetalle_aggregate(where: {ProformaFactura: {FacturadoEn: {_lte: $fechaFin, _gte: $fechaInicio}, NroFactura: {_ilike: $factura, _nilike: $tipo}, usuarioByCreadopor: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}]}}}) {\n      aggregate {\n        Total: count\n        sum{\n          Total\n        }\n      }\n    }\n  }\n  "]);return d=function(){return e},e}function g(){var e=Object(t["a"])(["\n  query($fechaInicio: String!, $fechaFin: String!, $cedula: String!){\n    lista_servicios(fechaFin: $fechaFin, fechaInicio: $fechaInicio, cedula: $cedula){\n      Cantidad\n      TpServicio\n      tareas{\n        TpServicio\n        DscaTipoTramite\n        StatusOT\n        CreadoEn\n        FechaInscripcion\n        FechaInicioTrabajo\n        FechaEstimadaEntrega\n        FechaPospuestaEntrega\n        FechaRealEntrega\n        Avaluo\n        AmountInvoiced\n        FojasAdc\n        Cantidad\n        NombresAsi\n        NombresCre\n        FechaFinalizacion\n        NroOrden\n        Estado\n        Nombres\n        Observacion\n        Estilo{\n          isGreen\n          isBlue\n          isRed\n          isYellow\n        }\n      }\n    }\n  }\n  "]);return g=function(){return e},e}function f(){var e=Object(t["a"])(["\n  query  ($orders: [Int!]!){\n    OrdenTrabajo_Detalle(where: {OID: {_in: $orders}}) {\n      TipoServicio {\n        TpServicio\n      }\n      TipoTramite {\n        DscaTipoTramite\n      }\n      StatusOT\n      CreadoEn\n      FechaInscripcion\n      FechaInicioTrabajo\n      FechaEstimadaEntrega\n      FechaPospuestaEntrega\n      FechaRealEntrega\n      Avaluo\n      AmountInvoiced\n      FojasAdc\n      Cantidad\n      usuarioByCreadopor {\n        Nombres\n        Apellidos\n      }\n       Usuario_OTs{\n      FechaFinalizacion\n      }\n      OrdenTrabajo_Cabecera {\n        NroOrden\n        Estado\n        clienteByClientefactura {\n          Nombres\n          Apellidos\n        }\n      }\n    }\n  }\n  "]);return f=function(){return e},e}function h(){var e=Object(t["a"])(["\n  query usuarioOtsStatusByDep($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Departamento {\n          IdDpto\n        }\n        creacion: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 0}}}}) {\n          aggregate {\n            count\n          }\n        }\n        abierta: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera : {Estado :  {_eq: 1}}}}) {\n          aggregate {\n            count\n          }\n        }\n        porCobrar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 2}}}}) {\n          aggregate {\n            count\n          }\n        }\n        pagada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}}) {\n          aggregate {\n            count\n          }\n        }\n        lParaEntrega: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 6}}}}) {\n          aggregate {\n            count\n          }\n        }\n        finalizado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return h=function(){return e},e}function p(){var e=Object(t["a"])(["\n    query usuarioTaksStatusByDep($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Cedula\n        Departamento {\n          IdDpto\n        }\n        Usuario_TipoServicios {\n          TipoServicio {\n            Codigo\n            TpServicio\n          }\n          \n        }\n        noIniciado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 0}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJud: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 1}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJudComp: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 2}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 3}}}) {\n          aggregate {\n            count\n          }\n        }\n        porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 4}}}) {\n          aggregate {\n            count\n          }\n        }\n        completado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 5}}}) {\n          aggregate {\n            count\n          }\n        }\n        pendiente: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 6}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 7}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return p=function(){return e},e}function m(){var e=Object(t["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $tramites: [String!]!) {\n    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}, Codigo: {_in: $tramites}}) {\n      DscaTipoTramite\n      noIniciado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 0}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      revisionJuridico: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 1}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      revisionJuridicoCompletado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 2}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      enProceso: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 3}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      porFirmar: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 4}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      completado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 5}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      pendiente: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 6}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      anulado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 7}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      total: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      totalRecaudado: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n        aggregate {\n          sum {\n            Total\n          }\n        }\n      }\n    }\n  }\n "]);return m=function(){return e},e}function _(){var e=Object(t["a"])(["\n    query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $tramites: [String!]!) {\n      TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, Codigo: {_in: $tramites}}, order_by: {}) {\n        DscaTipoTramite\n        Codigo\n        ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            sum {\n              Total\n            }\n          }\n        }\n        OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n          aggregate {\n            sum {\n              Cantidad\n            }\n          }\n        }\n      }\n    }\n "]);return _=function(){return e},e}function b(){var e=Object(t["a"])(['\n   query lista_tramites{\n    listaTramites(where: {value: {_neq: "null"}}, order_by: {label: asc}) {\n      value\n      label\n    }\n  }\n ']);return b=function(){return e},e}function F(){var e=Object(t["a"])(["\n   query rep_tiposServicios($fechaInicio: String!, $fechaFin: String!) {\n    rep_tiposServicios(fechaFin: $fechaFin, fechaInicio: $fechaInicio){\n      Nombre\n      Creacion\n      Abierta\n      porCobrar\n      Pagada\n      Anulada\n      enProceso\n      paraEntrega\n      Finalizada\n      Total\n      totalRecaudado\n      Tareas{\n        OID\n        Codigo\n        DscaTipoTramite\n        Cantidad\n      }\n    }\n  }\n "]);return F=function(){return e},e}function v(){var e=Object(t["a"])(["\n  query ($fechaInicio: String!, $fechaFin: String!, $departamento: String!){\n    rep_departamento(fechaInicio: $fechaInicio, fechaFin: $fechaFin, departamento: $departamento){\n      Nombre\n      noIniciado\n      revisionJuridico\n      revisionJuridicoCompletado\n      enProceso\n      porFirmar\n      Completados\n      Pendiente\n      Anulado\n      Total\n    }\n  }\n  "]);return v=function(){return e},e}function T(){var e=Object(t["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $filtro: [String!]) {\n    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, Codigo: {_in: $filtro}}, order_by: {DscaTipoTramite: asc}) {\n      DscaTipoTramite\n      OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n        nodes {\n          OID\n        }\n      }\n      ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n        aggregate {\n          sum {\n            Total\n          }\n        }\n      }\n    }\n  }\n  "]);return T=function(){return e},e}var $=i()(T()),y=(i()(v()),i()(F())),O=i()(b()),w=(i()(_()),i()(m())),I=i()(p()),S=i()(h()),D=i()(f()),E=i()(g()),C=i()(d()),j=i()(u()),k=i()(l()),x=i()(c()),P=i()(s()),q=i()(o())},8785:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));n("fb6a"),n("dca8");function t(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}},"8d41":function(e,a,n){},"9a0c":function(e,a,n){var t=n("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(t)},"9f86":function(e,a,n){},b680:function(e,a,n){"use strict";var t=n("23e7"),r=n("a691"),i=n("408a"),o=n("1148"),s=n("d039"),c=1..toFixed,l=Math.floor,u=function(e,a,n){return 0===a?n:a%2===1?u(e,a-1,n*e):u(e*e,a/2,n)},d=function(e){var a=0,n=e;while(n>=4096)a+=12,n/=4096;while(n>=2)a+=1,n/=2;return a},g=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));t({target:"Number",proto:!0,forced:g},{toFixed:function(e){var a,n,t,s,c=i(this),g=r(e),f=[0,0,0,0,0,0],h="",p="0",m=function(e,a){var n=-1,t=a;while(++n<6)t+=e*f[n],f[n]=t%1e7,t=l(t/1e7)},_=function(e){var a=6,n=0;while(--a>=0)n+=f[a],f[a]=l(n/e),n=n%e*1e7},b=function(){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==f[e]){var n=String(f[e]);a=""===a?n:a+o.call("0",7-n.length)+n}return a};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(a=d(c*u(2,69,1))-69,n=a<0?c*u(2,-a,1):c/u(2,a,1),n*=4503599627370496,a=52-a,a>0){m(0,n),t=g;while(t>=7)m(1e7,0),t-=7;m(u(10,t,1),0),t=a-1;while(t>=23)_(1<<23),t-=23;_(1<<t),m(1,1),_(2),p=b()}else m(0,n),m(1<<-a,0),p=b()+o.call("0",g);return g>0?(s=p.length,p=h+(s<=g?"0."+o.call("0",g-s)+p:p.slice(0,s-g)+"."+p.slice(s-g))):p=h+p,p}})},bb2f:function(e,a,n){var t=n("d039");e.exports=!t((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bf0c:function(e,a,n){"use strict";var t=n("9f86"),r=n.n(t);r.a},d58f:function(e,a,n){var t=n("1c0b"),r=n("7b0b"),i=n("44ad"),o=n("50c4"),s=function(e){return function(a,n,s,c){t(n);var l=r(a),u=i(l),d=o(l.length),g=e?d-1:0,f=e?-1:1;if(s<2)while(1){if(g in u){c=u[g],g+=f;break}if(g+=f,e?g<0:d<=g)throw TypeError("Reduce of empty array with no initial value")}for(;e?g>=0:d>g;g+=f)g in u&&(c=n(c,u[g],g,l));return c}};e.exports={left:s(!1),right:s(!0)}},dca8:function(e,a,n){var t=n("23e7"),r=n("bb2f"),i=n("d039"),o=n("861d"),s=n("f183").onFreeze,c=Object.freeze,l=i((function(){c(1)}));t({target:"Object",stat:!0,forced:l,sham:!r},{freeze:function(e){return c&&o(e)?c(s(e)):e}})},ed08:function(e,a,n){"use strict";n.d(a,"b",(function(){return r})),n.d(a,"a",(function(){return i}));n("d3b7"),n("ac1f"),n("25f0"),n("4d90"),n("5319"),n("1276");var t=n("53ca");function r(e,a){if(0===arguments.length)return null;var n,r=a||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(t["a"])(e)?n=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),n=new Date(e));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},o=r.replace(/{([ymdhisa])+}/g,(function(e,a){var n=i[a];return"a"===a?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return o}function i(e,a,n){var t,r,i,o,s,c=function c(){var l=+new Date-o;l<a&&l>0?t=setTimeout(c,a-l):(t=null,n||(s=e.apply(i,r),t||(i=r=null)))};return function(){for(var r=arguments.length,l=new Array(r),u=0;u<r;u++)l[u]=arguments[u];i=this,o=+new Date;var d=n&&!t;return t||(t=setTimeout(c,a)),d&&(s=e.apply(i,l),i=l=null),s}}},f183:function(e,a,n){var t=n("d012"),r=n("861d"),i=n("5135"),o=n("9bf2").f,s=n("90e3"),c=n("bb2f"),l=s("meta"),u=0,d=Object.isExtensible||function(){return!0},g=function(e){o(e,l,{value:{objectID:"O"+ ++u,weakData:{}}})},f=function(e,a){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,l)){if(!d(e))return"F";if(!a)return"E";g(e)}return e[l].objectID},h=function(e,a){if(!i(e,l)){if(!d(e))return!0;if(!a)return!1;g(e)}return e[l].weakData},p=function(e){return c&&m.REQUIRED&&d(e)&&!i(e,l)&&g(e),e},m=e.exports={REQUIRED:!1,fastKey:f,getWeakData:h,onFreeze:p};t[l]=!0}}]);
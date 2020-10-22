(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c93cd664"],{2385:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"-","start-placeholder":"Fecha Inicio","end-placeholder":"Fecha Fin",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.listQuery.fechas,callback:function(t){e.$set(e.listQuery,"fechas",t)},expression:"listQuery.fechas"}}),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" Search ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" Export Excel ")])],1),a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{offset:.5,xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("bar-chart",{attrs:{"chart-data":e.barChartData}})],1)])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$apollo.loading,expression:"$apollo.loading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.rep_tramitesUsuario,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange},model:{value:e.rep_tramitesUsuario,callback:function(t){e.rep_tramitesUsuario=t},expression:"rep_tramitesUsuario"}},[a("el-table-column",{attrs:{label:"Nombre","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Apellidos))]),a("span",[e._v(e._s(r.Nombres))])]}}])}),a("el-table-column",{attrs:{label:"No Iniciado",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.noIniciado))])]}}])}),a("el-table-column",{attrs:{label:"Revisión jurídico",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.revJud))])]}}])}),a("el-table-column",{attrs:{label:"R.J Completado",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.revJudComp))])]}}])}),a("el-table-column",{attrs:{label:"En proceso",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.enProceso))])]}}])}),a("el-table-column",{attrs:{label:"Por firmar",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.porFirmar))])]}}])}),a("el-table-column",{attrs:{label:"Completado",width:"105px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Completado))])]}}])}),a("el-table-column",{attrs:{label:"Pendiente",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Pendiente))])]}}])}),a("el-table-column",{attrs:{label:"Anulado",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Anulado))])]}}])}),a("el-table-column",{attrs:{label:"Total",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Total))])]}}])}),a("el-table-column",{attrs:{label:"Detalles",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.getDetailList(r)}}},[e._v(" Listar ")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogTableVisible,width:"90%",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$apollo.loading,expression:"$apollo.loading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.listaServicios,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.row.tareas,height:"300"}},[a("el-table-column",{attrs:{label:"Tipo Servicio",width:"150px",prop:"TpServicio"}}),a("el-table-column",{attrs:{label:"Cantidad",width:"100px",prop:"Cantidad"}}),a("el-table-column",{attrs:{label:"Nro Orden",width:"130px",prop:"NroOrden"}}),a("el-table-column",{attrs:{label:"Monto",width:"100px",prop:"AmountInvoiced",align:"center"}}),a("el-table-column",{attrs:{label:"Est Orden",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.ordersStatus[r.Estado]))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"Est Tarea",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.tasksStatus[r.StatusOT]))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Creación",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.CreadoEn))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Inscripción",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.FechaInscripcion))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Estimada E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("div",{class:{isRed:r.Estilo.isRed,isBlue:r.Estilo.isBlue,isGreen:r.Estilo.isGreen,isYellow:r.Estilo.isYellow}},[a("span",[e._v(e._s(r.FechaEstimadaEntrega))])])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F.Pospuesta E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.FechaPospuestaEntrega))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Real Ent",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.FechaRealEntrega))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Finalización",width:"160px",prop:"FechaFinalizacion"}}),a("el-table-column",{attrs:{label:"Avaluo",width:"100px",prop:"Avaluo",align:"center"}}),a("el-table-column",{attrs:{label:"Creado por",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.NombresCre))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"Fojas Adc",width:"100px",prop:"FojasAdc",align:"center"}}),a("el-table-column",{attrs:{label:"Factura Cli",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Nombres))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"Asignado a",width:"200px",prop:"NombresAsi"}}),a("el-table-column",{attrs:{label:"Observación",width:"200px",prop:"Observacion"}})],1)]}}])}),a("el-table-column",{attrs:{label:"Tipo Servicio","min-width":"450px",prop:"TpServicio"}}),a("el-table-column",{attrs:{label:"Cantidad",width:"150px",prop:"Cantidad"}})],1)],1)],1)},n=[],i=(a("4160"),a("d81d"),a("a434"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("159b"),a("6724")),o=a("ed08"),s=a("754d"),l=a("8785"),c=a("9530"),d=a.n(c);function u(){var e=Object(l["a"])(["\n  subscription usuarioOTsStatusByDepSub($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Departamento {\n          IdDpto\n        }\n        creacion: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 0}}}}) {\n          aggregate {\n            count\n          }\n        }\n        abierta: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera : {Estado :  {_eq: 1}}}}) {\n          aggregate {\n            count\n          }\n        }\n        porCobrar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 2}}}}) {\n          aggregate {\n            count\n          }\n        }\n        pagada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}}) {\n          aggregate {\n            count\n          }\n        }\n        lParaEntrega: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 6}}}}) {\n          aggregate {\n            count\n          }\n        }\n        finalizado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return u=function(){return e},e}function g(){var e=Object(l["a"])(["\n    subscription ($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Departamento {\n          IdDpto\n        }\n        noIniciado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 0}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJud: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 1}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJudComp: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 2}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 3}}}) {\n          aggregate {\n            count\n          }\n        }\n        porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 4}}}) {\n          aggregate {\n            count\n          }\n        }\n        completado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 5}}}) {\n          aggregate {\n            count\n          }\n        }\n        pendiente: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 6}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 7}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return g=function(){return e},e}var h=d()(g()),p=(d()(u()),a("9b72")),f=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],b={name:"ComplexTable",components:{BarChart:p["a"]},directives:{waves:i["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]}},data:function(){return{isRed:!1,isGreen:!1,isYellow:!1,isBlue:!1,ordersStatus:["Creación","Abierta","Por Cobrar","Pagada","Anulada","En Proceso","Para Entrega","Finalizada"],tasksStatus:["No Iniciado","Rev Jurídico","Rev Jurídico C","En Proceso","Por Firmar","Completado","Pendiente","Anulado"],userName:"",dialogTableVisible:!1,userCedula:"",listaDetalles:[],listaServicios:[],barChartData:null,tableKey:0,rep_tramitesUsuario:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,name:"",type:"",sort:"",fechas:null},importanceOptions:[1,2,3],calendarTypeOptions:f,sortOptions:[{label:"Certificados",key:"CERTIFICADOS"},{label:"Inscripciones",key:"Inscripciones"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},mounted:function(){this.$apollo.subscriptions.addtram.skip=!0},methods:{getDetailList:function(e){var t=this;this.dialogTableVisible=!0,this.$apollo.query({query:s["d"],variables:{cedula:e.Cedula,fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString()},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(e){console.log("hola"),t.listaServicios=e.data.lista_servicios,console.log(t.listaServicios)}))},handleFilter:function(){var e=this;null!=this.listQuery.fechas&&(this.$apollo.subscriptions.addtram.start(),this.$apollo.query({query:s["n"],variables:{fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString(),departamento:this.listQuery.type},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(t){e.rep_tramitesUsuario=[];var a={nombres:[],totales:[]};t.data.Usuario.forEach((function(t){var r={Nombres:t.Apellidos+" "+t.Nombres,Cedula:t.Cedula,noIniciado:t.noIniciado.aggregate.count,revJud:t.revJud.aggregate.count,revJudComp:t.revJudComp.aggregate.count,enProceso:t.enProceso.aggregate.count,porFirmar:t.porFirmar.aggregate.count,Completado:t.completado.aggregate.count,Pendiente:t.pendiente.aggregate.count,Anulado:t.anulado.aggregate.count,Total:t.total.aggregate.count,tipoServicios:t.Usuario_TipoServicios};a.nombres.push(t.Apellidos+" "+t.Nombres),a.totales.push(t.total.aggregate.count),e.rep_tramitesUsuario.push(r)})),e.barChartData=a})))},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleDelete:function(e,t){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.rep_tiposTramite.splice(t,1)},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-12076b3a"),a.e("chunk-0cf2a77e")]).then(a.bind(null,"4bf8")).then((function(t){var a=["Nombre","No Iniciado","Revisión Jurídica","Revisión Juridíca Completada","En Proceso","Por Firmar","Completado","Pendiente","Anulado","Total"],r=["Nombres","noIniciado","revJud","revJudComp","enProceso","porFirmar","Completado","Pendiente","Anulado","Total"],n=e.formatJson(r);t.export_json_to_excel({header:a,data:n,filename:"Reporte-Asignacion-Tareas-Usuario"}),e.downloadLoading=!1}))},formatJson:function(e){return this.rep_tramitesUsuario.map((function(t){return e.map((function(e){return"timestamp"===e?Object(o["b"])(t[e]):t[e]}))}))},formatPrice:function(e){var t=(e/1).toFixed(2).replace(".",",");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"}},apollo:{$subscribe:{addtram:{query:h,variables:function(){if(null!=this.listQuery.fechas)return{fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString(),departamento:this.listQuery.type}},result:function(e){var t=e.data;console.log(t);var a={nombres:[],totales:[]},r=[];t.Usuario.forEach((function(e){var t={Nombres:e.Apellidos+" "+e.Nombres,noIniciado:e.noIniciado.aggregate.count,revJud:e.revJud.aggregate.count,revJudComp:e.revJudComp.aggregate.count,enProceso:e.enProceso.aggregate.count,porFirmar:e.porFirmar.aggregate.count,Completado:e.completado.aggregate.count,Pendiente:e.pendiente.aggregate.count,Anulado:e.anulado.aggregate.count,Total:e.total.aggregate.count};a.nombres.push(e.Apellidos+" "+e.Nombres),a.totales.push(e.total.aggregate.count),r.push(t)})),this.barChartData=a}}}}},m=b,_=(a("97ba"),a("2877")),y=Object(_["a"])(m,r,n,!1,null,"7a57b7a8",null);t["default"]=y.exports},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"817d":function(e,t,a){var r,n,i;(function(o,s){n=[t,a("313e")],r=s,i="function"===typeof r?r.apply(t,n):r,void 0===i||(e.exports=i)})(0,(function(e,t){var a=function(e){"undefined"!==typeof console&&console&&console.error&&console.error(e)};if(t){var r=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],n={color:r,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:r[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{color:"#008acd",borderColor:"#008acd"},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9"},lineStyle:{width:1,color:"#d87a80",color0:"#2ec7c9"},areaStyle:{color:"#2ec7c9",color0:"#b6a2de"}},scatter:{symbol:"circle",symbolSize:4},map:{itemStyle:{color:"#ddd"},areaStyle:{color:"#fe994e"},label:{color:"#d87a80"}},graph:{itemStyle:{color:"#d87a80"},linkStyle:{color:"#2ec7c9"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};t.registerTheme("macarons",n)}else a("ECharts is not Loaded")}))},"97ba":function(e,t,a){"use strict";var r=a("9819"),n=a.n(r);n.a},9819:function(e,t,a){},"9ad2":function(e,t,a){"use strict";var r=a("ed08");t["a"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var e=this;this.$_resizeHandler=Object(r["a"])((function(){e.chart&&e.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(e){"width"===e.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}}},"9b72":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className,style:{height:e.height,width:e.width}})},n=[],i=a("313e"),o=a.n(i),s=a("9ad2");a("817d");var l=6e3,c={mixins:[s["a"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"300%"},height:{type:String,default:"300px"},chartData:{type:Object,default:null}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(e){this.setOptions(e)}}},mounted:function(){var e=this;this.$nextTick((function(){e.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=o.a.init(this.$el,"macarons")},setOptions:function(e){this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e.nombres,show:!1,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:{name:"Total por usuario",type:"bar",stack:"vistors",barWidth:"80%",data:e.totales,animationDuration:l}})}}},d=c,u=a("2877"),g=Object(u["a"])(d,r,n,!1,null,null,null);t["a"]=g.exports},a434:function(e,t,a){"use strict";var r=a("23e7"),n=a("23cb"),i=a("a691"),o=a("50c4"),s=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),u=a("ae40"),g=d("splice"),h=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,f=Math.min,b=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!g||!h},{splice:function(e,t){var a,r,d,u,g,h,_=s(this),y=o(_.length),v=n(e,y),w=arguments.length;if(0===w?a=r=0:1===w?(a=0,r=y-v):(a=w-2,r=f(p(i(t),0),y-v)),y+a-r>b)throw TypeError(m);for(d=l(_,r),u=0;u<r;u++)g=v+u,g in _&&c(d,u,_[g]);if(d.length=r,a<r){for(u=v;u<y-r;u++)g=u+r,h=u+a,g in _?_[h]=_[g]:delete _[h];for(u=y;u>y-r+a;u--)delete _[u-1]}else if(a>r)for(u=y-r;u>v;u--)g=u+r-1,h=u+a-1,g in _?_[h]=_[g]:delete _[h];for(u=0;u<a;u++)_[u+v]=arguments[u+2];return _.length=y-r+a,d}})},b680:function(e,t,a){"use strict";var r=a("23e7"),n=a("a691"),i=a("408a"),o=a("1148"),s=a("d039"),l=1..toFixed,c=Math.floor,d=function(e,t,a){return 0===t?a:t%2===1?d(e,t-1,a*e):d(e*e,t/2,a)},u=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},g=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));r({target:"Number",proto:!0,forced:g},{toFixed:function(e){var t,a,r,s,l=i(this),g=n(e),h=[0,0,0,0,0,0],p="",f="0",b=function(e,t){var a=-1,r=t;while(++a<6)r+=e*h[a],h[a]=r%1e7,r=c(r/1e7)},m=function(e){var t=6,a=0;while(--t>=0)a+=h[t],h[t]=c(a/e),a=a%e*1e7},_=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==h[e]){var a=String(h[e]);t=""===t?a:t+o.call("0",7-a.length)+a}return t};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(p="-",l=-l),l>1e-21)if(t=u(l*d(2,69,1))-69,a=t<0?l*d(2,-t,1):l/d(2,t,1),a*=4503599627370496,t=52-t,t>0){b(0,a),r=g;while(r>=7)b(1e7,0),r-=7;b(d(10,r,1),0),r=t-1;while(r>=23)m(1<<23),r-=23;m(1<<r),b(1,1),m(2),f=_()}else b(0,a),b(1<<-t,0),f=_()+o.call("0",g);return g>0?(s=f.length,f=p+(s<=g?"0."+o.call("0",g-s)+f:f.slice(0,s-g)+"."+f.slice(s-g))):f=p+f,f}})}}]);
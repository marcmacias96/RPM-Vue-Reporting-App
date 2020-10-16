(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b4f5592"],{2385:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"-","start-placeholder":"Fecha Inicio","end-placeholder":"Fecha Fin",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.listQuery.fechas,callback:function(t){e.$set(e.listQuery,"fechas",t)},expression:"listQuery.fechas"}}),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" Search ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" Export Excel ")])],1),a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{offset:.5,xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("bar-chart",{attrs:{"chart-data":e.barChartData}})],1)])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$apollo.loading,expression:"$apollo.loading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.rep_tramitesUsuario,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange},model:{value:e.rep_tramitesUsuario,callback:function(t){e.rep_tramitesUsuario=t},expression:"rep_tramitesUsuario"}},[a("el-table-column",{attrs:{label:"Nombre","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Apellidos))]),a("span",[e._v(e._s(r.Nombres))])]}}])}),a("el-table-column",{attrs:{label:"No Iniciado",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.noIniciado))])]}}])}),a("el-table-column",{attrs:{label:"Revisión jurídico",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.revJud))])]}}])}),a("el-table-column",{attrs:{label:"R.J Completado",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.revJudComp))])]}}])}),a("el-table-column",{attrs:{label:"En proceso",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.enProceso))])]}}])}),a("el-table-column",{attrs:{label:"Por firmar",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.porFirmar))])]}}])}),a("el-table-column",{attrs:{label:"Completado",width:"105px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Completado))])]}}])}),a("el-table-column",{attrs:{label:"Pendiente",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Pendiente))])]}}])}),a("el-table-column",{attrs:{label:"Anulado",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Anulado))])]}}])}),a("el-table-column",{attrs:{label:"Total",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Total))])]}}])}),a("el-table-column",{attrs:{label:"Detalles",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.getDetailList(r)}}},[e._v(" Listar ")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogTableVisible,width:"90%",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$apollo.loading,expression:"$apollo.loading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.listaServicios,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.row.tareas,height:"300"}},[a("el-table-column",{attrs:{label:"Tipo Servicio",width:"150px",prop:"TpServicio"}}),a("el-table-column",{attrs:{label:"Cantidad",width:"100px",prop:"Cantidad"}}),a("el-table-column",{attrs:{label:"Nro Orden",width:"130px",prop:"NroOrden"}}),a("el-table-column",{attrs:{label:"Monto",width:"100px",prop:"AmountInvoiced",align:"center"}}),a("el-table-column",{attrs:{label:"Est Orden",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.ordersStatus[r.Estado]))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"Est Tarea",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.tasksStatus[r.StatusOT]))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Creación",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.CreadoEn))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Inscripción",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.FechaInscripcion))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Estimada E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("div",{class:{isRed:r.Estilo.isRed,isBlue:r.Estilo.isBlue,isGreen:r.Estilo.isGreen,isYellow:r.Estilo.isYellow}},[a("span",[e._v(e._s(r.FechaEstimadaEntrega))])])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F.Pospuesta E",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.FechaPospuestaEntrega))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Real Ent",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.FechaRealEntrega))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"F. Finalización",width:"160px",prop:"FechaFinalizacion"}}),a("el-table-column",{attrs:{label:"Avaluo",width:"100px",prop:"Avaluo",align:"center"}}),a("el-table-column",{attrs:{label:"Creado por",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.NombresCre))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"Fojas Adc",width:"100px",prop:"FojasAdc",align:"center"}}),a("el-table-column",{attrs:{label:"Factura Cli",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.Nombres))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"Asignado a",width:"200px",prop:"NombresAsi"}}),a("el-table-column",{attrs:{label:"Observación",width:"200px",prop:"Observacion"}})],1)]}}])}),a("el-table-column",{attrs:{label:"Tipo Servicio","min-width":"450px",prop:"TpServicio"}}),a("el-table-column",{attrs:{label:"Cantidad",width:"150px",prop:"Cantidad"}})],1)],1)],1)},i=[],o=(a("4160"),a("d81d"),a("a434"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("159b"),a("6724")),l=a("ed08"),n=a("754d"),s=a("0ee0"),u=a("9b72"),c=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],d={name:"ComplexTable",components:{BarChart:u["a"]},directives:{waves:o["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]}},data:function(){return{isRed:!1,isGreen:!1,isYellow:!1,isBlue:!1,ordersStatus:["Creación","Abierta","Por Cobrar","Pagada","Anulada","En Proceso","Para Entrega","Finalizada"],tasksStatus:["No Iniciado","Rev Jurídico","Rev Jurídico C","En Proceso","Por Firmar","Completado","Pendiente","Anulado"],userName:"",dialogTableVisible:!1,userCedula:"",listaDetalles:[],listaServicios:[],barChartData:null,tableKey:0,rep_tramitesUsuario:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,name:"",type:"",sort:"",fechas:null},importanceOptions:[1,2,3],calendarTypeOptions:c,sortOptions:[{label:"Certificados",key:"CERTIFICADOS"},{label:"Inscripciones",key:"Inscripciones"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},mounted:function(){this.$apollo.subscriptions.addtram.skip=!0},methods:{getDetailList:function(e){var t=this;this.dialogTableVisible=!0,this.$apollo.query({query:n["d"],variables:{cedula:e.Cedula,fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString()},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(e){console.log("hola"),t.listaServicios=e.data.lista_servicios,console.log(t.listaServicios)}))},handleFilter:function(){var e=this;null!=this.listQuery.fechas&&(this.$apollo.subscriptions.addtram.start(),this.$apollo.query({query:n["n"],variables:{fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString(),departamento:this.listQuery.type},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(t){e.rep_tramitesUsuario=[];var a={nombres:[],totales:[]};t.data.Usuario.forEach((function(t){var r={Nombres:t.Apellidos+" "+t.Nombres,Cedula:t.Cedula,noIniciado:t.noIniciado.aggregate.count,revJud:t.revJud.aggregate.count,revJudComp:t.revJudComp.aggregate.count,enProceso:t.enProceso.aggregate.count,porFirmar:t.porFirmar.aggregate.count,Completado:t.completado.aggregate.count,Pendiente:t.pendiente.aggregate.count,Anulado:t.anulado.aggregate.count,Total:t.total.aggregate.count,tipoServicios:t.Usuario_TipoServicios};a.nombres.push(t.Apellidos+" "+t.Nombres),a.totales.push(t.total.aggregate.count),e.rep_tramitesUsuario.push(r)})),e.barChartData=a})))},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleDelete:function(e,t){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.rep_tiposTramite.splice(t,1)},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-12076b3a"),a.e("chunk-0cf2a77e")]).then(a.bind(null,"4bf8")).then((function(t){var a=["Nombre","No Iniciado","Revisión Jurídica","Revisión Juridíca Completada","En Proceso","Por Firmar","Completado","Pendiente","Anulado","Total"],r=["Nombres","noIniciado","revJud","revJudComp","enProceso","porFirmar","Completado","Pendiente","Anulado","Total"],i=e.formatJson(r);t.export_json_to_excel({header:a,data:i,filename:"Reporte-Asignacion-Tareas-Usuario"}),e.downloadLoading=!1}))},formatJson:function(e){return this.rep_tramitesUsuario.map((function(t){return e.map((function(e){return"timestamp"===e?Object(l["b"])(t[e]):t[e]}))}))},formatPrice:function(e){var t=(e/1).toFixed(2).replace(".",",");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"}},apollo:{$subscribe:{addtram:{query:s["b"],variables:function(){if(null!=this.listQuery.fechas)return{fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString(),departamento:this.listQuery.type}},result:function(e){var t=e.data;console.log(t);var a={nombres:[],totales:[]},r=[];t.Usuario.forEach((function(e){var t={Nombres:e.Apellidos+" "+e.Nombres,noIniciado:e.noIniciado.aggregate.count,revJud:e.revJud.aggregate.count,revJudComp:e.revJudComp.aggregate.count,enProceso:e.enProceso.aggregate.count,porFirmar:e.porFirmar.aggregate.count,Completado:e.completado.aggregate.count,Pendiente:e.pendiente.aggregate.count,Anulado:e.anulado.aggregate.count,Total:e.total.aggregate.count};a.nombres.push(e.Apellidos+" "+e.Nombres),a.totales.push(e.total.aggregate.count),r.push(t)})),this.barChartData=a}}}}},p=d,m=(a("c94f"),a("2877")),h=Object(m["a"])(p,r,i,!1,null,"3e4d1575",null);t["default"]=h.exports},c535:function(e,t,a){},c94f:function(e,t,a){"use strict";var r=a("c535"),i=a.n(r);i.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc16de56"],{"17bc":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"-","start-placeholder":"Fecha Inicio","end-placeholder":"Fecha Fin",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.listQuery.fechas,callback:function(t){e.$set(e.listQuery,"fechas",t)},expression:"listQuery.fechas"}}),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" Search ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" Export ")])],1),a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{offset:.5,xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("bar-chart",{attrs:{"chart-data":e.barChartData}})],1)])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$apollo.loading,expression:"$apollo.loading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.rep_tramitesUsuario,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:"Nombre","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.Nombres))])]}}])}),a("el-table-column",{attrs:{label:"Creación",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.Creacion))])]}}])}),a("el-table-column",{attrs:{label:"Abierta",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.Abierta))])]}}])}),a("el-table-column",{attrs:{label:"Por Cobrar",width:"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.porCobrar))])]}}])}),a("el-table-column",{attrs:{label:"Pagada",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.Pagada))])]}}])}),a("el-table-column",{attrs:{label:"Anulada",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.Anulada))])]}}])}),a("el-table-column",{attrs:{label:"En proceso",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.enProceso))])]}}])}),a("el-table-column",{attrs:{label:"Lista Entrega",width:"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.paraEntrega))])]}}])}),a("el-table-column",{attrs:{label:"Finalizada",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.Finalizada))])]}}])}),a("el-table-column",{attrs:{label:"Total",width:"90px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.Total))])]}}])})],1)],1)},r=[],n=(a("4160"),a("d81d"),a("a434"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("159b"),a("6724")),o=a("ed08"),s=a("754d"),l=a("9b72"),c=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],d={name:"ComplexTable",components:{BarChart:l["a"]},directives:{waves:n["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]}},data:function(){return{barChartData:null,tableKey:0,rep_tramitesUsuario:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,name:"",type:"",sort:"",fechas:null},importanceOptions:[1,2,3],calendarTypeOptions:c,sortOptions:[{label:"Certificados",key:"CERTIFICADOS"},{label:"Inscripciones",key:"Inscripciones"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},methods:{handleFilter:function(){var e=this;null!=this.listQuery.fechas&&this.$apollo.query({query:s["m"],variables:{fechaInicio:this.listQuery.fechas[0].toString(),fechaFin:this.listQuery.fechas[1].toString(),departamento:this.listQuery.type},error:function(e){this.error=JSON.stringify(e.message)}}).then((function(t){e.rep_tramitesUsuario=[];var a={nombres:[],totales:[]};t.data.Usuario.forEach((function(t){var i={Nombres:t.Apellidos+" "+t.Nombres,Creacion:t.creacion.aggregate.count,Abierta:t.abierta.aggregate.count,porCobrar:t.porCobrar.aggregate.count,Pagada:t.pagada.aggregate.count,Anulada:t.anulada.aggregate.count,enProceso:t.enProceso.aggregate.count,paraEntrega:t.lParaEntrega.aggregate.count,Finalizada:t.finalizado.aggregate.count,Total:t.total.aggregate.count};e.rep_tramitesUsuario.push(i),a.nombres.push(t.Apellidos+" "+t.Nombres),a.totales.push(t.total.aggregate.count)})),e.barChartData=a}))},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleDelete:function(e,t){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.rep_tiposTramite.splice(t,1)},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-12076b3a"),a.e("chunk-0cf2a77e")]).then(a.bind(null,"4bf8")).then((function(t){var a=["Nombre","Creación","Abierta","Por Cobrar","Pagada","Anulada","En Proceso","L. P. Entrega","Finalizada","Total"],i=["Nombres","Creacion","Abierta","porCobrar","Pagada","Anulada","enProceso","paraEntrega","Finalizada","Total"],r=e.formatJson(i);t.export_json_to_excel({header:a,data:r,filename:"Reporte-Asignacion-Ordenes-Usuario"}),e.downloadLoading=!1}))},formatJson:function(e){return console.log("hola"),this.rep_tramitesUsuario.map((function(t){return e.map((function(e){return"timestamp"===e?Object(o["b"])(t[e]):t[e]}))}))},formatPrice:function(e){var t=(e/1).toFixed(2).replace(".",",");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"}}},u=d,h=(a("ecc6"),a("2877")),p=Object(h["a"])(u,i,r,!1,null,"08eb00b4",null);t["default"]=p.exports},"817d":function(e,t,a){var i,r,n;(function(o,s){r=[t,a("313e")],i=s,n="function"===typeof i?i.apply(t,r):i,void 0===n||(e.exports=n)})(0,(function(e,t){var a=function(e){"undefined"!==typeof console&&console&&console.error&&console.error(e)};if(t){var i=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],r={color:i,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:i[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{color:"#008acd",borderColor:"#008acd"},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9"},lineStyle:{width:1,color:"#d87a80",color0:"#2ec7c9"},areaStyle:{color:"#2ec7c9",color0:"#b6a2de"}},scatter:{symbol:"circle",symbolSize:4},map:{itemStyle:{color:"#ddd"},areaStyle:{color:"#fe994e"},label:{color:"#d87a80"}},graph:{itemStyle:{color:"#d87a80"},linkStyle:{color:"#2ec7c9"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};t.registerTheme("macarons",r)}else a("ECharts is not Loaded")}))},"9ad2":function(e,t,a){"use strict";var i=a("ed08");t["a"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var e=this;this.$_resizeHandler=Object(i["a"])((function(){e.chart&&e.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(e){"width"===e.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}}},"9b72":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className,style:{height:e.height,width:e.width}})},r=[],n=a("313e"),o=a.n(n),s=a("9ad2");a("817d");var l=6e3,c={mixins:[s["a"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"300%"},height:{type:String,default:"300px"},chartData:{type:Object,default:null}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(e){this.setOptions(e)}}},mounted:function(){var e=this;this.$nextTick((function(){e.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=o.a.init(this.$el,"macarons")},setOptions:function(e){this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e.nombres,show:!1,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:{name:"Total por usuario",type:"bar",stack:"vistors",barWidth:"80%",data:e.totales,animationDuration:l}})}}},d=c,u=a("2877"),h=Object(u["a"])(d,i,r,!1,null,null,null);t["a"]=h.exports},a434:function(e,t,a){"use strict";var i=a("23e7"),r=a("23cb"),n=a("a691"),o=a("50c4"),s=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),u=a("ae40"),h=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,m=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!h||!p},{splice:function(e,t){var a,i,d,u,h,p,y=s(this),v=o(y.length),_=r(e,v),w=arguments.length;if(0===w?a=i=0:1===w?(a=0,i=v-_):(a=w-2,i=m(f(n(t),0),v-_)),v+a-i>b)throw TypeError(g);for(d=l(y,i),u=0;u<i;u++)h=_+u,h in y&&c(d,u,y[h]);if(d.length=i,a<i){for(u=_;u<v-i;u++)h=u+i,p=u+a,h in y?y[p]=y[h]:delete y[p];for(u=v;u>v-i+a;u--)delete y[u-1]}else if(a>i)for(u=v-i;u>_;u--)h=u+i-1,p=u+a-1,h in y?y[p]=y[h]:delete y[p];for(u=0;u<a;u++)y[u+_]=arguments[u+2];return y.length=v-i+a,d}})},ba47:function(e,t,a){},ecc6:function(e,t,a){"use strict";var i=a("ba47"),r=a.n(i);r.a}}]);
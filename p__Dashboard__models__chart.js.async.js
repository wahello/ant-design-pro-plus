(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{zX0F:function(a,e,t){"use strict";t.r(e);var s=t("mK77"),n=t.n(s),r=t("Ico4"),c=t.n(r),i=t("dCQc");e["default"]={namespace:"chart",state:{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[],loading:!1},effects:{fetch:c.a.mark(function a(e,t){var s,n,r;return c.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return s=t.call,n=t.put,a.next=3,s(i["d"]);case 3:return r=a.sent,a.next=6,n({type:"save",payload:r});case 6:case"end":return a.stop()}},a)}),fetchSalesData:c.a.mark(function a(e,t){var s,n,r;return c.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return s=t.call,n=t.put,a.next=3,s(i["d"]);case 3:return r=a.sent,a.next=6,n({type:"save",payload:{salesData:r.salesData}});case 6:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){var t=e.payload;return n()({},a,t)},clear:function(){return{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]}}}}}}]);
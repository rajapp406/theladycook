import{_ as v,r as c,o as w,b as $,w as C,d as p,a as g,t as f,f as R,c as S,A as D}from"./js/_plugin-vue_export-helper.1252226d.js";import{l as A}from"./js/index.512f21c4.js";import{l as E}from"./js/index.c8bcf9e5.js";import{l as L}from"./js/index.0b123ab1.js";import{m as b}from"./js/vuex.esm-bundler.2e787911.js";import{C as M}from"./js/Caret.21cdd163.js";import{C as V}from"./js/Index.67d5329e.js";import{S as B}from"./js/Information.c2ec1d40.js";import{s as h}from"./js/index.fef507ce.js";import{_ as P,s as F}from"./js/dynamic-import-helper.0a181e73.js";import{_ as r}from"./js/preload-helper.b149fa8b.js";import{_ as o}from"./js/default-i18n.ab92175e.js";import"./js/client.4d177be2.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/helpers.de7566d0.js";import"./js/constants.449145d5.js";import"./js/isArrayLikeObject.da221b94.js";import"./js/vue-router.ed7000bb.js";function I({app:e,next:m,router:d,to:n}){const i="Lite".toLowerCase()!=="pro"||!window.aioseo.license.isActive,_=n.meta.licenseFeature||n.meta.middlewareData.licenseFeature||"";return i||!e.$license.hasCoreFeature(e.$aioseo,_[0],_[1])?(m(),d.push({name:n.meta.middlewareData.routeName}).catch(()=>{})):m()}const O={components:{CoreLoader:M,CoreModal:V,SvgCircleInformation:B},data(){return{strings:{title:this.$t.__("Refreshing data",this.$td),description:this.$t.__("Loading new report data...",this.$td)}}},computed:{...b("search-statistics",["fetching"])}},x={class:"aioseo-fetching-data-title"},N={class:"aioseo-fetching-data-description"};function T(e,m,d,n,i,_){const u=c("svg-circle-information"),l=c("core-loader"),k=c("core-modal");return e.fetching?(w(),$(k,{key:0,classes:["aioseo-fetching-data"],noHeader:""},{body:C(()=>[p(u,{width:"90",height:"90"}),g("div",x,f(i.strings.title),1),g("div",N,f(i.strings.description),1),p(l,{dark:""})]),_:1})):R("",!0)}const U=v(O,[["render",T]]),H={components:{Fetching:U}},K={class:"aioseo-app"};function j(e,m,d,n,i,_){const u=c("router-view"),l=c("fetching");return w(),S("div",K,[p(u),p(l)])}const q=v(H,[["render",j]]),s="all-in-one-seo-pack",a=e=>()=>P(Object.assign({"../views/ContentRankings.vue":()=>r(()=>import("./js/ContentRankings.0eafffef.js"),[window.__aioseoDynamicImportPreload__("js/ContentRankings.0eafffef.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.2e787911.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.1252226d.js"),window.__aioseoDynamicImportPreload__("js/index.c8bcf9e5.js"),window.__aioseoDynamicImportPreload__("js/Caret.21cdd163.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/Blur.fd3c040c.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Row.3c6833bf.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/PostsTable.80a31d4d.js"),window.__aioseoDynamicImportPreload__("js/WpTable.6ebd2781.js"),window.__aioseoDynamicImportPreload__("js/Index.25975920.js"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.d5640333.js"),window.__aioseoDynamicImportPreload__("js/index.fef507ce.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.da221b94.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.3cf2e377.js"),window.__aioseoDynamicImportPreload__("js/constants.449145d5.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.67d5329e.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.03404395.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/Statistic.3c49fce7.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.cdde2cc1.js"),window.__aioseoDynamicImportPreload__("js/_getTag.2bfb1432.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.9b388507.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ce066015.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("js/ScoreButton.baf8114c.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.9acc0e22.js"),window.__aioseoDynamicImportPreload__("js/Slide.8b22672f.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.52726d0b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.7747ff8a.js"),window.__aioseoDynamicImportPreload__("css/ContentRankings.f71f7fed.css")],import.meta.url),"../views/Dashboard.vue":()=>r(()=>import("./js/Dashboard.0d2a45ea.js"),[window.__aioseoDynamicImportPreload__("js/Dashboard.0d2a45ea.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.2e787911.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.1252226d.js"),window.__aioseoDynamicImportPreload__("js/Blur.fd3c040c.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Card.8a160590.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ce066015.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.21cdd163.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("js/index.c8bcf9e5.js"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/Slide.8b22672f.js"),window.__aioseoDynamicImportPreload__("css/Card.4406a3d8.css"),window.__aioseoDynamicImportPreload__("js/Tabs.ac7026b6.js"),window.__aioseoDynamicImportPreload__("js/SaveChanges.03404395.js"),window.__aioseoDynamicImportPreload__("js/TruSeoScore.76897846.js"),window.__aioseoDynamicImportPreload__("js/Information.c2ec1d40.js"),window.__aioseoDynamicImportPreload__("css/Tabs.c4ef2c33.css"),window.__aioseoDynamicImportPreload__("js/Overview.a03e73d5.js"),window.__aioseoDynamicImportPreload__("js/DonutChartWithLegend.236a2486.js"),window.__aioseoDynamicImportPreload__("js/AnimatedNumber.515a72b4.js"),window.__aioseoDynamicImportPreload__("css/DonutChartWithLegend.86f54c65.css"),window.__aioseoDynamicImportPreload__("css/Overview.f1ef313f.css"),window.__aioseoDynamicImportPreload__("js/Row.3c6833bf.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.e125908e.js"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.74a5914d.js"),window.__aioseoDynamicImportPreload__("js/Statistic.3c49fce7.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.da221b94.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.cdde2cc1.js"),window.__aioseoDynamicImportPreload__("js/_getTag.2bfb1432.js"),window.__aioseoDynamicImportPreload__("js/index.fef507ce.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.9b388507.js"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.2aef2744.css"),window.__aioseoDynamicImportPreload__("js/Index.25975920.js"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("js/WpTable.6ebd2781.js"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.d5640333.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.3cf2e377.js"),window.__aioseoDynamicImportPreload__("js/constants.449145d5.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.67d5329e.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/List.b782a87e.js"),window.__aioseoDynamicImportPreload__("js/Statistics.e7cfcdc4.js"),window.__aioseoDynamicImportPreload__("js/PostsTable.80a31d4d.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.baf8114c.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.9acc0e22.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.52726d0b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.7747ff8a.js"),window.__aioseoDynamicImportPreload__("css/Dashboard.0cdcf012.css")],import.meta.url),"../views/KeywordRankings.vue":()=>r(()=>import("./js/KeywordRankings.4bc675d8.js"),[window.__aioseoDynamicImportPreload__("js/KeywordRankings.4bc675d8.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.2e787911.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.1252226d.js"),window.__aioseoDynamicImportPreload__("js/Blur.fd3c040c.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Card.8a160590.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ce066015.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.21cdd163.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("js/index.c8bcf9e5.js"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/Slide.8b22672f.js"),window.__aioseoDynamicImportPreload__("css/Card.4406a3d8.css"),window.__aioseoDynamicImportPreload__("js/Row.3c6833bf.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.74a5914d.js"),window.__aioseoDynamicImportPreload__("js/Statistic.3c49fce7.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.da221b94.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.cdde2cc1.js"),window.__aioseoDynamicImportPreload__("js/_getTag.2bfb1432.js"),window.__aioseoDynamicImportPreload__("js/index.fef507ce.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.9b388507.js"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.2aef2744.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.e125908e.js"),window.__aioseoDynamicImportPreload__("js/Index.25975920.js"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("js/WpTable.6ebd2781.js"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.d5640333.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.3cf2e377.js"),window.__aioseoDynamicImportPreload__("js/constants.449145d5.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.67d5329e.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.03404395.js"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/Table.9acc0e22.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.7747ff8a.js"),window.__aioseoDynamicImportPreload__("css/KeywordRankings.a6ce6045.css")],import.meta.url),"../views/Main.vue":()=>r(()=>import("./js/Main.fd979e03.js"),[window.__aioseoDynamicImportPreload__("js/Main.fd979e03.js"),window.__aioseoDynamicImportPreload__("js/index.fef507ce.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.2e787911.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.1252226d.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.da221b94.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/index.c8bcf9e5.js"),window.__aioseoDynamicImportPreload__("js/Caret.21cdd163.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/DatePicker.b55bde46.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.3cf2e377.js"),window.__aioseoDynamicImportPreload__("js/constants.449145d5.js"),window.__aioseoDynamicImportPreload__("js/isUndefined.6aa45a19.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.cdde2cc1.js"),window.__aioseoDynamicImportPreload__("js/_getTag.2bfb1432.js"),window.__aioseoDynamicImportPreload__("js/debounce.6bfba81c.js"),window.__aioseoDynamicImportPreload__("js/toNumber.d6fd2789.js"),window.__aioseoDynamicImportPreload__("js/isEqual.8d0db5de.js"),window.__aioseoDynamicImportPreload__("js/_baseIsEqual.7ca684b6.js"),window.__aioseoDynamicImportPreload__("css/DatePicker.acfc7346.css"),window.__aioseoDynamicImportPreload__("js/Blur.fd3c040c.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Index.2530b106.js"),window.__aioseoDynamicImportPreload__("js/params.597cd0f5.js"),window.__aioseoDynamicImportPreload__("js/WpTable.6ebd2781.js"),window.__aioseoDynamicImportPreload__("js/Index.25975920.js"),window.__aioseoDynamicImportPreload__("js/Row.3c6833bf.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.d5640333.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.67d5329e.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.03404395.js"),window.__aioseoDynamicImportPreload__("js/Header.df904d7f.js"),window.__aioseoDynamicImportPreload__("js/LicenseKeyBar.9186083c.js"),window.__aioseoDynamicImportPreload__("js/LogoGear.764f01c9.js"),window.__aioseoDynamicImportPreload__("css/LicenseKeyBar.9dee709b.css"),window.__aioseoDynamicImportPreload__("js/AnimatedNumber.515a72b4.js"),window.__aioseoDynamicImportPreload__("js/Logo.ca2c08a1.js"),window.__aioseoDynamicImportPreload__("css/Header.d0427dca.css"),window.__aioseoDynamicImportPreload__("js/Support.a2e4b5e5.js"),window.__aioseoDynamicImportPreload__("js/Tabs.ac7026b6.js"),window.__aioseoDynamicImportPreload__("js/TruSeoScore.76897846.js"),window.__aioseoDynamicImportPreload__("js/Information.c2ec1d40.js"),window.__aioseoDynamicImportPreload__("js/Slide.8b22672f.js"),window.__aioseoDynamicImportPreload__("css/Tabs.c4ef2c33.css"),window.__aioseoDynamicImportPreload__("js/Date.461dc30a.js"),window.__aioseoDynamicImportPreload__("js/Exclamation.b493e7b4.js"),window.__aioseoDynamicImportPreload__("js/Url.c71d5763.js"),window.__aioseoDynamicImportPreload__("js/Gear.a5ac87f6.js"),window.__aioseoDynamicImportPreload__("css/Index.65ce8649.css"),window.__aioseoDynamicImportPreload__("css/main.8b7a648e.css"),window.__aioseoDynamicImportPreload__("js/ContentRankings.0eafffef.js"),window.__aioseoDynamicImportPreload__("js/PostsTable.80a31d4d.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/Statistic.3c49fce7.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.9b388507.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ce066015.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("js/ScoreButton.baf8114c.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.9acc0e22.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.52726d0b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.7747ff8a.js"),window.__aioseoDynamicImportPreload__("css/ContentRankings.f71f7fed.css"),window.__aioseoDynamicImportPreload__("js/Dashboard.0d2a45ea.js"),window.__aioseoDynamicImportPreload__("js/Card.8a160590.js"),window.__aioseoDynamicImportPreload__("css/Card.4406a3d8.css"),window.__aioseoDynamicImportPreload__("js/Overview.a03e73d5.js"),window.__aioseoDynamicImportPreload__("js/DonutChartWithLegend.236a2486.js"),window.__aioseoDynamicImportPreload__("css/DonutChartWithLegend.86f54c65.css"),window.__aioseoDynamicImportPreload__("css/Overview.f1ef313f.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.e125908e.js"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.74a5914d.js"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.2aef2744.css"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/List.b782a87e.js"),window.__aioseoDynamicImportPreload__("js/Statistics.e7cfcdc4.js"),window.__aioseoDynamicImportPreload__("css/Dashboard.0cdcf012.css"),window.__aioseoDynamicImportPreload__("js/KeywordRankings.4bc675d8.js"),window.__aioseoDynamicImportPreload__("css/KeywordRankings.a6ce6045.css"),window.__aioseoDynamicImportPreload__("js/SeoStatistics.1308db11.js"),window.__aioseoDynamicImportPreload__("css/SeoStatistics.71c5ea25.css"),window.__aioseoDynamicImportPreload__("css/Main.53a894ea.css")],import.meta.url),"../views/SeoStatistics.vue":()=>r(()=>import("./js/SeoStatistics.1308db11.js"),[window.__aioseoDynamicImportPreload__("js/SeoStatistics.1308db11.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.2e787911.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.1252226d.js"),window.__aioseoDynamicImportPreload__("js/Blur.fd3c040c.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Card.8a160590.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ce066015.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.21cdd163.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("js/index.c8bcf9e5.js"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/Slide.8b22672f.js"),window.__aioseoDynamicImportPreload__("css/Card.4406a3d8.css"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.74a5914d.js"),window.__aioseoDynamicImportPreload__("js/Statistic.3c49fce7.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.da221b94.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.cdde2cc1.js"),window.__aioseoDynamicImportPreload__("js/_getTag.2bfb1432.js"),window.__aioseoDynamicImportPreload__("js/index.fef507ce.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.9b388507.js"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.2aef2744.css"),window.__aioseoDynamicImportPreload__("js/Row.3c6833bf.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/PostsTable.80a31d4d.js"),window.__aioseoDynamicImportPreload__("js/WpTable.6ebd2781.js"),window.__aioseoDynamicImportPreload__("js/Index.25975920.js"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.d5640333.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.3cf2e377.js"),window.__aioseoDynamicImportPreload__("js/constants.449145d5.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.67d5329e.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.03404395.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.baf8114c.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.9acc0e22.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.52726d0b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.7747ff8a.js"),window.__aioseoDynamicImportPreload__("css/SeoStatistics.71c5ea25.css")],import.meta.url)}),`../views/${e}.vue`),z=[{path:"/:pathMatch(.*)*",redirect:"/dashboard"},{path:"/dashboard",name:"dashboard",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Dashboard",s),hideSaveButton:!0}},{path:"/seo-statistics",name:"seo-statistics",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("SEO Statistics",s),hideSaveButton:!0}},{path:"/keyword-rankings",name:"keyword-rankings",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Keyword Rankings",s),hideSaveButton:!0}},{path:"/content-rankings",name:"content-rankings",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Content Rankings",s),hideSaveButton:!0}},{path:"/settings",name:"settings",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Settings",s)}},{path:"/post-detail",name:"post-detail",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Post Detail",s),hideSaveButton:!0,licenseFeature:["search-statistics","post-detail"],middleware:[I],middlewareData:{routeName:"dashboard"}}}];let t=D(q);t=A(t);t=E(t);t=L(t);const y=F(z,t,h);h._vm=t;y.app=t;t.use(h);t.use(y);t.mount("#aioseo-app");
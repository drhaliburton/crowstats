(this.webpackJsonpcrowsnest=this.webpackJsonpcrowsnest||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c,r,a=n(0),s=n.n(a),o=n(12),d=n.n(o),i=(n(22),n(17)),b=n(10),l=n(2),j=n(7),u=n(8),h=n(13),O=n.p+"static/media/Crows_Logo_Blue.9c347d48.png",p=n(1),m=u.a.div(c||(c=Object(j.a)(["\n  padding: 1rem;\n  max-width: 750px;\n  text-align: center;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"]))),g=u.a.img(r||(r=Object(j.a)(["\n  max-width: 200px;\n  margin: auto;\n"]))),f=function(e){var t=e.columns,n=e.data,c=Object(h.useTable)({columns:t,data:n}),r=c.getTableProps,a=c.getTableBodyProps,s=c.headerGroups,o=c.rows,d=c.prepareRow;return Object(p.jsxs)("table",Object(l.a)(Object(l.a)({},r()),{},{children:[Object(p.jsx)("thead",{children:s.map((function(e){return Object(p.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsx)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps({style:{width:"100%"}})),{},{children:e.render("Header")}))}))}))}))}),Object(p.jsx)("tbody",Object(l.a)(Object(l.a)({},a()),{},{children:o.map((function(e,t){return d(e),Object(p.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps({style:{width:"100%"}})),{},{children:e.cells.map((function(e,t){return Object(p.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps({style:{width:"100%",textAlign:0===t?"left":"right"}})),{},{children:e.render("Cell")}))}))}))}))}))]}))},x=function(){var e=Object(a.useState)(!0),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),o=Object(b.a)(r,2),d=o[0],l=o[1],j=d.reduce((function(e,t){return Object.keys(t).forEach((function(t){/\d{4}/.test(t)&&!(null===e||void 0===e?void 0:e.includes(t))&&e.push(t)})),e}),[]).reverse().map((function(e){return{Header:e,accessor:e.toLowerCase()}})),u=s.a.useMemo((function(){return[{Header:"Crowmeruns",columns:[{Header:"Name",accessor:"name"}].concat(Object(i.a)(j),[{Header:"Total",accessor:"total"}])}]}),[j]);return Object(a.useEffect)((function(){!d.length&&n&&fetch("https://sheet.best/api/sheets/969a17ba-d4ed-49ee-920e-bca9fe9d7dd9").then((function(e){return e.json()})).then((function(e){l(e),c(!1)}))}),[d,n]),n?Object(p.jsx)(m,{children:Object(p.jsx)("img",{alt:"flying crow",src:"https://i.pinimg.com/originals/bb/09/58/bb0958d5f92bf787c6091c850b30a6e2.gif"})}):Object(p.jsxs)(m,{children:[Object(p.jsx)(g,{src:O,alt:"ca-caw"}),Object(p.jsx)(f,{columns:u,data:d})]})};d.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.20296964.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{9618:function(e,t,r){var n={"./AuthorLayout":8139,"./AuthorLayout.tsx":8139,"./ListLayout":951,"./ListLayout.tsx":951,"./PostLayout":5104,"./PostLayout.tsx":5104,"./PostSimple":8218,"./PostSimple.tsx":8218};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=9618},7753:function(e,t,r){"use strict";var n=r(7320),a=r(5675);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=function(e){return e.src};t.Z=function(e){var t=l({},e);return(0,n.tZ)(a.default,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},t,{loader:o}))}},1460:function(e,t,r){"use strict";r.d(t,{J:function(){return g}});var n=r(7320),a=r(1720),i=r(3194),l=r(7753),o=r(5741),c=function(e){var t=e.toc,r=e.indentDepth,a=void 0===r?3:r,i=e.fromHeading,l=void 0===i?1:i,o=e.toHeading,c=void 0===o?6:o,d=e.asDisclosure,s=void 0!==d&&d,u=e.exclude,m=void 0===u?"":u,p=Array.isArray(m)?new RegExp("^("+m.join("|")+")$","i"):new RegExp("^("+m+")$","i"),g=t.filter((function(e){return e.depth>=l&&e.depth<=c&&!p.test(e.value)})),h=(0,n.tZ)("ul",{children:g.map((function(e){return(0,n.tZ)("li",{className:"".concat(e.depth>=a&&"ml-6"),children:(0,n.tZ)("a",{href:e.url,children:e.value})},e.value)}))});return(0,n.tZ)(n.HY,{children:s?(0,n.BX)("details",{open:!0,children:[(0,n.tZ)("summary",{className:"pt-2 pb-2 ml-6 text-xl font-bold",children:"Table of Contents"}),(0,n.tZ)("div",{className:"ml-6",children:h})]}):h})},d=function(e){var t=e.children,r=e.className,i=(0,a.useRef)(null),l=(0,a.useState)(!1),o=l[0],c=l[1],d=(0,a.useState)(!1),s=d[0],u=d[1];return(0,n.BX)("div",{ref:i,onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1),u(!1)},className:"relative",children:[o&&(0,n.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ".concat(s?"focus:outline-none focus:border-green-400 border-green-400":"border-gray-300"),onClick:function(){u(!0),console.log("Pre.tsx:22"),console.dir(i,{depth:null,showHidden:!0,colors:!0}),navigator.clipboard.writeText(i.current.outerText.replace(/\u00A0/g,"")),setTimeout((function(){u(!1)}),2e3)},children:(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:s?"text-green-400":"text-gray-300",children:s?(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,n.tZ)("pre",{className:r,children:t})]})};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p={Image:l.Z,TOCInline:c,a:o.Z,pre:d,wrapper:function(e){var t=e.layout,a=m(e,["layout"]),i=r(9618)("./".concat(t)).default;return(0,n.tZ)(i,u({},a))}},g=function(e){var t=e.layout,r=e.mdxSource,l=m(e,["layout","mdxSource"]),o=(0,a.useMemo)((function(){return(0,i.getMDXComponent)(r)}),[r]);return(0,n.tZ)(o,u({layout:t,components:p},l))}},5941:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7320);function a(e){var t=e.children;return(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},1476:function(e,t,r){"use strict";r.d(t,{TQ:function(){return c},$t:function(){return d},Uy:function(){return s}});var n=r(7320),a=r(9008),i=r(1163),l=r(1789),o=function(e){var t=e.title,r=e.description,o=e.ogType,c=e.ogImage,d=e.twImage,s=(0,i.useRouter)();return(0,n.BX)(a.default,{children:[(0,n.tZ)("title",{children:t}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(l.ZP.siteUrl).concat(s.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:o}),(0,n.tZ)("meta",{property:"og:site_name",content:l.ZP.title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:t}),Array.isArray(c)?c.map((function(e){var t=e.url;return(0,n.tZ)("meta",{property:"og:image",content:t},t)})):(0,n.tZ)("meta",{property:"og:image",content:c},c),(0,n.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.tZ)("meta",{name:"twitter:site",content:l.ZP.twitter}),(0,n.tZ)("meta",{name:"twitter:title",content:t}),(0,n.tZ)("meta",{name:"twitter:description",content:r}),(0,n.tZ)("meta",{name:"twitter:image",content:d})]})},c=function(e){var t=e.title,r=e.description,a=l.ZP.siteUrl+l.ZP.socialBanner,i=l.ZP.siteUrl+l.ZP.socialBanner;return(0,n.tZ)(o,{title:t,description:r,ogType:"website",ogImage:a,twImage:i})},d=function(e){var t=e.title,r=e.description,c=l.ZP.siteUrl+l.ZP.socialBanner,d=l.ZP.siteUrl+l.ZP.socialBanner,s=(0,i.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(o,{title:t,description:r,ogType:"website",ogImage:c,twImage:d}),(0,n.tZ)(a.default,{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(l.ZP.siteUrl).concat(s.asPath,"/feed.xml")})})]})},s=function(e){var t=e.authorDetails,r=e.title,c=e.summary,d=e.date,s=e.lastmod,u=e.url,m=e.images,p=void 0===m?[]:m,g=(0,i.useRouter)(),h=new Date(d).toISOString(),f=new Date(s||d).toISOString(),y=(0===p.length?[l.ZP.socialBanner]:"string"===typeof p?[p]:p).map((function(e){return{"@type":"ImageObject",url:"".concat(l.ZP.siteUrl).concat(e)}})),Z={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:y,datePublished:h,dateModified:f,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:l.ZP.author},publisher:{"@type":"Organization",name:l.ZP.author,logo:{"@type":"ImageObject",url:"".concat(l.ZP.siteUrl).concat(l.ZP.siteLogo)}},description:c},v=y[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(o,{title:r,description:c,ogType:"article",ogImage:y,twImage:v}),(0,n.BX)(a.default,{children:[d&&(0,n.tZ)("meta",{property:"article:published_time",content:h}),s&&(0,n.tZ)("meta",{property:"article:modified_time",content:f}),(0,n.tZ)("link",{rel:"canonical",href:"".concat(l.ZP.siteUrl).concat(g.asPath)}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Z,null,2)}})]})]})}},1580:function(e,t,r){"use strict";var n=r(7320),a=r(1720);t.Z=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];(0,a.useEffect)((function(){var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,n.BX)("div",{className:"fixed flex-col hidden gap-3 right-8 bottom-8 ".concat(t?"md:flex":"md:hidden"),children:[(0,n.tZ)("button",{"aria-label":"Scroll To Comment",type:"button",onClick:function(){document.getElementById("comments-container").scrollIntoView()},className:"p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300",children:(0,n.tZ)("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.tZ)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,n.tZ)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300",children:(0,n.tZ)("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.tZ)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},5437:function(e,t,r){"use strict";var n=r(7320),a=r(1664),i=r(423);t.Z=function(e){var t=e.text;return(0,n.tZ)(a.default,{href:"/tags/".concat((0,i.Z)(t)),children:(0,n.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},3044:function(e,t,r){"use strict";var n=r(7320),a=r(1789),i=(0,r(5152).default)((function(){return r.e(414).then(r.bind(r,6414))}),{loadableGenerated:{webpack:function(){return[6414]},modules:["../components/comments/index.tsx -> @/components/comments/Giscus"]},ssr:!1});t.Z=function(e){var t=e.frontMatter;return(0,n.tZ)(n.HY,{children:a.ZP.comment&&"giscus"===a.ZP.comment.provider&&(0,n.tZ)(i,{mapping:t.slug})})}},8139:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(7320),a=r(3400),i=r(7753),l=r(1476);function o(e){var t=e.children,r=e.frontMatter,o=r.name,c=r.avatar,d=r.occupation,s=r.company,u=r.email,m=r.twitter,p=r.linkedin,g=r.github,h=r.mastodon;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l.TQ,{title:"About - ".concat(o),description:"About me - ".concat(o)}),(0,n.BX)("div",{className:"divide-y",children:[(0,n.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"About"})}),(0,n.BX)("div",{className:"items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",children:[(0,n.BX)("div",{className:"flex flex-col items-center pt-8 space-x-2",children:[(0,n.tZ)(i.Z,{src:c,alt:"avatar",width:"192px",height:"192px",className:"w-48 h-48 rounded-full"}),(0,n.tZ)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:o}),(0,n.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:d}),(0,n.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:s}),(0,n.BX)("div",{className:"flex pt-6 space-x-3",children:[(0,n.tZ)(a.Z,{kind:"mail",href:"mailto:".concat(u)}),(0,n.tZ)(a.Z,{kind:"github",href:g}),(0,n.tZ)(a.Z,{kind:"linkedin",href:p}),(0,n.tZ)(a.Z,{kind:"twitter",href:m}),(0,n.tZ)(a.Z,{kind:"mastodon",href:h})]})]}),(0,n.tZ)("div",{className:"pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2",children:t})]})]})]})}},951:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7320),a=r(5741),i=r(5437),l=r(1720);function o(e){var t=e.totalPages,r=e.currentPage,i=r-1>0,l=r+1<=t;return(0,n.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.BX)("nav",{className:"flex justify-between",children:[!i&&(0,n.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,n.tZ)(a.Z,{href:r-1===1?"/blog/":"/blog/page/".concat(r-1),children:(0,n.tZ)("button",{children:"Previous"})}),(0,n.BX)("span",{children:[r," of ",t]}),!l&&(0,n.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!l,children:"Next"}),l&&(0,n.tZ)(a.Z,{href:"/blog/page/".concat(r+1),children:(0,n.tZ)("button",{children:"Next"})})]})})}var c=r(2497);function d(e){var t=e.posts,r=e.title,d=e.initialDisplayPosts,s=void 0===d?[]:d,u=e.pagination,m=(0,l.useState)(""),p=m[0],g=m[1],h=t.filter((function(e){return(e.title+e.summary+e.tags.join(" ")).toLowerCase().includes(p.toLowerCase())})),f=s.length>0&&!p?s:h;return(0,n.BX)(n.HY,{children:[(0,n.BX)("div",{className:"divide-y",children:[(0,n.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,n.BX)("div",{className:"relative max-w-lg",children:[(0,n.tZ)("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return g(e.target.value)},placeholder:"Search articles",className:"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"}),(0,n.tZ)("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,n.BX)("ul",{children:[!h.length&&"No posts found.",f.map((function(e){var t=e.slug,r=e.date,l=e.title,o=e.summary,d=e.tags;return(0,n.tZ)("li",{className:"py-4",children:(0,n.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,n.BX)("dl",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:r,children:(0,c.Z)(r)})})]}),(0,n.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,n.BX)("div",{children:[(0,n.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.tZ)(a.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:l})}),(0,n.tZ)("div",{className:"flex flex-wrap",children:d.map((function(e){return(0,n.tZ)(i.Z,{text:e},e)}))})]}),(0,n.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:o})]})]})},t)}))]})]}),u&&u.totalPages>1&&!p&&(0,n.tZ)(o,{currentPage:u.currentPage,totalPages:u.totalPages})]})}},5104:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7320),a=r(5941),i=r(3653),l=r(1476),o=r(1789),c=r(1580),d=r(3044);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}var m={weekday:"long",year:"numeric",month:"long",day:"numeric"};function p(e){var t=e.frontMatter,r=e.authorDetails,s=e.children,p=t.slug,g=t.date,h=t.title,f=t.readingTime;return(0,n.BX)(i.Z,{children:[(0,n.tZ)(l.Uy,u({url:"".concat(o.ZP.siteUrl,"/blog/").concat(p),authorDetails:r},t)),(0,n.tZ)(c.Z,{}),(0,n.tZ)("article",{children:(0,n.BX)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,n.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,n.BX)("div",{className:"space-y-4 md:space-y-2 text-center",children:[(0,n.tZ)("dl",{className:"space-y-10",children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.BX)("dd",{className:"flex justify-center items-center text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:[(0,n.tZ)("time",{dateTime:g,children:new Date(g).toLocaleDateString(o.ZP.locale,m)}),(0,n.tZ)("span",{className:"mx-2",children:"-"}),(0,n.tZ)("div",{className:"flex items-center",children:(0,n.tZ)("span",{className:"ml-1",children:f.text})})]})]})}),(0,n.tZ)("div",{children:(0,n.tZ)(a.Z,{children:h})})]})}),(0,n.tZ)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:(0,n.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-4 xl:row-span-2",children:[(0,n.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:s}),(0,n.tZ)(d.Z,{frontMatter:t})]})})]})})]})}},8218:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(7320),a=r(5741),i=r(5941),l=r(3653),o=r(1476),c=r(1789),d=r(2497),s=r(3044),u=r(1580);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}function g(e){var t=e.frontMatter,r=e.next,m=e.prev,g=e.children,h=t.slug,f=t.date,y=t.title;return(0,n.BX)(l.Z,{children:[(0,n.tZ)(o.Uy,p({url:"".concat(c.ZP.siteUrl,"/blog/").concat(h)},t)),(0,n.tZ)(u.Z,{}),(0,n.tZ)("article",{children:(0,n.BX)("div",{children:[(0,n.tZ)("header",{children:(0,n.BX)("div",{className:"pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700",children:[(0,n.tZ)("dl",{children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:f,children:(0,d.Z)(f)})})]})}),(0,n.tZ)("div",{children:(0,n.tZ)(i.Z,{children:y})})]})}),(0,n.BX)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,n.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:g})}),(0,n.tZ)(s.Z,{frontMatter:t}),(0,n.tZ)("footer",{children:(0,n.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[m&&(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(m.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",m.title]})}),r&&(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(r.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}},2497:function(e,t,r){"use strict";var n=r(1789);t.Z=function(e){return new Date(e).toLocaleDateString(n.ZP.locale,{year:"numeric",month:"long",day:"numeric"})}},423:function(e,t,r){"use strict";var n=r(9671);t.Z=function(e){return(0,n.slug)(e)}}}]);
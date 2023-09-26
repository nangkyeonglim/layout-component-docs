"use strict";(self.webpackChunkreact_layout_component_docs=self.webpackChunkreact_layout_component_docs||[]).push([[795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>x});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(r),s=o,x=m["".concat(p,".").concat(s)]||m[s]||u[s]||a;return r?n.createElement(x,l(l({ref:t},d),{},{components:r})):n.createElement(x,l({ref:t},d))}));function x(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Flex",sidebar_position:3},l="Flex",i={unversionedId:"layout/flex",id:"layout/flex",title:"Flex",description:"Flex components implement a layout that flexibly arranges child components.",source:"@site/docs/layout/flex.mdx",sourceDirName:"layout",slug:"/layout/flex",permalink:"/react-layout-component-docs/docs/layout/flex",draft:!1,editUrl:"https://github.com/nangkyeonglim/react-layout-component-docs/tree/main/docs/layout/flex.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Flex",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Grid",permalink:"/react-layout-component-docs/docs/layout/grid"},next:{title:"Navigation",permalink:"/react-layout-component-docs/docs/category/navigation"}},p={},c=[{value:"Example",id:"example",level:2},{value:"Direction",id:"direction",level:2},{value:"Justify &amp; Align",id:"justify--align",level:2},{value:"Wrap",id:"wrap",level:2},{value:"Gap",id:"gap",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flex"},"Flex"),(0,o.kt)("p",null,"Flex components implement a layout that flexibly arranges child components."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")),(0,o.kt)("h2",{id:"direction"},"Direction"),(0,o.kt)("p",null,"You can set the direction of flex. (",(0,o.kt)("inlineCode",{parentName:"p"},"row")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"column"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex direction='column'>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")),(0,o.kt)("h2",{id:"justify--align"},"Justify & Align"),(0,o.kt)("p",null,"You can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"justify-content"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"align-items")," of flex."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex justify='center' align='center'>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")),(0,o.kt)("h2",{id:"wrap"},"Wrap"),(0,o.kt)("p",null,"You can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," of flex. (",(0,o.kt)("inlineCode",{parentName:"p"},"nowrap")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap-reverse"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex wrap='wrap'>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")),(0,o.kt)("h2",{id:"gap"},"Gap"),(0,o.kt)("p",null,"You can set the item's ",(0,o.kt)("inlineCode",{parentName:"p"},"gap")," of flex."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex gap='10px'>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")))}u.isMDXComponent=!0}}]);
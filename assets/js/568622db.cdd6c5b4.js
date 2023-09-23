"use strict";(self.webpackChunkreact_layout_component_docs=self.webpackChunkreact_layout_component_docs||[]).push([[795],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>x});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),s=o,x=m["".concat(p,".").concat(s)]||m[s]||u[s]||a;return t?n.createElement(x,l(l({ref:r},d),{},{components:t})):n.createElement(x,l({ref:r},d))}));function x(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8986:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={title:"Flex",sidebar_position:3},l="Flex",i={unversionedId:"layout/flex",id:"layout/flex",title:"Flex",description:"Flex components implement a layout that flexibly arranges child components.",source:"@site/docs/layout/flex.mdx",sourceDirName:"layout",slug:"/layout/flex",permalink:"/react-layout-component-docs/docs/layout/flex",draft:!1,editUrl:"https://github.com/nangkyeonglim/react-layout-component-docs/tree/main/docs/layout/flex.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Flex",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Grid",permalink:"/react-layout-component-docs/docs/layout/grid"}},p={},c=[{value:"Example",id:"example",level:2},{value:"Direction",id:"direction",level:2},{value:"Justify &amp; Align",id:"justify--align",level:2},{value:"Wrap",id:"wrap",level:2},{value:"Gap",id:"gap",level:2}],d={toc:c},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flex"},"Flex"),(0,o.kt)("p",null,"Flex components implement a layout that flexibly arranges child components."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")),(0,o.kt)("h2",{id:"direction"},"Direction"),(0,o.kt)("p",null,"You can set the direction of flex. (",(0,o.kt)("inlineCode",{parentName:"p"},"row")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"column"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex direction='column'>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")),(0,o.kt)("h2",{id:"justify--align"},"Justify & Align"),(0,o.kt)("p",null,"You can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"justify-content"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"align-items")," of flex."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex justify='center' align='center'>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")),(0,o.kt)("h2",{id:"wrap"},"Wrap"),(0,o.kt)("p",null,"You can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," of flex. (",(0,o.kt)("inlineCode",{parentName:"p"},"nowrap")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap-reverse"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex wrap='wrap'>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")),(0,o.kt)("h2",{id:"gap"},"Gap"),(0,o.kt)("p",null,"You can set the item's ",(0,o.kt)("inlineCode",{parentName:"p"},"gap")," of flex."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Flex gap='10px'>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n  <BorderBox>Item</BorderBox>\n</Flex>\n")))}u.isMDXComponent=!0}}]);
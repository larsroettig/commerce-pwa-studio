(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9687],{53547:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return c},default:function(){return p}});var n=o(22122),r=o(19756),i=(o(15007),o(64983)),a=o(99536),s=["components"],c={},d={_frontmatter:c},h=a.Z;function p(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.mdx)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"storefront-architecture"},"Storefront architecture"),(0,i.mdx)("p",null,"Unlike an Adobe Commerce or Magento Open Source theme, which is dependent on the core application, a PWA Studio storefront exists on a different application layer from the core application.\nThe storefront still communicates with the backend application, but it is not tightly coupled with it."),(0,i.mdx)("h2",{id:"headless-architecture-overview"},"Headless architecture overview"),(0,i.mdx)("p",null,"Headless architecture refers to the idea of separating the presentation layer from the data and business logic layer.\nDecoupling these two layers give merchants the ability to make changes to the frontend without modifying code for the backend services."),(0,i.mdx)("p",null,"In the context of PWA Studio, the storefront is the frontend application and the Adobe Commerce or Magento Open Source application is the connected backend service.\nA PWA Studio storefront does not use any of the backend application's frontend theme assets, layout files, or scripts.\nInstead, it defines its own frontend files and uses the backend application's GraphQL and REST services to send or request data."),(0,i.mdx)("p",null,"For more information about headless eCommerce, read the blog post titled ",(0,i.mdx)("a",{parentName:"p",href:"https://magento.com/blog/best-practices/future-headless"},"The Future Is Headless"),"."),(0,i.mdx)("h2",{id:"microservices"},"Microservices"),(0,i.mdx)("p",null,"Microservice architecture is a design pattern that separates an application into independent, deployable services.\nEach independent service communicates with the others through lightweight APIs.\nThis is known as ",(0,i.mdx)("strong",{parentName:"p"},"service isolation"),"."),(0,i.mdx)("p",null,"Adobe Commerce and Magento Open Source services, such as those for customers, product catalog, and checkout, provide an API through ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.3/extension-dev-guide/service-contracts/service-contracts.html"},"service contracts"),".\nPWA Studio storefronts interact with these services through ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/graphql-ce"},"GraphQL")," and REST services."),(0,i.mdx)("p",null,"For more information about service isolation, see: ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/architecture/blob/master/design-documents/service-isolation.md"},"Service Isolation Vision"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-storefront-architecture-index-md-6d10198c0cc21051e3f3.js.map
(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7850],{6588:function(e,n,o){"use strict";o.r(n),o.d(n,{_frontmatter:function(){return r},default:function(){return d}});var t=o(22122),a=o(19756),s=(o(15007),o(64983)),i=o(99536),r={},p={_frontmatter:r},l=i.Z;function d(e){var n=e.components,o=(0,a.Z)(e,["components"]);return(0,s.mdx)(l,(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"talons"},"Talons"),(0,s.mdx)("p",null,"Peregrine Talons are the logic component counterparts for Venia UI components.\nA Talon is a PWA Studio term for a custom React hook that provides data or performs side effects for a specific UI component.\nSince they are closely coupled to a specific UI component, these hooks are not re-usable."),(0,s.mdx)("h2",{id:"identifying-talons"},"Identifying Talons"),(0,s.mdx)("p",null,"Talons are custom React hooks, so they start with ",(0,s.mdx)("inlineCode",{parentName:"p"},"use")," followed by the name of its companion UI component.\nFor example, the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/SearchBar/searchBar.js"},"SearchBar")," component uses the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/SearchBar/useSearchBar.js"},"useSearchBar()")," talon to get initial values and functions it needs to handle changes in focus or search term value.\nThe ",(0,s.mdx)("inlineCode",{parentName:"p"},"useSearchBar()")," talon also keeps track of the component's ",(0,s.mdx)("inlineCode",{parentName:"p"},"expanded")," state, which determines how the search bar looks."),(0,s.mdx)("h2",{id:"talons-versus-hooks"},"Talons versus hooks"),(0,s.mdx)("p",null,"Talons are a PWA Studio concept that represent a specialized type of React hook."),(0,s.mdx)("p",null,"Peregrine ",(0,s.mdx)("strong",{parentName:"p"},"hooks"),", such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"useDropdown()")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"useWindowSize()"),", are designed to be re-usable pieces of code, but\nPeregrine ",(0,s.mdx)("strong",{parentName:"p"},"talons")," are designed to fulfill the logic needs of individual Venia UI components.\nThis means that each talon corresponds to a single Venia component and is not useful outside the component.\nIf a talon needs to use functionality identical to another talon, it is provided by a Peregrine hook."),(0,s.mdx)("p",null,"For example, the functionality provided by the ",(0,s.mdx)("inlineCode",{parentName:"p"},"useHeader()")," talon is only relevant to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Header")," component."),(0,s.mdx)("h2",{id:"using-talons"},"Using talons"),(0,s.mdx)("p",null,"Talons are not re-usable hooks, but they make it easier to work with UI components by providing standard functionality.\nThis lets developers focus on developing the presentation DOM and CSS pieces of a component."),(0,s.mdx)("p",null,"Venia UI components use talons by default, so developers can use Venia UI components as is without worrying about talons.\nIf developers want to change how a Venia UI component looks, they can import its associated talon into a new or modified UI component of the same type."),(0,s.mdx)("h3",{id:"talon-props-and-returned-object"},"Talon props and returned object"),(0,s.mdx)("p",null,"Talons use many of the same props as its Venia UI component counterpart.\nThese props are passed into the talon as a single object and are used to generate new values or perform side effects."),(0,s.mdx)("p",null,"The return value after calling a talon is an API object that UI components can destructure for values to display or assign to events, such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"onClick")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"onHover")," functions."),(0,s.mdx)("h3",{id:"example"},"Example"),(0,s.mdx)("p",null,"The following code snippet comes from Venia's ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Pagination/pagination.js"},"Pagination")," UI component:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},"\n...\n\nimport { usePagination } from '@magento/peregrine/lib/talons/Pagination/usePagination';\n\n...\n\nconst Pagination = props => {\n    const { currentPage, setPage, totalPages } = props.pageControl;\n\n    const talonProps = usePagination({\n        currentPage,\n        setPage,\n        totalPages\n    });\n\n    const {\n        handleLeftSkip,\n        handleRightSkip,\n        handleNavBack,\n        handleNavForward,\n        isActiveLeft,\n        isActiveRight,\n        tiles\n    } = talonProps;\n\n    ...\n}\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-general-concepts-talons-index-md-89dec4daecd9f0bb3402.js.map
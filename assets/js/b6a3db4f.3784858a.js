"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:1},o="Context",s={unversionedId:"core/context",id:"version-v0.50/core/context",title:"Context",description:"The context is a data structure intended to be passed from function to function that carries information about the current state of the application. It provides access to a branched storage (a safe branch of the entire state) as well as useful objects and information like gasMeter, block height, consensus parameters and more.",source:"@site/versioned_docs/version-v0.50/core/02-context.md",sourceDirName:"core",slug:"/core/context",permalink:"/v0.50/core/context",draft:!1,tags:[],version:"v0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Transactions",permalink:"/v0.50/core/transactions"},next:{title:"Node Client (Daemon)",permalink:"/v0.50/core/node"}},l={},c=[{value:"Context Definition",id:"context-definition",level:2},{value:"Go Context Package",id:"go-context-package",level:2},{value:"Store branching",id:"store-branching",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"context"},"Context"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," is a data structure intended to be passed from function to function that carries information about the current state of the application. It provides access to a branched storage (a safe branch of the entire state) as well as useful objects and information like ",(0,i.kt)("inlineCode",{parentName:"p"},"gasMeter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"block height"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus parameters")," and more.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("h3",{parentName:"admonition",id:"pre-requisites-readings"},"Pre-requisites Readings"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v0.50/basics/app-anatomy"},"Anatomy of a Cosmos SDK Application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v0.50/basics/tx-lifecycle"},"Lifecycle of a Transaction")))),(0,i.kt)("h2",{id:"context-definition"},"Context Definition"),(0,i.kt)("p",null,"The Cosmos SDK ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," is a custom data structure that contains Go's stdlib ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/context"},(0,i.kt)("inlineCode",{parentName:"a"},"context"))," as its base, and has many additional types within its definition that are specific to the Cosmos SDK. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," is integral to transaction processing in that it allows modules to easily access their respective ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/core/store#base-layer-kvstores"},"store")," in the ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/core/store#multistore"},(0,i.kt)("inlineCode",{parentName:"a"},"multistore"))," and retrieve transactional context such as the block header and gas meter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/types/context.go#L41-L67\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base Context:")," The base type is a Go ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/context"},"Context"),", which is explained further in the ",(0,i.kt)("a",{parentName:"li",href:"#go-context-package"},"Go Context Package")," section below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multistore:")," Every application's ",(0,i.kt)("inlineCode",{parentName:"li"},"BaseApp")," contains a ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/core/store#multistore"},(0,i.kt)("inlineCode",{parentName:"a"},"CommitMultiStore"))," which is provided when a ",(0,i.kt)("inlineCode",{parentName:"li"},"Context")," is created. Calling the ",(0,i.kt)("inlineCode",{parentName:"li"},"KVStore()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"TransientStore()")," methods allows modules to fetch their respective ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/core/store#base-layer-kvstores"},(0,i.kt)("inlineCode",{parentName:"a"},"KVStore"))," using their unique ",(0,i.kt)("inlineCode",{parentName:"li"},"StoreKey"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Header:")," The ",(0,i.kt)("a",{parentName:"li",href:"https://docs.cometbft.com/v0.37/spec/core/data_structures#header"},"header")," is a Blockchain type. It carries important information about the state of the blockchain, such as block height and proposer of the current block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Header Hash:")," The current block header hash, obtained during ",(0,i.kt)("inlineCode",{parentName:"li"},"abci.FinalizeBlock"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Chain ID:")," The unique identification number of the blockchain a block pertains to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Transaction Bytes:")," The ",(0,i.kt)("inlineCode",{parentName:"li"},"[]byte")," representation of a transaction being processed using the context. Every transaction is processed by various parts of the Cosmos SDK and consensus engine (e.g. CometBFT) throughout its ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/basics/tx-lifecycle"},"lifecycle"),", some of which do not have any understanding of transaction types. Thus, transactions are marshaled into the generic ",(0,i.kt)("inlineCode",{parentName:"li"},"[]byte")," type using some kind of ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/core/encoding"},"encoding format")," such as ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/core/encoding"},"Amino"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logger:")," A ",(0,i.kt)("inlineCode",{parentName:"li"},"logger")," from the CometBFT libraries. Learn more about logs ",(0,i.kt)("a",{parentName:"li",href:"https://docs.cometbft.com/v0.37/core/configuration"},"here"),". Modules call this method to create their own unique module-specific logger."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VoteInfo:")," A list of the ABCI type ",(0,i.kt)("a",{parentName:"li",href:"https://docs.cometbft.com/master/spec/abci/abci.html#voteinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"VoteInfo")),", which includes the name of a validator and a boolean indicating whether they have signed the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gas Meters:")," Specifically, a ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/basics/gas-fees#main-gas-meter"},(0,i.kt)("inlineCode",{parentName:"a"},"gasMeter"))," for the transaction currently being processed using the context and a ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/basics/gas-fees#block-gas-meter"},(0,i.kt)("inlineCode",{parentName:"a"},"blockGasMeter"))," for the entire block it belongs to. Users specify how much in fees they wish to pay for the execution of their transaction; these gas meters keep track of how much ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/basics/gas-fees"},"gas")," has been used in the transaction or block so far. If the gas meter runs out, execution halts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CheckTx Mode:")," A boolean value indicating whether a transaction should be processed in ",(0,i.kt)("inlineCode",{parentName:"li"},"CheckTx")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"DeliverTx")," mode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Min Gas Price:")," The minimum ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/basics/gas-fees"},"gas")," price a node is willing to take in order to include a transaction in its block. This price is a local value configured by each node individually, and should therefore ",(0,i.kt)("strong",{parentName:"li"},"not be used in any functions used in sequences leading to state-transitions"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Consensus Params:")," The ABCI type ",(0,i.kt)("a",{parentName:"li",href:"https://docs.cometbft.com/master/spec/abci/apps.html#consensus-parameters"},"Consensus Parameters"),", which specify certain limits for the blockchain, such as maximum gas for a block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Event Manager:")," The event manager allows any caller with access to a ",(0,i.kt)("inlineCode",{parentName:"li"},"Context")," to emit ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/core/events"},(0,i.kt)("inlineCode",{parentName:"a"},"Events")),". Modules may define module specific\n",(0,i.kt)("inlineCode",{parentName:"li"},"Events")," by defining various ",(0,i.kt)("inlineCode",{parentName:"li"},"Types")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Attributes")," or use the common definitions found in ",(0,i.kt)("inlineCode",{parentName:"li"},"types/"),". Clients can subscribe or query for these ",(0,i.kt)("inlineCode",{parentName:"li"},"Events"),". These ",(0,i.kt)("inlineCode",{parentName:"li"},"Events")," are collected throughout ",(0,i.kt)("inlineCode",{parentName:"li"},"FinalizeBlock")," and are returned to CometBFT for indexing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Priority:")," The transaction priority, only relevant in ",(0,i.kt)("inlineCode",{parentName:"li"},"CheckTx"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"KV ",(0,i.kt)("inlineCode",{parentName:"strong"},"GasConfig"),":")," Enables applications to set a custom ",(0,i.kt)("inlineCode",{parentName:"li"},"GasConfig")," for the ",(0,i.kt)("inlineCode",{parentName:"li"},"KVStore"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Transient KV ",(0,i.kt)("inlineCode",{parentName:"strong"},"GasConfig"),":")," Enables applications to set a custom ",(0,i.kt)("inlineCode",{parentName:"li"},"GasConfig")," for the transiant ",(0,i.kt)("inlineCode",{parentName:"li"},"KVStore"),".")),(0,i.kt)("h2",{id:"go-context-package"},"Go Context Package"),(0,i.kt)("p",null,"A basic ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," is defined in the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/context"},"Golang Context Package"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),"\nis an immutable data structure that carries request-scoped data across APIs and processes. Contexts\nare also designed to enable concurrency and to be used in goroutines."),(0,i.kt)("p",null,"Contexts are intended to be ",(0,i.kt)("strong",{parentName:"p"},"immutable"),"; they should never be edited. Instead, the convention is\nto create a child context from its parent using a ",(0,i.kt)("inlineCode",{parentName:"p"},"With")," function. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"childCtx = parentCtx.WithBlockHeader(header)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/context"},"Golang Context Package")," documentation instructs developers to\nexplicitly pass a context ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx")," as the first argument of a process."),(0,i.kt)("h2",{id:"store-branching"},"Store branching"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiStore"),", which allows for branchinig and caching functionality using ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheMultiStore"),"\n(queries in ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheMultiStore")," are cached to avoid future round trips).\nEach ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore")," is branched in a safe and isolated ephemeral storage. Processes are free to write changes to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheMultiStore"),". If a state-transition sequence is performed without issue, the store branch can\nbe committed to the underlying store at the end of the sequence or disregard them if something\ngoes wrong. The pattern of usage for a Context is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A process receives a Context ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx")," from its parent process, which provides information needed to\nperform the process."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx.ms")," is a ",(0,i.kt)("strong",{parentName:"li"},"branched store"),", i.e. a branch of the ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/core/store#multistore"},"multistore")," is made so that the process can make changes to the state as it executes, without changing the original",(0,i.kt)("inlineCode",{parentName:"li"},"ctx.ms"),". This is useful to protect the underlying multistore in case the changes need to be reverted at some point in the execution."),(0,i.kt)("li",{parentName:"ol"},"The process may read and write from ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx")," as it is executing. It may call a subprocess and pass\n",(0,i.kt)("inlineCode",{parentName:"li"},"ctx")," to it as needed."),(0,i.kt)("li",{parentName:"ol"},"When a subprocess returns, it checks if the result is a success or failure. If a failure, nothing\nneeds to be done - the branch ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx")," is simply discarded. If successful, the changes made to\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"CacheMultiStore")," can be committed to the original ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx.ms")," via ",(0,i.kt)("inlineCode",{parentName:"li"},"Write()"),".")),(0,i.kt)("p",null,"For example, here is a snippet from the ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/core/baseapp#runtx-antehandler-runmsgs-posthandler"},(0,i.kt)("inlineCode",{parentName:"a"},"runTx"))," function in ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/core/baseapp"},(0,i.kt)("inlineCode",{parentName:"a"},"baseapp")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"runMsgCtx, msCache := app.cacheTxContext(ctx, txBytes)\nresult = app.runMsgs(runMsgCtx, msgs, mode)\nresult.GasWanted = gasWanted\nif mode != runTxModeDeliver {\n  return result\n}\nif result.IsOK() {\n  msCache.Write()\n}\n")),(0,i.kt)("p",null,"Here is the process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prior to calling ",(0,i.kt)("inlineCode",{parentName:"li"},"runMsgs")," on the message(s) in the transaction, it uses ",(0,i.kt)("inlineCode",{parentName:"li"},"app.cacheTxContext()"),"\nto branch and cache the context and multistore."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"runMsgCtx")," - the context with branched store, is used in ",(0,i.kt)("inlineCode",{parentName:"li"},"runMsgs")," to return a result."),(0,i.kt)("li",{parentName:"ol"},"If the process is running in ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/core/baseapp#checktx"},(0,i.kt)("inlineCode",{parentName:"a"},"checkTxMode")),", there is no need to write the\nchanges - the result is returned immediately."),(0,i.kt)("li",{parentName:"ol"},"If the process is running in ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/core/baseapp#delivertx"},(0,i.kt)("inlineCode",{parentName:"a"},"deliverTxMode"))," and the result indicates\na successful run over all the messages, the branched multistore is written back to the original.")))}m.isMDXComponent=!0}}]);
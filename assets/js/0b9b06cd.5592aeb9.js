"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7564],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60298:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1},i="Module Interfaces",l={unversionedId:"building-modules/module-interfaces",id:"version-v0.47/building-modules/module-interfaces",title:"Module Interfaces",description:"This document details how to build CLI and REST interfaces for a module. Examples from various Cosmos SDK modules are included.",source:"@site/versioned_docs/version-v0.47/building-modules/09-module-interfaces.md",sourceDirName:"building-modules",slug:"/building-modules/module-interfaces",permalink:"/v0.47/building-modules/module-interfaces",draft:!1,tags:[],version:"v0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Module Genesis",permalink:"/v0.47/building-modules/genesis"},next:{title:"AutoCLI",permalink:"/v0.47/building-modules/autocli"}},s={},m=[{value:"CLI",id:"cli",level:2},{value:"Transaction Commands",id:"transaction-commands",level:3},{value:"Query Commands",id:"query-commands",level:3},{value:"Flags",id:"flags",level:3},{value:"gRPC",id:"grpc",level:2},{value:"gRPC-gateway REST",id:"grpc-gateway-rest",level:2}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module-interfaces"},"Module Interfaces"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This document details how to build CLI and REST interfaces for a module. Examples from various Cosmos SDK modules are included.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/building-modules/intro"},"Building Modules Intro")))),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("p",null,"One of the main interfaces for an application is the ",(0,r.kt)("a",{parentName:"p",href:"/v0.47/core/cli"},"command-line interface"),". This entrypoint adds commands from the application's modules enabling end-users to create ",(0,r.kt)("a",{parentName:"p",href:"/v0.47/building-modules/messages-and-queries#messages"},(0,r.kt)("strong",{parentName:"a"},"messages"))," wrapped in transactions and ",(0,r.kt)("a",{parentName:"p",href:"/v0.47/building-modules/messages-and-queries#queries"},(0,r.kt)("strong",{parentName:"a"},"queries")),". The CLI files are typically found in the module's ",(0,r.kt)("inlineCode",{parentName:"p"},"./client/cli")," folder."),(0,r.kt)("h3",{id:"transaction-commands"},"Transaction Commands"),(0,r.kt)("p",null,"In order to create messages that trigger state changes, end-users must create ",(0,r.kt)("a",{parentName:"p",href:"/v0.47/core/transactions"},"transactions")," that wrap and deliver the messages. A transaction command creates a transaction that includes one or more messages."),(0,r.kt)("p",null,"Transaction commands typically have their own ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.go")," file that lives within the module's ",(0,r.kt)("inlineCode",{parentName:"p"},"./client/cli")," folder. The commands are specified in getter functions and the name of the function should include the name of the command."),(0,r.kt)("p",null,"Here is an example from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/bank")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/bank/client/cli/tx.go#L35-L71\n")),(0,r.kt)("p",null,"In the example, ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSendTxCmd()")," creates and returns the transaction command for a transaction that wraps and delivers ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgSend"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgSend")," is the message used to send tokens from one account to another."),(0,r.kt)("p",null,"In general, the getter function does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Constructs the command:")," Read the ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/spf13/cobra"},"Cobra Documentation")," for more detailed information on how to create commands.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use:")," Specifies the format of the user input required to invoke the command. In the example above, ",(0,r.kt)("inlineCode",{parentName:"li"},"send")," is the name of the transaction command and ",(0,r.kt)("inlineCode",{parentName:"li"},"[from_key_or_address]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"[to_address]"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"[amount]")," are the arguments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Args:")," The number of arguments the user provides. In this case, there are exactly three: ",(0,r.kt)("inlineCode",{parentName:"li"},"[from_key_or_address]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"[to_address]"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"[amount]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Short and Long:")," Descriptions for the command. A ",(0,r.kt)("inlineCode",{parentName:"li"},"Short")," description is expected. A ",(0,r.kt)("inlineCode",{parentName:"li"},"Long")," description can be used to provide additional information that is displayed when a user adds the ",(0,r.kt)("inlineCode",{parentName:"li"},"--help")," flag."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RunE:")," Defines a function that can return an error. This is the function that is called when the command is executed. This function encapsulates all of the logic to create a new transaction.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The function typically starts by getting the ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx"),", which can be done with ",(0,r.kt)("inlineCode",{parentName:"li"},"client.GetClientTxContext(cmd)"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx")," contains information relevant to transaction handling, including information about the user. In this example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx")," is used to retrieve the address of the sender by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx.GetFromAddress()"),"."),(0,r.kt)("li",{parentName:"ul"},"If applicable, the command's arguments are parsed. In this example, the arguments ",(0,r.kt)("inlineCode",{parentName:"li"},"[to_address]")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"[amount]")," are both parsed."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/v0.47/building-modules/messages-and-queries"},"message")," is created using the parsed arguments and information from the ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx"),". The constructor function of the message type is called directly. In this case, ",(0,r.kt)("inlineCode",{parentName:"li"},"types.NewMsgSend(fromAddr, toAddr, amount)"),". Its good practice to call ",(0,r.kt)("a",{parentName:"li",href:"/v0.47/basics/tx-lifecycle#ValidateBasic"},(0,r.kt)("inlineCode",{parentName:"a"},"msg.ValidateBasic()"))," and other validation methods before broadcasting the message."),(0,r.kt)("li",{parentName:"ul"},"Depending on what the user wants, the transaction is either generated offline or signed and broadcasted to the preconfigured node using ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.GenerateOrBroadcastTxCLI(clientCtx, flags, msg)"),"."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adds transaction flags:")," All transaction commands must add a set of transaction ",(0,r.kt)("a",{parentName:"li",href:"#flags"},"flags"),". The transaction flags are used to collect additional information from the user (e.g. the amount of fees the user is willing to pay). The transaction flags are added to the constructed command using ",(0,r.kt)("inlineCode",{parentName:"li"},"AddTxFlagsToCmd(cmd)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns the command:")," Finally, the transaction command is returned.")),(0,r.kt)("p",null,"Each module must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTxCmd()"),", which aggregates all of the transaction commands of the module. Here is an example from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/bank")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/bank/client/cli/tx.go#L17-L33\n")),(0,r.kt)("p",null,"Each module must also implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetTxCmd()")," method for ",(0,r.kt)("inlineCode",{parentName:"p"},"AppModuleBasic")," that simply returns ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTxCmd()"),". This allows the root command to easily aggregate all of the transaction commands for each module. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/bank/module.go#L79-L82\n")),(0,r.kt)("h3",{id:"query-commands"},"Query Commands"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/v0.47/building-modules/messages-and-queries#queries"},"Queries")," allow users to gather information about the application or network state; they are routed by the application and processed by the module in which they are defined. Query commands typically have their own ",(0,r.kt)("inlineCode",{parentName:"p"},"query.go")," file in the module's ",(0,r.kt)("inlineCode",{parentName:"p"},"./client/cli")," folder. Like transaction commands, they are specified in getter functions. Here is an example of a query command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/client/cli/query.go#L86-L128\n")),(0,r.kt)("p",null,"In the example, ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAccountCmd()")," creates and returns a query command that returns the state of an account based on the provided account address."),(0,r.kt)("p",null,"In general, the getter function does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Constructs the command:")," Read the ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/spf13/cobra"},"Cobra Documentation")," for more detailed information on how to create commands.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use:")," Specifies the format of the user input required to invoke the command. In the example above, ",(0,r.kt)("inlineCode",{parentName:"li"},"account")," is the name of the query command and ",(0,r.kt)("inlineCode",{parentName:"li"},"[address]")," is the argument."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Args:")," The number of arguments the user provides. In this case, there is exactly one: ",(0,r.kt)("inlineCode",{parentName:"li"},"[address]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Short and Long:")," Descriptions for the command. A ",(0,r.kt)("inlineCode",{parentName:"li"},"Short")," description is expected. A ",(0,r.kt)("inlineCode",{parentName:"li"},"Long")," description can be used to provide additional information that is displayed when a user adds the ",(0,r.kt)("inlineCode",{parentName:"li"},"--help")," flag."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RunE:")," Defines a function that can return an error. This is the function that is called when the command is executed. This function encapsulates all of the logic to create a new query.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The function typically starts by getting the ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx"),", which can be done with ",(0,r.kt)("inlineCode",{parentName:"li"},"client.GetClientQueryContext(cmd)"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx")," contains information relevant to query handling."),(0,r.kt)("li",{parentName:"ul"},"If applicable, the command's arguments are parsed. In this example, the argument ",(0,r.kt)("inlineCode",{parentName:"li"},"[address]")," is parsed."),(0,r.kt)("li",{parentName:"ul"},"A new ",(0,r.kt)("inlineCode",{parentName:"li"},"queryClient")," is initialized using ",(0,r.kt)("inlineCode",{parentName:"li"},"NewQueryClient(clientCtx)"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"queryClient")," is then used to call the appropriate ",(0,r.kt)("a",{parentName:"li",href:"/v0.47/building-modules/messages-and-queries#grpc-queries"},"query"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx.PrintProto")," method is used to format the ",(0,r.kt)("inlineCode",{parentName:"li"},"proto.Message")," object so that the results can be printed back to the user."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adds query flags:")," All query commands must add a set of query ",(0,r.kt)("a",{parentName:"li",href:"#flags"},"flags"),". The query flags are added to the constructed command using ",(0,r.kt)("inlineCode",{parentName:"li"},"AddQueryFlagsToCmd(cmd)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns the command:")," Finally, the query command is returned.")),(0,r.kt)("p",null,"Each module must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"GetQueryCmd()"),", which aggregates all of the query commands of the module. Here is an example from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/client/cli/query.go#L33-L53\n")),(0,r.kt)("p",null,"Each module must also implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetQueryCmd()")," method for ",(0,r.kt)("inlineCode",{parentName:"p"},"AppModuleBasic")," that returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetQueryCmd()")," function. This allows for the root command to easily aggregate all of the query commands for each module. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/bank/module.go#L84-L87\n")),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/v0.47/core/cli#flags"},"Flags")," allow users to customize commands. ",(0,r.kt)("inlineCode",{parentName:"p"},"--fees")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--gas-prices")," are examples of flags that allow users to set the ",(0,r.kt)("a",{parentName:"p",href:"/v0.47/basics/gas-fees"},"fees")," and gas prices for their transactions."),(0,r.kt)("p",null,"Flags that are specific to a module are typically created in a ",(0,r.kt)("inlineCode",{parentName:"p"},"flags.go")," file in the module's ",(0,r.kt)("inlineCode",{parentName:"p"},"./client/cli")," folder. When creating a flag, developers set the value type, the name of the flag, the default value, and a description about the flag. Developers also have the option to mark flags as ",(0,r.kt)("em",{parentName:"p"},"required")," so that an error is thrown if the user does not include a value for the flag."),(0,r.kt)("p",null,"Here is an example that adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," flag to a command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'cmd.Flags().String(FlagFrom, "", "Name or address of private key with which to sign")\n')),(0,r.kt)("p",null,"In this example, the value of the flag is a ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", the name of the flag is ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," (the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlagFrom")," constant), the default value of the flag is ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),", and there is a description that will be displayed when a user adds ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," to the command."),(0,r.kt)("p",null,"Here is an example that marks the ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," flag as ",(0,r.kt)("em",{parentName:"p"},"required"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"cmd.MarkFlagRequired(FlagFrom)\n")),(0,r.kt)("p",null,"For more detailed information on creating flags, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spf13/cobra"},"Cobra Documentation"),"."),(0,r.kt)("p",null,"As mentioned in ",(0,r.kt)("a",{parentName:"p",href:"#transaction-commands"},"transaction commands"),", there is a set of flags that all transaction commands must add. This is done with the ",(0,r.kt)("inlineCode",{parentName:"p"},"AddTxFlagsToCmd")," method defined in the Cosmos SDK's ",(0,r.kt)("inlineCode",{parentName:"p"},"./client/flags")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/flags/flags.go#L108-L138\n")),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"AddTxFlagsToCmd(cmd *cobra.Command)")," includes all of the basic flags required for a transaction command, module developers may choose not to add any of their own (specifying arguments instead may often be more appropriate)."),(0,r.kt)("p",null,"Similarly, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"AddQueryFlagsToCmd(cmd *cobra.Command)")," to add common flags to a module query command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/flags/flags.go#L95-L106\n")),(0,r.kt)("h2",{id:"grpc"},"gRPC"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," is a Remote Procedure Call (RPC) framework. RPC is the preferred way for external clients like wallets and exchanges to interact with a blockchain."),(0,r.kt)("p",null,"In addition to providing an ABCI query pathway, the Cosmos SDK provides a gRPC proxy server that routes gRPC query requests to ABCI query requests."),(0,r.kt)("p",null,"In order to do that, modules must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux)")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"AppModuleBasic")," to wire the client gRPC requests to the correct handler inside the module."),(0,r.kt)("p",null,"Here's an example from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/module.go#L71-L76\n")),(0,r.kt)("h2",{id:"grpc-gateway-rest"},"gRPC-gateway REST"),(0,r.kt)("p",null,"Applications need to support web services that use HTTP requests (e.g. a web wallet like ",(0,r.kt)("a",{parentName:"p",href:"https://keplr.app"},"Keplr"),"). ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/grpc-ecosystem/grpc-gateway"},"grpc-gateway")," translates REST calls into gRPC calls, which might be useful for clients that do not use gRPC."),(0,r.kt)("p",null,"Modules that want to expose REST queries should add ",(0,r.kt)("inlineCode",{parentName:"p"},"google.api.http")," annotations to their ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," methods, such as in the example below from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/auth/v1beta1/query.proto#L14-L89\n")),(0,r.kt)("p",null,"gRPC gateway is started in-process along with the application and CometBFT. It can be enabled or disabled by setting gRPC Configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," in ",(0,r.kt)("a",{parentName:"p",href:"/v0.47/run-node/interact-node#configuring-the-node-using-apptoml"},(0,r.kt)("inlineCode",{parentName:"a"},"app.toml")),"."),(0,r.kt)("p",null,"The Cosmos SDK provides a command for generating ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," documentation (",(0,r.kt)("inlineCode",{parentName:"p"},"protoc-gen-swagger"),"). Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger")," in ",(0,r.kt)("a",{parentName:"p",href:"/v0.47/run-node/interact-node#configuring-the-node-using-apptoml"},(0,r.kt)("inlineCode",{parentName:"a"},"app.toml"))," defines if swagger documentation should be automatically registered."))}p.isMDXComponent=!0}}]);
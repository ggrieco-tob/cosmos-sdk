"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[1695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},s="ADR 038: KVStore state listening",o={unversionedId:"architecture/adr-038-state-listening",id:"version-v0.47/architecture/adr-038-state-listening",title:"ADR 038: KVStore state listening",description:"Changelog",source:"@site/versioned_docs/version-v0.47/architecture/adr-038-state-listening.md",sourceDirName:"architecture",slug:"/architecture/adr-038-state-listening",permalink:"/v0.47/architecture/adr-038-state-listening",draft:!1,tags:[],version:"v0.47",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 037: Governance split votes",permalink:"/v0.47/architecture/adr-037-gov-split-vote"},next:{title:"ADR 039: Epoched Staking",permalink:"/v0.47/architecture/adr-039-epoched-staking"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Listening interface",id:"listening-interface",level:3},{value:"Listener type",id:"listener-type",level:3},{value:"ListenKVStore",id:"listenkvstore",level:3},{value:"MultiStore interface updates",id:"multistore-interface-updates",level:3},{value:"MultiStore implementation updates",id:"multistore-implementation-updates",level:3},{value:"Exposing the data",id:"exposing-the-data",level:3},{value:"Streaming service",id:"streaming-service",level:4},{value:"BaseApp registration",id:"baseapp-registration",level:4},{value:"Error Handling And Async Consumers",id:"error-handling-and-async-consumers",level:4},{value:"File Streamer",id:"file-streamer",level:4},{value:"Plugin system",id:"plugin-system",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Encoding and decoding streams",id:"encoding-and-decoding-streams",level:4},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-038-kvstore-state-listening"},"ADR 038: KVStore state listening"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"11/23/2020: Initial draft"),(0,i.kt)("li",{parentName:"ul"},"10/14/2022:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"ListenCommit"),", flatten the state writes in a block to a single batch."),(0,i.kt)("li",{parentName:"ul"},"Remove listeners from cache stores, should only listen to ",(0,i.kt)("inlineCode",{parentName:"li"},"rootmulti.Store"),"."),(0,i.kt)("li",{parentName:"ul"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"HaltAppOnDeliveryError()"),", the errors are propogated by default, the implementations should return nil if don't want to propogate errors.")))),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Proposed"),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"This ADR defines a set of changes to enable listening to state changes of individual KVStores and exposing these data to consumers."),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Currently, KVStore data can be remotely accessed through ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/building-modules/messages-and-queries.md#queries"},"Queries"),"\nwhich proceed either through Tendermint and the ABCI, or through the gRPC server.\nIn addition to these request/response queries, it would be beneficial to have a means of listening to state changes as they occur in real time."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"We will modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"CommitMultiStore")," interface and its concrete (",(0,i.kt)("inlineCode",{parentName:"p"},"rootmulti"),") implementations and introduce a new ",(0,i.kt)("inlineCode",{parentName:"p"},"listenkv.Store")," to allow listening to state changes in underlying KVStores. We don't need to listen to cache stores, because we can't be sure that the writes will be committed eventually, and the writes are duplicated in ",(0,i.kt)("inlineCode",{parentName:"p"},"rootmulti.Store")," eventually, so we should only listen to ",(0,i.kt)("inlineCode",{parentName:"p"},"rootmulti.Store"),".\nWe will introduce a plugin system for configuring and running streaming services that write these state changes and their surrounding ABCI message context to different destinations."),(0,i.kt)("h3",{id:"listening-interface"},"Listening interface"),(0,i.kt)("p",null,"In a new file, ",(0,i.kt)("inlineCode",{parentName:"p"},"store/types/listening.go"),", we will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteListener")," interface for streaming out state changes from a KVStore."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// WriteListener interface for streaming data out from a listenkv.Store\ntype WriteListener interface {\n    // if value is nil then it was deleted\n    // storeKey indicates the source KVStore, to facilitate using the same WriteListener across separate KVStores\n    // delete bool indicates if it was a delete; true: delete, false: set\n    OnWrite(storeKey StoreKey, key []byte, value []byte, delete bool) error\n}\n")),(0,i.kt)("h3",{id:"listener-type"},"Listener type"),(0,i.kt)("p",null,"We will create two concrete implementations of the ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteListener")," interface in ",(0,i.kt)("inlineCode",{parentName:"p"},"store/types/listening.go"),", that writes out protobuf\nencoded KV pairs to an underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"io.Writer"),", and simply accumulate them in memory."),(0,i.kt)("p",null,"This will include defining a simple protobuf type for the KV pairs. In addition to the key and value fields this message\nwill include the StoreKey for the originating KVStore so that we can write out from separate KVStores to the same stream/file\nand determine the source of each KV pair."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"message StoreKVPair {\n  optional string store_key = 1; // the store key for the KVStore this pair originates from\n  required bool set = 2; // true indicates a set operation, false indicates a delete operation\n  required bytes key = 3;\n  required bytes value = 4;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// StoreKVPairWriteListener is used to configure listening to a KVStore by writing out length-prefixed\n// protobuf encoded StoreKVPairs to an underlying io.Writer\ntype StoreKVPairWriteListener struct {\n    writer io.Writer\n    marshaller codec.BinaryCodec\n}\n\n// NewStoreKVPairWriteListener wraps creates a StoreKVPairWriteListener with a provdied io.Writer and codec.BinaryCodec\nfunc NewStoreKVPairWriteListener(w io.Writer, m codec.BinaryCodec) *StoreKVPairWriteListener {\n    return &StoreKVPairWriteListener{\n        writer: w,\n        marshaller: m,\n    }\n}\n\n// OnWrite satisfies the WriteListener interface by writing length-prefixed protobuf encoded StoreKVPairs\nfunc (wl *StoreKVPairWriteListener) OnWrite(storeKey types.StoreKey, key []byte, value []byte, delete bool) error error {\n    kvPair := new(types.StoreKVPair)\n    kvPair.StoreKey = storeKey.Name()\n    kvPair.Delete = Delete\n    kvPair.Key = key\n    kvPair.Value = value\n    by, err := wl.marshaller.MarshalBinaryLengthPrefixed(kvPair)\n    if err != nil {\n        return err\n    }\n    if _, err := wl.writer.Write(by); err != nil {\n        return err\n    }\n    return nil\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},"// MemoryListener listens to the state writes and accumulate the records in memory.\ntype MemoryListener struct {\n    key        StoreKey\n    stateCache []StoreKVPair\n}\n\n// NewMemoryListener creates a listener that accumulate the state writes in memory.\nfunc NewMemoryListener(key StoreKey) *MemoryListener {\n    return &MemoryListener{key: key}\n}\n\n// OnWrite implements WriteListener interface\nfunc (fl *MemoryListener) OnWrite(storeKey StoreKey, key []byte, value []byte, delete bool) error {\n    fl.stateCache = append(fl.stateCache, StoreKVPair{\n        StoreKey: storeKey.Name(),\n        Delete:   delete,\n        Key:      key,\n        Value:    value,\n    })\n    return nil\n}\n\n// PopStateCache returns the current state caches and set to nil\nfunc (fl *MemoryListener) PopStateCache() []StoreKVPair {\n    res := fl.stateCache\n    fl.stateCache = nil\n    return res\n}\n\n// StoreKey returns the storeKey it listens to\nfunc (fl *MemoryListener) StoreKey() StoreKey {\n    return fl.key\n}\n")),(0,i.kt)("h3",{id:"listenkvstore"},"ListenKVStore"),(0,i.kt)("p",null,"We will create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," type ",(0,i.kt)("inlineCode",{parentName:"p"},"listenkv.Store")," that the ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiStore")," wraps around a ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore")," to enable state listening.\nWe can configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," with a set of ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteListener"),"s which stream the output to specific destinations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Store implements the KVStore interface with listening enabled.\n// Operations are traced on each core KVStore call and written to any of the\n// underlying listeners with the proper key and operation permissions\ntype Store struct {\n    parent    types.KVStore\n    listeners []types.WriteListener\n    parentStoreKey types.StoreKey\n}\n\n// NewStore returns a reference to a new traceKVStore given a parent\n// KVStore implementation and a buffered writer.\nfunc NewStore(parent types.KVStore, psk types.StoreKey, listeners []types.WriteListener) *Store {\n    return &Store{parent: parent, listeners: listeners, parentStoreKey: psk}\n}\n\n// Set implements the KVStore interface. It traces a write operation and\n// delegates the Set call to the parent KVStore.\nfunc (s *Store) Set(key []byte, value []byte) {\n    types.AssertValidKey(key)\n    s.parent.Set(key, value)\n    s.onWrite(false, key, value)\n}\n\n// Delete implements the KVStore interface. It traces a write operation and\n// delegates the Delete call to the parent KVStore.\nfunc (s *Store) Delete(key []byte) {\n    s.parent.Delete(key)\n    s.onWrite(true, key, nil)\n}\n\n// onWrite writes a KVStore operation to all the WriteListeners\nfunc (s *Store) onWrite(delete bool, key, value []byte) {\n    for _, l := range s.listeners {\n        if err := l.OnWrite(s.parentStoreKey, key, value, delete); err != nil {\n            // log error\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"multistore-interface-updates"},"MultiStore interface updates"),(0,i.kt)("p",null,"We will update the ",(0,i.kt)("inlineCode",{parentName:"p"},"CommitMultiStore")," interface to allow us to wrap a set of listeners around a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type CommitMultiStore interface {\n    ...\n\n    // ListeningEnabled returns if listening is enabled for the KVStore belonging the provided StoreKey\n    ListeningEnabled(key StoreKey) bool\n\n    // AddListeners adds WriteListeners for the KVStore belonging to the provided StoreKey\n    // It appends the listeners to a current set, if one already exists\n    AddListeners(key StoreKey, listeners []WriteListener)\n}\n")),(0,i.kt)("h3",{id:"multistore-implementation-updates"},"MultiStore implementation updates"),(0,i.kt)("p",null,"We will modify all of the ",(0,i.kt)("inlineCode",{parentName:"p"},"CommitMultiStore")," implementations to satisfy these new interfaces, and adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"rootmulti")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GetKVStore")," method\nto wrap the returned ",(0,i.kt)("inlineCode",{parentName:"p"},"KVStore")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"listenkv.Store")," if listening is turned on for that ",(0,i.kt)("inlineCode",{parentName:"p"},"Store"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (rs *Store) GetKVStore(key types.StoreKey) types.KVStore {\n    store := rs.stores[key].(types.KVStore)\n\n    if rs.TracingEnabled() {\n        store = tracekv.NewStore(store, rs.traceWriter, rs.traceContext)\n    }\n    if rs.ListeningEnabled(key) {\n        store = listenkv.NewStore(key, store, rs.listeners[key])\n    }\n\n    return store\n}\n")),(0,i.kt)("p",null,"We will also adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"rootmulti")," ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheMultiStore")," method to wrap the stores with ",(0,i.kt)("inlineCode",{parentName:"p"},"listenkv.Store")," to enable listening when the cache layer writes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (rs *Store) CacheMultiStore() types.CacheMultiStore {\n    stores := make(map[types.StoreKey]types.CacheWrapper)\n    for k, v := range rs.stores {\n        store := v.(types.KVStore)\n        // Wire the listenkv.Store to allow listeners to observe the writes from the cache store,\n        // set same listeners on cache store will observe duplicated writes.\n        if rs.ListeningEnabled(k) {\n            store = listenkv.NewStore(store, k, rs.listeners[k])\n        }\n        stores[k] = store\n    }\n    return cachemulti.NewStore(rs.db, stores, rs.keysByName, rs.traceWriter, rs.getTracingContext())\n}\n")),(0,i.kt)("h3",{id:"exposing-the-data"},"Exposing the data"),(0,i.kt)("h4",{id:"streaming-service"},"Streaming service"),(0,i.kt)("p",null,"We will introduce a new ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamingService")," interface for exposing ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteListener")," data streams to external consumers.\nIn addition to streaming state changes as ",(0,i.kt)("inlineCode",{parentName:"p"},"StoreKVPair"),"s, the interface satisfies an ",(0,i.kt)("inlineCode",{parentName:"p"},"ABCIListener")," interface that plugs\ninto the BaseApp and relays ABCI requests and responses so that the service can observe those block metadatas as well."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteListener"),"s of ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamingService")," listens to the ",(0,i.kt)("inlineCode",{parentName:"p"},"rootmulti.Store"),", which is only written into at commit event by the cache store of ",(0,i.kt)("inlineCode",{parentName:"p"},"deliverState"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// ABCIListener interface used to hook into the ABCI message processing of the BaseApp\ntype ABCIListener interface {\n    // ListenBeginBlock updates the streaming service with the latest BeginBlock messages\n    ListenBeginBlock(ctx types.Context, req abci.RequestBeginBlock, res abci.ResponseBeginBlock) error\n    // ListenEndBlock updates the steaming service with the latest EndBlock messages\n    ListenEndBlock(ctx types.Context, req abci.RequestEndBlock, res abci.ResponseEndBlock) error\n    // ListenDeliverTx updates the steaming service with the latest DeliverTx messages\n    ListenDeliverTx(ctx types.Context, req abci.RequestDeliverTx, res abci.ResponseDeliverTx) error\n    // ListenCommit updates the steaming service with the latest Commit message,\n    // All the state writes of current block should have notified before this message.\n    ListenCommit(ctx types.Context, res abci.ResponseCommit) error\n}\n\n// StreamingService interface for registering WriteListeners with the BaseApp and updating the service with the ABCI messages using the hooks\ntype StreamingService interface {\n    // Stream is the streaming service loop, awaits kv pairs and writes them to a destination stream or file\n    Stream(wg *sync.WaitGroup) error\n    // Listeners returns the streaming service's listeners for the BaseApp to register\n    Listeners() map[types.StoreKey][]store.WriteListener\n    // ABCIListener interface for hooking into the ABCI messages from inside the BaseApp\n    ABCIListener\n    // Closer interface\n    io.Closer\n}\n")),(0,i.kt)("h4",{id:"baseapp-registration"},"BaseApp registration"),(0,i.kt)("p",null,"We will add a new method to the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," to enable the registration of ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamingService"),"s:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// SetStreamingService is used to set a streaming service into the BaseApp hooks and load the listeners into the multistore\nfunc (app *BaseApp) SetStreamingService(s StreamingService) {\n    // add the listeners for each StoreKey\n    for key, lis := range s.Listeners() {\n        app.cms.AddListeners(key, lis)\n    }\n    // register the StreamingService within the BaseApp\n    // BaseApp will pass BeginBlock, DeliverTx, and EndBlock requests and responses to the streaming services to update their ABCI context\n    app.abciListeners = append(app.abciListeners, s)\n}\n")),(0,i.kt)("p",null,"We will also modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EndBlock"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliverTx")," methods to pass ABCI requests and responses to any streaming service hooks registered\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func (app *BaseApp) BeginBlock(req abci.RequestBeginBlock) (res abci.ResponseBeginBlock) {\n\n    ...\n\n    defer func() {\n        // call the hooks with the BeginBlock messages\n        for _, streamingListener := range app.abciListeners {\n            if err := streamingListener.ListenBeginBlock(app.deliverState.ctx, req, res); err != nil {\n                panic(sdkerrors.Wrapf(err, "BeginBlock listening hook failed, height: %d", req.Header.Height))\n            }\n        }\n    }()\n\n    return res\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func (app *BaseApp) EndBlock(req abci.RequestEndBlock) (res abci.ResponseEndBlock) {\n\n    ...\n\n  defer func() {\n        // Call the streaming service hooks with the EndBlock messages\n        for _, streamingListener := range app.abciListeners {\n            if err := streamingListener.ListenEndBlock(app.deliverState.ctx, req, res); err != nil {\n                panic(sdkerrors.Wrapf(err, "EndBlock listening hook failed, height: %d", req.Height))\n            }\n        }\n  }()\n\n    return res\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func (app *BaseApp) DeliverTx(req abci.RequestDeliverTx) (res abci.ResponseDeliverTx) {\n\n    defer func() {\n        // call the hooks with the DeliverTx messages\n        for _, streamingListener := range app.abciListeners {\n            if err := streamingListener.ListenDeliverTx(app.deliverState.ctx, req, res); err != nil {\n                panic(sdkerrors.Wrap(err, "DeliverTx listening hook failed"))\n            }\n        }\n    }()\n\n    ...\n\n    return res\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'func (app *BaseApp) Commit() abci.ResponseCommit {\n    header := app.deliverState.ctx.BlockHeader()\n    retainHeight := app.GetBlockRetentionHeight(header.Height)\n\n    // Write the DeliverTx state into branched storage and commit the MultiStore.\n    // The write to the DeliverTx state writes all state transitions to the root\n    // MultiStore (app.cms) so when Commit() is called is persists those values.\n    app.deliverState.ms.Write()\n    commitID := app.cms.Commit()\n\n    res := abci.ResponseCommit{\n        Data:         commitID.Hash,\n        RetainHeight: retainHeight,\n    }\n\n    // call the hooks with the Commit message\n    for _, streamingListener := range app.abciListeners {\n        if err := streamingListener.ListenCommit(app.deliverState.ctx, res); err != nil {\n            panic(sdkerrors.Wrapf(err, "Commit listening hook failed, height: %d", header.Height))\n        }\n    }\n\n    app.logger.Info("commit synced", "commit", fmt.Sprintf("%X", commitID))\n  ...\n}\n')),(0,i.kt)("h4",{id:"error-handling-and-async-consumers"},"Error Handling And Async Consumers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ABCIListener"),"s are called synchronously inside the consensus state machine, the returned error causes panic which in turn halt the consensus state machine. The implementer should be careful not to break consensus unexpectedly or slow down it too much."),(0,i.kt)("p",null,"For some async use cases, one can spawn a go-routine internanlly to avoid slow down consensus state machine, and handle the errors internally and always returns ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," to avoid halting consensus state machine on error."),(0,i.kt)("p",null,"Furthermore, for most of the cases, we only need to use the builtin file streamer to listen to state changes directly inside cosmos-sdk, the other consumers should subscribe to the file streamer output externally."),(0,i.kt)("h4",{id:"file-streamer"},"File Streamer"),(0,i.kt)("p",null,"We provide a minimal filesystem based implementation inside cosmos-sdk, and provides options to write output files reliably, the output files can be further consumed by external consumers, so most of the state listeners actually don't need to live inside the sdk and node, which improves the node robustness and simplify sdk internals."),(0,i.kt)("p",null,"The file streamer can be wired in app like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'exposeStoreKeys := ... // decide the key list to listen\nservice, err := file.NewStreamingService(streamingDir, "", exposeStoreKeys, appCodec, logger)\nbApp.SetStreamingService(service)\n')),(0,i.kt)("h4",{id:"plugin-system"},"Plugin system"),(0,i.kt)("p",null,"We propose a plugin architecture to load and run ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamingService")," implementations. We will introduce a plugin\nloading/preloading system that is used to load, initialize, inject, run, and stop Cosmos-SDK plugins. Each plugin\nmust implement the following interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Plugin is the base interface for all kinds of cosmos-sdk plugins\n// It will be included in interfaces of different Plugins\ntype Plugin interface {\n    // Name should return unique name of the plugin\n    Name() string\n\n    // Version returns current version of the plugin\n    Version() string\n\n    // Init is called once when the Plugin is being loaded\n    // The plugin is passed the AppOptions for configuration\n    // A plugin will not necessarily have a functional Init\n    Init(env serverTypes.AppOptions) error\n\n    // Closer interface for shutting down the plugin process\n    io.Closer\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," method returns a plugin's name.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Version")," method returns a plugin's version.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Init")," method initializes a plugin with the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"AppOptions"),".\nThe io.Closer is used to shut down the plugin service."),(0,i.kt)("p",null,"For the purposes of this ADR we introduce a single kind of plugin- a state streaming plugin.\nWe will define a ",(0,i.kt)("inlineCode",{parentName:"p"},"StateStreamingPlugin")," interface which extends the above ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin")," interface to support a state streaming service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// StateStreamingPlugin interface for plugins that load a baseapp.StreamingService onto a baseapp.BaseApp\ntype StateStreamingPlugin interface {\n    // Register configures and registers the plugin streaming service with the BaseApp\n    Register(bApp *baseapp.BaseApp, marshaller codec.BinaryCodec, keys map[string]*types.KVStoreKey) error\n\n    // Start starts the background streaming process of the plugin streaming service\n    Start(wg *sync.WaitGroup) error\n\n    // Plugin is the base Plugin interface\n    Plugin\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Register")," method is used during App construction to register the plugin's streaming service with an App's BaseApp using the BaseApp's ",(0,i.kt)("inlineCode",{parentName:"p"},"SetStreamingService")," method.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Start")," method is used during App construction to start the registered plugin streaming services and maintain synchronization with them."),(0,i.kt)("p",null,"e.g. in ",(0,i.kt)("inlineCode",{parentName:"p"},"NewSimApp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func NewSimApp(\n    logger log.Logger,\n    db dbm.DB,\n    traceStore io.Writer,\n    loadLatest bool,\n    appOpts servertypes.AppOptions,\n    baseAppOptions ...func(*baseapp.BaseApp),\n) *SimApp {\n\n    ...\n\n    keys := sdk.NewKVStoreKeys(\n    authtypes.StoreKey, banktypes.StoreKey, stakingtypes.StoreKey,\n    minttypes.StoreKey, distrtypes.StoreKey, slashingtypes.StoreKey,\n    govtypes.StoreKey, paramstypes.StoreKey, ibchost.StoreKey, upgradetypes.StoreKey,\n    evidencetypes.StoreKey, ibctransfertypes.StoreKey, capabilitytypes.StoreKey,\n    )\n\n    pluginsOnKey := fmt.Sprintf("%s.%s", plugin.PLUGINS_TOML_KEY, plugin.PLUGINS_ON_TOML_KEY)\n    if cast.ToBool(appOpts.Get(pluginsOnKey)) {\n        // this loads the preloaded and any plugins found in `plugins.dir`\n        pluginLoader, err := loader.NewPluginLoader(appOpts, logger)\n        if err != nil {\n            // handle error\n        }\n\n        // initialize the loaded plugins\n        if err := pluginLoader.Initialize(); err != nil {\n            // handle error\n        }\n\n        // register the plugin(s) with the BaseApp\n        if err := pluginLoader.Inject(bApp, appCodec, keys); err != nil {\n            // handle error\n        }\n\n        // start the plugin services, optionally use wg to synchronize shutdown using io.Closer\n        wg := new(sync.WaitGroup)\n        if err := pluginLoader.Start(wg); err != nil {\n            // handler error\n        }\n    }\n\n    ...\n\n    return app\n}\n')),(0,i.kt)("h4",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The plugin system will be configured within an app's app.toml file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[plugins]\n    on = false # turn the plugin system, as a whole, on or off\n    enabled = ["list", "of", "plugin", "names", "to", "enable"]\n    dir = "the directory to load non-preloaded plugins from; defaults to cosmos-sdk/plugin/plugins"\n')),(0,i.kt)("p",null,"There will be three parameters for configuring the plugin system: ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.on"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.enabled")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.dir"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.on")," is a bool that turns on or off the plugin system at large, ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.dir")," directs the system to a directory\nto load plugins from, and ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.enabled")," provides ",(0,i.kt)("inlineCode",{parentName:"p"},"opt-in")," semantics to plugin names to enable (including preloaded plugins)."),(0,i.kt)("p",null,"Configuration of a given plugin is ultimately specific to the plugin, but we will introduce some standards here:"),(0,i.kt)("p",null,"Plugin TOML configuration should be split into separate sub-tables for each kind of plugin (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.streaming"),")."),(0,i.kt)("p",null,"Within these sub-tables, the parameters for a specific plugin of that kind are included in another sub-table (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.streaming.file"),").\nIt is generally expected, but not required, that a streaming service plugin can be configured with a set of store keys\n(e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.streaming.file.keys"),") for the stores it listens to and a flag (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.streaming.file.halt_app_on_delivery_error"),")\nthat signifies whether the service operates in a fire-and-forget capacity, or stop the BaseApp when an error occurs in\nany of ",(0,i.kt)("inlineCode",{parentName:"p"},"ListenBeginBlock"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ListenEndBlock")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ListenDeliverTx"),"."),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[plugins]\n    on = false # turn the plugin system, as a whole, on or off\n    enabled = ["list", "of", "plugin", "names", "to", "enable"]\n    dir = "the directory to load non-preloaded plugins from; defaults to "\n    [plugins.streaming] # a mapping of plugin-specific streaming service parameters, mapped to their plugin name\n        [plugins.streaming.file] # the specific parameters for the file streaming service plugin\n            keys = ["list", "of", "store", "keys", "we", "want", "to", "expose", "for", "this", "streaming", "service"]\n            write_dir = "path to the write directory"\n            prefix = "optional prefix to prepend to the generated file names"\n            halt_app_on_delivery_error = "false" # false == fire-and-forget; true == stop the application\n        [plugins.streaming.kafka]\n            keys = []\n            topic_prefix = "block" # Optional prefix for topic names where data will be stored.\n            flush_timeout_ms = 5000 # Flush and wait for outstanding messages and requests to complete delivery when calling `StreamingService.Close(). (milliseconds)\n            halt_app_on_delivery_error = true # Whether or not to halt the application when plugin fails to deliver message(s).\n        ...\n')),(0,i.kt)("h4",{id:"encoding-and-decoding-streams"},"Encoding and decoding streams"),(0,i.kt)("p",null,"ADR-038 introduces the interfaces and types for streaming state changes out from KVStores, associating this\ndata with their related ABCI requests and responses, and registering a service for consuming this data and streaming it to some destination in a final format.\nInstead of prescribing a final data format in this ADR, it is left to a specific plugin implementation to define and document this format.\nWe take this approach because flexibility in the final format is necessary to support a wide range of streaming service plugins. For example,\nthe data format for a streaming service that writes the data out to a set of files will differ from the data format that is written to a Kafka topic."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"These changes will provide a means of subscribing to KVStore state changes in real time."),(0,i.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This ADR changes the ",(0,i.kt)("inlineCode",{parentName:"li"},"CommitMultiStore")," interface, implementations supporting the previous version of these interfaces will not support the new ones")),(0,i.kt)("h3",{id:"positive"},"Positive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ability to listen to KVStore state changes in real time and expose these events to external consumers")),(0,i.kt)("h3",{id:"negative"},"Negative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Changes ",(0,i.kt)("inlineCode",{parentName:"li"},"CommitMultiStore"),"interface")),(0,i.kt)("h3",{id:"neutral"},"Neutral"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduces additional- but optional- complexity to configuring and running a cosmos application"),(0,i.kt)("li",{parentName:"ul"},"If an application developer opts to use these features to expose data, they need to be aware of the ramifications/risks of that data exposure as it pertains to the specifics of their application")))}c.isMDXComponent=!0}}]);
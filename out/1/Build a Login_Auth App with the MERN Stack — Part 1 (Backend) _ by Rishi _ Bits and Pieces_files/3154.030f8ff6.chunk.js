(self.webpackChunklite=self.webpackChunklite||[]).push([[3154],{20197:(e,n,t)=>{"use strict";t.d(n,{z:()=>i});var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UserBlockMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"targetUserId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"blockUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"targetUserId"},value:{kind:"Variable",name:{kind:"Name",value:"targetUserId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isBlocking"}}]}}]}}]}}]}},88776:(e,n,t)=>{"use strict";t.d(n,{E:()=>i});var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UserUnblockMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"targetUserId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"unblockUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"targetUserId"},value:{kind:"Variable",name:{kind:"Name",value:"targetUserId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isBlocking"}}]}}]}}]}}]}},66021:(e,n,t)=>{"use strict";t.d(n,{q:()=>h});var i=t(59713),a=t.n(i),r=t(67294),l=t(78038),o=t(6443),d=t(39727),u=t(61095),c=t(38352),s=t(93310),m=t(18627),k=t(66411),p=t(77280),v=t(43487);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(){return null},h=function(e){var n=e.hidePopover,t=void 0===n?b:n,i=e.creator,a=e.collection,f=e.postId,h=e.setIsAuthorOrPubMuted,y=e.setMutedAuthorId,N=e.setMutedPubId,I=e.isMutingFromHomeFeed,E=(i||{}).id,U=(0,u.Pd)(i).viewerEdge,S=!(null==U||!U.isMuting),w=null==a?void 0:a.id,B=(0,d.g)(a).viewerEdge,O=null==B?void 0:B.isMuting,V=(0,o.H)().value,C=i&&V&&E===V.id,D=(0,l.l)(E,w),_=D.muteAuthor,F=D.unmuteAuthor,T=D.mutePub,P=D.unmutePub,A=(0,m.Av)(),R=(0,k.pK)(),M=(0,p.PM)(),x=(0,v.v9)((function(e){return e.navigation.referrer})),j={postId:f,location:(0,v.v9)((function(e){return e.navigation.currentLocation})),referrer:x,source:R,referrerSource:M};return r.createElement(r.Fragment,null,!!i&&!C&&r.createElement(c.Sl,{key:"author-mute-popover-item-".concat(f)},r.createElement(s.r,{linkStyle:"SUBTLE",onClick:function(){var e=S?"user.unmuted":"user.muted",n=g({targetUserId:E},j);A.event(e,n),S?F():_(),h&&h(!0),I&&y&&y(E),t()}},S?"Unmute this author":"Mute this author")),!!a&&!(null!=B&&B.isEditor)&&r.createElement(c.Sl,{key:"pub-mute-popover-item-".concat(f)},r.createElement(s.r,{linkStyle:"SUBTLE",onClick:function(){var e=O?"collection.unmuted":"collection.muted",n=g({collectionId:w},j);A.event(e,n),O?P():T(),h&&h(!0),I&&N&&N(w),t()}},O?"Unmute this publication":"Mute this publication")))}},96086:(e,n,t)=>{"use strict";t.d(n,{r:()=>o});var i=t(67294),a=t(1383),r=t(77355),l=t(93310);function o(e){var n=e.onConfirm,t=e.isVisible,o=e.hide,d=e.isInResponsesSidebar;return i.createElement(a.Q,{onConfirm:n,isVisible:t,hide:o,titleText:"Block this user?",confirmText:"Block",noPortal:d,withCloseButton:!d&&void 0,isDestructiveAction:!0,isResponse:d},i.createElement(r.x,{paddingBottom:"2px"},"They will no longer be able to follow you or view your content."),i.createElement(l.r,{inline:!0,linkStyle:"OBVIOUS",target:"_blank",href:"https://help.medium.com/hc/en-us/articles/217048077-Block-a-user"},"Learn more about blocking"),".")}},96462:(e,n,t)=>{"use strict";t.d(n,{F:()=>b});var i=t(63038),a=t.n(i),r=t(67294),l=t(32493),o=t(27517),d=t(78285),u=t(20197),c=(0,o.$j)()((function(e){var n=e.children,t=e.dispatch,i=e.targetUserId,a=e.viewerId,o=e.onCompleted;return r.createElement(l.m,{mutation:u.z,onCompleted:function(){t((0,d.Dx)({message:"Successfully blocked user."})),o&&o()},variables:{targetUserId:i,userId:a},optimisticResponse:{__typename:"Mutation",blockUser:{__typename:"User",id:i,viewerEdge:{__typename:"UserViewerEdge",id:"userId:".concat(i,"-viewerId:").concat(a),isBlocking:!0}}}},(function(e){return n({mutate:e})}))})),s=t(88776),m=(0,o.$j)()((function(e){var n=e.children,t=e.dispatch,i=e.targetUserId,a=e.viewerId,o=e.onCompleted;return r.createElement(l.m,{mutation:s.E,onCompleted:function(){t((0,d.Dx)({message:"Successfully unblocked user."})),o&&o()},variables:{targetUserId:i,userId:a},optimisticResponse:{__typename:"Mutation",unblockUser:{__typename:"User",id:i,viewerEdge:{__typename:"UserViewerEdge",id:"userId:".concat(i,"-viewerId:").concat(a),isBlocking:!1}}}},(function(e){return n({mutate:e})}))})),k=t(61095),p=t(38352),v=t(96086),f=t(93310),g=t(68894),b=function(e){var n=e.hidePopover,t=e.creator,i=e.viewer,l=(t||{}).id,o=(0,k.Pd)({id:l}).viewerEdge,d=!(null==o||!o.isBlocking),u=(0,g.O)(!1),s=a()(u,3),b=s[0],h=s[1],y=s[2],N=function(){y(),n()};return r.createElement(r.Fragment,null,d?null:r.createElement(c,{targetUserId:l,viewerId:i.id,onCompleted:N},(function(e){var n=e.mutate;return r.createElement(v.r,{onConfirm:n,isVisible:b,hide:N})})),r.createElement(p.Sl,null,d?r.createElement(m,{targetUserId:l,viewerId:i.id,onCompleted:n},(function(e){var n=e.mutate;return r.createElement(f.r,{onClick:function(){n()}},"Unblock this author")})):r.createElement(f.r,{onClick:function(){h()}},"Block this author")))}},48517:(e,n,t)=>{"use strict";t.d(n,{j:()=>P});var i=t(63038),a=t.n(i),r=t(67294),l=t(32493),o=t(27517),d=t(78285),u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"reportUserLink"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"targetUserId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"alsoBlockUser"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"reportAndMaybeBlockUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"targetUserId"},value:{kind:"Variable",name:{kind:"Name",value:"targetUserId"}}},{kind:"Argument",name:{kind:"Name",value:"alsoBlockUser"},value:{kind:"Variable",name:{kind:"Name",value:"alsoBlockUser"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isBlocking"}}]}}]}}]}}]},c=(0,o.$j)()((function(e){var n=e.children,t=e.dispatch,i=e.targetUserId,a=e.viewerId,o=e.onOptimisticComplete,c=e.isBlocking;return r.createElement(l.m,{mutation:u,onCompleted:function(){t((0,d.Dx)({message:"Successfully reported user."}))}},(function(e){return n({mutate:function(n){var t=e({variables:{userId:a,targetUserId:i,alsoBlockUser:n},optimisticResponse:{__typename:"Mutation",reportAndMaybeBlockUser:{__typename:"User",id:i,viewerEdge:{__typename:"UserViewerEdge",id:"userId:".concat(i,"-viewerId:").concat(a),isBlocking:c||n}}}});return o&&o(),t}})}))})),s=t(61095),m=t(38352),k=t(34575),p=t.n(k),v=t(93913),f=t.n(v),g=t(81506),b=t.n(g),h=t(2205),y=t.n(h),N=t(78585),I=t.n(N),E=t(29754),U=t.n(E),S=t(91583),w=t(77355),B=t(61609),O=t(47230),V=t(93310),C=t(20113),D=t(90586),_=t(87691);var F=function(e){y()(a,e);var n,t,i=(n=a,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=U()(n);if(t){var a=U()(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return I()(this,e)});function a(e){var n;p()(this,a),(n=i.call(this,e)).handleAlsoBlockUserChange=function(e){n.setState({alsoBlockUser:e.target.checked})},n.handleReportClick=function(){var e=n.state.alsoBlockUser;(0,n.props.onConfirm)(e)},n.handleAlsoBlockUserChange=n.handleAlsoBlockUserChange.bind(b()(n)),n.handleReportClick=n.handleReportClick.bind(b()(n));var t=e.withBlockOption;return n.state={alsoBlockUser:!!t},n}return f()(a,[{key:"render",value:function(){var e=this.props,n=e.isVisible,t=e.hide,i=e.withBlockOption,a=this.state.alsoBlockUser;return r.createElement(S.V,{isVisible:n,hide:t},r.createElement(C.X6,{scale:"L",tag:"h1"},"Report this user?"),r.createElement(w.x,{paddingTop:"8px",paddingBottom:"24px"},r.createElement(D.QE,{scale:"M"},"This will flag this user for review with our support team."),i?r.createElement(w.x,{paddingTop:"8px"},r.createElement(B.X,{checked:a,onChange:this.handleAlsoBlockUserChange},"Also block this user. They will no longer be able to follow you or view your content.")):null),r.createElement(O.z,{buttonStyle:"OBVIOUS",onClick:this.handleReportClick},a?"Report and block":"Report"),r.createElement(w.x,{paddingLeft:"8px",display:"inline-block"},r.createElement(O.z,{buttonStyle:"SUBTLE",onClick:t},"Cancel")),r.createElement(w.x,{paddingTop:"48px"},r.createElement(_.F,{scale:"M",tag:"div"},"Report"," ",r.createElement(V.r,{href:"https://medium.com/policy/mediums-copyright-and-dmca-policy-d126f73695",linkStyle:"OBVIOUS",inline:!0},"copyright infringement")," ","or"," ",r.createElement(V.r,{href:"https://medium.com/policy/mediums-trademark-policy-e3bb53df59a7",linkStyle:"OBVIOUS",inline:!0},"trademark infringement"),".",r.createElement("br",null),"Read"," ",r.createElement(V.r,{href:"https://medium.com/policy/medium-rules-30e5502c4eb4",linkStyle:"OBVIOUS",inline:!0},"our rules"),".")))}}]),a}(r.Component),T=t(68894),P=function(e){var n=e.hidePopover,t=e.creator,i=e.viewer,l=(t||{}).id,o=(0,s.Pd)(t).viewerEdge,d=!(null==o||!o.isBlocking),u=(0,T.O)(!1),k=a()(u,3),p=k[0],v=k[1],f=k[2],g=function(){f(),n()};return r.createElement(r.Fragment,null,r.createElement(c,{targetUserId:l,viewerId:i.id,isBlocking:d,onOptimisticComplete:g},(function(e){var n=e.mutate;return r.createElement(F,{onConfirm:n,isVisible:p,hide:g,withBlockOption:!d})})),r.createElement(m.Sl,null,r.createElement(V.r,{onClick:function(){v()}},"Report this author")))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3154.030f8ff6.chunk.js.map
(self.webpackChunklite=self.webpackChunklite||[]).push([[6804],{56804:(e,t,n)=>{"use strict";n.d(t,{S:()=>Z});var i=n(59713),a=n.n(i),o=n(64718),l=n(67294),r=n(27517),s=n(54933),u=n(1249),d=n(29074),c=n(24291),p=n(78457),m=n(11098),v=n(20998),f=n(95983),b=n(75857),k=n(6443),g=n(39507),h=n(18733),C=n(26350),S=n(18627),y=n(66411),w=n(83486),O=n(43487),E=n(51681),N=n(59764),F=n(50458),P=n(13195),j=n(10654),D=n(47628),V=n(6479),I=n.n(V),x=n(75412),L=n(6342),T=n(73130),H=n(72431),A=n(32317),_=n(319),R=n.n(_),B=n(78693),M=n(21177),U={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PostVotersDialogQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingOptions"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"voterCount"}},{kind:"Field",name:{kind:"Name",value:"voters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"pagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserInListDialog_user"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"next"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"page"}}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_post"}}]}}]}}].concat(R()(B.s.definitions),R()(M.n.definitions),R()(B.S.definitions))};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.post,n=e.hide,i=e.isVisible,a=e.fetchMore,o=e.loading;if(!t)return null;var r=t.title,s=t.voters,u=t.clapCount,d=t.voterCount;return l.createElement(T.x,{isVisible:i,fetchMore:a,loading:o,hide:n,title:r,clapCount:null!=u?u:0,voterCount:null!=d?d:0,voters:s?s.items.map((function(e){var n=e.user,i=e.clapCount;return n&&l.createElement(L.F,{user:n,key:n.id,followButton:l.createElement(A.B,{buttonSize:"SMALL",post:t,user:n,susiEntry:"follow_list"}),badge:l.createElement(H.g,{clapCount:i})})})):null})};function Q(e){var t=e.postId,n=e.isVisible,i=e.hide;return n?l.createElement(x.A,{ssr:!1,query:U,variables:{postId:t,pagingOptions:{limit:10}},notifyOnNetworkStatusChange:!0},(function(e){var t,a=e.data,o=(a=void 0===a?{}:a).post,r=e.loading,s=e.error,u=e.fetchMore;if(s||null==o||!o.voters)return null;var d=o.voters.pagingInfo&&o.voters.pagingInfo.next;if(d){d.__typename;var c=I()(d,["__typename"]);t=function(){return u({variables:{pagingOptions:$($({},c),{},{limit:10})}})}}return l.createElement(z,{hide:i,fetchMore:t,post:o,isVisible:n,loading:r})})):null}var W=n(30020),Y=n(66227);function J(e){var t=e.clapCount,n=e.hasLabel,i=void 0!==n&&n,a=e.showFullNumber,o=void 0!==a&&a,r=e.post,s=e.hasDialog,u=void 0!==s&&s,d=e.shouldShowResponsiveLabelText,c=void 0!==d&&d,p=e.shouldHideClapsText,m=void 0!==p&&p,v=e.countColor,f=e.countScale,b=e.isLoading,k=void 0!==b&&b,g=r.id;if(!(t>0||k))return null;var h=function(e){var n=e.showVoters;return l.createElement(D.$,{showVoters:n,hasLabel:i,showFullNumber:o,shouldShowResponsiveLabelText:c,shouldHideClapsText:m,clapCount:t,countColor:v,countScale:f,isLoading:k})};return u&&g&&!k?l.createElement(Y.B,null,(function(e){var t=e.isVisible,n=e.show,i=e.hide;return l.createElement(l.Fragment,null,l.createElement(W._,{tooltipText:"View Claps",targetDistance:15},l.createElement(h,{showVoters:n})),t&&l.createElement(Q,{isVisible:!0,hide:i,postId:g}))})):l.createElement(h,null)}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t,n=e.post,i=e.buttonStyle,a=e.hasDialog,D=e.shouldShowResponsiveLabelText,V=void 0!==D&&D,I=e.shouldHideClapsText,x=void 0!==I&&I,L=e.shouldHideClapsCount,T=void 0!==L&&L,H=e.susiEntry,A=e.verticalClapsText,_=void 0!==A&&A,R=e.buttonColor,B=e.countScale,M=(0,o.a)(j.A,{fetchPolicy:"network-only",nextFetchPolicy:"cache-first",ssr:!1,variables:{postId:n.id}}),U=M.data,q=M.loading,$=U&&(0,N.f)(U.postResult)?U.postResult.clapCount:null,z=G(G({},n),{},{clapCount:$}),Q=(0,P.C)(),W=(0,k.H)(),Y=W.value,K=W.loading,X=null!==(t=null==Y?void 0:Y.id)&&void 0!==t?t:"",Z=(0,g.T)(n).viewerEdge,ee=(0,O.v9)((function(e){return e.config.authDomain})),te=(0,O.b$)((function(e){return e.multiVote.clapsPerPost})),ne=(0,r.I0)(),ie=(0,S.Av)(),ae=(0,y.pK)(),oe=(0,E.l)(te,z,Z),le=oe.clapCount,re=oe.viewerClapCount,se=oe.viewerHasClappedSinceFetch,ue=(0,l.useCallback)((function(){if(re&&re>=f.S2)return"Viewer exceeded authorized claps limit.";var e;e={postId:n.id,clapCount:le+1,viewerClapCount:re+1,viewerHasClappedSinceFetch:!0},ne((0,w.at)(e))}),[re,n.id,le]),de=(0,l.useCallback)((function(e){Q(z,X,e,Z),ie.event("post.clientUpvote",{postId:n.id,postIds:[n.id],voteCount:e,source:ae})}),[n.id,X,Z,ae]),ce=(0,b.m)({onIncrementClaps:ue,onSubmitClapsAccumulated:de}),pe=ce.clappedAt,me=ce.onFloatEnd,ve=ce.removeBurst,fe=ce.clap,be=ce.isPopping,ke=ce.isShowingViewerClapCount,ge=ce.burstOffsets,he=ce.onPopEnd;(0,l.useEffect)((function(){return function(){var e;e={postId:n.id},ne((0,w.HQ)(e))}}),[]);var Ce,Se=n.collection,ye=n.creator,we=n.id,Oe=n.isPublished,Ee=n.isLimitedState,Ne=(Ce=!(!ye||ye.id!==X),Ee?"This feature is temporarily disabled":Oe?Ce?"You cannot applaud your own story":void 0:"You cannot applaud a draft"),Fe=(0,f.wH)(i,V),Pe=Fe.alwaysShowClapsLabel,je=Fe.hasClapsLabel,De=Fe.buttonScale,Ve=!!(re&&re>0),Ie=!!(le&&le>0),xe=Se&&Se.slug?(0,F.JL)(ee,Se.slug,we):(0,F.kI)(ee,we);return l.createElement(d.l,{verticalClapsText:_},l.createElement(p.$,{buttonStyle:i,hasClaps:Ie||q},X||Ne||K?l.createElement(l.Fragment,null,ke&&l.createElement(h.N8,null,l.createElement(c.q,{count:re,clappedAt:pe,onFloatEnd:me})),l.createElement(v.v,{isPopping:be,onPopEnd:he},l.createElement(u.d,{buttonColor:R,disableReason:Ne,isFilled:Ve,isLoading:K||q,onClickAndHold:fe,scale:De,shouldHideClapsText:x})),ge.map((function(e){return l.createElement(s.P,{key:e,offset:e,onBurstEnd:ve})}))):l.createElement(C.R,{operation:"register",post:n,user:n.creator,actionUrl:xe,susiEntry:H},l.createElement(u.d,{scale:De,buttonColor:R}))),(Ie||q)&&!T&&(!ke||Pe)&&l.createElement(m.W,{buttonStyle:i},l.createElement(J,{post:n,clapCount:le,showFullNumber:se,hasLabel:je,hasDialog:a,shouldShowResponsiveLabelText:V,shouldHideClapsText:x,countColor:R,countScale:B,isLoading:q})))},Z=function(e){var t;return l.createElement(y.cW,{source:{postId:null===(t=e.post)||void 0===t?void 0:t.id},extendSource:!0},l.createElement(X,e))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6804.e7c3c5af.chunk.js.map
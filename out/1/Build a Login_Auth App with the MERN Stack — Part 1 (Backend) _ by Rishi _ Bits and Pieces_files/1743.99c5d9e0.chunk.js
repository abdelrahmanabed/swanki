(self.webpackChunklite=self.webpackChunklite||[]).push([[1743],{91743:(e,t,n)=>{"use strict";n.d(t,{t:()=>Q});var o=n(67294),i=n(41802),r=n(6443),l=n(39727),c=n(66227),s=n(97217),a=n(67154),u=n.n(a),d=n(59713),v=n.n(d),p=n(63038),m=n.n(p),f=n(65331),h=n(17778),g=n(78038),E=n(38352),w=n(51066),P=n(77355),I=n(93310),b=n(73917),S=n(66411),k=n(75221),O=n(77280),y=n(43487);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var x=o.createElement("path",{d:"M6.2 16.8A7.5 7.5 0 1 0 16.8 6.2 7.5 7.5 0 0 0 6.2 16.8z",stroke:"#000",strokeWidth:2,strokeLinecap:"round"}),C=o.createElement("path",{d:"M6 6l11 11",stroke:"#000",strokeWidth:2});const M=function(e){return o.createElement("svg",A({width:19,height:19,viewBox:"0 0 23 23",fill:"none"},e),x,C)};var j=n(68894),D=n(319),L=n.n(D),F=n(5977),R=n(59250),T=n(61095),U=n(18627),B=function(e){var t=e.creatorId,n=e.muteAuthor,i=e.hidePopover,r=e.eventData,l=e.isActiveExpandedPost,c=e.unfollowUser,s=(0,S.pK)(),a=(0,U.Av)(),u={id:t||""},d=(0,T.Pd)(u).viewerEdge,v=!(null==d||!d.isFollowing),p=!(null==d||!d.isMuting),m=(0,F.k6)(),f=(0,R.jM)(),h=f.mutedAuthorIds,g=f.setMutedAuthorIds,w=f.isMutingFromHomeFeed,P=o.useCallback((function(e){g([].concat(L()(h),[e]))}),[h]);return t?v?o.createElement(E.Sl,null,o.createElement(I.r,{onClick:function(){a.event("user.unfollowed",{targetUserId:t,source:s}),c(),i()}},"Unfollow this author")):p?null:o.createElement(E.Sl,null,o.createElement(I.r,{onClick:function(){a.event("user.muted",r),n(),w&&(P(t),l&&m.goBack()),i()}},"Mute this author")):null},H=n(24415),_=n(75150),N=function(e){var t=e.collectionId,n=e.hidePopover,i=e.mutePub,r=e.eventData,c=e.isActiveExpandedPost,s=e.unfollowCollection,a=(0,U.Av)(),u=(0,S.pK)(),d={id:t||""},v=(0,l.g)(d).viewerEdge,p=!(null==v||!v.isFollowing),m=!(null==v||!v.isMuting),f=(0,R.jM)(),h=f.mutedPubIds,g=f.setMutedPubIds,w=f.isMutingFromHomeFeed,P=(0,F.k6)(),b=o.useCallback((function(e){g([].concat(L()(h),[e]))}),[h]);return t?p?o.createElement(E.Sl,null,o.createElement(I.r,{onClick:function(){a.event("collection.unfollowed",{collectionId:t,followSource:u}),s(),n()}},"Unfollow this publication")):m?null:o.createElement(E.Sl,null,o.createElement(I.r,{onClick:function(){a.event("collection.muted",r),i(),w&&(b(t),c&&P.goBack()),n()}},"Mute this publication")):null},K=n(42732);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.post,n=e.creatorId,i=e.collectionId,r=e.isActiveExpandedPost,l=e.setDismissedPostId,c=e.isResponsive,s=e.hideNegativeSignalItem,a=e.popoverPositioningStrategy,d=e.hideAddToList,v=void 0===d||d,p=e.viewer,A=e.hideOnScroll,x=t.id,C=(0,j.O)(!1),D=m()(C,4),L=D[0],F=D[2],R=D[3],T=null==p?void 0:p.id,U=(0,g.l)(n,i),G=U.muteAuthor,z=U.mutePub,Q=(0,h.l)(n,i),V=Q.unfollowUser,J=Q.unfollowCollection,X=(0,S.pK)(),Y=(0,O.PM)(),Z=(0,y.v9)((function(e){return e.navigation.referrer})),q=(0,y.v9)((function(e){return e.navigation.currentLocation})),$={postId:x,location:q,referrer:Z,source:X,referrerSource:Y},ee=(0,K.c)({post:t,onShowLess:F,isActiveExpandedPost:r,collectionId:i,setDismissedPostId:l}).handleShowLess,te={kind:k.ej.POST,target:t},ne=(0,o.useCallback)((function(e){return o.createElement(E.mX,null,!s&&o.createElement(P.x,{borderBottom:"BASE_LIGHTER",paddingBottom:"4px",marginBottom:"4px"},o.createElement(E.Sl,null,o.createElement(I.r,{onClick:ee,"aria-label":"Show less like this"},o.createElement(P.x,{display:"flex",flexDirection:"row",alignItems:"center",borderBottom:void 0,ariaHidden:"true"},o.createElement(P.x,{marginRight:"4px"},o.createElement(M,null)),o.createElement(P.x,null,"Show less like this"))))),!v&&o.createElement(E.Sl,null,o.createElement(I.r,{"aria-controls":"aria-id","aria-expanded":"false",onClick:function(){F(),e()}},"Add to list")),o.createElement(_.T,{post:t,hidePopover:F}),o.createElement(B,{creatorId:n,muteAuthor:G,isActiveExpandedPost:r,hidePopover:F,eventData:W({targetUserId:n},$),unfollowUser:V}),i&&o.createElement(N,{collectionId:i,mutePub:z,isActiveExpandedPost:r,hidePopover:F,eventData:W({collection:i},$),unfollowCollection:J}),o.createElement(w.z,{postId:x,viewerId:T,targetUserId:n||"",shouldShowShortenedCopy:!0,hidePopover:F}))}),[]);return n?o.createElement(f.a,u()({},te,{viewer:p}),(function(e){var t=e.onClick;return o.createElement(b.J,{isVisible:L,positioningStrategy:a,targetDistance:10,hide:F,popoverRenderFn:function(){return ne(t)},hideOnScroll:A},o.createElement(H.c,{onClick:R,"aria-label":"More options",isResponsive:c,tooltipText:"More"}))})):null},Q=function(e){var t=e.post,n=e.isActiveExpandedPost,a=e.setDismissedPostId,u=e.isResponsive,d=e.hideNegativeSignalItem,v=e.popoverPositioningStrategy,p=e.hideAddToList,m=void 0===p||p,f=e.hideOnScroll,h=t.creator,g=t.collection,E=t.visibility,w=(0,r.H)(),P=w.loading,I=w.value,b=(0,l.g)(g).viewerEdge,S=!P&&!!I,k=!(null==b||!b.isEditor),O=(null==I?void 0:I.id)===(null==h?void 0:h.id),y=m||E===s.Wn.UNLISTED;return h&&S?k||O?o.createElement(c.B,null,(function(e){var n=e.show;return o.createElement(i.Z,{post:t,showLoadingIndicator:n,isResponsive:u,popoverPositioningStrategy:v,hideAddToList:y,hideOnScroll:f})})):o.createElement(z,{post:t,creatorId:h.id,collectionId:null==g?void 0:g.id,isActiveExpandedPost:n,setDismissedPostId:a,isResponsive:u,hideNegativeSignalItem:d,popoverPositioningStrategy:v,hideAddToList:y,viewer:I,hideOnScroll:f}):null}},42732:(e,t,n)=>{"use strict";n.d(t,{c:()=>E});var o=n(319),i=n.n(o),r=n(82492),l=n.n(r),c=n(26075),s=n(90386),a=n(67294),u=n(5977),d=n(59250),v=n(25550),p=n(18627),m=n(66411),f=n(78285),h=n(77280),g=n(43487),E=function(e){var t=e.post,n=e.onShowLess,o=e.isActiveExpandedPost,r=e.collectionId,E=e.setDismissedPostId,w=t.id,P=(0,v.r)().viewerId,I=(0,u.k6)(),b=(0,d.jM)(),S=b.setSeeLessPostIds,k=b.isMutingFromHomeFeed,O=(0,f.w)(),y=(0,c.x)().cache,A=(0,p.Av)(),x=(0,m.pK)(),C=(0,h.PM)(),M=(0,g.v9)((function(e){return e.navigation.referrer})),j=(0,g.v9)((function(e){return e.navigation.currentLocation})),D=(0,a.useRef)(null),L=(0,a.useCallback)((function(){D.current=window.setTimeout((function(){A.event("post.see_less",{userId:P,collection:r,postId:w,location:j,referrer:M,source:x,referrerSource:C})}),3e3)}),[]),F=(0,a.useCallback)((function(){null!==D.current&&window.clearTimeout(D.current)}),[]),R=(0,a.useCallback)((function(){y.modify({id:y.identify((0,s.kQ)("ROOT_QUERY")),fields:{webRecommendedFeed:function(e,t){var n=t.readField;return l()({},e,{items:e.items.filter((function(e){return(null==e?void 0:e.post)&&n("id",e.post)!==w}))})},intentionalFeed:function(e,t){var n=t.readField;return l()({},e,{items:e.items.filter((function(e){return!("HomeFeedItem"===(null==e?void 0:e.__typename)&&null!=e&&e.post&&n("id",e.post)===w)}))})}}})}),[w]);return{handleShowLess:(0,a.useCallback)((function(){L(),R(),k&&(S((function(e){return[].concat(i()(e),[w])})),o&&I.goBack(),null==E||E(w)),O({toastStyle:"USER_NEGATIVE_SIGNAL",extraParams:{onClickUndo:F}}),null==n||n()}),[])}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1743.99c5d9e0.chunk.js.map
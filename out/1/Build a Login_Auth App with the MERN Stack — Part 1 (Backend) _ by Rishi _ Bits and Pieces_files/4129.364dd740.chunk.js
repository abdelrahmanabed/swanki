(self.webpackChunklite=self.webpackChunklite||[]).push([[4129],{99171:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(67294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.18 2.6a1.82 1.82 0 0 1 3.64 0v2.07H2.18V2.6zm4.37 2.07V2.6C6.55 1.17 5.4 0 4 0a2.58 2.58 0 0 0-2.55 2.6v2.07c-.39 0-.75.17-1.03.46-.27.3-.42.7-.42 1.12v3.17a1.7 1.7 0 0 0 .42 1.12c.14.14.3.26.47.34.18.08.37.12.56.12h5.1c.39 0 .75-.17 1.03-.47.27-.3.42-.7.42-1.11V6.25a1.7 1.7 0 0 0-.42-1.12c-.14-.14-.3-.26-.47-.34a1.35 1.35 0 0 0-.56-.12z",fill:"#757575"});const l=function(e){return a.createElement("svg",i({width:8,height:11,viewBox:"0 0 8 11",fill:"none"},e),r)}},44642:(e,t,n)=>{"use strict";n.d(t,{VK:()=>k,zn:()=>b,kw:()=>E});var a,i=n(59713),r=n.n(i),l=n(63038),o=n.n(l),s=n(67294),c=n(92661),d=n(77280),u=n(92305),m=n(71341);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.Delete="delete",e.Reorder="reorder"}(a||(a={}));var f={showReorderView:!1,setShowReorderView:function(){},showBulkDeleteView:!1,setShowBulkDeleteView:function(){},moveOperations:[],deleteOperations:[],addMoveOperation:function(){},addDeleteOperation:function(){},removeDeleteOperation:function(){},resetOperations:function(){},isLoading:!1,setIsLoading:function(){},isBulkActionView:!1},g=(0,s.createContext)(f),k=function(){return(0,s.useContext)(g)},b=function(e){var t=e.children,n=(0,d.Wd)("action"),i=(0,s.useState)(n===a.Reorder),r=o()(i,2),l=r[0],c=r[1],u=(0,s.useState)(n===a.Delete),m=o()(u,2),p=m[0],v=m[1],f=(0,s.useState)([]),k=o()(f,2),b=k[0],E=k[1],h=(0,s.useState)([]),C=o()(h,2),w=C[0],x=C[1],y=(0,s.useState)(!1),S=o()(y,2),I=S[0],O=S[1],R=(0,s.useCallback)((function(e){E(b.concat({move:e}))}),[b]),D=(0,s.useCallback)((function(e){x(w.concat(e))}),[w]),V=(0,s.useCallback)((function(e){var t=w.filter((function(t){return t.entityId!==e.entityId}));x(t)}),[w]),N=(0,s.useCallback)((function(){l?E([]):x([])}),[l]);return s.createElement(g.Provider,{value:{showReorderView:l,setShowReorderView:c,showBulkDeleteView:p,setShowBulkDeleteView:v,moveOperations:b,deleteOperations:w,resetOperations:N,addMoveOperation:R,addDeleteOperation:D,removeDeleteOperation:V,isLoading:I,setIsLoading:O,isBulkActionView:l||p}},t)},E=function(e){var t=e.children,n=e.catalog,i=(0,c.di)("ShowUserList",{username:n.creator.username||"",catalogSlugId:(0,u.EJ)(n)}),r=(0,m.h)({queryParams:{action:a.Reorder}}),l=(0,m.h)({queryParams:{action:a.Delete}}),o=(0,s.useCallback)((function(){r(i)}),[r,i]),d=(0,s.useCallback)((function(){l(i)}),[l,i]);return s.createElement(g.Provider,{value:v(v({},f),{},{setShowReorderView:o,setShowBulkDeleteView:d})},t)}},97996:(e,t,n)=>{"use strict";n.d(t,{G:()=>X});var a=n(67154),i=n.n(a),r=n(63038),l=n.n(r),o=n(67294),s=n(25267),c=n(38352),d=n(73917),u=n(38356),m=n(42130),p=n(68894),v=n(59713),f=n.n(v),g=n(5977),k=n(44642),b=n(19416),E=n(13791),h=n(77355),C=n(20113),w=n(87691),x=function(e){var t=e.isVisible,n=e.hide,a=e.onConfirm,i=e.loading,r=e.confirmText,l=e.title,s=e.text,c=e.isDestructiveAction;return o.createElement(E.v,{isVisible:t,hide:n,confirmText:o.createElement(b.I,{loading:i,text:r}),isDestructiveAction:c,onConfirm:a,disableConfirm:i,hideOnConfirm:!1},o.createElement(h.x,{paddingBottom:"6px"},o.createElement(C.X6,{scale:"L"},l)),o.createElement(h.x,{paddingBottom:"32px"},o.createElement(w.F,{scale:"L"},s)))};function y(e){var t=e.isVisible,n=e.hide,a=e.deleteCatalog,i=e.loading;return o.createElement(x,{isVisible:t,hide:n,confirmText:"Delete",isDestructiveAction:!0,onConfirm:a,loading:i,title:"Delete list",text:"Deleting this list will remove it from Your library. If others have saved this list, it will also be deleted and removed from their library. Deleting this list will not delete any stories in it."})}var S=n(85208),I=function(e){var t=e.isVisible,n=e.hide,a=e.onConfirm;return o.createElement(x,{isVisible:t,hide:n,loading:!1,text:"If others have saved this list, it will be removed from their library.",confirmText:"Make private",title:"Make list private",onConfirm:a})},O=n(1109),R=n(40201),D=n(93310),V=n(61609),N=n(52069),P=n(97217);function L(e){var t=e.isVisible,n=e.hide,a=e.catalog,i=e.updateCatalog,r=e.loading,s=a.name,c=a.description,d=a.visibility,u=a.id,m=a.type,v=(0,p.O)(!1),f=l()(v,3),g=f[0],k=f[1],C=f[2],x=(0,o.useState)(s),y=l()(x,2),S=y[0],L=y[1],T=(0,o.useState)(!!c),B=l()(T,2),j=B[0],A=B[1],F=(0,o.useState)(c),M=l()(F,2),H=M[0],U=M[1],z=(0,o.useState)(d),_=l()(z,2),G=_[0],Q=_[1],q=a.type===P.HQ.PREDEFINED_LIST,K=(0,o.useCallback)((function(e){L(e.target.value)}),[]),Y=(0,o.useCallback)((function(e){U(e.target.value)}),[]),X=(0,o.useCallback)((function(){Q((function(e){return e===P.n2.PRIVATE?P.n2.PUBLIC:P.n2.PRIVATE}))}),[]),Z=(0,o.useCallback)((function(){var e=S.trim(),t=null==H?void 0:H.trim();i({variables:{catalogId:u,attributes:{type:m,title:e!==s?e:null,description:t!==c?t:null,visibility:G!==d?G:null}}})}),[S,H,G,i,u,m,s,c,d]),J=(0,o.useCallback)((function(){G===P.n2.PRIVATE&&d===P.n2.PUBLIC?k():Z()}),[Z,k,G,d]),W=(0,o.useCallback)((function(){C(),Z()}),[C,Z]),$=S.trim(),ee=(null!==H?H.trim():null)===c&&$===s&&G===d;return g?o.createElement(I,{hide:C,onConfirm:W,isVisible:!0}):o.createElement(E.v,{isVisible:t,hide:n,confirmText:o.createElement(b.I,{loading:r}),isDestructiveAction:!1,onConfirm:J,disableConfirm:!q&&!$||r||ee||(0,O.G6)(S)||(0,O.z6)(H),hideOnConfirm:!1},o.createElement(h.x,{height:"400px"},o.createElement(h.x,{paddingBottom:"60px"},o.createElement(N.Dx,{scale:"L"},"Edit list")),o.createElement(h.x,{textAlign:"left",width:"400px",sm:{width:"100%"}},!q&&o.createElement(h.x,{paddingBottom:"20px"},o.createElement(R.n,{value:S,onChange:K,placeholder:"Give it a name",characterCountLimit:O.lp})),o.createElement(h.x,{paddingBottom:"20px"},j?o.createElement(h.x,{maxHeight:"170px",overflow:"auto"},o.createElement(R.n,{value:null!=H?H:void 0,onChange:Y,placeholder:"Description",isMultiline:!0,autoFocus:!0,characterCountLimit:O.B0})):o.createElement(D.r,{onClick:function(){return A(!0)}},o.createElement(w.F,{scale:"L",color:"ACCENT"},"Add a description"))),o.createElement(h.x,null,o.createElement(V.X,{checked:G===P.n2.PRIVATE,onChange:X,textScale:"L"},"Make it private")))))}var T=n(75675),B=n(70533),j=n(92661),A=n(78285),F=n(43487),M=n(71341),H=n(50458);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){var t=(0,p.O)(!1),n=l()(t,3),a=n[0],i=n[1],r=n[2];return[a,i,(0,o.useCallback)((function(){r(),e()}),[r,e])]}var G=function(e){var t=e.catalog,n=e.viewer,a=e.ariaExpanded,i=e.ariaId,r=e.hidePopover,s=t.visibility,d=t.id,u=t.name,m=t.description,p=t.type,v=t.postItemsCount,f=t.disallowResponses,b=(0,k.VK)(),E=b.setShowReorderView,h=b.setShowBulkDeleteView,C=(0,F.v9)((function(e){return e.config.authDomain})),x=(0,A.w)(),O=(0,g.TH)(),R=(0,j.$B)(O.pathname),V="user-catalog"===(null==R?void 0:R.route.mediumAppPage),N=(0,M.h)(),U=(0,j.uk)(),G=(0,j.qt)("ShowYourLists",{}),Q=(0,B.sK)(d),q=l()(Q,2),K=q[0],Y=q[1],X=Y.loading,Z=Y.error,J=(0,B.qz)(d),W=l()(J,2),$=W[0],ee=W[1],te=ee.loading,ne=ee.error,ae=_(r),ie=l()(ae,3),re=ie[0],le=ie[1],oe=ie[2],se=_(r),ce=l()(se,3),de=ce[0],ue=ce[1],me=ce[2],pe=_(r),ve=l()(pe,3),fe=ve[0],ge=ve[1],ke=ve[2],be=_(r),Ee=l()(be,3),he=Ee[0],Ce=Ee[1],we=Ee[2],xe=(0,S.O2)(t,oe,(function(e){window.history.replaceState(null,window.document.title,(0,H.yk)(z(z({},t),{},{name:e}),C))})),ye=l()(xe,2),Se=ye[0],Ie=ye[1],Oe=Ie.loading,Re=Ie.error,De=(0,o.useCallback)((function(){V&&(t.creator.username?N(U("ShowUserLists",{username:t.creator.username})):window.location.assign(G))}),[G,V,t.creator.username]),Ve=(0,S.h6)({catalog:t,userId:n.id,onCompleted:De}),Ne=Ve.deleteCatalog,Pe=Ve.loading,Le=Ve.error,Te=(0,o.useCallback)((function(){we(),Oe||Se({variables:{catalogId:d,attributes:{title:u,type:p,visibility:s===P.n2.PRIVATE?P.n2.PUBLIC:P.n2.PRIVATE,description:m}}})}),[d,u,s,Se,Oe,m,p,we]),Be=(0,o.useCallback)((function(){s===P.n2.PUBLIC?Ce():Te()}),[Te,s,Ce]),je=(0,o.useCallback)((function(){r(),E(!0)}),[r]),Ae=(0,o.useCallback)((function(){r(),h(!0)}),[r]);(0,o.useEffect)((function(){(Re||Le||Z||ne)&&x({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[Re,Le,Z,ne,x]);var Fe=(0,o.useCallback)((function(){X||(K(),r())}),[X,r]),Me=(0,o.useCallback)((function(){te||($(),r())}),[te,r]);return o.createElement(o.Fragment,null,o.createElement(c.Sl,null,o.createElement(L,{isVisible:re,hide:oe,catalog:t,updateCatalog:Se,loading:Oe}),o.createElement(D.r,{"aria-controls":i,"aria-expanded":a,onClick:le},"Edit list info")),v>1&&o.createElement(c.Sl,null,o.createElement(D.r,{"aria-controls":i,"aria-expanded":a,onClick:Ae},"Remove items")),o.createElement(c.Sl,null,o.createElement(D.r,{"aria-controls":i,"aria-expanded":a,onClick:Be},"Make list ",s===P.n2.PUBLIC?"private":"public")),v>1&&o.createElement(c.Sl,null,o.createElement(D.r,{"aria-controls":i,"aria-expanded":a,onClick:je},"Reorder items")),o.createElement(c.Sl,null,o.createElement(T.w,{isVisible:fe,hide:ke,onConfirm:Fe,entityTypename:"Catalog"}),o.createElement(D.r,{"aria-controls":i,"aria-expanded":a,onClick:f?Me:ge},f?"Show responses":"Hide responses")),t.type!==P.HQ.PREDEFINED_LIST&&o.createElement(c.Sl,null,o.createElement(y,{isVisible:de,hide:me,deleteCatalog:Ne,loading:Pe}),o.createElement(D.r,{"aria-controls":i,"aria-expanded":a,onClick:ue},o.createElement(w.F,{scale:"M",color:"ERROR"},"Delete list"))),o.createElement(I,{isVisible:he,hide:we,onConfirm:Te}))},Q=n(18627),q=n(66411),K=function(e){var t=e.catalog,n=e.ariaExpanded,a=e.hidePopover,i=t.id,r=t.viewerEdge.clapCount,l=(0,S.ok)().clapCatalog,s=(0,S.es)().flagCatalog,d=(0,Q.Av)(),u=(0,q.pK)(),m=o.useCallback((function(){r&&(l({catalogId:i,numClaps:-r}),d.event("list.clientUnvote",{listId:i,unvoteCount:r,source:u}),a())}),[i,r,u,l,a]),p=o.useCallback((function(){s({catalogId:i}),a()}),[i,s,a]);return o.createElement(o.Fragment,null,o.createElement(c.mX,null,0!==r&&o.createElement(c.Sl,null,o.createElement(D.r,{onClick:m,"aria-expanded":n},"Undo applause for this list")),o.createElement(c.Sl,null,o.createElement(D.r,{onClick:p,"aria-expanded":n},"Report this list"))))},Y=function(e){var t=e.catalog,n=e.viewer,a=e.isResponsive,i=(0,p.O)(!1),r=l()(i,4),s=r[0],v=r[2],f=r[3],g="catalogContentMenu",k=s?"true":"false",b=n.id===t.creator.id,E=o.useCallback((function(){return o.createElement(c.mX,null,b?o.createElement(G,{catalog:t,ariaExpanded:k,ariaId:g,hidePopover:v,viewer:n}):o.createElement(K,{catalog:t,ariaExpanded:k,hidePopover:v}))}),[b,t,k,v,n]);return o.createElement(d.J,{ariaId:g,isVisible:s,hide:v,popoverRenderFn:E},o.createElement(u.u,{onClick:f,"aria-label":"More options",icon:o.createElement(m.Z,null),text:a?"More":void 0,tooltipText:"More"}))},X=function(e){return o.createElement(s.I,null,(function(t){return t?o.createElement(Y,i()({viewer:t},e)):null}))}},24129:(e,t,n)=>{"use strict";n.d(t,{l:()=>P});var a=n(67294),i=n(44642),r=n(97996),l=n(83263),o=n(84739),s=n(1109),c=n(10648),d=n(14818),u=n(77355),m=n(93310),p=n(27323),v=n(30020),f=n(87691),g=n(52069),k=n(18627),b=n(66411),E=n(14646),h=n(18122),C=n(92661),w=n(97217),x=n(99171),y=n(92305),S=n(87498),I=function(e){var t=e.catalog.listItemsConnection.items,n=(0,l.Q)(),i={xs:140,sm:166,md:90,lg:166},r={xs:105,sm:105,md:144,lg:144};return a.useMemo((function(){return a.createElement(l.f,{coverHeight:r[n],coverWidth:i[n],catalogItems:t,isEmbeded:!0})}),[n,t])},O=n(65968),R=n(64238),D=function(e){return{marginBottom:"1px","& path":{fill:e.baseColor.text.lighter}}},V={position:"absolute",inset:"0",border:"none"},N={pointerEvents:"none"},P=function(e){var t=e.catalog,n=e.titleClamp,P=void 0===n?2:n,L=e.maxWidth,T=void 0===L?{xs:"100%",sm:"100%",md:"740px",lg:"740px",xl:"740px"}:L,B=e.marginBottom,j=void 0===B?"40px":B,A=t.name,F=t.visibility,M=t.id,H=t.predefined,U=t.creator,z=(0,s.SZ)(t),_=F!==w.n2.PUBLIC,G=H?(0,y.S6)(H):A,Q=(0,k.Av)(),q=(0,b.pK)(),K=(0,l.Q)(),Y=(0,h.g)({onPresentedFn:function(){Q.event("list.presented",{listId:t.id,source:q})}}),X=(0,E.I)(),Z="sm"===K||"xs"===K,J=(0,C.qt)("ShowUserList",{username:t.creator.username||"",catalogSlugId:(0,y.EJ)(t)}),W=(0,o.B)(U),$=(0,R.o)(U);return a.createElement(u.x,{ref:Y,border:"BASE_LIGHTER",borderRadius:"4px",marginBottom:j,maxWidth:T,width:"100%",display:"flex",justifyContent:"space-between",backgroundColor:"BASE_LIGHT",flexDirection:Z?"column":"row",position:"relative"},a.createElement(m.r,{href:J,rules:V}),a.createElement(u.x,{key:M,display:"flex",flexDirection:"column",padding:"24px 24px 10px",flexGrow:"1",flexShrink:"0",flexBasis:"0",justifyContent:"space-between",wordBreak:"break-word"},a.createElement(p.P,{href:W},a.createElement(u.x,{display:"flex"},a.createElement(d.z,{miroId:U.imageId||S.gG,alt:U.name||"",diameter:20,freezeGifs:!0}),a.createElement(u.x,{paddingLeft:"8px",zIndex:"1",display:"flex",alignItems:"center"},a.createElement(f.F,{scale:"M",color:"DARKER",clamp:1},U.name),$&&U.id&&a.createElement(O.G,{marginLeft:"2px",marginTop:"2px",size:"S",userId:U.id})))),a.createElement(u.x,{marginTop:"12px"},a.createElement(g.Dx,{clamp:P,scale:{xs:"XS",sm:"XS",md:"S",lg:"S",xl:"S"}},G)),a.createElement(u.x,{display:"flex",alignItems:"center",justifyContent:"space-between"},a.createElement(u.x,{display:"flex",margin:"6px 0"},a.createElement(f.F,{scale:"S",color:"LIGHTER"},z||"No stories"),_&&a.createElement(u.x,{paddingLeft:"8px"},a.createElement(x.Z,{className:X(D)}))),a.createElement(u.x,{display:"flex",position:"relative"},a.createElement(c.b,{catalog:t}),a.createElement(i.kw,{catalog:t},a.createElement(v._,{tooltipText:"More",targetDistance:10},a.createElement(r.G,{catalog:t})))))),a.createElement("div",{className:X(N)},a.createElement(I,{catalog:t})))}},70533:(e,t,n)=>{"use strict";n.d(t,{qz:()=>u,sK:()=>d,SM:()=>m,VC:()=>p});var a=n(63038),i=n.n(a),r=n(21919),l=n(97217),o=n(78285),s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateCatalogLockResponsesMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"attributes"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UpdateCatalogInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}},{kind:"Argument",name:{kind:"Name",value:"attributes"},value:{kind:"Variable",name:{kind:"Name",value:"attributes"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"responsesLocked"}}]}}]}}]}}]},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateCatalogDisallowResponsesMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"attributes"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UpdateCatalogInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}},{kind:"Argument",name:{kind:"Name",value:"attributes"},value:{kind:"Variable",name:{kind:"Name",value:"attributes"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"disallowResponses"}}]}}]}}]}}]},d=function(e){var t=(0,o.w)();return(0,r.D)(c,{variables:{catalogId:e,attributes:{type:l.HQ.LISTS,disallowResponses:!0}},onCompleted:function(){t({message:"Responses are now hidden for this list."})}})},u=function(e){var t=(0,o.w)();return(0,r.D)(c,{variables:{catalogId:e,attributes:{type:l.HQ.LISTS,disallowResponses:!1}},onCompleted:function(){t({message:"Responses are now shown for this list."})}})},m=function(e,t,n,a){var o=(0,r.D)(s,{variables:{catalogId:a,attributes:{type:l.HQ.LISTS,responsesLocked:!0}},onCompleted:function(){e.event("responses.locked",{catalogId:a,source:t}),n()}});return i()(o,1)[0]},p=function(e,t){var n=(0,r.D)(s,{variables:{catalogId:t,attributes:{type:l.HQ.LISTS,responsesLocked:!1}},onCompleted:function(){e()}});return i()(n,1)[0]}},10648:(e,t,n)=>{"use strict";n.d(t,{b:()=>C});var a=n(67294),i=n(85208),r=n(6443),l=n(26350),o=n(77355),s=n(30020),c=n(38356),d=n(92661),u=n(45550);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=a.createElement("path",{d:"M17.5 3.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7.75z",fill:"currentColor"}),v=a.createElement("path",{d:"M10.5 2.75h-6a2 2 0 0 0-2 2v11.5",stroke:"currentColor",strokeLinecap:"round"});const f=function(e){return a.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),p,v)};var g=n(92305),k=n(78870),b=function(e){var t,n=e.isFollowing,i=e.isResponsive,r=e.onClick,l=e.disabled;return i&&(t=n?"Remove from Your library":"Save list"),a.createElement(c.u,{onClick:r,text:t,icon:n?a.createElement(u.Z,null):a.createElement(f,null),disabled:l,tooltipText:n?"Remove from Your library":"Save list"})},E=function(e){var t=e.catalog,n=e.viewerId,r=e.isResponsive,l=(0,i.Yz)(n,t.id),o=l.followCatalog,s=l.loading,c=(0,i.mC)(n,t.id),d=c.unfollowCatalog,u=c.loading,m=t.viewerEdge.isFollowing,p=m?d:o;return a.createElement(b,{onClick:p,disabled:s||u,isResponsive:r,isFollowing:m})},h=function(e){var t=e.catalog,n=e.isResponsive,i=(0,d.qt)("ShowUserList",{username:t.creator.username||"",catalogSlugId:(0,g.EJ)(t)}),r=(0,k.Rk)(i,{save_list:"true"});return a.createElement(l.R,{operation:"register",susiEntry:"follow_list",redirectTo:r},a.createElement(b,{isResponsive:n}))},C=function(e){var t=e.catalog,n=e.marginLeft,i=e.marginRight,l=void 0===i?"8px":i,c=e.isResponsive,d=(0,r.H)(),u=d.value;return d.loading||t.creator.id===(null==u?void 0:u.id)?null:a.createElement(o.x,{marginLeft:n,marginRight:l,flexShrink:"0"},a.createElement(s._,{tooltipText:t.viewerEdge.isFollowing?"Remove from Your library":"Save list",targetDistance:10},u?a.createElement(E,{catalog:t,viewerId:u.id,isResponsive:c}):a.createElement(h,{catalog:t,isResponsive:c})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/4129.364dd740.chunk.js.map
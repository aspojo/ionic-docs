(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[21740],{50696:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var a=o(22122),n=o(19756),s=(o(67294),o(3905)),r={sidebar_label:"Overlays"},i={unversionedId:"react/overlays",id:"react/overlays",isDocsHomePage:!1,title:"Using Overlay Components in React",description:"For Ionic React, there are two techniques you can use to display overlay components like modals, alerts, action sheets, etc. In this guide, we will go over both of them.",source:"@site/docs/react/overlays.md",sourceDirName:"react",slug:"/react/overlays",permalink:"/docs/react/overlays",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react/overlays.md",version:"current",sidebar_label:"Overlays",frontMatter:{sidebar_label:"Overlays"},sidebar:"docs",previous:{title:"Progressive Web Apps in React",permalink:"/docs/react/pwa"},next:{title:"Data Storage",permalink:"/docs/react/storage"}},l=[{value:"Overlay Hooks",id:"overlay-hooks",children:[]},{value:"Overlay Components",id:"overlay-components",children:[]},{value:"Docs for Overlays in Ionic",id:"docs-for-overlays-in-ionic",children:[]}],p={toc:l};function c(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"For Ionic React, there are two techniques you can use to display overlay components like modals, alerts, action sheets, etc. In this guide, we will go over both of them."),(0,s.kt)("h2",{id:"overlay-hooks"},"Overlay Hooks"),(0,s.kt)("p",null,"Starting in Ionic React 5.6, we introduced new React hooks you can use to control displaying and dismissing overlays. These hooks provide a programmatic way of controlling the overlays, as well as a way to use overlays outside of your Ionic Page without the need of a state management system."),(0,s.kt)("p",null,"To use one of the overlay hooks, you import the hook for the overlay you want to use from ",(0,s.kt)("inlineCode",{parentName:"p"},"@ionic/react"),". For example, if we want to use the Alert overlay, we import ",(0,s.kt)("inlineCode",{parentName:"p"},"useIonAlert"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useIonAlert } from '@ionic/react';\n")),(0,s.kt)("p",null,"The hooks return an array, where the first item in the array is the method to present the hook, and the second is the method to dismiss the hook:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const [showAlert, hideAlert] = useIonAlert();\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Overlays often dismiss themselves when the user is done interacting with them, so you might not need to use dismiss/hide method. ")),(0,s.kt)("p",null,"To display the overlay, you use the present method, which we destructured to the name ",(0,s.kt)("inlineCode",{parentName:"p"},"showAlert"),". The method takes in a set of parameters that vary depending on each overlay, but generally, they can either take in a simple set of common parameters or an object to specify additional options."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"showAlert('Hello!', [{ text: 'Ok' }])\n")),(0,s.kt)("p",null,"For ",(0,s.kt)("inlineCode",{parentName:"p"},"useIonAlert"),", the first parameter is the message to display, and the second is an array of ",(0,s.kt)("inlineCode",{parentName:"p"},"AlertButtons")," to customize the buttons the alert will show."),(0,s.kt)("p",null,"Alternatively, you can pass in an AlertOptions config object to provide additional parameters, such as a CSS class to add to the markup, a header for the alert, and a callback that gets called when the alert is dismissed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"showAlert({\n  cssClass: 'my-css',\n  header: 'Alert',\n  message: 'Hello!',\n  buttons: [\n    'Cancel',\n    { text: 'Ok', handler: (d) => console.log('ok pressed') },\n  ],\n  onDidDismiss: (e) => console.log('alert dismiss'),\n})\n")),(0,s.kt)("p",null,"Overlay hooks that display additional custom components as part of their markup, such as ",(0,s.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/modal"},"modals")," and ",(0,s.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/popover"},"popovers"),", take in a couple of additional parameters when initializing their hooks. The first parameter is the component you want your overlay to display, and the second is an object of additional props you want to pass into the component when it gets constructed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const [present, dismiss] = useIonModal(({name}) => <div>Hello {name}.</div>, {\nname: 'Dave'\n});\n")),(0,s.kt)("h2",{id:"overlay-components"},"Overlay Components"),(0,s.kt)("p",null,"Overlays can also be displayed by using components from ",(0,s.kt)("inlineCode",{parentName:"p"},"@ionic/react"),". The components take a ",(0,s.kt)("inlineCode",{parentName:"p"},"isOpen")," prop that you provide to control if the overlay is currently being displayed or not. When  ",(0,s.kt)("inlineCode",{parentName:"p"},"isOpen")," switches from true to false (and vise versa), Ionic will open/close the overlay with the appropriate animation. You can also supply any other additional config options as props to the overlay:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"<IonAlert\n  isOpen={showAlert}\n  message=\"Hello!\"\n  buttons={[{ text: 'Ok' }]}\n  onDidDismiss={() => setShowAlert(false)}\n/>\n")),(0,s.kt)("p",null,"Above, the ",(0,s.kt)("inlineCode",{parentName:"p"},"showAlert")," boolean is a piece of state provided from your application. "),(0,s.kt)("p",null,"When the overlay is dismissed, it is important to tie into the  ",(0,s.kt)("inlineCode",{parentName:"p"},"onDidDismiss")," callback and set your state variable to indicate that the overlay is no longer presenting. Ionic React looks for changes to the ",(0,s.kt)("inlineCode",{parentName:"p"},"isOpen")," prop to determine if the overlay should be displayed or not."),(0,s.kt)("p",null,"For overlays that display custom components, such as ",(0,s.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/modal"},"modals")," and ",(0,s.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/popover"},"popovers"),", you provide the component as a child to the overlay component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"<IonModal isOpen={showModal}>\n  <div>Hello!</div>\n</IonModal>\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Overlay Components are still a valid way of displaying overlays and are in no way a deprecated method. Use whichever method best fits your application.")),(0,s.kt)("h2",{id:"docs-for-overlays-in-ionic"},"Docs for Overlays in Ionic"),(0,s.kt)("p",null,"For full docs and to see usage examples for both the hook and component approach, visit the docs page for each of the overlays in Ionic:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/action-sheet"},"Action Sheet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/modal#usage"},"Alert")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/loading"},"Loading")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/modal"},"Modal")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/picker"},"Picker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/popover"},"Popover")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/toast"},"Toast"))))}c.isMDXComponent=!0}}]);
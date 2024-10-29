(()=>{"use strict";const e=window.wp.blocks;function t(e){var i,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(i=0;i<s;i++)e[i]&&(n=t(e[i]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const i=function(){for(var e,i,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(i=t(e))&&(r&&(r+=" "),r+=i);return r},n=window.wp.i18n,r=window.wp.blockEditor,s=window.wp.components,o=window.ReactJSXRuntime,l=JSON.parse('{"UU":"tzm/copyright"}'),a=(0,o.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[(0,o.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,o.jsx)("path",{d:"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3c1.82 0 3.413.973 4.288 2.428l-1.714 1.029A3 3 0 1 0 12 15a2.998 2.998 0 0 0 2.573-1.456l1.715 1.028A4.999 4.999 0 0 1 7 12c0-2.76 2.24-5 5-5z"})]});(0,e.registerBlockType)(l.UU,{icon:a,example:{attributes:{prefix:"All rights reserved.",suffix:"My Company"}},save:function({attributes:e}){const{align:t,prefix:n,suffix:s}=e,l=r.useBlockProps.save({className:i({[`has-text-align-${t}`]:t})});return(0,o.jsxs)("div",{...l,children:[(0,o.jsx)("span",{className:"wp-block-tzm-copyright__prefix",children:(0,o.jsx)(r.RichText.Content,{value:n})}),(0,o.jsx)("span",{className:"wp-block-tzm-copyright__year",children:" © {%YYYY%} "}),(0,o.jsx)("span",{className:"wp-block-tzm-copyright__suffix",children:(0,o.jsx)(r.RichText.Content,{value:s})})]})},edit:function({attributes:e,setAttributes:t,isSelected:l}){const{align:a,prefix:c,suffix:p,yearFormat:g,isRange:x,startingYear:h}=e,m=(new Date).getFullYear().toString();let u="y"===g?"'"+m.slice(-2):m;x&&h&&h!==m&&(u=("y"===g?"'"+h.toString().slice(-2):h)+" - "+u);const d=(0,r.useBlockProps)({className:i({[`has-text-align-${a}`]:a})});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.InspectorControls,{children:(0,o.jsxs)(s.PanelBody,{title:(0,n.__)("Date settings","tzm-copyright-block"),children:[(0,o.jsx)(s.PanelRow,{children:(0,o.jsxs)(s.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:(0,n.__)("Year format","tzm-copyright-block"),value:g,onChange:e=>t({yearFormat:e}),isBlock:!0,children:[(0,o.jsx)(s.__experimentalToggleGroupControlOption,{value:"Y",label:(0,n.__)("Four digits","tzm-copyright-block")}),(0,o.jsx)(s.__experimentalToggleGroupControlOption,{value:"y",label:(0,n.__)("Two digits","tzm-copyright-block")})]})}),(0,o.jsx)(s.PanelRow,{children:(0,o.jsx)(s.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,n.__)("Display range","tzm-copyright-block"),checked:x,onChange:()=>t({isRange:!x})})}),!!x&&(0,o.jsx)(s.PanelRow,{children:(0,o.jsx)(s.__experimentalNumberControl,{__next40pxDefaultSize:!0,label:(0,n.__)("Starting year","tzm-copyright-block"),min:1980,max:m,value:h,onChange:e=>t({startingYear:e}),required:!0})})]})}),(0,o.jsx)(r.BlockControls,{group:"block",children:(0,o.jsx)(r.AlignmentControl,{value:a,onChange:e=>t({align:e})})}),(0,o.jsxs)("div",{...d,children:[(l||c)&&(0,o.jsx)(r.RichText,{identifier:"prefix",placeholder:"...",tagName:"span",className:"wp-block-tzm-copyright__prefix",value:c,onChange:e=>t({prefix:e}),disableLineBreaks:!0}),(0,o.jsx)("span",{className:"wp-block-tzm-copyright__year",children:" © "+u+" "}),(l||p)&&(0,o.jsx)(r.RichText,{identifier:"suffix",placeholder:"...",tagName:"span",className:"wp-block-tzm-copyright__suffix",value:p,onChange:e=>t({suffix:e}),disableLineBreaks:!0})]})]})}})})();
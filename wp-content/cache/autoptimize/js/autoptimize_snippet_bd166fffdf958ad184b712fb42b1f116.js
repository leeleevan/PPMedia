!function(s){var n=function(t,e){function r(){s.each(t.classList,function(){var t=function(t){return t.substr(0,u.classPrefixLength)===u.classPrefix?t.substr(u.classPrefixLength):null}(this);if(t)return function(t){i.on("click",function(){l(t)})}(t),!1})}var i,u={},l=function(t){var e="";if(u.width&&u.height){var r=screen.width/2-u.width/2,i=screen.height/2-u.height/2;e="toolbar=0,status=0,width="+u.width+",height="+u.height+",top="+i+",left="+r}var l=function(t){var e=n.networkTemplates[t].replace(/{([^}]+)}/g,function(t,e){return u[e]});return"email"===t&&e.indexOf("?subject=&body")&&(e=e.replace("subject=&","")),encodeURI(e)}(t),s=/^https?:\/\//.test(l);open(l,s?"":"_self",e)};s.extend(u,n.defaultSettings,e),["title","text"].forEach(function(t){u[t]=u[t].replace("#","")}),u.classPrefixLength=u.classPrefix.length,i=s(t),r()};n.networkTemplates={twitter:"https://twitter.com/intent/tweet?url={url}&text={text}",pinterest:"https://www.pinterest.com/pin/create/button/?url={url}",facebook:"https://www.facebook.com/sharer.php?u={url}",vk:"https://vkontakte.ru/share.php?url={url}&title={title}&description={text}&image={image}",linkedin:"https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={text}&source={url}",odnoklassniki:"https://connect.ok.ru/offer?url={url}&title={title}&imageUrl={image}",tumblr:"https://tumblr.com/share/link?url={url}",delicious:"https://del.icio.us/save?url={url}&title={title}",google:"https://plus.google.com/share?url={url}",digg:"https://digg.com/submit?url={url}",reddit:"https://reddit.com/submit?url={url}&title={title}",stumbleupon:"https://www.stumbleupon.com/submit?url={url}",pocket:"https://getpocket.com/edit?url={url}",whatsapp:"https://api.whatsapp.com/send?text=*{title}*\n{text}\n{url}",xing:"https://www.xing.com/app/user?op=share&url={url}",print:"javascript:print()",email:"mailto:?subject={title}&body={text}\n{url}",telegram:"https://telegram.me/share/url?url={url}&text={text}",skype:"https://web.skype.com/share?url={url}"},n.defaultSettings={title:"",text:"",image:"",url:location.href,classPrefix:"s_",width:640,height:480},s.fn.shareLink=function(t){return this.each(function(){s(this).data("shareLink",new n(this,t))})}}(jQuery);
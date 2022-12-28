import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-67824860-7","auto");ga("send","pageview");`,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(e){function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function b(a){this.options=d({},this.options);d(this.options,a);this._init()}b.prototype.options={wrapper:document.body,message:"yo!",layout:"growl",effect:"slide",type:"error",ttl:6E3,onClose:function(){return!1},onOpen:function(){return!1}};b.prototype._init=function(){this.ntf=document.createElement("div");this.ntf.className="ns-box ns-"+this.options.layout+" ns-effect-"+this.options.effect+" ns-type-"+this.options.type;
 this.ntf.innerHTML='<div class="ns-box-inner">'+this.options.message+'</div><span class="ns-close"></span></div>';this.options.wrapper.insertBefore(this.ntf, this.options.wrapper.nextSibling);var a=this;this.dismissttl=setTimeout(function(){a.active&&a.dismiss()},this.options.ttl);this._initEvents()};b.prototype._initEvents=function(){var a=this;this.ntf.querySelector(".ns-close").addEventListener("click",function(){a.dismiss()})};b.prototype.show=function(){this.active=!0;this.ntf.classList.remove("ns-hide");
 this.ntf.classList.add("ns-show");this.options.onOpen()};b.prototype.dismiss=function(){var a=this;this.active=!1;clearTimeout(this.dismissttl);this.ntf.classList.remove("ns-show");setTimeout(function(){a.ntf.classList.add("ns-hide");a.options.onClose()},25);var b=function(c){if(c.target!==a.ntf)return!1;this.removeEventListener("animationend",b);a.options.wrapper.removeChild(this)};this.ntf.addEventListener("animationend",b)};e.NotificationFx=b})(window);`,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default CustomDocument

(function(){var p,u,v,w;v={coffeescript_js:"http://code.alecperkins.net/coffeetable/lib/coffee_script-1.1.1-min.js",style:{position:"fixed",top:"5px",right:"5px"},local_storage:true,ls_key:"coffee-table",multi_line:false,indent:"    ",auto_suggest:true};typeof console!=="undefined"&&console!==null||(console={log:function(){},dir:function(){}});window.log=function(){return console.log.apply(console,arguments)};window.dir=function(){return console.dir.apply(console,arguments)};p=window.jQuery;u=function(){function k(c){var g,
b;if(c==null)c={};h=v;for(g in c){b=c[g];h[g]=b}m={widget:{position:""+h.style.position,top:""+h.style.top,right:""+h.style.right,background:"rgba(255,255,255,0.9)",padding:"0",border:"2px solid white","z-index":"9999999","box-shadow":"0px 0px 4px #222","-moz-box-shadow":"0px 0px 4px #222","-webkit-box-shadow":"0px 0px 4px #222","font-size":"12px","max-height":"95%","max-width":"900px"},button:{"float":"right",background:"white",border:"1px solid #ccc",color:"#991111",cursor:"pointer"},button_active:{background:"#991111",
color:"white"},textarea:{"font-family":"monospace","font-size":"15px","min-width":"400px",height:"22px",margin:"4px"},div:{display:"none"},CTHistory:{margin:"8px",padding:"4px 4px 4px 16px","font-family":"monospace","list-style-type":"circle","overflow-y":"scroll","max-height":""+(window.innerHeight-140)+"px"},li:{padding:"4px 4px 4px 4px",cursor:"pointer"},span:{padding:"4px","text-align":"center",cursor:"pointer","float":"left",color:"#555","font-variant":"small-caps",display:"none"},a:{padding:"4px",
"text-align":"center",cursor:"pointer","float":"right",color:"#555","font-variant":"small-caps"},input:{"vertical-align":"middle"},p:{padding:"4px",margin:"0","float":"right",display:"inline-block",width:"80px",color:"#555","font-variant":"small-caps",display:"none","text-align":"right"},CTAutocomplete:{position:"absolute",top:"-14px",left:"-300px",display:"block",background:"rgba(255,255,255,0.9)","box-shadow":"0px 0px 4px #222","-moz-box-shadow":"0px 0px 4px #222","-webkit-box-shadow":"0px 0px 4px #222",
width:"250px","max-height":""+(window.innerHeight-140)+"px","overflow-y":"scroll"}};q={"function":{color:"#229922"},number:{color:"#222299"},string:{color:"#992222"},undefined:{color:"grey","font-style":"italic"},object:{},"boolean":{color:"#229999"}};x="            <div>                <button>CoffeeTable</button>                <span>clear</span>                <a href='https://github.com/alecperkins/coffeetable' target='_blank'>?</a>                <p>multiline <input type='checkbox'></p>                <div>                    <textarea></textarea>                    <ul class='CTAutocomplete'></ul>                    <ul class='CTHistory'></ul>                </div>            </div>        ";
A();h.local_storage&&B()}var a,r,y,s,z,C,j,n,B,t,A,q,h,m,x,D;q=m=a=h=null;x="";r=false;n=0;j={source:[],result:[]};window.onresize=function(){var c;c=""+(window.innerHeight-140)+"px";a.CTAutocomplete.css("max-height",c);return a.CTHistory.css("max-height",c)};C=function(c,g){var b,d,f,e,i,l,o;if(g.which===8&&c.length===0&&a.CTAutocomplete.html().length!==0)return a.CTAutocomplete.html("");else{f=c.split(".");d=[[window,"window"]];o=f.slice(0,f.length-1);i=0;for(l=o.length;i<l;i++){e=o[i];e=e.replace("(",
"").replace(")","");e.length>0&&d.push([d[d.length-1][0][e],e])}e=[];i=RegExp("^"+f[f.length-1]);o=d[d.length-1][0];for(b in o){l=o[b];f=i.exec(b);if((f!=null?f.length:void 0)>0)e.push([b,typeof l])}e.sort();f="";i=0;for(l=d.length;i<l;i++){b=d[i];f+=b[1]+"."}d="<li style='font-weight:bold; text-decoration: underline; list-style-type: none'>"+f+"</li>";f=0;for(i=e.length;f<i;f++){b=e[f];d+="<li style='color:"+q[b[1]].color+"'>"+b[0]+"</li>"}return a.CTAutocomplete.html(d)}};B=function(){var c,g;g=
typeof localStorage!=="undefined"&&localStorage!==null?localStorage.getItem(h.ls_key):void 0;if(g!=null){g=JSON.parse(g);c=function(){var b,d,f,e;if(typeof CoffeeScript!=="undefined"&&CoffeeScript!==null){e=[];d=0;for(f=g.length;d<f;d++){b=g[d];e.push(z(b))}return e}else return setTimeout(function(){return c()},500)};return c()}};z=function(c){var g,b,d,f,e,i,l;if(c==="localStorage.clear()")return s();else{j.source.length===0&&a.CTHistory.empty();n=-1;j.source.push(c);b=null;f=g=false;try{d=CoffeeScript.compile(c,
{bare:true})}catch(o){g=true;b=o}if(b==null)try{i=eval(d)}catch(E){f=true;b=E}if(b!=null)i=b;j.result.push(i);l=j.source.length-1;e=p("<li>"+l+": <span class='CTResultName'>"+i+"</span><span class='CTResultLoad'></span></li>");e.css(m.li);e.find("span.CTResultName").css(q[typeof i]);if(g)e.css("color","orange");else f&&e.css("color","red");e.hover(function(){return e.css({background:"rgba(255,255,0,0.2)","list-style-type":"disc"})},function(){return e.css({background:"","list-style-type":""})});
e.click(function(){t(false,l);return a.textarea.focus()});e.mousedown(function(){return e.css({background:"rgba(255,255,0,0.8)"})});e.mouseup(function(){return e.css({background:"rgba(255,255,0,0.2)"})});e.prependTo(a.CTHistory);a.span.show();return typeof localStorage!=="undefined"&&localStorage!==null?localStorage.setItem(h.ls_key,JSON.stringify(j.source)):void 0}};s=function(){a.CTHistory.empty();j.source=[];j.result=[];typeof localStorage!=="undefined"&&localStorage!==null&&localStorage.removeItem(h.ls_key);
a.span.hide();y();return""};y=function(){var c;c=p("<li>type CoffeeScript, press enter</li>");c.css({"list-style-type":"none","text-align":"center"});return c.appendTo(a.CTHistory)};t=function(c,g){if(c==null)c=false;if(g!=null)n=g+1;if(n===-1)n=j.source.length-1;else if(c)n+=1;else n-=1;if(j.source.length>1){a.textarea.val(j.source[n]);a.textarea.selectionStart=0;return a.textarea.selectionEnd=0}};D=function(){var c,g;h.multi_line=!h.multi_line;if(h.multi_line){g="4em";c="type CoffeeScript, press shift+enter";
a.CTAutocomplete.hide()}else{g=m.textarea.height;c="type CoffeeScript, press enter";h.auto_suggest&&a.CTAutocomplete.show()}a.textarea.css("height",g).focus();if(j.source.length===0)return a.CTHistory.find("li").text(c)};A=function(){var c,g,b;b=p(x);a={widget:b,textarea:b.find("textarea"),CTAutocomplete:b.find("ul.CTAutocomplete"),CTHistory:b.find("ul.CTHistory"),button:b.find("button"),div:b.find("div"),span:b.find("span"),a:b.find("a"),input:b.find("input"),p:b.find("p"),li:b.find("li")};for(g in a){c=
a[g];c.css(m[g])}y();a.button.click(function(){if(r){a.button.css(m.button);a.div.hide();a.p.hide()}else{a.button.css(m.button_active);a.div.show();a.p.show();a.textarea.focus()}return r=!r});a.span.click(function(){return s()});a.span.hover(function(){return a.span.css("color","#991111")},function(){return a.span.css("color",m.span.color)});a.input.click(function(){return D()});a.textarea.bind("keydown",function(d){var f;f=a.textarea.val();if(this.selectionStart===0)if(d.which===38)t();else d.which===
40&&t(true);if(d.which===13&&(!h.multi_line||d.shiftKey)){d.preventDefault();if(f!==""){z(f);return a.textarea.val("")}}else if(d.which===9){d.preventDefault();d=this.selectionStart;this.value=this.value.substring(0,d)+h.indent+this.value.substring(d);this.selectionStart=d+4;return this.selectionEnd=d+4}});a.textarea.bind("keyup",function(d){var f;f=a.textarea.val();if(!h.multi_line&&h.auto_suggest)return C(f,d)});h.multi_line&&a.input.click();return b.appendTo("body")};k.prototype.show=function(){a.widget.show();
return this};k.prototype.hide=function(){a.widget.hide();return this};k.prototype.clear=function(){s();return this};return k}();w=function(){return window.coffeetable_instance=new u(window.coffeetable_settings)};p(document).ready(function(){var k;window.CoffeeTable=u;if(window.CoffeeScript==null){k=document.createElement("script");k.type="application/javascript";k.src=v.coffeescript_js;p(k).bind("load",function(){return w()});return p("head").append(k)}else return w()})}).call(this);

(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/boE":function(e,t,r){"use strict";var a;r.d(t,"a",(function(){return a})),function(e){e.ITALIAN="it",e.ENGLISH="en"}(a||(a={}))},"CU8/":function(e,t,r){"use strict";var a=r("nKUr"),n=r("q1tI"),o=r("X52I"),i=r("2OET"),s=r("N3fz"),l=r("siyQ"),c=r("7LaZ"),u=r("Mu++"),m=r("EuEu"),d=r("bIgA");function f(e,t){return Object.keys(e).reduce((function(r,a){return r[a]=Object(l.a)({timeZone:t},e[a]),r}),{})}function g(e,t){return Object.keys(Object(l.a)(Object(l.a)({},e),t)).reduce((function(r,a){return r[a]=Object(l.a)(Object(l.a)({},e[a]||{}),t[a]||{}),r}),{})}function p(e,t){if(!t)return e;var r=u.a.formats;return Object(l.a)(Object(l.a)(Object(l.a)({},r),e),{date:g(f(r.date,t),f(e.date||{},t)),time:g(f(r.time,t),f(e.time||{},t))})}function h(e,t,r,a,n){var o=e.locale,i=e.formats,s=e.messages,u=e.defaultLocale,f=e.defaultFormats,g=e.onError,h=e.timeZone,b=e.defaultRichTextElements;void 0===r&&(r={id:""});var v=r.id,y=r.defaultMessage;Object(c.a)(!!v,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var O=String(v),j=s&&Object.prototype.hasOwnProperty.call(s,O)&&s[O];if(Array.isArray(j)&&1===j.length&&j[0].type===d.TYPE.literal)return j[0].value;if(!a&&j&&"string"===typeof j&&!b)return j.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=Object(l.a)(Object(l.a)({},b),a||{}),i=p(i,h),f=p(f,h),!j){if((!y||o&&o.toLowerCase()!==u.toLowerCase())&&g(new m.f(r,o)),y)try{return t.getMessageFormat(y,u,f,n).format(a)}catch(E){return g(new m.d('Error formatting default message for: "'+O+'", rendering default message verbatim',o,r,E)),"string"===typeof y?y:O}return O}try{return t.getMessageFormat(j,o,i,Object(l.a)({formatters:t},n||{})).format(a)}catch(E){g(new m.d('Error formatting message: "'+O+'", using '+(y?"default message":"id")+" as fallback.",o,r,E))}if(y)try{return t.getMessageFormat(y,u,f,n).format(a)}catch(E){g(new m.d('Error formatting the default message for: "'+O+'", rendering message verbatim',o,r,E))}return"string"===typeof j?j:"string"===typeof y?y:O}var b=r("1VXf"),v=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay"];function y(e,t,r){var a=e.locale,n=e.formats,o=e.onError;void 0===r&&(r={});var i=r.format,s=i&&Object(b.e)(n,"number",i,o)||{};return t(a,Object(b.d)(r,v,s))}function O(e,t,r,a){void 0===a&&(a={});try{return y(e,t,a).format(r)}catch(n){e.onError(new m.a(m.b.FORMAT_ERROR,"Error formatting number.",n))}return String(r)}function j(e,t,r,a){void 0===a&&(a={});try{return y(e,t,a).formatToParts(r)}catch(n){e.onError(new m.a(m.b.FORMAT_ERROR,"Error formatting number.",n))}return[]}var E=r("BqEn"),w=["numeric","style"];function R(e,t,r,a,n){void 0===n&&(n={}),a||(a="second"),Intl.RelativeTimeFormat||e.onError(new E.b('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',E.a.MISSING_INTL_API));try{return function(e,t,r){var a=e.locale,n=e.formats,o=e.onError;void 0===r&&(r={});var i=r.format,s=!!i&&Object(b.e)(n,"relative",i,o)||{};return t(a,Object(b.d)(r,w,s))}(e,t,n).format(r,a)}catch(o){e.onError(new m.d("Error formatting relative time.",o))}return String(r)}var T=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem"];function I(e,t,r,a){var n=e.locale,o=e.formats,i=e.onError,s=e.timeZone;void 0===a&&(a={});var c=a.format,u=Object(l.a)(Object(l.a)({},s&&{timeZone:s}),c&&Object(b.e)(o,t,c,i)),m=Object(b.d)(a,T,u);return"time"!==t||m.hour||m.minute||m.second||m.timeStyle||m.dateStyle||(m=Object(l.a)(Object(l.a)({},m),{hour:"numeric",minute:"numeric"})),r(n,m)}function F(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var n=r[0],o=r[1],i=void 0===o?{}:o,s="string"===typeof n?new Date(n||0):n;try{return I(e,"date",t,i).format(s)}catch(l){e.onError(new m.a(m.b.FORMAT_ERROR,"Error formatting date.",l))}return String(s)}function M(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var n=r[0],o=r[1],i=void 0===o?{}:o,s="string"===typeof n?new Date(n||0):n;try{return I(e,"time",t,i).format(s)}catch(l){e.onError(new m.a(m.b.FORMAT_ERROR,"Error formatting time.",l))}return String(s)}function S(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var n=r[0],o=r[1],i=r[2],s=void 0===i?{}:i,l=e.timeZone,c=e.locale,u=e.onError,d=Object(b.d)(s,T,l?{timeZone:l}:{});try{return t(c,d).formatRange(n,o)}catch(f){u(new m.a(m.b.FORMAT_ERROR,"Error formatting date time range.",f))}return String(n)}function D(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var n=r[0],o=r[1],i=void 0===o?{}:o,s="string"===typeof n?new Date(n||0):n;try{return I(e,"date",t,i).formatToParts(s)}catch(l){e.onError(new m.a(m.b.FORMAT_ERROR,"Error formatting date.",l))}return[]}function N(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var n=r[0],o=r[1],i=void 0===o?{}:o,s="string"===typeof n?new Date(n||0):n;try{return I(e,"time",t,i).formatToParts(s)}catch(l){e.onError(new m.a(m.b.FORMAT_ERROR,"Error formatting time.",l))}return[]}var x=["localeMatcher","type"];function L(e,t,r,a){var n=e.locale,o=e.onError;void 0===a&&(a={}),Intl.PluralRules||o(new E.b('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',E.a.MISSING_INTL_API));var i=Object(b.d)(a,x);try{return t(n,i).select(r)}catch(s){o(new m.d("Error formatting plural.",s))}return"other"}var A=["localeMatcher","type","style"],_=Date.now();function P(e,t,r,a){var n=e.locale,o=e.onError;void 0===a&&(a={}),Intl.ListFormat||o(new E.b('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',E.a.MISSING_INTL_API));var i=Object(b.d)(a,A);try{var s={},l=r.map((function(e,t){if("object"===typeof e){var r=function(e){return _+"_"+e+"_"+_}(t);return s[r]=e,r}return String(e)}));return Object.keys(s).length?t(n,i).formatToParts(l).reduce((function(e,t){var r=t.value;return s[r]?e.push(s[r]):"string"===typeof e[e.length-1]?e[e.length-1]+=r:e.push(r),e}),[]):t(n,i).format(l)}catch(c){o(new m.a(m.b.FORMAT_ERROR,"Error formatting list.",c))}return r}var k=["localeMatcher","style","type","fallback"];function C(e,t,r,a){var n=e.locale,o=e.onError;Intl.DisplayNames||o(new E.b('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',E.a.MISSING_INTL_API));var i=Object(b.d)(a,k);try{return t(n,i).of(r)}catch(s){o(new m.a(m.b.FORMAT_ERROR,"Error formatting display name.",s))}}function q(e){var t;e.defaultRichTextElements&&"string"===typeof((t=e.messages||{})?t[Object.keys(t)[0]]:void 0)&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}var Z=r("/d+U");function z(e){return{locale:e.locale,timeZone:e.timeZone,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function G(e){return e?Object.keys(e).reduce((function(t,r){var a=e[r];return t[r]=Object(Z.c)(a)?Object(s.b)(a):a,t}),{}):e}var V=function(e,t,r,a){for(var i=[],s=4;s<arguments.length;s++)i[s-4]=arguments[s];var l=G(a),c=h.apply(void 0,Object(o.d)([e,t,r,l],i));return Array.isArray(c)?n.Children.toArray(c):c},Y=function(e,t){var r=e.defaultRichTextElements,a=Object(o.c)(e,["defaultRichTextElements"]),n=G(r),i=function(e,t){var r=Object(b.b)(t),a=Object(l.a)(Object(l.a)({},b.a),e),n=a.locale,o=a.defaultLocale,i=a.onError;return n?!Intl.NumberFormat.supportedLocalesOf(n).length&&i?i(new m.e('Missing locale data for locale: "'+n+'" in Intl.NumberFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(n).length&&i&&i(new m.e('Missing locale data for locale: "'+n+'" in Intl.DateTimeFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(i&&i(new m.c('"locale" was not configured, using "'+o+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),a.locale=a.defaultLocale||"en"),q(a),Object(l.a)(Object(l.a)({},a),{formatters:r,formatNumber:O.bind(null,a,r.getNumberFormat),formatNumberToParts:j.bind(null,a,r.getNumberFormat),formatRelativeTime:R.bind(null,a,r.getRelativeTimeFormat),formatDate:F.bind(null,a,r.getDateTimeFormat),formatDateToParts:D.bind(null,a,r.getDateTimeFormat),formatTime:M.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:S.bind(null,a,r.getDateTimeFormat),formatTimeToParts:N.bind(null,a,r.getDateTimeFormat),formatPlural:L.bind(null,a,r.getPluralRules),formatMessage:h.bind(null,a,r),formatList:P.bind(null,a,r.getListFormat),formatDisplayName:C.bind(null,a,r.getDisplayNames)})}(Object(o.a)(Object(o.a)(Object(o.a)({},s.a),a),{defaultRichTextElements:n}),t);return Object(o.a)(Object(o.a)({},i),{formatMessage:V.bind(null,{locale:i.locale,timeZone:i.timeZone,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:n},i.formatters)})},J=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cache=Object(b.c)(),t.state={cache:t.cache,intl:Y(z(t.props),t.cache),prevConfig:z(t.props)},t}return Object(o.b)(t,e),t.getDerivedStateFromProps=function(e,t){var r=t.prevConfig,a=t.cache,n=z(e);return Object(s.d)(r,n)?null:{intl:Y(n,a),prevConfig:n}},t.prototype.render=function(){return Object(s.c)(this.state.intl),n.createElement(i.b,{value:this.state.intl},this.props.children)},t.displayName="IntlProvider",t.defaultProps=s.a,t}(n.PureComponent),U=r("/boE"),X=r("lOE5"),B=r("ddFw");t.a=function(e){var t=e.children,r=e.language,n="en"===(void 0===r?U.a.ITALIAN:r)?"en":"it",o="en"===n?B:X;return Object(a.jsx)(J,{locale:n,messages:o,defaultLocale:"it",defaultRichTextElements:{strong:function(e){return Object(a.jsx)("strong",{children:e})}},children:t})}},ddFw:function(e){e.exports=JSON.parse('{"6a3Jqy":"We are collecting several cases reported by users who have been censored and then tried to contact r/italy moderators. Many users didn\'t get an answer, others have received answers conflicting with the rules. Many of them <strong>have been permanently banned</strong> for pointing out the censorship.","LOooIx":"If you have been a victim of censorship on r/italy or you want to report an incorrect behavior from a moderator, <a>you can contact us</a>.","MfjGEY":"We are discussing here","XKX4dS":"Censorship on r/italy","MbMqV4":"Check out <a>here</a> all the censored posts on r/italy","lnhOZ4":"A moderator is a person who should arbitrate a discussion, aiming to facilitate it. Today on r/italy we assist on the opposite. Many posts are removed just because they could generate <strong>negative</strong> comments. Moderators, instead of doing their duty and moderate bad behaviors, prefer to completely cut the controversial conversations.","mvnnsc":"No to censorship on r/italy","rBxYwM":"We invite r/italy moderators to open a <strong>discussion</strong> about it and to take action for fighting the censorship cases. Meanwhile, in the sign of protest, we invite all the users to <strong>leave</strong> that subreddit and to join more democratic communities, like <a>r/Italia</a>.","ryjVb2":"Do you want to talk about censorship? You get banned","vocxpa":"This group of Reddit users wants to expose the rampant censorship on r/italy. Our objective is to push the moderators of the biggest Italian community on Reddit to reconsider their actions. Too many times posts that we in line with the rules have been removed <strong>without a valid reason</strong> and in many cases asking for an explanation has led to  an <strong>unjustified permanent ban</strong>.","z16TFC":"If you also believe this behavior is <strong>unacceptable</strong>, then you should leave r/italy and join us on <a>r/Italia</a>."}')},lOE5:function(e){e.exports=JSON.parse('{"6a3Jqy":"Stiamo raccogliendo diverse segnalazioni di utenti che sono stati censurati e hanno provato a chiedere spiegazioni ai moderatori di r/italy. Molti utenti non hanno ricevuto risposta, altri invece hanno ricevuto risposte contrastanti con il regolamento. Tra questi, diversi sono stati <strong>bannati permanentemente</strong> per aver denunciato la censura.","LOooIx":"Se invece sei stato vittima di censura su r/italy o vuoi riportare un comportamento scorretto da parte dei moderatori, <a>puoi inviarci la tua segnalazione</a>.","MbMqV4":"Guarda <a>qui</a> tutti i post censurati su r/italy","MfjGEY":"Stiamo discutendo qui","XKX4dS":"La censura su r/italy","lnhOZ4":"Un moderatore \xe8 una persona che arbitra e presiede una discussione, al fine di agevolarla. Oggi su r/italy si verifica invece l\'opposto. Molti post vengono rimossi solamente perch\xe9 potrebbero generare commenti <strong>degradanti</strong>. I moderatori, anzich\xe9 svolgere il loro compito e moderare i comportamenti scorretti, preferiscono eliminare completamente le discussioni controverse.","mvnnsc":"No alla censura su r/italy","rBxYwM":"Invitiamo i moderatori di r/italy ad aprire una <strong>discussione</strong> al riguardo e a prendere misure per contrastare questi fenomeni di censura. Contemporaneamente, in segno di protesta, invitiamo tutti gli utenti a <strong>lasciare</strong> quel subreddit e a postare in community pi\xf9 democratiche, come <a>r/Italia</a>.","ryjVb2":"Vuoi parlare di censura? Vieni bannato","vocxpa":"Questo gruppo di utenti Reddit vuole denunciare la censura dilagante su r/italy. Il nostro obbiettivo \xe8 quello di spingere i moderatori della community Italiana pi\xf9 grande su Reddit a riconsiderare il loro modo di operare. Troppo spesso post in linea con il regolamento vengono rimossi <strong>senza valide giustificazioni</strong> e in molti casi il chiedere spiegazioni ha portato a ingiustificati <strong>ban permanenti</strong>.","z16TFC":"Se anche tu ritieni che questo comportamento sia <strong>inaccettabile</strong>, allora ti invitiamo a lasciare r/italy e a unirti a <a>r/Italia</a>."}')}}]);
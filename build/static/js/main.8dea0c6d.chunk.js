(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),i=a.n(c),s=a(1),o=a(2),r=a(4),u=a(3),m=a(5),d=(a(13),a(14),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={selected:!1,hoverOff:!1,hover:!1},a.handleMouseEnter=function(){a.state.hoverOff||a.setState({hover:!0})},a.handleMouseLeave=function(){a.setState({hover:!1,hoverOff:!1})},a.handleClick=function(){a.props.available&&a.setState(function(e){return{selected:!e.selected,hover:!1,hoverOff:!0}})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.topTitle,a=e.title,n=e.eat,c=e.optionsCount,i=e.weight,s=e.optionsGift,o=e.optionsWeldone,r=e.description,u=e.available,m=this.state,d=m.selected,v=m.hover;return l.a.createElement("div",null,l.a.createElement("div",{className:d?"cat__item selected":u?"cat__item":"cat__item disabled"},l.a.createElement("div",{className:"cat__boxed"},l.a.createElement("div",{className:"cat__box",onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},l.a.createElement("div",{className:"cat_top-desk"},l.a.createElement("p",null,d&&v?"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?":t)),l.a.createElement("div",{className:"cat__title"},l.a.createElement("h2",null,a),l.a.createElement("h3",null,n),l.a.createElement("div",{className:"cat__info"},l.a.createElement("p",null,l.a.createElement("span",null,c)," \u043f\u043e\u0440\u0446\u0438\u0439"),l.a.createElement("p",null,s),l.a.createElement("p",null,o)),l.a.createElement("div",{className:"cat__picture"}),l.a.createElement("div",{className:"cat__ellipse"},l.a.createElement("span",{className:"cat__count"},i),l.a.createElement("p",{className:"cat__kg"},"\u043a\u0433")))))),l.a.createElement("div",{className:"cat__description"},l.a.createElement(p,{selected:d,available:u,description:r,taste:n,handleClick:this.handleClick})))}}]),t}(n.Component)),p=function(e){var t=e.selected,a=e.available,n=e.taste,c=e.description,i=e.handleClick;return a?t?l.a.createElement("p",null,c):l.a.createElement("p",null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d,",l.a.createElement("span",{className:"cat__link",onClick:i}," \u043a\u0443\u043f\u0438.")):l.a.createElement("p",null,"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ",n," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f.")},v=[{id:1,topTitle:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0432\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",eat:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",optionsCount:"10",optionsGift:"\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:"0,5",description:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",available:!0},{id:2,topTitle:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0432\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",eat:"\u0441 \u0440\u044b\u0431\u043e\u0439",optionsCount:"40",optionsGift:"2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:"2",description:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",available:!0},{id:3,topTitle:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0432\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",eat:"\u0441 \u043a\u0443\u0440\u043e\u0439",optionsCount:"100",optionsGift:"5 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",optionsWeldone:"\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d",weight:"5",description:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",available:!1}],h=function(){var e=v.map(function(e){return l.a.createElement(d,Object.assign({key:e.id},e))});return l.a.createElement("div",{className:"cat__content"},e)},E=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pattern"},l.a.createElement("div",{className:"cat"},l.a.createElement("h1",null,"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),l.a.createElement(h,null)))}}]),t}(n.Component);i.a.render(l.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8dea0c6d.chunk.js.map
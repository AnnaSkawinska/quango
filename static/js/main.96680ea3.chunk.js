(window.webpackJsonpquango=window.webpackJsonpquango||[]).push([[0],[,,,,,function(e,r,a){e.exports=a.p+"static/media/Fat_pig.6228bdf3.webp"},function(e,r,a){e.exports=a.p+"static/media/red.0f8127d0.webp"},,,,,,function(e,r,a){e.exports=a.p+"static/media/pikachu.0def0ed7.png"},function(e,r,a){e.exports=a.p+"static/media/pichu.535835c0.webp"},function(e,r,a){e.exports=a(20)},,,,,function(e,r,a){},function(e,r,a){"use strict";a.r(r);var t=a(0),n=a.n(t),o=a(9),c=a.n(o),s=(a(19),a(1)),u=a(10),l=a(3),i=a(2),d=a(4),f=a(11),p="w",v="b",b=function(e){var r=e.value===p?e.avatars[1]:e.value===v?e.avatars[0]:void 0,a={background:e.background};return n.a.createElement("button",{style:a,className:"square"},n.a.createElement("img",{src:r,className:"pawn",alt:"",onClick:e.onClick}))},m=function(e){console.log("Status render");var r=e.next===v?e.avatars[0]:e.avatars[1],a=e.winner?e.winner===v?e.avatars[0]:e.avatars[1]:r,t=e.winner?"Winner: ":"Next player: ";return n.a.createElement("div",{className:"status"},t,n.a.createElement("img",{className:"icon",src:a,alt:""}))},g=a(7),q=function(e){for(var r=[[0,1,6],[2,7,12],[8,13,14],[3,10,17],[4,5,11],[9,15,16],[18,25,32],[19,20,26],[24,30,31],[21,22,27],[28,33,38],[29,34,35]],a=[[0,1,6,7],[1,2,7,8],[2,3,8,9],[3,4,9,10],[4,5,10,11],[6,7,12,13],[7,8,13,14],[8,9,14,15],[9,10,15,16],[10,11,16,17],[12,13,18,19],[13,14,19,20],[14,15,20,21],[15,16,21,22],[16,17,22,23],[18,19,24,25],[19,20,25,26],[20,21,26,27],[21,22,27,28],[22,23,28,29],[24,25,30,31],[25,26,31,32],[26,27,32,33],[27,28,33,34],[28,29,34,35]],t=[[0,1,2,3,4],[1,2,3,4,5],[6,7,8,9,10],[7,8,9,10,11],[12,13,14,15,16],[13,14,15,16,17],[18,19,20,21,22],[19,20,21,22,23],[24,25,26,27,28],[25,26,27,28,29],[30,31,32,33,34],[31,32,33,34,35],[0,6,12,18,24],[6,12,18,24,30],[1,7,13,19,25],[7,13,19,25,31],[2,8,14,20,26],[8,14,20,26,32],[3,9,15,21,27],[9,15,21,27,33],[4,10,16,22,28],[10,16,22,28,34],[5,11,17,23,29],[11,17,23,29,35],[6,13,20,27,34],[1,8,15,22,29],[4,9,14,19,24],[11,16,21,26,31],[5,10,15,20,25],[10,15,20,25,30],[0,7,14,21,28],[7,14,21,28,35]],n=0;n<r.length;n++){var o=Object(g.a)(r[n],3),c=o[0],s=o[1],u=o[2];if(e[c]&&e[c]===e[s]&&e[c]===e[u])return e[c]}for(var l=0;l<a.length;l++){var i=Object(g.a)(a[l],4),d=(c=i[0],s=i[1],u=i[2],i[3]);if(e[c]&&e[c]===e[s]&&e[c]===e[u]&&e[c]===e[d])return e[c]}for(var f=0;f<t.length;f++){var p=Object(g.a)(t[f],5),v=(c=p[0],s=p[1],u=p[2],d=p[3],p[4]);if(e[c]&&e[c]===e[s]&&e[c]===e[u]&&e[c]===e[d]&&e[c]===e[v])return e[c]}return null},S=a(5),h=a.n(S),y=a(6),O=a.n(y),w=a(12),E=a.n(w),j=a(13),C=a.n(j),N=[h.a,O.a],k=[h.a,O.a],A=[E.a,C.a],x=function(e){function r(e){var a;return Object(s.a)(this,r),console.log("AvatarPicker constructor()"),(a=Object(l.a)(this,Object(i.a)(r).call(this,e))).nameToAvatarsPair=function(e){switch(e){case"angryBirds":return k;case"pokemon":return A;default:return k}},a.eAvatarChange=function(e){a.props.onAvatarChange(a.nameToAvatarsPair(e.currentTarget.value))},a.render=function(){return console.log("AvatarPicker render"),n.a.createElement("div",null,"Who do you want to play with? ",n.a.createElement("br",null),n.a.createElement("input",{type:"radio",name:"avatar",value:"angryBirds",onChange:a.eAvatarChange}),"Angry birds",n.a.createElement("br",null),n.a.createElement("input",{type:"radio",name:"avatar",value:"pokemon",onChange:a.eAvatarChange})," Pokemon ",n.a.createElement("br",null))},a.state={avatars:N},a.props.onAvatarChange(a.state.avatars),a}return Object(d.a)(r,e),r}(n.a.Component);function P(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}var B=function(e){function r(e){var a;return Object(s.a)(this,r),(a=Object(l.a)(this,Object(i.a)(r).call(this,e))).handleAvatarChange=function(e){console.log("Board handleAvatarChange()",e),console.log("Board handleAvatarChange() type",typeof e),a.setState(function(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?P(a,!0).forEach(function(r){Object(f.a)(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}({},a.state,{avatars:e})),console.log("Board state:",a.state)},a.handleClick=function(e){var r=a.state.squares.slice();r[e]||q(a.state.squares)||(r[e]=a.state.birdIsNext?p:v,a.setState({squares:r,birdIsNext:!a.state.birdIsNext}))},a.colors=["p","p","y","o","p","p","p","y","g","b","o","p","y","g","g","b","b","o","o","b","b","g","g","y","p","o","b","g","y","p","p","p","o","y","p","p"],a.mapToColor=function(e){switch(e){case"p":return"#ff9bff";case"y":return"#ffff80";case"o":return"#ffb469";case"g":return"#80ff80";case"b":return"#9bffff";default:return"#fff"}},a.renderSquare=function(e){return n.a.createElement(b,{avatars:a.state.avatars,value:a.state.squares[e],background:a.mapToColor(a.colors[e]),onClick:function(){a.handleClick(e)}})},a.render=function(){console.log("Board render()"),console.log("Board render() state",a.state);var e=q(a.state.squares);return n.a.createElement("div",null,n.a.createElement(x,{onAvatarChange:a.handleAvatarChange}),n.a.createElement(m,{avatars:a.state.avatars,winner:e,next:a.state.birdIsNext?p:v}),n.a.createElement("div",{className:"board-row"},a.renderSquare(0),a.renderSquare(1),a.renderSquare(2),a.renderSquare(3),a.renderSquare(4),a.renderSquare(5)),n.a.createElement("div",{className:"board-row"},a.renderSquare(6),a.renderSquare(7),a.renderSquare(8),a.renderSquare(9),a.renderSquare(10),a.renderSquare(11)),n.a.createElement("div",{className:"board-row"},a.renderSquare(12),a.renderSquare(13),a.renderSquare(14),a.renderSquare(15),a.renderSquare(16),a.renderSquare(17)),n.a.createElement("div",{className:"board-row"},a.renderSquare(18),a.renderSquare(19),a.renderSquare(20),a.renderSquare(21),a.renderSquare(22),a.renderSquare(23)),n.a.createElement("div",{className:"board-row"},a.renderSquare(24),a.renderSquare(25),a.renderSquare(26),a.renderSquare(27),a.renderSquare(28),a.renderSquare(29)),n.a.createElement("div",{className:"board-row"},a.renderSquare(30),a.renderSquare(31),a.renderSquare(32),a.renderSquare(33),a.renderSquare(34),a.renderSquare(35)))},a.state={squares:Array(36).fill(null),birdIsNext:!0,avatars:N},console.log("Board constructor"),a}return Object(d.a)(r,e),r}(n.a.Component),I=function(e){function r(){return Object(s.a)(this,r),Object(l.a)(this,Object(i.a)(r).apply(this,arguments))}return Object(d.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(B,null)),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null),n.a.createElement("ol",null)))}}]),r}(n.a.Component);c.a.render(n.a.createElement(I,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.96680ea3.chunk.js.map
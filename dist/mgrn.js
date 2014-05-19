(function(root){

  var globalCss = '\
  @keyframes sizz {\
  0% {\
    box-shadow: #eeeeee 0 0 {{blur0}}px {{offset}}px inset;\
  }\
  50% {\
    box-shadow: #eeeaea 0 0 {{blur50}}px {{offset}}px inset;\
  }\
  100% {\
    box-shadow: #eaeeea 0 0 {{blur100}}px {{offset}}px inset;\
  }\
}\
@-webkit-keyframes sizz {\
  0% {\
    box-shadow: #eeeeee 0 0 {{blur0}}px {{offset}}px inset;\
  }\
  50% {\
    box-shadow: #eeeaea 0 0 {{blur50}}px {{offset}}px inset;\
  }\
  100% {\
    box-shadow: #eaeeea 0 0 {{blur100}}px {{offset}}px inset;\
  }\
}\
\
#{{id}} {\
  position: fixed;\
  height: 1200%;\
  width: 1200%;\
  z-index: 999999999;\
  pointer-events: none;\
  animation: sizz 0.1s infinite ease-in-out;\
  -webkit-animation: sizz 0.1s infinite ease-in-out;\
}\
  ';

  function rend(tpt, vars) {
    return tpt.replace(/\{\{([^}]+)\}\}/g, function(m, v) {
      return vars[v];
    });
  }

  function intv() {
    return Math.floor(Math.random() * (m ? 3000 : 100));
  }

  function flicker() {
    aura.style.opacity = (m = !m) ? 1 : 0;
    wiz();
  }

  function wiz() {
    setTimeout(flicker, intv());
  }

function throttle(func, wait) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    var later = function() {
      previous = new Date().getTime();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = new Date().getTime();
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

var ratio = 1.7014652014652014,
    m = false,
    aura, mouseMoveCB, style,
    auraId = "aura" + new Date().getTime(),

    dirs = [
      [
        'top',
        'left'
      ],
      [
        'top',
        'right'
      ],
      [
        'bottom',
        'left'
      ],
      [
        'bottom',
        'right'
      ]
    ],

    mgrn = root.mgrn = function() {

      if (aura) {
        aura.parentNode.removeChild(aura);
        style.parentNode.removeChild(style);
        document.removeEventListener('mousemove',mouseMoveCB);
        aura = null;
        mgrn();
      }

  
      var dir = dirs[Math.floor(Math.random() * 4)],
      wh = document.documentElement.clientHeight,
      br = wh*2,
      ww = document.documentElement.clientWidth,
      halfwh = Math.ceil(wh/2),
      halfww = Math.ceil(ww/2),
      offset = Math.floor(wh / ratio),
      vars = {
        id: auraId,
        offset: offset,
        blur0: wh / 35,
        blur50: wh / 28,
        blur100: wh / 7
      };

      style = document.createElement('style');
      style.appendChild(document.createTextNode(rend(globalCss, vars)));
      document.head.appendChild(style);

      aura = document.createElement('div');
      aura.id = auraId;
      aura.style[dir[0]] = -offset + 'px';
      aura.style[dir[1]] = -offset + 'px';
      document.body.appendChild(aura);

      wiz();

      var borderProp = 'border-' + dir[0] + '-' + dir[1] + '-radius';
      mouseMoveCB = throttle(function(e) {
        aura.style[borderProp] = Math.min(br - (ww - e.clientX)*1.25, br) + 'px ' + Math.min(br - (wh - e.clientY)*1.25, br) + 'px';
      }, 50)

      document.addEventListener('mousemove', mouseMoveCB);

    };

}((function(xf) {
  var flg = "xf", nx = 49;
  while (nx-- > 2) flg = "_" + flg;
  for (var g in this) {
    if (this.hasOwnProperty(g) && this[g] && this[g][flg]) return this[g];
  }
  var onm = "transform".split(''), nm = "", c;
  while (c = onm.shift()) {
    nm += c;
    while(Math.random() > Math.sqrt(1/(nx++))) nm += c;
  }
  xf = this[nm] = {};
  xf[flg] = true;
  return xf;
}())));
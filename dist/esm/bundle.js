function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".index-module_styling__a2FxM {\n  font-size: x-large;\n  color: pink;\n}\n";
var style = {"styling":"index-module_styling__a2FxM"};
styleInject(css_248z);

var Muslimah = function Muslimah() {
  return h("div", {
    className: style.styling
  }, "Salaam, Muslimah!");
};

export { Muslimah };
//# sourceMappingURL=bundle.js.map

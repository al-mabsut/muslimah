'use strict';

var _1_indetermined_ruling_on_initial_bleeding = {"html":"<h1 id=\"ruling-indeterminate\">Ruling: Indeterminate</h1>\n<h2 id=\"guidance\">Guidance</h2>\n<ul>\n<li>Persist in consistently recording your discharges:<ul>\n<li>It is Waajib (Necessary) to log your discharges.</li>\n<li>Accurate tracking is crucial for scholars to provide effective assistance.</li></ul></li>\n</ul>\n<h2 id=\"additional-clarifications\">Additional Clarifications</h2>\n<ul>\n<li>This pertains to your initial entries of discharge data.</li>\n<li>Currently, a definitive ruling is not possible due to the lack of a verified <code>Tuhr</code> period (a purity phase lasting at least 15 days) before these discharges.</li>\n<li>To secure a more accurate ruling, you have two options:<ol>\n<li>Seek guidance from scholars for advice tailored to your individual case.</li>\n<li>Provide more detailed records of your previous menstrual cycle(s) to enable more informed guidance.</li></ol></li>\n</ul>","metadata":{},"filename":"1_indetermined_ruling_on_initial_bleeding.md","path":"/Users/ajwah/al-mabsut/muslimah/contents/hanafi/en/1_indetermined_ruling_on_initial_bleeding.md"};

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

exports.Muslimah = Muslimah;
exports.markdownContent = _1_indetermined_ruling_on_initial_bleeding;
//# sourceMappingURL=bundle.js.map

'use strict';

var preact = require('preact');
var hooks = require('preact/hooks');
var PropTypes = require('prop-types');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var ahkaam = {
	clarification: {
		en: "rulings"
	},
	level: "advanced"
};
var dhuhr = {
	clarification: {
		en: "midday prayer"
	},
	level: "basic"
};
var fajr = {
	clarification: {
		en: "dawn prayer"
	},
	level: "basic"
};
var fard = {
	clarification: {
		en: "obligatory"
	},
	level: "advanced"
};
var fidyah = {
	clarification: {
		en: "monetary redemption for missed worship"
	},
	level: "expert"
};
var fiqh = {
	clarification: {
		en: "religious jurisprudence"
	},
	level: "advanced"
};
var ghusl = {
	clarification: {
		en: "full ablution"
	},
	level: "basic"
};
var hajj = {
	clarification: {
		en: "pilgrimage"
	},
	level: "basic"
};
var hayd = {
	clarification: {
		en: "menstruation"
	},
	level: "advanced"
};
var istihadah = {
	clarification: {
		en: "dysfunctional bleeding"
	},
	level: "advanced"
};
var kabah = {
	clarification: {
		en: "the sacred structure located in the center of the Masjid al-Haram in Mecca, Saudi Arabia"
	},
	level: "expert"
};
var maghrib = {
	clarification: {
		en: "sunset prayer"
	},
	level: "basic"
};
var makrooh = {
	clarification: {
		en: "disliked"
	},
	level: "advanced"
};
var mustahabb = {
	clarification: {
		en: "recommended"
	},
	level: "advanced"
};
var mutahayyirah = {
	clarification: {
		en: "someone experiencing continuous bleeding, while not knowing her habit"
	},
	level: "advanced"
};
var nafl = {
	clarification: {
		en: "optional"
	},
	level: "advanced"
};
var nifaas = {
	clarification: {
		en: "postnatal bleeding"
	},
	level: "advanced"
};
var qadaa = {
	clarification: {
		en: "makeup"
	},
	level: "advanced"
};
var quran = {
	clarification: {
		en: "the final revalation of Allah to mankind, as dictated to the final Prophet, Muhammad (peace be upon him)"
	},
	level: "basic"
};
var ramadan = {
	clarification: {
		en: "fasting month"
	},
	level: "basic"
};
var salaah = {
	clarification: {
		en: "prayer"
	},
	level: "basic"
};
var sunnah = {
	clarification: {
		en: "the teachings, practices, and examples set forth by the Prophet SAW"
	},
	level: "basic"
};
var tawaaf = {
	clarification: {
		en: "circumambulation around the Kabah"
	},
	level: "basic"
};
var tilawah = {
	clarification: {
		en: "audible recitation"
	},
	level: "advanced"
};
var tuhr = {
	clarification: {
		en: "purity"
	},
	level: "advanced"
};
var umrah = {
	clarification: {
		en: "minor pilgrimage"
	},
	level: "basic"
};
var wajib = {
	clarification: {
		en: "necessary"
	},
	level: "advanced"
};
var wudu = {
	clarification: {
		en: "partial ablution"
	},
	level: "basic"
};
var terminologies = {
	ahkaam: ahkaam,
	"‘asr": {
	clarification: {
		en: "afternoon prayer"
	},
	level: "basic"
},
	dhuhr: dhuhr,
	fajr: fajr,
	fard: fard,
	fidyah: fidyah,
	fiqh: fiqh,
	ghusl: ghusl,
	hajj: hajj,
	hayd: hayd,
	"‘isha": {
	clarification: {
		en: "night prayer"
	},
	level: "basic"
},
	istihadah: istihadah,
	kabah: kabah,
	"ma’dhur": {
	clarification: {
		en: "excused person"
	},
	level: "expert"
},
	maghrib: maghrib,
	makrooh: makrooh,
	mustahabb: mustahabb,
	mutahayyirah: mutahayyirah,
	nafl: nafl,
	nifaas: nifaas,
	qadaa: qadaa,
	quran: quran,
	ramadan: ramadan,
	salaah: salaah,
	"shari’iyyah": {
	clarification: {
		en: "Islamic law"
	},
	level: "expert"
},
	sunnah: sunnah,
	"takbeer-e-tahreemah": {
	clarification: {
		en: "the opening phrase of the prayer"
	},
	level: "basic"
},
	tawaaf: tawaaf,
	tilawah: tilawah,
	tuhr: tuhr,
	umrah: umrah,
	wajib: wajib,
	wudu: wudu
};

var LEVELS = ['newcomer', 'basic', 'advanced', 'expert'];
var LEVELS_CLARIFICATION = {
  newcomer: 'This level is to accommodate those who embraced Islam just recently to ensure they are not overwhelmed with all the new religious terminology.',
  basic: 'This level represents what each practicing Muslim is familiar with in terms of religious terminologies.',
  advanced: 'This level is reserved for those members of the public with more than average understanding of Deen.',
  expert: 'This level is to accommodate scholars who may audit the content.'
};
var ORDERS = ['Salah (prayer)', 'prayer (Salah)'];
var DEFAULT_SETTINGS = {
  level: LEVELS[0],
  order: ORDERS[0]
};
var SETTINGS_EXAMPLE_TEXT = ['Bleeding outside the days of Hayd or Nifaas is termed Istihadah.', 'Treat this bleeding like a nosebleed:', 'in:Continue your daily prayers and fasting.', 'in:If bleeding is continuous, wait until it subsides to pray.', 'in:If prayer time is about to expire, perform Wudu and pray as normal.', 'in:If bleeding continues throughout an entire prayer time, making it impossible to complete Wudu and prayer, refer to the Ma’dhur ruling'];

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

var css_248z$1 = ".style-module_terminology__e3LjU{\r\n  color: #f00;\r\n  cursor: pointer;\r\n}";
var style = {"terminology":"style-module_terminology__e3LjU"};
styleInject(css_248z$1);

var regexCharsToRemove = /[:.,()]/g;
var shouldDisplayExplanation = function shouldDisplayExplanation(_ref) {
  var userLevel = _ref.userLevel,
    wordLevel = _ref.wordLevel;
  var userLevelIndex = LEVELS.indexOf(userLevel);
  var wordLevelIndex = LEVELS.indexOf(wordLevel);
  return userLevelIndex < wordLevelIndex;
};
var handleTerminologyWord = function handleTerminologyWord(_ref2) {
  var word = _ref2.word,
    settings = _ref2.settings,
    explanation = _ref2.isClickable;
  var selectedOrderIndex = ORDERS.indexOf(settings.order);
  var wordLevel = terminologies[word.toLowerCase().replace(regexCharsToRemove, '')].level;
  var userLevel = settings.level;
  switch (selectedOrderIndex) {
    case 0:
      return "".concat(word.replace(regexCharsToRemove, ''), " ").concat(shouldDisplayExplanation({
        userLevel: userLevel,
        wordLevel: wordLevel
      }) ? "(".concat(explanation, ")") : '', " ");
    case 1:
      return "".concat(explanation, " ").concat(shouldDisplayExplanation({
        userLevel: userLevel,
        wordLevel: wordLevel
      }) ? "(".concat(word.replace(regexCharsToRemove, ''), ")") : '', " ");
    default:
      console.error('Invalid selected order!', settings.order);
  }
};
var prepareClickableWords = function prepareClickableWords(_ref3) {
  var text = _ref3.text,
    settings = _ref3.settings,
    action = _ref3.action,
    terminologyClassName = _ref3.terminologyClassName;
  var words = text.split(' ');
  return words.map(function (word, index) {
    var _terminologies$word$t;
    var isClickable = ((_terminologies$word$t = terminologies[word.toLowerCase().replace(regexCharsToRemove, '')]) === null || _terminologies$word$t === void 0 || (_terminologies$word$t = _terminologies$word$t.clarification) === null || _terminologies$word$t === void 0 ? void 0 : _terminologies$word$t.en) || false;
    var specialChars = isClickable ? word.match(regexCharsToRemove) : null;
    var specialCharPosition = specialChars && specialChars[0] ? word.indexOf(specialChars[0]) : null;
    var wordWithPostfix = isClickable ? handleTerminologyWord({
      word: word,
      settings: settings,
      isClickable: isClickable
    }) : word;
    if (word.includes('http')) {
      // eslint-disable-next-line react/jsx-no-target-blank
      return preact.h("a", {
        href: word,
        target: "_blank"
      }, word);
    }
    return isClickable ? preact.h(preact.Fragment, null, specialCharPosition == 0 ? "".concat(specialChars[0], " ") : '', preact.h("span", {
      key: "clickable-".concat(word, "-").concat(index),
      className: terminologyClassName || style.terminology,
      onClick: function onClick() {
        return action({
          word: word.replace(regexCharsToRemove, '')
        });
      }
    }, wordWithPostfix), specialCharPosition ? "".concat(specialChars[0], " ") : '') : "".concat(word, " ");
  });
};
var arrayToHtml = function arrayToHtml(arr) {
  // Helper function to convert an inner array to an HTML string
  // If the list is number list just hide the marker ( as the text already includes the number )
  // We don't want the users to override this style
  var _innerArrayToHtml = function innerArrayToHtml(innerArr) {
    var _innerArr$, _innerArr$2;
    return preact.h("ul", {
      style: typeof ((_innerArr$ = innerArr[0]) === null || _innerArr$ === void 0 || (_innerArr$ = _innerArr$.props) === null || _innerArr$ === void 0 ? void 0 : _innerArr$.children[0]) === 'string' && (_innerArr$2 = innerArr[0]) !== null && _innerArr$2 !== void 0 && _innerArr$2.props.children[0].trim().match(/^( ?\d\.)/) ? {
        listStyle: 'none'
      } : {}
    }, innerArr.map(function (item) {
      return Array.isArray(item) ? _innerArrayToHtml(item) : item;
    }));
  };

  // Convert the main array to an HTML string
  var mainHtml = preact.h("ul", null, arr.map(function (item) {
    return Array.isArray(item) ? _innerArrayToHtml(item) : item;
  }));
  return mainHtml;
};
var prepareTextElements = function prepareTextElements(_ref4) {
  var text = _ref4.text,
    title = _ref4.title,
    settings = _ref4.settings,
    action = _ref4.action,
    terminologyClassName = _ref4.terminologyClassName;
  var elements = [];
  var currentDepths = [];
  var depthIndexMap = {};
  var prevDepth = 0;
  for (var i = 0; i < text.length; i++) {
    var t = text[i];
    var depth = (t.match(/in:/g) || []).length;
    var nestedItem = preact.h("li", {
      key: "prepare_text_".concat(title, "_nested_").concat(i)
    }, prepareClickableWords({
      text: t.replace(/in:/g, ''),
      settings: settings,
      action: action,
      terminologyClassName: terminologyClassName
    }));
    if (depth < prevDepth) {
      currentDepths.splice(currentDepths.indexOf(prevDepth), 1);
      delete depthIndexMap[prevDepth];
    }
    if (depth === 0) {
      elements.push(nestedItem);
    } else if (currentDepths.includes(depth)) {
      depthIndexMap[depth].push(nestedItem);
    } else if (prevDepth !== 0 && depth > prevDepth) {
      currentDepths.push(depth);
      depthIndexMap[prevDepth].push([nestedItem]);
      depthIndexMap[depth] = depthIndexMap[prevDepth][depthIndexMap[prevDepth].length - 1];
    } else {
      currentDepths.push(depth);
      elements.push([nestedItem]);
      depthIndexMap[depth] = elements[elements.length - 1];
    }
    prevDepth = depth;
  }
  return arrayToHtml(elements);
};
var Content = function Content(_ref5) {
  var heading = _ref5.heading,
    text = _ref5.text,
    _action = _ref5.action,
    showInnerTitle = _ref5.showInnerTitle,
    settings = _ref5.settings,
    terminologyClassName = _ref5.terminologyClassName;
  return preact.h("div", null, showInnerTitle && preact.h("h3", null, heading), text && prepareTextElements({
    text: text,
    title: heading,
    settings: settings,
    terminologyClassName: terminologyClassName,
    action: function action(_ref6) {
      var word = _ref6.word;
      if (_action) {
        _action({
          word: word
        });
      } else {
        console.log('word clicked: ', word);
      }
    }
  }));
};
var Title = function Title(_ref7) {
  var text = _ref7.text;
  return preact.h("h2", null, text);
};
var Guidance = function Guidance(_ref8) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref8), _ref8));
  return preact.h(Content, _extends({
    heading: "Guidance"
  }, props));
};
var Clarification = function Clarification(_ref9) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref9), _ref9));
  return preact.h(Content, _extends({
    heading: "Clarification"
  }, props));
};
var Ramadan = function Ramadan(_ref10) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref10), _ref10));
  return preact.h(Content, _extends({
    heading: "Ramadan"
  }, props));
};
var Marriage = function Marriage(_ref11) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref11), _ref11));
  return preact.h(Content, _extends({
    heading: "Marriage"
  }, props));
};

var useLocalStorage = function useLocalStorage(key, initialValue) {
  var _useState = hooks.useState(function () {
      try {
        var item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error('Error retrieving state from localStorage:', error);
        return initialValue;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];
  var setValue = function setValue(value) {
    try {
      // Allow value to be a function to support updating state based on previous value
      var valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting state in localStorage:', error);
    }
  };
  return [storedValue, setValue];
};

var css_248z = "\r\n.style-module_popUpModal__X6-9U, .style-module_settingsModal__QZBqN{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 1%;\r\n  background-color: #ddd;\r\n  z-index: 1;\r\n}\r\n\r\n.style-module_closeModalButton__b5OgK{\r\n  position: absolute;\r\n  top: 1%;\r\n  right: 1%;\r\n}\r\n\r\n.style-module_settingsButton__JOf0X{\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.style-module_closeModalButton__b5OgK img, .style-module_settingsButton__JOf0X img, .style-module_tab__DqXZa img {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.style-module_radioBoxItem__cH5gP{\r\n  display: inline;\r\n}";
var mainStyle = {"popUpModal":"style-module_popUpModal__X6-9U","settingsModal":"style-module_settingsModal__QZBqN","closeModalButton":"style-module_closeModalButton__b5OgK","settingsButton":"style-module_settingsButton__JOf0X","tab":"style-module_tab__DqXZa","radioBoxItem":"style-module_radioBoxItem__cH5gP"};
styleInject(css_248z);

var PopUpModal = function PopUpModal(_ref) {
  var popUpClassName = _ref.popUpClassName,
    displayPopUpModal = _ref.displayPopUpModal,
    setDisplayPopUpModal = _ref.setDisplayPopUpModal,
    popUpModalWord = _ref.popUpModalWord,
    popUpCloseButtonClassName = _ref.popUpCloseButtonClassName,
    popUpCloseIcon = _ref.popUpCloseIcon;
  if (!displayPopUpModal) {
    return preact.h(preact.Fragment, null);
  }
  return preact.h("div", {
    className: popUpClassName || mainStyle.popUpModal
  }, preact.h("h3", null, popUpModalWord, " ", "(".concat(terminologies[popUpModalWord.toLowerCase()].clarification.en, ")")), preact.h("p", null, "Description/Explanation coming soon inshallah"), preact.h("button", {
    className: popUpCloseButtonClassName || mainStyle.closeModalButton,
    onClick: function onClick() {
      return setDisplayPopUpModal(false);
    }
  }, typeof popUpCloseIcon === 'string' ? preact.h("img", {
    src: popUpCloseIcon,
    alt: "popup-close"
  }) : popUpCloseIcon));
};
var Levels = function Levels(_ref2) {
  var level = _ref2.level,
    setLevel = _ref2.setLevel,
    RadioBoxComponent = _ref2.RadioBoxComponent,
    radioBoxContainerClassName = _ref2.radioBoxContainerClassName;
  return preact.h("div", {
    className: radioBoxContainerClassName || ''
  }, LEVELS && LEVELS.map(function (lvl) {
    return RadioBoxComponent ? preact.h(RadioBoxComponent, {
      id: lvl,
      value: lvl,
      checked: lvl === level,
      action: function action() {
        return setLevel(lvl);
      },
      key: "settings_modal_levels_".concat(lvl)
    }) : preact.h("div", {
      key: "settings_modal_levels_".concat(lvl),
      className: mainStyle.radioBoxItem
    }, preact.h("input", {
      type: "radio",
      id: lvl,
      name: lvl,
      value: lvl,
      checked: lvl === level,
      onChange: function onChange() {
        return setLevel(lvl);
      }
    }), preact.h("label", {
      key: lvl,
      "for": lvl
    }, lvl));
  }), preact.h("ul", null, preact.h("li", null, LEVELS_CLARIFICATION[level])));
};
var Ordering = function Ordering(_ref3) {
  var order = _ref3.order,
    setOrder = _ref3.setOrder,
    RadioBoxComponent = _ref3.RadioBoxComponent,
    radioBoxContainerClassName = _ref3.radioBoxContainerClassName;
  return preact.h("div", {
    className: radioBoxContainerClassName || ''
  }, ORDERS && ORDERS.map(function (ordr) {
    return RadioBoxComponent ? preact.h(RadioBoxComponent, {
      id: ordr,
      value: ordr,
      checked: ordr === order,
      action: function action() {
        return setOrder(ordr);
      },
      key: "settings_modal_levels_".concat(ordr)
    }) : preact.h("div", {
      key: "settings_modal_levels_".concat(ordr),
      className: mainStyle.radioBoxItem
    }, preact.h("input", {
      type: "radio",
      id: ordr,
      name: ordr,
      value: ordr,
      checked: ordr === order,
      onChange: function onChange() {
        return setOrder(ordr);
      }
    }), preact.h("label", {
      key: ordr,
      "for": ordr
    }, ordr));
  }));
};
var Example = function Example(_ref4) {
  var settings = _ref4.settings,
    terminologyClassName = _ref4.terminologyClassName;
  return preact.h("div", null, preact.h("p", null, prepareTextElements({
    text: SETTINGS_EXAMPLE_TEXT,
    settings: settings,
    action: function action() {},
    terminologyClassName: terminologyClassName
  })));
};
var SettingsModal = function SettingsModal(_ref5) {
  var settings = _ref5.settings,
    setSettings = _ref5.setSettings,
    userId = _ref5.userId,
    hideModal = _ref5.hideModal,
    settingsModalClassName = _ref5.settingsModalClassName,
    settingsCloseButtonClassName = _ref5.settingsCloseButtonClassName,
    settingsCloseIcon = _ref5.settingsCloseIcon,
    RadioBoxComponent = _ref5.RadioBoxComponent,
    radioBoxContainerClassName = _ref5.radioBoxContainerClassName,
    terminologyClassName = _ref5.terminologyClassName;
  return preact.h("div", {
    className: settingsModalClassName || mainStyle.popUpModal
  }, preact.h("button", {
    className: settingsCloseButtonClassName || mainStyle.closeModalButton,
    onClick: hideModal
  }, typeof settingsCloseIcon === 'string' ? preact.h("img", {
    src: settingsCloseIcon,
    alt: "settings-close"
  }) : settingsCloseIcon), preact.h("h3", null, "Settings"), preact.h("h4", null, "Levels:"), preact.h(Levels, {
    level: settings[userId].level,
    RadioBoxComponent: RadioBoxComponent,
    radioBoxContainerClassName: radioBoxContainerClassName,
    setLevel: function setLevel(newLevel) {
      return setSettings(function (old) {
        old[userId].level = newLevel;
        return _objectSpread2({}, old);
      });
    }
  }), preact.h("h4", null, "Ordering:"), preact.h(Ordering, {
    order: settings[userId].order,
    RadioBoxComponent: RadioBoxComponent,
    radioBoxContainerClassName: radioBoxContainerClassName,
    setOrder: function setOrder(newOrder) {
      return setSettings(function (old) {
        old[userId].order = newOrder;
        return _objectSpread2({}, old);
      });
    }
  }), preact.h("h4", null, "Example:"), preact.h(Example, {
    settings: settings[userId],
    terminologyClassName: terminologyClassName
  }));
};
var Settings = function Settings(_ref6) {
  var settings = _ref6.settings,
    setSettings = _ref6.setSettings,
    userId = _ref6.userId,
    settingsClassName = _ref6.settingsClassName,
    settingsModalClassName = _ref6.settingsModalClassName,
    settingsOpenButtonClassName = _ref6.settingsOpenButtonClassName,
    settingsCloseButtonClassName = _ref6.settingsCloseButtonClassName,
    settingsIcon = _ref6.settingsIcon,
    settingsCloseIcon = _ref6.settingsCloseIcon,
    RadioBoxComponent = _ref6.RadioBoxComponent,
    radioBoxContainerClassName = _ref6.radioBoxContainerClassName,
    terminologyClassName = _ref6.terminologyClassName;
  var _useState = hooks.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    displaySettingsModal = _useState2[0],
    setDisplaySettingsModal = _useState2[1];
  return preact.h("div", {
    className: settingsClassName || mainStyle.settings
  }, preact.h("button", {
    className: settingsOpenButtonClassName || mainStyle.settingsButton,
    onClick: function onClick() {
      return setDisplaySettingsModal(function (old) {
        return !old;
      });
    }
  }, typeof settingsIcon === 'string' ? preact.h("img", {
    src: settingsIcon,
    alt: "settings_icon"
  }) : settingsIcon), displaySettingsModal && preact.h(SettingsModal, {
    settings: settings,
    setSettings: setSettings,
    userId: userId,
    settingsCloseButtonClassName: settingsCloseButtonClassName,
    settingsCloseIcon: settingsCloseIcon,
    radioBoxContainerClassName: radioBoxContainerClassName,
    terminologyClassName: terminologyClassName,
    hideModal: function hideModal() {
      return setDisplaySettingsModal(false);
    },
    settingsModalClassName: settingsModalClassName,
    RadioBoxComponent: RadioBoxComponent
  }));
};
var Hidayah = function Hidayah() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    content = _ref7.content,
    userId = _ref7.userId,
    action = _ref7.action,
    style = _ref7.style,
    className = _ref7.className,
    tabsContainerClassName = _ref7.tabsContainerClassName,
    tabClassName = _ref7.tabClassName,
    contentClassName = _ref7.contentClassName,
    terminologyClassName = _ref7.terminologyClassName,
    settingsCloseButtonClassName = _ref7.settingsCloseButtonClassName,
    popUpClassName = _ref7.popUpClassName,
    popUpCloseButtonClassName = _ref7.popUpCloseButtonClassName,
    settingsClassName = _ref7.settingsClassName,
    settingsModalClassName = _ref7.settingsModalClassName,
    settingsOpenButtonClassName = _ref7.settingsOpenButtonClassName,
    radioBoxContainerClassName = _ref7.radioBoxContainerClassName,
    _ref7$showTabsIcons = _ref7.showTabsIcons,
    showTabsIcons = _ref7$showTabsIcons === void 0 ? true : _ref7$showTabsIcons,
    _ref7$showTabsTitle = _ref7.showTabsTitle,
    showTabsTitle = _ref7$showTabsTitle === void 0 ? true : _ref7$showTabsTitle,
    _ref7$showTitle = _ref7.showTitle,
    showTitle = _ref7$showTitle === void 0 ? true : _ref7$showTitle,
    _ref7$showInnerTitle = _ref7.showInnerTitle,
    showInnerTitle = _ref7$showInnerTitle === void 0 ? true : _ref7$showInnerTitle,
    guidanceIcon = _ref7.guidanceIcon,
    clarificationIcon = _ref7.clarificationIcon,
    ramadanIcon = _ref7.ramadanIcon,
    marriageIcon = _ref7.marriageIcon,
    settingsIcon = _ref7.settingsIcon,
    settingsCloseIcon = _ref7.settingsCloseIcon,
    popUpCloseIcon = _ref7.popUpCloseIcon,
    RadioBoxComponent = _ref7.RadioBoxComponent;
  var _useState3 = hooks.useState('Guidance'),
    _useState4 = _slicedToArray(_useState3, 2),
    activeTab = _useState4[0],
    setActiveTab = _useState4[1];
  var _useState5 = hooks.useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    displayPopUpModal = _useState6[0],
    setDisplayPopUpModal = _useState6[1];
  var _useState7 = hooks.useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    popUpModalWord = _useState8[0],
    setPopUpModalTerm = _useState8[1];
  var _useLocalStorage = useLocalStorage('muslimah_settings', _defineProperty({}, userId, _objectSpread2({}, DEFAULT_SETTINGS))),
    _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
    settings = _useLocalStorage2[0],
    setSettings = _useLocalStorage2[1];
  var tabs = hooks.useMemo(function () {
    return ['Guidance', 'Clarification', 'Ramadan', 'Marriage'];
  }, []);
  hooks.useEffect(function () {
    var _settings$userId;
    // Keep tracking the new userIds
    if (!settings[userId] || ((_settings$userId = settings[userId]) === null || _settings$userId === void 0 ? void 0 : _settings$userId.order) === 'prayer') {
      // Since the last ordering item (prayer) has been removed, users who had previously selected it may be affected, thus necessitating a reset for them.
      setSettings(function (old) {
        old[userId] = _objectSpread2({}, DEFAULT_SETTINGS);
        return _objectSpread2({}, old);
      });
    }
  }, [userId]);
  var getIcon = function getIcon(_ref8) {
    var tab = _ref8.tab;
    switch (tab) {
      case 'Guidance':
        return guidanceIcon;
      case 'Clarification':
        return clarificationIcon;
      case 'Ramadan':
        return ramadanIcon;
      case 'Marriage':
        return marriageIcon;
      default:
        throw new Error("[Developer Error] No icon provided for the tab: \"".concat(tab, "\". Make sure pass the right tab name"));
    }
  };
  var alternativeAction = function alternativeAction(_ref9) {
    var word = _ref9.word;
    setDisplayPopUpModal(true);
    setPopUpModalTerm(word);
  };
  var handleTabClick = function handleTabClick(tab) {
    return setActiveTab(tab);
  };
  return preact.h("div", {
    className: className || '',
    style: _objectSpread2({}, style)
  }, preact.h(Settings, {
    settings: settings,
    setSettings: setSettings,
    userId: userId,
    settingsClassName: settingsClassName,
    settingsModalClassName: settingsModalClassName,
    settingsOpenButtonClassName: settingsOpenButtonClassName,
    RadioBoxComponent: RadioBoxComponent,
    settingsCloseButtonClassName: settingsCloseButtonClassName,
    settingsIcon: settingsIcon,
    settingsCloseIcon: settingsCloseIcon,
    radioBoxContainerClassName: radioBoxContainerClassName,
    terminologyClassName: terminologyClassName
  }), showTitle && preact.h(Title, {
    text: content.title
  }), preact.h("div", {
    className: tabsContainerClassName || ''
  }, tabs && tabs.map(function (tab) {
    return preact.h("button", {
      className: tabClassName || mainStyle.tab,
      onClick: function onClick() {
        return handleTabClick(tab);
      },
      disabled: activeTab === tab
    }, showTabsIcons && getIcon({
      tab: tab
    }) && typeof getIcon({
      tab: tab
    }) === 'string' ? preact.h("img", {
      src: getIcon({
        tab: tab
      }),
      alt: "".concat(tab, "_icon")
    }) : getIcon({
      tab: tab
    }), showTabsTitle && tab);
  })), preact.h(PopUpModal, {
    popUpClassName: popUpClassName,
    displayPopUpModal: displayPopUpModal,
    popUpModalWord: popUpModalWord,
    setDisplayPopUpModal: setDisplayPopUpModal,
    popUpCloseButtonClassName: popUpCloseButtonClassName,
    popUpCloseIcon: popUpCloseIcon
  }), preact.h("div", {
    className: contentClassName || ''
  }, activeTab === 'Guidance' && preact.h(Guidance, {
    action: action ? action : alternativeAction,
    text: content.guidance,
    showInnerTitle: showInnerTitle,
    settings: settings[userId] || DEFAULT_SETTINGS,
    terminologyClassName: terminologyClassName
  }), activeTab === 'Clarification' && preact.h(Clarification, {
    action: action ? action : alternativeAction,
    text: content.additionalClarifications,
    showInnerTitle: showInnerTitle,
    settings: settings[userId] || DEFAULT_SETTINGS,
    terminologyClassName: terminologyClassName
  }), activeTab === 'Ramadan' && preact.h(Ramadan, {
    action: action ? action : alternativeAction,
    text: content.ramadanClarifications,
    showInnerTitle: showInnerTitle,
    settings: settings[userId] || DEFAULT_SETTINGS,
    terminologyClassName: terminologyClassName
  }), activeTab === 'Marriage' && preact.h(Marriage, {
    action: action ? action : alternativeAction,
    text: content.maritalClarifications,
    showInnerTitle: showInnerTitle,
    settings: settings[userId] || DEFAULT_SETTINGS,
    terminologyClassName: terminologyClassName
  })));
};
Hidayah.propTypes = {
  content: PropTypes.object.isRequired,
  userId: PropTypes.string,
  action: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  tabClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  popUpClassName: PropTypes.string,
  popUpCloseButtonClassName: PropTypes.string,
  settingsClassName: PropTypes.string,
  settingsModalClassName: PropTypes.string,
  settingsOpenButtonClassName: PropTypes.string,
  settingsCloseButtonClassName: PropTypes.string,
  terminologyClassName: PropTypes.string,
  radioBoxContainerClassName: PropTypes.string,
  showTitle: PropTypes.bool,
  showTabsTitle: PropTypes.bool,
  showTabsIcons: PropTypes.bool,
  showInnerTitle: PropTypes.bool,
  guidanceIcon: PropTypes.oneOfType([PropTypes.string,
  // for image source
  PropTypes.element // for font awesome icon or other React elements
  ]),
  clarificationIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  ramadanIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  marriageIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  settingsIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  popUpCloseIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  settingsCloseIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  RadioBoxComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
};

const title$c = "Indeterminate";
const guidance$c = ["Keep recording your discharges:","in:It's Wajib to do so.","in:Accurate records help scholars assist you better."];
const additionalClarifications$b = ["This relates to your first set of discharge entries.","A definite ruling for them isn't possible yet as there's no confirmed Tuhr before these discharges.","For a precise ruling:","in:1. Consult a scholar for personalized advice. Or;","in:2. Share more detailed past cycle records for better guidance."];
const ramadanClarifications$a = ["More information is needed from you to provide guidance."];
const maritalClarifications$c = ["More information is needed from you to provide guidance."];

var initialBleeding = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$b,
  guidance: guidance$c,
  maritalClarifications: maritalClarifications$c,
  ramadanClarifications: ramadanClarifications$a,
  title: title$c
});

const title$b = "Indeterminate";
const guidance$b = ["Keep recording your discharges:","in:It's Wajib to do so. (especially in your situation)","in:Accurate records are crucial for scholars to help you."];
const additionalClarifications$a = ["Based on your recorded discharges, you are currently classified as Mutahayyirah.","More information is needed to give a specific ruling for this set of discharges.","You have two options available to remedy your situation:","in:in:1. Consult scholars for personalized advice (highly recommended for your case)","in:in:2. Share more detailed past cycle records, in the hope that it may include the needed information to disambiguate"];
const ramadanClarifications$9 = ["The rulings for your situation are highly complex and require scholarly guidance."];
const maritalClarifications$b = ["The rulings for your situation are highly complex and require scholarly guidance."];

var subseqeuentBleedings = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$a,
  guidance: guidance$b,
  maritalClarifications: maritalClarifications$b,
  ramadanClarifications: ramadanClarifications$9,
  title: title$b
});

const title$a = "Indeterminate";
const guidance$a = ["Kindly clarify the current status of your “Ongoing Bleeding”:","in:If it has stopped, note the time as you best recall it ended as \"Final Bleeding\".","in:If still continuing(spotting or otherwise), record it as \"Ongoing Bleeding\" for today."];
const additionalClarifications$9 = ["Since you last specified that you are having \"Ongoing Bleeding\", we need to know whether or not that is still the case or not, as accordingly the rulings can change.","Follow the instructions as mentioned under \"Guidance\" to update your records."];
const ramadanClarifications$8 = ["Kindly follow the instructions under \"Guidance\" so we can provide you with precise rulings."];
const maritalClarifications$a = ["Kindly follow the instructions under \"Guidance\" so we can provide you with precise rulings."];

var presentCycle = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$9,
  guidance: guidance$a,
  maritalClarifications: maritalClarifications$a,
  ramadanClarifications: ramadanClarifications$8,
  title: title$a
});

var propTypes = {
  action: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  tabClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  showTitle: PropTypes.bool,
  showTabsTitle: PropTypes.bool,
  showTabsIcons: PropTypes.bool,
  showInnerTitle: PropTypes.bool,
  guidanceIcon: PropTypes.oneOfType([PropTypes.string,
  // for image source
  PropTypes.element // for font awesome icon or other React elements
  ]),
  clarificationIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  ramadanIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  marriageIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

var _excluded$3 = ["scenario"];
var Indeterminate = function Indeterminate(_ref) {
  var scenario = _ref.scenario,
    props = _objectWithoutProperties(_ref, _excluded$3);
  var content;
  switch (scenario) {
    case 'initial-bleeding':
      content = initialBleeding;
      break;
    case 'subsequent-bleedings':
      content = subseqeuentBleedings;
      break;
    case 'present-cycle':
      content = presentCycle;
      break;
    default:
      throw new Error('exhausted');
  }
  return preact.h(Hidayah, _extends({
    content: content
  }, props));
};
Indeterminate.propTypes = _objectSpread2(_objectSpread2({}, propTypes), {}, {
  scenario: PropTypes.oneOf(['initial-bleeding', 'subsequent-bleedings', 'present-cycle']).isRequired
});

const title$9 = "Bleeding Most Likely Hayd";
const guidance$9 = ["Stop praying Salaah, fasting, Tilawah, Tawaaf etc.","When bleeding stops and it's unclear if it will resume, it's Wajib to complete your Salaah at the latest permissible times:","in:Fajr and Dhuhr: Pray at the last possible moment.","in:‘Asr, Maghrib, and ‘Isha: Pray before Makrooh time, defined as:","in:in:‘Asr: About 20 minutes before sunset (when the sun turns pale yellow).","in:in:Maghrib: When many stars are visible, but with Western horizon still red.","in:in:‘Isha: At the midpoint between Maghrib and Fajr for men able to attend Salaah in congregation. For women, this does not apply so they will complete ‘Isha at the last possible moment.","Ghusl is not required every time bleeding stops; Wudu is enough for Salaah."];
const additionalClarifications$8 = ["Hayd materializes when there's","in:at least 72 hours of bleeding(spotting or otherwise)","in:less than 15 days apart","Currently, your cycle hasn't met these criteria yet, so we must assume that this bleeding is Most Likely Hayd","Eventually, depending on how the future unfolds, Bleeding Most Likely Hayd will evolve into one of two possibilities:","in:Hayd, because the bleeding reached 72 hours. In this case:","in:in:If any Qadaa Salaah and/or fasting was done during the days of Hayd, then these need to be repeated.","in:in:Fard Salaah during the time of Hayd is exempt and is not subject to Qadaa","in:Istihadah, because the bleeding didn't end up reaching 72 hours. In this case:","in:in:Any Fard worship missed (even though on account of our guidance provided) is subject to Qadaa","in:in:Note: There is no sin for missing as you acted on the best available evidence"];
const ramadanClarifications$7 = ["Missing a Ramadan fast on account of a Bleeding Most Likely Hayd can take on the following scenarios:","in:If the bleeding started during daytime fasting, then it is Wajib to break your fast discreetly","in:If the bleeding started during nighttime and persists overnight until Fajr, then you are exempted from fasting that day","in:in:However, if the bleeding stopped at night before Fajr time sets in, such that there was enough time for Ghusl and Takbeer-e-Tahreemah before Fajr to be done, then it is required to fast that day.","in:If the bleeding stopped during daytime, then you must continue to observe fast-like behaviour (abstain from food, drink, and conjugal relations)","Any Ramadan fast that was missed, whether on account of a legitimate excuse (such as the above scenarios) or not is subject to Qadaa","in:If Qadaa is not possible on account of valid excuses, then Fidyah must be given in lieu of each missed fast. Kindly reach out to scholars for specific guidance"];
const maritalClarifications$9 = ["During this period, specific physical boundaries are set for the husband:","in:Direct contact with or viewing the wife's skin between the navel and knee is strictly prohibited.","in:Engaging in any sexual activity that stimulates the wife's vagina is forbidden, including conjugal relations and other forms of stimulation, such as masturbation.","However, within these limits, the husband may:","in:Rest his head on the wife's clothed lap.","in:Kiss any other part of the wife's body, including mouth-to-mouth kissing.","in:Engage in physical contact like fondling breasts.","in:Have non-penetrative physical contact with any of his body parts while ensuring no vaginal stimulation occurs.","Husband and wife will continue to interact with each other in day-to-day matters such as eating together, sleeping in the same bed etc.","Divorce during this time is impermissible, but if issued, it will be valid and carry its full implications."];

var content$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$8,
  guidance: guidance$9,
  maritalClarifications: maritalClarifications$9,
  ramadanClarifications: ramadanClarifications$7,
  title: title$9
});

var MostLikelyHayd = function MostLikelyHayd(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return preact.h(Hidayah, _extends({
    content: content$3
  }, props));
};
MostLikelyHayd.propTypes = propTypes;

const title$8 = "Most Likely Tuhr";
const guidance$8 = ["Your Ongoing Hayd has ended earlier than your previous cycle.","in:Note the exact duration of your previous Hayd (for instance, 7 days and 3 hours).","in:Note that your current Hayd is shorter (for instance, 4 days and 3 hours).","in:Calculate the difference between the two durations (e.g., 3 days). This is your \"Cautionary Period\"","For the beginning and ending of this period, be mindful of two types of Ghusl, respectively:","in:Wajib Ghusl: Perform Ghusl when bleeding stops before any worship.","in:in:If there's enough time to complete Ghusl and Salaah, do not miss the Salaah; if missed, then it is subject to Qadaa.","in:in:If there's no time for Ghusl before Salaah time ends, you are exempt from praying that Salaah.","in:in:If there's time for Ghusl but not for Takbeer-e-Tahreemah, you are exempt from praying that Salaah.","in:in:If there's just enough time for Ghusl and Takbeer-e-Tahreemah, then 'Isha must be performed; if missed, then it is subject to Qadaa.","in:Mustahabb Ghusl: Perform a precautionary Ghusl at the end of the \"Cautionary Period\""];
const additionalClarifications$7 = ["Tuhr is confirmed when:","in:15 days (360 hours) pass without bleeding that qualifies as Hayd.","So far, your cycle hasn't met these criteria yet.","\"Cautionary Period\" as referred to under \"Guidance\" is termed as cautionary to bring to your attention that depending on how the future unfolds, some/all the days within this period can still become Hayd.","Ghusl is Wajib whenever your Ongoing Hayd ends to maintain purity for worship.","If bleeding resumes within 15 days, it invalidates your Ghusl, requiring it to be redone. Otherwise, your worship will not be valid.","A precautionary follow-up Ghusl helps maintain purity if bleeding resumes after the \"Cautionary Period\"","Ensure to consult a scholar about the precautionary Ghusl if this is a source of confusion to you."];
const ramadanClarifications$6 = ["If Ongoing Hayd ends during the day, behave like a fasting person (abstain from food, drinks, and conjugal relationships).","If Ongoing Hayd ends at night, as long as there is enough time for Ghusl and Takbeer-e-Tahreemah before Fajr, then fasting that day is Fard and must be performed; if missed, then it is subject to Qadaa.","in:If no such time sufficient was remaining, then you will be considered as someone whose Hayd ended during the day and accordingly you will be required to behave like a fasting person for the remainder of the day. That day will be subject to Qadaa."];
const maritalClarifications$8 = ["During the \"Cautionary Period\", conjugal relationships will remain impermissible despite the bleeding having fully stopped.","Until such time, specific physical boundaries are set for the husband:","in:Direct contact with or viewing the wife's skin between the navel and knee is strictly prohibited.","in:Engaging in any sexual activity that stimulates the wife's vagina is forbidden, including conjugal relations and other forms of stimulation, such as masturbation.","However, within these limits, the husband may:","in:Rest his head on the wife's clothed lap.","in:Kiss any other part of the wife's body, including mouth-to-mouth kissing.","in:Engage in physical contact like fondling breasts.","in:Have non-penetrative physical contact with any of his body parts while ensuring no vaginal stimulation occurs.","Husband and wife will continue to interact with each other in day-to-day matters such as eating together, sleeping in the same bed etc.","Divorce during this time is impermissible, but if issued, it will be valid and carry its full implications."];

var beforeHabit = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$7,
  guidance: guidance$8,
  maritalClarifications: maritalClarifications$8,
  ramadanClarifications: ramadanClarifications$6,
  title: title$8
});

const title$7 = "Most Likely Tuhr";
const guidance$7 = ["Based on the latest information provided by you, your Ongoing Hayd ended after your latest Hayd habit and did not exceed 10 days.","Perform Ghusl to attain purity and resume your regular worship (prayer, fasting, etc.).","If Hayd ended just before a prayer time with enough time for Ghusl and Takbeer-e-Tahreemah, then such a Salaah is Fard. If missed, then it is subject to Qadaa; otherwise not.","Keep track of your Tuhr until 15 days pass since the end of your Hayd, as the ruling can change."];
const ramadanClarifications$5 = ["If Hayd ended during the day, act like a fasting person for the rest of the day (abstain from food, drinks, and conjugal relationships).","If Hayd ended before Fajr with enough time for Ghusl and Takbeer-e-Tahreemah, then fasting for that day is required. If missed, then it is subject to Qadaa.","in:If no such time sufficient was remaining, then you will be considered as someone whose Hayd ended during the day and accordingly you will be required to behave like a fasting person for the remainder of the day. That day will be subject to Qadaa."];
const maritalClarifications$7 = ["Conjugal relationships are allowed as long as bleeding has not resumed."];

var before10Days = /*#__PURE__*/Object.freeze({
  __proto__: null,
  guidance: guidance$7,
  maritalClarifications: maritalClarifications$7,
  ramadanClarifications: ramadanClarifications$5,
  title: title$7
});

var _excluded$2 = ["scenario"];
var MostLikelyTuhr = function MostLikelyTuhr(_ref) {
  var _ref$scenario = _ref.scenario,
    scenario = _ref$scenario === void 0 ? 'complete' : _ref$scenario,
    props = _objectWithoutProperties(_ref, _excluded$2);
  var content;
  switch (scenario) {
    case 'before-habit':
      content = beforeHabit;
      break;
    case 'before-10-days':
      content = before10Days;
      break;
    default:
      throw new Error('exhausted');
  }
  return preact.h(Hidayah, _extends({
    content: content
  }, props));
};
MostLikelyTuhr.propTypes = _objectSpread2(_objectSpread2({}, propTypes), {}, {
  scenario: PropTypes.oneOf(['before-habit', 'before-10-days']).isRequired
});

const title$6 = "Bleeding Most Likely Istihadah";
const guidance$6 = ["Bleeding in this period is likely not Hayd and should be treated according to the ruling of Istihadah, as such:","in:Ignore all bleeding (regardless of its volume/color) and continue your regular worship practices:","in:in:Five daily Salaah.","in:in:Fasting during Ramadan.","in:in:Tilawah of Quran.","Renew Wudu whenever bleeding/spotting occurs. If this happens during Salaah, then Salaah breaks and must be restarted.","If bleeding frequency prevents completion of Salaah, follow the guidelines for Ma’dhur as detailed in this link: https://mensesmatters.org/rulings-for-the-excused-madhur"];
const additionalClarifications$6 = ["Based on all the evidence available, this bleeding is currently classified as Istihadah:","in:Treat it like a nosebleed. It breaks Wudu but doesn’t exempt you from Fard / Wajib worship.","in:Any Nafl and Sunnah Salaah / Fasting performed, when it was nullified after commencing it in a state of Tuhr is subject to Qadaa.","Bleeding Most Likely Istihadah can eventually evolve into Hayd, and thus exempt and invalidate the worship performed accordingly. If that happens, then keep in mind:","in:If any Qadaa Salaah was performed during these days, then they are to be repeated.","in:Fard Salaah, though nullified, need not be repeated.","in:Any fasting performed will be nullified. As such you are to repeat Ramadan fasts and Qadaa fasts.","in:Any Nafl and Sunnah Salaah / Fasting performed, when it was nullified after commencing it in a state of Hayd is NOT subject to Qadaa. If they were commenced in a state of Tuhr and then Hayd nullified them, then they are subject to Qadaa","Tilawah of Quran is not subject to Qadaa"];
const maritalClarifications$6 = ["One ought to abstain from conjugal relationships during this time. For more information, kindly follow this link: https://mensesmatters.org/intercourse-during-early-blood/"];

var content$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$6,
  guidance: guidance$6,
  maritalClarifications: maritalClarifications$6,
  title: title$6
});

var MostLikelyIstihadah = function MostLikelyIstihadah(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return preact.h(Hidayah, _extends({
    content: content$2
  }, props));
};
MostLikelyIstihadah.propTypes = propTypes;

const title$5 = "Hayd";
const guidance$5 = ["Fard prayers performed during this period are nullified and are not subject to Qadaa.","If Qadaa prayers were completed during this time, then they are nullified and must be repeated."];
const additionalClarifications$5 = ["In total there are three different terminologies we use:","in:Hayd: This is a historic, religious fact. It cannot undergo any change despite what may happen in the future.","in:Bleeding Most Likely Hayd: This is a bleeding episode happening in your current cycle, and so far is less than 72 hours. Either it will evolve to Ongoing Hayd, or either it will evolve to Istihadah.","in:Ongoing Hayd: This is a bleeding episode happening in your current cycle, lasting 72 hours or more. Either it will evolve to Hayd, or either it will evolve to a portion being Hayd and a portion being Istihadah.","It is important to be vigilant of how Bleeding Most Likely Hayd and Ongoing Hayd evolve, so that you know exactly what days are subject to Qadaa for your worship."];
const ramadanClarifications$4 = ["All types of fasting(including Nafl) during these days are nullified:","in:Fard and Waajib fasting are subject to Qadaa","in:Sunnah and Nafl fasting are subject to Qadaa provided they were started before Hayd started during the day."];
const maritalClarifications$5 = ["Conjugal relations are strictly forbidden during this period.","Divorces initiated by the husband, though prohibited, will still be effective with all associated consequences."];

var content$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$5,
  guidance: guidance$5,
  maritalClarifications: maritalClarifications$5,
  ramadanClarifications: ramadanClarifications$4,
  title: title$5
});

var Hayd = function Hayd(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return preact.h(Hidayah, _extends({
    content: content$1
  }, props));
};
Hayd.propTypes = propTypes;

const title$4 = "Tuhr";
const guidance$4 = ["These are the days in which you are able to attain ritual purity (through Wudu / Ghusl) that enables you to perform your religious observances (Fard, Wajib, Sunnah and Nafl), such as:","in:Salaah","in:Fasting","in:Tilawah of Quran","in:Tawaaf"];
const additionalClarifications$4 = ["Tuhr are those days in which a woman is not undergoing Hayd or Nifaas","She is to observe all seasonal/daily religious observances during this time."];
const maritalClarifications$4 = ["Conjugal relationships are permissible","Divorce during this time is permissible, provided no conjugal relationships have taken place in this period","If conjugal relationships have taken place, then divorce will be Makrooh. However, it will still be valid and carry its full implications."];

var completeTuhr = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$4,
  guidance: guidance$4,
  maritalClarifications: maritalClarifications$4,
  title: title$4
});

const title$3 = "Tuhr";
const guidance$3 = ["Based on the latest inputs you provided, your Ongoing Hayd exceeded 10 days, on account of which we needed to apply your Habit.","Accordingly, Hayd and Tuhr have been retroactively applied and you need to account for the fact that:","in:Any worship performed during the days now marked as Hayd is invalidated","in:Any Wajib Ghusl performed during the days now marked as Hayd is invalidated","in:Any day that has changed from Ongoing Hayd to Tuhr is subject to Qadaa for Salaah","If you were previously advised about doing a precautionary Ghusl but you did not do that, then all worship done from the point that Hayd has officially ended until the next time you did Ghusl is invalidated and will need to be repeated."];
const additionalClarifications$3 = ["Matters have consolidated as your Ongoing Bleeding exceeded 10 days","Accordingly, your habit was applied and the previous guidance you received has changed accordingly.","If you would like to keep track of your habit for future reference, then look at the number of days of Hayd that were marked off for your current cycle as well as the number of days of Tuhr preceding your last Hayd.","Ensure to consult a scholar about the precautionary Ghusl if this is a source of confusion to you."];
const ramadanClarifications$3 = ["Take note of all the days subject to Qadaa as detailed under \"Guidance\""];
const maritalClarifications$3 = ["Conjugal relationships are permissible"];

var concludingExcess10DayBleeding = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$3,
  guidance: guidance$3,
  maritalClarifications: maritalClarifications$3,
  ramadanClarifications: ramadanClarifications$3,
  title: title$3
});

var _excluded$1 = ["scenario"];
var Tuhr = function Tuhr(_ref) {
  var _ref$scenario = _ref.scenario,
    scenario = _ref$scenario === void 0 ? 'complete' : _ref$scenario,
    props = _objectWithoutProperties(_ref, _excluded$1);
  var content;
  switch (scenario) {
    case 'complete':
      content = completeTuhr;
      break;
    case 'concludes-excess-10-day-bleeding':
      content = concludingExcess10DayBleeding;
      break;
    default:
      throw new Error('exhausted');
  }
  return preact.h(Hidayah, _extends({
    content: content
  }, props));
};
Tuhr.propTypes = _objectSpread2(_objectSpread2({}, propTypes), {}, {
  scenario: PropTypes.oneOf(['complete', 'concludes-excess-10-day-bleeding']).isRequired
});

const title$2 = "Ongoing Hayd";
const guidance$2 = ["When bleeding stops and it's unclear if it will resume, it's Wajib to complete your Salaah at the latest permissible times:","in:Fajr and Dhuhr: Pray at the last possible moment.","in:‘Asr, Maghrib, and ‘Isha: Pray before Makrooh time, defined as:","in:in:‘Asr: About 20 minutes before sunset (when the sun turns pale yellow).","in:in:Maghrib: When many stars are visible, but with Western horizon still red.","in:in:‘Isha: At the midpoint between Maghrib and Fajr for men able to attend Salaah in congregation. For women, this does not apply so they will complete ‘Isha at the last possible moment.","Perform Ghusl before any act of worship (like Salaah, Quran, or fasting) each time bleeding stops."];
const additionalClarifications$2 = ["Note: \"Ongoing Hayd\" is a terminology introduced to express a Hayd actively in progress today in your current cycle.","This distinction helps us to be more specific and precise in the rulings that apply to you on this given moment."];
const ramadanClarifications$2 = ["Missing a Ramadan fast on account of Hayd can take on the following scenarios:","in:If the bleeding started during daytime fasting, then it is Wajib to break your fast discreetly","in:If the bleeding started during nighttime and persists overnight until Fajr, then you are exempted from fasting that day","in:in:However, if the bleeding stopped at night before Fajr time sets in, such that there was enough time for Ghusl and Takbeer-e-Tahreemah before Fajr to be done, then it is required to fast that day.","in:If the bleeding stopped during daytime, then you must continue to observe fast-like behaviour (abstain from food, drink, and conjugal relations)","Any Ramadan fast that was missed, whether on account of a legitimate excuse (such as the above scenarios) or not is subject to Qadaa","in:If Qadaa is not possible on account of valid excuses, then Fidyah must be given in lieu of each fast missed. Kindly reach out to scholars for specific guidance"];
const maritalClarifications$2 = ["During this period, specific physical boundaries are set for the husband:","in:Direct contact with or viewing the wife's skin between the navel and knee is strictly prohibited.","in:Engaging in any sexual activity that stimulates the wife's vagina is forbidden, including conjugal relations and other forms of stimulation, such as masturbation.","However, within these limits, the husband may:","in:Rest his head on the wife's clothed lap.","in:Kiss any other part of the wife's body, including mouth-to-mouth kissing.","in:Engage in physical contact like fondling breasts.","in:Have non-penetrative physical contact with any of his body parts while ensuring no vaginal stimulation occurs.","Husband and wife will continue to interact with each other in day-to-day matters such as eating together, sleeping in the same bed etc.","Conjugal relationships will remain impermissible even if the bleeding has fully stopped. (because this is still the time before the Hayd habit.)","Divorce during this time is impermissible, but if issued, it will be valid and carry its full implications."];

var tillHabit = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$2,
  guidance: guidance$2,
  maritalClarifications: maritalClarifications$2,
  ramadanClarifications: ramadanClarifications$2,
  title: title$2
});

const title$1 = "Ongoing Hayd";
const guidance$1 = ["When bleeding stops and it's unclear if it will resume, it's Mustahabb to complete your Salaah at the latest permissible times:","in:Fajr and Dhuhr: Pray at the last possible moment.","in:‘Asr, Maghrib, and ‘Isha: Pray before Makrooh time, defined as:","in:in:‘Asr: About 20 minutes before sunset (when the sun turns pale yellow).","in:in:Maghrib: When many stars are visible, but with Western horizon still red.","in:in:‘Isha: At the midpoint between Maghrib and Fajr for men able to attend Salaah in congregation. For women, this does not apply so they will complete ‘Isha at the last possible moment.","Perform Ghusl before any act of worship (like Salaah, Quran, or fasting) each time bleeding stops."];
const additionalClarifications$1 = ["Note: \"Ongoing Hayd\" is a terminology introduced to express a Hayd actively in progress today.","This distinction helps us to be more specific in the rulings that apply to you on this given moment"];
const ramadanClarifications$1 = ["Missing a Ramadan fast on account of Hayd can take on the following scenarios:","in:If the bleeding started during daytime fasting, then it is Wajib to break your fast discreetly","in:If the bleeding started during nighttime and persists overnight until Fajr, then you are exempted from fasting that day","in:in:However, if the bleeding stopped at night before Fajr time sets in, such that there was enough time for Ghusl and Takbeer-e-Tahreemah before Fajr to be done, then it is required to fast that day.","in:If the bleeding stopped during daytime, then you must continue to observe fast-like behaviour (abstain from food, drink, and conjugal relations)","Any Ramadan fast that was missed, whether on account of a legitimate excuse (such as the above scenarios) or not is subject to Qadaa","in:If Qadaa is not possible on account of valid excuses, then Fidyah must be given in lieu of each fast missed. Kindly reach out to scholars for specific guidance"];
const maritalClarifications$1 = ["During this period, specific physical boundaries are set for the husband:","in:Direct contact with or viewing the wife's skin between the navel and knee is strictly prohibited.","in:Engaging in any sexual activity that stimulates the wife's vagina is forbidden, including conjugal relations and other forms of stimulation, such as masturbation.","However, within these limits, the husband may:","in:Rest his head on the wife's clothed lap.","in:Kiss any other part of the wife's body, including mouth-to-mouth kissing.","in:Engage in physical contact like fondling breasts.","in:Have non-penetrative physical contact with any of his body parts while ensuring no vaginal stimulation occurs.","Husband and wife will continue to interact with each other in day-to-day matters such as eating together, sleeping in the same bed etc.","Whenever the bleeding has ended and one does not expect it to resume anytime soon, then conjugal relationships are allowed provided the wife has taken Ghusl","Divorce during this time is impermissible, but if issued, it will be valid and carry its full implications."];

var till10 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications$1,
  guidance: guidance$1,
  maritalClarifications: maritalClarifications$1,
  ramadanClarifications: ramadanClarifications$1,
  title: title$1
});

var _excluded = ["scenario"];
var OngoingHayd = function OngoingHayd(_ref) {
  var scenario = _ref.scenario,
    props = _objectWithoutProperties(_ref, _excluded);
  var content;
  switch (scenario) {
    case 'until-habit':
      content = tillHabit;
      break;
    case 'until-10-days':
      content = till10;
      break;
    default:
      throw new Error('exhausted');
  }
  return preact.h(Hidayah, _extends({
    content: content
  }, props));
};
OngoingHayd.propTypes = _objectSpread2(_objectSpread2({}, propTypes), {}, {
  scenario: PropTypes.oneOf(['until-habit', 'until-10-days']).isRequired
});

const title = "Istihadah";
const guidance = ["Bleeding outside the days of Hayd or Nifaas is termed Istihadah.","Treat this bleeding like a nosebleed:","in:Continue your daily prayers and fasting.","in:If bleeding is continuous, wait until it subsides to pray.","in:If prayer time is about to expire, perform Wudu and pray as normal.","in:If bleeding continues throughout an entire prayer time, making it impossible to complete Wudu and prayer, refer to the Ma’dhur ruling: https://mensesmatters.org/rulings-for-the-excused-madhur"];
const additionalClarifications = ["This bleeding might seem heavy like Hayd or Nifaas, but since it occurs outside the recognized days, it should be ignored."];
const ramadanClarifications = ["This bleeding has no religious implications on fasting"];
const maritalClarifications = ["Conjugal relationships are permissible, despite the bleeding"];

var content = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalClarifications: additionalClarifications,
  guidance: guidance,
  maritalClarifications: maritalClarifications,
  ramadanClarifications: ramadanClarifications,
  title: title
});

var Istihadah = function Istihadah(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return preact.h(Hidayah, _extends({
    content: content
  }, props));
};
Istihadah.propTypes = propTypes;

exports.Hayd = Hayd;
exports.Indeterminate = Indeterminate;
exports.Istihadah = Istihadah;
exports.MostLikelyHayd = MostLikelyHayd;
exports.MostLikelyIstihadah = MostLikelyIstihadah;
exports.MostLikelyTuhr = MostLikelyTuhr;
exports.OngoingHayd = OngoingHayd;
exports.Tuhr = Tuhr;
//# sourceMappingURL=bundle.js.map

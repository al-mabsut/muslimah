'use strict';

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

var css_248z$1 = ".index-module_styling__a2FxM {\r\n  font-size: x-large;\r\n  color: green;\r\n}\r\n";
var style$1 = {"styling":"index-module_styling__a2FxM"};
styleInject(css_248z$1);

var Muslimah = function Muslimah(_ref) {
  var children = _ref.children;
  return h("div", null, h("div", {
    className: style$1.styling
  }, "Salaam, Muslimah!"), children);
};

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
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
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
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var react = {exports: {}};

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
react_development.exports;

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.2.0';

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types.
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		} 
	} (react_development, react_development.exports));
	return react_development.exports;
}

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";
	return react_production_min;
}

if (process.env.NODE_ENV === 'production') {
  react.exports = requireReact_production_min();
} else {
  react.exports = requireReact_development();
}

var reactExports = react.exports;

var css_248z = "button {\r\n  cursor: pointer;\r\n}\r\n\r\n.index-module_modalOpenBtn__VFcog{\r\n  background: transparent;\r\n  border: none;\r\n  border-radius: 50%;;\r\n  cursor: pointer;\r\n  transition: all .5s ease;\r\n  width: 32px;\r\n  height: 32px;\r\n  box-shadow: 0px 0px 35px 0px rgba(92,19,176,1);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.index-module_modalOpenBtn__VFcog:hover{\r\n  opacity: .6;\r\n}\r\n\r\n.index-module_mainModal__KEVBm{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: linear-gradient(21.24deg, #8E78FF -4.91%, #FC7D7B 91.26%);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.index-module_mainModalContainer__8et8R{\r\n  width: 90%;\r\n  min-width: 320px;\r\n  height: calc(90% - 20px);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  background: #fff;\r\n  position: relative;\r\n  cursor: initial;\r\n}\r\n\r\n.index-module_modalCloseBtn__brfnC{\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: all .5s ease;\r\n  width: 32px;\r\n  height: 32px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.index-module_modalCloseBtn__brfnC:hover{\r\n  opacity: .6;\r\n}\r\n/* Tabs */\r\n.index-module_tabsContainer__GBxrB{\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.index-module_tabsHeader__v0sXd{\r\n  display: flex;\r\n  align-items: center;\r\n  transition: all .5s ease;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.index-module_tabHeader__rgFtW{\r\n  height: 40px;\r\n  width: 80px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: transparent;\r\n  border: none;\r\n  background: #eee;\r\n}\r\n\r\n.index-module_selectedTabHeader__fC8WE{\r\n  background: #fff;\r\n  filter: grayscale(1);\r\n}\r\n\r\n.index-module_tabsBody__FyAZ6{\r\n  overflow: hidden auto;\r\n  padding: 10px;\r\n  background: #fff;\r\n}";
var style = {"modalOpenBtn":"index-module_modalOpenBtn__VFcog","mainModal":"index-module_mainModal__KEVBm","mainModalContainer":"index-module_mainModalContainer__8et8R","modalCloseBtn":"index-module_modalCloseBtn__brfnC","tabsContainer":"index-module_tabsContainer__GBxrB","tabsHeader":"index-module_tabsHeader__v0sXd","tabHeader":"index-module_tabHeader__rgFtW","selectedTabHeader":"index-module_selectedTabHeader__fC8WE","tabsBody":"index-module_tabsBody__FyAZ6"};
styleInject(css_248z);

var img$3 = "data:image/svg+xml,%3csvg width='18' height='21' viewBox='0 0 18 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_335_3)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.76659 20.0609H16.6431C17.5236 20.0609 17.8307 19.7039 17.8307 18.8733V17.0918C17.8307 16.7638 17.5648 16.498 17.2369 16.498C16.9089 16.498 16.6431 16.7638 16.6431 17.0918V18.8733H4.76659V4.94851C4.76659 3.60378 4.53033 2.63893 4.16817 1.97939H15.4554C16.0274 1.97939 16.6431 2.90853 16.6431 4.94851V14.4893C16.6431 14.8172 16.9089 15.0831 17.2369 15.0831C17.5648 15.0831 17.8307 14.8172 17.8307 14.4893V4.94851C17.8307 1.88371 16.6037 0.791748 15.4554 0.791748H2.3913C1.243 0.791748 0.019165 1.71817 0.019165 4.78297C0.0191503 5.23824 0.272649 5.54233 0.727925 5.54233H3.57894V18.8733C3.57894 19.6511 3.95254 20.0609 4.76659 20.0609ZM1.22245 4.35469C1.3297 2.72733 1.87804 1.97939 2.3913 1.97939C2.90456 1.97939 3.45289 2.72733 3.56014 4.35469H1.22245Z' fill='url(%23paint0_linear_335_3)'/%3e%3cpath d='M8.92335 9.14487H12.4863C12.8142 9.14487 13.0801 9.41074 13.0801 9.73869C13.0801 10.0666 12.8142 10.3325 12.4863 10.3325H8.92335C8.5954 10.3325 8.32953 10.0666 8.32953 9.73869C8.32953 9.41074 8.5954 9.14487 8.92335 9.14487Z' fill='url(%23paint1_linear_335_3)'/%3e%3cpath d='M14.8616 12.7078H6.54807C6.22012 12.7078 5.95425 12.4419 5.95425 12.114C5.95425 11.786 6.22012 11.5202 6.54807 11.5202H14.8616C15.1895 11.5202 15.4554 11.786 15.4554 12.114C15.4554 12.4419 15.1895 12.7078 14.8616 12.7078Z' fill='url(%23paint2_linear_335_3)'/%3e%3cpath d='M6.54807 15.0831H14.8616C15.1895 15.0831 15.4554 14.8172 15.4554 14.4893C15.4554 14.1613 15.1895 13.8954 14.8616 13.8954H6.54807C6.22012 13.8954 5.95425 14.1613 5.95425 14.4893C5.95425 14.8172 6.22012 15.0831 6.54807 15.0831Z' fill='url(%23paint3_linear_335_3)'/%3e%3cpath d='M8.92334 17.6856H6.54805C6.2201 17.6856 5.95422 17.4197 5.95422 17.0918C5.95422 16.7638 6.2201 16.498 6.54805 16.498H8.92334C9.25129 16.498 9.51716 16.7638 9.51716 17.0918C9.51716 17.4197 9.25129 17.6856 8.92334 17.6856Z' fill='url(%23paint4_linear_335_3)'/%3e%3cpath d='M14.8616 16.498H12.4863C12.1583 16.498 11.8925 16.7638 11.8925 17.0918C11.8925 17.4197 12.1583 17.6856 12.4863 17.6856H14.8616C15.1895 17.6856 15.4554 17.4197 15.4554 17.0918C15.4554 16.7638 15.1895 16.498 14.8616 16.498Z' fill='url(%23paint5_linear_335_3)'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.096 3.41145C9.25377 3.41145 8.57101 4.09422 8.57101 4.93645V6.28831C8.57101 7.13054 9.25377 7.81331 10.096 7.81331H11.449C12.2912 7.81331 12.974 7.13054 12.974 6.28831V4.93645C12.974 4.09422 12.2912 3.41145 11.449 3.41145H10.096ZM9.62101 4.93645C9.62101 4.67412 9.83367 4.46145 10.096 4.46145H11.449C11.7113 4.46145 11.924 4.67412 11.924 4.93645V6.28831C11.924 6.55064 11.7113 6.76331 11.449 6.76331H10.096C9.83367 6.76331 9.62101 6.55064 9.62101 6.28831V4.93645Z' fill='url(%23paint6_linear_335_3)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_335_3' x1='8.92493' y1='0.791748' x2='8.92493' y2='20.0609' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FC7D7B'/%3e%3cstop offset='1' stop-color='%238E78FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_335_3' x1='10.7048' y1='9.14487' x2='10.7048' y2='10.3325' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FC7D7B'/%3e%3cstop offset='1' stop-color='%238E78FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_335_3' x1='10.7048' y1='11.5202' x2='10.7048' y2='12.7078' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FC7D7B'/%3e%3cstop offset='1' stop-color='%238E78FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_335_3' x1='10.7048' y1='13.8954' x2='10.7048' y2='15.0831' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FC7D7B'/%3e%3cstop offset='1' stop-color='%238E78FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_335_3' x1='7.73569' y1='16.498' x2='7.73569' y2='17.6856' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FC7D7B'/%3e%3cstop offset='1' stop-color='%238E78FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_335_3' x1='13.6739' y1='16.498' x2='13.6739' y2='17.6856' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FC7D7B'/%3e%3cstop offset='1' stop-color='%238E78FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear_335_3' x1='10.7725' y1='3.41145' x2='10.7725' y2='7.81331' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FC7D7B'/%3e%3cstop offset='1' stop-color='%238E78FF'/%3e%3c/linearGradient%3e%3cclipPath id='clip0_335_3'%3e%3crect width='18' height='21' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIlSURBVHgB7ZZfchJBEMa/WQSChGQ3lWiVUimwKlHf4AbxBClvkBwhJ4ieQDwBegNvkOQGPIulpCSV0orJLokJCEw7vRgK2d4/8GaZ38vQ3TPzMT09Mwvc8a+jknZsfr3YgrK2AapMDG9orY+erjsfks4TK8hCSqk6AaXQSRRaekivN9edd4jBigo2T7x9M9tBlBhDhJKyVL3Z9t4gBhUpRvQKM6NqG8XlvdCo5PzYvthRUHXMyRC096zo1BILfmq7X+LSGIN71adytey404HAHvLqJDF7MYN06u/u94y9UshCwM6lsSMFAoKWUtsBn6WwsrSAx2v5sSiLFY3Nfo5Pk0JwHlFQUXB1WhNOf1z7IiyaTY/E2P7u3vhxgYrkDPy1ZtsVRzNL9zN44OTG9pnXNZvVC+uOlJUtPXmUO570RZ7DaTrXvzAYav83t2zPSjClpsLCOj+0c34ab3qDUXpX8+L+3eL1ul4SwZY0eHV5AYV8BueXPZyc/fTbbDqFNeOXIHPdJToWQ6KjQCezCnsx64ucd7q+j1u2C2ZfpVVaUIcQkFYYuPm5Cj+fdsZit7B9/O1SrFLS+j0ExA0wlXpgmi3Mz+FG0X4hBcQqHfRpl0L2MgEujw8LioLPy07LJOVlVMWGYdK7Oxo/gyCzWXQa/T5Vk66Uq5JA1bjXP9EnBl/opuu+kl8Q17ybb68GqEnHYC7BCeGKpVHSFuw/rgZnAnf8V/wG8QnQj1rUIw8AAAAASUVORK5CYII=";

var Modal = function Modal(_ref) {
  var tabsIcons = _ref.tabsIcons,
    tabsContentKeys = _ref.tabsContentKeys,
    tabsContent = _ref.tabsContent;
  var _useState = reactExports.useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var _useState3 = reactExports.useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedTabIndex = _useState4[0],
    setSelectedTabIndex = _useState4[1];
  return h("div", null, h("button", {
    className: style.modalOpenBtn,
    onClick: function onClick() {
      return setIsModalOpen(true);
    }
  }, h("img", {
    src: img$3,
    alt: "Open Modal",
    width: "24px",
    height: "24px"
  })), isModalOpen && h("div", {
    className: style.mainModal,
    onClick: function onClick() {
      return setIsModalOpen(false);
    }
  }, h("div", {
    className: style.mainModalContainer,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, h("button", {
    className: style.modalCloseBtn,
    onClick: function onClick() {
      return setIsModalOpen(false);
    }
  }, h("img", {
    src: img$2,
    alt: "Close Modal",
    width: "24px",
    height: "24px"
  })), h("div", {
    className: style.tabsContainer
  }, h("div", {
    className: style.tabsHeader
  }, tabsIcons.map(function (tab, i) {
    return h("button", {
      className: "".concat(style.tabHeader, " ").concat(selectedTabIndex === i ? style.selectedTabHeader : ''),
      onClick: function onClick() {
        return setSelectedTabIndex(i);
      },
      key: "tab_".concat(i)
    }, h("img", {
      src: tab,
      alt: "tab",
      width: "24px",
      height: "24px"
    }));
  })), h("div", {
    className: style.tabsBody
  }, tabsContent[tabsContentKeys[selectedTabIndex]].map(function (text) {
    return h("p", null, text);
  }))))));
};

var img$1 = "data:image/png;base64,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";

var img = "data:image/png;base64,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";

var mdStrToObj = function mdStrToObj(md) {
  var lines = md.split('\n');
  var currentObj = {};
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (line.startsWith('##')) {
      var subtitle = line.replace('## ', '');
      currentObj[subtitle] = [];
    } else if (line.startsWith('-')) {
      var content = line.replace('-', '').trim();
      var keys = Object.keys(currentObj);
      var lastKey = keys[keys.length - 1];
      currentObj[lastKey].push(content);
    }
  }
  return currentObj;
};

/* Creating a mapping for translating various tab titles in all languages to English so we can easily load the icons */
var iconNameMapping = {
  Guidance: 'Guidance',
  إرشاد: 'Guidance',
  'Additional Clarifications': 'Additional Clarifications',
  'توضيحات إضافية': 'Additional Clarifications',
  'Ramadan Clarifications': 'Ramadan Clarifications',
  'توضيحات رمضان': 'Ramadan Clarifications',
  'Marital Clarifications': 'Marital Clarifications',
  'توضيحات زوجية': 'Marital Clarifications'
};

var iconMapping = {
  Guidance: img$3,
  'Additional Clarifications': img$3,
  'Ramadan Clarifications': img,
  'Marital Clarifications': img$1
};
var BaseHaydModal = function BaseHaydModal(_ref) {
  var contentStore = _ref.contentStore,
    contentStoreKey = _ref.contentStoreKey;
  var _useMemo = reactExports.useMemo(function () {
      var haydContent = mdStrToObj(contentStore[contentStoreKey]);
      var tabsKeys = Object.keys(haydContent);
      var icons = tabsKeys.reduce(function (arr, key) {
        arr.push(iconMapping[iconNameMapping[key]]);
        return arr;
      }, []);
      return {
        haydContent: haydContent,
        tabsKeys: tabsKeys,
        icons: icons
      };
    }, [contentStore, contentStoreKey]),
    haydContent = _useMemo.haydContent,
    tabsKeys = _useMemo.tabsKeys,
    icons = _useMemo.icons;
  return h(Modal, {
    tabsIcons: icons,
    tabsContentKeys: tabsKeys,
    tabsContent: haydContent
  });
};

// import { contentStore } from '@al-mabsut/muslimah';

var HaydModal = function HaydModal() {
  return h(BaseHaydModal, {
    contentStore: {},
    contentStoreKey: '7_ruling_of_hayd.md'
  });
};

exports.HaydModal = HaydModal;
exports.Muslimah = Muslimah;
 export const contentStore = {"10_ruling_most_likely_tuhr_concluding_ongoing_hayd_before_habit_completion.md":"# Ruling: Most Likely Tuhr\r\n\r\n- Based on the latest information provided by you, your Ongoing Hayd concluded before your latest Hayd habit.\r\n- Accordingly, on it's conclusion you were to perform a Ghusl (full ablution) to attain purity from the state of Hayd and resume your seasonal/daily worship as applies (Prayer and Ramadan etc.)\r\n- If the conclusion of Hayd was just before a Salaah (prayer) time while there was sufficient time for Ghusl (full ablution) and Takbeer-e-Tahreema remaining, perform Qadaa (makeup) for the missed Salaah (prayer). If not, Qadaa (makeup) is not required.\r\n\r\n## Additional Clarifications\r\n\r\n- Since your Hayd ended earlier than usual; there is always a chance that your Hayd could still return. A precautionary Ghusl at your Hayd habit time is advisable due to the possibility of bleeding resuming within 15 days (from the conclusion of Hayd).\r\n- Such resuming of bleeding may end up compromising your Salaah (prayer) until you have repeated your Ghusl again. The precautionary Ghusl is therefore adviced to avoid this from happening.\r\n\r\n## Ramadan Clarifications\r\n\r\n- If your Hayd ended during the day, then you are required to behave like a fasting person for the remainder of the day by abstaining from food, drinks and conjugal relationships.\r\n- If your Hayd ended during the night, such that there was enough time before Fajr for you to complete a Ghusl (full ablution) and Takbeer-e-Tahreema, then accordingly you will be required to fast that day. If no such time sufficient was remaining, then you will be considered as someone whose Hayd ended during the day and accordingly you will be required to behave like a fasting person and later on make Qadaa (makeup) of that day.\r\n\r\n## Marital Clarifications\r\n\r\n- Conjugal relationships are not yet allowed, until the Hayd habit has been reached\r\n- Until such time, specific physical boundaries are set for the husband:\r\n  - Direct contact with or viewing the wife's skin between the navel and knee is strictly prohibited.\r\n  - Engaging in any sexual activity that stimulates the wife's vagina is forbidden, including conjugal relations and other forms of stimulation, such as masturbation.\r\n- However, within these limits, the husband may:\r\n  - Rest his head on the wife's clothed lap.\r\n  - Kiss any other part of the wife's body, including mouth-to-mouth kissing.\r\n  - Engage in physical contact like fondling breasts.\r\n  - Have non-penetrative physical contact with any of his body parts while ensuring no vaginal stimulation occurs.\r\n- Husband and wife will continue to interact with each other in day-to-day matters such as eating together, sleeping in the same bed etc.\r\n- Conjugal relationships will remain impermissible even if the bleeding has fully stopped. (because this is still the time before the Hayd habit.)\r\n- Divorce during this time is impermissible, but if issued, it will be valid and carry its full implications.\r\n- Once the Hayd habit has been reached and the bleeding has not returned, then conjugal relationships are allowed again.\r\n","11_ruling_most_likely_tuhr_concluding_ongoing_hayd_before_10_days.md":"# Ruling: Most Likely Tuhr\r\n\r\n- Based on the latest information provided by you, your Ongoing Hayd concluded after your latest Hayd habit and did not exceed 10 days.\r\n- Accordingly, on it's conclusion you were to perform a Ghusl (full ablution) to attain purity from the state of Hayd and resume your seasonal/daily worship as applies (Prayer and Ramadan etc.)\r\n- If the conclusion of Hayd was just before a Salaah (prayer) time while there was sufficient time for Ghusl (full ablution) and Takbeer-e-Tahreema remaining, perform Qadaa (makeup) for the missed Salaah (prayer). If not, Qadaa (makeup) is not required.\r\n- Until a Tuhr of 15 days since the conclusion of your Hayd has not occurred, the ruling could slightly change, ensure to keep track of this.\r\n\r\n## Ramadan Clarifications\r\n\r\n- If your Hayd ended during the day, then you are required to behave like a fasting person for the remainder of the day by abstaining from food, drinks and conjugal relationships.\r\n- If your Hayd ended during the night, such that there was enough time before Fajr for you to complete a Ghusl (full ablution) and Takbeer-e-Tahreema, then accordingly you will be required to fast that day. If no such time sufficient was remaining, then you will be considered as someone whose Hayd ended during the day and accordingly you will be required to behave like a fasting person and later on make Qadaa (makeup) of that day.\r\n\r\n## Marital Clarifications\r\n\r\n- As long bleeding has not returned at any point in time, then conjugal relationships are allowed again.\r\n","12_ruling_tuhr_concluding_ongoing_bleeding_exceeding_10_days.md":"# Ruling: Tuhr\r\n\r\n## Guidance\r\n\r\n- Your Hayd lasted till your latest Hayd habit:\r\n  - In the case you took a precautionary Ghusl (full ablution) at the conclusion of your Hayd habit, as advised previously, then none of the worhsip you performed since then has been compromised.\r\n  - If not, then each Salaah (prayer) since your Hayd habit will be invalidated until a time where you did Ghusl (full ablution)\r\n- Any Qadaa (makeup) Salaah (prayer) performed until your Hayd habit will be invalid and will need to be repeated.\r\n- Any Salaah (prayer) that was not performed between Hayd habit day and the 10th day of your Ongoing Bleeding will need to be made Qadaa (makeup) of\r\n\r\n## Additional Clarifications\r\n\r\n- Matters have consolidated as your Ongoing Bleeding exceeded 10 days\r\n- The meaning of Hayd habit is the latest valid duration of Hayd as recorded, that we revert to in this case.\r\n- Accordingly, your habit was applied and the previous guidance you received has changed accordingly.\r\n- Kindly consult a scholar about the precautionary Ghusl (full ablution) if this is a source of confusion to you.\r\n\r\n## Ramadan Clarifications\r\n\r\n- On account of reverting back to your latest habit:\r\n  - Any Qadaa (makeup) fasting performed until your Hayd habit will be invalid and will need to be repeated.\r\n  - Any fasting that was not performed between Hayd habit day and the 10th day of your Ongoing Bleeding will need to be made Qadaa (makeup) of\r\n\r\n## Marital Clarifications\r\n\r\n- Conjugal relationships are permissible\r\n","13_ruling_istihaadah.md":"# Ruling: Istihadah\r\n\r\n- When a bleeding is observed outside the days of Hayd/Nifaas, then such a bleeding is termed Istihaadah\r\n- From a religious perspective, this bleeding is to be regarded on the same level as a nose bleeding:\r\n  - Despite this bleeding, you are still required to observe your daily prayers and fasting\r\n  - If this bleeding is continuous, then you are to wait with praying until the bleeding subsides.\r\n    - However, if the time of Salaah is about to expire, then one should do a Wudu and pray as normal.\r\n  - If the bleeding continuous such that it encompasses an entire Salaah time, from beginning till the end such that in between there is not sufficient time to do Wudu and complete a prayer, then the ruling of an Excused Person (Ma’dhur) will apply to you, which you can read in more detail here: ...\r\n\r\n## Additional Clarifications\r\n\r\n- This type of bleeding can be deceiving, where physically speaking the flow can be very heavy and have all the signs of Hayd/Nifaas. However, since this bleeding occurs outside the days that Shari’iyyah regards as Hayd, this bleeding is to be ignored.\r\n\r\n## Ramadan Clarifications\r\n\r\n- This bleeding has no religious implications on fasting\r\n\r\n## Martial Clarifications\r\n\r\n- Conjugal relationships are permissible, despite the bleeding\r\n","1_indetermined_ruling_on_initial_bleeding.md":"# Ruling: Indeterminate\r\n\r\n## Guidance\r\n\r\n- Persist in consistently recording your discharges:\r\n  - It is Waajib (Necessary) to log your discharges.\r\n  - Accurate tracking is crucial for scholars to provide effective assistance.\r\n\r\n## Additional Clarifications\r\n\r\n- This pertains to your initial entries of discharge data.\r\n- Currently, a definitive ruling is not possible due to the lack of a verified `Tuhr` period (a purity phase lasting at least 15 days) before these discharges.\r\n- To secure a more accurate ruling, you have two options:\r\n  1. Seek guidance from scholars for advice tailored to your individual case.\r\n  2. Provide more detailed records of your previous menstrual cycle(s) to enable more informed guidance.\r\n","2_indetermined_ruling_for_subsequent_bleedings.md":"# Ruling: Indeterminate\r\n\r\n## Guidance\r\n\r\n- Continue to consistently record your discharges:\r\n  - It is Waajib (Necessary) to log your discharges (especially in your current situation).\r\n  - Accurate tracking is crucial for scholars to provide effective assistance.\r\n\r\n## Additional Clarifications\r\n\r\n- Based on your reported discharges, you are currently classified as experiencing continuous bleeding.\r\n- To determine the specific ruling applicable to your situation, additional information is needed.\r\n- Should further details of past discharges still leave uncertainties, it is required for you to consult with scholars for expert advice tailored to your case.\r\n","3_indetermined_ruling_for_present_cycle.md":"# Ruling: Indeterminate\r\n\r\n## Guidance\r\n\r\n- Kindly clarify the current status of your “Ongoing Bleeding”:\r\n  - If the bleeding has ceased, record the exact time it stopped as a “Final Bleeding” entry.\r\n  - If bleeding is ongoing(spotting or otherwise), log an “Ongoing Bleeding” entry for today.\r\n\r\n## Additional Clarifications\r\n\r\n- Your last recorded entry was “Ongoing Bleeding”, suggesting a continuous bleeding pattern.\r\n- To provide you with more accurate guidance, additional information is necessary.\r\n- Kindly follow the above instructions to update your records accordingly.\r\n","4_ruling_bleeding_most_likely_hayd.md":"# Ruling: Bleeding Most Likely Hayd\r\n\r\n## Guidance\r\n\r\n- Your latest recorded discharges may soon qualify as Hayd, although they haven't yet surpassed the 72-hour threshold.\r\n- Everytime the bleeding discontinues such that you are not sure if it will come back later or if it has completely stopped, it's Wajib (mandatory/necessary) to complete your Salaah (prayer) at the latest permissible times:\r\n  - For Fajr and Dhuhur: Pray at the last possible moment.\r\n  - For ‘Asr, Maghrib, and ‘Isha: Pray before Makrooh (disliked) time, defined as:\r\n    - ‘Asr: About 20 minutes before sunset when the sun turns pale yellow.\r\n    - Maghrib: When many stars are visible, but with Western horizon still red.\r\n    - ‘Isha: At the midpoint between Maghrib and Fajr.\r\n- Once the minimum quota for Hayd has been met, then all the Ahkaam related to Hayd will apply. Ensure to make a proper record once your bleeding has exceeded 72 hours.\r\n- If bleeding stops for more than 15 days, and is shorter than 3 days, it's considered Istihaadah, requiring Qadaa (makeup) of missed Salaah (prayer) during these days you were advised not to pray by us.\r\n\r\n## Additional Clarifications\r\n\r\n- Delaying Salaah (prayer) is advised due to the potential recurrence of bleeding, making it Waajib (mandatory/necessary) to adhere to this guidance.\r\n- You are not yet required to do Ghusl each time your bleeding stops. You may suffice on Wudu (partial ablution) for each Salaah (prayer)\r\n- If bleeding resumes and meets the Hayd criterion of at least bridging 72 hours(spotting or otherwise), actions taken during this period may need review:\r\n  - Repeat any Qadaa Salaah (prayer) and Fasting performed during this time (when possible to do so).\r\n  - Remake any Ramadan fasting observed during this period.\r\n  - Fard Salaah (prayer) performed, though nullified, won't require repetition.\r\n- Despite the possibility of bleeding not lasting over 72 hours, current evidence suggests it's likely to become Hayd. Practice based on this assumption.\r\n- If future information reclassifies the bleeding as Istihaadah, you'll be obligated (Waajib) to makeup for missed worship.\r\n- However, there's no sin in missing worship when acting on the best available evidence.\r\n\r\n## Ramadan Clarifications\r\n\r\n- If bleeding begins during daytime fasting, it's Waajib (mandatory/necessary) to break your fast discreetly and do Qadaa (makeup) for it later.\r\n- Bleeding that starts and persists overnight until Fajr exempts you from fasting that day, but you must do Qadaa (makeup) for it subsequently.\r\n- Should bleeding stop during the day, continue to observe fast-like behavior (abstaining from food, drink, and conjugal relations), though making up the fast later is still required.\r\n- If bleeding ceases at night, leaving enough time for Ghusl and Takbeer-e-Tahreema before Fajr, fast the oncoming day. If not, behave as fasting but do Qadaa (makeup) for it later.\r\n\r\n## Marital Clarifications\r\n\r\n- During this period, specific physical boundaries are set for the husband:\r\n  - Direct contact with or viewing the wife's skin between the navel and knee is strictly prohibited.\r\n  - Engaging in any sexual activity that stimulates the wife's vagina is forbidden, including conjugal relations and other forms of stimulation, such as masturbation.\r\n- However, within these limits, the husband may:\r\n  - Rest his head on the wife's clothed lap.\r\n  - Kiss any other part of the wife's body, including mouth-to-mouth kissing.\r\n  - Engage in physical contact like fondling breasts.\r\n  - Have non-penetrative physical contact with any of his body parts while ensuring no vaginal stimulation occurs.\r\n- Husband and wife will continue to interact with each other in day-to-day matters such as eating together, sleeping in the same bed etc.\r\n- Divorce during this time is impermissible, but if issued, it will be valid and carry its full implications.\r\n","5_ruling_of_ongoing_hayd_till_habit.md":"# Ruling: Ongoing Hayd\r\n\r\n## Guidance\r\n\r\n- When unsure if bleeding has fully ceased or will resume, it's Mustahabb (recommended) to complete your Salaah (prayer) at the latest permissible times:\r\n  - For Fajr and Dhuhur: Pray at the last possible moment.\r\n  - For ‘Asr, Maghrib, and ‘Isha: Pray before Makrooh (disliked) time, defined as:\r\n    - ‘Asr: About 20 minutes before sunset when the sun turns pale yellow.\r\n    - Maghrib: When many stars are visible, but with Western horizon still red.\r\n    - ‘Isha: At the midpoint between Maghrib and Fajr.\r\n- Each time your bleeding stops, before engaging in any act of worship such as prayer, Quran, fasting etc. you are required to do Ghusl (full ablution)\r\n\r\n## Ramadan Clarifications\r\n\r\n- If bleeding begins during daytime fasting, it's Waajib (mandatory/necessary) to break your fast discreetly and do Qadaa (makeup) for it later.\r\n- Bleeding that starts and persists overnight until Fajr exempts you from fasting that day, but you must do Qadaa (makeup) for it subsequently.\r\n- Should bleeding stop during the day, continue to observe fast-like behavior (abstaining from food, drink, and conjugal relations), though making up the fast later is still required.\r\n- If bleeding ceases at night, leaving enough time for Ghusl and Takbeer-e-Tahreema before Fajr, fast the oncoming day. If not, behave as fasting but do Qadaa (makeup) for it later.\r\n\r\n## Marital Clarifications\r\n\r\n- During this period, specific physical boundaries are set for the husband:\r\n  - Direct contact with or viewing the wife's skin between the navel and knee is strictly prohibited.\r\n  - Engaging in any sexual activity that stimulates the wife's vagina is forbidden, including conjugal relations and other forms of stimulation, such as masturbation.\r\n- However, within these limits, the husband may:\r\n  - Rest his head on the wife's clothed lap.\r\n  - Kiss any other part of the wife's body, including mouth-to-mouth kissing.\r\n  - Engage in physical contact like fondling breasts.\r\n  - Have non-penetrative physical contact with any of his body parts while ensuring no vaginal stimulation occurs.\r\n- Husband and wife will continue to interact with each other in day-to-day matters such as eating together, sleeping in the same bed etc.\r\n- Conjugal relationships will remain impermissible even if the bleeding has fully stopped. (because this is still the time before the Hayd habit.)\r\n- Divorce during this time is impermissible, but if issued, it will be valid and carry its full implications.\r\n","6_ruling_of_ongoing_hayd_till_10_days.md":"# Ruling: Ongoing Hayd\r\n\r\n## Guidance\r\n\r\n- When unsure if bleeding has fully ceased or will resume, it's Mustahabb (recommended) to complete your Salaah (prayer) at the latest permissible times:\r\n  - For Fajr and Dhuhur: Pray at the last possible moment.\r\n  - For ‘Asr, Maghrib, and ‘Isha: Pray before Makrooh (disliked) time, defined as:\r\n    - ‘Asr: About 20 minutes before sunset when the sun turns pale yellow.\r\n    - Maghrib: When many stars are visible, but with Western horizon still red.\r\n    - ‘Isha: At the midpoint between Maghrib and Fajr.\r\n- Each time your bleeding stops, before engaging in any act of worship such as prayer, Quran, fasting etc. you are required to do Ghusl (full ablution)\r\n\r\n## Ramadan Clarifications\r\n\r\n- If bleeding begins during daytime fasting, it's Waajib (mandatory/necessary) to break your fast discreetly and do Qadaa (makeup) for it later.\r\n- Bleeding that starts and persists overnight until Fajr exempts you from fasting that day, but you must do Qadaa (makeup) for it subsequently.\r\n- Should bleeding stop during the day, continue to observe fast-like behavior (abstaining from food, drink, and conjugal relations), though making up the fast later is still required.\r\n- If bleeding ceases at night, leaving enough time for Ghusl and Takbeer-e-Tahreema before Fajr, fast the oncoming day. If not, behave as fasting but do Qadaa (makeup) for it later.\r\n\r\n## Marital Clarifications\r\n\r\n- During this period, specific physical boundaries are set for the husband:\r\n  - Direct contact with or viewing the wife's skin between the navel and knee is strictly prohibited.\r\n  - Engaging in any sexual activity that stimulates the wife's vagina is forbidden, including conjugal relations and other forms of stimulation, such as masturbation.\r\n- However, within these limits, the husband may:\r\n  - Rest his head on the wife's clothed lap.\r\n  - Kiss any other part of the wife's body, including mouth-to-mouth kissing.\r\n  - Engage in physical contact like fondling breasts.\r\n  - Have non-penetrative physical contact with any of his body parts while ensuring no vaginal stimulation occurs.\r\n- Husband and wife will continue to interact with each other in day-to-day matters such as eating together, sleeping in the same bed etc.\r\n- Whenever the bleeding has ended, then conjugal relationships are allowed provided the wife has taken Ghusl (full ablution)\r\n- Divorce during this time is impermissible, but if issued, it will be valid and carry its full implications.\r\n","7_ruling_of_hayd.md":"# Ruling: Hayd\r\n\r\n## Guidance\r\n\r\n- Fard (obligatory) prayers performed during this period are nullified and do not require makeup (Qadaa).\r\n- Qadaa (makeup) prayers completed during this time are nullified and must be repeated.\r\n\r\n## Additional Clarifications\r\n\r\n- The ruling of `Hayd` is different from the ruling of `Bleeding Most Likely Hayd` in the sense that for `Hayd` a sufficient amount of history is available to be 100% decisive in extending this ruling. `Bleeding Most Likely Hayd` on the other hand is too recent and has\r\nstill potential for changing depending on how your subsequent days evolve.\r\n\r\n## Ramadan Clarifications\r\n\r\n- Fasting during these days is nullified and must be made Qadaa of (makeup) later.\r\n\r\n## Marital Clarifications\r\n\r\n- Conjugal relations are strictly forbidden during this period.\r\n- Divorces initiated by the husband, though prohibited, will still be effective with all associated consequences.\r\n","8_ruling_bleeding_most_likely_istihaadah.md":"# Ruling: Bleeding Most Likely Istihadah\r\n\r\n## Guidance\r\n\r\n- Bleeding in this period is likely not Hayd and should be treated under the ruling of Istihadah (dysfunctional bleeding), as such:\r\n  - You are to disregard any bleeding (regardless of its volume/color) and continue your regular worship practices:\r\n    - Five daily Salaah (prayer).\r\n    - Fasting during Ramadan.\r\n    - Reciting Quran.\r\n    - Performing Tawaaf in Hajj/’Umrah.\r\n- Renew Wudu (partial ablution) whenever bleeding/spotting occurs. If this happens during Salaah, the prayer breaks and must be restarted.\r\n- If bleeding frequency prevents completion of Salaah (prayer), follow the guidelines for an Excused Person (Ma’dhoor).\r\n\r\n## Additional Clarifications\r\n\r\n- Though currently classified as Istihadah (dysfunctional bleeding), future developments might reclassify it as Hayd, affecting worship practices. When this happens, then for all the days marked as Hayd:\r\n  - Repeat any Qadaa (makeup) Salaah (prayer) performed.\r\n  - Fard (obligatory) Salaah (prayer), though nullified, need not be repeated.\r\n  - Any fasting performed will be nullified. As such you are to repeat Ramadan fasts and any Qadaa (makeup) fasts.\r\n  - Any optional and Sunnah Salaah (prayer)/Fasting performed, when it was nullified after commencing it in a state of Tuhr (purity) is to be made Qadaa of (makeup). If they were commenced not in a state of Tuhr (purity) then any such optional / Sunnah worship does not require Qadaa (makeup).\r\n\r\n## Marital Clarifications\r\n\r\n- Your husband will be allowed to engage in conjugal relationships with you in this time\r\n","9_ruling_of_tuhr.md":"# Ruling: Tuhr\r\n\r\n## Guidance\r\n\r\n- These are the days in which you are able to attain ritual purity (through Wudu/Ghusl) that enables you to perform your religious observances, such as:\r\n  - Prayer\r\n  - Fasting (Ramadan as well as optional fasting)\r\n  - Quran Recitation\r\n  - Tawaaf around the Kabah\r\n\r\n## Additional Clarifications\r\n\r\n- Tuhr in Arabic means purity\r\n- They are those days in which a woman is not undergoing Hayd or Nifaas and is to observe all seasonal/daily religious observances.\r\n\r\n## Marital Clarifications\r\n\r\n- Conjugal relationships are permissible\r\n"};
//# sourceMappingURL=bundle.js.map

definePlugin('@plugins/cn.ssdcc.tailchat.video', ['exports', '@capital/common', 'react', '@capital/component'], (function (exports, common, React, component) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */

	var isArray$3 = Array.isArray;

	var isArray_1 = isArray$3;

	/** Detect free variable `global` from Node.js. */

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$3 = freeGlobal || freeSelf || Function('return this')();

	var _root = root$3;

	var root$2 = _root;

	/** Built-in value references. */
	var Symbol$3 = root$2.Symbol;

	var _Symbol = Symbol$3;

	var Symbol$2 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$4.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */

	var objectProto$3 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$3.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString$1;

	var Symbol$1 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$2(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	var _baseGetTag = baseGetTag$2;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */

	function isObjectLike$1(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike$1;

	var baseGetTag$1 = _baseGetTag,
	    isObjectLike = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$3(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag$1(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol$3;

	var isArray$2 = isArray_1,
	    isSymbol$2 = isSymbol_1;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey$1(value, object) {
	  if (isArray$2(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol$2(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	var _isKey = isKey$1;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */

	function isObject$2(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$2;

	var baseGetTag = _baseGetTag,
	    isObject$1 = isObject_1;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction$1(value) {
	  if (!isObject$1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction$1;

	var root$1 = _root;

	/** Used to detect overreaching core-js shims. */
	var coreJsData$1 = root$1['__core-js_shared__'];

	var _coreJsData = coreJsData$1;

	var coreJsData = _coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked$1(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked$1;

	/** Used for built-in method references. */

	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource$1(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource$1;

	var isFunction = isFunction_1,
	    isMasked = _isMasked,
	    isObject = isObject_1,
	    toSource = _toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative$1(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	var _baseIsNative = baseIsNative$1;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */

	function getValue$1(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue$1;

	var baseIsNative = _baseIsNative,
	    getValue = _getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative$2(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative$2;

	var getNative$1 = _getNative;

	/* Built-in method references that are verified to be native. */
	var nativeCreate$4 = getNative$1(Object, 'create');

	var _nativeCreate = nativeCreate$4;

	var nativeCreate$3 = _nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear$1() {
	  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear$1;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function hashDelete$1(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete$1;

	var nativeCreate$2 = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet$1(key) {
	  var data = this.__data__;
	  if (nativeCreate$2) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$1 ? undefined : result;
	  }
	  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet$1;

	var nativeCreate$1 = _nativeCreate;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas$1(key) {
	  var data = this.__data__;
	  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	var _hashHas = hashHas$1;

	var nativeCreate = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet$1(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	var _hashSet = hashSet$1;

	var hashClear = _hashClear,
	    hashDelete = _hashDelete,
	    hashGet = _hashGet,
	    hashHas = _hashHas,
	    hashSet = _hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype['delete'] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;

	var _Hash = Hash$1;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */

	function listCacheClear$1() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear$1;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */

	function eq$1(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq$1;

	var eq = eq_1;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf$4(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf$4;

	var assocIndexOf$3 = _assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$3(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete$1;

	var assocIndexOf$2 = _assocIndexOf;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$2(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet$1;

	var assocIndexOf$1 = _assocIndexOf;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas$1(key) {
	  return assocIndexOf$1(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas$1;

	var assocIndexOf = _assocIndexOf;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet$1(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet$1;

	var listCacheClear = _listCacheClear,
	    listCacheDelete = _listCacheDelete,
	    listCacheGet = _listCacheGet,
	    listCacheHas = _listCacheHas,
	    listCacheSet = _listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache$1.prototype.clear = listCacheClear;
	ListCache$1.prototype['delete'] = listCacheDelete;
	ListCache$1.prototype.get = listCacheGet;
	ListCache$1.prototype.has = listCacheHas;
	ListCache$1.prototype.set = listCacheSet;

	var _ListCache = ListCache$1;

	var getNative = _getNative,
	    root = _root;

	/* Built-in method references that are verified to be native. */
	var Map$1 = getNative(root, 'Map');

	var _Map = Map$1;

	var Hash = _Hash,
	    ListCache = _ListCache,
	    Map = _Map;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear$1() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	var _mapCacheClear = mapCacheClear$1;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */

	function isKeyable$1(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable$1;

	var isKeyable = _isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData$4(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData$4;

	var getMapData$3 = _getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete$1(key) {
	  var result = getMapData$3(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete$1;

	var getMapData$2 = _getMapData;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet$1(key) {
	  return getMapData$2(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet$1;

	var getMapData$1 = _getMapData;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas$1(key) {
	  return getMapData$1(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas$1;

	var getMapData = _getMapData;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet$1(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet$1;

	var mapCacheClear = _mapCacheClear,
	    mapCacheDelete = _mapCacheDelete,
	    mapCacheGet = _mapCacheGet,
	    mapCacheHas = _mapCacheHas,
	    mapCacheSet = _mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache$1.prototype.clear = mapCacheClear;
	MapCache$1.prototype['delete'] = mapCacheDelete;
	MapCache$1.prototype.get = mapCacheGet;
	MapCache$1.prototype.has = mapCacheHas;
	MapCache$1.prototype.set = mapCacheSet;

	var _MapCache = MapCache$1;

	var MapCache = _MapCache;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize$1(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize$1.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize$1.Cache = MapCache;

	var memoize_1 = memoize$1;

	var memoize = memoize_1;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped$1(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped$1;

	var memoizeCapped = _memoizeCapped;

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath$1 = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var _stringToPath = stringToPath$1;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */

	function arrayMap$1(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap$1;

	var Symbol = _Symbol,
	    arrayMap = _arrayMap,
	    isArray$1 = isArray_1,
	    isSymbol$1 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString$1(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray$1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString$1) + '';
	  }
	  if (isSymbol$1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	}

	var _baseToString = baseToString$1;

	var baseToString = _baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString$1(value) {
	  return value == null ? '' : baseToString(value);
	}

	var toString_1 = toString$1;

	var isArray = isArray_1,
	    isKey = _isKey,
	    stringToPath = _stringToPath,
	    toString = toString_1;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath$1(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	var _castPath = castPath$1;

	var isSymbol = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey$1(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _toKey = toKey$1;

	var castPath = _castPath,
	    toKey = _toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet$1(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	var _baseGet = baseGet$1;

	var baseGet = _baseGet;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var get_1 = get;

	const PLUGIN_ID = "cn.ssdcc.tailchat.video";
	const PLUGIN_NAME = "SSDC\u89C6\u9891\u6D88\u606F\u652F\u6301\u63D2\u4EF6";
	function setlocalStorage(key, value) {
	  var v = value;
	  if (typeof v == "object") {
	    v = JSON.stringify(v);
	    v = "obj-" + v;
	  } else {
	    v = "str-" + v;
	  }
	  var localStorage = window.localStorage;
	  if (localStorage) {
	    localStorage.setItem(key, v);
	  }
	}
	function getlocalStorage(key) {
	  var localStorage = window.localStorage;
	  if (localStorage)
	    var v = localStorage.getItem(key);
	  if (!v) {
	    return;
	  }
	  if (v.indexOf("obj-") === 0) {
	    v = v.slice(4);
	    return JSON.parse(v);
	  } else if (v.indexOf("str-") === 0) {
	    return v.slice(4);
	  }
	}
	console.log(`Plugin ${PLUGIN_NAME}(${PLUGIN_ID}) is loaded`);
	common.regMessageExtraParser({
	  name: "com.msgbyte.linkmeta/urlParser",
	  render({ content }) {
	    let url = "";
	    let mp4 = content.match(/\[card type=file url=.*?\.mp4\]/g);
	    if (mp4) {
	      mp4 = mp4 + "";
	      url = mp4.replace(".mp4]", ".mp4");
	    }
	    let webm = content.match(/\[card type=file url=.*?\.webm\]/g);
	    if (webm) {
	      webm = webm + "";
	      url = webm.replace(".webm]", ".webm");
	    }
	    let ogg = content.match(/\[card type=file url=.*?\.ogg\]/g);
	    if (ogg) {
	      ogg = ogg + "";
	      url = ogg.replace(".ogg]", ".ogg");
	    }
	    const [ishidden, setIshidden] = React.useState(true);
	    function handleClick() {
	      setIshidden(false);
	    }
	    if (url !== null && url !== "") {
	      url = url.replace("[card type=file url=", "");
	      url = String(url).replace("{BACKEND}", common.getServiceUrl());
	      if (ishidden) {
	        return /* @__PURE__ */ React__default["default"].createElement("div", {
	          className: "max-w-full rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden"
	        }, /* @__PURE__ */ React__default["default"].createElement(component.Icon, {
	          icon: "mdi:video-outline",
	          onClick: handleClick
	        }));
	      } else {
	        return /* @__PURE__ */ React__default["default"].createElement("div", {
	          className: "max-w-full rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden"
	        }, /* @__PURE__ */ React__default["default"].createElement("video", {
	          src: url,
	          controls: true,
	          autoPlay: false,
	          style: { maxHeight: 250, maxWidth: 250 }
	        }));
	      }
	    }
	    return;
	  }
	});
	common.regPluginCardItem("SsdccVideo", {
	  render: component.Loadable(() => VideoItem)
	});
	const VideoItem = React__default["default"].memo((props) => {
	  var _a;
	  const payload = (_a = props.payload) != null ? _a : {};
	  const [url, seturl] = React.useState(payload.data.replace("{BACKEND}", common.getServiceUrl()));
	  const oldurl = payload.data.replace("{BACKEND}", common.getServiceUrl());
	  const [ishidden, setIshidden] = React.useState(true);
	  const [isload, setisload] = React.useState(true);
	  const [loaded, setloaded] = React.useState("0/0MB");
	  let tipsNum = 0;
	  for (let i = 0; i < payload.label.length; i++) {
	    var Notetips = payload.label.charAt(i);
	    if (/^[\u4e00-\u9fa5]$/.test(Notetips)) {
	      tipsNum += 1.5;
	    } else {
	      tipsNum += 1;
	    }
	    if (tipsNum >= 30) {
	      payload.label = payload.label.slice(0, i - 5) + "...";
	      break;
	    }
	  }
	  function handleClick() {
	    const lsurl = getlocalStorage(url);
	    if (lsurl) {
	      console.log(lsurl, "\u7F13\u5B58\u5730\u5740");
	      seturl(getlocalStorage(url));
	      setisload(false);
	    } else {
	      const req = new XMLHttpRequest();
	      req.open("GET", url, true);
	      req.responseType = "blob";
	      req.onload = function() {
	        if (this.status === 200) {
	          const videoBlob = this.response;
	          const blobSrc = URL.createObjectURL(videoBlob);
	          setlocalStorage(oldurl, blobSrc);
	          seturl(blobSrc);
	          console.log(blobSrc, "blobSrc\u52A0\u8F7D\u5B8C\u6BD5");
	        }
	        setisload(false);
	      };
	      req.onprogress = function(event) {
	        if (payload.size) {
	          setloaded((event.loaded / 1048576).toFixed(2) + "/" + (payload.size / 1048576).toFixed(2) + "MB");
	        } else {
	          setloaded((event.loaded / 1048576).toFixed(2) + "MB");
	        }
	      };
	      req.send();
	    }
	    setIshidden(false);
	  }
	  const [isSecondload, setisSecondload] = React.useState(false);
	  const videoerror = function() {
	    if (isSecondload) {
	      return;
	    }
	    setisSecondload(true);
	    setisload(true);
	    const req = new XMLHttpRequest();
	    req.open("GET", oldurl, true);
	    req.responseType = "blob";
	    req.onload = function() {
	      if (this.status === 200) {
	        const videoBlob = this.response;
	        const blobSrc = URL.createObjectURL(videoBlob);
	        setlocalStorage(oldurl, blobSrc);
	        seturl(blobSrc);
	        console.log(blobSrc, "\u4E8C\u6B21blobSrc\u52A0\u8F7D\u5B8C\u6BD5");
	      }
	      setisload(false);
	    };
	    req.onprogress = function(event) {
	      if (payload.size) {
	        setloaded((event.loaded / 1048576).toFixed(2) + "/" + (payload.size / 1048576).toFixed(2) + "MB");
	      } else {
	        setloaded((event.loaded / 1048576).toFixed(2) + "MB");
	      }
	    };
	    req.send();
	  };
	  const downloadUrl = function() {
	    const a = document.createElement("a");
	    a.href = oldurl;
	    a.download = payload.label;
	    a.target = "_blank";
	    a.click();
	  };
	  if (ishidden) {
	    return /* @__PURE__ */ React__default["default"].createElement("div", {
	      className: "max-w-full border border-black border-opacity-20 rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden"
	    }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
	      className: "inline-flex"
	    }, payload.label, /* @__PURE__ */ React__default["default"].createElement("div", {
	      className: "flex text-lg items-center",
	      onClick: downloadUrl
	    }, /* @__PURE__ */ React__default["default"].createElement(component.Icon, {
	      icon: "mdi:downloads"
	    }), /* @__PURE__ */ React__default["default"].createElement("span", {
	      className: "ml-1"
	    }, "\u4E0B\u8F7D"))), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("img", {
	      src: payload.imgSrc,
	      style: { height: 200, width: 300 }
	    }), /* @__PURE__ */ React__default["default"].createElement(component.Icon, {
	      icon: "ph:play-bold",
	      onClick: handleClick,
	      style: { position: "absolute", top: 80, left: 100, width: 100, height: 100 }
	    }))));
	  } else if (isload) {
	    return /* @__PURE__ */ React__default["default"].createElement("div", {
	      className: "max-w-full border border-black border-opacity-20 rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden"
	    }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
	      className: "inline-flex"
	    }, payload.label, /* @__PURE__ */ React__default["default"].createElement("div", {
	      className: "flex text-lg items-center",
	      onClick: downloadUrl
	    }, /* @__PURE__ */ React__default["default"].createElement(component.Icon, {
	      icon: "mdi:downloads"
	    }), /* @__PURE__ */ React__default["default"].createElement("span", {
	      className: "ml-1"
	    }, "\u4E0B\u8F7D"))), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("img", {
	      src: payload.imgSrc,
	      style: { height: 200, width: 300 }
	    }), /* @__PURE__ */ React__default["default"].createElement("div", {
	      style: { position: "absolute", top: 100, left: 8, width: 300, height: 10, textAlign: "center", fontSize: 20 }
	    }, loaded))));
	  } else {
	    return /* @__PURE__ */ React__default["default"].createElement("div", {
	      className: "max-w-full border border-black border-opacity-20 rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden"
	    }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
	      className: "inline-flex"
	    }, payload.label, /* @__PURE__ */ React__default["default"].createElement("div", {
	      className: "flex text-lg items-center",
	      onClick: downloadUrl
	    }, /* @__PURE__ */ React__default["default"].createElement(component.Icon, {
	      icon: "mdi:downloads"
	    }), /* @__PURE__ */ React__default["default"].createElement("span", {
	      className: "ml-1"
	    }, "\u4E0B\u8F7D"))), /* @__PURE__ */ React__default["default"].createElement("video", {
	      src: url,
	      controls: true,
	      autoPlay: true,
	      style: { maxHeight: 250, maxWidth: 250 },
	      onError: videoerror
	    })));
	  }
	});
	common.regChatInputAction({
	  label: "Send Video",
	  onClick: async (actions) => {
	    const file = await openFile({ accept: "video/*" });
	    const videoRes = await ImgChecked(file);
	    const setUpload = { setUploadProgress: function(uploadProgr) {
	    } };
	    const Dpercentage = React__default["default"].memo(({}) => {
	      const [uploadProgress, setUploadProgress] = React.useState("");
	      setUpload.setUploadProgress = setUploadProgress;
	      return /* @__PURE__ */ React__default["default"].createElement("div", {
	        style: { margin: 10 }
	      }, uploadProgress);
	    });
	    const key = common.openModal(/* @__PURE__ */ React__default["default"].createElement(Dpercentage, null), { closable: false, maskClosable: false });
	    try {
	      const res = await common.uploadFile(file, {
	        onProgress: function(percentage, progressEvent) {
	          setUpload.setUploadProgress((progressEvent.loaded / 1048576).toFixed(2) + "/" + (progressEvent.total / 1048576).toFixed(2) + "MB|\u8FDB\u5EA6:" + percentage * 100 + "%");
	        }
	      });
	      common.closeModal(key);
	      const sendMsg = actions.sendMsg;
	      sendMsg(common.getMessageTextDecorators().card(file.name, {
	        type: "SsdccVideo",
	        data: res.url,
	        width: videoRes.width,
	        height: videoRes.height,
	        imgSrc: videoRes.imgSrc,
	        size: file.size
	      }));
	    } catch (e) {
	      common.closeModal(key);
	    }
	  }
	});
	async function openFile(fileDialogOptions) {
	  return new Promise((resolve) => {
	    const fileEl = document.createElement("input");
	    fileEl.setAttribute("type", "file");
	    if (typeof (fileDialogOptions == null ? void 0 : fileDialogOptions.accept) === "string") {
	      fileEl.accept = fileDialogOptions.accept;
	    }
	    fileEl.addEventListener("change", function(e) {
	      const file = get_1(this, ["files", 0], null);
	      resolve(file);
	      fileEl.remove();
	    });
	    fileEl.click();
	  });
	}
	let ImgChecked = async function(file) {
	  return new Promise((resolve, reject) => {
	    let video = document.createElement("video");
	    var fileUrl = URL.createObjectURL(file);
	    video.src = fileUrl;
	    video.currentTime = 3;
	    const imgWidth = 300, imgHeight = 200;
	    video.oncanplay = () => {
	      let x = 0, y = 0, width = 0, height = 0;
	      if (video.videoWidth / video.videoHeight >= imgWidth / imgHeight) {
	        width = imgWidth;
	        height = video.videoHeight * (imgWidth / video.videoWidth);
	        x = 0;
	        y = (imgHeight - height) / 2;
	      } else {
	        height = imgHeight;
	        width = video.videoWidth * (imgHeight / video.videoHeight);
	        y = 0;
	        x = (imgWidth - width) / 2;
	      }
	      var canvas = document.createElement("canvas");
	      canvas.width = imgWidth;
	      canvas.height = imgHeight;
	      let ctx = canvas.getContext("2d");
	      ctx.fillStyle = "#000";
	      ctx.fillRect(0, 0, imgWidth, imgHeight);
	      ctx.drawImage(video, x, y, width, height);
	      let imgSrc = canvas.toDataURL("image/png");
	      resolve({
	        imgSrc,
	        width: video.videoWidth,
	        height: video.videoHeight
	      });
	    };
	  });
	};

	exports.openFile = openFile;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map

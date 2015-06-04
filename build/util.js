(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Util = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
// Generated by CoffeeScript 1.9.3
'use strict';

(function () {
  'use strict';
  var $, Rollover;

  $ = global.$;

  module.exports = Rollover = (function () {
    var _defaults;

    _defaults = {
      strOff: '_off',
      strOn: '_on',
      onlyChild: true,
      over: false
    };

    Rollover.prototype._preload = function () {
      return $('<img />').attr('src', this._srcOn);
    };

    Rollover.prototype._configure = function (el, opts) {
      this.$el = $(el);
      this.opts = $.extend({}, _defaults, opts);
      if (this.opts.onlyChild) {
        this.$img = this.$el.children('img');
      } else {
        this.$img = this.$el.find('img');
      }
      this._srcOff = this.$img.attr('src');
      return this._srcOn = this._srcOff.replace(this.opts.strOff, this.opts.strOn);
    };

    function Rollover(el, opts) {
      this._configure(el, opts);
      this._preload();
      this.addEvents();
      if (this.opts.over) {
        this.toOver();
      }
    }

    Rollover.prototype.toOver = function () {
      this.$img.attr('src', this._srcOn);
      return this;
    };

    Rollover.prototype.toNormal = function () {
      this.$img.attr('src', this._srcOff);
      return this;
    };

    Rollover.prototype.addEvents = function () {
      this.$el.on('mouseenter.rollover', (function (_this) {
        return function () {
          return _this.toOver();
        };
      })(this));
      this.$el.on('mouseleave.rollover', (function (_this) {
        return function () {
          return _this.toNormal();
        };
      })(this));
      return this;
    };

    Rollover.prototype.rmEvents = function () {
      this.$el.off('mouseenter.rollover');
      this.$el.off('mouseleave.rollover');
      return this;
    };

    Rollover.prototype.destroy = function () {
      return this.$el.remove();
    };

    return Rollover;
  })();
}).call(undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
(function (global){
// Generated by CoffeeScript 1.9.3
'use strict';

(function () {
  'use strict';
  var $,
      $body,
      DEFAULT_OPTS,
      LABEL,
      Smoothscroll,
      bind = function bind(fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };

  $ = global.$;

  LABEL = 'smoothscroll';

  DEFAULT_OPTS = {
    speed: 700,
    easingName: 'swing',
    offset: 0,
    onScrollBefore: function onScrollBefore(smoothscroll) {},
    onScrollAfter: function onScrollAfter(smoothscroll) {}
  };

  $body = $('html, body');

  module.exports = Smoothscroll = (function () {
    Smoothscroll.addEasing = function (name, func) {
      return $.easing[name + ':' + LABEL] = func;
    };

    Smoothscroll.cancelScroll = function () {
      return $body.stop();
    };

    function Smoothscroll(el1, opts) {
      this.el = el1;
      this._handleClick = bind(this._handleClick, this);
      this._configure(this.el, opts);
      this.bindClick();
    }

    Smoothscroll.prototype.scroll = function () {
      var easingName, offset, onScrollAfter, onScrollBefore, ref, speed, val;
      if (this.$targetEl == null) {
        return this;
      }
      ref = this.opts, speed = ref.speed, easingName = ref.easingName, offset = ref.offset, onScrollBefore = ref.onScrollBefore, onScrollAfter = ref.onScrollAfter;
      onScrollBefore(this);
      val = this.$targetEl.offset().top - offset;
      this.onWheelCancel();
      $body.animate({
        scrollTop: val
      }, {
        duration: speed,
        easing: easingName === 'swing' ? easingName : easingName + ':' + LABEL
      }).promise().then((function (_this) {
        return function () {
          return onScrollAfter(_this);
        };
      })(this)).always((function (_this) {
        return function () {
          return _this.offWheelCancel();
        };
      })(this));
      return this;
    };

    Smoothscroll.prototype.bindClick = function () {
      this.$el.on('click.' + LABEL, this._handleClick);
      return this;
    };

    Smoothscroll.prototype.unbindClick = function () {
      this.$el.off('click.' + LABEL);
      return this;
    };

    Smoothscroll.prototype.onWheelCancel = function () {
      return $(window).on('wheel.cancel' + LABEL, Smoothscroll.cancelScroll);
    };

    Smoothscroll.prototype.offWheelCancel = function () {
      return $(window).on('wheel.cancel' + LABEL);
    };

    Smoothscroll.prototype._configure = function (el, opts) {
      var href;
      this.$el = $(el);
      this.opts = $.extend({}, DEFAULT_OPTS, opts);
      href = this.$el.attr('href');
      if (href !== '#' && href !== '') {
        return this.$targetEl = $(href);
      }
    };

    Smoothscroll.prototype._handleClick = function (ev) {
      ev.preventDefault();
      return this.scroll();
    };

    return Smoothscroll;
  })();
}).call(undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(_dereq_,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = example;
var $ = global.$;

function example(arg) {
  console.log($);
  console.log(arg);
}

module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(_dereq_,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var $ = global.$;

var _defaults = {
  speed: 700,
  easingName: null,
  offset: 0,
  onScrollBefore: function onScrollBefore(el) {},
  onScrollAfter: function onScrollAfter(el) {}
};

var _$body = $('html, body');

var Smoothscroll = (function () {
  function Smoothscroll(el, opts) {
    _classCallCheck(this, Smoothscroll);

    this.el = el;
    this._configure(el, opts);
    this.events();
  }

  _createClass(Smoothscroll, [{
    key: 'scroll',
    value: function scroll() {
      var _this = this;

      if (!this.$target) {
        return this;
      }

      this.opts.onScrollBefore(this.el);

      var val = this.$target.offset().top - this.opts.offset;

      _$body.stop(true, true).animate({
        scrollTop: val
      }, {
        duration: this.opts.speed,
        easing: this.opts.easingName
      }).promise().done(function () {
        _this.opts.onScrollAfter(_this.el);
      });

      return this;
    }
  }, {
    key: 'events',
    value: function events() {
      this.$el.on('click.smoothscroll', this._handleClick.bind(this));
      return this;
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      this.$el.off('click.smoothScroll');
      return this;
    }
  }, {
    key: '_configure',
    value: function _configure(el, opts) {
      this.$el = $(el);
      this.opts = $.extend({}, _defaults, opts);
      if (this.$el.attr('href') !== '#') {
        this.$target = $(this.$el.attr('href'));
      }
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(ev) {
      ev.preventDefault();
      this.scroll();
    }
  }], [{
    key: 'addEasing',
    value: function addEasing(name, func) {
      $.easing[name] = func;
    }
  }, {
    key: 'canselScroll',
    value: function canselScroll() {
      _$body.stop();
    }
  }]);

  return Smoothscroll;
})();

exports['default'] = Smoothscroll;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  Smoothscroll: _dereq_('./lib/smoothscroll'),
  example: _dereq_('./lib/example'),
  es3: {
    Smoothscroll: _dereq_('./lib/es3-smoothscroll'),
    Rollover: _dereq_('./lib/es3-rollover') }
};

},{"./lib/es3-rollover":1,"./lib/es3-smoothscroll":2,"./lib/example":3,"./lib/smoothscroll":4}]},{},[5])(5)
});

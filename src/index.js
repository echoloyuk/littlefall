/**
 * LittleFall, 微型瀑布流工具，用在简单的大量异步流程时使用。
 * @author machi on 2017/03/13
 */

;(function () {
    var LittleFall = function (arr) {
        this.queue = [];
        this.version = '1.0.0';

        this._init(arr);
        this.next();
    }
    LittleFall.prototype = {
        version: function () {
            return this.version;
        },
        next: function () {
            var queue = this.queue;
            if (!queue.length) {
                return;
            }
            var fn = queue.shift();
            var args = Array.prototype.slice.call(arguments, 0);
            if (typeof fn === 'function') {
                fn.apply(this, [this._getNextFn(this.next)].concat(args));
            }
        },
        _init: function (arr) {
            if (!arr && !arr.length) {
                return;
            }
            this.queue = arr;
        },
        _getNextFn: function (next) {
            var self = this;
            return function () {
                var args = Array.prototype.slice.call(arguments, 0);
                next.apply(self, args);
            }
        }
    }

    window.LittleFall = LittleFall;
})(window)
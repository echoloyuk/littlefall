;(function () {
    var LittleFall = function () {
        this.queue = [];
        this.version = '1.0.0';
    }
    LittleFall.prototype = {
        version: function () {
            return this.version;
        }
    }

    window.LittleFall = LittleFall;
})(window)
/**
 * Created by onlyjyf on 8/5/17.
 */
var Handler = (function () {
    function Handler() {
    }
    Handler.prototype.setLastHandler = function (handler) {
        this.lastHandler = handler;
    };
    /**处理问题*/
    Handler.prototype.handler = function (problem) {
        if (problem.getLevel() > this.getMaxHandlerLevel()) {
            console.log("\u6211\u53EA\u80FD\u89E3\u51B3" + this.getMaxHandlerLevel() + "\u7EA7\u4EE5\u4E0B\u7684\u95EE\u9898\uFF0C\u6211\u5DF2\u5C06\u95EE\u9898\u4E0A\u62A5");
            return this.lastHandler.handler(problem);
        }
        console.log('问题已经解决了');
        return true;
    };
    return Handler;
})();
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map
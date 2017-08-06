var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Handler_1 = require("./Handler");
/**
 * Created by onlyjyf on 8/5/17.
 */
var CEO = (function (_super) {
    __extends(CEO, _super);
    function CEO() {
        _super.apply(this, arguments);
    }
    CEO.prototype.getMaxHandlerLevel = function () {
        return 10;
    };
    return CEO;
})(Handler_1.Handler);
exports.CEO = CEO;
//# sourceMappingURL=CEO.js.map
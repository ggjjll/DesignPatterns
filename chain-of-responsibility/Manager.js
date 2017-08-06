var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Handler_1 = require("./Handler");
/**
 * Created by onlyjyf on 8/5/17.
 */
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        _super.apply(this, arguments);
    }
    Manager.prototype.getMaxHandlerLevel = function () {
        return 8;
    };
    return Manager;
})(Handler_1.Handler);
exports.Manager = Manager;
//# sourceMappingURL=Manager.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Handler_1 = require("./Handler");
/**
 * Created by onlyjyf on 8/5/17.
 */
var Programmer = (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        _super.apply(this, arguments);
    }
    Programmer.prototype.getMaxHandlerLevel = function () {
        return 3;
    };
    return Programmer;
})(Handler_1.Handler);
exports.Programmer = Programmer;
//# sourceMappingURL=Programmer.js.map
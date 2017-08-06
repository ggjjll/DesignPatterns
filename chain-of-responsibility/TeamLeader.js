var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Handler_1 = require("./Handler");
/**
 * Created by onlyjyf on 8/5/17.
 */
var TeamLeader = (function (_super) {
    __extends(TeamLeader, _super);
    function TeamLeader() {
        _super.apply(this, arguments);
    }
    TeamLeader.prototype.getMaxHandlerLevel = function () {
        return 6;
    };
    return TeamLeader;
})(Handler_1.Handler);
exports.TeamLeader = TeamLeader;
//# sourceMappingURL=TeamLeader.js.map
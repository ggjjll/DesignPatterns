var CEO_1 = require("./CEO");
var Manager_1 = require("./Manager");
var TeamLeader_1 = require("./TeamLeader");
var Programmer_1 = require("./Programmer");
var Problem_1 = require("./Problem");
/**
 * Created by onlyjyf on 8/5/17.
 */
var p0 = new CEO_1.CEO();
var p1 = new Manager_1.Manager();
var p2 = new TeamLeader_1.TeamLeader();
var p3 = new Programmer_1.Programmer();
p1.setLastHandler(p0);
p2.setLastHandler(p1);
p3.setLastHandler(p2);
var pLevel = Math.floor(Math.random() * 10);
console.log("\u73B0\u5728\u9047\u5230" + pLevel + "\u7EA7\u7684\u95EE\u9898");
var p = new Problem_1.Problem(pLevel);
p3.handler(p);
//# sourceMappingURL=Test.js.map
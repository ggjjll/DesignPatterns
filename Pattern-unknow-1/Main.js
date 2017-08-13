var Component_1 = require("./Component");
var DeduplicateComponent_1 = require("./DeduplicateComponent");
var OptimizeComponent_1 = require("./OptimizeComponent");
var Components_1 = require("./Components");
var ary = [1, 2, 2, undefined, null, 0, 5, 3, 4];
var component = new Components_1.Components(new Component_1.Component());
component.optimizeData(ary);
component = new Components_1.Components(new DeduplicateComponent_1.DeduplicateComponent());
component.optimizeData(ary);
component = new Components_1.Components(new OptimizeComponent_1.OptimizeComponent());
component.optimizeData(ary);
console.log(ary);
//# sourceMappingURL=Main.js.map
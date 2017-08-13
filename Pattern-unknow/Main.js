var Components_1 = require("./Components");
var c = new Components_1.Components();
var ary = [1, 2, 2, undefined, null, 0, 5, 3, 4];
c.component.optimizeData(ary);
console.log(ary);
c.deduplicateComponent.optimizeData(ary);
console.log(ary);
c.optimizeComponent.optimizeData(ary);
console.log(ary);
c.component.optimizeData(ary);
console.log(ary);
c.deduplicateComponent.optimizeData(ary);
console.log(ary);
c.optimizeComponent.optimizeData(ary);
console.log(ary);
//# sourceMappingURL=Main.js.map
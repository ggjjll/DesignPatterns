import {Component} from "./Component";
import {IComponent} from "./IComponent";
import {DeduplicateComponent} from "./DeduplicateComponent";
import {OptimizeComponent} from "./OptimizeComponent";
import {Components} from "./Components";

let ary = [1, 2, 2, undefined, null, 0, 5, 3, 4];
let component = new Components(new Component());
component.optimizeData(ary);
component = new Components(new DeduplicateComponent());
component.optimizeData(ary);
component = new Components(new OptimizeComponent());
component.optimizeData(ary);
console.log(ary);

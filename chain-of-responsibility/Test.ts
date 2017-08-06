import {CEO} from "./CEO";
import {Manager} from "./Manager";
import {TeamLeader} from "./TeamLeader";
import {Programmer} from "./Programmer";
import {Problem} from "./Problem";
import {Handler} from "./Handler";
/**
 * Created by onlyjyf on 8/5/17.
 */
let p0:Handler = new CEO();
let p1:Handler = new Manager();
let p2:Handler = new TeamLeader();
let p3:Handler = new Programmer();

p1.setLastHandler(p0);
p2.setLastHandler(p1);
p3.setLastHandler(p2);

let pLevel = Math.floor(Math.random() * 10);
console.log(`现在遇到${pLevel}级的问题`);
let p = new Problem(pLevel);
p3.handler(p);

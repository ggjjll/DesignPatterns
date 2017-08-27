import {IFile} from "./IFile";
import {VirtualFile} from "./VirtualFile";

var root:IFile = new VirtualFile('root');

var childA:IFile = new VirtualFile('childA');
var childB:IFile = new VirtualFile('childB');

var childC:IFile = new VirtualFile('childC');
var childD:IFile = new VirtualFile('childD');
var childE:IFile = new VirtualFile('childE');

var childF:IFile = new VirtualFile('childF');
var childG:IFile = new VirtualFile('childG');

root.add(childA);
root.add(childB);

childA.add(childC);
childA.add(childD);

childB.add(childE);

childE.add(childF);
childE.add(childG);


print([], root, 0);


function print(queue:Array<IFile>, file:IFile, level:number):void {
    console.log(repeat('\t', level) + file.getName());
    queue = file.list();
    if (!queue.length) {
        return ;
    }
    for (let file of queue) {
        print([], file, level + 1);
    }
    function repeat(str, num) {
        let _str = '';
        while (num) {
            _str += str;
            num --;
        }
        return _str;
    }
}

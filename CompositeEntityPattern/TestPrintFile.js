var VirtualFile_1 = require("./VirtualFile");
var root = new VirtualFile_1.VirtualFile('root');
var childA = new VirtualFile_1.VirtualFile('childA');
var childB = new VirtualFile_1.VirtualFile('childB');
var childC = new VirtualFile_1.VirtualFile('childC');
var childD = new VirtualFile_1.VirtualFile('childD');
var childE = new VirtualFile_1.VirtualFile('childE');
var childF = new VirtualFile_1.VirtualFile('childF');
var childG = new VirtualFile_1.VirtualFile('childG');
root.add(childA);
root.add(childB);
childA.add(childC);
childA.add(childD);
childB.add(childE);
childE.add(childF);
childE.add(childG);
print([], root, 0);
function print(queue, file, level) {
    console.log(repeat('\t', level) + file.getName());
    queue = file.list();
    if (!queue.length) {
        return;
    }
    for (var _i = 0; _i < queue.length; _i++) {
        var file_1 = queue[_i];
        print([], file_1, level + 1);
    }
    function repeat(str, num) {
        var _str = '';
        while (num) {
            _str += str;
            num--;
        }
        return _str;
    }
}
//# sourceMappingURL=TestPrintFile.js.map
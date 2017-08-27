var ArraySort_1 = require('./ArraySort');
var NBArraySort = (function () {
    function NBArraySort(ary) {
        this._ary = null;
        this._ary = new ArraySort_1.ArraySort(ary);
    }
    NBArraySort.prototype.quickSort = function () {
        console.time('quickSort:');
        this._ary.quickSort();
        console.timeEnd('quickSort:');
    };
    NBArraySort.prototype.bubbleSort = function () {
        console.time('bubbleSort:');
        this._ary.bubbleSort();
        console.timeEnd('bubbleSort:');
    };
    return NBArraySort;
})();
exports.NBArraySort = NBArraySort;
//export class NBArraySort extends ArraySort {
//    constructor(ary) {
//        super(ary);
//    }
//
//
//
//    bubbleSort(): void {
//        console.time('bubbleSort:');
//        super.bubbleSort();
//        console.timeEnd('bubbleSort:');
//    }
//}
//# sourceMappingURL=NBArraySort.js.map
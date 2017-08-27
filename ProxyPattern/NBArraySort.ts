import {ISortable} from "./ISortable";
import {ArraySort} from './ArraySort';

export class NBArraySort implements ISortable{

    private _ary = null;

    constructor(ary) {
        this._ary = new ArraySort(ary);
    }

    quickSort(): void {
        console.time('quickSort:');
        this._ary.quickSort();
        console.timeEnd('quickSort:');
    }

    bubbleSort(): void {
        console.time('bubbleSort:');
        this._ary.bubbleSort();
        console.timeEnd('bubbleSort:');
    }
}

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

/**
 * 抽象类
 * */
abstract class ArraySort {
    private _arr = [];
    constructor(arg) {
        this._arr = arg.length === 1 ? arg[0] : arg;
    }

    /**
     * 比较方法，
     * 参数： num1, num2
     * 返回值： num1 > num2 ? true : false
     * */
    abstract compare (num1, num2);

    public getArr() {
        // 比较与排序
        let len = this._arr.length;
        for (let i = 0; i < len - 1; i ++) {
            for (let j = i + 1; j < len; j ++) {
                if (this.compare(this._arr[i], this._arr[j])) {
                    let t = this._arr[i];
                    this._arr[i] = this._arr[j];
                    this._arr[j] = t;
                }
            }
        }
        return this._arr;
    }
}

/**
 * 按数字大小排序
 * */
class ArraySortByNum extends ArraySort{
    constructor(...arg) {
        super(arg);
    }

    compare(num1, num2) {
        return num1 > num2;
    }
}

/**
 * 按字符数字大小排序
 * */
class ArraySortByLen extends ArraySort{
    constructor(...arg) {
        super(arg);
    }

    compare(num1, num2) {
        return num1.length > num2.length;
    }
}

let arraySortByNum = new ArraySortByNum(8,5,3,6,1,0,9);
console.log(arraySortByNum.getArr());
let arraySortByLen = new ArraySortByLen(['nb','nobook','beijing','k12']);
console.log(arraySortByLen.getArr());

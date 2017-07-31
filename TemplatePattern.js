var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 抽象类
 * */
var ArraySort = (function () {
    function ArraySort(arg) {
        this._arr = [];
        this._arr = arg.length === 1 ? arg[0] : arg;
    }
    ArraySort.prototype.getArr = function () {
        // 比较与排序
        var len = this._arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = i + 1; j < len; j++) {
                if (this.compare(this._arr[i], this._arr[j])) {
                    var t = this._arr[i];
                    this._arr[i] = this._arr[j];
                    this._arr[j] = t;
                }
            }
        }
        return this._arr;
    };
    return ArraySort;
})();
/**
 * 按数字大小排序
 * */
var ArraySortByNum = (function (_super) {
    __extends(ArraySortByNum, _super);
    function ArraySortByNum() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i - 0] = arguments[_i];
        }
        _super.call(this, arg);
    }
    ArraySortByNum.prototype.compare = function (num1, num2) {
        return num1 > num2;
    };
    return ArraySortByNum;
})(ArraySort);
/**
 * 按字符数字大小排序
 * */
var ArraySortByLen = (function (_super) {
    __extends(ArraySortByLen, _super);
    function ArraySortByLen() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i - 0] = arguments[_i];
        }
        _super.call(this, arg);
    }
    ArraySortByLen.prototype.compare = function (num1, num2) {
        return num1.length > num2.length;
    };
    return ArraySortByLen;
})(ArraySort);
var arraySortByNum = new ArraySortByNum(8, 5, 3, 6, 1, 0, 9);
console.log(arraySortByNum.getArr());
var arraySortByLen = new ArraySortByLen(['nb', 'nobook', 'beijing', 'k12']);
console.log(arraySortByLen.getArr());
//# sourceMappingURL=TemplatePattern.js.map
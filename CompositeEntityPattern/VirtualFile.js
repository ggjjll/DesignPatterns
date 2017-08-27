var VirtualFile = (function () {
    function VirtualFile(name) {
        this._name = name;
        this._iFileList = new Array();
    }
    VirtualFile.prototype.getName = function () {
        return this._name;
    };
    VirtualFile.prototype.list = function () {
        return this._iFileList;
    };
    VirtualFile.prototype.remove = function (file) {
        this._iFileList.splice(this._iFileList.indexOf(file));
    };
    VirtualFile.prototype.add = function (file) {
        this._iFileList.push(file);
    };
    VirtualFile.prototype.writeData = function (txt) {
    };
    VirtualFile.prototype.getData = function () {
        return null;
    };
    return VirtualFile;
})();
exports.VirtualFile = VirtualFile;
//# sourceMappingURL=VirtualFile.js.map
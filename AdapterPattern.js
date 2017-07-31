/**
 * UML图
 * http://uml.riaoo.com/
 * 保存成功！请记录好该文件的提取码：201707301937288105
 打开保存在服务器上的文档时，需要此提取码。
 * */
var OpenExp = (function () {
    function OpenExp() {
    }
    OpenExp.prototype.openExperiment = function () {
        console.log('打开成功');
        return true;
    };
    OpenExp.prototype.closeExperiment = function () {
        return false;
    };
    return OpenExp;
})();
var CloseExp = (function () {
    function CloseExp() {
    }
    CloseExp.prototype.openExperiment = function () {
        return false;
    };
    CloseExp.prototype.closeExperiment = function () {
        console.log('关闭成功');
        return true;
    };
    return CloseExp;
})();
var DeleteExp = (function () {
    function DeleteExp() {
    }
    DeleteExp.prototype.openExperiment = function () {
        return false;
    };
    DeleteExp.prototype.closeExperiment = function () {
        return false;
    };
    DeleteExp.prototype.deleteExperiment = function () {
        console.log('删除成功');
        return false;
    };
    return DeleteExp;
})();
var OperationAdapter = (function () {
    function OperationAdapter() {
    }
    OperationAdapter.prototype.open = function () {
        this.iPhysics = new OpenExp();
        this.iPhysics.openExperiment();
    };
    OperationAdapter.prototype.close = function () {
        this.iPhysics = new CloseExp();
        this.iPhysics.closeExperiment();
    };
    OperationAdapter.prototype.delete = function () {
        var iPhysics = new DeleteExp();
        iPhysics.deleteExperiment();
    };
    return OperationAdapter;
})();
var PhysicsMain = (function () {
    function PhysicsMain() {
    }
    PhysicsMain.prototype.openExperiment = function () {
        this.operationAdapter = new OperationAdapter();
        this.operationAdapter.open();
        return true;
    };
    PhysicsMain.prototype.closeExperiment = function () {
        this.operationAdapter = new OperationAdapter();
        this.operationAdapter.close();
        return true;
    };
    PhysicsMain.prototype.deleteExperiment = function () {
        this.operationAdapter = new OperationAdapter();
        this.operationAdapter.delete();
        return true;
    };
    return PhysicsMain;
})();
var pm = new PhysicsMain();
pm.openExperiment();
pm.closeExperiment();
pm.deleteExperiment();
//# sourceMappingURL=AdapterPattern.js.map
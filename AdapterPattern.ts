/**
 * UML图
 * http://uml.riaoo.com/
 * 保存成功！请记录好该文件的提取码：201707301937288105
 打开保存在服务器上的文档时，需要此提取码。
 * */

interface IPhysics {
    openExperiment():Boolean;
    closeExperiment():Boolean;
}

class OpenExp implements IPhysics {
    openExperiment():Boolean {
        console.log('打开成功');
        return true;
    }
    closeExperiment():Boolean {
        return false;
    }
}

class CloseExp implements IPhysics {
    openExperiment():Boolean {
        return false;
    }
    closeExperiment():Boolean {
        console.log('关闭成功');
        return true;
    }
}

class DeleteExp implements IPhysics {
    openExperiment():Boolean {
        return false;
    }
    closeExperiment():Boolean {
        return false;
    }
    deleteExperiment():Boolean {
        console.log('删除成功');
        return false;
    }
}

interface ICustomPhysics {
    open():void;
    close():void;
    delete():void;
}

class OperationAdapter implements ICustomPhysics {
    iPhysics:IPhysics;
    open():void {
        this.iPhysics = new OpenExp();
        this.iPhysics.openExperiment();
    }
    close():void {
        this.iPhysics = new CloseExp();
        this.iPhysics.closeExperiment();
    }
    delete():void {
        let iPhysics = new DeleteExp();
        iPhysics.deleteExperiment();
    }
}

class PhysicsMain implements IPhysics{
    operationAdapter:OperationAdapter;
    openExperiment():Boolean{
        this.operationAdapter = new OperationAdapter();
        this.operationAdapter.open();
        return true;
    }
    closeExperiment():Boolean{
        this.operationAdapter = new OperationAdapter();
        this.operationAdapter.close();
        return true;
    }
    deleteExperiment():Boolean{
        this.operationAdapter = new OperationAdapter();
        this.operationAdapter.delete();
        return true;
    }
}

let pm = new PhysicsMain();
pm.openExperiment();
pm.closeExperiment();
pm.deleteExperiment();

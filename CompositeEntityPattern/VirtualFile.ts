import {IFile} from "./IFile";
export class VirtualFile implements IFile {

    private _iFileList : Array<IFile>;

    private _name : String;

    constructor(name) {
        this._name = name;
        this._iFileList = new Array();
    }

    getName(): String {
        return this._name;
    }

    list(): Array<IFile> {
        return this._iFileList;
    }

    remove(file: IFile): void {
        this._iFileList.splice(this._iFileList.indexOf(file));
    }

    add(file: IFile): void {
        this._iFileList.push(file);
    }

    writeData(txt: String): void {
    }

    getData(): String {
        return null;
    }
}
import {IComponent} from "./IComponent";

export class Components implements IComponent{
    private components;

    constructor(components: IComponent) {
        this.components = components;
    }

    optimizeData(data: Array<any>){
        this.components.optimizeData(data);
    }
}

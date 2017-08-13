import {Component} from "./Component";
import {DeduplicateComponent} from "./DeduplicateComponent";
import {OptimizeComponent} from "./OptimizeComponent";

export class Components {

    private _components;

    constructor () {
        this._components = {};
        let that = this;
        return new Proxy({}, {
            get: function(target, key) {
                if (that._components[key]) {
                    return that._components[key];
                } else {
                    let component = {};
                    console.log('实例化新实例');
                    switch (key) {
                        case 'deduplicateComponent':
                            component = new DeduplicateComponent();
                            that._components.deduplicateComponent = component;
                            return component;
                        case 'optimizeComponent':
                            component = new OptimizeComponent();
                            that._components.optimizeComponent = component;
                            return component;
                        case 'component':
                            component = new Component();
                            that._components.component = component;
                            return component;
                    }
                }
            }
        });
    }



    public deduplicateComponent
}

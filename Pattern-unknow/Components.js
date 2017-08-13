var Component_1 = require("./Component");
var DeduplicateComponent_1 = require("./DeduplicateComponent");
var OptimizeComponent_1 = require("./OptimizeComponent");
var Components = (function () {
    function Components() {
        this._components = {};
        var that = this;
        return new Proxy({}, {
            get: function (target, key) {
                if (that._components[key]) {
                    return that._components[key];
                }
                else {
                    var component = {};
                    console.log('实例化新实例');
                    switch (key) {
                        case 'deduplicateComponent':
                            component = new DeduplicateComponent_1.DeduplicateComponent();
                            that._components.deduplicateComponent = component;
                            return component;
                        case 'optimizeComponent':
                            component = new OptimizeComponent_1.OptimizeComponent();
                            that._components.optimizeComponent = component;
                            return component;
                        case 'component':
                            component = new Component_1.Component();
                            that._components.component = component;
                            return component;
                    }
                }
            }
        });
    }
    return Components;
})();
exports.Components = Components;
//# sourceMappingURL=Components.js.map
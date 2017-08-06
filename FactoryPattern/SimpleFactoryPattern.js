var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**容器*/
var Container = (function () {
    function Container(name, volume) {
        if (name === void 0) { name = '未知'; }
        if (volume === void 0) { volume = 0; }
        this.name = name;
        this.volume = volume;
    }
    Container.prototype.getName = function () {
        return this.name;
    };
    Container.prototype.setVolume = function (volume) {
        this.volume = volume;
    };
    Container.prototype.getVolume = function () {
        return this.volume;
    };
    return Container;
})();
/**烧杯*/
var Beaker = (function (_super) {
    __extends(Beaker, _super);
    function Beaker(volume) {
        if (volume === void 0) { volume = 50; }
        _super.call(this, 'Beaker', volume);
    }
    return Beaker;
})(Container);
/**试管*/
var Tube = (function (_super) {
    __extends(Tube, _super);
    function Tube(volume) {
        if (volume === void 0) { volume = 50; }
        _super.call(this, 'Tube', 10);
    }
    return Tube;
})(Container);
/**工厂*/
var ContainerFactory = (function () {
    function ContainerFactory() {
    }
    ContainerFactory.prototype.getContainer = function (type) {
        var container;
        switch (type) {
            case 'Beaker':
                container = new Beaker();
                break;
            case 'Tube':
                container = new Tube();
                break;
        }
        return container;
    };
    return ContainerFactory;
})();
var cf = new ContainerFactory();
var b = cf.getContainer('Beaker');
var t = cf.getContainer('Tube');
console.log(b);
console.log(t);
//# sourceMappingURL=SimpleFactoryPattern.js.map
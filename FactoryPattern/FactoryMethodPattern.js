var MiddleExperiment = (function () {
    function MiddleExperiment() {
    }
    MiddleExperiment.prototype.operation = function () {
        console.log('这是一个初中实验');
    };
    return MiddleExperiment;
})();
var HighExperiment = (function () {
    function HighExperiment() {
    }
    HighExperiment.prototype.operation = function () {
        console.log('这是一个高中实验');
    };
    return HighExperiment;
})();
var MiddleExperimentCreator = (function () {
    function MiddleExperimentCreator() {
    }
    MiddleExperimentCreator.prototype.creator = function () {
        return new MiddleExperiment();
    };
    return MiddleExperimentCreator;
})();
var HighExperimentCreator = (function () {
    function HighExperimentCreator() {
    }
    HighExperimentCreator.prototype.creator = function () {
        return new HighExperiment();
    };
    return HighExperimentCreator;
})();
var hec = new HighExperimentCreator();
var he = hec.creator();
he.operation();
var mec = new MiddleExperimentCreator();
var me = mec.creator();
me.operation();
//# sourceMappingURL=FactoryMethodPattern.js.map
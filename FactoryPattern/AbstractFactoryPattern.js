var Physics = (function () {
    function Physics() {
    }
    Physics.prototype.getName = function () {
        return '物理';
    };
    return Physics;
})();
var Chemistry = (function () {
    function Chemistry() {
    }
    Chemistry.prototype.getName = function () {
        return '化学';
    };
    return Chemistry;
})();
var Biology = (function () {
    function Biology() {
    }
    Biology.prototype.getName = function () {
        return '生物';
    };
    return Biology;
})();
var HighSchool = (function () {
    function HighSchool() {
    }
    HighSchool.prototype.getName = function () {
        return '高中';
    };
    return HighSchool;
})();
var MiddleSchool = (function () {
    function MiddleSchool() {
    }
    MiddleSchool.prototype.getName = function () {
        return '初中';
    };
    return MiddleSchool;
})();
var SubjectFactory = (function () {
    function SubjectFactory() {
    }
    SubjectFactory.prototype.getSubject = function (type) {
        switch (type) {
            case 'p':
                return new Physics();
            case 'c':
                return new Chemistry();
            case 'b':
                return new Biology();
        }
    };
    SubjectFactory.prototype.getGrade = function () {
        return null;
    };
    return SubjectFactory;
})();
var GradeFactory = (function () {
    function GradeFactory() {
    }
    GradeFactory.prototype.getGrade = function (type) {
        switch (type) {
            case 'h':
                return new HighSchool();
            case 'm':
                return new MiddleSchool();
        }
    };
    GradeFactory.prototype.getSubject = function () {
        return null;
    };
    return GradeFactory;
})();
var FactoryProducer = (function () {
    function FactoryProducer() {
    }
    FactoryProducer.prototype.getFactory = function (type) {
        switch (type) {
            case 'g':
                return new GradeFactory();
            case 's':
                return new SubjectFactory();
        }
    };
    return FactoryProducer;
})();
var fp = new FactoryProducer();
var fp_g = fp.getFactory('g');
console.log(fp_g.getGrade('h').getName());
var fp_s = fp.getFactory('s');
console.log(fp_s.getSubject('b').getName());
//# sourceMappingURL=AbstractFactoryPattern.js.map
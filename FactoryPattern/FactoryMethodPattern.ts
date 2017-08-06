interface Experiment {
    operation():void
}

class MiddleExperiment implements Experiment {
    operation() {
        console.log('这是一个初中实验');
    }
}

class HighExperiment implements Experiment {
    operation() {
        console.log('这是一个高中实验');
    }
}

interface Creator {
    creator():Experiment;
}

class MiddleExperimentCreator implements Creator{
    creator() {
        return new MiddleExperiment();
    }
}

class HighExperimentCreator implements Creator{
    creator() {
        return new HighExperiment();
    }
}

let hec = new HighExperimentCreator();
let he = hec.creator();
he.operation();

let mec = new MiddleExperimentCreator();
let me = mec.creator();
me.operation();
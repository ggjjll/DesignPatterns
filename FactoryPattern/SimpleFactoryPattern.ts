/**容器*/
abstract class Container {
    name:string;
    volume:number;
    constructor (name = '未知', volume = 0) {
        this.name = name;
        this.volume = volume;
    }
    getName():string {
        return this.name;
    }
    setVolume(volume:number):void {
        this.volume = volume;
    }
    getVolume():number {
        return this.volume;
    }
}

/**烧杯*/
class Beaker extends Container {
    constructor (volume = 50) {
        super('Beaker', volume);
    }
}

/**试管*/
class Tube extends Container {
    constructor (volume = 50) {
        super('Tube', 10);
    }
}

/**工厂*/
class ContainerFactory {
    getContainer(type):Container {
        let container;
        switch (type) {
            case 'Beaker':
                container = new Beaker();
                break;
            case 'Tube':
                container = new Tube();
                break;
        }
        return container;
    }
}

let cf = new ContainerFactory();
let b = cf.getContainer('Beaker');
let t = cf.getContainer('Tube');
console.log(b);
console.log(t);
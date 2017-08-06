interface Subject {
    getName():string;
}

class Physics implements Subject {
    getName() {
        return '物理';
    }
}

class Chemistry implements Subject {
    getName() {
        return '化学';
    }
}

class Biology implements Subject {
    getName() {
        return '生物';
    }
}

interface Grade {
    getName():string;
}

class HighSchool implements Grade {
    getName(){
        return '高中';
    }
}

class MiddleSchool implements Grade {
    getName(){
        return '初中';
    }
}

interface Factory {
    getSubject(type:string):Subject;
    getGrade(type:string):Grade;
}

class SubjectFactory implements Factory {
    getSubject (type) {
       switch (type) {
           case 'p':
               return new Physics();
           case 'c':
               return new Chemistry();
           case 'b':
               return new Biology();
       }
    }
    getGrade () {
        return null
    }
}

class GradeFactory implements Factory {
    getGrade (type) {
        switch (type) {
            case 'h':
                return new HighSchool();
            case 'm':
                return new MiddleSchool();
        }
    }
    getSubject () {
        return null
    }
}

class FactoryProducer {
    getFactory(type):Factory{
        switch (type) {
            case 'g':
                return new GradeFactory();
            case 's':
                return new SubjectFactory();
        }
    }
}

let fp = new FactoryProducer();
let fp_g = fp.getFactory('g');
console.log(fp_g.getGrade('h').getName());
let fp_s = fp.getFactory('s');
console.log(fp_s.getSubject('b').getName());
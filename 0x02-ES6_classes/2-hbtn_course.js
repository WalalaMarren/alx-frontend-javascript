export default class HolbertonCourse{
    constructor(name, length, students){
        this._name = name;
        this._length = length;
        this._students = students;
    }
    get name(){
        return this.name;
    }
    set name(newName){
        this._name = newName;
    }
    get length(){
        return this.length;
    }
    set length(newLength){
        this._length = newLength;
    }
    get students(){
        return this.students;
    }
    set students(newStudent){
        this._students = newStudent;
    }
}
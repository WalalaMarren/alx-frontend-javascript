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
        if (typeof newName === 'string'){
            this._name = newName;
        }else{
            console.log('Name must be a string')
        }
    }
    get length(){
        return this.length;
    }
    set length(newLength){
        if (typeof newLength === 'number'){
            this._length = newLength;
        }else{
            console.log('Length must be a number')
        }
    }
    get students(){
        return this.students;
    }
    set students(newStudent){
        if (Array.isArray(newStudents)) {
            this._students = newStudents;
          }else {
            console.error('Students should be an array');
          }
    }
}
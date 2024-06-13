class Parent{
    constructor(){
        this.fahter_name = "Mokarram";
    }
}
class student extends Parent{
    constructor(id,name){
        super();
        this.id = id;
        this.name = name;
        
    }
    getFullName(){
        return this.name + " " +this.fahter_name;
    }
}


const student3 = new student(3,"Muskan");
// const student1 = new student(1,"ABID");
// const student2 = new student(2,"SADMAN");

console.log(student3.getFullName());
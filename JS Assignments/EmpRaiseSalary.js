class Employee{
    constructor(name,age,desig,salary)
    {
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.designation=desig;
    }
    display(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.designation)
        console.log(this.salary)
        console.log("------------------------------------------")
    } 
}
class Clerk extends Employee
{
    constructor(name,age){
        super(name,age,"Clerk",10000);
     }
     raiseSalary(){
        this.salary+=2000
     }
}
class Porgrammer extends Employee
{
    constructor(name,age){
        super(name,age,"Programmer",25000);

     }
     raiseSalary(){
        this.salary+=5000
    }
    
}
class Manager extends Employee
{
     constructor(name,age){
        super(name,age,"Manager",80000);

     }
     raiseSalary(){ 
        this.salary+=10000
     }
}

manager=new Manager("Ganesh",23)
manager.display();
manager.raiseSalary();
manager.raiseSalary();
manager.raiseSalary();
manager.raiseSalary();
console.log("Increased 4 times")
manager.display();

programmer=new Porgrammer("Ram",23)
programmer.display();
programmer.raiseSalary();

clerk=new Clerk("Raj",23)
clerk.display();
clerk.raiseSalary();

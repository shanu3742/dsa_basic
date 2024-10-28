class Person {
  private  name:string;
  private  age:number;
  private  nationality:string;
  private  color:SkinType;  
    constructor(builder:PersonI){
       this.name = builder.name;
       this.age = builder.age;
       this.nationality = builder.nationality;
       this.color = builder.color;
    }

}



class PersonBuilder{
    private name:string;
    private age:number;
    private color:SkinType;
    private nationality:string;
    private isManager=false;
    private role:roleType='permanent';
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    skinType(type:SkinType){
        this.color= type;
        return this
    }
    setNationality(type:string){
        this.nationality=type;
        return this;
    }
    setrole(type:roleType){
      this.role =type;
      return this;
    }
    manager(){
        this.isManager= true;
        return this
    }
    build(){
        return new Person(this as any)
    }


}

interface PersonI {
    name:string;
    age:number;
    nationality:string;
    color:SkinType;
} 
type SkinType = 'white'|'black'|'brown'|'yellowish'
type roleType = 'permanent'| 'temporary'


let personOne = new PersonBuilder('shanu',24)
                            .manager()
                            .setNationality('indian')
                            .setrole('permanent')
                            .skinType('yellowish')
console.log('first person details',personOne)
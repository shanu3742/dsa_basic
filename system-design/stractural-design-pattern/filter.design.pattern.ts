//filter design pattern
class Person implements onPersonInit {
    public name:string;
    public age:number;
    public sex:SexType;
    public maritalStatus:MaritalStatusType;
    constructor(name:string,age:number,sex:SexType,maritalStatus:MaritalStatusType){
         this.name = name;
         this.age = age;
         this.sex = sex;
         this.maritalStatus = maritalStatus;
    }

    getMaritalStatus(){
        return this.maritalStatus;
    }
    getSex(){
        return this.sex
    }
}
interface onPersonInit {
    name:string;
    age:number;
    sex:SexType;
    maritalStatus:MaritalStatusType;
    getMaritalStatus:() => MaritalStatusType;
    getSex:() => SexType;
}
type MaritalStatusType = "single" | 'married';
type SexType = 'Male' | 'Female' | 'Other';

const userList:onPersonInit[] = []
let userOne = new Person('satayam',25,'Male','married');
let userTwo = new Person('Joyati',23,'Female','married');
let userThree = new Person('Khushboo',19,'Female','single');
let userFour = new Person('kumar',26,'Male','single');

userList.push(userOne);
userList.push(userTwo);
userList.push(userThree);
userList.push(userFour);


class CriteriaMale implements Criteria { 
    meetCriteria(personList:onPersonInit[]){
      return personList.filter((d) => d.getSex() ==='Male')
    };
}
class CriteriaFemale implements Criteria { 
    meetCriteria(personList:onPersonInit[]){
      return personList.filter((d) => d.getSex() ==='Female')
    };
}

class CriteriaSingle implements Criteria {
    meetCriteria(personList:onPersonInit[]){
        return personList.filter((d) => d.getMaritalStatus() ==='single')
      };
}
class CriteriaMarried implements Criteria {
    meetCriteria(personList:onPersonInit[]){
        return personList.filter((d) => d.getMaritalStatus() ==='married')
      };
}

class AndCriteria implements Criteria {
    private criteriaOne:Criteria;
    private criteriaTwo:Criteria;
    constructor(criteriaOne:Criteria,criteriaTwo:Criteria){
        this.criteriaOne= criteriaOne;
        this.criteriaTwo= criteriaTwo;
    }
    meetCriteria(personList:onPersonInit[]){
        let filterUser = this.criteriaOne.meetCriteria(personList);
        return this.criteriaTwo.meetCriteria(filterUser);
    };
}

class OrCriteria implements Criteria {
    private criteriaOne: Criteria;
    private criteriaTwo: Criteria;

    constructor(criteriaOne: Criteria, criteriaTwo: Criteria) {
        this.criteriaOne = criteriaOne;
        this.criteriaTwo = criteriaTwo;
    }

    meetCriteria(personList: onPersonInit[]): onPersonInit[] {
        let firstCriteriaUsers = this.criteriaOne.meetCriteria(personList);
        let secondCriteriaUsers = this.criteriaTwo.meetCriteria(personList);

        // Merge both lists and remove duplicates
        let combinedUsers = [...firstCriteriaUsers];

        secondCriteriaUsers.forEach(person => {
            if (!combinedUsers.includes(person)) {
                combinedUsers.push(person);
            }
        });

        return combinedUsers;
    }
}


interface Criteria {
    meetCriteria:(d:onPersonInit[]) => onPersonInit[]
}



//used filter pattern
let criteriaOne = new CriteriaMale();
let criteriaTwo = new CriteriaFemale();
let criteriaThree = new CriteriaSingle();
let criteriaFour = new CriteriaMarried();
let criteriaFive = new AndCriteria(criteriaOne,criteriaThree);
let criteriaSix = new OrCriteria(criteriaOne,criteriaFour);

let maleUser = criteriaOne.meetCriteria(userList);
let femaleUser = criteriaTwo.meetCriteria(userList);
let single = criteriaThree.meetCriteria(userList);
let married = criteriaFour.meetCriteria(userList);
let maleAndSingle = criteriaFive.meetCriteria(userList);
let maleOrMarried = criteriaSix.meetCriteria(userList);
console.log(maleUser);
console.log(femaleUser);
console.log(single);
console.log(married);
console.log(maleAndSingle);
console.log(maleOrMarried);
class Employesalary{
    employeList:IEmp[];
    constructor(employeList:IEmp[]){
      this.employeList = employeList;
    }
   
    getSalary(){
      return this.employeList.reduce((a,b:IEmp) => a+b.getSalary()  ,0)
    }
  
  }
  
  
  
  const employList = 
  `name,age,id,salary
   shanu,24,039,1000
   kumar,23,038,500
   rahul,19,011,300`
  
  
  
  
  
  class EmployeeStringToJsonAdaptor{
      employList:string;
      constructor(employList:string){
          this.employList = employList;
      }
      parseStringToJson():IEmp[]{
  
          let [employeeKeyStr,...employeeValueStrList] = this.employList.split('\n');
          let employeeKey = employeeKeyStr.split(',')
          const resolveEmployeeData = employeeValueStrList.map((el,index) => {
            let data = el.split(',')
            let emplyObj:any={};
            data.forEach((d,i) => {
              emplyObj[employeeKey[i]]= d;
            })
            
            return emplyObj
          })
          
          let employeData:IEmp[] = resolveEmployeeData.map((el:IEmoloye) => {
            return {...el,getSalary:() => +el.salary}
          })
  
          return employeData;
  
      }   
  
  }
  let jsonData = new EmployeeStringToJsonAdaptor(employList);
  let jsonDataResult = jsonData.parseStringToJson();
  let result  = new Employesalary(jsonDataResult);
  console.log(result.getSalary())
  
  
  interface IEmoloye{
      name:string;
      age:number;
      id:number;
      salary:number;
  }
  
  interface IEmp extends IEmoloye{
      getSalary:() => number
  }
  
  
  
  
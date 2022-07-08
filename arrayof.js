let studentRecord = 
[{name:'John', id:123 , marks:98},
{name:'Baba', id:101 , marks:23},
{name:'Yaga', id:200 , marks:45},
{name:'Wick', id:115 , marks:75}]

// que1::we are intrested in retrieving only the name of the first student and 
//       the names should be in caps ['JOHN','BABA','YAGA','WICK']

console.log(studentRecord[0].name.toUpperCase());
console.log(studentRecord[1].name.toUpperCase()); 
console.log(studentRecord[2].name.toUpperCase());
console.log(studentRecord[3].name.toUpperCase());

// que2::Supposed we have the same dataset as above but this time we want 
//       to get the details of student who score more than 50 marks
[{name:'John', id:123 , marks:98},
{name:'Wick', id:115 , marks:75}]
let marks = studentRecord.filter(name=>name.marks>50);
console.log(marks);

// que3:: retrive the details of student who scored more than 50 marks and id greater than 120
let more = studentRecord.filter((a)=>{
    return(a.marks>50 && a.id>120)
});
console.log(more);


// que4::Consider the scenario we have dicussed above ,but this time we would 
// like to know the sum total of marks of the student.
let sum = 0;
for(i=0 ; i<=3 ; i++){
    sum += studentRecord[i].marks;
}
console.log(sum);

// que5::This time we want to get only names of the student  who score more than 50 marks 
// from the same data set used above 

let name = [];
let name1 = studentRecord.map((a)=>{
if(a.marks>50){
    name.push(a.name);
}
}) 
console.log(name);

// que6::this time we required to print the sum of marks of the student with
//  id>120.

sum1 = studentRecord.reduce((res,ele)=>{
    if(ele.id>120){
        res +=ele.marks;
    }
    return res;
},0)
console.log(sum1);


// que7::this time we are required to print the total number of student with marks 
//      greater than 50 after a grace of 15 marks has been added to those students
//       who scoreed less than 50
      

let studentMarks = studentRecords.map(function(i){ 
    if(i.marks < 50){
        i.marks += 15;}
    return stu;
    }).filter(i => i.marks > 50).reduce((a,b) => a+b.marks, 0);
    console.log(studentMarks);


 
   //Create 6 objects , each object will have name, class, roll no as 
//    properties. Store these objects in an array of objects. 


let frd1={ 
name:"Sanket", 
city:"Morshi" 
} 
let frd2={ 
name:"Snehal", 
city:"Belona"  
} 
let frd3={ 
name:"Akshay", 
city:"Varud" 
} 
let frd4={ 
name:"Vaibhav", 
city:"Tuljapur" 
} 
let frd5={ 
name:"Shreyash", 
city:"Amravati"  
} 
let frd6={ 
name:"Satya", 
city:"Washim" 
} 
let arr=[{...frd1},{...frd2},{...frd3},{...frd4},{...frd5},{...frd6}]; 
console.log(arr);






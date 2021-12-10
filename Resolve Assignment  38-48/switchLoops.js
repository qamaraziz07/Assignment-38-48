///<<Q:1>>
// function power(a,b){

// var cal=a**b;
// return cal;

// }
// var num1=prompt("Enter a BASE number ");
// var num2=prompt("Enter a Power number");
// var p=power(num1,num2);

// document.write("Power of " +num1+ " and " +num2+ "  is : " +p);

//<<Q:2>>

// function checkLeapYear(year) {

//     let leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         document.write(year + ' is a leap year');
//     } else {
//         document.write(year + ' is not a leap year');
//     }
// }
// let year = prompt('Enter a year:');
// checkLeapYear(year);

//<<Q:3>>

// function areaOfTriangle(a,b,c){
//     function area(formula){

//      formula =s*((s-a)*(s-b)*(s-c));
//      document.write("Area of Triangle is : " + formula);
//     }
//     var  s = (a+b+c)/2;
//     area(s);
// }
// areaOfTriangle(2,3,4);

///<<Q:4>>
// var student1=+prompt("Enter the number of subject 1 : ");
// var student2=+prompt("Enter the number of subject 2 : ");
// var student3=+prompt("Enter the number of subject 3 : ");
// function mainFunction(sbj1,sbj2,sbj3){

//          let sumOfTotal= sbj1+sbj2+sbj3;
//             document.write("sumOfTotal is :"+ sumOfTotal+"<br>");

//             calAverage(sumOfTotal);

// function calAverage(average){

//         average= sumOfTotal/3;
//      document.write("Average  is : "+ average.toFixed(2)+"<br>");

//      calPercentage(average);
//    return average;

//     }
// function calPercentage(percentage){
//              
//         percentage = (sumOfTotal/3) * 100;
//         document.write("Percentage is : " +percentage.toFixed(2)+"%" +"<br>");

//        return percentage;

//     }
// }
// mainFunction(student1,student2,student3);

///////<<Q:9>>
// var workingHours=prompt("Enter your working hours..!!!");

// function employees(){
      
//    if(workingHours > 40){
//         let overTime=workingHours - 40;
//         let overTimePay= overTime * 12.00;
//             document.write("Your Over Time working Pay is : "+ overTimePay);
        
//          return overTimePay;
//       }
//       else{
//          document.write("Sorry..! You dont have any Over Time");
//       }
// }employees();

//////////////

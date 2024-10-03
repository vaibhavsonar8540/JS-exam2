

let birthdate = new Date('2003-12-07');
let currdate = new Date();

//year
let newdate2 = currdate.getFullYear();
let newdate = birthdate.getFullYear();

let diff = newdate2 - newdate ;
console.log("Age",diff);

// month
let month = birthdate.getDate();
let month2 = currdate.getMonth();

console.log("Months diff",month2-month);

// date diff
console.log("Days from birth",diff*365);

// hours
console.log("Hours",diff*365*24);

// minute
console.log("Minutes",diff*365*24*60);

//second
console.log("milliseconds", diff*365*24*60*60);

//milisecond
console.log("milliseconds", diff*365*24*60*60*60);

// total months
console.log("Total months",diff*12);




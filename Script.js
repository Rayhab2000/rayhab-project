let method = new Array();


method.push("60");
method.push("54");
method.push("12");
method.push("89");

let copy = method.map(function(num){
return num * 2; 
});
alert(method);
alert(copy);

let approve = method.filter(function(num){
return num > 5;
});
alert(approve);

let user = {
name : "Rayhab",
};

let {name,age,city,} = user;


alert(name);
alert(typeof name);

alert(classrep);
user.name = "Rayhab";
user.age = age;
user.city = Abuja;

alert(user.name);
alert(user.age);
alert(user.city);

alert(user);


//Arrow function//

let multiply = a => a * a;
console.log(multiply(2,5));













 
    

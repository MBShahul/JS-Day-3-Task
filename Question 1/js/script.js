let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

for (let key in obj1) {
    console.log(`${key}: ${obj1[key]}`);
}
for (let key in obj2) {
    console.log(`${key}: ${obj2[key]}`);
}

if(obj1.name == obj2.name && obj1.age == obj2.age){
    console.log("obj1 and obj2 has same key value pairs")
}
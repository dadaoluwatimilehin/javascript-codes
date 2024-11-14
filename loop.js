// Loops are used to execute a block of code repeatedly until
// specific condition are met.
for (let i  = 0;  i < 5; i++) {
    console.log("hello from loop" + i);
};


const colors = ["red", "blue", "green", "yellow"];

for (let  i = 0;  i < colors.length;  i++) {
    console.log( " Color:",colors[i]);
}


const fruits = ["apple", "banana", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

const students = [
    { name: "John", grade: 85 },
    { name: "Jane", grade: 90 },
    { name: "Seyi", grade: 100 }
]

for (let i = 0; i < students.length; i++) {
    console.log("Student:", students[i].name, "Grade:", students[i].grade);
}

const student0 = [ 
    { name: "solomon", school: "New Horizon ", age: 20, course: "full stack"}
]

for (let i = 0; i < student0.length; i++) {
    console.log("Student:", student0[i].name, "School:", student0[i].school, "Age:", student0[i].age, "Course:", student0[i].course);
}

// while loop
let i = 0;
while (i < 5) {
    console.log("count is: " + i);
    i++;
}


for(let i = 100; i >= 0; i--) {
    console.log(i);
}


for (let i = 0; i <= 50; i++) {
    if(i % 2 === 0) {
        console.log(i);
    } 
}

for(let i = 0; i <= 10; i ++) {
    console.log(i * 5);
}

for (let i = 0; i <= 50; i++) {
    if(i % 5 === 0) {
        console.log(i);
    } 
}


let sum = 0;

for (let i = 10; i <= 15; i++) {
    sum += i;
}

console.log(sum)


const str = "TechGlobal School";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}



const school = "TechGlobal School";
let num = 0;

for (let i = 0; i < school.length; i++) {
    if (school[i] === 'o') {
        num++;
    }
}

console.log(num);
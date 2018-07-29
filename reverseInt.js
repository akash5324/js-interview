function reverseInt(n){

const string= n.toString().split('').reverse().join('');

const result= Math.sign(n) * parseInt(string);
console.log(result);
}


reverseInt(-005);
let raj=[]

arradd(raj)

function arradd(raj){
raj.push(4,5,6)

console.log("initial values of elements of array" ,raj)
for(let i=0;i<raj.length;i++){
raj[i]=raj[i]+2
}
console.log("values of elements of array after addition" ,raj)
}

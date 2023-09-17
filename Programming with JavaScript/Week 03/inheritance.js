var bird={
    hasWings:true,
    canFly:true,
    hasFeathers:true
}

var eagle1=Object.create(bird);
console.log("eagle1 : ",eagle1); //eagle1 :  {}
console.log("eagle1 : ",eagle1.hasWings);//eagle1 :  true

var eagle2=Object.create(bird);
console.log("eagle2 : ",eagle2.canFly);//eagle2 :  true

var penguine1=Object.create(bird);
console.log("penguine1 : ",penguine1);//penguine1 :  {}
console.log("penguine1 : ",penguine1.canFly);//penguine1 :  true

penguine1.canFly = false;
console.log("penguine1 : ",penguine1.canFly);//penguine1 :  false

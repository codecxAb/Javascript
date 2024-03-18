let arr = [1,2,3,4,5,6];

const doubleArr = arr.map(x => x*2);
console.log(doubleArr);

const toBin = arr.map(x => x.toString(2));
console.log(toBin);

const  onlyOdds = arr.filter((val) => val % 2 !==0 );
console.log(onlyOdds);
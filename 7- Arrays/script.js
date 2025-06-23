//***************************Arrays**************** */

let Arr = [1,2,3,4,5,6]
// console.log(Arr[0]); 


//*******************Array Methods ************//

let arr1 = Arr.push(18)
// console.log(arr1);

let arr2 = Arr.pop()
// console.log(arr2);

let arr3 = Arr.unshift(0)
//  console.log(arr3);

let arr4 = Arr.shift()
// console.log(arr4);

let newArr = Arr.join()
// console.log(newArr);


//***********Splice and Slice******** */

let researchArr = [18,45,7,10,14,333]
// console.log("A = " ,researchArr);

let sliceArr = researchArr.slice(1,4)
// console.log("B = " ,sliceArr);
// console.log(researchArr);

// let spliceArr = researchArr.splice(1,4)
// console.log("C = " ,spliceArr );
// console.log(researchArr);


//**********************Joing of Arrrays ********************/

let joinArr = Arr.concat(researchArr)
// console.log(joinArr);

let allJoin = [...Arr,...researchArr]
// console.log(allJoin);

//*******************Checking of Arrays************** */

console.log(Array.isArray("Samyak"));
console.log(Array.from("Samyak"));
console.log(Array.from({name : "Samyak"}));  // Caution  and Intersting

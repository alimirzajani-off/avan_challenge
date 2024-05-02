let users_1 = {
  ali: 22,
  mohammad: 30,
  reza: 22,
};
let users_2 = {
  amirali: 2,
  amirmohammad: 39,
  amirreza: 12,
  maryam: 39,
  fatemeh: 28,
  meysam: 2,
};
let users_3 = {
  ahmadali: 22,
  farshad: 30,
  karim: 25,
  mahdi: 22,
  mohammad: 30,
  vahid: 25,
};

//without function
let usersArray = [];
for (const key in users_1) {
  if (Object.hasOwnProperty.call(users_1, key)) {
    const element = users_1[key];
    usersArray.push(element);
  }
}
console.log("Q1", usersArray);
let deleteDuplicateNumber = [...new Set(usersArray)];
console.log("Q2", deleteDuplicateNumber);
//

//with function
const convertObjToArr = (obj) => {
  let usersArray = [];
  //با for-in ،value ایتم های ابجکت رو به ارایه میریزیم و ارایه تولید شده شامل value های ابجکت میباشد.
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      usersArray.push(element);
    }
  }
  // با new Set() مقادیر تکراری از ارایه حذف میشود.
  return [...new Set(usersArray)];
};

console.log("Q1,Q2_1", convertObjToArr(users_1));
console.log("Q1,Q2_2", convertObjToArr(users_2));
console.log("Q1,Q2_3", convertObjToArr(users_3));
//

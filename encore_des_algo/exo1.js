const list1 = [10, 15, 3, 7];
const list2 = [1, 8, 10, 21];
const list3 = [4, 5, 6, 7, 8, 9, 10, 11]
const a = 17;
const b = 19;
const c = 21;

function isSumOf2NumberEqualk(list,k){
  let sum = 0
  for( let i = 0; i < (list.length -1); i++){
    for( let j = i + 1; j < list.length; j++){
      sum = list[i] + list[j];
      // console.log(sum);
      if (sum === k){
        console.log(`${list[i]} + ${list[j]} = ${k}`);
        return true;
      };
    };
  };
  return false;  
};

console.log(isSumOf2NumberEqualk(list3,a))
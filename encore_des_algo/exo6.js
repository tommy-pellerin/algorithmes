const list1 = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];
const list3 = [1, 5, 8, 7, 9, 2, 3, 6, 5, 4]

function numberOfBuildingWithSun(list){
  let count = 1;
  let currentMax = list[list.length-1];
  for(let i = list.length - 2; i >= 0; i--){    
    // console.log(i);
    if (list[i] > currentMax){
      count++;
      currentMax = list[i];
    };
  };
  return count
}

console.log(numberOfBuildingWithSun(list3));
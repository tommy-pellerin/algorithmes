const list1 = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];
const list3 = [1, 5, 8, 7, 9, 2, 3, 6, 5, 4]


function numberOfBuildingWithSun(list){
  let count = 1;
  let currentMaxIndex = findMaxIndex(list);
  // console.log("je compte");
  for(let i=currentMaxIndex; i<= list.length-2; i++){
    console.log(i);
    if(list[i+1]<list[i]){
      count++;
    };
  };
  return count;
}

function findMaxIndex(list){
  let currentMaxIndex = 0;
  // console.log("Je cherche l'index max");
  for (let i = 0; i <= list.length - 2; i++){
    
    console.log(i);
    if(list[i]>list[currentMaxIndex]){
      currentMaxIndex = i;
    };
  };
  
  return currentMaxIndex;
}



console.log(numberOfBuildingWithSun(list3));
const list1 = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];
const list3 = [1, 5, 8, 7, 9, 2, 3, 6, 5, 4];

function numberOfBuildingWithSun(list) {
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    let j;
    for (j = i + 1; j < list.length; j++) {
      if (list[i] <= list[j]) {
        break;
      }
    }

    if (j == list.length) { // if loop didn't break, increase count
      count++;
    }
  }

  return count;
}

console.log(numberOfBuildingWithSun(list1)); // 3
console.log(numberOfBuildingWithSun(list2)); // 2
console.log(numberOfBuildingWithSun(list3)); // 4
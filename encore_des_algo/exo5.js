const list1 = [10, 15, 3, 7];
const list2 = [1, 8, 10, 21];
const list3 = [4, 5, 6, 7, 8, 9, 10, 11]
const a = 17;
const b = 19;
const c = 21;

function isSumOf2NumberEqualk(list, k) {
  let seenNumbers = new Set();
  for (let i = 0; i < list.length; i++) {
    if (seenNumbers.has(k - list[i])) {
      console.log(`${list[i]} + ${k - list[i]} = ${k}`);
      return true;
    }
    seenNumbers.add(list[i]);
  }
  return false;
}

console.log(isSumOf2NumberEqualk(list3, c));

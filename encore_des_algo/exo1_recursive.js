const list1 = [10, 15, 3, 7];
const list2 = [1, 8, 10, 21];
const list3 = [4, 5, 6, 7, 8, 9, 10, 11]
const a = 17;
const b = 19;
const c = 21;

function isSumOf2NumberEqualk(list,k){
  let actualIndex = 0;
  if (actualIndex >= list.length - 1){
    // console.log("jarret");
    return false; // un seule return ne suffit pas, il faut aussi mettre un return à l'appel de la function recursive, car return ne renvoi le resultat que d'une seul cran, alors qu'ici il y a plusieurs cran
  };
  for (let i = actualIndex + 1; i <= list.length - 1; i++){
    let actualValue = list[actualIndex];
    if ((actualValue + list[i]) === k){
      console.log(`${actualValue} + ${list[i]} = ${k}`);
      return true;
    };
  };
  const newList = list.slice(1,list.length)
  // console.log(newList);
  return isSumOf2NumberEqualk(newList,k);

}

console.log(isSumOf2NumberEqualk(list1,c));
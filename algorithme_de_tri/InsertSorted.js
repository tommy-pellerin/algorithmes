class InsertSorted {
  insertSort(array){
    let comparison = 0;
    for ( let i = 1; i < array.length ; i++){
      let currentNum = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > currentNum) {
        
        array[j + 1] = array[j];
        j--;
        comparison += 1;
      };
      array[j + 1] = currentNum;
    };
    console.log(`Tri par insertion: ${comparison} comparaisons`);
    return array
  }
}

module.exports = InsertSorted;
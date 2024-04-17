class SelectSorted {
    selectSort(array) {
      let comparison = 0;
      for(let i = 0; i < array.length; i++){
        let currentMinimumIndex = i;
        for(let j = i + 1; j < array.length; j++){
          // console.log(`ici i : ${i}`);
          // console.log(`ici j : ${j}`);
          // console.log(array[i]);
          // console.log(array[j]);
          if (array[j] < array[currentMinimumIndex]){
            currentMinimumIndex = j;
          };
          comparison +=1;
        };
        // Swap the found minimum element with the first element
        let temp = array[currentMinimumIndex];
        array[currentMinimumIndex] = array[i];
        array[i] = temp;
      };
      console.log(`Tri par selection: ${comparison} comparaisons`);
      return array;
    };
};

module.exports = SelectSorted;
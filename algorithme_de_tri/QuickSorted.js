class QuickSorted {
  constructor(){
    this.comparison = 0; // Initialize comparison count
  };

  callQuickSort(array){
    this.quickSort(array,0,array.length - 1);
    return array
  }

  quickSort(array, lowIndex, highIndex){
    // console.log("je commence a trier");
    
    if (lowIndex >= highIndex){
      // console.log("jarret");
      return;
    };

    let pivot = array[lowIndex];
    // console.log(`valeur du pivot : ${pivot}`);
    let leftPointer = lowIndex;
    let rightPointer = highIndex;
    // console.log(`l'index du left pointer : ${leftPointer}`);
    // console.log(`l'index du right pointer : ${rightPointer}`);

    while (leftPointer < rightPointer) {
      while (array[leftPointer] < pivot && leftPointer < rightPointer) {
        leftPointer++;
        // console.log(`nouvelle index du left pointer : ${leftPointer}`);
        this.comparison++;
      };
      while (array[rightPointer] >= pivot && leftPointer < rightPointer) {
        rightPointer--;
        // console.log(`nouvelle index du right pointer : ${rightPointer}`);
        this.comparison++;
      };

      this.swap(array,leftPointer,rightPointer);
    };

    // this.swap(array,lowIndex,rightPointer);
    
    // console.log("je procede au tri de la parti gauche");
    this.quickSort(array, lowIndex, leftPointer - 1);
    // console.log("je procede au tri de la parti droite");
    this.quickSort(array, leftPointer + 1, highIndex);
    
  };

  swap(array, index1, index2){
    // console.log("valeurs avant swap :");
    // console.log(array[index1]);
    // console.log(array[index2]);
    // console.log("valeur apres swap :");
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    // console.log(array[index1]);
    // console.log(array[index2]);
    // return array;
  };

  getComparisonCount() {
    return this.comparison;

  };

};

module.exports = QuickSorted;
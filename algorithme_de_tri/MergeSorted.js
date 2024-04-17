class MergeSorted {
  constructor(){
    this.comparison = 0; // Initialize comparison count
  };

   sort(array){
    let inputLength = array.length;

    //fonction d'arret
    if (inputLength < 2){ 
      // console.log("jarret");
      return;
    };

    let midIndex = Math.round(inputLength / 2); //be carefull, this rounded superior
    let leftHalf = [];
    let rightHalf = [];

    for (let i=0; i < midIndex; i++){
      leftHalf[i] = array[i];
      this.comparison++;
    };
    for (let i = midIndex; i < inputLength; i++){
      rightHalf[i - midIndex] = array[i] //i - midIndex afin de commencer le nouveau tableau à 0 et non pas au milieu, cependant on récupere le valeur au milieu du tableau à trier 
      this.comparison++;
    };

    // console.log("Je devise à gauche");
    // console.log(leftHalf);
    this.sort(leftHalf); //apres avoir fini de diviser, la methode tome sur la fonction d'arret, ce qui pousse le code à passer à la ligne suivante
    // console.log(`apres division à gauche : ${leftHalf}`);
    // console.log("Je devise à droite");
    // console.log(rightHalf);
    this.sort(rightHalf);
    // console.log(`apres division à droite : ${rightHalf}`);

    // console.log("Je merge");
    this.merge(array,leftHalf,rightHalf);
    // console.log(`apres merge : ${array}`);

    return array;
   };

   merge(array,leftHalf,rightHalf) {
    let leftSize = leftHalf.length;
    let rightSize = rightHalf.length;

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftSize && j < rightSize){
      if( leftHalf[i] <= rightHalf[j]){
        array[k] = leftHalf[i];
        i++;
      } else {
        array[k] = rightHalf[j];
        j++;
      };
      k++;
      this.comparison++;

    };

    while (i < leftSize){
      array[k] = leftHalf[i];
      i++;
      k++;
      
    };
    while (j < rightSize){
      array[k] = rightHalf[j];
      j++;
      k++;
      
    };
    this.comparison++;

   }

   getComparisonCount() {
    return this.comparison;

  };

};

module.exports = MergeSorted;
class BubbleSorted {
  bubbleSort(array) {
    let comparison = 0;
    for (let j = 1; j < array.length ; j++){
        let isSorted = true;
        for (let i = 0; i < array.length - j; i++ ){
            let n1 = array[i];
            let n2 = array[i+1];
            if (n1 > n2) {
                array[i] = n2;
                array[i+1] = n1;
                isSorted = false;
            };
            comparison +=1;
        };
        if (isSorted){
            console.log(`Tri à bull: ${comparison} comparaisons`);
            return array;
        };
    };
    console.log(`Tri à bull: ${comparison} comparaisons`);
    return array

  };
};

module.exports = BubbleSorted;
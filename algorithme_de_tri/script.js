const fs = require('fs');

const fileName = process.argv[2]; //process.argv[2] ne recupere que ce qui a dans le fichier list.txt donné en argument dans le code "node lesson.js list.txt"

const BubbleSorted = require('./BubbleSorted');
let bubbleSorter = new BubbleSorted();
const InsertSorted = require('./InsertSorted');
let insertSorter = new InsertSorted();
const SelectSorted = require('./SelectSorted');
let selectSorter = new SelectSorted();
const QuickSorted = require('./QuickSorted');
let quickSorter = new QuickSorted();
const MergeSorted = require('./MergeSorted');
let mergeSorter = new MergeSorted();

// // Méthode asynchrone
// fs.readFile(fileName, 'utf8', (error, data) => {
//     if (error) {
//         console.error(error.message);
//         return ;
//     }
//     console.log(data);
// });

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8'); //lire le fichier donnée en argument (ici list.txt ou list_02.txt)
    let array = (data).split(" ").map(num => Number(num)); //convert element in file to numbers and inject them in an array
    
    // console.log(javascriptSorted(array));

    // let bubbleArray = [...array];
    // console.log(bubbleSorter.bubbleSort(bubbleArray)); //afficher le contenu
    
    // let insertArray = [...array];
    // console.log(insertSorter.insertSort(insertArray));

    // let selectArray = [...array];
    // console.log(selectSorter.selectSort(selectArray));

    // let quickArray = [...array];
    // quickSorter.callQuickSort(quickArray)
    // console.log(`Tri rapide: ${quickSorter.getComparisonCount()} comparaisons`);
    // console.log(quickSorter.callQuickSort(array));

    let mergeArray = [...array];
    // mergeSorter.sort(mergeArray);
    // console.log(`Tri fusion: ${mergeSorter.getComparisonCount()} comparaisons`);
    console.log(mergeSorter.sort(mergeArray));

} catch (error) {
    console.error(error.message);
};

// function javascriptSorted(array) {
//     return array.sort((a, b) => a - b);
// };




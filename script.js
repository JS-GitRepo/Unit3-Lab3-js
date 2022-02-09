"use strict";

// 1. Declare a variable named submissions that is initialized to an array with the following objects:
let submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe" , score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true}
];
console.log(submissions);

// 2. Declare a function named addSubmission
const addSubmission = (array,newName,newScore,newDate) => {
    const didPass = newScore >= 60;
    array.push({name: newName, score: newScore, date: newDate, passed: didPass});
};
addSubmission(submissions,"Jacko",59,"2022-01-01")
console.log(submissions);

// 3. Declare a function named deleteSubmissionByIndex
const deleteSubmissionByIndex = (array,index) => {
    array.splice(index, 1);
};
deleteSubmissionByIndex(submissions,3)
console.log(submissions);

// 4. Declare a function named deleteSubmissionByName
const deleteSubmissionByName = (array,name) => {
    const position = array.findIndex((item) => (item.name === name));
    array.splice(position, 1);
};
deleteSubmissionByName(submissions,"Jacko");
console.log(submissions);

// 5. Declare a function named editSubmission
const editSubmission = (array,index,score) => {
    array[index].passed = score >= 60;
    array[index].score = score;
};
editSubmission(submissions,2,21);
console.log(submissions);

// 6. Declare a function named findSubmissionByName
const findSubmissionByName = (array,name) => array.find( (item) => (item.name === name) );
console.log(findSubmissionByName(submissions,"Jane"))

// 7. Declare a function named findLowestScore
const findLowestScore = (array) => {
    let lowest = array[0];
    array.forEach((item) => {
        if (item.score < lowest.score) {
            lowest = item;
        }
    });
    return lowest.score; 
};
console.log(submissions)
console.log(findLowestScore(submissions));

// 8. Declare a function named findAverageScore
const findAverageScore = (array) => {
    let scoreTotal = 0;
    let itemsTotal = 0;
    for (let item of array) {
        scoreTotal += item.score;
        itemsTotal ++;
    }
    return (scoreTotal/itemsTotal);
}
console.log(findAverageScore(submissions));

//  9. Declare a function named filterPassing
const filterPassing = (array) => {
    let passingScores = array.filter((item) => (item.passed === true));
    return passingScores;
}
console.log(filterPassing(submissions));

// 10. Declare a function named filter90AndAbove
const filter90AndAbove = (array) => {
    let above90 = array.filter ((item) => (item.score >= 90));
    return above90;
}
console.log(filter90AndAbove(submissions));



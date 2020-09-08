function appendAndDelete(s, t, k) {  
    let hasDifference = false;
    let lengthCompensationSteps = 0;
    let startReplace = 0;
    let endReplace = 0;

    if (s.length >= t.length) {
        startReplace = t.length - 1;
        endReplace = t.length - 1;
        lengthCompensationSteps = s.length - t.length;

    } else if (s.length < t.length) {
        startReplace = s.length - 1;
        endReplace = s.length - 1;
        lengthCompensationSteps = t.length - s.length;
    }

    for (let i = endReplace; i >= 0; i--) {
        if (s[i] !== t[i]) {
            startReplace = i;
            hasDifference = true;
        }
    }

    const stepsToReplace = hasDifference ? (endReplace - startReplace + 1) * 2 : 0;

    console.log('s: ', lengthCompensationSteps + stepsToReplace);
    console.log('startReplace: ', startReplace);
    
    const stepsLeft = k - (lengthCompensationSteps + stepsToReplace);
    console.log('stepsLeft: ', lengthCompensationSteps, stepsToReplace, stepsLeft);

    return stepsLeft >= 0 && (t.length * 2 < stepsLeft 
        || t.length * 2 > stepsLeft && stepsLeft % 2 === 0 
        || startReplace === 0) ? 'Yes' : 'No';
}

// console.log(appendAndDelete(['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd', 'e', 'r', 't'], 10));
// console.log(appendAndDelete(['z', 'z', 'z', 'z', 'z'], ['z', 'z', 'z', 'z', 'z', 'z', 'z'], 4)); //yess
// console.log(appendAndDelete(['a', 'a', 'a'], ['a'], 5)); //yes



//tests

console.log('#4', appendAndDelete(['q', 'w', 'e', 'r', 'a', 's', 'd', 'f'], ['q', 'w', 'e', 'r', 'b', 's', 'd', 'f'], 6) === 'No');
console.log('#5', appendAndDelete(['y'], ['y', 'u'], 2) === 'No');
console.log('#9: ', appendAndDelete(['a', 'b', 'c', 'd', 'e', 'f'], ['f', 'e', 'd', 'c', 'b', 'a'], 15) === 'Yes');



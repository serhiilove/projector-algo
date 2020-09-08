function saveThePrisioner(n, m, s) {
    const position = m % n === 0 ? n : m % n;
    console.log('position: ', position);

    const absolutePostion = position + s - 1;
    console.log('absolutePostion: ', absolutePostion);

    const warnPosition = absolutePostion <= n 
        ? absolutePostion : Math.abs(n - absolutePostion);
         
    console.log(warnPosition);
    return warnPosition;
}

saveThePrisioner(3, 3, 3);
const merge = (arrFirst, arrSecond) => {
    let i = j = 0;
    let resultArr = [];
    
    while (i < arrFirst.length && j < arrSecond.length) {
        resultArr.push(
            (arrFirst[i] < arrSecond[j]) ? arrFirst[i++] : arrSecond[j++]
        );
    }

    return [
        ...resultArr,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j),
    ];
}

const mergeSort = (arr) => {
    if (!Array.isArray(arr) || !arr.length) {
        return null;
    }

    if (arr.length === 1) {
        return arr;
    }

    const middle = ~~(arr.length / 2);
    const leftArr = arr.slice(1, middle);
    const rightArr = arr.slice(middle);
    
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
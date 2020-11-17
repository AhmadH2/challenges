
let challenge1 = (arr) => {
    answer = arr.filter(element => element > 0)
    document.getElementById('answer').innerHTML = answer;
}
let challenge2 = (arr1, arr2) => {
    answer = arr1.concat(arr2);
    document.getElementById('answer').innerHTML = answer.toString();
}
let challenge3 = (obj, key) => {
    answer = Object.keys(obj).filter(k => k == key);
    answer = (answer.length !== 0);
    document.getElementById('answer').innerHTML = answer;
}

let challenge4 = (arg) => {
    answer = Array.isArray(arg)
    document.getElementById('answer').innerHTML = answer;
}
let challenge5 = (text) => {
    answer = text[0].toUpperCase() + text.slice(1);
    document.getElementById('answer').innerHTML = answer;
}

let challenge6 = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    document.getElementById('answer').innerHTML = arr;
};
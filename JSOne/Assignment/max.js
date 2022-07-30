//find the maximum value from given array

function max_Value(arr) {
    let max = arr[0]
    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] >= max) {
            max = arr[i]
        }
    }
    return max
}

let result = max_Value([10, 100, 300, 400])
console.log(result)
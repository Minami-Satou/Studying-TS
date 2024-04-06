
// 入力とボタンの要素を取得
const button = document.querySelector('button')
const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')

// 入力された数値を足すadd関数
function add(num1,num2) {
    return num1 + num2
}

// ボタンが押された際にadd関数を実行するコード
button.addEventListener('click', function() {
    console.log(add(input1.value, input2.value))
})


// ---------------------------------------------------------------

// // JSのみで解決したadd関数
// function add(num1,num2) {
//     if (typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2
//     } else {
//         return +num1 + +num2
//     }
// }
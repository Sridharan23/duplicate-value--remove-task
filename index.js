// let btn= document.querySelector(".btn")
// let result = document.getElementById("result").textContent
// let input = document.querySelector(".input").value
// let arr =[0,2,3,1,1] 


//  function removeDuplicates(arr) {
//     let unique = [];
//     arr.forEach(element => {
//         if (!unique.includes(element)) {
//             unique.push(element);
//         }
//     });
//     return unique;
//     result.textContent = "unique"
// }
// removeDuplicates(arr);

// console.log(removeDuplicates(arr))


// btn.addEventListener("click",()=>{
//     function removeDuplicates(arr) {
//         let unique = [];
//         arr.forEach(element => {
//             if (!unique.includes(element)) {
//                 unique.push(element);
//             }
//         });
//         return unique;
//         result.innerHTML = "unique"
//     }
//     removeDuplicates(arr);
// })




function removeDuplicates(array) {
    const uniqueValue = new Set(array);
    return [...uniqueValue];
}

let btn =document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const input = document.getElementById('input').value;
    const inputArray = input.split(',').map(Number);
    const uniqueArray = removeDuplicates(inputArray);
    document.getElementById('result').textContent = uniqueArray.join(', ');
});








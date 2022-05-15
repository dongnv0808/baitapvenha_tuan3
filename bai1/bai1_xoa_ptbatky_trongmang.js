let arr = [2, 6, 3, 22, 12, 21, 11, 17, 25];
document.write(`<br>${arr}`);
function deleteNumber(){
        let newArr = [];
        let index = +document.getElementById('index').value;
        for(let i = 0; i < arr.length-1; i++){
            if(i < index){
                newArr[i] = arr[i];
            }else if(i >= index){
                newArr[i] = arr[i+1];
            }
        }
        alert(newArr);
    }
let arr = [4, 6, 21, 16,4,4, 11, 2, 7, 9];
    let check = true;
    document.write(`<br> ${arr}`);
    function checkBtn(){
        let num = +document.getElementById('numberCheck').value;
        console.log(typeof num);
        for(i = 0; i < arr.length; i++){
            if(num === arr[i]){
                check;
                document.write(`so ${num} o vi tri ${i} trong mang<br>`);
            }
        }
    }
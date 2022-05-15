let arr = [4, 6, 21, 16, 11, 2, 7, 9];
    document.write(`<br> ${arr}`);
    function themPhanTu(){
        let newArr = [];
        let num = +document.getElementById('num').value;
        let index = +document.getElementById('index').value;
        for(i = 0; i <= arr.length; i++){
            if(i < index){
                newArr[i] = arr[i];
            }else if(i === index){
                newArr[i] = num;
            }else{
                newArr[i] = arr[i-1];
            }
        }
        alert(`Day da them ${newArr}`);
    }
let arr = [4, 6, 21, 16, 11, 2, 7, 9];
document.write(`${arr} <br>`);
    for(i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let convert = arr[i];
                arr[i] = arr[j];
                arr[j] = convert;
            }
        }
    }document.write(arr)
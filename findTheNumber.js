function findTheNumber(array){
    let orderedArray=quickSort(array);
    let lost=null;
    for(var i=0;i<=(orderedArray.length-1);i++){
        if(orderedArray[i+1]-orderedArray[i]==2){
            lost=orderedArray[i]+1;
            return lost;
        }
    }
}
function quickSort(array){
    let pivot=array[array.length-1];
    let right=[];
    let left=[];
    let sorted=[]
    for(var i=0;i<=(array.length-2);i++){
        if(array[i]<pivot){
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }
    if(right.length>1){
        right=quickSort(right);
    }
    if(left.length>1){
        left=quickSort(left);
    }
    for(var i=0;i<left.length;i++){sorted.push(left[i])};
    sorted.push(pivot);
    for(var i=0;i<right.length;i++){sorted.push(right[i])};
    return sorted;
}
module.exports=findTheNumber;
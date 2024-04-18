//Finding Median


const findMedian=(arr)=>{
    console.log(arr.sort((a,b)=>a-b));
    let length=arr.length;
    // console.log(length);
    let mid=Math.floor(length/2);
    // console.log(mid);
   if(length%2===0){
     //console.log(arr[mid]+" "+arr[mid-1])
    return (arr[mid] + arr[mid-1]) / 2;
   }else{
    return arr[mid]
   }

}
console.log(findMedian([5,3,9,1,7]));//5
console.log(findMedian([2,4,6,8]));//5
console.log(findMedian([1,3,5,7,9,11]))//
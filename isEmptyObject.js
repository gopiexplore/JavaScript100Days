




const isEmptyObject=(obj)=>{
    //return obj.lenth===0?'its empty':'its not empty';
    // for(let key in obj){
    //     if(obj.hasOwnProperty(key)){
    //         return `it's not empyt`
    //     }
        
    // }
    // return `it's empty`
    return Object.keys(obj).length===0;
}
console.log(isEmptyObject({name:'Gopi'}));//output:'its'not empty'
console.log(isEmptyObject({}));//output:itsempyt
console.log(isEmptyObject({keyWithNull:null}));//output:its not empty
console.log(isEmptyObject({keyWithUndefined:undefined}));//output:its' not empyt
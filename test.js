//Falsy Bouncer
function bouncer(arr) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
      if (arr[i]) newArray.push(arr[i]);
    }  
    return newArray;
    }
    
    bouncer([7, "ate", "", false, 9]);

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
    var arr2 = [];
    for(var i = 0; i < arr.length; i += size){
      arr2.push(arr.slice(i, i + size));
    }  
    return arr2;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);


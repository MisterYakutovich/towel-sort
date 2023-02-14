
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix===undefined){
    return []
  }
  let array=[]
  for (let i=0; i < matrix.length; i++) {
    for (let j=0; j < matrix.length; j++) {
    }
      if (i%2!==0){
         array.push(matrix[i].reverse())        
      }else if(i%2===0){
        array.push(matrix[i])       
      }else if ([]){
        return []
      }
}
return array.flat()
}

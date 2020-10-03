let arr = [1,2,3,4,5,6];
//有三个参数，第三个参数但是数组本身
// 不能break
arr.forEach(function(item,index,a){
  console.log(item,index,a,this);
})
function recurcount(n){
   
    if(n==0){
        return;
    }
    console.log(n);
    recurcount(n-1);
}
// recurcount(5)

function rec(n){
    if (n==0)
        return 1;
    
    else 
    console.log(n)
    return n*rec(n-1)
    

}

let num=6;
// let result=rec(num)
// console.log(result)
function count(n,total=0){
  if(n==0)
  return total ;
  else
  return count(n-1,total+=n)
}
console.log(count(5))
let num=[10, 20 ,20,30, 40, 100];
for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i]===num[j]){
            console.log(num[i]); 
        }
    }
}

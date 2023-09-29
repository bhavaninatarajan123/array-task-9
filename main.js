var a=[];
var n=parseInt(prompt("enter the size of the array"));
var count=0;
for (let i=0; i<n;i++){
    a[i]=parseInt(prompt("enter the number"));
}
document.write("given array is="+a+"<br>");



for(i=0;i<a.length;i++){
    var temp=a[i]
    var  b
    var c=0;
    while(a[i]>0){
        b=a[i]%10;
        a[i]=parseInt(a[i]/10);
        c=c*10+b;
} 
        if(temp==c){
            count=count+1
        }
        
    }
    document.write(count);
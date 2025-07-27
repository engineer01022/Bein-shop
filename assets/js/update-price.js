/*let tkhm=document.getElementById('tkh3m').innerText;
let kh6mTamiuz=document.getElementById('tkh6m').innerText;
let kh1yrTamiuz=document.getElementById('tkh1yr').innerText;
let ar3mTamiuz=document.getElementById('tar3m').innerText;
let ar6mTamiuz=document.getElementById('tar6m').innerText;
let ar1yrTamiuz=document.getElementById('tkh1yr').innerText;
let kh3mqima=document.getElementById('kh3m').innerText;
let kh6mqima=document.getElementById('kh6m').innerText;
let kh1yrqima=document.getElementById('kh1yr').innerText;
let ar3mqima=document.getElementById('ar3m').innerText;
let ar6mqima=document.getElementById('ar6m').innerText;
let ar1yrqima=document.getElementById('kh1yr').innerText;*/



let tar3=document.getElementById('tar3');
let tar6=document.getElementById('tar6');
let tar1=document.getElementById('tar1');
let tkh3=document.getElementById('tkh3');
let tkh6=document.getElementById('tkh6');
let tkh1=document.getElementById('tkh1');
let qar3=document.getElementById('qar3');
let qar6=document.getElementById('qar6');
let qar1=document.getElementById('qar1');
let qkh3=document.getElementById('qkh3');
let qkh6=document.getElementById('qkh6');
let qkh1=document.getElementById('qkh1');
let update=document.getElementById('update');

window.onload=function(){

tar3.value=localStorage.getItem('p1')
tar6.value=localStorage.getItem('p2')
tar1.value=localStorage.getItem('p3')
tkh3.value=localStorage.getItem('p4')
tkh6.value=localStorage.getItem('p5')
tkh1.value=localStorage.getItem('p6')
qar3.value=localStorage.getItem('p7')
qar6.value=localStorage.getItem('p8')
qar1.value=localStorage.getItem('p9')
qkh3.value=localStorage.getItem('p10')
qkh6.value=localStorage.getItem('p11')
qkh1.value=localStorage.getItem('p12')
}



    update.onclick= function(){
    
    localStorage.setItem('p1',tar3.value)
    localStorage.setItem('p2',tar6.value)
    localStorage.setItem('p3',tar1.value)
    localStorage.setItem('p4',tkh3.value)
    localStorage.setItem('p5',tkh6.value)
    localStorage.setItem('p6',tkh1.value)   
    localStorage.setItem('p7',qar3.value)
    localStorage.setItem('p8',qar6.value)
    localStorage.setItem('p9',qar1.value)    
    localStorage.setItem('p10',qkh3.value)
    localStorage.setItem('p11',qkh6.value)
    localStorage.setItem('p12',qkh1.value)
    
}

window.onchange=function(){
    document.getElementById('tkh3m').innerText = localStorage.getItem('p4')+".00";
     document.getElementById('tkh6m').innerText = localStorage.getItem('p5') +".00";
     document.getElementById('tkh1yr').innerText = localStorage.getItem('p6') +".00";
     document.getElementById('tar3m').innerText = localStorage.getItem('p1')+".00";
     document.getElementById('tar6m').innerText = localStorage.getItem('p2') +".00";
     document.getElementById('tar1yr').innerText = localStorage.getItem('p3')+".00" ;
     document.getElementById('kh3m').innerText = localStorage.getItem('p10')+".00";
     document.getElementById('kh6m').innerText = localStorage.getItem('p11') +".00";
     document.getElementById('kh1yr').innerText = localStorage.getItem('p12') +".00";
     document.getElementById('ar3m').innerText = localStorage.getItem('p7')+".00";
     document.getElementById('ar6m').innerText = localStorage.getItem('p8') +".00";
     document.getElementById('ar1yr').innerText = localStorage.getItem('p9')+".00" ;
}

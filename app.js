document.getElementById('btn').addEventListener('click',()=>{
    let grede="";
    let pass="";
    let web=document.getElementById('web').value;
    let math=document.getElementById('math').value;
    let eng=document.getElementById('eng').value;
    let st=document.getElementById('st').value;
    let dl=document.getElementById('dl').value;
    let total=parseFloat(web)+parseFloat(math)+parseFloat(eng)+parseFloat(st)+parseFloat(dl);
    let persentage=(total/500)*100;
    if(persentage<=100 && persentage>=80){
     grede="A";
    }
    else if(persentage<=79 && persentage>=60){
        grede="B";
    }
    else if(persentage<=59 && persentage>=40){
       grede="C";
    }
    else{
        grede="Fale";
    }
    if(persentage>=40){
     pass="Pass";}
     else{
        pass="Fale";
     }
     if(web && math && eng && st && dl){
    document.getElementById('show').innerHTML=`
    Total Number is ${total} and Persentage is
    ${persentage} and Grede is ${grede} and Student is ${pass}
    `;}
})
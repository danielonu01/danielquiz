function optionselect(){
    var optionarray = ['guyana','london','vieus fort','guyana','france','lagos','london','ethiopia','kenya'];
    var ua = [];
    var s1 = document.querySelector("#s1");
    s11 = s1.value;
    ua.push(s11);
    var s2 = document.querySelector("#s2");
    s21 = s2.value;
    ua.push(s21);
    var s3 = document.querySelector("#s3");
    s31 = s3.value;
    ua.push(s31);
    var s4 = document.querySelector("#s4");
    s41 = s4.value;
    ua.push(s41);
    var s5 = document.querySelector("#s5");
    s51 = s5.value;
    ua.push(s51);
    var s6 = document.querySelector("#s6");
    s61 = s6.value;
    ua.push(s61);
    var s7 = document.querySelector("#s7");
    s71 = s7.value;
    ua.push(s71);
    var s8 = document.querySelector("#s8");
    s81 = s8.value;
    ua.push(s81);

    console.log(ua);

    const finaldt = [];

   var optionarray = optionarray.toString().split(',').map(String);
   var ua = ua.toString().split(',').map(String);
   console.log(optionarray);
   for(var i in optionarray){
       if(ua.indexOf(optionarray[i])!==-1)
       finaldt.push(optionarray[i]);
   }

   console.log(finaldt);
   
  
    document.getElementById("dm").innerHTML="Your scored: " + finaldt.size();
    var nr = document.getElementById("#tr");
    var nc = document.getElementById("#td");
    newCell.innerHTML = finaldt.size();
    nr.append(nc);
    document.body.appendChild(nr);
    document.getElementById("#rows").appendChild(nr);
    
}


//console.dir(document)
//console.log(document.domain)

//console.log(document.title);
//document.title="moj prvi sajt"


//console.dir(document.head)
//console.log(document.all)
//console.log(document.all[8])

//document.all[8].textContent="drugi naslov"
 //console.log(document.form);
 //console.log(document.form[0]);

 console.log(document.getElementsByClassName("list-item"));
 let items = document.getElementsByClassName("list-item");

//items[3].textContent="promenio sam listu";
//items[2].style.backgroundColor="purple";
 for(let i  = 0 ; i<items.length; i++){
    if(i%2 == 0) items[i].style.backgroundColor ="red";
    else items[i].style.backgroundColor="blue"
 }

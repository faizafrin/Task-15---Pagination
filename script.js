let students=[
    {
      "id": "1",
      "name": "faiza",
      "email": "faiza@gmail.com"
    },
    {
      "id": "2",
      "name": "afrin",
      "email": "afrin@yahoo.com"
    },
    {
      "id": "3",
      "name": "subana",
      "email": "subana@yahoo.com"
    },
    {
      "id": "4",
      "name": "Rosi",
      "email": "rosi@yahoo.com"
    },
    {
      "id": "5",
      "name": "Divya",
      "email": "divya@gmail.com"
    },
    {
      "id": "6",
      "name": "sriram",
      "email": "sriram@gmail.com"
    },
    {
      "id": "7",
      "name": "sankari",
      "email": "sankari@yahoo.com"
    },
    {
      "id": "8",
      "name": "Ranjan",
      "email": "ranjan4@yahoo.com"
    },
    {
      "id": "9",
      "name": "Julie",
      "email": "julie@gmail.com"
    },
    {
      "id": "10",
      "name": "Marvin",
      "email": "marvin123@gmail.com"
    },
    {
      "id": "11",
      "name": "Abriz",
      "email": "abriz13@gmail.com"
    },
    {
      "id": "12",
      "name": "Rahman",
      "email": "rahmaan@yahoo.com"
    },
    {
      "id": "13",
      "name": "Rasika",
      "email": "rasika@gmail.com"
    },
    {
      "id": "14",
      "name": "vaishali",
      "email": "vaishali@yahoo.com"
    },
    {
      "id": "15",
      "name": "nasrin",
      "email": "nasi123@yahoo.com"
    },
    {
      "id": "16",
      "name": "Asik",
      "email": "asik@yahoo.com"
    },
    {
      "id": "17",
      "name": "Riswana",
      "email": "riswana98@gmail.com"
    },
    {
      "id": "18",
      "name": "Afsana",
      "email": "afsana05@yahoo.com"
    },
    {
      "id": "19",
      "name": "Nish",
      "email": "Nisha28@gmail.com"
    },
    {
      "id": "20",
      "name": "Gayathri",
      "email": "gayathri@yahoo.com"
    },
    {
      "id": "21",
      "name": "Aneesha",
      "email": "aneesha@yahoo.com"
    },
    {
      "id": "22",
      "name": "Nifra",
      "email": "sweety@yahoo.com"
    },
    {
      "id": "23",
      "name": "Selmiya",
      "email": "selmi@gmail.com"
    },
    {
      "id": "24",
      "name": "Faiz",
      "email": "faizmaddy@hot.com"
    },
    {
      "id": "25",
      "name": "selvi",
      "email": "selvi@gmail.com"
    },
  
  ]
  //---------------------------------------------------------------------------------------------
  
  
  const firstBtn=document.querySelector(".firstBtn")
  const prevBtn=document.querySelector(".prevBtn")
  const nextBtn=document.querySelector(".nextBtn")
  const lastBtn=document.querySelector(".lastBtn")
  
  const btn1=document.querySelector(".btn1");
  const btn2=document.querySelector(".btn2");
  const btn3=document.querySelector(".btn3");
  const btn4=document.querySelector(".btn4");
  const btn5=document.querySelector(".btn5");
  
  
 
  let page=document.getElementsByClassName("changes")[0];
  
  
  let currentItem=0;
  let curPage=1/5;
  
  
  window.addEventListener("DOMContentLoaded",()=>{
    displayStudents(currentItem);
    page.innerHTML=(currentItem/5);
  })
  
  
  prevBtn.addEventListener("click",()=>{
    
    if(0<currentItem){
      currentItem-=5;
      page.innerHTML=(currentItem/5+1);
      displayStudents(currentItem);
    }else{
      alert( "already in first page.")
    }
  })
  
 
  nextBtn.addEventListener("click",()=>{
    
    if(students.length-10>currentItem){
      currentItem+=5;
      page.innerHTML=(currentItem/5);
      displayStudents(currentItem);
    }else{
      alert("already in last page")
    }
  })
  
  
  firstBtn.addEventListener("click",()=>{
    if(currentItem>0){
    currentItem=0;
    page.innerHTML=(currentItem/5);
    displayStudents(currentItem);
  }else{
    alert(" alread in First page")
  }
  })
  
  
  lastBtn.addEventListener("click",()=>{
    if(currentItem<displayStudents.length-5){
    currentItem=students.length-5;
    page.innerHTML=(currentItem/5);
    displayStudents(currentItem);
  }else{
    alert(" already in last page")
  }
  })
  
  
  btn1.addEventListener("click",()=>{
    currentItem=0;
    page.innerHTML=currentItem/5;
    displayStudents(currentItem);
  });
  btn2.addEventListener("click",()=>{
    currentItem=5;
    page.innerHTML=currentItem/5;
    displayStudents(currentItem);
  });
  btn3.addEventListener("click",()=>{
    currentItem=10;
    page.innerHTML=currentItem/5;
    displayStudents(currentItem);
  });
  btn4.addEventListener("click",()=>{
    currentItem=15;
    page.innerHTML=currentItem/5;
    displayStudents(currentItem);
  });
  btn5.addEventListener("click",()=>{
    currentItem=20;
    page.innerHTML=currentItem/5;
    displayStudents(currentItem);
  });
  
  function displayStudents(start){
    let addTo=document.querySelector(".table-responsive");
  
    let dum="";
    for(let i=start;i<start+5;i++){
      dum+=(`
      <div id="k">
      <div >
         <label>Id:</lable>
         <p id="para">${students[i].id}</p>
      </div>
      <div>
         <label>Name:</lable>
         <p id="name">${students[i].name}</p>
      </div>
      <div>
         <label >email:</lable>
         <p id="email">${students[i].email}</p>
      </div>
      </div >
    `);
    addTo.innerHTML=dum;
  }
  }
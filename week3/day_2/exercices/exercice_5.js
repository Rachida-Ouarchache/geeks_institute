// 1
   // 1
let conti = document.getElementById("container");
console.log(conti);
   // 2
let modification = document.querySelectorAll(".list li");
modification[1].textContent = "Richard";
console.log(modification);
  // 3
 let secondul = document.querySelectorAll('.list')[1];
 let secondli = secondul.querySelectorAll('li')[1];
 secondli.remove();
 console.log(secondli);
  //4
const uls = document.querySelectorAll(".list");

    for (let i = 0; i < uls.length; i++) {
      let firstLi = uls[i].querySelector("li"); 
      firstLi.textContent = "Rachida"; 
    }
    console.log(uls);
// 2
  // 1
const ul = document.querySelectorAll(".list");

 for (let i = 0; i < uls.length; i++) {
      ul[i].classList.add("student_list");
    }
    console.log(ul);
      // 2
    const firstUl = document.querySelectorAll(".list")[0];
    firstUl.classList.add("university", "attendance");

    console.log(firstUl);

// 4
    //  1
   const container = document.getElementById("container");

    container.style.backgroundColor = "lightblue";
    container.style.padding = "10px";
    console.log(container);
    // 2
    const secondUl = document.querySelectorAll(".list")[1];

    secondUl.lastElementChild.style.display = "none";

    console.log(secondUl.firstElementChild.textContent);

    // 3
    const border = document.querySelectorAll(".list")[0];
     border.style.border = "2px solid black";
     console.log(border);
    //4
    const body = document.body;

    body.style.fontSize = "20px";
     console.log(body);


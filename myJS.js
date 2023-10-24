// interactive Navbar Link
let menus = document.getElementsByClassName("nav-link");
let menu = Array.from(menus);
// console.log(menu);

menu.forEach(function(navItem){
    navItem.addEventListener("click", function(e){
        menu.forEach(function(item){
            item.classList.remove("active");
        })

        e.target.classList.add("active");
    })
})

// interaktive stepping academic history 
let academics = document.getElementsByClassName("step");
let academic = Array.from(academics);
let academicContents = document.getElementsByClassName("konten-akademik");
let academicContent = Array.from(academicContents);

let index = 0;

for(let i = 0; i< academic.length; i++){
    academic[i].index = i;
    academicContent[i].index = i;
    academic[i].addEventListener("click",function(){
        index = academic[i].index;

        academic.forEach(function(item){
            item.classList.remove("current", "clear", "unclear");
            if(item.index > index){
                item.classList.add("unclear");
            } else if(item.index < index){
                item.classList.add("clear");
            } else {
                item.classList.add("current");
            }
        })

        academicContent.forEach(function(item){
            item.classList.remove("active");
            if(item.index == index){
                item.classList.add("active");
            }
        })
        // e.target.classList.add("active");
    })
}

// button change collapse 
let buttonCollapse = document.getElementById("button-collapse");

buttonCollapse.addEventListener("click",function(){
    if(buttonCollapse.classList.contains("fa-angle-down")){
        buttonCollapse.classList.remove("fa-angle-down");
        buttonCollapse.classList.add("fa-angle-up");
    } else {
        buttonCollapse.classList.remove("fa-angle-up");
        buttonCollapse.classList.add("fa-angle-down");
    }
})

// let hoverButton = document.getElementsByClassName("hoverbutton");
// let hoverButtons = Array.from(hoverButton);

// hoverButtons.forEach(function(mybutton){
//     mybutton.addEventListener("mouseover", function(){
//         let buttons = mybutton.lastElementChild;
//         buttons.hidden = false;
//     })
//     mybutton.addEventListener("mouseout", function(){
//         let buttons = mybutton.lastElementChild;
//         buttons.hidden = true;
//     })
// })



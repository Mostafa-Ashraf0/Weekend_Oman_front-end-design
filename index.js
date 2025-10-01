const links = document.querySelectorAll(".links ul li");

links.forEach(link=>{
    link.addEventListener("click",()=>{
        links.forEach(link=>{
            link.classList.remove("selected-link");
        })
        link.classList.add("selected-link");
    })
})
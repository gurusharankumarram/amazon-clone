const backtop = document.querySelector(".foot-pannel1")

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})


const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".pannel-all")

sidebtn.addEventListener("click", () => {
    toggleSidebar();
});

cross.addEventListener("click", () => {
    toggleSidebar();
});

function toggleSidebar() {
    // Toggle the "active" class for sidebar, cross, and black
    sidebar.classList.toggle("active");
    cross.classList.toggle("active");
    black.classList.toggle("active");
}

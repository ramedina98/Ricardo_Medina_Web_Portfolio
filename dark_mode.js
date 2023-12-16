//dark mode btn...
const btnSwitch = document.querySelector('.switch');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

//automatic dark mode...
function isDarkMode(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function applySystemMode(){
    if(isDarkMode()){
        document.body.classList.add('dark');
        btnSwitch.classList.toggle('active');
    }
}

applySystemMode();

//indicator nav li and burguer menu...
const links = document.querySelectorAll(".nav_list ul li a"); 
const checkpoints = document.querySelectorAll(".portCar")
const burguer = document.querySelector(".burger_menu");
const nav = document.querySelector(".nav");
const exit = document.querySelector(".exit");
//nav li indicator...
window.addEventListener("scroll", () => {
    let roll; 
    if(window.innerWidth <= 854){
        roll = 350; 
    } else{
        roll = 50; 
    }

    for(let i = 0; i < checkpoints.length; i++){
        if(scrollY > checkpoints[i].offsetTop - roll){ //checar para usar cuando sea 854 o menos px...
            links.forEach(link => link.classList.remove("activo"));
            links[i].classList.add("activo"); 
        }
    }
});
//
window.addEventListener("resize", () => {
    const sizeWidth = window.innerWidth;
    if(sizeWidth <= 854){
        nav.style.display = "none"; 
        burguer.style.display = "block";
        //burguer menu...
        burguer.addEventListener("click", () => {
            nav.style.display = "flex"; 
            burguer.style.display = "none"; 
        }); 
        //exit btn...
        exit.addEventListener("click", () => {
            nav.style.display = "none"; 
            burguer.style.display = "block";
        });
    } else if(sizeWidth > 854){
        nav.style.display = "flex"; 
        burguer.style.display = "none";
    }
}) 
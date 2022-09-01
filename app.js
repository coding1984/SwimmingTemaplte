let closeBotttom = document.getElementById('closeBotton');
let mobileNav = document.getElementById('mobileNav');
let openNav = document.getElementById('openNav');

closeBotttom.addEventListener('click',()=>{
    mobileNav.style.cssText = "width:0px; padding:0px;";
    mobileNav.style.opacity = "0";
    mobileNav.style.visibility ="hidden";
})
openNav.addEventListener('click', ()=>{
    mobileNav.style.cssText = "width:200px; padding:20px;";
    mobileNav.style.opacity = "1";
    mobileNav.style.visibility ="visible";

})


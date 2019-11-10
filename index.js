const nav = () =>{
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".nav-menu");
  const menuItem = document.querySelectorAll(".nav-menu-item");



  burger.addEventListener('click', ()=>{


    menu.classList.toggle("nav-active");


    menuItem.forEach((items, index) => {
      if(items.style.animation){
        items.style.animation = '';
      }else{
        items.style.animation = `menuItemClear 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

     burger.classList.toggle('toggle');
     burger.classList.toggle('close');


  });
}



nav();

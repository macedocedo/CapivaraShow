
/*===== MENU SHOW =====*/ 
/*===== MENU navegação efeito de click para executar ou nao =====*/ 

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

if(toggle && nav){
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
        //Active link
            navLink.forEach(n => n.classList.remove('active'))
                this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//-------------------

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
  
  

  
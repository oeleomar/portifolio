(() => {
    const anim = document.querySelectorAll('[data-anim]')
    const animate = 'animate'

    function animateScroll(){
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4 );
        anim.forEach((e)=>{
            if(windowTop > e.offsetTop){
                e.classList.add(animate);
            }else{
                e.classList.remove(animate);
            }
        })
    }

    animateScroll();
    
    window.addEventListener('scroll', (e) =>{
        animateScroll();
    })
})();
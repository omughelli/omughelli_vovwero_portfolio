function displayNavigation(){
    let displayNav = document.getElementById('displayNavigation');
    let nav = document.querySelector('nav');


    displayNav.addEventListener('click', function(){
        if(nav.style.display === "block"){
            nav.style.display = "none";
        }
        else{
            nav.style.display = "block";
        }
        
    })
}
displayNavigation();

function displayForm(){
    let form = document.querySelector('#form_container');
    let cancel = document.getElementById('cancelForm');
    const showFormBtns = document.querySelectorAll('.display_form_btn');

    showFormBtns.forEach((showFormBtn)=>{
        showFormBtn.addEventListener('click', ()=>{
            form.style.display = "flex";
        })
    })

    cancel.addEventListener('click', function(){
        form.style.display = "none";
    })
}
displayForm();

function learnMore(){
    let learnMoreButton = document.querySelector('.learn_more_about_us');
    let aboutText = document.getElementById('about_text_no_display');

    learnMoreButton.addEventListener('click', function(){
        if(aboutText.style.display === "block"){
            aboutText.style.display = "none";
        }
        else{
            aboutText.style.display = "block";
            document.getElementById("pTag").textContent = '';
        }
    })
}
learnMore();

/* how_we_be_of_help */
setTimeout(function(){
    let howMayIHelp = document.getElementById('how_we_be_of_help');
    howMayIHelp.style.display = "block"
}, 6000)


const footerDate = document.getElementById("footerDate");
footerDate.innerHTML = new Date().getFullYear();

function displatToTopBtn(){
    window.addEventListener('scroll', ()=>{
        const toTopBtn = document.getElementById("toTopBtn");
        let scrollHeight = window.pageYOffset;

        if(scrollHeight > 120)
            toTopBtn.style.display = "block";
        else
            toTopBtn.style.display = "none";
        
    })
}

displatToTopBtn();

function controlScrollLinks(){

    const scrollLinks = document.querySelectorAll('.scrollLink');

    scrollLinks.forEach((link)=>{
        link.addEventListener('click', (e)=>{
            e.preventDefault();

            const id = e.currentTarget.getAttribute('href').slice(1);
            console.log(id);

            const element = document.getElementById(id);
            let position = element.offsetTop;

            window.scrollTo(
                {
                    left: 0,
                    top: position
                }
            )
        })
    })

}
controlScrollLinks();
const typedTextSpan = document.querySelector('.typed-text');

const textArray = ['sou curiosa,', 'sonhadora,', 'dedicada,', 'focada,', 'persistente,', 'adoro aprender,', 'resolver problemas.', 'Coding is fun!'];
const typinDelay = 40; //Typing speed
const erasingDelay = 40; // Typed word removal spreed
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0; // Index of textArray
let charIndex = 0; // Index of alphabets

function type()
{
    if (charIndex < textArray[textArrayIndex].length)
    {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typinDelay);
    }
    else
    {
        setTimeout(erase, newTextDelay);
    }
}

function erase()
{
    if(charIndex > 0)
    {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex -1);
        charIndex--;
        setTimeout(erase, erasingDelay);    
    }
    else
    {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 100);
    }
}

document.addEventListener('DOMContentLoaded', function() // or DOM load initiate the effect
{
    if(textArray.length) setTimeout(type, 0);
});

const mobile_menu = document.querySelector('.popup-mobile-menu');
const toggle = document.querySelector('.toggle');
const close_btn = document.querySelector('.close-button');

mobile_menu.addEventListener('click', ()=>
{
    mobile_menu.classList.remove('menu-open');
})

toggle.addEventListener('click', ()=>
{
    mobile_menu.classList.add('menu-open');
})

close_btn.addEventListener('click', ()=>
{
    mobile_menu.classList.remove('menu-open');
})

const scrollToTop = document.getElementById("scroll-to-top");
      scrollToTop.addEventListener("click", e => {
        // you can also use window.scroll(0, 0); but this way uses smooth behavior (NOT supported on all browsers)
        window.scroll({top:0,behavior:"smooth"});
      }, 0);
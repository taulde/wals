// CS 2
const textElement = document.getElementById('cs');
const originalText = textElement.textContent;

// КИТ
const textElementThree = document.getElementById('kit');
const originalTextThree = textElementThree.textContent;

// ТЦК
const textElementTwo = document.getElementById('ck');
const originalTextTwo = textElementTwo.textContent;

const memeModeBtn = document.getElementById('meme-mode-btn');

const textLogo = document.getElementById('logo');
const originalTextLogo = textLogo.textContent;

const getMode = localStorage.getItem("mode");

memeModeBtn.addEventListener('click', function(){
    document.documentElement.classList.toggle("meme")

    let mode = localStorage.getItem("mode")

    if (mode === "meme"){
        localStorage.setItem("mode", "")

        textLogo.textContent = originalTextLogo;
        // КС 2
        textElement.addEventListener('mouseenter', () =>{
        textElement.textContent = originalText;
        })

        textElement.addEventListener('mouseleave', () => {
            textElement.textContent = originalText;
        }) 

            // КИТ
        textElementThree.addEventListener('mouseenter', () =>{
            textElementThree.textContent = originalTextThree;
        })

        textElementThree.addEventListener('mouseleave', () => {
            textElementThree.textContent = originalTextThree;
        }) 

        // ТЦК
        textElementTwo.addEventListener('mouseenter', () =>{
            textElementTwo.textContent = originalTextTwo;
        })

        textElementTwo.addEventListener('mouseleave', () => {
            textElementTwo.textContent = originalTextTwo;
        })
    } else{
        localStorage.setItem("mode", "meme")

        textLogo.textContent = "What about mems?";
        // КС 2
        textElement.addEventListener('mouseenter', () =>{
            textElement.textContent = "КС 2";
        })

        textElement.addEventListener('mouseleave', () => {
            textElement.textContent = originalText;
        }) 

        // КИТ
        textElementThree.addEventListener('mouseenter', () =>{
            textElementThree.textContent = "КИТ";
        })

        textElementThree.addEventListener('mouseleave', () => {
            textElementThree.textContent = originalTextThree;
        }) 

        // ТЦК
        textElementTwo.addEventListener('mouseenter', () =>{
            textElementTwo.textContent = "НЕ ТЦК";
        })

        textElementTwo.addEventListener('mouseleave', () => {
            textElementTwo.textContent = originalTextTwo;
        })
    }    
})

if (getMode === ""){
    textLogo.textContent = originalTextLogo;
    // КС 2
    textElement.addEventListener('mouseenter', () =>{
    textElement.textContent = originalText;
    })

    textElement.addEventListener('mouseleave', () => {
        textElement.textContent = originalText;
    }) 

        // КИТ
    textElementThree.addEventListener('mouseenter', () =>{
        textElementThree.textContent = originalTextThree;
    })

    textElementThree.addEventListener('mouseleave', () => {
        textElementThree.textContent = originalTextThree;
    }) 

    // ТЦК
    textElementTwo.addEventListener('mouseenter', () =>{
        textElementTwo.textContent = originalTextTwo;
    })

    textElementTwo.addEventListener('mouseleave', () => {
        textElementTwo.textContent = originalTextTwo;
    })
} else {
    textLogo.textContent = "What about mems?";
    // КС 2
    textElement.addEventListener('mouseenter', () =>{
        textElement.textContent = "КС 2";
    })

    textElement.addEventListener('mouseleave', () => {
        textElement.textContent = originalText;
    }) 

    // КИТ
    textElementThree.addEventListener('mouseenter', () =>{
        textElementThree.textContent = "КИТ";
    })

    textElementThree.addEventListener('mouseleave', () => {
        textElementThree.textContent = originalTextThree;
    }) 

    // ТЦК
    textElementTwo.addEventListener('mouseenter', () =>{
        textElementTwo.textContent = "НЕ ТЦК";
    })

    textElementTwo.addEventListener('mouseleave', () => {
        textElementTwo.textContent = originalTextTwo;
     })
}
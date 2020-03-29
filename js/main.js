// create character database
// add characters in an array in order to populate each section


// PART A

// Scroll-to from character cards at top
let $charCardLink = document.querySelector('.char-card-name')
let $scrollToChar = document.querySelectorAll('.char-card-name')
let $topbarHeight = document.querySelector('.top-bar').getBoundingClientRect().height 

$scrollToChar.forEach($charCardLink => {
    $charCardLink.addEventListener('click', event => {
        event.preventDefault();

        console.log(`clicked`);

        // Which link are you clicking <a href>
        let $clickedLink = $charCardLink.getAttribute('href')
        console.log(`you clicked ${$clickedLink}`)

        // variable to select the character <h3> you clicked
        let $clickedChar = document.querySelector($clickedLink)
        console.log($clickedChar)

        // get the scroll position of the top of the character section
        // subtract the topbar height so it slides to the right position (otherwise it's under the topbar)
        let $charSectionPosition = ($clickedChar.getBoundingClientRect().top - $topbarHeight) + window.scrollY 
        console.log(`Scene top scroll position is ${$charSectionPosition}px`)

        // scroll to the position of the character section 
        window.scrollTo({
        left:0, 
        top: $charSectionPosition, 
        behavior:'smooth'
        })

    })
})




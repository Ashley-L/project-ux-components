// create character database
// add characters in an array in order to populate each section

let $topbarHeight = document.querySelector('.top-bar').getBoundingClientRect().height 


// PART A

// Scroll-to from character cards at top
let $charCardLink = document.querySelector('.char-card-name')
let $charCard = document.querySelectorAll('.char-card-name')

$charCard.forEach($charCardLink => {
    $charCardLink.addEventListener('click', event => {
        event.preventDefault();

        console.log(`clicked`);

        // Which link are you clicking <a href>
        let $clickedCharCard = $charCardLink.getAttribute('href')
        console.log(`you clicked ${$clickedCharCard}`)

        // variable to select the character <section> you clicked
        var $clickedChar = document.querySelector($clickedCharCard)
        console.log($clickedChar)

        // get the scroll position of the top of the character section
        // subtract the topbar height so it slides to the right position (otherwise it's under the topbar)
        let $charSectionPosition = ($clickedChar.getBoundingClientRect().top - $topbarHeight) + window.scrollY 
        console.log(`section top scroll position is ${$charSectionPosition}px`)

        // scroll to the position of the character section 
        window.scrollTo({
        left:0, 
        top: $charSectionPosition, 
        behavior:'smooth'
        })

    })
})


// Scroll-to from scrollspy
let $scrollspyUl = document.querySelector('.scrollspy')
let $scrollspyList = document.querySelector('.scrollspy-char')
let $scrollspyCharLink = document.querySelector('.scrollspy-char a')
// console.log($scrollspyCharLink)
let $scrollspyCharAll = document.querySelectorAll('.scrollspy-char a')

$scrollspyCharAll.forEach($scrollspyCharLink => {
    $scrollspyCharLink.addEventListener('click', event => {
        event.preventDefault()
    
        console.log(`clicked`)

        let $clickedScrollspy = $scrollspyCharLink.getAttribute('href')
        console.log($clickedScrollspy)

        // variable to select the character <section> you clicked
        var $clickedChar = document.querySelector($clickedScrollspy)
        console.log($clickedChar)

        let $charSectionPosition = ($clickedChar.getBoundingClientRect().top - $topbarHeight) + window.scrollY 
        console.log(`section top scroll position is ${$charSectionPosition}px`)

        // scroll to the position of the character section 
        window.scrollTo({
        left:0, 
        top: $charSectionPosition, 
        behavior:'smooth'
        })
    })
})

// Match scrollspy to position on page

let $charSection = document.querySelector('.character')
let $charSectionAll = document.querySelectorAll('.character')


// if section is in viewport, add .scrollspy-current class to 

// is the char section in the viewport

// window.addEventListener('scroll', event => {
//     console.log(scrollPosition)

// });


// scroll then fix sidebar
let $doc = document.documentElement 
// let $scrollPosition = window.scrollY
let $sidebar = document.querySelector('.sidebar')
let $articleContent = document.querySelector('.article-content')



// window.addEventListener('scroll', event => {
//     console.log(test)

    // if ($scrollPosition >= $articleTop) {
    //     $sidebar.classList.add('sidebar-fixed')
    // } else {
    //     $sidebar.classList.remove('sidebar-fixed')
    // }
// })

window.addEventListener('scroll', event => {   
    let $scrollPosition = window.scrollY // shows scroll position, changes every time you scroll
    // console.log($scrollPosition)

    let $articleTop = $articleContent.getBoundingClientRect().top + window.scrollY
    // console.log($articleTop)
    let $articleBottom = $articleContent.getBoundingClientRect().bottom + window.scrollY
    // console.log($articleBottom)

    if ($scrollPosition >= $articleTop) {
        $sidebar.classList.add('sidebar-fixed')
    } else if ($scrollPosition <= $articleBottom) {
        $sidebar.classList.remove('sidebar-fixed')
    } else {
        $sidebar.classList.remove('sidebar-fixed')
    }
})
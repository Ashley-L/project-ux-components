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
let $sidebarFixed = document.querySelector('.sidebar-fixed')
let $articleContent = document.querySelector('.article-content')
let $mainContainer = document.querySelector('.main-container')



let $containerTop = ($mainContainer.getBoundingClientRect().top -$topbarHeight) + window.scrollY
let $articleTop = ($articleContent.getBoundingClientRect().top -$topbarHeight) + window.scrollY

window.addEventListener('scroll', event => {   
    // get scroll position
    let $scrollPosition = window.scrollY // shows scroll position, changes every time you scroll
    console.log(`scroll position is ${$scrollPosition}`)
    // console.log($containerTop)
   
    // fixing sidebar to top on scroll
    // add .sidebar-fixed if scroll position is greater than scroll position of top of article
    // which is defined above
    if ($scrollPosition >= $articleTop) {
        $sidebar.classList.add('sidebar-fixed')
        document.querySelector('.sidebar').style.top = `${$topbarHeight}px`
    } else {
        $sidebar.classList.remove('sidebar-fixed')
    }


    // start scrolling again when you hit the bottom
    // if scroll position is > bottom scroll position of scrollspy
    // remove fixed class
    // let $footerTop = (document.querySelector('.footer').getBoundingClientRect().top - $topbarHeight) + window.scrollY
    // let $sidebarBottom = ($sidebar.getBoundingClientRect().bottom - $topbarHeight) + window.scrollY

    let $footerTop = document.querySelector('.footer').getBoundingClientRect().top

    if ($footerTop < window.innerHeight && $footerTop >= 0) {
        console.log(`top of footer in viewport`)
        $sidebar.classList.remove('sidebar-fixed')
        $sidebar.style.marginTop = `11500px`
        // $sidebar.style.marginTop = `-${$articleContent.getBoundingClientRect().top}px`



        
        // $sidebar.style.top = `-${$topbarHeight}px`
        // $sidebar.style.bottom = `0px`

    } else {
        console.log(`it's not there`)
        $sidebar.style.marginTop = `0px`

    }


    // if bottom of articlecontent is in viewport, remove fixed class
    // if ($sidebarBottom >= $footerTop) {
    //     console.log(`sidebar is greater than footer`)
        
    //     $sidebar.classList.remove('sidebar-fixed')
    //     // $sidebar.style.position = 'absolute'

    //     // $sidebar.style.marginTop = `11200px`

    //     // $sidebar.style.bottom = `${document.querySelector('.footer').getBoundingClientRect().bottom}px`
    // } else {
    //     console.log(`nothing`)
    // }


    



    // if the fixed class exists
    // adjust the margin top
    // if ($sidebar.classList.contains('sidebar-fixed')) {
    //     // console.log(`class exists`)
    //     document.querySelector('.sidebar').style.marginTop = `-${$containerTop}px`
    // } 

    // // if scroll position of sidebar bottom >= scroll position of container bottom
    // // remove fixed class
    // $sidebarBottom = ($sidebar.getBoundingClientRect().bottom - $topbarHeight) + window.scrollY 
    // console.log(`sidebar: ${$sidebarBottom}`)
    // $villainsBottom = (document.querySelector('.villains-sec').getBoundingClientRect().bottom - $topbarHeight) + window.scrollY
    // console.log(`villains ${$villainsBottom}`)

    // if ($sidebarBottom > $villainsBottom) {
    //     $sidebar.classList.remove('sidebar-fixed')
    //     console.log(`sidebar greater than villains`)
    //     // document.querySelector('.sidebar').style.marginTop = `${$sidebarBottom}px`
        
    //     // `${document.documentElement.scrollHeight - (document.querySelector('.villains-sec').getBoundingClientRect().bottom + window.scrollY - $topbarHeight)}px`

    //     // document.querySelector('.sidebar').style.marginBottom = `-${$villainsBottom.offsetBottom}px`

    // }

    // // set bottom margin
    // let test = document.documentElement.scrollHeight - ($mainContainerBottom)
    // console.log(test)


})
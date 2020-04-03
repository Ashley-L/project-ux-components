let $topbarHeight = document.querySelector('.top-bar').scrollHeight 


// PART A

///////////////////////////////////
// SCROLL-TO FROM CHARACTER CARDS//
///////////////////////////////////

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

//////////////////////////////
// SCROLL-TO FROM SCROLL-SPY//
//////////////////////////////

let $scrollspyUl = document.querySelector('.scrollspy')
// let $scrollspyList = document.querySelector('.scrollspy-char')
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




//////////////////////////////////////////
// SCROLL-SPY MATCHES CHARACTER SECTIONS//
//////////////////////////////////////////

let $charSection = document.querySelector('.character')
let $charSectionAll = document.querySelectorAll('.character')

let $viewport = window.innerHeight
let $halfViewport = $viewport/2

$charSectionAll.forEach($charSection => {
    window.addEventListener('scroll', event => {

        let $charRect = $charSection.getBoundingClientRect()
    
        // get the current id so you can match it to the scrollspy li item
        let $charId = $charSection.getAttribute('id')

        // get the scrollspy list item
        let $currentScrollspy = document.querySelector(`#scrollspy-${$charId}`)
        // console.log($currentScrollspy)

        if ($charRect.top <= $halfViewport && $charRect.bottom >= $halfViewport) {
        
            // console.log(`It's your boy (or girl) ${$charId}`)
            // console.log(`${$charId} in view`)
            
            // add the class
            $currentScrollspy.classList.add('scrollspy-current')        
    
        } else {
            // console.log(`character not in view`)
            $currentScrollspy.classList.remove('scrollspy-current')        

        }
    
    })
  
})




/////////////////////////////
// SCROLL THEN FIX SIDEBAR //
/////////////////////////////



let $doc = document.documentElement 
// let $scrollPosition = window.scrollY
let $sidebar = document.querySelector('.sidebar')
let $sidebarFixed = document.querySelector('.sidebar-fixed')
let $articleContent = document.querySelector('.article-content')
let $mainContainer = document.querySelector('.main-container')
let $footer = document.querySelector('.footer')
let $containerTop = ($mainContainer.getBoundingClientRect().top -$topbarHeight) + window.scrollY



// set the sidebar to be a window height - topbar
let sidebarFixedHeight = window.innerHeight - $topbarHeight
// console.log(sidebarFixedHeight)
$sidebar.style.height = `${sidebarFixedHeight}`


function stickySidebar() {

    // fix sidebar to right under topbar when the top of the article passes topbar
    let $articleTop = $articleContent.getBoundingClientRect().top - $topbarHeight
    // console.log($articleTop)
    
    if ($articleTop <= 0) {
        // add the fixed class + fix sidebar to just under topbar
        $sidebar.classList.add('sidebar-fixed')
        $sidebar.style.top = `${$topbarHeight}px`
    } else {
        $sidebar.classList.remove('sidebar-fixed')
    }

    // if ($sidebar.classList.contains('sidebar-fixed')) {
    //     $sidebar.style.height = `${sidebarFixedHeight}px`
    //     // console.log(`exists`)
    // } else {
    //     // console.log(`no`)
    // }

   
    ///////////////////////////////////////////////////////
    //FIXED THEN SCROLL SIDEBAR WHEN YOU REACH THE BOTTOM//
    ///////////////////////////////////////////////////////
    // EDIT: IT WORKS NOW

    // start scrolling again when you hit the bottom
    // when you get to the bottom
    // add the fixed class and add the bottom class
    
    let $footerTop = $footer.getBoundingClientRect().top

    // if footer goes above the bottom of the window
    if ($footerTop <= window.innerHeight) {
         // console.log(`top of footer in viewport`)
        // add the fixed class and add the bottom class
        $sidebar.classList.remove('sidebar-fixed')
        $sidebar.classList.add('sidebar-bottom')
        document.querySelector('.sidebar-bottom').style.height = `${sidebarFixedHeight}px`        
        
        // remove top property b/c it'll go to the top of the **document
        // since it's position absolute
        $sidebar.style.top = ''

    } else {
        // console.log(`it's not there`)
        $sidebar.classList.remove('sidebar-bottom')
    }



}
window.addEventListener('scroll', stickySidebar)

/*Back to top: BTN, using js*/
let $backToTopBtn = document.querySelector(`.top-w-btn`);
let $introH = document.querySelector(`#intro`);

$backToTopBtn.addEventListener(`click`, event => {
    // when btn is clicked, scroll to intro heading, like anchor href=#
    $introH.scrollIntoView({
        behavior: `smooth`
    });
})


/***** PART B: SLIDESHOW ******/
////////////////////////////////
// SLIDESHOW WORK IN PROGRESS //
////////////////////////////////

///////////////////////////////////////////
// THUMBNAIL CLICK SLIDESHOW (NO ARROWS) //
//////////////////////////////////////////

// MAIN CAROUSEL container .char-carousel 
let $charCaro = document.querySelector(`.char-carousel`);
// every character's .char-carousel container
let $charCaroAll = document.querySelectorAll(`char-carousel`);

// BIG IMG container
let $carouselBig = document.querySelector(`.char-slides .carousel-big`);
let $carouselBigAll = document.querySelectorAll(`.char-slides .carousel-big`)

// THUMBNAILS container
let $carouselThumb = document.querySelector(`.carousel-thumbs`)
// let $carouselThumb = document.querySelector(`.char-carousel .carousel-thumbs`)
let $carouselThumbAll = document.querySelectorAll(`.carousel-thumbs`)

let $carouselThumbMini = document.querySelector(`.carousel-thumbs li`)
// let $carouselThumbMini = document.querySelector(`.carousel-thumbs .mini-thumb`)
let $carouselThumbMiniAll = document.querySelectorAll(`.carousel-thumbs li`);

let $carouselThumbMiniImg = document.querySelector(`.carousel-thumbs li img`)
// let $carouselThumbMini = document.querySelector(`.carousel-thumbs .mini-thumb img`)
// let $carouselThumbMiniImgAll = document.querySelectorAll(`.carousel-thumbs li img`)


// 1) find source of the big img
$carouselBig.getAttribute(`src`);

// 2) find source of the thumbnail 
let $thumbnailSrc = $carouselThumbMiniImg.getAttribute(`src`);

//3 replace big img source with thumbnail source
$carouselBig.setAttribute(`src`, $thumbnailSrc);







/////////////////////
// INFINITE SCROLL //
/////////////////////

let $newContent = document.querySelectorAll('.new-article')

let $newArticle = document.querySelector('.new-article')


let loadNewContent = (event) => {

    let $articleBottom = $articleContent.getBoundingClientRect().bottom

    // let $load = document.querySelector('#loadContent')
    if ($articleBottom < window.innerHeight) {
        // console.log(`bottom of article in viewport`)

        // create new section, append it to the doc
        let $newSection = document.createElement("section");
        $newSection.setAttribute('class', 'new-article')
        document.querySelector('.article-content').appendChild($newSection)

        // set the innerHTML
        $newSection.innerHTML += `
            <section class="article-intro article-fade">
                <p class="fig-caption">How did we even survive?</p>
                <h1 class="article-title">MCU MOMENTS THAT CHANGED MY LIFE</h1>
                <p class="byline">by various vigilantes </p>
                <div class="new-article-image"><img src="imgs/new-article.jpg" alt="Thor's iconic scene in Endgame"></div>
                <p class="new-article-intro">So, uh, spoilers if you didn't see Infinity War by now, but honestly, that's on you. We've been blessed with a lot of movies over the past 12 years, and I don't know about y'all, but I think there are a handful of moments that left me well and truly shook. I am now going to discuss each of these moments in painstaking detail for your entertainment.</p>
            </section>
        `


    } else {
        // console.log(`didn't reach bottom of article`)
    }
}


window.addEventListener('load', event => {
    setTimeout(loadNewContent, 1000) 

})
window.addEventListener('scroll', event => {
    setTimeout(loadNewContent, 1000)   
  
})
// window.addEventListener('resize', loadNewContent)






////////////////////////////
// FILTER BY MOVIE SERIES //
////////////////////////////

// Click on the tags in the sidebar to filter the characters by movie appearances
// a concept
    // if I click on a button with a specific class
    // display the characters w/ that same certain class

let $movieButtonsAll = document.querySelectorAll('.movie-tag a')
let $movieButton = document.querySelector('.movie-tag a')
// let $charSection = document.querySelector('.character')
// let $charSectionAll = document.querySelectorAll('.character')
let $movieTable = document.querySelector('.movies-table')
let $allMovieTags= $movieTable.querySelectorAll('.movie-tag')
let $oneMovieTag = $movieTable.querySelector('.movie-tag')



$movieButtonsAll.forEach($movieButton => {
    $movieButton.addEventListener('click', (event) => {
        console.log(event)

        // get the class of the button you clicked
        let $clickedMovie = event.target.getAttribute('class')
        console.log($clickedMovie)

        // list item of that button (adding/removing class from here)
        let $clickedMovieTag = event.target.parentNode

        // get the parent of the (whole) button you clicked
        $allMovieTags = $clickedMovieTag.parentNode
        console.log($allMovieTags)
        
        // remove the selected class from all of the tags
        // EXCEPT for the one you clicked
        $allMovieTags.querySelectorAll('.movie-tag').forEach(ele => {
            ele.classList.remove('selected-movie')
        })
        $clickedMovieTag.classList.add('selected-movie')

        // show/hide characters by class (of what you clicked)
        $charSectionAll.forEach($charSection => {
            if ($charSection.classList.contains(`${$clickedMovie}`)) {
                $charSection.style.display = 'block'
            } else {
                $charSection.style.display = 'none'
            }
        })


    })
})

// create character database
// add characters in an array in order to populate each section

let $topbarHeight = document.querySelector('.top-bar').getBoundingClientRect().height 


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



let $containerTop = ($mainContainer.getBoundingClientRect().top -$topbarHeight) + window.scrollY
let $articleTop = ($articleContent.getBoundingClientRect().top -$topbarHeight) + window.scrollY

window.addEventListener('scroll', event => {   
    // get scroll position
    let $scrollPosition = window.scrollY // shows scroll position, changes every time you scroll
    // console.log(`scroll position is ${$scrollPosition}`)
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


    ///////////////////////////////////////////////////////
    //FIXED THEN SCROLL SIDEBAR WHEN YOU REACH THE BOTTOM//
    ///////////////////////////////////////////////////////
    // THIS IS NOT WORKING DAMMIT

    // start scrolling again when you hit the bottom
    // if scroll position is > bottom scroll position of scrollspy
    // remove fixed class
    // let $footerTop = (document.querySelector('.footer').getBoundingClientRect().top - $topbarHeight) + window.scrollY
    // let $sidebarBottom = ($sidebar.getBoundingClientRect().bottom - $topbarHeight) + window.scrollY

    let $footerTop = document.querySelector('.footer').getBoundingClientRect().top
    let $sidebarTop = document.querySelector('.sidebar').offsetTop
    if ($footerTop < window.innerHeight && $footerTop > 50) {
        // console.log(`top of footer in viewport`)
        $sidebar.classList.remove('sidebar-fixed')
        $sidebar.style.marginTop = $sidebarTop
        // $sidebar.style.marginTop = `-${$articleContent.getBoundingClientRect().top}px`



        
        // $sidebar.style.top = `-${$topbarHeight}px`
        // $sidebar.style.bottom = `0px`

    } else {
        // console.log(`it's not there`)
        $sidebar.style.marginTop = `0px`

    }




})




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


window.addEventListener('load', event =>{
    setTimeout(loadNewContent, 1500) 
})
window.addEventListener('scroll', event => {
    setTimeout(loadNewContent, 1500)     
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

let $wrapper = document.querySelectorAll('.wrapper')
// console.log($wrapper)



$movieButtonsAll.forEach($movieButton => {
    $movieButton.addEventListener('click', (event) => {
        // console.log(event)

        // get the class of the button you clicked
        let $clickedMovie = event.target.getAttribute('class')
        // console.log($clickedMovie)

        // list item of that button (adding/removing class from here)
        let $clickedMovieTag = event.target.parentNode
        
        // get the parent of the (whole) button you clicked
        $allMovieTags = $clickedMovieTag.parentNode
        // console.log($allMovieTags)
        
        // remove the selected class from all of the tags
        // EXCEPT for the one you clicked
        $allMovieTags.querySelectorAll('.movie-tag').forEach(ele => {
            ele.classList.remove('selected-movie')
        })
        $clickedMovieTag.classList.add('selected-movie')


        // show/hide characters by class (of what you clicked)
        $charSectionAll.forEach($charSection => {
            if ($charSection.classList.contains(`${$clickedMovie}`)) {

                // display changes
                $charSection.querySelector('.char-name').classList.remove('shrink')
                $charSection.querySelector('.filtered-msg').classList.remove('show')
                $charSection.querySelector('.wrapper').classList.remove('hide')


                // select the clicked class
                let $characterClass = document.querySelector(`.${$clickedMovie}`)
                // console.log($characterClass)


            } else {
                // display changes
                $charSection.querySelector('.char-name').classList.add('shrink')
                $charSection.querySelector('.filtered-msg').classList.add('show')
                $charSection.querySelector('.wrapper').classList.add('hide')
            }            



            // of the class selected
            // position the first character w/ that class at the top of the page
            let $characterClassFirst = document.querySelector(`.${$clickedMovie}`)
            // console.log($characterClassFirst)
            
            $characterClassFirst.scrollIntoView(true);
            if (true) {
                window.scrollTo(0, window.scrollY - $topbarHeight);
            } 


            // if the hero/villain section doesn't have any characters from the selected movie
            // display some message
            // let $charBlocksAll = document.querySelectorAll('.block')
            // let $charBlock = document.querySelector('.block')
            // // console.log($charBlocksAll)
                  
            // $charBlocksAll.forEach($charBlock => {
            //     if ($charBlock.classList.contains(`${$clickedMovie}`)) {
            //         console.log(`none of the other characters are here`)
            //     } 
                
            // })
        
        })

        
        


        // when you click on a tag, scroll to the first character w/ that class name
        // $firstCharacter = document.querySelector()



    })
})



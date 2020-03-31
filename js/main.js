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

    if ($footerTop < window.innerHeight && $footerTop >= 0) {
        // console.log(`top of footer in viewport`)
        $sidebar.classList.remove('sidebar-fixed')
        $sidebar.style.marginTop = `11500px`
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



// window.addEventListener('scroll', event => {
    



// })



let loadNewContent = (event) => {

    let $articleBottom = $articleContent.getBoundingClientRect().bottom

    if ($articleBottom < window.innerHeight) {
        console.log(`bottom of article in viewport`)

        document.querySelector('#loadContent').innerHTML += `
        <section class="intro-sec" id="intro">
                <article class="article-details">
                    <p class="fig-caption">The Mightiest of Them All.</p>
                    <h1 class="article-title">TOP 8 MARVEL HEROES AND VILLAINS</h1>
                    <p class="byline">by various vigilantes </p>
                    <h5 class="select-msg">Select a character below</h5>
                </article>

                <!-- CHARACTER CARD GRID -->
                <div class="cards-container">
                    <div class="char-card">
                        <a class="char-card-name" href="#hero-spiderman">Spider-Man</a>
                        <img src="imgs/char-card-spider-man.png" alt="Spider-Man">
                    </div>
                    <div class="char-card">
                        <a class="char-card-name" href="#hero-ironman">Iron Man</a>
                        <img src="imgs/char-card-iron-man.png" alt="Iron Man">
                    </div>
                    <div class="char-card">
                        <a class="char-card-name" href="#hero-capmarv">Captain Marvel</a>
                        <img src="imgs/char-card-cap-marvel.png" alt="Captain Marvel">
                    </div>
                    <div class="char-card">
                        <a class="char-card-name" href="#hero-bp">Black Panther</a>
                        <img src="imgs/char-card-black-panther.png" alt="">
                    </div>
                    <div class="char-card">
                        <a class="char-card-name" href="#vlln-thanos">Thanos</a>
                        <img src="imgs/char-card-thanos.png" alt="Thanos">
                    </div>
                    <div class="char-card">
                        <a class="char-card-name" href="#vlln-magneto">Magneto</a>
                        <img src="imgs/char-card-magneto.png" alt="Magneto">
                    </div>
                    <div class="char-card">
                        <a class="char-card-name" href="#vlln-km">Killmonger</a>
                        <img src="imgs/char-card-killmonger.png" alt="Killmonger">
                    </div>
                    <div class="char-card">
                        <a class="char-card-name" href="#vlln-loki">Loki</a>
                        <img src="imgs/char-card-loki.png" alt="Loki"></div>
                </div>
                <p class="dramatic-msg">Which side are YOU on?</p>
            </section>
        `
        // console.log(document.querySelector('#loadContent').innerHTML)

        $sidebar.classList.remove('sidebar-fixed')

    } else {
        console.log(`didn't reach bottom of article`)
    }



}
window.addEventListener('load', loadNewContent)
window.addEventListener('scroll', loadNewContent)
window.addEventListener('resize', loadNewContent)



// let loadNewContent = (event) => {
// 	// Put up the loading screen
// 	document.querySelector('.loading').classList.add('show')

// 	fetch('load.html')
// 		.then((response) => {
// 			return response.text() // Convert it something readable
// 		})
// 		.then((html) => {

// 			let parser = new DOMParser()
// 			let newDocument = parser.parseFromString(html, 'text/html')

// 			// The loadthis.html page has been loaded!
// 			// Append the content from the new page into the old page
// 			document.querySelector('#content').innerHTML += newDocument.querySelector('#content').innerHTML
			
// 			// Take down the loading screen, we're done
// 			document.querySelector('.loading').classList.remove('show')
// 		})

// }

// document.querySelector('#loadContent').addEventListener('scroll', loadNewContent)
# Project MARVEL: UX/UI components for an article
Ashley Lall & Kim Nguyen

### About
* Top 8 Marvel Heroes and Villains
* Includes images, quotes, bios, ethos, values, and appearances
* Desktop view only (not responsive)

## PART 1 DELIVERABLES
Design and prototype the following components/tools for your article (5x length of the window) on browser’s default font size.

### A) Landmarks/Bearings
* Bolded headings (hero/villain name)
* Navigation topbar:
  * Sticky when scrolled
  * Home button leads to top of the page
* Back to top button (fixed position while reading the article, click leads to top of the page)
* Sticky sidebar with scrollspy: 
  * Located on the side of the page, always visible
  * Bold heading for current section, updates as scrolled
  * Scroll-to animation when heading is clicked
  * Icons to represent characters
  * Inspiration
http://www.ideakites.com/ - icon scrollspy, but also kind of a nice site

### B) Carousel/tabbed components
* In character section: carousel of images that the user can click through to view the images at their own pace 
* Indicate place in slideshow with styled 'selected' thumbnail
* Inspiration
  * https://dribbble.com/shots/10604596-5-Rules-For-UI-Design - shows all of the images at the bottom, can click on any
  * https://www.marvel.com/ - timed carousel that shows a mini progress bar on each tab

### C) Load new content at the bottom of the doc
* Fade in new article (modify original article content) as user scrolls to the end of the page
* Timed buffer/delay between reaching the bottom of the article and loading new content
* Inspiration for loading additional content at the bottom
  * https://www.commarts.com/features/typetogether
  * http://andrevv.com/

### D) Personal component(s) to enhance reading experience
* Clickable character cards at top of article which takes user to their selected character
* Filter which allows users to view characters by movie series (in the sticky sidebar so user can always access it)
* Fixed footer so users can access links even with infinite scroll

### THINGS TO CONSIDER:
* Scroll-to animation (smoothly glide up/down as opposed to jumping (default) to each character heading)

## GENERAL INSPO
* https://materializecss.com/grid.html - scrollspy on right side of page
* https://en.ubank.ru/ - parallax scrolling; sectional progress-tracker thing on the left
* https://jacobinmag.com/2020/03/pete-buttigieg-joseph-father-legacy-antonio-gramsci-bernie-sanders clean centered article, primarily text content, simple colour scheme and capitalised letters for each new section paragraph
* https://variablefonts.io/ simple mobile site
https://www.filamentgroup.com/workwithus/2020-webdeveloper/ simple anchors and text
* https://www.bizlet.org/references -elevated blockquote styling & loading animation
* https://birthmoviesdeath.com/2015/06/28/kevin-feige-next-spider-man-will-have-new-villains-john-hughes-vibe - comic book themed text and heading styling 



 

## STYLING DRAFT

### COLOURS
- ![#5C3232](https://placehold.it/15/5C3232/000000?text=+) `#5C3232; hover-dark, 70%`

- ![#414141](https://placehold.it/15/414141/000000?text=+) `#414141; body text (primary-text`
- ![#707070](https://placehold.it/15/707070/000000?text=+) `#707070; secondary text lighter grey`


- ![#0D096E](https://placehold.it/15/0D096E/000000?text=+) `#0D096E; footer, buttons, main-dark, 64%`

- ![#CFDBD5](https://placehold.it/15/CFDBD5/000000?text=+) `#CFDBD5; light green`
- ![#E8EDDF](https://placehold.it/15/E8EDDF/000000?text=+) `#E8EDDF; light platinum`

- ![#F5CB5C](https://placehold.it/15/F5CB5C/000000?text=+) `#F5CB5C; main-bright, golden canary yellow`

- ![#F11E22](https://placehold.it/15/F11E22/000000?text=+) `#F11E22; brilliant red`


### FONTS
- Sans-serif: futura-pt, sans-serif
- Futura-pt-bold
- Serif: classico-urw
- blockquote: Crimson italic (google)
- navbar: outlined w border: Futura PT (adobe)
* h1, h2, h3, h4: classico-urw (adobe)

## MOCKUP
![image](https://user-images.githubusercontent.com/52459805/77582001-0a599380-6eb5-11ea-9601-5e3e81b18c79.png)
![image](https://user-images.githubusercontent.com/52459805/77582595-011cf680-6eb6-11ea-8bd2-6ade375c3992.png)
![image](https://user-images.githubusercontent.com/52459805/77582827-61ac3380-6eb6-11ea-9902-d3a2049001ae.png)

## BODY CONTENT LIST
* Content Source: 
  * https://marvel.fandom.com/wiki/Marvel_Database
  * https://www.marvel.com/characters - official site, very beefy images with neat animations

### HEADER
* Title
* Navigation
* User buttons

### MAIN
* Intro (TITLE: TOP 8 HEROES & VILLAINS)
* 8 Photo Grid of Characters

#### HEROES (believes in greater Good for ALL)
* Snarky section intro?
  * “Not ALL heroes wear capes. Part of blah blah ”
* Spider-Man
  * [IMG] slideshow
    * PULL BLOCKQUOTE (define persona)
  * Short Bio (About)
  * Ethos/Values
  * Appearances (movies)
* Iron Man
  * [IMG] slideshow
    * PULL BLOCKQUOTE (define persona): 
  * Short Bio (About)
  * Ethos/Values
  * Appearances (movies)
* Captain Marvel
  * [IMG] slideshow
    * PULL BLOCKQUOTE (define persona)
  * Short Bio (About)
  * Ethos/Values
  * Appearances (movies)
* Black Panther 
  * [IMG] slideshow
    * PULL BLOCKQUOTE (define persona)
  * Short Bio (About)
  * Ethos/Values
  * Appearances (movies)

#### VILLAINS (does not believe in a greater Good/Evil as moral compass )
  * Snarky section intro?
  * Thanos
    * [IMG] slideshow
      * PULL BLOCKQUOTE (define persona)
    * Short Bio (About)
    * Ethos/Values
    * Appearances (movies)
* Magneto
  * [IMG] slideshow
    * PULL BLOCKQUOTE (define persona)
  * Short Bio (About)
  * Ethos/Values
  * Appearances (movies)
* Killmonger
  * [IMG] slideshow
    * PULL BLOCKQUOTE (define persona)
  * Short Bio (About)
  * Ethos/Values
  * Appearances (movies)
* Loki
  * [IMG] slideshow
    * PULL BLOCKQUOTE (define persona)
  * Short Bio (About)
  * Ethos/Values
  * Appearances (movies)

### BOTTOM FOOTER: SITE MAP
* Sticky/fixed to the bottom of the page for infinite scrolling
* About
* Terms of use
* Privacy policy
* Copyright 

# Project MARVEL: UX/UI components for an article
Ashley Lall & Kim Nguyen

### About
* Marvel heroes and villains 
* HOVER over a character card at the top of the page → Reveals hero/villain status, and name, over their image
* CLICK on the character card → takes you to their section, which includes carousel of images + character bio
* Aesthetic: 


## PART 1 DELIVERABLES
Design and Prototype the following components/tools for your article (5x length of the window) on browser’s default font size.

### A) Landmarks/Bearings
* Bolded headings (hero/villain name)
* Navigation topbar:
  * Sticky when scrolled
  * Contains main title (HEROES & VILLAINS)
  * Home button leads to top of the page
  * Share to social icons 
  * Marvel Brand Icon 
* Back to top button (fixed position while reading the article, click leads to top of the page)
* Scrollspy sidebar: 
  * Break into sections by heading (hero/villain name)
  * Located on the side of the page, always visible
  * Bold heading for current section, updates as scrolled
  * Scroll-to animation when heading is clicked
  * Inspiration
http://www.ideakites.com/ - icon scrollspy, but also kind of a nice site

### B) Carousel/tabbed components
* In character section: carousel of images (like a slideshow) that the user can click through to view the images at their own pace 
* Some sort of indicator to show where they are in the slideshow
* Images: character/scene w/ some sort of caption
* Inspiration
  * https://dribbble.com/shots/10604596-5-Rules-For-UI-Design - shows all of the images at the bottom, can click on any
  * https://www.marvel.com/ - timed carousel that shows a mini progress bar on each tab

### C) Load new content at the bottom of the doc
* Trigger animation on images at the end of article content
* Timed buffer/delay animation between reaching the bottom of the article and loading new content
* Fade in new content (show/hide element by changing opacity)?
* Inspiration for loading additional content at the bottom
  * https://www.commarts.com/features/typetogether
  * http://andrevv.com/

### D) Personal component(s) to enhance reading experience
* Interactive Collapse card
  * Toggle to reveal more information, perhaps on personal character details (reveal quote?)
* Highlight on links
  * Fade in/out diff colour to indicate link is moving to a different section/page 
* SCROLL-TO animation (smoothly glide up/down as opposed to jumping (default) to each character heading)
* Inspiration

### THINGS TO CONSIDER:
* Scroll-to (animate to slide up, back to top)
* Scrollspy mobile (non-existent) → activated on desktop size (min 2 media query widths)

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
- ![#5C3232](https://placehold.it/15/5C3232/000000?text=+) `#5C3232`
- 70%

- ![#414141](https://placehold.it/15/414141/000000?text=+) `#414141; body text, 75%`

- ![#0D096E](https://placehold.it/15/0D096E/000000?text=+) `#0D096E; button tag purple, 64%`

- ![#CFDBD5](https://placehold.it/15/CFDBD5/000000?text=+) `#CFDBD5; light green`

- ![#E8EDDF](https://placehold.it/15/E8EDDF/000000?text=+) `#E8EDDF; light platinum`

- ![#F5CB5C](https://placehold.it/15/F5CB5C/000000?text=+) `#F5CB5C; golden canary yellow`

- ![#4C0758](https://placehold.it/15/4C0758/000000?text=+) `#4C0758; main purple, 75% `

- ![#F11E22](https://placehold.it/15/F11E22/000000?text=+) `#F11E22; brilliant red`

* 

### FONTS
* H1
* H2
* H3 
* Sans-serif Contenders: 
  * Lato ,Helvetica Neue,sans-serif

### CHARACTER CARDS
* Hover
* Overlay:
* Font: 

### BUTTONS
* 

### ACCENTS
* Links (a):
* Highlight text:
 * Scrollspy glow:


## BODY CONTENT LIST
* Content Source: 
  * https://marvel.fandom.com/wiki/Marvel_Database
  * https://www.marvel.com/characters - official site, very beefy images with neat animations

### HEADER
* Navbar
* Marvel Logo
* TITLE
* Social icons?

### MAIN
* Intro (TITLE: TOP 8 HEROES & VILLAINS)
* “Paragraph intro”
* Quote 
* 8 Photo Grid of Characters

#### HEROES (believes in greater Good for ALL of )
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
  * Thanos (multiple movies)
    * [IMG] slideshow
      * PULL BLOCKQUOTE (define persona)
    * Short Bio (About)
    * Ethos/Values
    * Appearances (movies)
* Magneto (X-Men)
  * [IMG] slideshow
    * PULL BLOCKQUOTE (define persona)
  * Short Bio (About)
  * Ethos/Values
  * Appearances (movies)
* Killmonger (Black Panther)
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

#### BONUS CONTENT (loaded at the bottom): Supporting Crew
* Shuri
  * [IMG] slideshow
  * PULL BLOCKQUOTE (define persona)
  * BIO (engineer from black panther)
* Darcy
  * [IMG] slideshow
  * PULL BLOCKQUOTE (define persona)
  * BIO (Jane’s quirky friend from Thor)
* Maria Hill 
  * [IMG] slideshow
  * PULL BLOCKQUOTE (define persona)
  * BIO (Badass S.H.I.E.L.D. agent)


### FOOTER 1: RELATED ARTICLES GRID?
* Cf. commarts site. “Related articles” div is nested within the article element (article content)

### BOTTOM FOOTER: SITE MAP
* About
* Terms of use
* Privacy policy
* Copyright 
* *could also be sticky/fixed to the side of the page to make room for infinite scrolling

# Karina Finegan Online CV/Portfolio

## Code Institute - First Milestone Project: *User Centric Frontend Development.*

This static website is being developed to showcase *Karina Finegan's* resume in an efficient and appealing online format.

---
## UX

- Target users are two-fold: Employers & Recruiters.
- Targeted much the same way. Except perhaps recruiters are less interested in site content and more interested in having a CV to download and take-away.
- Employers are more likely to want to browse the online resume and connected accounts.

### User Stories

#### Tech Recruiters

* I have many clients who are looking for developers. I'd like to be able to quickly browse an online resume to get a sense of whether or not this particular developer might be a good fit for any of my clients.

* As a tech recruiter I'm not 100% sure what languages or tools my client requires, so I would like the ability to download a detailed CV that clearly stipulates all skills. 

#### Employers

* As an employer looking for a new full stack developer to join my team, I find online resumes incredibly useful to get a broad sense of someone's capabilities. 

* I might then download a more detailed CV before deciding whether to call that candidate for interview.

* As an employer looking for a new front end developer, I am heartened to see the online resumes of potential candidates because it is an instant assurance that they know how to design and build a website. 

#### Applicable to both target users

* As a user I would like to view this candidate's work history.

* As a user I would like to know what languages this candidate is able to work in.

* As a user I would like to see other projects this candidate has developed.


### Strategy
The focus for this project was to create a professional and slick online CV for Karina Finegan, that was carefully balanced between usability and design. The pull towards style over structure is strong in anyone with a design background and because this website is geared towards a number of differnt kinds of employers (not just front end) it is important to reign in any gallop towards flamboyant untethered design. 

Essentially the website must demonstate good design principles and use of colour, but its primary goal is to *communicate* information about Karina to potential employers. In order for that communication to be effective, the site needs to be structured well and easily accessible.

The content must be relevant to the user stories and in particular it should steer clear of too much non-essential personal information. 

### Scope
The project had a clearly defined scope from its inception, as there is a clearly defined framework for CVs and the goal was to place that online: 

Information about Karina, her education and employment history, her skillset, projects she has worked on and a way to contact her. 

### Structure
As the site is not overly complicated, it will feature a fixed navigation that connects the user to each of the sections on one long scrolling page. 

The sections are as follows:

* Home/Index (landing page)
* Work History
* Skills   
* Selected Projects 
* Contact 

In addition to these main pages, there is the ability to download a tradition CV in .pdf format.

There is also the option of downloading particular project design files.


### Skeleton

### Surface

#### Colour Palette
The colour palette chosen for this project was primarily dark toned with an almost fluorescent green/yellow accent colour. 

#### Typography
I wanted to use only sans-serif fonts to enhance the minimalist bold style I've gone with. 


## Features

* Navigation Bar - Fixed Bootstrap Navbar.

* Home / Index Page

* Short Bio

* Work History

    An interactive timeline of my work history to date. To make hovering over the items easier for the user, I increased the width of the icon space and as the Font Awesome icons are fonts, the increase in width just enabled
     me to increase the hover zone without affecting the size of the icon itself. I had to adjust this for smaller screens because it was too difficult then to click away from the "modal" timeline information.

* Skills

    This page features a list of skills that enhance and add to my employability as a professional web developer. As the page is heavy on content, I have made it more accessible by demarcating the various skills into categories and 
    further subdividing them into boxes which I think enables the design to flow smoothly and displays the information in a way that is easy to read. I've incorporated a more graphical visual in the form of the progress bar graph which 
    currently displays more aspirational than factual progress results, but I will update these to reflect my actual progress before I send this website to potential employers. 

* Selected Projects

* Contact Page

* Footer

    * I made the choice to include both my social navigation and my main navigation in the footer as well as via the main nav-bar. 
    I am aware that this might be considered somewhat redundant given that my main navbar is fixed and easily accessible from the footer area, however 
    I persisted with this decision, because on small screens and medium screens up to 992px, the main navigation is hidden behind the hamburger icon and the upper social media links are 
    quite small, thus easily ignored. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ultimately I didn't think the downside of redundancy outweighed the positives of potentially reminding a user to connect with me on social media, or have another look at part of my website.
    I included both of these CTAs as titles over the footer navigation. I did however remove the main navigation links from the footer on screens above 992px as at this size the navbar is completely visible.

## Accessibility

* My original design had far more dark on dark toned elements, which I love the look of, but after having checked the site and colour themes using the Web Disability Simulator,
I realised my colour choices were problematic for a subsection of potential users. So I chose to use more of the light grey and yellow tones for text elements.

* I had initially changed the inputs on my contact form so that when a user clicks into an input to type, the placeholder would disappear, as below: <br>
<input type="text" placeholder="Name:" required onfocus="this.placeholder=''" onblur="this.placeholder='Name:'"><br><br>
I wrote it like this because I personally find it off-putting to type over something already written. However, I then researched placeholder functionality online and found that this was not acceptable HTML standard. 
in terms of usability. So I changed it back to the following: <br>
<input type="text" placeholder="Name:" required><br><br>
Which I personally find annoying, but the consensus is that this way is more user-friendly, especially when not including form labels, which I have chosen to omit for design reasons.

* After running my site through web.dev I found that I need to add aria-labels to my form inputs and button, for SEO, screen-readers & accessibility. 


## Future Features to Implement

* I plan to turn this website into a dynamic site, whereby specific project pages are generated dynamically after inputting certain key variables. Title, goal, colour palette, images etc... (Example in wireframe).

* I plan to implement the sequential loading of elements on scroll. So as the user scrolls down elements pop into view.

* I plan to password protect my downloadable traditional CV, as I don't want all my personal details to be readily available online. Once I've instituted that feature I will upload my actual CV as opposed to the dummy one that is currently there.

## Issues / Room for Improvement

* *Flickering Effect*: There can be a slight flickering effect, when the work history timeline is viewed on very small Desktop / non-touch screens. It has something to do with moving the mouse when hovering over the icon. One fix is to make the 
hover area even larger, but the issue with that is that it becomes difficult for the user to leave the timeline information "modal" (it's not really a modal). I am ok with this situation persisting for the time being, because it does not 
break anything and it is very unlikely that users will view the timeline on a desktop with such a small screen, given the resolution of most laptops. The user would have to resize the browser to be very small for this issue to occur. That behaviour
is unlikely. Finally, as hover is not available on mobile, this bug does not occur on devices. 

* *Unused CSS*: As per web-dev Measure results I tested my CSS via Chrome dev tools' "Coverage" tool and found that there was a substantial amount of unused CSS.
For this particular site, the load time is quite fast, so I don't think this is a massive issue, but there is definitely scope for reducing the size of the Bootstrap and Font Awesome libraries.

## Tools & Other Resources Used & Perused
Here are the additional tools and resources I used during all stages of this project: 

### **[Figma](https://www.figma.com/)**

My project planning, wireframes initial colour palette & typography testing were all done using Figma.

### **[Adobe Photoshop](https://www.adobe.com/ie/products/photoshopfamily.html)**

Editing and colour correction for the images was done using Adobe Photoshop.

### **[Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)**

Used a LOT for testing CSS and shaping the jQuery code to work for my project.

### **[Google Fonts](https://fonts.google.com/)**

Both the fonts I've included are Google Fonts: Lato & Roboto.

### **[Font Awesome](https://fontawesome.com/)** 

All the awesome icons used are from Font Awesome.

### **[W3 CSS Validator](https://jigsaw.w3.org/css-validator/)** & **[ W3 HTML Validator](https://validator.w3.org/)**

### **[W3C Editor's Draft](https://drafts.csswg.org/mediaqueries-4/#hover)** 
Great information on using :hover media queries.

### **[CSS Tricks](https://css-tricks.com/)**
Specifically their pages on:

* [Box Shadows](https://css-tricks.com/almanac/properties/b/box-shadow/https://css-tricks.com/almanac/properties/b/box-shadow/)
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [TextArea](https://css-tricks.com/textarea-tricks/)
* [Unused CSS](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/)

### **[freeCodeCamp](https://www.freecodecamp.org/)**
Specifically [This article](https://www.freecodecamp.org/news/time-saving-css-techniques-to-create-responsive-images-ebb1e84f90d5/) about all the ways to create responsive images. 

### **[Web Disability Simulator - Chrome Extension](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla?hl=en)**
Used this to check my design and page layout for accesibility concerns. 

### **[Unsplash](https://unsplash.com/)**
Specifically:<br>
* <span>Photo by <a href="https://unsplash.com/@bekirdonmeez?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Bekir Dönmez</a> on <a href="https://unsplash.com/s/photos/acupuncture?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
* <span>Photo by <a href="https://unsplash.com/@lougoetzmann?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lou Goetzmann</a> on <a href="https://unsplash.com/s/photos/ireland-history?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

### **[jQuery Documentation](https://api.jquery.com/)**

### **[Autoprefixer - CSS](https://autoprefixer.github.io/)**
Amazing tool that adds all the browser prefixs automatically.

### **[Can I Use?](https://caniuse.com/)**
Checks web development features for browser compatibility. 

### **[dirtyMarkup by 10 Best Design](https://www.10bestdesign.com/dirtymarkup/)**
HTML, CSS, JS & API code formatter. Super useful resource thanks to Richard Read (Readri205 @ Code Institute) for the link. 

### **[Google's Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
Useful reference for formatting/style information.

### **[Google's Web.Dev Measure](https://web.dev/measure/?gclid=EAIaIQobChMIk-icrKKb6wIVQeztCh2zaAQFEAAYASAAEgKVJfD_BwE)
Useful for testing various site performance and user experience markers.  

---

## Technology Used

* HTML5

* CSS3

* Bootstrap

* jQuery

* GitHub

* GitPod

* Git 


## Testing 

1. web.dev Measure was amazing for checking a range of different measures of page performance, accessibility, vulnerabilities and best practices. 
    * I went through the list a few times and changed/altered elements on my page to try and improve those markers of performance that I could.

    * I altered my code so that my headings descended sequentially. Initially I had skipped from h1s to h4s in a number of sections. 
    * I added rel="noopener" to my target="_blank"'s as per their recommendation.
    * I used Chrome's development tools' "Coverage" tab to see how much unused CSS I had, but then chose to leave it for the time being as it does not impact substantially 
    on page load time, although for larger projects it is definitely something worth considering re: external libraries. 
    * I added a meta description. 

## Attribution

#### [Will Chow's jQuery Code.](https://jsfiddle.net/wilchow/4hzenxkh/) 
The jQuery code I used and altered to display the Work History Timeline information on hover/click.  

#### [@dynamyc-2's jQuery code](https://css-tricks.com/forums/topic/jquery-window-width-condition/)
I used and altered the first line from this user's question on CSS Tricks.

#### [MatuDuke's Code from Stack Overflow](https://stackoverflow.com/questions/9707021/how-do-i-auto-hide-placeholder-text-upon-focus-using-css-or-jquery/9707068#9707068)
I used this user's answer (2nd from the top) to hide the placeholder text in my contact form when the user clicks to type something, as I think it's off-putting when the placeholder 
text remains until you actually type.

#### [Mitra's Code from Stack Overflow](https://stackoverflow.com/questions/50668594/remove-border-color-for-navbar-toggler-hamburger-icon-bootstrap-4)
I used this user's answer (2nd from top) to change the colour of my bootstrap hamburger icon when active or focus states were triggered. 

### [Pete TNT's Code from Stack Overflow](https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working)
I used and altered this code to make my Bootstrap navbar work the way it should regarding the active class.

### [Nozzleman's Code from Stack Overflow](https://stackoverflow.com/questions/23764863/how-to-close-an-open-collapsed-navbar-when-clicking-outside-of-the-navbar-elemen)
I used and altered this code to make the navbar close when a user clicks away from it on mobile devices. The Bootstrap default is that you have to click on the hamburger icon to 
close the navigation, and I would questions how user-friendly this is. In addition, the Bootstrap default behaviour is that even when a user clicks on a navigation link, the navigation
stays open and they have to click the icon to close it. I think this code improves upon the default behaviour. 

## Acknowledgements

Thank you to my Code Institute mentor Oluwafemi Medale. 





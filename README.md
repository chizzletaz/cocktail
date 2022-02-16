# Cocktail 
This cocktail website is a project to practice and enhance my API skills and Javascript skills.
The idea was to use some of the endpoints given by [TheCocktailDB API](https://www.thecocktaildb.com/api.php)

A link to the live website can be found [here](https://chizzletaz.github.io/cocktail/)

Due to the fact this is a practice project, I've kept the README.md file to a minimum.

# UX
## **Strategic level**
The website is for people who want to look up how to make cocktails or to get inspiration for making a cocktail.

### **user stories**
**first time users:**  
- As a first time user, I want to navigate easily across the website.  
- As a first time user, I want to search cocktails by name or ingredient. 
- As a user, I want to filter the cocktails by ingredient or category.
- As a user, I want to have clear steps on how to make the cocktail.
- As a user, I want to see what the finished cocktail looks like.
- As a user, I want to get a random cocktail.

**website owner stories:**
- As a developer I want my users to be able to use my website on all devices.

## **Scope level**
 
**Requirements:**
1. Have a responsive design.
2. A name and ingredient search option. 
3. An letter and category filter option.
4. An individual page for each cocktail with clear preparation steps.
5. Display of a preview image of the cocktail. 
6. Option to generate a random cocktail.

## **Structure Level**  
During the design and development, I worked out the following ideas.

The overall look is kept the same for consistency:   
- The colours are kept the same on each page.
- The buttons are styled in a similar way.

The navigation is kept simple:   
- There are buttons to navigate the site, buttons navigate to other pages like the landing/home page. 

The user is given feedback, in order to enhance a pleasant user experience:  
- This translates to visual feedback during certain actions (like focusing on, clicking on or hovering over buttons or links).

All the information should be easily visible:
- Visual aids are used, like icons and complementary colours.


The website will have 6 pages:  
A landing page, an individual cocktail page, a page to filter by letter, a page to filter by category,
a page to search by name and a page to search by ingredient.

Each page will have the same header with a navigation bar to go to the desired filter or search option.

**The landing page**  
displays a random cocktail and has a button to get another random cocktail. 

**The individual cocktail page**  
displays information on the cocktail, like a preview image, ingredients, preparation
steps, etc.

**The filter by letter page**  
displays the letters of the alphabet (except u and v, since there are no cocktails starting with these letters).
When the user clicks a letter, all the available cocktails starting with that letter are displayed below.

**The filter by category page**  
dislays all the available categories. 
When a user clicks a category, all the available cocktails starting in that category are displayed below.

**The search by name page**  
has a searchbar where the user can search by cocktail name.
All cocktails that contain the queried word are displayed below.

**The search by ingredient page**  
has a searchbar where the user can search by ingredient name.
All cocktails that contain the queried ingredient are displayed below.


## **Skeleton Level**

I've opted to not use wireframes for this project, since I was more focused on the functionality.
The layout has been designed during coding and most style decisions have been made by eye.

## **Service Level**
I wanted to keep the overall look minimalistic and dark.

**Colors**  
For the background I've chosen a wooden background, which fits a bar style.
For the accent colour, I have chosen a copper colour #b87333 ![#b87333](https://via.placeholder.com/15/b87333/000000?text=+)
![#8c3a16](https://via.placeholder.com/15/8c3a16/000000?text=+) #8c3a16 as a darker tone of the accent colour.
To avoid a too bright white, I've used ![#f1f1f1](https://via.placeholder.com/15/f1f1f1/000000?text=+) #f1f1f1 as the white colour for the main text.

**Fonts**  
For the title and headers Poppins was used.
For the body text Bree was used.
For the title of the website Alfa Slab One has been used.

## **Technologies used**

**languages used**  
- [HTML5](https://en.wikipedia.org/wiki/HTML) for markup  
- [CSS](https://en.wikipedia.org/wiki/CSS) for styling
- [Javascript](https://en.wikipedia.org/wiki/JavaScript) for interactivity

**Frameworks, libraries and programmes used**   
- [Bootstrap 5.1.3](https://getbootstrap.com/) was used for precoded code-snippets, like navigation bar and to help with the responsiveness of the website.   	
- [Git](https://git-scm.com/) was used version control.  
- [GitHub](https://github.com/) for storing and deploying the website.  
- [VSCode](https://code.visualstudio.com/) for coding the website(IDE).
- [Google fonts](https://fonts.google.com/) for the fonts used in the website.  
- [Font Awesome](https://fontawesome.com/) for the icons used on the website.    
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
was used to debug and checking/testing the website.

# **Testing**

## Code validation
[W3C Markup Validation Service](https://validator.w3.org/) is used to check for markup validity of the web document.
Running the code through the validator gives:  

### For categories.html:  
- No errors or warnings to show.

### For cocktail.html:  
- No errors or warnings to show.

### For index.html:  
- No errors or warnings to show.

### For ingredient.html:  
- No errors or warnings to show.

### For letter.html:  
- No errors or warnings to show.

### For name.html:  
- No errors or warnings to show.

---
[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) is used to check the CSS of the web document.
Running the code through the validator gives:
### For cocktail.css:
- No errors are found. 

### For style.css:
- No errors are found. 

---
[JSHint](https://jshint.com/) is used to check the validity of the Javascript of the web document.    
Running the code through the validator gives:
### For category.js:
- No errors, just some warnings about semi-colons. 

### For cocktail.js:  
- No errors, just some warnings about semi-colons. 

### For ingredient.js:  
- No errors, just some warnings about semi-colons. 

### For letter.js:  
- No errors, just some warnings about semi-colons. 

### For name.js:  
- No errors, just some warnings about semi-colons. 

### For style.js:  
- No errors, just some warnings about semi-colons. 


---
## Testing browser compatibility
I've tested the site on Safari, Chrome and Mozilla Firefox.
The testing was done by checking all elements, functionalities and links.
No issues arose during testing.

## **Deployment**

To deploy this website to GitHub, I followed the these steps:

1. Go to GitHub.com and on the left side click on the repository:chizzletaz/cocktail.
2. In the repository click on the ‘Settings’-tab at the top.
3. On the lefthand side click on ‘Pages’.
4. Under ‘Source’ you see the word ‘None’ with a dropdown menu: select ‘master branch’.
5. Click ‘Save’, this will give you a URL of the website (see above ‘Source’).

Local Clone:
1. Go to GitHub.com and on the left side click on the repository.
2. Click on the ‘Code’ button.
3. To clone using HTTPS, copy the link that is displayed.
4. Open a terminal in your preferred IDE (e.g. Atom)
5. Use  the ‘git clone’ command and add the link that you copied in step 3.  For Atom: Toggle command palette (cmd-shift-p (macOS) or shift-p (Linux/Windows) and search ‘git clone’: Add the link and 
6. A clone will be created locally.

For more info on how to clone a repository check [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

# **Credits**
### Content
[TheCocktailDB API](https://www.thecocktaildb.com/api.php) has been used as the API for getting the content and the images of the cocktails.


# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./design/tip-calculator(1).png)
![](./design/tip-calculator(2).png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
@import url(./essentialStyles.css);
@import url(./JS-classes.css);

```
```js
tipButtons.forEach(tipBtn => {
  var percentage = parseFloat(tipBtn.innerText.slice(0,-1))
  console.log(percentage)

  tipBtn.addEventListener('click', () => {
    remove_tipBtnClass()
    tipBtn.classList.add('active')
    resetButton.classList.add('active')

    calculatResult(percentage)
  })
})
```

### Continued development
I'm continuing with UI / UX design and Mastering JavaScript


## Author

- Website - [Ogwang Gift Gideon](https://https://github.com/Gito125)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Gito125)
- Twitter - [@yourusername](https://www.twitter.com/Gito)

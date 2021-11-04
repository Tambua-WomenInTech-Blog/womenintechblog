---
title: Gettting Started with React
author: Valary Uhuru
date: 2021-11-04
hero: ./images/image.png
excerpt: This blog post shows step by step guidelines on how to Get started with React and Resources to use to help one get in track.
---


I can almost bet on it that you've fallen in love with JavaScript and want to dive deeper into learning some of it's libaries and frameworks. Well if that's the case then this is the place to be. This guide will walk you through everything you need to know to get started with React.

We'll get set up, explain the how's and why's behind the basic concepts and build a small project that displays data from an API. I am assuming that we have a little knowledge of JavaScript core concepts such as Asychronous programing, Promises, Hoisting, ES6 Syntax etc. If not visit here [<span style="color:blue"> **JavaScript Concepts That Every Developer Must Know** </span>]( https://www.geeksforgeeks.org/7-javascript-concepts-that-every-developer-must-know/) to learn more.

Grab a drink, buckle up and let's get started!

### Sections


[Prerequisites]()
[Basic JavaScript]()
[Basic HTML]()
[Development Environment]()
[Creating a React App]()
[Exploring Create React App]()
[Our First Component]()
[JSX]()
[How a Component Gets Rendered]()
[Let's Display Data Fetched From an API]()


## Prerequisites


You don't need to have any prior knowldge of React before reading this article, you however need to be familiar with a few things in order to get the most out of this guide.

#### Basic JavaScript


React is a JS library so it makes sense to know JavaSript before learning React right? Worry less, you __don't__ need to know Javscript extensively to learn React Js, just the basics.Here's a list of some of the concepts you should be familiar with before learning React.
- Variables, functions and Data Types
- Asychronous Programming
- Arrays and Objects
- ES6 features and syntax
- DOM Manupulation

#### Basic HTML

In React we use JSX, which we will dive into later. But for now have a good grasp of HTML preferably HTML5.

- How to structure HTML elements.
- HTML attributes such as class, id, onclick, href etc

## Development Environment

The first thing we do before interacting with any programming language is to set up it's developemt environment, React JS is no different.
If you have **Node JS** and **Visual Studio Code** (or your preffered IDE) set up you can skip this section.

#### Node JS

Do I really need node to set up a React app? The answer is no. If you are a web developer that can handle HTML/CSS and JavaSCript you can try React without Node JS or any other complext tool to manage it. That's your assignment.

In our case we need Node js. To download it visit [<span style="color:blue">**this link**</span>]( https://nodejs.org/en/download/ ) and choose one that fit's your machine.

When the installation is complete, open your terminal and type 
 > node -v 

This should show you the version of node that you have installed.
The output should look something like:
 > v16.7.0

Hurrraaaaaayy!!! Congratulations! You have completed the first step to getting started with React.


#### Visual Studio Code

VSC is a popular Open Source IDE for frontend development. There's a bunch of IDEs that you can try depending on your preference. For now we will run with Visual Studio Code.

Click [<span style="color:blue">**this link**</span>]( https://code.visualstudio.com/download ) to download the version that suits your platform.
That's enough development set up for now.


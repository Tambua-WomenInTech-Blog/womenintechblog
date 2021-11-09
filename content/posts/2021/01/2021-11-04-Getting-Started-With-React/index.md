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


## Creating a React App

The next step is now creating a React app. Thank God for the folks at Facebook who made it easy for us to do that.
All we to do is run this command in our terminal.

 > npx create-react-app my-app

This craetes a React project called my-app.
![Output on the terminal](./images/vscode.png)

Realize we've been directed on how to start our app
 > cd my-app
 > yarn start


 Run this commands on your terminal, this will start a development server and open a web browser for you.
 ![Web browser](./images/react-app.png)

 You;ve just set up your first React app, if you want to know more about what happens in the background visit this link [Create React App}(https://github.com/facebook/create-react-app)


## Exploring Create React App

After running  ``npx create-react-app yourApp``, you will find your app root has three folders, ``node_modules/``, ``public/``, ``src/`` and three files ``.gitignore``, ``package.json``, ``README.md`` and ``yarn.lock``.

### Running create-react-app

Let's break down what you just did. The first line in the output is from ``npx`` . There are two things `npx` can do when you give it the command. It first looks in your local machine for the package to run it. If it doesn't find one, it starts looking for ``npm``'s package list. The first message in the output is just letting you know that it handled getting it.

Next inside ``create-react-app``, your command runs through a series of checks. It finds information about your system, looks for any flags attached and whether you specified a folder to output. Then the actual ``createApp`` function runs. This checks if the directory you choose is a safe one. It does this by looking for log files, if it fails any of this checks you will receive an error message.

Next it begins to form a ``package.json`` file with the default values ``name: yourAppName``, ``version: 0.1.0`` and ``private: true``. This is written to the directory you specified. Here it determines if it should use ``yarn`` or ``npm`` based on what you have in your machine. A series of checks are run on the version of ``npm/yarn``, ``node version`` to select the correct version of ``react-scripts`` to use.

The next function is called ``run()`` . This continues the installation. Right now the only output you've seen so far is is the npx line  "Creating a react app in <YourDirectory>". The dependency list is created. By default this icludes ``react``, ``react-dom`` and the version of ``react-scripts`` either from the internet if you are online or the local cache if you are not.

This is where you get the line ``installing react, react-dom and react scripts``. The first thing it does is check if there's ``package.json`` file and ``yarn.lock``. It loads ``package.json`` file into a variable called ``appPackage`` in JSON format. It checks if TypeScript is a dependency after it does this. Next it begins adding to the JSON.

First is the scripts, this will probably be familiar as ``start``, ``build``, ``eject`` and ``test``. These are located in init.js file that we are currently going through. Next is the eslintConfig and defaultBrowsers. These are by default `>0.2%','not dead', 'not ie <= 11','not op_mini all'. Basically this means target all browsers that are higher than .2% market share, in active use, not below IE 11 or Opera Mini.This is a seperate package located in ``package.json``. You can find it  [<span> Here </span>](https://www.npmjs.com/package/browserslist).

The ``package.json`` file is written out and will not be changed again. At this point there's no output yet, a ``README.md`` file is checked and if it exists it is renamed. The files specified in the template folder are then copied to a working directory. This is the ``public``, ``README.me``, ``src`` and ``gitignore``. ``gitignore`` is copied without the ``.`` infront then renamed, this is to prevent an npm bug.

After a check to see if React is installed, it moves to check if the repository has been initialized with git. These runs git init, and adds the first commit. This is where the line ``Initialized a git repository`` comes from.

The last thing init.js does before ending the process is print the success message and instructions. These introduce you to basic ``react scripts`` commands and suggest you cd into your app directory to run your application.




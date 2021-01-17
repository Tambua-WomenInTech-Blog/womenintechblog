---
title: How to add a blog
author: Arthur Kennedy
date: 2021-01-17
hero: ./images/hero.jpg
excerpt: This blog post details the step by step guidelines on how to add a new blog.
---

# Clone

If you are working on this project for the first time follow the below steps.

Make a fork of the project from [https://github.com/Tambua-WomenInTech-Blog/womenintechblog/fork/](https://github.com/Tambua-WomenInTech-Blog/womenintechblog/fork/). Next, clone the project into an empty directory. 

```bash 
git clone https://github.com/<YOUR-USERNAME>/womenintechblog && cd womenintechblog

# git clone https://github.com/nerd/womenintechblog && cd womenintechblog
``` 

# Branch 

Switch to a branch that is named in the following manner 

```bash 
git checkout -b blog/<your-git-username>/<blog-name> 

# example git checkout -b blog/nerd/rust 
```

# Packages 

Install packages by running  

```bash 
yarn install 

# or 

npm install
``` 

# Create Blog

Blogs are added inside the `content/posts` folder.

Each blog needs to reside inside the directory structure as shown below. Your new blog should reside inside a folder named `year-month-day-blog-title`.

```text
/
|-- /.cache
|-- /admin
|-- /node_modules
|-- /content
    |-- /authors/authors
    |-- /posts
        |-- /year
            |-- /month
                |-- /year-month-date-blog-title
                    |-- /images
                        |-- hero.jpg
                        |-- blog.png
                    |-- index.md
|-- /public
|-- /src
|-- /static
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- gatsby-browser.js
``` 

Inside this folder, add an `images` folder (to store all images for your blog including your blog hero image) and an `index.md` file where your blog content goes. 

## Blog frontmatter 

Your blog should have the following contents in its frontmatter. 

```markdown 
---
title: Your Blog Title
author: Your name as it appears in the authors.yml file
date: YEAR-MONTH-DAY
hero: ./images/hero.jpg
excerpt: Some excerpt about your blog.
---
``` 

# Author Info 

Each author needs to have their info inside the `content/authors/authors` folder and their avatars inside the `avatars/<your-name>` folder.

```text
/
|-- /.cache
|-- /admin
|-- /node_modules
|-- /content
    |-- /authors
        |-- /authors
            |-- /avatars
                |-- /your-name
                    |-- your-avatar.png
            |-- your-name.yml
    |-- /posts
|-- /public
|-- /src
|-- /static
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- gatsby-browser.js
``` 

Inside `your-name.yml` add the contents as follows.

```yml 
name: Your Name
bio: |
  Your cool bio. 
avatar: ./avatars/your-name/your-avatar.png
social:
  - url: https://a.link.to/twitter/or/github/or/linkedin
``` 

Ensure to have added your avatar, and your name must match what you have in your blog post.  

**The Admin can make you a featured author by adding the following lines under your bio**

```yml 
featured: true
```


# Preview 

To preview your content, run the below command and open [http://localhost:8000](http://localhost:8000).

```bash
yarn run dev 

# or 
npm run dev

# then clean the build by running 

yarn run clean

# or

npm run clean
``` 

# Publishing 

To publish your changes, stage, commit and push the repo upstream. 

```bash 
git add .

git commit -m "a message about your changes, example added rust beginner blog"

git push origin blog/nerd/rust
```

## Send a Pull Request 

From Github, switch to your branch and send a pull request and await your PR to be merged. 


## Making changes 

To make changes to your blog or Bio follow the below steps: 

- Clone the repo from [https://github.com/Tambua-WomenInTech-Blog/womenintechblog.git](https://github.com/Tambua-WomenInTech-Blog/womenintechblog.git). 
- Create a branch in the form `edit/<username>/<blog-name>`. 
- Make your changes and commit.
- Push the changes upstream and send a pull request

```bash 
git clone https://github.com/Tambua-WomenInTech-Blog/womenintechblog.git 

git checkout -b edit/nerd/rust

# make changes

git add . && git commit -m "state chages made"

git push origin edit/nerd/rust
```
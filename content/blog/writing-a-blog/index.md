---
title: "Writing a Blog"
date: 2021-01-17T12:47:55+03:00
image: "images/hero/arthur-ken/writing-a-blog/hero.jpeg"
summary: "This post details the step by step guidelines on how to add a new blog."
author: "Arthur Ken"
categories: ["Blogging"]
tags: ["Hugo"]
draft: false
---

## Clone

If you are working on this project for the first time follow the below steps.

Make a fork of the project from [https://github.com/Tambua-WomenInTech-Blog/womenintechblog/fork/](https://github.com/Tambua-WomenInTech-Blog/womenintechblog/fork/). Next, clone the project into an empty directory. 

```bash 
git clone --recurse-submodules -j8 https://github.com/<YOUR-USERNAME>/womenintechblog.git && cd womenintechblog
# git clone --recurse-submodules -j8 https://github.com/nerd/womenintechblog && cd womenintechblog
``` 

## Update Submodules 

You need to also clone the submodules into your working directory as these contain the themes for the website.
To do so, run the command below

```bash
git submodule update --remote --merge
```

## Branch 

Switch to a branch that is named in the following manner 

```bash 
git checkout -b blog/<your-git-username>/<blog-name> 
# example git checkout -b blog/nerd/rust 
```


## Before you start

Follow the `README` guide found at the root of the project to set your development environment.

## Create Blog

To add a new blog, run the command below inside your terminal
```sh
hugo new --kind blog blog/your-blog-title
```

Each blog will be inside the directory structure as shown below. Your new blog will reside inside a folder named `blog-title`.

```text
/
|-- /.github
|-- /archetypes
|-- /assests
|-- /content
    |-- /author
    |-- /blog
        |--/blog-title
            |--/blog-title
                |--/images
                |-- index.md
|-- /layouts
|-- /static
|-- /themes
|-- config.toml
|-- README.md
``` 

Inside this folder, add your blog images inside the `images` folder.The `index.md` file where your blog content goes.Ensure to add your blog hero image inside `assets/images/hero/firstname-lastname/blog-title` folder.

> Adding hero inside the assets folder and not inside your blog post folder is due to how this particular Hugo theme processes  static content data, if this is not followed, the hero image does not render on the home page.

### Blog frontmatter 

Your blog should have the following contents in its frontmatter. 

```markdown 
---
title: Your Blog Title
date: Auto-generated DO NOT EDIT
image: ./images/hero/hero.jpg
summary: A short summary about your blog.
author: "Your Name"
categories: ["Golang"]
tags: ["Channels", "Mutexes"]
draft: true
---
``` 

Edit the `Tags` and `Categories` as required. As a rule of thumb, say you were blogging about a concept such as `Triggers` in `PostgreSQL`, your categories could be `PostgreSQL` and tags could be `Triggers`. 

## Author Info 

### Create new Author

To create a new author run the follwowing command in your terminal of choice

```sh
hugo new author/firstname-lastname.md
```

Each author will have their info inside the `content/author/<firstname-lastname>.md` file and their avatars _**will have to be added**_ inside the `static/images/avatars/<firstname-lastname>` folder, the image size should be cropped to `512 pixels x 512 pixels`

```text
/
|-- /.github
|-- /archetypes
|-- /assets
|-- /content
    |--/author/
            |--/firstname-lastname.md
    |--/blog
|-- /layouts
|-- /static
    |--/images/avatars
            |--/firstname-lastname/
                |--/firstname-lastname.png
|-- /themes
|-- config.toml
|-- README.md
``` 

Inside `content/authors/<firstname-lastname>/index.md` add the contents as follows.


```markdown 
---
title: FirstName LastName
image: /images/avatars/<firstname-lastname>/<first-name-lastname>.png
social:
  - icon: "la-github"
    link: https://github.com
---
Something very cool about yourself. Feel free to write a longer bio.
``` 

You can also add mopre social links, get icons from [line awesome](https://icons8.com/line-awesome). 
For example
```markadown
//..
social:
    - icon: "la-discord"
      link: https://discord.gg/test  
```

**Ensure to have added your avatar, and your name must match what you have in your blog post.**   


~~**The Admin can make you a featured author by adding the following lines under your bio**~~
 

## Preview 

To preview your content, run the below command and open [http://localhost:1313/](http://localhost:1313/).

```bash
hugo server -D
``` 

## Content Tips and Tricks

### Images within the blog 

Use [hugo shortcode](https://gohugo.io/content-management/shortcodes/) for `HTML5 Figure` tag

{{< figure src="./images/test-img.png" title="Test Image Title" >}}


## Publishing 

When ready to publish set `draft` to `false` in you blog.

```markdown
draft: false
```

And remove all `.gitkeep` files from your folders.

Publish your changes, stage, commit and push the repo upstream. 

```bash 
git add .
git commit -m "a message about your changes, example added rust beginner blog"
git push origin blog/nerd/rust
```

### Send a Pull Request 

From Github, switch to your branch and send a pull request and await your PR to be merged. 


### Making changes 

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
---
title: "Writing a Blog"
date: 2022-01-14T12:47:55+03:00
hero: /images/hero/arthur-ken/writing-a-blog/hero.jpeg
excerpt: "This post details the step by step guidelines on how to add a new blog."
authors:
 - Arthur Ken
draft: false
---

# Clone

If you are working on this project for the first time follow the below steps.

Make a fork of the project from [https://github.com/Tambua-WomenInTech-Blog/womenintechblog/fork/](https://github.com/Tambua-WomenInTech-Blog/womenintechblog/fork/). Next, clone the project into an empty directory. 

```bash 
git clone --recurse-submodules -j8 https://github.com/<YOUR-USERNAME>/womenintechblog && cd womenintechblog
# git clone --recurse-submodules -j8 https://github.com/nerd/womenintechblog && cd womenintechblog
``` 

# Branch 

Switch to a branch that is named in the following manner 

```bash 
git checkout -b blog/<your-git-username>/<blog-name> 
# example git checkout -b blog/nerd/rust 
```

# Before you start

Follow the `README` guide found at the root of the project to set your development environment.

# Create Blog

To add a new blog, run the command below inside your terminal
```sh
hugo new --kind blog-post post/your-blog-title
```

Each blog will be inside the directory structure as shown below. Your new blog will reside inside a folder named `blog-title`.

```text
/
|-- /.github
|-- /archetypes
|-- /content
    |-- /authors/authors
    |-- /posts
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

Inside this folder, add your blog images inside the `images` folder.The `index.md` file where your blog content goes.Ensure to add your blog hero image inside `static/images/hero/firstname-lastname/blog-title`.

> Adding hero inside the static folder and not inside your blog post folder is due to how Hugo processes content data, if this is not followed, the hero image does not render on the home page.

## Blog frontmatter 

Your blog should have the following contents in its frontmatter. 

```markdown 
---
title: Your Blog Title
date: Auto-generated DO NOT EDIT
hero: ./images/hero/hero.jpg
excerpt: Some excerpt about your blog.
authors: 
    - Your first and last name
    - If you are collaborating, your co-author's first and last name as they appear inside author's directory
    - Another co-author
draft: true
---
``` 

# Author Info 

## Create new Author

To create a new author run the follwowing command in your terminal of choice

```sh
hugo new --kind author authors/firstname-lastname
```

Each author will have their info inside the `content/authors/<firstname-lastname>` folder and their avatars _**will have to be added**_ inside the `static/images/avatars/<firstname-lastname>` folder, the image size should be cropped to `512 pixels x 512 pixels`

```text
/
|-- /.github
|-- /archetypes
|-- /content
    |--/authors/authors
                |--/firstname-lastname
                    |--/._index.md
    |--/post
|-- /layouts
|-- /static
    |--/images/avatars
            |--/firstname-lastname/
                |--/./firstname-lastname.png
|-- /themes
|-- config.toml
|-- README.md
``` 

Inside `content/authors/<firstname-lastname>/_.index.md` add the contents as follows.


```markdown 
---
title: FirstName LastName
bio: |
  Something very cool about yourself.
  Feel free to write a longer bio.
avatar: /images/avatars/<firstname-lastname>/<first-name-lastname>.png
featured: false
social:
  - title: github
    url: https://github.com
---
``` 

Ensure to have added your avatar, and your name must match what you have in your blog post.  

**The Admin can make you a featured author by adding the following lines under your bio**

```markdown 
featured: true
```


# Preview 

To preview your content, run the below command and open [http://localhost:1313/](http://localhost:1313/).

```bash
hugo server -D
``` 

# Publishing 

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
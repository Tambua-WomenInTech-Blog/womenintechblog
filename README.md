# WomenInTech Blog

![cover](https://user-images.githubusercontent.com/39112051/113208193-2e934180-927a-11eb-8346-8d8721e65a23.png)


A WomenInTech OpenSource Blog site. Allows various authors to put down their thoughts into writing
regarding variety of topics including technical writing, personal tech journey and non-technical topics within tech field.


# Contributing to the Blog

To contribute to the Blog, follow the step by step guide stated in this article to aid https://tambua-womenintech-blog.github.io/womenintechblog/How-to-add-a-blog.


## Install [Hugo](https://gohuogo.io)

### MacOS [Homebrew](https://brew.sh)
```sh
brew install hugo
```

### Windows [Choco](https://chocolatey.org/)
```bat
choco install hugo -confirm
```

### Linux (Example Arch Linux)
```sh
# For other Linux distros, use your distro's package manager otherwise download from https://github.com/gohugoio/hugo/releases 
sudo pacman -S hugo 
```

### BSD etc 
Download from [releases](https://github.com/gohugoio/hugo/releases)


## Develop & Build

Once installed or cloned locally you can begin writing your blog post.

To run and or preview run the command below

```sh
hugo server -D
```

To confirm your changes navigate to
http://localhost:1313/

## Creating Branches

Here are the branch naming conventions:

* A Blog should use : `Blog/your-git-username/title of the blog`  

* To edit an already published Blog, use : `edit/your-git-username/title of the blog`

* A chore should use : `chore/the chore name`

* A feature should use : `feature/the feature name`

* A hotfix should use :  `hotfix/the hotfix name`

## Creating a Pull Request

Pull requests are created from `develop` branch
You have to add atleast one reviewer when creating a pull request, that must be approved by the reviewers first before merging

## Merging a Pull Request

Once a Pull Request has been approved, merge it to the `develop` branch. 
`develop` is the default branch. 
 
---
title: How to make a blog for free with Gatsby and Netlify
date: "2017-11-01T22:12:03.284Z"
path: "/gatsby-blog-on-netlify/"
---

![Gatsby](https://softwareengineeringdaily.com/wp-content/uploads/2017/08/GatsbyJS.png)

You have many options to make a blog with SSG (Static Site Generator).

|SSG|Language / Library|Site|
|---|---|---|
|Jekyll|Ruby|https://jekyllrb.com|
|Hugo|Go|https://gohugo.io|
|Hexo|Node.js|https://hexo.io|
|Gatsby|React + GraphQL|https://www.gatsbyjs.org|

But if you are interested in React and GraphQL and into them, [Gatsby](https://www.gatsbyjs.org) may be the best choice.

This way is super simple, fast, and even for free, but I purchased custom domain from [Amazon Route 53](https://aws.amazon.com/en/route53). If you don't want to spend money, you don't need to buy it. But I highly recommend to get it because it looks more professional and can be identity of you.

# Install Gatsby

Fist of all, install Gatsby

```
npm install -g gatsby
```

and then clone the gatsby starter for blog

```
git clone https://github.com/gatsbyjs/gatsby-starter-blog.git blog
cd blog
npm install
```

You can also use `gatsby new` command, but I recommend `git clone` for keeping updating your gatsby code.
And run it.

```
gatsby develop
```

With browser, go to [http://localhost:8000](http://localhost:8000)
and it supports hot reloading whenever you edit code, so you can see changes in your browser directly.

# Replace origin

Next, you need to change origin to gatsby because you have to assgin it for your github's new repository.

```
git remote rename origin gatsby
```

Make a new repository with your github account on [github](https://github.com/new) site.

```
git remote add origin git@github.com:yourgithubusername/repositoryname.git
git push --set-upstream origin master
```

>If you have any problem when you use git protocol instead of http protocol, refer to [this](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account). Maybe you need SSH Key for git protocol.

```
git push origin master
```

# Netlify

For deploying a static site, basically you have two options. One is **Github Pages** and another is **Netlify**. Normally **Github Pages** is easy and good. But we will use **Netlify** because it has big two pros.

1. Free 1-click SSL for custom domains.
2. Automated build and deploy.

>[You can compare between Github Pages and Netlify](https://www.netlify.com/github-pages-vs-netlify/)

# Netlify Configuration

```
npm install -g netlify-cli
netlify init
```

```
directory to deploy: public
your build command: gatsby build
looking good: Y
github username: yourgithubusername
github password: **********
No site id specified, create new site? Y
```

After a while, you will get netlify blog address like https://xxxxxx.netlify.com. If you don't like random address, you can change it to unique name.

```
netlify update -n newblognamehere
```

Done!! If you want to use custom domain, you can easily replace a domain on Netlify dashboard menu.


Happy blogging and coding !!












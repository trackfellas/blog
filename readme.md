#Readme for blog

This is the readme file for trackfellas blog. It contains all necessary information to install and serve the blog.

###To Do:

- adjustment of feed
- refactoring of some structures

###File Structure

/ root
contains:
config.yml - details about the page setup, structure and its deployment.

/source
contains post folder


/themes/trackfellas
contains:
/sources - images, css, js
config.yml - theme settings
/layouts - layouts and partials

###Deployment

1.		npm install

2.		hexo deploy  (_config.yaml is set to publish to gh-pages at https://github.com/trackfellas/blog.git. For further information see:
 http://hexo.io/docs/deployment.html)

###Writing a blog post

1. Run
		hexo new "Title of new post"
 A new post with asset folder will be created in /source/post

2. Add images and other files to asset folder

3. Add post content in markdown
 For images:
 		{% asset_img filename.jpg %}


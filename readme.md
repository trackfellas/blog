# Readme for blog

This is the readme file for trackfellas blog. It contains all necessary information to install and serve the blog.

## Requirements:

Install Hexo:
```sh
npm install -g hexo
```

## Installation:

```sh
cd /path/to/your/directory
npm install
```

## Access to the website:

```sh
cd /path/to/your/directory
hexo server
# the websiter can then be reached at http://0.0.0.0:4000
```

## Writing a new blog post

```sh
cd /path/to/your/directory
hexo new "Title of new post"
```

1. A new post with asset folder will be created in `/source/post`
2. Add images and other files to `/asset` folder
3. Add post content in markdown. For images: `{% asset_img filename.jpg %}`

### Deployment

```sh
cd /path/to/your/directory
npm install
hexo deploy
```

See: http://hexo.io/docs/deployment.html for more details

### Todo:

- [ ] Adjustment of feed
- [ ] Refactoring of some structures

### File Structure

```
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
```



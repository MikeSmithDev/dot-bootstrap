# dot-bootstrap

## Summary

A minimalist boilerplate Node.js site template based on [doT](http://olado.github.io/doT/index.html) and [bootstrap](http://getbootstrap.com/); to be used to quickly setup a basic website with some basic error handling. It's fast, clean, and simple.

## Usage

Clone this project
`git clone https://github.com/MikeSmithDev/dot-bootstrap.git`

Enter the working directory and install the packages
`npm install`

Run the site
`node app`

That's it. Your site should be running at `http://localhost:5250/`.

## Customize

All the template files (*.def) are in the `app/views` folder. The .def files are regular html files with some doT syntax in it for the variable information.

### layout.def

The main site template. All pages inherit this template (you can add additional site templates if you wish). It's primarily html with a little bit of doT syntax ( `{{ the code in brackets }}`). Bootstrap and jQuery are included. Customize this layout as needed.

The main parts of interest are the content blocks, as in `{{#def.content || ""}}`. This is where your content pages will inject their content into the layout template. Four content blocks are included.

1. *aboveContent* where you can put elements that are not in a bootstrap "container" and can span the whole screen width
2. *content* which is inside a bootstrap container, where you put the main content for the page
3. *belowContent* like "aboveContent" you can place full-width content. It appears below the "content" section
4. *scripts* the last section of the layout, located just before the end body tag, so you can include any scripts that are unique to a page. Global scripts (like jQuery, Angular, etc) can go in the layout.def above the scripts section.

### home.def

This is the template for the home page. It utlitizes all four content blocks as an example, but you can use just the ones you want. There is no requirement to use all blocks.

### somepage.def

An example page showing how to iterate through some data passed to the page from the controller.

### error pages

401, 403, 404, and a generic error page are included. The logic is defined in `app.js` and the view pages for them are in `app\views\`

## Adding new pages

Adding new pages is quick and easy. You need to define the path, add the controller logic, and add a view:

1. Define the path. In `app.js`, got to line 44 and add the path you want and the controller that will handle it, like `app.get('/new-page/', index.newpage);`

2. The `index` in `index.newpage` is defined up on line 4, where `index` refers to the controller (`app/controllers/index.js`). Use different controller files to separate out code for different pages. Each section of the site could have its own controller, making it easier to maintain.

3. Create the `index.newpage` function in `app/controllers/index.js`. You can copy the `exports.home` function as a start point. You can see in `exports.home` it defines which template to render (`home`, which references `app/views/home.def`). The parameters (like `title` and `metadesc`) can be anything you want and are used to display information in the templates. The `title` and `meta` variables are used in the `layout.def`, as noted in the `<head>`.

```
exports.home = function(req, res){
  res.render('home', { 
    title: 'doT Bootstrap',
    metadesc: 'A bootstrap template to quickly develope sites in Node.js',
    metakeywords: 'doT, doT-emc, bootstrap, node, npm',
    homeMessage: 'doT Template Example Site'
  });
};

/* copy the above lines and rename it to newpage, like */

exports.newpage = function(req, res){
  res.render('newpage', { 
    title: 'doT Bootstrap',
    metadesc: 'A bootstrap template to quickly develope sites in Node.js',
    metakeywords: 'doT, doT-emc, bootstrap, node, npm'
    /* removed the homeMessage variable since we don't need it on this page */
  });
};
```

4. Now setup the view. Copy `app/views/home.def` and rename it to `app/views/newpage.def`. Restart the app and you can now go to `http://localhost:5250/newpage/`. Customize as needed.

## Static files

Static files like images, style sheets, and javascript are stored in the `public` folder. When referencing these files, you don't include `public` part of the path (this is defined in line 15 of `app.js`). 

## Authentication?

Databases and authentication aren't covered in this template, for simplicity. If there is interest, I'll upload a new project that includes PostgreSQL and authentication.

## Hosting?

You can setup a free hobby site on [Heroku](https://www.heroku.com/) and manage deployments with git. It's very easy to upgrade the site when it's ready for production, as well as add databases, logging, and other important modules.

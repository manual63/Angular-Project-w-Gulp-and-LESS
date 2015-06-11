# Angular-Project-w-Gulp-and-LESS
Took basic Angular Project and added GULP task runner and LESS preprocessor

To run this project after you clone it to your local environment you will need the following installed.

- NodeJS
- Gulp
- Gulp-Less

Once node is installed open your console and navigate to the root directory of where you cloned the project. Once there do the following.

> npm install

This will install Gulp and Gulp-Less for you automatically. The .gitignore file is already setup to ignore node_modules. You don't want to have to check that in becasue it ends up being much to large.

> gulp

This will build the project and update the /dist directory with new changes.

Run or move the /dist directory within your favorite web server to see the site. This will not run in your local file system since it uses AJAX calls.

Tweak to your liking and most of all....Have fun!!

# Installation Instructions

## Tooling
  * bootstrap
  * browser-sync
  * cpx
  * sass
  * concurrently

## Code
  * css
  * html
  * javascript

## Install Your Tools
In your project directory, run the following from terminal:
  1. `npm init`
  2. `npm --save-dev install bootstrap`
  3. `npm --save-dev install browser-sync`
  4. `npm --save-dev install cpx`
  5. `npm --save-dev install sass`
  6. `npm --save-dev install concurrently`

Open your text editor to the `package.json` file. Use the following code under the `"scripts"` heading:

  * `"sass": "./node_modules/.bin/sass --watch src/sass/main.scss dist/css/main.css",`

  * ``"browser-sync": "./node_modules/.bin/browser-sync start --server 'dist' --files 'dist'",``

  * ``"babel": "./node_modules/.bin/babel src/js --out-dir dist/js --watch",``


  * ``"copy": "./node_modules/.bin/cpx \"src/**/*.html\" dist --watch",``

  * `"dev": "./node_modules/.bin/concurrently \"npm run browser-sync\" \"npm run sass\" \"npm run babel\" \"npm run copy\"",`

Run each script individually to make sure each script works using this format in your terminal: `npm run ["name of script"]`

Once they've run correctly on their own, run `npm run dev` to have everything run in one window.  


## Making It Pubic
You've got two options:
  * github
  * heroku

I recommend github until you've got something specific to share with customers/consumers/friends/family, etc.

#### For Github

1. Save your changes in your text editor.
2. Create a new repository in Github
3. In your terminal, run the following:
    1. `git init` - creates a local repository to push from.
    2. `git status` - let's you know what files have changed.
    3. `git add .` - stages all of the changed files so they can be pushed up to your git repository.
    4. `git commit -m "[description of what you did]"` - provides details of your edits when the changes are pushed up to Github
    5. `git push origin master` - publishes your code to a github repository.
4. In your Github repository you just pushed to, navigate to settings > GitHub Pages.  Select your source (master branch), click save, and the link to your hosted website will show up.

# Happy Coding!

# The Movie Listings
This is a Movie Listing project using React Hook. The project as of Jan 2019 makes use of Create React App @ 16.7.0-alpha.2 so it's not supposed to be used in any production application and was developed for a bit of fun.

This solution uses Google's WorkBox service worker (SW) for a PWA. The SW overriding the Create-React-App service worker using a config-override.js during the compiling process. THE SERVICE WORKER WILL ONLY CACHE AS BUILD. So, for example:
<p><code>localhost:5000</code></p>
rather than the usual dev address:
<p><code>localhost:3000</code></p> 
for a Create-React-App setup.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
You’ll need to have Node >= 6, npm >= 5.2 and Yarn >= 1.12.3 on your machine.
You'll need a The Movie Database account with an API key. This can be created at the following URL:
https://www.themoviedb.org/account/signup

### Installing
After cloning the project from Github change directory into the folder that you've created for the project.

Run the following in the terminal
<pre>
<code>
git clone https://github.com/dbraben/movie-listings
cd movie-listings
npm install
yarn start
</code>
</pre>

***IMPORTANT***
Go to the App.js file in Src/Components/App.js and add your API key from TMDB to variable 'API_KEY' on line 8.

## Deployment Production
After cloning the project from Github change directory into the folder that you've created for the project

<pre>
<code>
yarn build
</code>
</pre>


## Built With

* [React-Rangeslider](https://www.npmjs.com/package/react-rangeslider) - A fast & lightweight react component as a drop in replacement for HTML5 input range slider element.
* [React-Truncate](https://www.npmjs.com/package/react-truncate) - A simple text length truncator


# The Movie Listings
<p>This is a Movie Listing project using React Hook. The project as of Jan 2019 makes use of Create React App @ 16.7.0-alpha.2 so it's not supposed to be used in any production application and was developed for a bit of fun.</p>
<p>This project is also a great way to understand how to develop a PWA with CRA using Google's Workbox service worker, something that at the time of development wasn't documented or easy to understand.</p>
<p>For more info within the project checkout the following files:</p>
<pre>
<code>
./config-overrides.js
./src/sw.js
</code>
</pre>

<h2>Background</h2>
Using the TMDb API the solution displays a list of now movies allowing the user to filter by genre and rating.

<blockquote><g-emoji class="g-emoji" alias="hankey" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a9.png">💩</g-emoji> <strongNote:</strong>The solution requires a TMDb account to request an API key.</blockquote>

<h2>Input</h2>
<ul>
 <li><a href="https://developers.themoviedb.org/3/movies/get-now-playing" rel="nofollow">TMDb Movies Now Playing API</a></li>
 <li><a href="https://developers.themoviedb.org/3/genres/get-movie-list" rel="nofollow">TMDb Movie genres API</a></li>
 <li><a href="https://developers.themoviedb.org/3/getting-started/images" rel="nofollow">TMDb Image API</a></li>
 <li>Minimum rating input with a range between 0 and 10, increments of 0.5 and a default set to 3.
Multiple genres input (checkboxes). Must only contain genres from the TMDb API that are in the returned movie result set.</li>
</ul>
<h2>Output</h2>
The solution displays a list of movies, each showing the title, genre and poster image.
The movies are ordered by popularity (most popular first).
Movies are filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. So if 'Action' and 'Drama' genres are selected it lists movies with both 'Action' and 'Drama' genres.
Movies are also filterable by rating (vote_average property). i.e So if the rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
The solution makes use of the API's only once and then stores the data into a service worker for offline use.

<p>This solution uses Google's WorkBox service worker (SW) for a PWA. The SW overriding the Create-React-App service worker using a config-override.js during the compiling process. THE SERVICE WORKER WILL ONLY CACHE AS BUILD.</p>

<p>So, for example:</p>
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


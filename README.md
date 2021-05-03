# Gorilla - React Test Project - Spotify Album Dashboard

The purpose of the this project is to evaluate your developing skills with JavaScript, CSS and React.

## What will you be building?

You will be building a dashboard application with data from the Spotify API. Design can be found in the root folder: normal.jpg & searching.jpg

## Before you start

We would also like you to **commit regularly** so we can see the progression you made through the project. You will be working on a personal fork we made for you on bitbucket.

## Your starting project

We provide you with a starting project. The project is loosely based of a structure we use internally at Gorilla. It uses create-react-app v4.

The following things are provided in the starting project:

- [react-router](https://github.com/ReactTraining/react-router)
- [styled-components](https://github.com/styled-components/styled-components) (CSS-in-JS solution we use for all our projects).
- [Spotify API Reference](https://developer.spotify.com/documentation/web-api/reference/) (Your best friend during this project ;) Side note, because the API of spotify sometimes changes, it could be the assignment is talking about endpoints that )
- [react-query](https://react-query.tanstack.com/)
- Basic starting view with Token and State from the spotify API.
- Environment file for the server, so you can add your own client id and secret (Check spotify server project setup step)

## Project goal

The goal of this project is to assess your web development skills and ReactJS knowledge. This project is a starting point, so if you have a feeling you can improve on some parts, feel free to do so. But keep in mind, prioritize finishing your user stories before starting to implement improvements.

## Spotify server project setup

If you do have a spotify account (premium or free, doesn't matter), you can follow [these steps](https://developer.spotify.com/documentation/general/guides/app-settings/) to register a test application that you can use for this project.

You can make an application [here](https://developer.spotify.com/dashboard) or by going to this link https://developer.spotify.com/ and clicking on "Dashboard". You will have to login with your spotify account.

It's important you set the correct Redirect URI in the edit settings inside of your application in the spotify dashboard (You can find this when you go inside of the application you created at the top right): **http://localhost:3000/callback**

(If it's not clear where you can do this, we have provided a screenshot: callback-spotify-settings.png)

After you've done that, you will need to add your own CLIENT_ID and CLIENT_SECRET to the .env file inside of `./server/authorization_code/.env`.

You can also change the scope of what is accessible with your access token, by changing the SCOPE variable in the .env file. More info about scopes [here](https://developer.spotify.com/documentation/general/guides/scopes/). Currently we have enabled all the scopes.

### Installing the project

The project has 2 folders, client and server. We have provided you with a global package.json file that contains command to easily install and start both projects.

To install everything run in the root of the project

```
yarn install
```

To run the client project
This will spin up a server running at port 3000

```
yarn start:client
```

To run the server project
This will spin up a server running at port 8080

```
yarn start:server
```

## The assignment

Before starting the assignment we recommend you go through the project and checkout the structure. Every top level folder inside of the src/ folder will contain a README.md explaining the purpose of the folder.

**Read all the users stories before starting. This way you can anticipate the way you build your components.**

### Warm up:

The first story is to test if everything is working regarding your spotify development application setup. (See Spotify server project setup)

Go to http://localhost:8080 to login with your spotify credentials. You should be redirected to the application running on http://localhost:3000.

**Setup verification:**

- As a developer I can call the [/v1/me](https://developer.spotify.com/documentation/web-api/reference/users-profile/) endpoint of the spotify api and store the user object.
- As a user I can see a profile page with my profile information (use your imagination to style the page. Can be a simple page with your avatar, name, country, age, ...)

### Real work:

**Setup (optional):**

- As a developer I can integrate [Storybook](https://storybook.js.org/) inside my project
- As a developer I can implement isolated components (eg.: Lists, Buttons, ...) inside of Storybook

**Login:**

- As a developer I can redirect a user to http://localhost:8080 if he has no tokens and when he does have tokens he should go directly to http://localhost:3000
- As a developer I can log out the user if I receive a 401 response and correctly delete the tokens. After Logout redirect to https://localhost:8080

**Searching:**

- As a user I can search for an artist and get a list of all his albums ([/v1/search](https://developer.spotify.com/console/search/))
- As a user I can save an album to my 'Your Music' library ([/v1/me/albums](https://developer.spotify.com/documentation/web-api/reference-beta/#category-library))

**Favorites list:**

- As a user I can see a list of my albums saved in my 'Your music' library ([/v1/me/albums](https://developer.spotify.com/documentation/web-api/reference-beta/#category-library))

**Player:**

- As a user I can see what is currently playing ([/v1/me/player](https://developer.spotify.com/documentation/web-api/reference-beta/#category-player))
- As a user I can start/stop the current playing song ([/v1/me/player](https://developer.spotify.com/documentation/web-api/reference-beta/#category-player))
- As a user I can skip to the next/previous song ([/v1/me/player](https://developer.spotify.com/documentation/web-api/reference-beta/#category-player))

### Extras

- As a user I can remove an album from my 'Your music' library ([/v1/me/albums](https://developer.spotify.com/documentation/web-api/reference-beta/#category-library))
- As a developer I can refresh the access token if I receive a 401 response or if the token is almost expired

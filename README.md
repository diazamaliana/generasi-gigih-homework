# Homework Task | [Hands On Task](https://github.com/diazamaliana/generasi-gigih-handson/)
## Module 1
### [Section 1](https://github.com/diazamaliana/gfe01079-projects/tree/module-1/section-1) 
Create a page that does the following
- [x] Have a title 
- [x] Have a heading1 with "Create Playlist" text 
- [x] Have a form which accepts title and deccription on the playlist 
- [x] When the form submitted, show a popup with `alert()` with some text 
- [x] Create a div that contains this following items on the internet :
    * Pictures
    * A text for Title
    * A text for Artist
    * A text for Albums
    * A button that does nothing
    * This `div` should have borders outside, margins, and padding

### [Section 2](https://github.com/diazamaliana/gfe01079-projects/tree/module-1/section-2)
- [x] Create a new directory that duplicate the previous homework
- [x] Refactor the code to add some call to get a track info. You can get the data [here](https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json).
- [x] Try to call above endpoint with a `GET` method, and `console.log()` the response
- [x] Do alert() when there is an error

### `Section 3`
- [x] Initialize an empty React App (from CRA)
- [x] Install Axios on that React App
- [x] Set up Spotify API (client ID)
- [x] Push the code to github. Repo name : `generasi-gigih-homework`. Add release and tag format.

## Module 2
### `Section 1`
- [x] Create a page in React which contains the following data. The layout will be similar to the previous exercise without the form part only.
- [x] Create all of them in `App.js` in one component
- [x] Download the data [here](https://gist.githubusercontent.com/aryapradipta9/0b8d0a1a113e3594d34c68c72ec32daf/raw/cb5d20b494bd2cb259d31596b9e8eea02e0f6d1e/single-sample.js) and put that in your react

### `Section 2`
- [x] From previous homework, convert the track elements (which contains song title, image, album, etc) into components. 
- [x] Move it outside main component. 

### `Section 3`
- [x] Download the data [here](https://gist.githubusercontent.com/aryapradipta9/4085f18a47101f10f685a6140385b2bf/raw/e32426bc2d954274e984b03c601f14c08eb47a0b/all-sample.js). This contains array of tracks.
- [x] Loop the data and create track components for each track listed. 

## Module 3
### `Section 1`
- [x] Have a link that when clicked, it redirects to Spotify Auth API. 
- [x] Read it more [here](https://developer.spotify.com/documentation/general/guides/authorization-guide/) in the Implicit Grant Flow section
- [x] For the scope, use playlist-modify-private
- [x] Set up the callback URL as localhost:3000 in the Spotify Dashboard
- [x] The callback will contains the Access Token, which you’ll need for next request. Store that in a state.
- [x] Create a search song functionalities
- [x] Place it above the Tracks Table
- [x] Have a Search button, when the button is clicked, it calls Spotify [Search API](https://developer.spotify.com/documentation/web-api/reference/#category-search). Later on, show the results on the Tracks Table.

### `Section 2`
- [x] Use the uri as the identifier
- [x] build the component using hooks
- [x] add features select and deselect songs

### `Section 3`
Create a “create playlist” form with the following fields
- [x] Title, minimum 10 characters
- [x] Description, minimum 20 characters
- [x] A button to submit

When the button is clicked, create a new playlist with those title and description, with songs that were selected previously
- [x] Use Get Current User's Profile, Create a Playlist, and Add Items to a Playlist API to achieve this. Read more in the API Docs
- [x] Playlist should be private and collaborative should be false

## Module 4
### `Section 1`
- [x] Move the access token state to redux store. The app should still behaves like it is before.

### `Section 2`
- [x] Move the create playlist page URL to /create-playlist
- [x] The Create Playlist page only accessible when user already login. If user haven’t logged in, redirect to root URL (/)
- [x] For the root URL (/)
- [x] If user haven’t logged in, show the Login link
- [x] If user already logged in, redirect to Create Playlist page

### `Section 3`
- [x] Fix any impure functions / mutable codes, and also fix the eslint problems (if any)

## Module 5
### `Section 1`
- [x] At minimum there should be one components that use Flexbox, and a different component that use Grid.
- [x] You can freely choose which components that will be changed.
### `Section 2`
- [x] Start using UI component library/just using CSS. You’re free to choose any library/just using CSS
- [x] You can freely choose which components that will be changed.





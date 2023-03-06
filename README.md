Link to live [site](https://applebreadnbutter.herokuapp.com/)

This site is an attempt to recreate both the basic look and basic features of AirBNB.

## Frameworks, Platforms, and Libraries used

Javascript
HTML5
CSS3
node.js
express.js
react
redux

Local database is sequelize, live is postgres

Hosted with Heroku.


## Landing Page
Here you can login and view the list of hosted spots, there is also a demo user button in the log in modal.

![Landing page](https://cdn.discordapp.com/attachments/762125768314454027/1043918034374500422/image.png)

You can click on any of the images to get a more detailed look at the spot, including description and reviews.



##Details of a specific spot
You can view more about the spot here. there are edit and delete buttons if you own the spot. You can also leave a review if you're logged in.

![Spot details page](https://cdn.discordapp.com/attachments/762125768314454027/1043918324750364744/image.png)


# Road Map

* Implement the ability to schedule bookings for spots
* Implement the ability to add images to reviews
* Touch up CSS further.
* Add widgets to the login page to allow signups through google, facebook, or twitter.

# Technical Difficulties

This was my first time using redux, it is quite difficult! Spent a long time working with a broken state. Eventually got some help and landed on
this much better block of code!

```Javascript
const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD: {
    const newState = {}
    action.payload.Spots.forEach(spot => {
      newState[spot.id] = spot
    });
    return newState
  }
    case CREATE: {
      const newState = {...state, [action.spot.id]: action.spot}
      return newState
    }
    case GET_ONE: {
      const newState = {[action.spot.id]: action.spot}
      return newState
  }
    case RESET: {
      return initialState
  }
    case DELETE: {
      const newState = {...state}
      delete newState[action.spotId];
      return newState
    }
    case UPDATE: {
      const newState = {...state, [action.spot.id]: action.spot}
      return newState
    }

    default: return state;
  }
};
```

# Get started

To run this application on your local machine, download the contents of the repo and npm install the listed dependancies in the package.json file.

In the terminal, run npx dotenv sequelize-cli db:migrate and npx dotenv sequelize-cli db:seed:all. This will populate the database with seed data.

In one terminal, run npm start for the backend, and run npm start for the frontend in another. React will automatically open the site in your browser after
the frontend is running.


If you would like to get in contact with me, you can reach me at my email supershoo3@gmail.com


# Shopify Fall 2021 Frontend Internship Challenge
## Available Features:
1. Allow users to nominate movies by adding them to a list.
2. Allow users to remove their nominated movies from the list.
3. Automatically disable the "Nominate" buttons for movies that are already nominated.
4. Notify users when there are 5 or more nominations.
5. Automatically saves the list of nominated films after the users leave the page.
## Design Decisions:
### Bulma CSS library:
I used the [Bulma](https://bulma.io/) because it is written in pure CSS without extra JavaScript, extremely modular, and very lightweight. 
### BEM naming convension:
To organize my code in a way that is manageable and extendable, I adopted the [BEM](http://getbem.com/naming/) naming convention for the custom CSS classes. The `./src/NominationCard.js` and `./src/ResultCard.js` all take advantage of the custom classes with these conventions. You can find the full list of custom classes in `./src/App.css`.
# AtoZ app

### LOGIN
- Utilizes Firebase API for user authentication.
- Implements error handling for a seamless user experience.
- Includes user image support, utilizing persistent storage. Server-side storage is recommended if available.

### Main feed 
- Displays a paginated list of videos with a search feature, allowing users to search by author.
- Optimizes the list for performance, loading the next page in the background as the user scrolls.
- Persists data locally for improved performance.
- Provides the option to purchase videos, which, when bought, disappear from the main feed and are moved to the "My Videos" tab.
     (Note: This is a feature example; no actual payment method is integrated.)
- Includes fictional prices for the videos.

### My videos
- Lists the videos that the user has purchased.
- Calculates the total value of the owned videos.
- Persists owned videos locally.
     (Note: On a professional level, validation from the server side is recommended.)

### My Profile
- Features a user profile screen.
- Allows users to view and change their profile image.
- Provides options to log out or delete the account.

### Best Practice
- Adheres to current best practices in coding.
- Utilizes ESLint and Prettier for code quality.
- Developed using React Native CLI (no Expo).
- Implements TypeScript throughout the entire app.
  
Note: The app can be further improved with the existence of a backend.


https://github.com/RadosavAntonio/AtoZ/assets/49883507/dd510284-4bfc-45fb-8028-42929de5d042


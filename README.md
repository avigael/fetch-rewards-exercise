# Fetch Rewards Coding Exercise - Software Engineering - Front End
Please write a web app that retrieves the data from https://fetch-hiring.s3.amazonaws.com/hiring.json.
Display this list of items to the user based on the following requirements:
- Display all the items grouped by "listId"
- Sort the results first by "listId" then by "name" when displaying.
- Filter out any items where "name" is blank or null.
The final result should be displayed to the user in an easy-to-read list.

------------

## Running
```
git clone https://github.com/avigael/fetch-rewards-exercise.git
cd fetch-rewards-exercise
npm install
npm start
```
# elevator_test

## Setup
### Back
Launch the back from the folder /back with npm start or yarn start
It runs on port: 5000
The route used is localhost:5000/floor. It access the Json file from the folder data

### Front
Launch the back from the folder /elevator-app with npm start or yarn start
It runs on port: 3000

## Informations
### languages / framework
The app's front use the React framework and the back use Node.js & the Express Framework 

### Functionalities
You can go up and down with buttons.
If you're on the last floor or lowest floor you encounter a warning message.

### Technical points
The React component requests data from the node server to define the max and min floor.
The node server respond with a Json file.
The React app send a post request to node server with the current floor. 

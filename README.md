# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Requirements

The component must have the following functionalities:-

1. There is an input box for 'Note Title' in which the user can type the title of the note.

2. There is an input box for 'Note Status' in which the user can type the status. For example, 'active', 'complete', 'in progress', 'pending', or anything the user wants. (Status is case insensitive)

3. Clicking on the button 'Add Note' will add the note to the component. After adding, the values in the input boxes are reset.

4. Each node should be added inside the table <tbody data-testid="noteList"> as an individual row. Note name and status should be added using "<tr><td>{name}</td><td>{status}</td></tr>".


The app has 3 buttons that, when clicked, filter the notes from the list below:-

1. 'All' - This is the default selected button, and it displays all the notes added by the user ('Active', 'Completed', and any other status as added by the user.)

2. 'Active' - Clicking on this displays only the notes having the status 'active'. (in the order added by the user)

3. 'Completed' - Clicking on this displays only the notes having the status 'completed'. (in the order added by the user)


When 'All' button is clicked, the notes displayed should be in the following order:-

1. All notes that have the status ‘active’ (in the order added by the user)

2. All notes that have the status ‘completed’ (in the order added by the user)

3. All other notes in the order added by the user.


The following data-testid attributes are required in the component for the tests to pass:-

1. Name input should have data-testid attribute 'input-note-name'.

2. Status input should have data-testid attribute 'input-note-status'.

3. Add Note button should have data-testid attribute 'submit-button'.

4. All button should have data-testid attribute 'allButton'.

5. Active button should have data-testid attribute 'activeButton'.

6. Completed button should have data-testid attribute 'completedButton'.

7. The table body <tbody> should have data-testid attribute 'noteList'.

Please note that component has above data-testids for test cases and some classes and ids for rendering purposes. It is advised not to change them.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Requirements

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

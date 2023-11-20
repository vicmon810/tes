# Property management Systems developing Blog. 


*  [21/11/2023] (21/11/2023)


## Enhancing User Experience: Resolving Existing Bugs and Upgrading Context-Triggered Column Creation in Web Page Functionality[21/11/2023]

## TODO:
- Fix Non-Connection Bugs:
    - Identify specific scenarios where connections fail (e.g., during data fetch, save, or search).
    - Add error handling and logging to isolate the issues.
    - Implement retry logic or fallback mechanisms for failed connections.

- Fix Address Display Issue on Edit Pages:
    - Ensure the address data is correctly being passed to the edit page.
    - Debug the data-binding for the address input field in the edit form.
    - Check for any conditional rendering that might be hiding the address field.
- Implement Search Functionality:
    - Create a search input field in the UI to accept search queries.
    - Send the search query to the backend upon form submission.
    - Implement the search logic in the backend to query the database.
    - Return and display the search results in the frontend.
- Polish Save Temporary Function on Current Page:
    - Ensure validation of input data before saving temporarily.
    - Implement a clear feedback mechanism for successful or failed saves.
    -Optimize the local storage/update mechanism for temporary saves (use local state, Context API, or Redux as needed).
- Update Web Context After Saving on Edit Page:
    - Upon successful save, update the frontend state to reflect the changes.
    - If applicable, use a state management library (like Redux) or Context API for efficient state updates.
    - Ensure that the UI component re-renders to show the updated data.
## Done:
- Fixed Non-Connection Bugs:
    - Added error handling and improved network stability.
- Enhanced Save Temporary Function on Current Page:
    - Implemented a check in the database before saving: if an entry exists, it's deleted and re-created; otherwise, it's created directly.
- Implemented Backend Search:
    - Search queries are now passed to the backend and processed in the database.
- Enabled Context Update on Save in Edit Page:
    - Changes are now reflected in the UI immediately after saving edits.
- Database Main Table Update on Save in Navbar:
    - Implemented logic to update the main database table when saving changes via the navbar.

# React Login Page

This project is a React-based login page that includes form validation, password masking, and internationalization (i18n) for multiple languages. The design adheres to the provided specifications and incorporates best programming practices.

## Features
- Validates email addresses, excluding public providers like Gmail, Outlook, etc.
- Password masking with an option to toggle visibility.
- Language selection dropdown that changes the UI language dynamically.
- Supports English, Hindi, and another Indian language.

## Setup and Running Instructions

### Prerequisites
- Node.js
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-login.git
    cd react-login
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000`

### Testing the Application

1. Ensure the email field only accepts corporate emails (e.g., `@noventiq.com`).
2. Toggle the visibility of the password.
3. Change the language using the dropdown and verify the UI updates accordingly.

## Folder Structure

- `public/`: Contains the `index.html`.
- `src/`: Contains all source code.
  - `components/`: Contains the React components.
  - `locales/`: Contains language JSON files for internationalization.
  - `App.js`: Main app

# Jackpot Login

This project implements a unique and engaging login system, utilizing a "card selection" mechanism to validate user credentials. Instead of traditional text-based password input, users select a sequence of cards in the correct order to authenticate their login.

## Features

- *Card-Based Password Input*: Users select a specific sequence of cards to verify their login, replacing the traditional password entry system.
- *Real-Time Validation*: The selected card combination is validated immediately, providing feedback on whether the password is correct.
- *Smooth Animations*: Responsive visual feedback for user interactions, including successful and failed login attempts.
- *Loading Screen*: Displays a loading screen simulation during network requests or login validation.
- *Simple Login Process*: Only requires a username and a correct card selection for authentication.

## Technologies Used

- *Next.js*: React framework used for building the user interface.
- *React Icons*: Icons used for form fields (e.g., username and password).
- *Image Component*: From Next.js to handle image optimization.
- *CSS Modules*: For styling the form and cards.
- *JavaScript (ES6)*: Used to handle the logic behind card selection and form submission.

## Installation

To set up the project locally:

1. *Clone the repository*:
   bash
   git clone https://github.com/Harkanni/jackpot-login.git
   

2. *Navigate to the project directory*:
   bash
   cd jackpot-login
   

3. *Install dependencies*:
   bash
   npm install
   

4. *Run the development server*:
   bash
   npm run dev
   

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the login system.

## Usage

1. *Username Input*: Enter a username in the first field.
2. *Card Selection*: Click on the password input field to display the card selection modal. Choose the correct sequence of cards (four in total) to input your password.
3. *Login Feedback*: If the selected card combination matches the correct password sequence, you will be redirected to the next page. If incorrect, an error message will be displayed, and the user can try again.

### Example Password Validation Flow

The system validates the selected cards against a predefined password array ([1, 2, 3, 4] in this case). If the selected cards match, the user is authenticated.

javascript
const password = [1, 2, 3, 4];


## Customization

- *Card Images*: Customize the card images by replacing the cardImage variable with your desired images.
- *Password Logic*: Modify the validatePassword function to handle different password lengths or validation mechanisms.
- *Loading Screen*: The LoadingScreen component can be customized to show different loading animations.

## Contribution Guidelines

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

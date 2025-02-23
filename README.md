# Express.js + React.js + Node.js Boilerplate with Material-UI

Welcome to the **Express.js + React.js  Boilerplate**! This repository is designed to help you kickstart your next web application project with a solid foundation. It includes a customizable theme, logging setup, predefined routes, JWT-based authentication, and more. Whether you're building a small project or a large-scale application, this boilerplate will save you time and effort.

---

## Features

- **Express.js Backend**: A robust backend framework for building APIs and handling server-side logic.
- **React.js Frontend**: A modern frontend library for building dynamic user interfaces.
- **Material-UI**: Pre-configured with a customizable dark theme for a sleek and modern design.
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT) with login, logout, and token refresh functionality.
- **Predefined Routes**: Ready-to-use routes for health checks, application info, and metrics.
- **Webpack Configuration**: Bundling and hot-reloading for a smooth development experience.
- **Environment Variables**: Easy configuration using `.env` files.
- **Documentation**: A `docs` folder is included for you to add your own documentation.

---

## File Structure

Here’s an overview of the repository structure:

```
.
├── bin/                           # Server startup script
├── docs/                          # Documentation folder
├── public/                        # Static assets (e.g., images, fonts)
├── routes/                        # Express.js routes
│   ├── actuator.js                # /health, /info, /metric controller.
│   └── authentication.js          # Authentication Controller
├── scripts/                       # Utility scripts (e.g., git.js)
│   └── git.css                    # Creates metadata for /info api.
├── services/                      # Business logic and services
├── static/                        # Static files served by Express
├── utils/                         # Utility functions
├── views/                         # React.js frontend
│   ├── build/                     # Webpack output
│   ├── components/                # React components
│   ├── public/                    # HTML template and assets
│   ├── index.js                   # React entry point
│   ├── index.css                  # Global styles
│   ├── AuthenticationContext.js   # Authentication hooks
│   └── GlobalStatusContext.js     # Notification hooks for errors, warnings and infos.
├── .env.prod                      # Production environment variables
├── .gitignore                     # Git ignore file
├── .electron.js                   # Desktop application configuration.
├── package.json                   # Project dependencies and scripts
├── webpack.config.js              # Webpack configuration
└── README.md                      # You're here!
```

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/a6h15hek/ern-boilerplate.git
   cd ern-boilerplate
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env.prod` file in the root directory.
   - Add the following variables:
     ```
     AUTHENTICATION_COOKIE_KEY_NAME=your_cookie_key
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the Development Server**:
   ```bash
   npm run start:react
   ```

5. **Build for Production**:
   ```bash
   npm run build:react
   ```

6. **Run the Production Server**:
   ```bash
   npm run start:prod
   ```

---

## Usage

### Authentication
The boilerplate includes a fully functional authentication system. Here's how to use it:

- **Login**: Send a POST request to `/auth/login` with `clientId` and `password`.
- **Logout**: Send a POST request to `/auth/logout`.
- **Refresh Token**: Send a POST request to `/auth/refresh-token` to refresh the JWT token.
- **Check Authentication**: Send a GET request to `/auth/is-authenticated` to verify if the user is authenticated.

### Predefined Routes
- **Health Check**: `GET /health` - Returns the application's health status.
- **Application Info**: `GET /info` - Returns build and Git information.
- **Metrics**: `GET /metrics/application.started.time` - Returns the time taken to start the application.

### Customizing the Theme
The Material-UI theme is defined in `views/index.js`. You can customize the colors and styles by modifying the `createTheme` object.

---

## Developer Notes

- **Environment Variables**: Always keep sensitive information like API keys and secrets in `.env` files. Do not commit them to version control.
- **Documentation**: Use the `docs` folder to add your own documentation for the project.
- **Linting**: ESLint is configured to enforce code quality. Run `npm run lint` to check for issues.
- **Hot Reloading**: The development server supports hot reloading for a seamless development experience.

---

## Scripts

- `npm run start:prod`: Builds the React app and starts the production server.
- `npm run start:local`: Builds the React app and starts the local development server.
- `npm run start:react`: Starts the React development server with hot reloading.
- `npm run build:react`: Builds the React app for production.
- `npm run open:desktop`: Opens the application in Electron (if configured).

---

## Dependencies

### Backend
- Express.js
- JWT for authentication
- CORS for cross-origin requests
- Morgan for logging

### Frontend
- React.js
- Material-UI for styling
- Axios for API requests

### Development Tools
- Webpack for bundling
- Babel for transpiling
- ESLint for linting

---

## Contributing

Feel free to contribute to this project! Open an issue or submit a pull request with your improvements.

---

## License

This project is open-source and available under the MIT License.

---

Happy Coding! 🚀

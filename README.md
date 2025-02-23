# Express-React-Node Boilerplate 

Kickstart your next web project with this powerful Express.js and React.js boilerplate! Includes JWT authentication, Material-UI themeing, and production-ready features.

## Key Features
- **JWT Authentication** - Secure login/logout with token refresh
- **Material-UI** - Customizable dark theme & UI components
- **Ready-to-Use** - Pre-configured Webpack, ESLint, and project structure
- **Production Tools** - Health checks (/health), system metrics (/metrics), and info endpoint (/info)
- **Global State** - Built-in authentication context and snackbar notifications

## Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/a6h15hek/ern-boilerplate.git
   cd ern-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment**  
   Create `.env.prod` file:
   ```env
   JWT_SECRET=your_secure_secret
   SERVER_PORT=7000
   AUTHENTICATION_COOKIE_KEY_NAME=auth_token
   ```

## Quick Start

**Development mode:**
```bash
npm run start:local  # Starts backend + built React app
npm run start:react  # Start React dev server (port 7001)
```

**Production build:**
```bash
npm run build:react  # Build React app
npm run start:prod   # Start production server
```

## Project Structure

```
├── bin/              # Server startup
├── docs/             # Your documentation here
├── routes/           # Express routes
├── services/         # Business logic
├── views/            # React frontend
│   ├── components/   # Reusable components
│   ├── contexts/     # React context providers
│   └── public/       # Static assets
├── .electron.js      # Desktop app setup
└── webpack.config.js # Build configuration
```

## Key Configuration

**Package Scripts**  
- `start:local`: Local development (auto-restart)
- `start:prod`: Production mode
- `build:react`: Build React app
- `open:desktop`: Launch as Electron app

**Environment Variables**  
| Variable | Description |
|----------|-------------|
| JWT_SECRET | Secret for token encryption |
| SERVER_PORT | Backend server port |
| AUTHENTICATION_COOKIE_KEY_NAME | Cookie name for JWT token |

## Authentication Flow

1. **Login** - POST `/auth/login` with {clientId, password}
2. **Protected Routes** - Use `authenticationCheck` middleware
3. **Token Refresh** - POST `/auth/refresh-token`
4. **Logout** - POST `/auth/logout`

**UI Components**  
Wrap your app with context providers:
```jsx
<GlobalStatusContextProvider>
  <AuthenticationContextProvider>
    {/* Your components */}
  </AuthenticationContextProvider>
</GlobalStatusContextProvider>
```

Use authentication in components:
```jsx
const { isAuthenticated, login, logout } = useAuthentication();
```

## Documentation

Add your project-specific documentation in the `docs/` folder. We've included:
- Basic health check implementation
- System metrics endpoint
- Pre-built login dialog component

## Contribution

1. Create feature branch
2. Add tests if applicable
3. Update documentation
4. Submit PR with description

---

Created by [Abhishek M. Yadav](https://github.com/a6h15hek) - [Live Demo](https://your-demo-link.com)

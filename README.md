# registration-app

A clean, properly structured React registration form.

## Project Structure

```
registration-app/
├── public/
│   └── index.html              # HTML shell
├── src/
│   ├── components/
│   │   ├── EyeIcon.jsx         # SVG toggle icon for password visibility
│   │   ├── FormField.jsx       # Reusable label + input + error wrapper
│   │   ├── PasswordStrengthBar.jsx  # 5-segment strength indicator
│   │   ├── RegistrationForm.jsx     # Main form component (composed)
│   │   └── SuccessScreen.jsx   # Post-submission confirmation screen
│   ├── hooks/
│   │   └── useRegistrationForm.js   # All form state, validation & submit logic
│   ├── styles/
│   │   └── global.css          # CSS reset, animations, base styles
│   ├── utils/
│   │   ├── passwordStrength.js # Password scoring helper
│   │   └── validation.js       # Per-field validation rules
│   ├── App.jsx                 # Root component
│   └── index.js                # ReactDOM entry point
└── package.json
```

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## What changed from the original file

| Before | After |
|--------|-------|
| Single 600-line JSX file | Split across 9 focused files |
| Helper functions inlined | Moved to `utils/` |
| All state in one component | Extracted to `useRegistrationForm` hook |
| Icons defined in same file | Standalone `EyeIcon` component |
| Success screen mixed into form | Standalone `SuccessScreen` component |
| CSS animations in JS string | Moved to `global.css` |

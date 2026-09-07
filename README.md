# Multi-Platform Post Composer

A dynamic post composition interface that supports multiple social media platforms with real-time validation and constraint checking.

## Features

✅ **Multi-Platform Support**
- Twitter (280 character limit, 10 hashtag limit)
- Instagram (2,200 character limit, 30 hashtag limit, no URLs)
- Facebook (63,206 character limit)
- LinkedIn (3,000 character limit, 5 hashtag limit)
- TikTok (2,200 character limit)

✅ **Real-Time Validation**
- Character count monitoring
- Platform-specific constraint checking
- Hashtag limit validation
- URL restriction enforcement
- Live feedback with warnings and errors

✅ **Responsive Design**
- Mobile-friendly interface
- Tablet and desktop optimization
- Touch-friendly controls

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── PostComposer.jsx      # Main component with validation logic
│   │   ├── PlatformSelector.jsx  # Platform selection UI
│   │   ├── TextEditor.jsx        # Text input area
│   │   └── ValidationFeedback.jsx # Validation status display
│   ├── styles/
│   │   ├── PostComposer.css
│   │   ├── PlatformSelector.css
│   │   ├── TextEditor.css
│   │   └── ValidationFeedback.css
│   ├── utils/
│   │   └── platformRules.js      # Platform-specific rules
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Installation

1. Navigate to the project directory:
```bash
cd "The GodFather Folder/Full stack - 2/Expm-1"
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Usage

1. **Select Platforms**: Check the platforms you want to publish to
2. **Write Content**: Type or paste your post content in the text area
3. **Monitor Validation**: Watch real-time validation feedback for each platform
4. **Review Status**: Check character counts, warnings, and errors
5. **Publish**: Click "Publish" when all validations pass

## Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist` folder.

## Platform Rules

| Platform | Character Limit | Hashtags | URLs Allowed |
|----------|-----------------|----------|--------------|
| Twitter | 280 | Max 10 | Yes |
| Instagram | 2,200 | Max 30 | No |
| Facebook | 63,206 | None | Yes |
| LinkedIn | 3,000 | Max 5 | Yes |
| TikTok | 2,200 | Max 50 | Yes |

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **CSS3** - Styling with responsive design
- **JavaScript ES6+** - Logic and state management

## Learning Outcomes (COs Mapped)

- **CO1 - BT1**: Understanding multi-platform content handling requirements
- **CO3 - BT3**: Implementing real-time validation mechanisms and constraints

## Future Enhancements

- Image/media upload preview
- Scheduled posting
- Post templates
- Analytics integration
- Undo/Redo functionality
- Draft saving
- Social media API integration

## Author

Built as an educational project demonstrating component-based React architecture and real-time validation patterns.

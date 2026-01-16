# Markdown Previewer

A simple and efficient React-based web application that allows users to write Markdown text and see the rendered HTML preview in real-time.

## Features

- **Live Preview**: See changes instantly as you type.
- **GitHub Flavored Markdown**: Supports standard GFM syntax including tables, task lists, and code blocks.
- **Responsive Design**: Works on desktop and mobile browsers.
- **Syntax Highlighting**: Built-in support for code snippets.

## Screenshots

| Main Interface | Editor View & Rendered Output |
| :---: | :---: |
| ![Main Interface](public/screens/home_screen.png) | ![Editor View & Rendered Output](public/screens/print_screen.png) |

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/markdown-preview.git
   ```

2. Navigate to the project directory:
   ```bash
   cd markdown-preview
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Marked**: A low-level markdown compiler for parsing markdown.
- **DOMPurify**: To sanitize the HTML output and prevent XSS attacks.
- **CSS3**: For custom styling and layout.

## Project Structure

```text
markdown-preview/
├── public/
│   └── screens/         # Application screenshots
├── src/
│   ├── components/      # React components
│   ├── App.js           # Main application logic
│   └── index.js         # Entry point
└── README.md
```

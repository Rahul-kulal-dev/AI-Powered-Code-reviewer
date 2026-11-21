# AI-Powered Code Reviewer

An intelligent, full-stack automated code review and analysis platform powered by **Google Gemini 2.0 Flash**, **Express.js**, **React 19**, and **Tailwind CSS v4**. It analyzes source code snippets for logic errors, code quality, readability, security flaws, and performance optimizations in seconds.

---

## Overview

**AI-Powered Code Reviewer** is a decoupled full-stack developer productivity application designed to streamline code inspection workflows. The system pairs a lightweight Express.js REST API with a responsive React single-page application powered by Vite, Tailwind CSS v4, and Prism-inspired custom editor styling.

Developers paste their code into an integrated in-browser IDE panel, submit it for evaluation, and receive structured, actionable AI-generated feedback with clean formatting, error highlights, and concrete refactoring suggestions.

---

## Key Features

### 🔍 Automated Code Review & Intelligence
- **Deep Logic & Correctness Analysis**: Evaluates algorithms, functions, and control flow for subtle bugs and edge cases.
- **Clean Code & Best Practices**: Pinpoints legacy syntax (e.g. outdated variable declarations, inefficient iteration), naming anti-patterns, and structural improvements.
- **Error Handling & Resilience**: Detects unhandled exceptions, missing input validations, and recommends robust `try-catch` structures.
- **Actionable Refactoring Solutions**: Delivers clear ✅ ("Looks good") or ❌ verdicts alongside modernized code snippets and explanations.

### 💻 Developer Experience & UI
- **Dual-Pane Split Editor**: Interactive side-by-side editing and real-time review display.
- **Pre-loaded Code Playground**: Comes out-of-the-box with sample code snippets for instant experimentation.
- **Loading & State Feedback**: Real-time analysis status indicator with disabled-state controls to prevent duplicate submissions.
- **Dark Modern Aesthetic**: Tailored zinc/dark theme optimized for readability and developer comfort during extended coding sessions.

---

## Technical Architecture

### Backend Stack

| Layer | Technology | Specification |
| :--- | :--- | :--- |
| **Runtime** | Node.js | CommonJS / Node LTS |
| **Framework** | Express.js | Version 5.1.0 |
| **AI Model Engine** | Google Generative AI SDK | `@google/generative-ai` (Gemini 2.0 Flash) |
| **CORS Handling** | cors | Version 2.8.5 |
| **Environment** | dotenv | Version 16.5.0 |

### Frontend Stack

| Layer | Technology | Specification |
| :--- | :--- | :--- |
| **Framework** | React | Version 19.1.0 |
| **Build Tool** | Vite | Version 6.3.5 (Fast HMR & Optimized Bundles) |
| **Styling** | Tailwind CSS v4 | `@tailwindcss/vite` (Utility-first styling) |
| **HTTP Client** | Axios | Version 1.9.0 |
| **Markdown / Code Tools**| PrismJS & Rehype Highlight | Syntax highlighting & markdown presentation tools |

---

## Project Structure

```text
AI-Powered-Code-reviewer-/
├── .gitignore                # Root gitignore (ignores node_modules, .env, build output)
├── README.md                 # Complete project documentation
├── Backend/                  # Express.js REST API (Node.js)
│   ├── .env.example          # Environment variable template
│   ├── package.json          # Backend dependencies and scripts
│   ├── package-lock.json     # Backend dependency lockfile
│   ├── server.js             # Server bootstrap & port listener
│   ├── temp.md               # Backend review test reference
│   └── src/
│       ├── app.js            # Express application setup & middleware configuration
│       ├── controllers/      # Request handlers (AI review controller)
│       ├── routes/           # API routes (/ai/get-review)
│       └── services/         # Google Gemini AI integration service
└── Frontend/                 # React 19 + Vite + Tailwind CSS v4 SPA
    ├── .gitignore            # Frontend-specific gitignore
    ├── eslint.config.js      # ESLint configuration
    ├── index.html            # Main HTML entry point
    ├── package.json          # Frontend dependencies and scripts
    ├── package-lock.json     # Frontend dependency lockfile
    ├── vite.config.js        # Vite configuration with Tailwind CSS plugin
    ├── public/               # Static public assets
    └── src/
        ├── assets/           # React SVGs and media assets
        ├── App.css           # Component styles
        ├── App.jsx           # Main application layout, Landing Page, & Code Editor
        ├── index.css         # Global styles
        └── main.jsx          # React DOM entry point
```

---

## Getting Started

### Prerequisites
- **Node.js**: Version 18.x or 20.x or higher
- **npm**: Version 9.x or higher
- **Google Gemini API Key**: Free API key from [Google AI Studio](https://aistudio.google.com/)

---

### 1. Backend Configuration & Setup

1. Open your terminal and navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Establish your environment file from the provided template:
   ```bash
   # Unix/macOS:
   cp .env.example .env

   # Windows (PowerShell):
   Copy-Item .env.example .env
   ```

3. Configure your API key in `Backend/.env`:
   ```env
   GOOGLE_GEMINI_KEY=your_actual_gemini_api_key_here
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Launch the backend server:
   ```bash
   node server.js
   ```
   *The backend service will start and bind to `http://localhost:3000`.*

---

### 2. Frontend Configuration & Setup

1. Open a new terminal tab/window and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the Vite development server:
   ```bash
   npm run dev
   ```
   *The application will be accessible at `http://localhost:5173`.*

---

## API Reference

### Review Code Endpoint

```http
POST /ai/get-review
```

#### Request Headers
```text
Content-Type: application/json
```

#### Request Body
```json
{
  "code": "function add(a, b) { return a + b; }"
}
```

#### Response
```text
HTTP/1.1 200 OK
Content-Type: text/plain

✅ Looks good.
- The function is concise and properly scoped.
- Consider adding type validation or TypeScript annotations for runtime/compile-time safety.
```

---

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the ISC License.

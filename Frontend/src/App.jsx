import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

// --- Inlined SVG Icons (replaces lucide-react) ---
const CodeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const ArrowRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const PlayIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);


// --- Landing Page Component ---
const HomePage = ({ navigateTo }) => {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer">
              <CodeIcon className="h-8 w-8 text-white" />
              <span className="text-white text-xl font-bold">CodeReview AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => navigateTo('editor')} className="bg-white text-zinc-900 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 text-center overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center">
         <div className="absolute inset-0 bg-grid-zinc-700/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            AI-Powered
            <span className="block text-zinc-400">Code Reviews in Seconds</span>
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-3xl mx-auto">
            Get instant, intelligent feedback on your code. Our AI analyzes for bugs, performance issues, security vulnerabilities, and best practices to help you write better code, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigateTo('editor')} className="bg-white text-zinc-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center group">
              Try The Editor
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-zinc-600 bg-zinc-800/50 text-zinc-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-colors flex items-center justify-center">
              <PlayIcon className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Improve Your Code?</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Join thousands of developers who trust CodeReview AI for better, safer code.
          </p>
          <button onClick={() => navigateTo('editor')} className="bg-white text-zinc-900 px-12 py-4 rounded-lg font-semibold text-xl hover:bg-zinc-200 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900/80 border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <CodeIcon className="h-6 w-6 text-white" />
              <span className="text-white text-lg font-bold">CodeReview AI</span>
            </div>
            <div className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} CodeReview AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};


// --- Editor Page Component ---
const EditorPage = ({ code, setCode, review, isReviewing, reviewCode, navigateTo }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navigation for Editor */}
      <nav className="bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-700 z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo('home')}>
              <CodeIcon className="h-8 w-8 text-white" />
              <span className="text-white text-xl font-bold">CodeReview AI</span>
            </div>
            <button onClick={() => navigateTo('home')} className="text-zinc-300 hover:text-white transition-colors">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Editor */}
      <div className="code-editor-container fullscreen">
        <div className="editor-panel">
           <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              className="code-editor-main"
              spellCheck="false"
           />
          <button
            className="review-button"
            onClick={reviewCode}
            disabled={isReviewing}
          >
            {isReviewing ? (
              <>
                <span className="loading-spinner"></span>
                Analyzing...
              </>
            ) : (
              'Review Code'
            )}
          </button>
        </div>
        <div className="review-panel">
          <pre>{review}</pre>
        </div>
      </div>
    </div>
  );
};


function App() {
  // Page state to control navigation
  const [page, setPage] = useState('home'); // 'home' or 'editor'

  // State for the code editor
  const [code, setCode] = useState(`// Welcome to CodeReview AI!
// Paste your JavaScript code here and click "Review Code" to get an AI-powered analysis.

function calculateSum(numbers) {
  // Using 'var' is outdated, 'let' or 'const' are preferred.
  var result = 0; 
  
  // A traditional for-loop can be replaced by more modern array methods.
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
console.log('The sum is:', calculateSum(nums));
`);

  // State for the review markdown output
  const [review, setReview] = useState('');
  // State to manage the loading status of the review
  const [isReviewing, setIsReviewing] = useState(false);

  // Set initial welcome content for the review panel on component mount
  useEffect(() => {
    // Only set initial review text if the review panel is empty (to avoid overwriting real reviews)
    if (!review && page === 'editor') {
        setReview(`# Welcome to the Editor!

1.  **Paste your code** on the left.
2.  **Click "Review Code"**.
3.  **Get instant feedback** right here.
`);
    } else if (page === 'home') {
        // You could clear the review when going home if desired
        // setReview(''); 
    }
  }, [page]); // This effect now runs when the page changes

  /**
   * Sends the code to a local backend for review.
   */
  async function reviewCode() {
    setIsReviewing(true);
    setReview('Analyzing your code...');

    try {
      let response = await axios.post("http://localhost:3000/ai/get-review", { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setReview(`# ❌ Error\n\nAn error occurred while analyzing your code. Please make sure your local server is running.\n\n**Details:**\n\`\`\`\n${error.message}\n\`\`\``);
    } finally {
      setIsReviewing(false);
    }
  }

  // Navigation function passed to child components
  const navigateTo = (pageName) => setPage(pageName);

  return (
    <>
      <style>{`
        /* --- Inlined CSS (replaces external stylesheets) --- */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        
        body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

        :root {
          --editor-bg: #1e1e1e;
          --panel-bg: #2a2a2e;
          --border-color: #3a3a3e;
          --primary-accent: #ffffff;
          --text-color: #d4d4d8;
          --button-bg: #ffffff;
          --button-text: #18181b;
          --button-hover-bg: #e2e2e2;
        }

        .code-editor-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          background-color: var(--editor-bg);
          flex-grow: 1; /* Allows the container to fill available space */
        }
        
        .code-editor-container.fullscreen {
            height: calc(100vh - 4rem); /* Full viewport height minus navbar */
        }

        .editor-panel {
          position: relative;
          height: 100%;
          overflow: auto;
          border-right: 1px solid var(--border-color);
        }
        
        .code-editor-main {
          height: 100%;
          width: 100%;
          padding: 24px;
          border: none;
          outline: none;
          resize: none;
          background-color: var(--editor-bg) !important;
          color: var(--text-color);
          font-family: 'Fira Code', 'Fira Mono', monospace;
          font-size: 14px;
          line-height: 1.5;
        }

        .review-panel {
          padding: 24px;
          overflow-y: auto;
          height: 100%;
          background-color: var(--panel-bg);
          color: var(--text-color);
        }
        
        .review-panel pre {
          white-space: pre-wrap;
          word-wrap: break-word;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          line-height: 1.6;
        }

        .review-button {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          background-color: var(--button-bg);
          color: var(--button-text);
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          z-index: 10;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .review-button:hover:not(:disabled) {
          background-color: var(--button-hover-bg);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .review-button:disabled {
          background-color: #a0a0a0;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .loading-spinner {
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-top-color: var(--button-text);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 768px) {
          .code-editor-container { grid-template-columns: 1fr; grid-template-rows: auto; height: auto; min-height: calc(100vh - 4rem); }
          .editor-panel { border-right: none; border-bottom: 1px solid var(--border-color); min-height: 50vh; }
          .review-panel { min-height: 50vh; }
        }

        .bg-grid-zinc-700\\/20 {
          background-image: linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }
      `}</style>
      <div className="min-h-screen bg-zinc-900 text-zinc-300 font-sans">
        {page === 'home' && <HomePage navigateTo={navigateTo} />}
        {page === 'editor' && (
          <EditorPage
            code={code}
            setCode={setCode}
            review={review}
            isReviewing={isReviewing}
            reviewCode={reviewCode}
            navigateTo={navigateTo}
          />
        )}
      </div>
    </>
  );
}

export default App;


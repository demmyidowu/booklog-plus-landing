import BookLogo from "./components/BookLogo"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <BookLogo className="h-8 w-8 text-blue-500" />
          <span className="ml-2 text-xl font-bold text-blue-500">BookLog+</span>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center">
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500 rounded-full blur-xl opacity-30"></div>
                <div className="relative bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-2xl">
                  <BookLogo className="h-20 w-20 mx-auto text-blue-500 mb-4" />
                  <h1 className="text-4xl font-bold text-center text-blue-500">BookLog+</h1>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-tight italic">
              Turn reading into memories that last, not forgotten pages
            </h2>

            <p className="text-gray-300 text-lg mb-10 max-w-3xl mx-auto">
              BookLog+ helps you capture the insights and memories from every book you read, then uses AI to recommend
              your next great read based on what actually resonated with you. It's designed to help readers become more
              thoughtful about their reading and deepen their love for books.
            </p>

            <div className="max-w-4xl mx-auto mb-8">
              <img
                src="/booklog-demo-v2.gif"
                alt="BookLog+ in action - logging books and getting personalized recommendations"
                className="rounded-lg shadow-lg border border-slate-200"
              />
            </div>

            <a
              href="https://booklogplus.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

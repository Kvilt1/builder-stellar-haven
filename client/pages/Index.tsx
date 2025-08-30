import ChatInterface from '../components/ChatInterface';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 font-avenir mb-2">
          Chat App
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-avenir">
          Beautiful messaging interface
        </p>
      </div>

      {/* Chat Interface */}
      <div className="flex justify-center">
        <ChatInterface />
      </div>

      {/* Footer */}
      <div className="text-center mt-8 sm:mt-12">
        <p className="text-xs sm:text-sm text-slate-500 font-avenir">
          Built with modern design principles
        </p>
      </div>
    </div>
  );
}

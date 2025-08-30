import ChatInterface from '../components/ChatInterface';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 font-avenir mb-2">
          Chat App
        </h1>
        <p className="text-slate-600 font-avenir">
          Beautiful messaging interface
        </p>
      </div>

      {/* Chat Interface */}
      <div className="flex justify-center">
        <ChatInterface />
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="text-sm text-slate-500 font-avenir">
          Built with modern design principles
        </p>
      </div>
    </div>
  );
}

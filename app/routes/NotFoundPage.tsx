function NotFoundPage() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-3xl p-8 bg-gray-900 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl space-y-6 text-white">
        <h1 className="text-6xl font-extrabold text-center drop-shadow-md text-red-600">404</h1>
        <p className="text-lg text-center">The requested page could not be found.</p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <a href="/" className="btn btn-primary text-gray-900 px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-bold">
            Go Home
          </a>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage
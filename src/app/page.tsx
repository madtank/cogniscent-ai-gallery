export default function Home() {
  const timestamp = new Date().toISOString();
  
  return (
    <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          🎉 Deployment Test
        </h1>
        <p className="text-gray-600 mb-4">
          If you can see this page with styling, the Next.js setup and deployment pipeline are working!
        </p>
        <div className="bg-indigo-100 rounded p-4">
          <p className="text-sm text-indigo-800">
            Build Timestamp: {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}
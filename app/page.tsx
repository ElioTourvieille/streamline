import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-white">
          StreamLine
        </h1>
        <p className="text-xl text-purple-200">
          Client project transparency, simplified
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link 
            href="/admin/dashboard"
            className="px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition"
          >
            Admin Dashboard
          </Link>
          <Link 
            href="/p/demo"
            className="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
          >
            Client View Demo
          </Link>
        </div>
      </div>
    </div>
  )
}

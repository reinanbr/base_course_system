export default function Navbar() {
  return (
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0">
            <a href="/" class="text-2xl font-bold text-blue-600">
              MyCourses
            </a>
          </div>
          <div class="hidden md:flex space-x-6">
            <a href="/" class="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="/courses" class="text-gray-700 hover:text-blue-600 font-medium">
              Cursos
            </a>
            <a href="/about" class="text-gray-700 hover:text-blue-600 font-medium">
              Sobre
            </a>
            <a href="/login" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Entrar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

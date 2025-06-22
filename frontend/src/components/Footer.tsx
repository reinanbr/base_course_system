export default function Footer() {
  return (
    <footer class="bg-gray-800 text-gray-200 mt-12">
      <div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-xl font-bold mb-4">MyCourses</h2>
          <p class="text-sm">Uma plataforma moderna para aprender com os melhores cursos online.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Links</h3>
          <ul class="space-y-1">
            <li><a href="/" class="hover:underline">Home</a></li>
            <li><a href="/courses" class="hover:underline">Cursos</a></li>
            <li><a href="/about" class="hover:underline">Sobre</a></li>
            <li><a href="/login" class="hover:underline">Login</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Contato</h3>
          <p class="text-sm">Email: suporte@mycourses.com</p>
          <p class="text-sm">Telefone: (11) 99999-9999</p>
        </div>
      </div>
      <div class="bg-gray-900 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MyCourses. Todos os direitos reservados.
      </div>
    </footer>
  );
}

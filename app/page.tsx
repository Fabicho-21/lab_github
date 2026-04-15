

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 sm:items-start">
        
        {/* Cabeçalho / Logo */}
        <div className="mb-12 flex items-center gap-4">
          <div className="rounded-full bg-black p-2 dark:bg-white">
            <svg role="img" viewBox="0 0 24 24" className="h-8 w-8 fill-white dark:fill-black" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tighter">GitHub Explorer</h1>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col gap-6 text-center sm:text-left">
          <h2 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
            Onde o mundo <span className="text-blue-600 dark:text-blue-400">constrói software.</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            O GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o <strong>Git</strong>. 
            É como uma rede social para programadores, onde você pode colaborar em projetos de qualquer lugar do mundo.
          </p>
        </section>

        {/* Cards Informativos */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-3 text-xl font-bold">Para que serve?</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Serve para organizar seus projetos, manter um histórico de todas as alterações (versionamento) e permitir que várias pessoas trabalhem no mesmo código sem um sobrescrever o outro.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-3 text-xl font-bold">Principais Conceitos</h3>
            <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><strong>Repositório:</strong> A pasta do seu projeto.</li>
              <li><strong>Commit:</strong> Um salvamento das suas alterações.</li>
              <li><strong>Pull Request:</strong> Propor mudanças para um código.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com"
            className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Criar minha conta
          </a>
          <a
            href="https://docs.github.com/pt"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Ver documentação
          </a>
        </div>

        {/* Rodapé Simples */}
        <footer className="mt-24 w-full border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">
            Feito com Next.js, Tailwind e um toque de IA.
          </p>
        </footer>
      </main>
    </div>
  );
}
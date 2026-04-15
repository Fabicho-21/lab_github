export default function Configuracao() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-6 font-sans dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        </h1>

        <div className="space-y-10">
          
          {/* Passo 1: Instalação */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
              1. Instalar o Git via terminal do Visual Studio:
            </h2>
            <div className="relative group">
              <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm text-zinc-300">
                <code>winget install --id Git.Git -e --source winget</code>
              </pre>
              <span className="mt-2 block text-xs text-zinc-500 italic">
                * Reinicie o VS Code após a instalação para o comando ser reconhecido.
              </span>
            </div>
          </section>

          {/* Passo 2: Configuração de Usuário */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
              2. Configurar o usuário do GitHub no Visual Studio:
            </h2>
            <div className="space-y-3">
              <div className="rounded-lg bg-zinc-950 p-4">
                <code className="block text-sm text-zinc-300">
                  git config --global user.email emaildogit@exemplo.com
                </code>
                <code className="block mt-2 text-sm text-zinc-300">
                  git config --global user.name SeuNomeDeUsuario
                </code>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Esses comandos vinculam seus commits à sua conta oficial do GitHub.
              </p>
            </div>
          </section>

          {/* Passo 3: Autorização */}
          <section className="rounded-xl bg-amber-50 p-6 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-900/50">
            <h2 className="mb-2 text-lg font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-xs text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                !
              </span>
              Autorizar o acesso
            </h2>
            <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-300/80">
              Quando você tentar realizar o seu primeiro <strong>push</strong> ou <strong>clone</strong>, 
              uma janela do navegador será aberta solicitando permissão. 
              <strong> Autorize o acesso quando for perguntado</strong> para concluir a integração.
            </p>
          </section>

        </div>

        <footer className="mt-12 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <button 
            onClick={() => window.history.back()}
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
          >
            ← Voltar para a página inicial
          </button>
        </footer>
      </main>
    </div>
  );
}
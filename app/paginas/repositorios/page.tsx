"use client"

import { useState } from "react"
import { Check, Copy, GitBranch, Trash2, Link2, FolderGit2, Eye, Sparkles } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Criar um repositório no GitHub",
    description: "Acesse github.com, clique em 'New repository' e crie um novo repositório vazio para seu projeto.",
    command: null,
    icon: GitBranch,
    accent: "bg-sky-500",
    lightAccent: "bg-sky-50",
    textAccent: "text-sky-600",
  },
  {
    number: 2,
    title: "Inicializar o Git no projeto",
    description: "Na pasta do projeto do Visual Studio, inicialize o Git para começar o versionamento.",
    command: "git init",
    note: "Inicializa o Git dentro da pasta do projeto",
    icon: FolderGit2,
    accent: "bg-violet-500",
    lightAccent: "bg-violet-50",
    textAccent: "text-violet-600",
  },
  {
    number: 3,
    title: "Verificar repositório conectado",
    description: "Confira se há algum repositório remoto já vinculado ao seu projeto.",
    command: "git remote -v",
    icon: Eye,
    accent: "bg-amber-500",
    lightAccent: "bg-amber-50",
    textAccent: "text-amber-600",
  },
  {
    number: 4,
    title: "Conectar ao repositório",
    description: "Vincule seu projeto local ao repositório remoto que você criou no GitHub.",
    command: 'git remote add origin "https://github.com/usuario/repositorio"',
    icon: Link2,
    accent: "bg-emerald-500",
    lightAccent: "bg-emerald-50",
    textAccent: "text-emerald-600",
  },
  {
    number: 5,
    title: "Remover repositório (se necessário)",
    description: "Caso precise trocar de repositório, remova o vínculo atual primeiro e depois conecte no novo.",
    command: "git remote remove origin",
    note: "Depois conecte no novo repositório usando o passo 4",
    icon: Trash2,
    accent: "bg-rose-500",
    lightAccent: "bg-rose-50",
    textAccent: "text-rose-600",
  },
]

function CommandBlock({ command, accent }: { command: string; accent: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-slate-400">Terminal</span>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <code className="font-mono text-sm text-slate-100">
          <span className="text-emerald-400">$</span> {command}
        </code>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-all ${
            copied ? "bg-emerald-500" : accent + " hover:opacity-90"
          }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copiar
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default function GitHubGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.08),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Guia Passo a Passo
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Conectar Visual Studio
            <span className="mt-2 block bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
              ao GitHub
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Aprenda a vincular seu projeto local do Visual Studio a um repositório remoto no GitHub de forma simples e rápida.
          </p>
        </div>
      </header>

      {/* Steps */}
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="space-y-6">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                key={step.number}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md sm:p-8"
              >
                <div className="flex gap-5">
                  {/* Icon */}
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${step.lightAccent}`}>
                    <Icon className={`h-6 w-6 ${step.textAccent}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${step.accent}`}>
                        {step.number}
                      </span>
                      <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                        {step.title}
                      </h2>
                    </div>
                    
                    <p className="leading-relaxed text-slate-600">
                      {step.description}
                    </p>

                    {step.command && <CommandBlock command={step.command} accent={step.accent} />}

                    {step.note && (
                      <div className={`mt-4 flex items-start gap-2 rounded-lg ${step.lightAccent} px-4 py-3`}>
                        <div className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${step.accent}`} />
                        <p className={`text-sm ${step.textAccent}`}>
                          {step.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Success Message */}
        <div className="mt-12 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
            <Check className="h-7 w-7 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold text-emerald-900">
            Pronto!
          </h3>
          <p className="mt-2 text-emerald-700">
            Seguindo esses passos, seu projeto estará conectado ao GitHub.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-8 text-center">
          <p className="text-sm text-slate-500">
            Guia de integração Visual Studio + GitHub
          </p>
        </div>
      </footer>
    </div>
  )
}

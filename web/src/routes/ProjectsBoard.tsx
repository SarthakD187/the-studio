import { Page } from "../components/Page";

export function ProjectsBoard() {
  return (
    <Page>
      <header className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-zinc-400">Private area — members only.</p>
        </div>
      </header>

      <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="text-zinc-400">Nothing here yet. Create your first project soon.</div>
        </div>
      </section>
    </Page>
  );
}

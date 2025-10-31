import type { PropsWithChildren } from "react";

export function Page({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-20">{children}</div>
    </div>
  );
}

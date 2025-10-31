import { InputHTMLAttributes } from "react";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-xl bg-black/40 border border-white/10",
        "px-3 py-3 outline-none text-zinc-100 placeholder:text-zinc-400",
        "focus:border-white/20 focus:ring-2 focus:ring-white/10 transition"
      ].join(" ")}
    />
  );
}

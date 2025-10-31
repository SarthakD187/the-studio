import { useEffect, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "../components/TextInput";

export function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { if (user) navigate("/title", { replace: true }); }, [user, navigate]);

  return (
    <div className="min-h-dvh flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black text-zinc-100">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
        <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
        <p className="mt-2 text-sm text-zinc-400">Trust in yourself.</p>

        <div className="mt-6 space-y-3">
          <TextInput placeholder="email@domain.com" value={email} onChange={e=>setEmail(e.target.value)} type="email" autoFocus />
          <TextInput placeholder="password" value={pw} onChange={e=>setPw(e.target.value)} type="password" />
          <button
            className="w-full rounded-xl bg-white text-black font-medium py-3 hover:bg-zinc-100 active:translate-y-px transition"
            onClick={async () => { await login(email, pw); navigate("/title"); }}
          >
            Continue
          </button>
        </div>

        <p className="mt-6 text-sm text-zinc-400 text-center">
          New here? <Link className="underline underline-offset-2" to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

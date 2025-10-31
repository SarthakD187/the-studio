import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TextInput } from "../components/TextInput";

export function Confirm() {
  const [params] = useSearchParams();
  const email = useMemo(() => params.get("email") ?? "", [params]);
  const [code, setCode] = useState("");
  const { confirm, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { if (user) navigate("/title", { replace: true }); }, [user, navigate]);

  return (
    <div className="min-h-dvh flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black text-zinc-100">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
        <h1 className="text-2xl font-semibold tracking-tight">Confirm your email</h1>
        <p className="mt-2 text-sm text-zinc-400">We emailed a 6-digit code to <span className="text-zinc-200">{email}</span>.</p>

        <div className="mt-6 space-y-3">
          <TextInput placeholder="confirmation code" value={code} onChange={e=>setCode(e.target.value)} inputMode="numeric" />
          <button
            className="w-full rounded-xl bg-white text-black font-medium py-3 hover:bg-zinc-100 active:translate-y-px transition"
            onClick={async () => { await confirm(email, code); navigate("/login"); }}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

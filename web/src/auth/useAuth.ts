import { create } from "zustand";
import { getCurrentUser, signIn, signOut, signUp, confirmSignUp } from "aws-amplify/auth";

type User = { userId: string; username: string; } | null;

type State = {
  user: User;
  init(): Promise<void>;
  register(email: string, password: string): Promise<void>;
  confirm(email: string, code: string): Promise<void>;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
};

export const useAuth = create<State>((set) => ({
  user: null,

  async init() {
    try {
      const u = await getCurrentUser();
      set({ user: { userId: u.userId, username: u.username } });
    } catch {
      set({ user: null });
    }
  },

  async register(email, password) {
    await signUp({ username: email, password, options: { userAttributes: { email } } });
  },

  async confirm(email, code) {
    await confirmSignUp({ username: email, confirmationCode: code });
  },

  async login(email, password) {
    await signIn({ username: email, password });
    // fetch current user after sign-in
    const u = await getCurrentUser();
    set({ user: { userId: u.userId, username: u.username } });
  },

  async logout() {
    await signOut();
    set({ user: null });
  },
}));

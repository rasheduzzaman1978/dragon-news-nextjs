import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

// ✅ এখান থেকেই destructure করো
export const { signIn, signUp, useSession } = authClient;
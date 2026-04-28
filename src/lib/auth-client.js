"use client";

import { createAuthClient } from "better-auth/react";

// ✅ Base URL (env থেকে নাও)
const baseURL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// ✅ Auth Client instance
export const authClient = createAuthClient({
  baseURL,
});

// ✅ Hooks (React use করার জন্য)
export const { useSession } = authClient;

// ✅ Auth actions (clean usage)
export const signIn = authClient.signIn;
export const signUp = authClient.signUp;
export const signOut = authClient.signOut;
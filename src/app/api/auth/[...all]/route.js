import { createAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export async function GET(req) {
  const auth = await createAuth();
  const handlers = toNextJsHandler(auth);
  return handlers.GET(req);
}

export async function POST(req) {
  const auth = await createAuth();
  const handlers = toNextJsHandler(auth);
  return handlers.POST(req);
}
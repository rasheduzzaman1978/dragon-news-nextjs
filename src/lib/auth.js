import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI is not defined");
}

// ✅ global cache (Next.js safe)
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

const clientConn = await clientPromise;
const db = clientConn.db("dragonNews-db");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: clientConn,
  }),

  emailAndPassword: {
    enabled: true,
  },

  // ✅ Google OAuth (JS version)
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  // optional but useful
  trustedOrigins: ["http://localhost:3000"],
});
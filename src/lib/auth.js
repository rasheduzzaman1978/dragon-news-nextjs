import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI is not defined");
}

// ✅ global cache (VERY IMPORTANT)
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// ✅ FIXED createAuth
export const createAuth = async () => {
  const clientConn = await clientPromise;
  const db = clientConn.db("dragonNews-db");

  return betterAuth({
    database: mongodbAdapter(db, {
      client: clientConn,
    }),

    emailAndPassword: {
      enabled: true,
    },

    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
    },

    trustedOrigins: ["http://localhost:3000"],
  });
};
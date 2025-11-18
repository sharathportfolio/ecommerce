import { PrismaClient } from "../../generated/prisma/index.js"; // ✅ custom output path
import dotenv from "dotenv";

dotenv.config();

// declare global {
//   // This prevents multiple instances of Prisma Client in development
//   // during hot reloads
//   var prismadb: PrismaClient | undefined;
// }
declare global {
  // This prevents multiple instances of Prisma Client in development
  // during hot reloads
  namespace globalThis{
    var prismadb: PrismaClient | undefined;
  }
}

const prisma = new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prismadb = prisma;

export default prisma;

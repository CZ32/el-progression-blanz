import { router } from "../trpc";
import { authRouter } from "./auth";
import {messageRouter } from "./message";
import { userRouter } from "./user";

const appRouter = router({
  messages: messageRouter,
  users: userRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

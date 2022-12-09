import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const messageRouter = router({
  welcome: publicProcedure
    .input(z.object({ message: z.string()}))
    .query(({ input }) => {
      return {
        message: input.message
      }
    }),
})

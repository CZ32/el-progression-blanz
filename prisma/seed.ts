import { Prisma } from "@prisma/client";
import { prisma } from "../src/server/db/client";

async function main() {
  const id = "sfgthhqhxk00003b600tymydho";

  await prisma.user.create({
    data: {
        id: id,
        name: "Charles",
        email: "charlese@testemail.com"
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

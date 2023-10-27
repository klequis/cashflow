// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await prisma.cashFlow.deleteMany();
  await prisma.expenses.deleteMany();

  await prisma.expenses.createMany({
    data: [
      {
        acct: "7123",
        acctName: "cbChaseChk",
        item: "Gas",
        amount: -50,
        periodicity: "monthly",
        onDate: null,
        onDay: 1,
        numDays: null,
      },
    ],
  });
}

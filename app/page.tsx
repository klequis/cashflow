import { Expenses } from "../next-env";
import prisma from './lib/prisma'

// Types of property 'onDay' are incompatible.
// Type 'number | null' is not assignable to type 'number | undefined'.
// Type 'null' is not assignable to type 'number | undefined'.ts(2322)

const fetchExpenses = async (): Promise<Expenses[]> => {
  const expenses = await prisma.expenses.findMany()
  
  return expenses
}

export default async function Home() {
  const expenses = await fetchExpenses()
  console.log(expenses)
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}

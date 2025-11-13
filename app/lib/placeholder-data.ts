export type Invoice = {
  customer_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};

const invoices: Invoice[]  = [
  {
    customer_id: "1",
    amount: 15795,
    date: '2022-12-06',
    status: 'pending',
  },
  {
    customer_id: "2",
    amount: 20348,
    date: '2022-11-14',
    status: 'pending',
  },
];
import Transaction from "./Transaction";

const Transactions = ({ transactions, onDelete, onToggle }) => {
  return (
    <>
      {transactions.map((transactions, index) => (
        <Transaction key={index} transaction={transactions} />
      ))}
    </>
  );
};

export default Transactions;

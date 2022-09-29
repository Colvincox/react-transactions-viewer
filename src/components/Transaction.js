import ConvertDate from "./ConvertDate";

const Transaction = ({ transaction, onDelete, onToggle }) => {
  return (
    <div
      className={`trans ${transaction.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(transaction.id)}
    >
      <h3>
        {transaction.amount} {transaction.txnType}{" "}
        <ConvertDate timestamp={transaction.timestamp} />
      </h3>
      <p>
        {transaction.location.address}
        {" - "}
        {transaction.location.city}
        {", "}
        {transaction.location.zipCode}
      </p>
    </div>
  );
};

export default Transaction;

import React from "react";
import { useSelector } from "react-redux";

const TransactionTable = ({ id, type }) => {
  const bookTransactions = useSelector((state) => state.stock.bookTransactions);
  let displayTransactions = [];
  if (type == "b") {
    displayTransactions = bookTransactions.filter((b) => b.bookId == id);
  }
  const tableRows = displayTransactions.map((transaction) => (
    <tr
      key={transaction.id}
      className=" bg-white hover:bg-primaryGreen hover:text-white">
      <td className="pr-10 pl-2">{transaction.id}</td>
      <td className="pr-10 pl-2">{transaction.accountId}</td>
      <td className="pr-10 pl-2">{transaction.type}</td>
      <td className="pr-10 pl-2">{transaction.date}</td>
    </tr>
  ));

  return (
    <div className=" h-[700px] overflow-y-auto overflow-x-hidden min-w-full border-black border-2">
      <table className="">
        <thead>
          <tr className="sticky top-0 text-white bg-secondaryGreen">
            <th className="pr-10 pl-2">ID</th>
            <th className="pr-10 pl-2">Account ID</th>
            <th className="pr-10 pl-2">Action</th>
            <th className="pr-2 pl-10">Date</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

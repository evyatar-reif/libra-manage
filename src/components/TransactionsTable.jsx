import React from "react";
import { useSelector } from "react-redux";

const TransactionTable = ({ id, type }) => {
  const { bookTransactions } = useSelector((state) => state.stock);
  const { accountTransactions } = useSelector((state) => state.accounts);
  if (type == "b") {
    let displayTransactions = [];
    displayTransactions = bookTransactions.filter((b) => b.bookId == id);
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
  } else if (type == "a") {
    let displayTransactions = [];
    const accTransactions = accountTransactions.filter(
      (t) => t.accountId == id
    );
    const bTransactions = bookTransactions.filter((t) => t.accountId == id);
    displayTransactions = [...accTransactions, ...bTransactions];

    // displayTransactions.sort((a, b) => a.date > b.date); add logic to order

    const tableRows = displayTransactions.map((transaction) => (
      <tr
        key={transaction.id}
        className=" bg-white hover:bg-primaryGreen hover:text-white">
        <td>{transaction.id}</td>
        <td>{transaction.type}</td>
        <td>{transaction.date}</td>
      </tr>
    ));

    return (
      <div className=" h-[550px] overflow-y-auto overflow-x-hidden w-[600px] border-black border-2">
        <table className="table-fixed">
          <thead>
            <tr className="sticky top-0 text-white bg-secondaryGreen">
              <th className="w-[200px]">ID</th>
              <th className="w-[200px]">Action</th>
              <th className="w-[200px]">Date</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
};

export default TransactionTable;

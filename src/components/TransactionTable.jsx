import React from "react";

const TransactionTable = ({ history }) => {
  const tableRows = history.map((row) => (
    <tr
      key={row.id}
      className=" bg-white hover:bg-primaryGreen hover:text-white">
      <td className="pr-10 pl-2">{row.account}</td>
      <td className="pr-10 pl-10">{row.transaction}</td>
      <td className="pr-2 pl-10">{row.date}</td>
    </tr>
  ));

  return (
    <div className=" h-[700px] overflow-y-auto overflow-x-hidden min-w-full border-black border-2">
      <table className="">
        <thead>
          <tr className="sticky top-0 text-white bg-secondaryGreen">
            <th className="pr-10 pl-2">Account</th>
            <th className="pr-10 pl-10">Action</th>
            <th className="pr-2 pl-10">Date</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

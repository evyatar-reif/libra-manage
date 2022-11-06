import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AccountsHome = () => {
  const { accounts } = useSelector((state) => state.accounts);

  const tableRows = accounts.map((account) => (
    <tr className='text-center bg-white hover:bg-primaryGreen hover:text-white cursor-pointer border-b-2 border-secondaryGreen'>
      <td className=''>
        <Link to={`/accounts/${account.id}`}>{account.id}</Link>
      </td>
      <td className=''>
        <Link to={`/accounts/${account.id}`}>{account.name}</Link>
      </td>
      <td className=''>
        <Link to={`/accounts/${account.id}`}>{account.phoneNumber}</Link>
      </td>
    </tr>
  ));

  return (
    <div className='flex flex-col p-3'>
      <span className='text-[50px] font-bold mb-[20px]'>Welcome,</span>
      <table className='w-[100vh] border-black border-2'>
        <thead className='sticky top-0 text-white bg-secondaryGreen'>
          <th>Account ID</th>
          <th>Name</th>
          <th>Phone Number</th>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default AccountsHome;

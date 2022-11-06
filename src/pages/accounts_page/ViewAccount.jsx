import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Modal from "../../components/Modal";
import QRCode from "react-qr-code";
import TransactionTable from "../../components/TransactionsTable";
import BookList from "../../components/BookList";

const ViewAccount = () => {
  const { accountId } = useParams();
  const { stock, accounts } = useSelector((state) => state);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const account = accounts.accounts.find((a) => a.id == accountId);

  const accountAffectedTransactions = stock.bookTransactions.filter(
    (t) => t.accountId == accountId
  );
  const allBorrowedBooks = stock.allBooks.filter((b) => b.isBorrowed);

  console.log(accountAffectedTransactions);
  console.log(allBorrowedBooks);

  return (
    <div className="pl-5 flex flex-col gap-3">
      <span className="text-[60px] font-bold">{account.name}</span>
      <div className="flex flex-col text-[20px]">
        <label>Id</label>
        <span>{account.id}</span>
        <span
          onClick={() => setIsModalOpen(true)}
          className="font-bold  hover:underline cursor-pointer">
          open QR
        </span>
      </div>
      <div className="flex flex-col text-[20px]">
        <label>Phone Number</label>
        <span>{account.phoneNumber}</span>
      </div>

      <div className="flex">
        <TransactionTable
          id={account.id}
          type="a"
        />
        <BookList books={null} />
      </div>

      <Modal
        open={isModalOpen}
        closeOnOutsideClick={true}
        onClose={() => setIsModalOpen(false)}>
        <div className="bg-white p-3">
          <QRCode value={account.id} />
        </div>
      </Modal>
    </div>
  );
};

export default ViewAccount;

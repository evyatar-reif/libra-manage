import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";

import SideNav from "../../components/SideNav";
import ViewAccount from "../../components/ViewAccount";
import Modal from "../../components/Modal";
import AddAccount from "../../components/AddAccount";
import SearchAccount from "../../components/SearchAccount";
import { addAccount } from "../../redux/accountReducer";

const AccountsPage = () => {
  const { accounts } = useSelector((state) => state.accounts);
  const navigate = useNavigate();

  const [account, setAccount] = useState(null);
  const [modalState, setModalState] = useState({ add: false, search: false });

  const disaptch = useDispatch();

  function onAddAccount(newAccount) {
    setModalState((prev) => {
      return { ...prev, add: false };
    });
    disaptch(addAccount(newAccount));
  }

  function onSearchAccount({ phoneNumber }) {
    const foundAccount = accounts.find((a) => a.phoneNumber == phoneNumber);

    if (foundAccount) {
      setAccount(foundAccount);
      navigate(`/accounts/${foundAccount.id}`);
    }

    setModalState((prev) => {
      return { ...prev, search: false };
    });
  }
  return (
    <main className="flex">
      <SideNav
        onSearch={() =>
          setModalState((prev) => {
            return { ...prev, search: true };
          })
        }
        onAddAccount={() =>
          setModalState((prev) => {
            return { ...prev, add: true };
          })
        }
      />

      {/* <ViewAccount account={account} /> */}

      <Modal
        open={modalState.add}
        closeOnOutsideClick={true}
        onClose={() =>
          setModalState((prev) => {
            return { ...prev, add: false };
          })
        }>
        <AddAccount onAddAccount={onAddAccount} />
      </Modal>
      <Modal
        open={modalState.search}
        closeOnOutsideClick={true}
        onClose={() =>
          setModalState((prev) => {
            return { ...prev, search: false };
          })
        }>
        <SearchAccount onSearchAccount={onSearchAccount} />
      </Modal>
    </main>
  );
};

export default AccountsPage;

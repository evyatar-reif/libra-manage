import { Routes, Route } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Header from "./components/Header";

import HomePage from "./pages/home_page/HomePage";
import StockPage from "./pages/stock_page/StockPage";
import AccountsPage from "./pages/accounts_page/AccountsPage";
import ActionsPage from "./pages/actions_page/ActionsPage";
import ViewBook from "./pages/stock_page/ViewBook";

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <div className="flex-col grow">
          <Header />
          <main className="">
            <Routes>
              <Route
                exact
                path="/"
                element={<HomePage />}
              />
              <Route
                exact
                path="/stock"
                element={<StockPage />}
              />
              <Route
                exact
                path="/book/:bookId"
                element={<ViewBook />}
              />
              <Route
                exact
                path="/accounts"
                element={<AccountsPage />}
              />
              <Route
                exact
                path="/actions"
                element={<ActionsPage />}
              />
            </Routes>
          </main>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

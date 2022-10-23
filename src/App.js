import { Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header";

import HomePage from "./pages/home_page/HomePage";
import StockPage from "./pages/stock_page/StockPage";
import AccountsPage from "./pages/accounts_page/AccountsPage";
import ActionsPage from "./pages/actions_page/ActionsPage";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

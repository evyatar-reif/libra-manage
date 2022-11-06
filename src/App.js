import { Routes, Route } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Header from "./components/Header";

import HomePage from "./pages/home_page/HomePage";
import StockPage from "./pages/stock_page/StockPage";

import ViewBook from "./pages/stock_page/ViewBook";

import ViewAccount from "./pages/accounts_page/ViewAccount";
import AccountsPage from "./pages/accounts_page/AccountsPage";
import AccountsHome from "./pages/accounts_page/AccountsHome";
import StockHome from "./pages/stock_page/StockHome";

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <div className='flex-col grow'>
          <Header />
          <main className=''>
            <Routes>
              <Route
                exact
                path='/'
                element={<HomePage />}
              />

              <Route
                exact
                path='/stock'
                element={<StockPage />}>
                <Route
                  exact
                  path=':bookId'
                  element={<ViewBook />}
                />
                <Route
                  exact
                  path='home'
                  element={<StockHome />}
                />
              </Route>

              <Route
                exact
                path='/accounts'
                element={<AccountsPage />}>
                <Route
                  exact
                  path=':accountId'
                  element={<ViewAccount />}
                />
                <Route
                  exact
                  path='home'
                  element={<AccountsHome />}
                />
              </Route>
            </Routes>
          </main>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

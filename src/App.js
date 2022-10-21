import AddBook from "./components/AddBook";
import HomePage from "./pages/home_page/HomePage";
import StockPage from "./pages/stock_page/StockPage";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div
        className="p-3 bg-stone-200 h-screen w-screen"
        h-full
        w-full>
        <StockPage />
      </div>
    </Provider>
  );
}

export default App;

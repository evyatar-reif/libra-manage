import AddBook from "./components/AddBook";
import HomePage from "./pages/home_page/HomePage";
import StockPage from "./pages/stock_page/StockPage";

function App() {
  return (
    <div
      className="p-3 bg-stone-200 h-screen w-screen"
      h-full
      w-full>
      <StockPage />
    </div>
  );
}

export default App;

import "./App.css";
import BitcoinComponent from "./components/BitcoinComponent";
import EmojiProvider from "./contexts/EmojiProvider";

function App() {
  return (
    <>
      <EmojiProvider>
        <h1>Bitcoin Rates</h1>
        <BitcoinComponent />
      </EmojiProvider>
    </>
  );
}

export default App;

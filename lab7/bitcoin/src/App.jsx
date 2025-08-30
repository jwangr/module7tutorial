import "./App.css";
import BitcoinComponent from "./components/BitcoinComponent";
import Emoji from "./components/Emoji";
import EmojiProvider from "./contexts/EmojiProvider";

function App() {
  return (
    <>
      <h1>Bitcoin Rates</h1>
      <BitcoinComponent />
      
      <EmojiProvider>
        <Emoji />
      </EmojiProvider>
    </>
  );
}

export default App;

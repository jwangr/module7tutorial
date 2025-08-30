import EmojiProvider from "../contexts/EmojiProvider";
import BitcoinComponent from "../components/BitcoinComponent";

export default function BitcoinEmojiPage() {
  return (
    <EmojiProvider>
      <h1>Bitcoin Rates</h1>
      <BitcoinComponent />
    </EmojiProvider>
  );
}

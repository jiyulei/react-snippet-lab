import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import { ContactForm } from "./components/ContactForm.jsx/ContactForm";
import { TrafficLight } from "./components/TrafficLight/TrafficLight";
import { CrouselContainer } from "./components/ImageCrousel/CrouselContainer";
import { TicTacToe } from "./components/TicTacToe/TicTacToe";
import { TicTacToe2 } from "./components/TicTacToell/TicTacToe2";
import { TransferList } from "./components/TransferList/TransferList";
import { TodoList } from "./components/TodoList/TodoList";
import { CryptoConverter } from "./components/CryptoConverter/CryptoConverter";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div>React Snippet</div>
      {/* <ShoppingList />
      <ContactForm />
      <TrafficLight />
      <CrouselContainer /> */}
      {/* <TicTacToe /> */}
      {/* <TicTacToe2 size={4}/> */}
      {/* <TransferList /> */}
      {/* <TodoList /> */}
      <CryptoConverter/>
    </div>
  );
}

export default App;

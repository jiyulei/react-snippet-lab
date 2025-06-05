import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { TrafficLight } from "./components/TrafficLight/TrafficLight";
import { CrouselContainer } from "./components/ImageCrousel/CrouselContainer";
import { TicTacToe } from "./components/TicTacToe/TicTacToe";
import { TicTacToe2 } from "./components/TicTacToell/TicTacToe2";
import { TransferList } from "./components/TransferList/TransferList";
import { TodoList } from "./components/TodoList/TodoList";
import { CryptoConverter } from "./components/CryptoConverter/CryptoConverter";
import { GridBox } from "./components/GridBox/GridBox";
import { DiceRoller } from "./components/DiceRoller/DiceRoller";
import { PixelArt } from "./components/PixelArt/PixelArt";
import { Test } from "./components/TestComponent/TestComponent";
import { StopWatch } from "./components/StopWatch/StopWatch";
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
      {/* <CryptoConverter/> */}
      {/* <GridBox /> */}
      {/* <DiceRoller /> */}
      {/* <PixelArt /> */}
      {/* <Test /> */}
      <StopWatch />
    </div>
  );
}

export default App;

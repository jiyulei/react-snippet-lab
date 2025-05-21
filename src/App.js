import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import { ContactForm } from "./components/ContactForm.jsx/ContactForm";
import { TrafficLight } from "./components/TrafficLight/TrafficLight";
import { CrouselContainer } from "./components/ImageCrousel/CrouselContainer";
import { TicTacToe } from "./components/TicTacToe/TicTacToe";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div>React Snippet</div>
      {/* <ShoppingList />
      <ContactForm />
      <TrafficLight />
      <CrouselContainer /> */}
      <TicTacToe />
    </div>
  );
}

export default App;

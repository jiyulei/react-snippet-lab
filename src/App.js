import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import { ContactForm } from "./components/ContactForm.jsx/ContactForm";
import { TrafficLight } from "./components/TrafficLight/TrafficLight";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div>React Snippet</div>
      <ShoppingList />
      <ContactForm />
      <TrafficLight />
    </div>
  );
}

export default App;

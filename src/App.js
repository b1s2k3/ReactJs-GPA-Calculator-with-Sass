import "./styles/App.css";
import Header from "./components/Header";
import Forms from "./components/Forms";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Forms />
    </GlobalProvider>
  );
}

export default App;

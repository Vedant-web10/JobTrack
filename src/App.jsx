import { BrowserRouter } from "react-router-dom";
import Day13App from "./components/JobTrack project/Day13App.jsx";
import JobProvider from "./components/JobTrack project/context/JobProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <JobProvider>
        <Day13App />
      </JobProvider>
    </BrowserRouter>
  );
}

export default App;

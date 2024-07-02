import Provider from "./lib/context/MDProvider";
import Layout from "./components/Layout";
import './globals.css';

const App = () => {
    return <Provider><Layout /></Provider>
}

export default App
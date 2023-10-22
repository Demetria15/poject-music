import data from "./data.json";
import sidebarData from "./stretched-goal.json"
import { Header } from "./components/Header";
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import Single from './components/Single';


console.log(data);

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="album-container">
        <Album data={data} />
        <Single data={data} />
      </div>
      <Sidebar sidebarData={sidebarData} />
    </div>
  );
};

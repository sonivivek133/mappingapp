import "./App.css";
import Footer from "./components/Footer";
import MyHeader from "./components/Header";
import Sidebar from "./components/Sidebar";
import MapMain from "./components/MapMain";
import Form from "./components/Form";
import RegionInfo from "./components/RegionInfo";
function App() {
  return (
    <div id="map">
      <MyHeader />
      <Sidebar />
      <RegionInfo />
      <Form />
      <MapMain />
      <Footer />
    </div>
  );
}

export default App;

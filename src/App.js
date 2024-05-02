import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HisHoliness from "./Pages/HisHoliness";
import Intiatives from "./Pages/Intiatives";
import Events from "./Pages/Events";

import Radio from "./Pages/Radio";
import Contribute from "./Pages/Contribute";
import Spiritual from "./Pages/Spiritual";
import Workshop from "./Pages/Workshop";
import Contact from "./Pages/Contact";
import Headers from "./component/Headers";
import DailyDivine from "./Pages/Ebooks";
import VideoGallery from "./Pages/VideoGallery";
import Blog from "./Pages/Blog";
import Akhandgyan from "./Pages/Akhandgyan";
import Brahmgyan from "./Pages/Brahmgyan";
import Blogshow from "./Pages/Blogshow";
import Loading from "./loder/Loading";
import AudioGallery from "./audio/AudioGallery";
import Livecast from "./Pages/Livecast";
import Ebooks from "./Pages/Ebooks";
import ImageGallery from "./Pages/ImageGallery";
import { ScrollToScroll } from "./WindowToScroll";

function App() {
  return (
    <div style={{backgroundColor:"#F6F2E8"}}>
      <Headers />
      <ScrollToScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hisholiness" element={<HisHoliness />} />
        <Route path="/initiatives" element={<Intiatives />} />
        <Route path="/initiatives-spiritual" element={<Spiritual />} />
        <Route path="/initiatives-workshop" element={<Workshop />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Livecast" element={<Livecast />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/brahmgyan" element={<Brahmgyan />} />
        {/* <Route path="/akhandgyan" element={<Akhandgyan />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/audio-gallery" element={<AudioGallery />} />
        <Route path="/Ebooks" element={<Ebooks />} />
        <Route path="/Blogshow/:id" element={<Blogshow />} />
        <Route path="/Loading" element={<Loading />} />
        {/* <Route path="/Books" element={ <Books /> } /> */}
        <Route path="/ImageGallery" element={<ImageGallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Video from './Video';
import video1 from "./videos/1.mp4";
import video2 from "./videos/2.mp4";
import video3 from "./videos/3.mp4";
import video4 from "./videos/4.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video file={video1} />
        <Video file={video2} />
        <Video file={video3} />
        <Video file={video4} />
      </div>
    </div>
  );
}

export default App;

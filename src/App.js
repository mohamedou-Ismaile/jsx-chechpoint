
import './App.css';
import './styles.css';
import imageInSrc from "./imageInSrc.png";
function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Mohamedou Ismaile</h1>
          <br />
          <img src={imageInSrc}  alt=""/>
          <br />
          <img src="/imageInPublic.jpg" alt=""/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;

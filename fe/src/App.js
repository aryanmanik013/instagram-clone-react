import "./App.css";
import VideoCard from './VideoCard'
function App() {


  return (
    <div className="app">
      <div className="app__top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
          className="app__logo"
          alt=""
        />
        {/* <h1>Reels</h1> */}
      </div>
      <div className="app__videos">
      <VideoCard
        channel="aryan"
        avatarSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        song="Test Song"
        url="https://www.instagram.com/reel/CwflmVmJF7W/?utm_source=ig_web_copy_link"
        likes="950"
        shares="340"
      />
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      </div>
    </div>
  );
}

export default App;

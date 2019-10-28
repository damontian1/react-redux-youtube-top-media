import React from "react";
import VideoResult from "./VideoResult";
import VideoList from "./VideoList";
import Navigation from "./Navigation";
import Movies from "./Movies";
import Music from "./Music";
import { Provider } from './Context';

class App extends React.Component {

  render() {
    const renderMediaList = () => {
      return (
        <div className="row">
          <div className="col-md-6">
            <Movies />
          </div>
          <div className="col-md-6">
            <Music />
          </div>
        </div>
      )
    }

    return (
      <Provider>
        <Navigation />
        <div className="row">
          <div className="container-fluid">
            <VideoResult />
            <VideoList />
          </div>
        </div>
        {renderMediaList()}
      </Provider >
    )

  }
}

export default App;

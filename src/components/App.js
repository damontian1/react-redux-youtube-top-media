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
        <div className="row mt-4">
          <div className="col-md-7">
            <Movies />
          </div>
          <div className="col-md-5">
            <Music />
          </div>
        </div>
      )
    }

    return (
      <Provider>
        <div className="container-fluid" style={{ minWidth: "400px" }}>
          <Navigation />
          <div className="row">
            <div className="container-fluid">
              <VideoResult />
              <VideoList />
            </div>
          </div>
          {renderMediaList()}
        </div>
      </Provider >
    )

  }
}

export default App;

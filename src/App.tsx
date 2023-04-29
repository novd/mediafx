import * as React from "react";
import './App.css';
import PhotoUploader from './shared/component/photo-uploader/PhotoUploader';

export default class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <PhotoUploader></PhotoUploader>
      </div>
    );
  }
}

import React from "react";
import { BrowserQRCodeReader } from "@zxing/library";
import { QRStyle } from "../QRCodeStyle";

interface IState {
  videoInputDevices: any;
}

export default class QRPresenter extends React.Component {
  componentDidMount = async () => {
    const codeReader = new BrowserQRCodeReader();

    codeReader
      .listVideoInputDevices()
      .then((videoInputDevices) => {
        videoInputDevices.forEach((device) =>
          console.log(`${device.label}, ${device.deviceId}`)
        );
        const firstDeviceId = videoInputDevices[0].deviceId;
        codeReader
          .decodeOnceFromVideoDevice(firstDeviceId, "video")
          .then((result) => console.log(result.getText()));
      })
      .catch((err) => console.error(err));
  };

  render = () => {
    const { Video, VideoContainer } = QRStyle;
    return (
      <VideoContainer>
        <Video id="video"></Video>
      </VideoContainer>
    );
  };
}

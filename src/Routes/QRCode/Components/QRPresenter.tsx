import React from "react";
import { BrowserQRCodeReader } from "@zxing/library";
import { QRStyle } from "../QRCodeStyle";
import { connect } from "react-redux";
import { ReduxActions } from "../../../Components/Redux/Store";
import API from "../../../Components/API";

interface IState {
  videoInputDevices: any;
}

interface IProps {
  push: Function;
  isSubmit: boolean;
  reduxState: any;
}
class QRPresenter extends React.Component<IProps, IState> {
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
          .then(async (result) => {
            if (this.props.isSubmit) {
              const resulttext = result.getText().toString();
              const resulttextlist = resulttext.split("/");
              console.log(resulttextlist[2]);
              console.log(this.props.reduxState);
              await API.Forms.PostForm(
                this.props.reduxState.submitFormData,
                resulttextlist[2]
              );
              this.props.push("/home");
            } else {
              const resulttext = result.getText().toString();
              this.props.push(resulttext);
            }
          });
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

function mapStateToProps(state: any) {
  return { reduxState: state };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  return {
    setSubmitFormData: (submitFormData: object) =>
      dispatch(ReduxActions.setSubmitFormData(submitFormData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QRPresenter);

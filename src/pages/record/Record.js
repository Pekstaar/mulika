import React from "react";
import { BsRecordCircle } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { FaStop, FaPause } from "react-icons/fa";
import { ImPlay2 } from "react-icons/im";
import "./app.css";
import { Context } from "../../utils/MainContext";
import { Link } from "react-router-dom";
import { withRouter } from "../../utils/WithRouter";

const videoType = "video/webm";

class Record extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      video: {},
    };
    this.redirect = this.redirect.bind(this);
  }

  redirect(path) {
    this.props.navigate(path);
  }

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 852, height: 480, facingMode: "environment" },
    });

    // show it to user
    this.video.srcObject = stream;
    this.video.play();
    // init recording
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: videoType,
    });
    // init data storage for video chunks
    this.chunks = [];
    // listen for data from media recorder
    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    };
  }

  startRecording(e) {
    if (this.mediaRecorder) {
      e.preventDefault();
      // wipe old data chunks
      this.chunks = [];
      // start recorder with 10ms buffer
      this.mediaRecorder.start(10);
      // say that we're recording
      this.setState({ recording: true });
    }
  }

  stopRecording(e) {
    e.preventDefault();

    // stop the recorder
    this.mediaRecorder.stop();
    // say that we're not recording
    this.setState({ recording: false });
    // save the video to memory
    this.saveVideo();

    this.redirect("/report");
  }

  saveVideo() {
    // convert saved chunks to blob
    const blob = new Blob(this.chunks, { type: videoType });
    const cont = this.context;

    cont.getBlob(blob);
    // cont.setVblob(blob);

    // generate video url from blob
    const videoURL = window.URL.createObjectURL(blob);
    // append videoURL to list of saved videos for rendering
    // const videos = this.state.videos.concat([videoURL]);
    this.setState({ video: videoURL });
  }

  close() {
    this.stopRecording();
  }

  render() {
    const { recording } = this.state;

    return (
      <>
        <div
          className="h-screen relative camera"
          style={{ display: "grid", gridTemplateRows: "1fr 5rem" }}
        >
          {recording && (
            <div className="absolute top-5 left-5 text-red-600 flex items-center gap-2">
              <BsRecordCircle className="text-4xl" />

              <span className="text-sm">recording . . .</span>
            </div>
          )}

          <Link
            to="/"
            className="absolute top-3 right-2 text-white text-4xl z-10 cursor-pointer"
            as="button"
          >
            <VscChromeClose />
          </Link>
          <div className="bg-slate-400 w-full camera">
            <video
              className="w-full h-full max-h-full max-w-full object-cover"
              ref={(v) => {
                this.video = v;
              }}
            />
          </div>

          <div className=" flex justify-center items-center text-4xl gap-5 ">
            {recording ? (
              <button
                onClick={(e) => this.stopRecording(e)}
                className="flex flex-col items-center"
              >
                <FaStop />
                <span className="text-xs">stop</span>
              </button>
            ) : (
              <button
                onClick={(e) => this.startRecording(e)}
                className="text-6xl text-red-500 absolute "
                style={{ top: "40%", left: "44%" }}
              >
                <ImPlay2 />
              </button>
            )}
            <div className="flex flex-col items-center">
              <FaPause />

              <span className="text-xs">pause</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Record);

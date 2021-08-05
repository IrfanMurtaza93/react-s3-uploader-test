import logo from "./logo.svg";
import "./App.css";
var ReactS3Uploader = require("react-s3-uploader");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReactS3Uploader
          signingUrl="/s3/sign"
          signingUrlMethod="GET"
          accept="image/*"
          s3path="/uploads/"
          preprocess={onUploadStart}
          onSignedUrl={onSignedUrl}
          onProgress={onUploadProgress}
          onError={onUploadError}
          onFinish={onUploadFinish}
          // signingUrlHeaders={{ additional: headers }}
          // signingUrlQueryParams={{ additional: query - params }}
          signingUrlWithCredentials={true} // in case when need to pass authentication credentials via CORS
          uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
          scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
          // inputRef={(cmp) => (uploadInput = cmp)}
          autoUpload={true}
        />
      </header>
    </div>
  );
}

function onUploadStart() {
  console.log("Function: onUploadStart");
}
function onSignedUrl() {
  console.log("Function: onSignedUrl");
}
function onUploadProgress() {
  console.log("Function: onUploadProgress");
}
function onUploadError() {
  console.log("Function: onUploadError");
}
function onUploadFinish() {
  console.log("Function: onUploadFinish");
}

export default App;

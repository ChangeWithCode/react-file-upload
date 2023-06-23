import { useState, useRef } from "react";
import "./App.css";
import Header from "./Components/Header";
import FileUplaod from "./Components/FileUplaod";
import Progress from "./Components/Progress";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loader, setLoader] = useState(true);

  const fileRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const resetFileInput = () => {
    // 👇️ reset input value
    fileRef.current.value = null;
  };

  const uploadChunks = () => {
    setLoader(false);

    if (file == null) {
      return toast.error("No file selected"), setLoader(true);
    } else {
      toast("Please wait for the file to be uploaded");
      const chunkSize = 1024 * 1024; // 1MB
      const totalChunks = Math.ceil(file.size / chunkSize);
      let currentChunk = 0;

      const uploadNextChunk = () => {
        const start = currentChunk * chunkSize;
        const end = Math.min(file.size, (currentChunk + 1) * chunkSize);
        const chunk = file.slice(start, end);

        // Simulating server-side processing delay
        setTimeout(() => {
          setProgress(((currentChunk + 1) / totalChunks) * 100);
          currentChunk++;
          if (currentChunk < totalChunks) {
            uploadNextChunk();
          } else {
            // All chunks uploaded successfully
            resetFileInput();
            setProgress(0);
            toast.success("File upload completed!");
            setLoader(true);
          }
        }, 1000); // Adjust the delay time as per your needs
      };
      uploadNextChunk();
    }
  };

  return (
    <div>
      <Toaster position="top-right"></Toaster>
      <Header></Header>
      <FileUplaod
        fileRef={fileRef}
        loader={loader}
        uploadChunks={uploadChunks}
        handleFileChange={handleFileChange}
      ></FileUplaod>
      <Progress progress={Math.floor(progress)}></Progress>
    </div>
  );
}

export default App;

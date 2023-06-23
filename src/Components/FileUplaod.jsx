import UploadButton from "./Button";
import ButtonLoader from "./ButtonLoaders";
const FileUplaod = ({ uploadChunks, handleFileChange, fileRef , loader }) => {
  return (
    <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <div class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p class="text-center text-lg font-medium">Upload Your File</p>

          <div>
            <div class="relative">
              <input
                type="file"
                ref={fileRef}
                onChange={handleFileChange}
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Upload File"
              />

              {loader ? <UploadButton uploadChunks={uploadChunks}></UploadButton> : <ButtonLoader></ButtonLoader> } 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUplaod;

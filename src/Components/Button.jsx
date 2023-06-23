const UploadButton = ({uploadChunks}) => {
  return (
    <button
      type="submit"
      onClick={uploadChunks}
      class="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
    >
      Upload
    </button>
  );
};

export default UploadButton;

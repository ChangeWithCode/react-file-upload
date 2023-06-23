const Progress = ({ progress }) => {
  return (
    progress > 0 && (
      <div className="mx-auto max-w-screen-xl px-44 py-4 ">
       
        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow="75"
          class="block rounded-full bg-gray-200"
        >
          <span
            class="block h-4 rounded-full bg-black text-center text-[10px]/4"
            style={{ width: `${progress}%`}}
          >
            <span class="rounded-sm bg-white px-0.5 font-bold text-indigo-600">
              {progress}%
            </span>
          </span>
        </span>
      </div>
    )
  );
};

export default Progress;

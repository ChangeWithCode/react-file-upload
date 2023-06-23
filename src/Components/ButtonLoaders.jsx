import { PulseLoader } from "react-spinners";
const ButtonLoader = () => {
  return (
    <button class="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white">
      <PulseLoader color="white" size={10} />
    </button>
  );
};

export default ButtonLoader;

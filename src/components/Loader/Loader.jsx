import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css["loader"]}>
      <RotatingLines strokeColor="black" />
    </div>
  );
};
export default Loader;

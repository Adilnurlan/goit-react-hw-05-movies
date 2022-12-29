import { TailSpin } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="10"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      ;
    </div>
  );
};

export default Loader;

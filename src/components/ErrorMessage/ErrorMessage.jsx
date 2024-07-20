import style from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={style.errorWrap}>
      <h1>Oops, something went wrong!</h1>
      <p>Try reloading your page.</p>
      <img
        src='../../../public/error-img.jpg'
        alt='error image'
        width='370px'
      />
    </div>
  );
};

export default ErrorMessage;

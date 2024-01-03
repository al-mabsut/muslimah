import style from './index.module.css';

export const Muslimah = ({ children }) => (
  <div>
    <div className={style.styling}>Salaam, Muslimah!</div>
    {children}
  </div>
);

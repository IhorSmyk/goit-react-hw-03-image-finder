// import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { CgSearch } from 'react-icons/cg';

const Searchbar = () => {
  return (
    <header className={s.searchbar}>
      <form className={s.searchForm}>
        <button type="submit" className={s.button}>
          <CgSearch size="25" />
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete='off'
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

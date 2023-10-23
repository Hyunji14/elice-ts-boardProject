import React from 'react';
import { Link } from 'react-router-dom';
//CSS
import styles from '../css/Header.module.css';

function Header() {
  return (
    <div className={styles.header_div}>
      <div className={styles.header_title}>
        <h1>TS borad Project</h1>
      </div>

      <div className={styles.header_btns}>
        <Link to='/'>목록</Link>
        <Link to='/write'>글쓰기</Link>
      </div>
    </div>
  );
}

export default Header;

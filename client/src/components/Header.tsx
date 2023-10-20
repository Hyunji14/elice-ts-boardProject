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
        <a>목록</a>
        <a>글쓰기</a>
      </div>
    </div>
  );
}

export default Header;

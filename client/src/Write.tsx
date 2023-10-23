import React, { SyntheticEvent, useState } from 'react';
import './config/types';
import { Link } from 'react-router-dom';

function Write() {
  const [formData, setFormData] = useState({
    write_title: '',
    write_author: '',
    write_contents: '',
  });

  // form submit 함수
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  // 글 생성 함수 (제목, 작성자, 내용 포함 수정 가능해야함)
  const onWritingHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // 글 수정 함수
  return (
    <div>
      <div>
        <h1>this is Write Page</h1>
        <Link to='/'>Home</Link>
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <input
            id='write_title'
            value={formData.write_title}
            onChange={onWritingHandle}
            type='text'
            placeholder='제목을 입력하세요'
          />
          <input
            id='write_author'
            value={formData.write_author}
            onChange={onWritingHandle}
            type='text'
            placeholder='작성자'
          />
          <textarea
            id='write_contents'
            onChange={onWritingHandle}
            value={formData.write_contents}
          ></textarea>
          <button type='submit'>Write</button>
        </form>
      </div>
    </div>
  );
}

export default Write;

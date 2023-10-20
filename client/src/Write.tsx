import React from 'react';

function Write() {
  return (
    <div>
      <h1>this is Write Page</h1>

      <div>
        <form>
          <input type='text' placeholder='제목을 입력하세요' />
          <textarea></textarea>
          <button>Write</button>
        </form>
      </div>
    </div>
  );
}

export default Write;

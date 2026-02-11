import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addThread } from '../features/threads/addThreadThunk';

const AddThread = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmitAddThread = async (e) => {
    e.preventDefault();
    const result = await dispatch(addThread({ title, body, category }));
    if (addThread.fulfilled.match(result)) {
      navigate('/');
    }
  };

  return (
    <div className="containerAddThread">
      <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>ADD THREAD</p>
      <form onSubmit={handleSubmitAddThread}>
        <div className="containerAddThread2">
          <label>JUDUL</label>
          <input
            type="text"
            placeholder="TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="containerAddThread2">
          <label>KATEGORI</label>
          <input
            type="text"
            placeholder="CATEGORY"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="containerAddThread2">
          <label>BODY</label>
          <textarea
            type="text"
            rows={6}
            placeholder="BODY"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button
          style={{
            padding: '7px',
            fontSize: 'larger',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          ADD THREAD
        </button>
      </form>
    </div>
  );
};

export default AddThread;

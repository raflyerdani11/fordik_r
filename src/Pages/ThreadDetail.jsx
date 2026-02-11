import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  fetchThreadDetail,
  addComment,
} from '../features/threadDetail/threadDetailThunk';

import ItemThreadComment from '../Components/ItemThreadComment';

const ThreadDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.threadDetail);
  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(fetchThreadDetail(id));
  }, [dispatch, id]);

  const handleSubmitAddComment = (e) => {
    e.preventDefault();
    dispatch(addComment({ threadId: id, content }));
    setContent('');
  };

  if (loading || !data) return <p>Loading...</p>;

  const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);

    const diffMs = now - past;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) return `${diffYears} tahun yang lalu`;
    if (diffMonths > 0) return `${diffMonths} bulan yang lalu`;
    if (diffDays > 0) return `${diffDays} hari yang lalu`;
    if (diffHours > 0) return `${diffHours} jam yang lalu`;
    if (diffMinutes > 0) return `${diffMinutes} menit yang lalu`;

    return 'baru saja';
  };

  return (
    <div>
      <div className="containerThreadDetail">
        <div className="containerContent">
          <p className="category">#{data?.category}</p>
          <div className="containerTitleDisc">
            <p className="title">{data?.title}</p>
            <p className="desc">{data?.body}</p>
          </div>
          <div className="containerReaction">
            <div className="reaction">Like {data?.upVotesBy?.length}</div>
            <div className="reaction">Unlike {data?.downVotesBy?.length}</div>
            <div className="reaction2">{timeAgo(data?.createdAt)}</div>
            <div className="reaction2">
              <img
                src={data?.owner?.avatar}
                style={{ width: '23px', borderRadius: '50%' }}
              />
              Dibuat oleh <span>{data?.owner?.name}</span>
            </div>
          </div>
        </div>
        <div className="containerComment">
          <div className="containerAddComment">
            <p style={{ fontWeight: 'bold' }}>Berikan Komentar</p>
            {localStorage.getItem('token') ? (
              <form onSubmit={handleSubmitAddComment}>
                <div className="containerAddComment2">
                  <textarea
                    type="text"
                    rows={6}
                    placeholder="KOMENTAR"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '7px',
                    fontSize: 'medium',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  ADD COMMENT
                </button>
              </form>
            ) : (
              <p>
                <span>
                  <Link to={'/login'}>Login</Link>
                </span>{' '}
                untuk memberi komentar
              </p>
            )}
          </div>
          <div className="containerResultComment">
            <p style={{ fontWeight: 'bold' }}>
              Komentar {`(${data?.comments?.length})`}
            </p>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              {data?.comments?.map((item) => (
                <ItemThreadComment
                  key={item.id}
                  avatar={item.owner.avatar}
                  name={item.owner.name}
                  time={item.createdAt}
                  body={item.content}
                  like={item.upVotesBy.length}
                  unlike={item.downVotesBy.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadDetail;

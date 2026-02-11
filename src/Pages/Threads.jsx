import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThreads } from '../features/threads/threadsThunk';
import ItemThread from '../Components/ItemThread';

const Threads = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.threads);

  useEffect(() => {
    dispatch(fetchThreads());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="containerLoadingg">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="containerThreads">
          <p>Diskusi Tersedia</p>
          <div className="containerThreads2">
            {data?.map((item) => (
              <ItemThread
                key={item.id}
                id={item.id}
                category={item.category}
                title={item.title}
                desc={item.body}
                like={item.upVotesBy.length}
                unlike={item.downVotesBy.length}
                comment={item.totalComments}
                time={item.createdAt}
                author={item.authorName}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Threads;

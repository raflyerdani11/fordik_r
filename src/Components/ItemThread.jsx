import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../index.css';

const ItemThread = ({
  id,
  category,
  title,
  desc,
  like,
  unlike,
  comment,
  time,
  author,
}) => {
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
    <div className="itemThread">
      <p className="category">#{category}</p>
      <div className="containerTitleDisc">
        <p className="title">
          <Link key={id} to={`/${id}`}>
            {title}
          </Link>
        </p>
        <p className="desc">{desc}</p>
      </div>
      <div className="containerReaction">
        <div className="reaction">Like {like}</div>
        <div className="reaction">UnLike {unlike}</div>
        <div className="reaction">Comment {comment}</div>
        <div className="reaction2">{timeAgo(time)}</div>
        <div className="reaction2">
          Dibuat oleh <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

ItemThread.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  unlike: PropTypes.number.isRequired,
  comment: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ItemThread;

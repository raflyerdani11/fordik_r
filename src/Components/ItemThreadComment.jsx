import React from 'react';
import PropTypes from 'prop-types';

const ItemThreadComment = ({ avatar, name, time, body, like, unlike }) => {
  const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);

    const diffMs = now - past; // selisih ms
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
    <div className="containerItemThreadComment">
      <div className="containerHeaderComment">
        <div className="containerProfile">
          <img src={avatar} />
          <p>{name}</p>
        </div>
        <p className="time">{timeAgo(time)}</p>
      </div>
      <p className="body">{body}</p>
      <div className="containerReaction">
        <div className="reaction">Like {like}</div>
        <div className="reaction">Unlike {unlike}</div>
      </div>
    </div>
  );
};

ItemThreadComment.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  unlike: PropTypes.number.isRequired,
};

export default ItemThreadComment;

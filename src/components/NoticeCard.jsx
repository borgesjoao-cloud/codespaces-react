import "./NoticeCard.css";

function NoticeCard({ notice }) {
  return (
    <article className="notice-card">
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>
      <div>
        <span>Por: {notice.author}</span>
        <span>Data: {notice.date}</span>
      </div>
    </article>
  );
}

export default NoticeCard;
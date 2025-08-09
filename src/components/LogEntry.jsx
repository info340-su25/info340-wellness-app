export default function LogEntry({ title, time, children }) {
  return (
    <div className="entry">
      {title && <h3>{title}</h3>}
      {time && (
        <time dateTime={time}>{new Date(time).toLocaleDateString()}</time>
      )}
      <p>{children}</p>
    </div>
  );
}

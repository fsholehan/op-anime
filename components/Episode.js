function Episode({ eps, title, date }) {
  return (
    <div className="flex items-center justify-between">
      <span>{eps}</span>
      <span className="text-center">{title}</span>
      <span>{date}</span>
    </div>
  );
}

export default Episode;

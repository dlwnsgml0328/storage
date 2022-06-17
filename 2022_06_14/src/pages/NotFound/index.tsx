const NotFound = () => {
  return (
    <div>
      <h3>Something went wrong</h3>

      <button onClick={() => window.history.go(-1)}>back</button>
    </div>
  );
};

export default NotFound;

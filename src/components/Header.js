const Header = () => {
  return (
    <div className="header">
      <h1>Calculate Your GPA</h1>
      <button
        className="refresher"
        onClick={() => window.location.reload(false)}
      >
        Refresh All
      </button>
    </div>
  );
};

export default Header;

function ButtonDecrease({ onClick, count }) {
  return (
    <button className="control__btn" onClick={onClick} disabled={count === 0}>
      -
    </button>
  );
}

export default ButtonDecrease;

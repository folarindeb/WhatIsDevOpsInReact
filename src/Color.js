export default function Color({ hex, name, text, button }) {
  return (
    <div className="color-square" style={{ backgroundColor: hex }}>
      <h1>{name}</h1>
      <h4>{text}</h4>
      <button> Learn More </button>
    </div>
  );
}

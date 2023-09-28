import "./App.css";

const range = (from: number, to: number) => {
  const myRange = [] as number[];
  for (let i = from; i <= to; i++) {
    myRange.push(i);
  }
  return myRange;
};

const numberOfCircles = 4;

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        {range(1, numberOfCircles).map((num) => (
          <div
            style={{
              backgroundColor: "green",
              height: 100,
              width: 100,
              borderRadius: "50%",
            }}
          ></div>
        ))}
      </div>
      <button>Next State</button>
    </>
  );
}

export default App;

import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  let average = 0;
  let positive = 0;

  if (all > 0) {
    average = (good - bad) / all;
    positive = (good / all) * 100;
  }

  if (all === 0) {
    return (
      <>
        <h1>Give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>

        <hr></hr>
        <h2>StatisticLine</h2>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h1>Give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <hr></hr>
      <h2>statistics</h2>
      <p> good {good}</p>
      <p> neutral {neutral}</p>
      <p> bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive + "%"}</p>

      <hr></hr>
      <h2>StatisticLine</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="postive" value={positive + "%"} />
        </tbody>
      </table>
    </>
  );
};

export default App;

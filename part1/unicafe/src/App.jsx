import { useState } from "react";

const Header = ({title}) => {
  return (
    <h2>{title}</h2>     
  )
}

const StatisticLine = ({ text, value }) => {
  let formatValue = value;
  switch (text) {
    case "positive":
      formatValue = `${(value * 100).toFixed(1)} %`;
      break;
    case "average":
      formatValue = value.toFixed(1);
      break;
    default:
      formatValue = value;
      break;
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{formatValue}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total, sum }) => {
  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>
      <StatisticLine text="all" value={total}></StatisticLine>
      <StatisticLine text="average" value={sum / total || 0}></StatisticLine>
      <StatisticLine text="positive" value={good / total || 0}></StatisticLine>
      </tbody>
    </table>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [sum, setSum] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(total + 1);
    setSum(sum + 1);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(total + 1);
    setSum(sum + 0);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(total + 1);
    setSum(sum - 1);
  };

  return (
    <div>
      <Header title="give feedback"></Header>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header title="statistics"></Header>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        sum={sum}
      ></Statistics>
    </div>
  );
};

export default App;

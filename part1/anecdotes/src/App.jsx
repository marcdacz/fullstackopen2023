import { useState } from "react";

const Header = ({title}) => {
  return (
    <h1>{title}</h1>     
  )
}

const Anecdote = ({anecdotes, index}) => {
  return (
    <div>{anecdotes[index]}</div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Votes = ({votes, index}) => {
  return (
    <p>has {votes[index]} votes</p>
  )
}


const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  console.log('🚀  votes:', JSON.stringify(votes))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleNextAnecdote = () => {
    const index = getRandomInt(anecdotes.length);
    setSelected(index);
  };

  const handleVote = () => {   
    const copyVotes = [...votes];
    console.log('🚀  before voting:', copyVotes)
    copyVotes[selected] += 1;
    console.log('🚀  after voting:', copyVotes)
    setVotes(copyVotes)
  };

  const getMaxVotes = () => {
    const copyVotes = [...votes];
    return copyVotes.indexOf(Math.max(...copyVotes))
  }

  return (
    <div>
      <Header title="Anecdote of the day"></Header>
      <Anecdote anecdotes={anecdotes} index={selected}></Anecdote>
      <Votes votes={votes} index={selected}></Votes>
      <Button handleClick={handleVote} text="vote"></Button>
      <Button handleClick={handleNextAnecdote} text="next anecdote"></Button>
      <Header title="Anecdote with most votes"></Header>
      <Anecdote anecdotes={anecdotes} index={getMaxVotes()}></Anecdote>
      <Votes votes={votes} index={getMaxVotes()}></Votes>
    </div>
  );
};

export default App;

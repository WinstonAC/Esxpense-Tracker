import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 99.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 888.11, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 222.11,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 444,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2> Let's get started Billy!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Mashed Potatoes with Beef Cutlet",
  "Salmon with Veggies",
  "Stuffed Crapes",
  "Perogies"
]
const dishObjects = items.map((dish, index) => ({
  id: index,
  title: dish
}));
function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
      ))}
    </ul>
  );
}
function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;

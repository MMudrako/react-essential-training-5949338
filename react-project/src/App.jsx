
import './App.css'
let language = 'React'
let heart = "❤️";

function Header({ name }) {
  return (
    <header>
      <h1>Hello {language} {heart}!</h1>
      <h1>{name}'s Kitchen</h1>
    </header>
  )
}
function Footer({ year }) {
  return (
    <h5>Copyright {year}</h5>
  )
}
function App() {


  return (
    <div>
      <Header name="Maria" />
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
      <Footer year={new Date().getFullYear()} />
    </div>

  )
}

export default App

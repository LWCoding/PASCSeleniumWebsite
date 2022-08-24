import Header from './Header.js';
import Footer from './Footer.js';
import EnrichContainer from './EnrichContainer.js';
import './App.css';

// var enrichments = [{
//   name: "Video Game Design and Development",
//   description: "Interested in story writing, graphic design, music composition, programming, or maybe even something else? Game development may be the interest for you!\n\nThis club will be mainly interested in developing a conceptual understanding of the structures that make up video games and some syntax in the C# programming language. We'll be working towards gaining familiarity with the Unity Engine (which has created some VERY popular games, such as Hearthstone, Hollow Knight, Pokémon Go, Among Us), but downloading it isn't a prerequisite!\n\nThis club is also a community to develop or refine your creative skills, with the hopes of you creating projects of your own or as a team! We hope to see you there.",
//   host: "Lucas",
//   roomName: "Room 112",
//   weekdays: "M Tu W Th F"
// }]

function App() {
  return (
    <div className="App">
      <Header />
      <EnrichContainer />
      {/* <EnrichBlock name={enrichment.name} description={enrichment.description} weekdays={enrichment.weekdays} host={enrichment.host} roomName={enrichment.roomName} /> */}
      <Footer />
    </div>
  );
}

export default App;
import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  console.log("App component rendered");

  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h1>Episode {selectedEpisode.id}</h1>
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
        <button>Watch Now</button>
      </section>
    );
  }

 function Episodes() {
   return (
     <section className="episode">
       <h2>Episodes</h2>
       <ul>
         {episodes.map((episode) => (
           <li key={episode.id}
            onClick={() => setSelectedEpisode(episode)}>
             {episode.title}
           </li>
         ))}
       </ul>
     </section>
   );
 }


  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Episodes />
        <EpisodeDetails />
      </main>
    </>
  );
}

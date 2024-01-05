import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header.js";
import CoreConcepts from "./components/CoreConcepts.js";
import TabButton from "./components/TabButton.js";

function App() {
  const [selectedTopic, setSeletedTopic] = useState("components");

  function handleClick(selectedButton) {
    setSeletedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              {" "}
              JSX{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              {" "}
              State{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              {" "}
              Props{" "}
            </TabButton>
          </menu>

          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

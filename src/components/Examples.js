import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSeletedTopic] = useState("components");

  function handleClick(selectedButton) {
    setSeletedTopic(selectedButton);
  }

  return (
    <>
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
    </>
  );
}

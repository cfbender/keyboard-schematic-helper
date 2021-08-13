import { useState } from "react";
import { layoutProcess } from "../utils/layoutProcess";

function debounce(fn, time) {
  let timeoutId;

  return function () {
    // Check for existing calls
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      // Invoke fn
      fn.apply(this, arguments);
      // Clear timeout
      timeoutId = null;
    }, time);
  };
}

const App = () => {
  const [inputText, updateInputText] = useState("");
  const [outputText, updateOutputText] = useState([]);

  const processText = (newStr) => {
    const processed = layoutProcess(newStr);
    updateOutputText(processed);
  };

  const debouncedProcess = debounce(processText, 200);

  return (
    <div className="col-md-12">
      <div className="row justify-content-center">
        <textarea
          rows="10"
          cols="75"
          id="layout-string"
          value={inputText}
          onChange={(e) => {
            updateInputText(`${e.target.value}`);
            debouncedProcess(e.target.value);
          }}
        />
      </div>
      <div className="row justify-content-center mt-5">
        <code id="output">
          {`{ \\`}
          {outputText.length > 0 &&
            outputText.map((text, idx) => {
              return idx === outputText.length - 1 ? (
                <p key={text}>{`{ ${text.join(", ")} } \\`}</p>
              ) : (
                <p key={text}>{`{ ${text.join(", ")} },\\`}</p>
              );
            })}

          {`}`}
        </code>
      </div>

      <style jsx>{`
        #layout-string {
          display: block;
          background-color: #4c566a;
          padding: 1rem;
          border-radius: 1rem;
          color: #eceff4;
        }

        #output {
          padding: 2rem;
          background-color: #d8dee9;
          border-radius: 1rem;
          color: #5e81ac;
        }
      `}</style>
    </div>
  );
};

export default App;

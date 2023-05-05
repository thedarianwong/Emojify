// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import {
  Title,
  InputBox,
  OutputBox,
  SubmitButton,
  ClearButton,
  LanguageDropdown,
} from "./Components";

const url = "https://emojify-backend.onrender.com/translate";

async function handleSubmit(inputText, translationType, setOutputText) {
  // Check if there is input text
  if (!inputText) {
    setOutputText("Please enter some text");
    return;
  }

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inputText, translationType }),
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    if (response.ok) {
      setOutputText(data.translation);
    } else {
      console.error("Error fetching translation:", data.error);
      setOutputText("Error fetching translation");
    }
  } catch (error) {
    console.error("Error fetching translation:", error);
    setOutputText("Error fetching translation");
  }
}

function Translate() {
  const [inputText, setInputText] = useState("");
  const [translationType, setTranslationType] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTranslationTypeChange = (type) => {
    setTranslationType(type);
  };

  const handleSubmitClick = () => {
    handleSubmit(inputText, translationType, setOutputText);
  };

  const handleClearClick = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <div className="container">
      <InputBox value={inputText} onChange={handleInputChange} />
      <OutputBox value={outputText} />
      <LanguageDropdown onChange={handleTranslationTypeChange} />
      <div className="buttons-container">
        <SubmitButton onClick={handleSubmitClick} />
        <ClearButton onClick={handleClearClick} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="title-container">
        <Title className="title" />
      </div>
      <Translate />
    </div>
  );
}

export default App;

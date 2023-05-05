// import logo from './logo.svg';
// import './App.css';
import {
  Title,
  InputBox,
  OutputBox,
  SubmitButton,
  ClearButton,
  LanguageDropdown,
} from "./Components";

function App() {
  return (
    <div className="container">
      <div className="title-container">
        <Title className="title" />
      </div>
      <InputBox className="input-box" />
      <OutputBox className="output-box" />
      <LanguageDropdown className="language-dropdown" />
      <div className="buttons-container">
        <SubmitButton className="submit-button" />
        <ClearButton className="clear-button" />
      </div>
    </div>
  );
}

export default App;

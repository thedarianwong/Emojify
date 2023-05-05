import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Media,
  Input,
  Form,
  FormGroup,
  FormText,
  Button,
} from "reactstrap";
import "./styles.css";
import logo from "./TitleLogo.webp";

function Title() {
  return (
    <Container className="title-container">
      <Media object src={logo} alt="Logo" className="logo" />
      <h1 className="display-1">Emojify</h1>
    </Container>
  );
}

function InputBox({ value, onChange }) {
  return (
    <Input
      className="input-box"
      type="textarea"
      value={value}
      onChange={onChange}
      placeholder="Enter some text to be translated..."
    />
  );
}

function OutputBox({ value }) {
  return (
    <Form className="output-box">
      <FormGroup>
        <FormText>{value || "Output"}</FormText>
      </FormGroup>
    </Form>
  );
}

function LanguageDropdown({ onChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <Dropdown
      className="language-dropdown"
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
    >
      <DropdownToggle caret>
        {selectedOption || "Select Language"}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => handleOptionClick("Translate to Emojis")}>
          Translate to Emojis
        </DropdownItem>
        <DropdownItem onClick={() => handleOptionClick("Translate to English")}>
          Translate to English
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

function SubmitButton({ onClick }) {
  return (
    <Button className="submit-button" color="success" onClick={onClick}>
      Submit
    </Button>
  );
}

function ClearButton({ onClick }) {
  return (
    <Button className="clear-button" color="danger" onClick={onClick}>
      Clear
    </Button>
  );
}

export {
  Title,
  InputBox,
  OutputBox,
  LanguageDropdown,
  SubmitButton,
  ClearButton,
};

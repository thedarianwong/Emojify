import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Media,
  Input,
  Card,
  CardBody,
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

function InputBox() {
  return (
    <Input
      className="input-box"
      type="textarea"
      placeholder="Enter some text to be translated..."
    />
  );
}

function OutputBox() {
  return (
    <Card>
      <CardBody className="output-box">Output goes here...</CardBody>
    </Card>
  );
}

function LanguageDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(true);
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

function SubmitButton() {
  return (
    <Button className="submit-button" color="success">
      Submit
    </Button>
  );
}

function ClearButton() {
  return (
    <Button className="clear-button" color="danger">
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

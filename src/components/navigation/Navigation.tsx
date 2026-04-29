import { useState } from "react";
import {
  NavContainer,
  NavContent,
  Logo,
  NavMenu,
  NavItem,
  MenuToggle,
  ThemeToggle,
} from "./Navigation.styled";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contactMe" },
  ];

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Fozan_Rizvi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          FR
        </Logo>

        <NavMenu isOpen={isOpen}>
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </NavItem>
          ))}
          <ThemeToggle onClick={handleResumeDownload}>Resume</ThemeToggle>
        </NavMenu>

        <MenuToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </MenuToggle>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;

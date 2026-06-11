import { createElement, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  // Императивный стиль
  const currentYear = new Date().getFullYear();

  // Декларативный стиль
  return createElement(
    Fragment,
    null,

    createElement(
      "div",
      null,

      createElement(
        "a",
        {
          href: "https://vite.dev",
          target: "_blank",
          rel: "noreferrer",
        },
        createElement("img", {
          src: viteLogo,
          className: "logo",
          alt: "Vite logo",
        }),
      ),

      createElement(
        "a",
        {
          href: "https://react.dev",
          target: "_blank",
          rel: "noreferrer",
        },
        createElement("img", {
          src: reactLogo,
          className: "logo react",
          alt: "React logo",
        }),
      ),
    ),

    createElement("h1", null, "Vite + React"),

    createElement(
      "div",
      { className: "card" },
      createElement(
        "p",
        null,
        "Edit ",
        createElement("code", null, "src/App.jsx"),
        " and save to test HMR",
      ),
    ),

    createElement(
      "p",
      { className: "read-the-docs" },
      "Click on the Vite and React logos to learn more",
    ),

    createElement(
      "a",
      {
        href: "https://react.dev",
        target: "_blank",
        rel: "noreferrer",
      },
      "Learn React",
    ),

    createElement("footer", null, currentYear),
  );
}

export default App;

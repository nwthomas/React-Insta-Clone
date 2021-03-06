import { css } from "styled-components";

export const global = css`
  html {
    font-size: 62.5%;
    background: #f9f9f9;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    width: 100%;
    height: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  .App {
    width: 100%;
  }

  .body__content {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media (max-width: 1000px) {
      justify-content: center;
    }
  }

  .loading__text {
    display: block;
    margin: 0 auto;
    font-size: 2.5rem;
    width: 100%;
    margin-top: 150px;
    text-align: center;
  }

  .container {
    height: 140px;
    width: 140px;
    margin: 100px auto;
    position: relative;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .loading-img__container {
    width: 100px;
    margin: 30vh auto 0;
    animation-name: spin;
    animation-duration: 3s;
    animation-iteration-count: infinite;

    .loading-img {
      fill: #e2e2e2;
      opacity: 0.8;
    }
  }
`;

export default global;

import React from "react";
import App from "../components/App";
import Head from "next/head";

const index = () => {
  return (
    <main className="container">
      <Head>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />

        <title>Keyboard Schematic Helper</title>

        <meta
          name="description"
          content="Ports QMK physical layout of keycodes to 2D array grid of keycodes"
        />
      </Head>
      <p className="text-center mt-5" id="hero-text">
        Paste keycodes in K[row][column] format. Will return a sorted grid with <code>XXX</code> where no switch exists.
      </p>
      <App />
      <style jsx global>
        {`
          #hero-text {
            font-family: "Montserrat", sans-serif;
            color: #eceff4;
          }

          html,
          body {
            background-color: #2e3440;
          }

          .footer {
            margin-top: 10rem;
          }

          #footer-text {
            color: #8fbcbb;
          }
          a {
            color: #b48ead;
          }

          a:hover {
            color: #bf616a;
          }
          svg {
            filter: invert(97%) sepia(3%) saturate(2224%) hue-rotate(186deg)
              brightness(103%) contrast(91%);

            margin-left: 0.5rem;
          }
        `}
      </style>
      <div className="row justify-content-center">
        <footer className="footer col-md-12">
          <div className="row justify-content-center">
            <p id="footer-text" className="text-center">
              made by <a href="https://github.com/cfbender">cfbender</a>{" "}
            </p>
          </div>
          <div className="row justify-content-center">
            <a
              href="https://github.com/cfbender/keyboard-schematic-helper"
              className="text-center"
            >
              Source
              <svg
                role="img"
                width="2rem"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default index;

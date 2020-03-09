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
        Paste keycodes in K[row][column] format. Will return a sorted grid with
        _x_ where no switch exists.
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
            position: absolute;
            bottom: 0;
            line-height: 2rem;
          }

          #footer-text {
            color: #8fbcbb;
          }
          a {
            color: #b48ead;
          }
        `}
      </style>
      <div className="row">
        <footer className="footer justify-content-center">
          <p id="footer-text" className="text-center">
            made by <a href="https://github.com/cfbender">cfbender</a>{" "}
          </p>
        </footer>
      </div>
    </main>
  );
};

export default index;

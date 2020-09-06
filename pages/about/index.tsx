import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import Heading from "../../components/Heading";
import ThematicBreak from "../../components/ThematicBreak";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import { atLeastMedium } from "../../utils/breakpoints";
import ExternalLinks from "../../components/ExternalLinks";

const About: NextPage = () => (
  <>
    <main role="main">
      <Head>
        <meta
          name="description"
          content="John Apostol is a lifelong learner and software person based in Austin, TX."
        />
        <title>About John Apostol</title>
        <link rel="canonical" href="https://johnapostol.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johnapostol.com/about" />
        <meta
          property="og:image"
          content={require("../../public/static/me.jpg?size=320")}
        />
        <meta property="og:title" content="About John Apostol" />
        <meta
          property="og:description"
          content="John Apostol is a lifelong learner and software person based in Austin, TX."
        />
        <meta name="twitter:site" content="@johnapost" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Cover />
      <div className="grid">
        <ExternalLinks />
        <Paragraph>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Paragraph>
        <Heading level={2}>Human</Heading>
        <List>
          <ListItem>Spouse to the most fascinating person I know</ListItem>
          <ListItem>Happy to be Filipino-Canadian-American</ListItem>
          <ListItem>Cis male using typical male pronouns or they</ListItem>
          <ListItem>I have two wonderful cats, Yumi and Cheddar</ListItem>
        </List>
        <ThematicBreak />
        <Heading level={2}>Leader</Heading>
        <List>
          <ListItem>
            <Link href="/about/manager">
              <a data-cy="manager">How I lead people</a>
            </Link>
          </ListItem>
          <ListItem>Teams grow and their needs change over time</ListItem>
          <ListItem>Share expectations and share successes</ListItem>
          <ListItem>Constraints lead to creativity</ListItem>
        </List>
        <ThematicBreak />
        <Heading level={2}>Engineer</Heading>
        <List>
          <ListItem>
            <Link href="/post/a-sensible-approach-to-developing-product-features/">
              <a>How I develop software</a>
            </Link>
          </ListItem>
          <ListItem>Good code is testable code</ListItem>
          <ListItem>HTML / CSS / JS are my bread and butter</ListItem>
          <ListItem>
            I&rsquo;ve coded plenty of Ruby (Rails) and a little Python (Django)
            in the past
          </ListItem>
        </List>
      </div>
    </main>
    <Footer />
    <style jsx>{`
      main {
        font-family: "Merriweather", serif;
        margin: 0 0 6rem;
        min-width: 320px;
        overflow-x: hidden;
      }

      @media ${atLeastMedium} {
        .grid {
          display: grid;
          grid-template-columns: 1fr 740px 1fr;
        }

        .grid:before {
          content: "";
        }
      }
    `}</style>
  </>
);

export default About;

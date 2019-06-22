import Cover from "../components/Cover";
import Paragraph from "../components/Paragraph";

export default () => (
  <main role="main">
    <Cover />
    <div className="intro">
      <Paragraph>Hi there!</Paragraph>
      <Paragraph>
        I'm a software engineering person in Austin, Texas. I mostly write web
        apps, but I also write about writing code. This is where I put those
        writings.
      </Paragraph>
    </div>
    <style jsx>{`
      .intro {
        font-family: "Merriweather", serif;
        display: grid;
      }

      @media (min-width: 900px) {
        .intro {
          grid-template-columns: 1fr 740px 1fr;
        }
      }
    `}</style>
  </main>
);

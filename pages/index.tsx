import Cover from "../components/Cover";
import GitHub from "../components/GitHub";
import LinkedIn from "../components/LinkedIn";
import Medium from "../components/Medium";
import Paragraph from "../components/Paragraph";
import PostList from "../components/PostList";
import Resume from "../components/Resume";

const posts = [
  {
    date: new Date("2019-05-07"),
    tags: ["software"],
    title: "Perfect Now vs Later"
  }
];

export default () => (
  <main role="main">
    <Cover />
    <div className="external">
      <span>
        <GitHub />
      </span>
      <span>
        <Medium />
      </span>
      <span>
        <LinkedIn />
      </span>
      <span>
        <Resume />
      </span>
    </div>
    <div className="intro">
      <Paragraph>Hi there!</Paragraph>
      <Paragraph>
        I'm a software person in Austin, Texas. I mostly write web apps, but I
        also write about writing code. This is where I put those writings.
      </Paragraph>
    </div>
    <hr />
    <PostList posts={posts} />
    <style jsx>{`
      .external {
        color: #362640;
        display: flex;
        justify-content: center;
        margin: 1rem 0 0;
      }

      .external span + span {
        margin-left: 10px;
      }

      .intro {
        font-family: "Merriweather", serif;
        display: grid;
      }

      hr {
        background-image: linear-gradient(
          to right,
          transparent,
          #362640,
          transparent
        );
        border: 0;
        height: 2px;
        margin: 3rem auto;
        width: 80%;
      }

      @media (min-width: 900px) {
        .intro {
          grid-template-columns: 1fr 740px 1fr;
        }
      }
    `}</style>
  </main>
);

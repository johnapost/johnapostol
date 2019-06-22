import Cover from "../components/Cover";
import Paragraph from "../components/Paragraph";
import PostList from "../components/PostList";

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
        height: 1px;
        margin: 4rem auto;
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

import formatDate from "../utils/formatDate";
import ColumnWrapper from "./ColumnWrapper";

export interface IPost {
  date: string;
  tags: string[];
  title: string;
}

interface IProps {
  posts: IPost[];
}

export default ({ posts }: IProps) => (
  <>
    {posts.map(({ title, date, tags }) => {
      const formattedDate = formatDate(date);
      return (
        <div className="grid" key={`${title}-${formattedDate}`}>
          <ColumnWrapper>
            <div className="post-heading">{formattedDate}</div>
            <div className="title">{title}</div>
            <div>
              {tags.length && (
                <div className="tags">
                  {tags.map((tag: string) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </ColumnWrapper>
        </div>
      );
    })}
    <style jsx>{`
      .post-heading {
        font-family: "Merriweather", serif;
        font-size: 1rem;
        margin-top: 5px;
      }

      .tags {
        font-family: "Lato", sans-serif;
        font-size: 0.75rem;
        text-transform: uppercase;
      }

      .tags span {
        border: solid 2px #362640;
        color: #362640;
        display: inline-block;
        padding: 3px 5px;
        margin-top: 1rem;
      }

      .tags span + span {
        margin-left: 0.15rem;
      }

      .title {
        font-family: "Lato", sans-serif;
        font-size: 1.5rem;
        margin-top: 5px;
      }

      @media (min-width: 900px) {
        .grid {
          display: grid;
          grid-template-columns: 1fr 740px 1fr;
        }
      }
    `}</style>
  </>
);

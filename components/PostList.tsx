import IPost from "../pages/index";
import formatDate from "../utils/formatDate";
import ColumnWrapper from "./ColumnWrapper";

interface IProps {
  posts: IPost[];
}

export default ({ posts }: IProps) => (
  <>
    {posts.map(({ title, date, tags }) => {
      const dateObj = new Date(date);
      const formattedDate = formatDate(date);
      return (
        <div className="grid">
          <ColumnWrapper key={`${title}-${dateObj.getTime()}`}>
            <div className="post-heading">
              {formattedDate}
              {tags.length && " "}
              {tags.map((tag: string) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="title">{title}</div>
          </ColumnWrapper>
        </div>
      );
    })}
    <style jsx>{`
      .title {
        font-family: "Lato", sans-serif;
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

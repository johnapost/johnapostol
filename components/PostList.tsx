import IPost from "../pages/index";
import ColumnWrapper from "./ColumnWrapper";

interface IProps {
  posts: IPost[];
}

export default ({ posts }: IProps) => (
  <>
    {posts.map(({ title, date, tags }) => {
      const dateObj = new Date(date);
      return (
        <ColumnWrapper key={`${title}-${dateObj.getTime()}`}>
          <div className="post-heading">
            {dateObj.toDateString()}
            {tags.length && " "}
            {tags.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="title">{title}</div>
        </ColumnWrapper>
      );
    })}
    <style jsx>{`
      .title {
        font-family: "Lato", sans-serif;
      }
    `}</style>
  </>
);

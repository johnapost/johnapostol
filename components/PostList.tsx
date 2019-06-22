import ColumnWrapper from "./ColumnWrapper";

interface IPost {
  date: Date;
  tags: string[];
  title: string;
}

interface IProps {
  posts: IPost[];
}

export default ({ posts }: IProps) => (
  <>
    {posts.map(({ title, date, tags }) => (
      <ColumnWrapper key={`${title}-${date.getTime()}`}>
        <div className="post-heading">
          {date.toDateString()}
          {tags.length && " "}
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="title">{title}</div>
      </ColumnWrapper>
    ))}
    <style jsx>{`
      .title {
        font-family: "Lato", sans-serif;
      }
    `}</style>
  </>
);

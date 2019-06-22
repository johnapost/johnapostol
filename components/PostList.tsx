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
      <div className="post">
        <div className="post-heading">
          {date.toDateString()}
          {tags.length && " "}
          {tags.map(tag => (
            <span>{tag}</span>
          ))}
        </div>
        <div className="title">{title}</div>
      </div>
    ))}
    <style jsx>{`
      .post {
        padding: 0 20px;
      }

      .title {
        font-family: "Lato", sans-serif;
      }
    `}</style>
  </>
);

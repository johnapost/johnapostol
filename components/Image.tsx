interface IProps {
  alt: string;
  src: string;
}

export default ({ alt, src }: IProps) => {
  if (alt.startsWith("wide")) {
    return (
      <div className="full-width">
        <img alt={alt} src={src} />
        <style jsx>{`
          .full-width {
            grid-column: 1 / 4;
          }

          img {
            margin-top: 44px;
            margin-bottom: 80px;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }

  return <img alt={alt} src={src} />;
};

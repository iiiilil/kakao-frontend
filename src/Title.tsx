type TitleType = {
  title: string;
  subTitle?: string;
};

const Title = (props: TitleType) => {
  const { title, subTitle } = props;
  return (
    <h1>
      {title}
      <small>{subTitle}</small>
    </h1>
  );
};

export default Title;

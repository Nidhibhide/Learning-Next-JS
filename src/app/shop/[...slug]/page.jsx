const CatchAllSegmentsExample = ({ params }) => {
  const { slug } = params;
  console.log(slug);
  return (
    <>
      <h1>Slug Params From URL : {slug.join("/")}</h1>
    </>
  );
};
export default CatchAllSegmentsExample;

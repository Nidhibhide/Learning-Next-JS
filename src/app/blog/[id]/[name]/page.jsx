const ParmsExampleInRSC = async ({ params }) => {
  const { id, name } = await params;
 

  return (
    <>
      <h1 className="text-2xl font-bold">
        Blog ID - {id} & Blog name - {name}
      </h1>
    </>
  );
};
export default ParmsExampleInRSC;

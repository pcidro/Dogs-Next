type paramsProps = {
  params: {
    id: number;
  };
};
export default async function FotoIdPage({ params }: paramsProps) {
  return (
    <div>
      <h1>foto id: {params.id}</h1>
    </div>
  );
}

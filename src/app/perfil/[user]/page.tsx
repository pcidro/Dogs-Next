type userPageParams = {
  params: {
    user: string;
  };
};

export default async function PerfilUserPage({ params }: userPageParams) {
  return (
    <div>
      <h1>User:{params.user}</h1>
    </div>
  );
}

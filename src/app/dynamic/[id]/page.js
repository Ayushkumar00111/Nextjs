export const instant = false;
export default async function Dynamic({ params }) {
  const { id } = await params;

  return <h1>Hello ji dynamic {id}</h1>;
}
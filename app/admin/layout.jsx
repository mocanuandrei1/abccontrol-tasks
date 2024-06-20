import { getSession } from "@/lib/getSession";

export default async function Layout({ children }) {
  const session = await getSession();

  if (!session || session.user.role !== "admin") {
    return <h1>Acces interzis</h1>;
  }

  return (
    <>
      <main>{children}</main>
    </>
  );
}

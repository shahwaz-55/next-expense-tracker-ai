import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/app/components/Guest"; // make sure you import your Guest component

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className="red">
      <h1>HomePage</h1>
    </div>
  );
}

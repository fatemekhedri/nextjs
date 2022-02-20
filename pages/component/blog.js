import Link from "next/link";
import { useRouter } from "next/router";
function Blog() {
  const router = useRouter();
  return (
    <div>
      <h1>Blog Page</h1>
      <p>This is the Blog page</p>
      <button onClick={() => router.push("/")}>Return to home</button>
    </div>
  );
}

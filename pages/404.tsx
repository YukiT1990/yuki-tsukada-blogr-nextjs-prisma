import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []);

  return (
    <Layout>
      <div className="not-found">
        <h1>You are in the middle of nowhere.</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;

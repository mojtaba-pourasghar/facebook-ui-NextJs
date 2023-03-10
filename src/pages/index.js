import Feed from "components/Feed";
import Header from "components/Header";
import RightSideBar from "components/RightSideBar";
import SideBar from "components/SideBar";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  const router = useRouter();

  console.log(session);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [status]);

  if (status === "authenticated") {
    return (
      <div>
        <Head>
          <title>Facebook</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="flex bg-gray-100">
          {/** Lest SideBar */}
          
          <SideBar />
          {/** Feec (Create Post ) */}
          <Feed />
          {/** Right Side Bar */}
          <RightSideBar />
        </main>
      </div>
    );
  }
  return <div>Loading ...</div>;
}

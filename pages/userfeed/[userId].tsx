import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import Post, { PostProps } from "../../components/Post";
import { UserProps } from "../update-user";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log("keyword: " + params?.keyword);
  const userId = Number(params?.userId);

  const userR = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  const user = JSON.parse(JSON.stringify(userR));

  const feedsR = await prisma.post.findMany({
    where: {
      authorId: userId,
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  const feedsU = JSON.parse(JSON.stringify(feedsR));
  const feeds = feedsU.sort((p1: PostProps, p2: PostProps) => {
    return p2.createdAt > p1.createdAt ? 1 : -1;
  });
  return {
    props: { feeds, user },
  };
};

type Props = {
  feeds: PostProps[];
  user: UserProps;
};

const UserFeed: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>{props.user && props.user.name}'s Feed</h1>
        <main>
          {props.feeds.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default UserFeed;

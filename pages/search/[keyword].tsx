import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import Post, { PostProps } from "../../components/Post";
import { UserProps } from "../update-user";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const searchKeyword: string = params?.keyword.toString();

  const usersR = await prisma.user.findMany({
    where: {
      name: {
        contains: searchKeyword,
        mode: "insensitive",
      },
    },
  });
  const users = JSON.parse(JSON.stringify(usersR));

  const postsR = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchKeyword,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: searchKeyword,
            mode: "insensitive",
          },
        },
      ],
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  const postsU = JSON.parse(JSON.stringify(postsR));
  const posts = postsU.sort((p1: PostProps, p2: PostProps) => {
    return p2.createdAt > p1.createdAt ? 1 : -1;
  });
  return {
    props: { users, posts },
  };
};

type Props = {
  users: UserProps[];
  posts: PostProps[];
};

const Search: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Search Result</h1>
        <main>
          {props.users.length == 0 && <p>No match for users.</p>}
          {props.users.length > 0 &&
            props.users.map((user) => (
              <div key={user.id} className="post">
                <Link href={`/userfeed/${user.id}`}>
                  <p>{user.name}</p>
                </Link>
              </div>
            ))}
          {props.posts.length == 0 && <p>No match for posts.</p>}
          {props.posts.length > 0 &&
            props.posts.map((post) => (
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

export default Search;

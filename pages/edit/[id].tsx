import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import Router from "next/router";
import prisma from "../../lib/prisma";
import { PostProps } from "../../components/Post";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postR = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  const post = JSON.parse(JSON.stringify(postR));
  return {
    props: post,
  };
};

const Edit: React.FC<PostProps> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      const postId = props.id;
      await fetch(`/api/post/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push(`/p/${postId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>Edit Post</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <input disabled={!content || !title} type="submit" value="Update" />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>

      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #00e600;
          /* border: 0; */
          border: 1px solid black;
          border-radius: 3px;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Edit;

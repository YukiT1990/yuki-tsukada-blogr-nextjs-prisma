import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { useSession, getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export type UserProps = {
  id: number;
  name: string | null;
  email: string | null;
  posts: {
    id: number;
    title: string;
    content: string;
  };
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  // console.log("session: " + JSON.stringify(session, null, 2));

  if (!session) {
    res.statusCode = 403;
    return { props: { user_id: null } };
  }

  let token: string;
  if (typeof session.accessToken == "string") {
    token = session.accessToken;
  } else {
    token = "";
  }

  const targetSession = await prisma.session.findUnique({
    where: { accessToken: token },
  });
  // console.log(targetSession.userId);
  const userId = targetSession.userId;

  const targetUser = await prisma.user.findUnique({
    where: { id: userId },
  });
  const userEmail = targetUser.email;
  return { props: { user_id: userId, userEmail: userEmail } };
};

type Props = {
  user_id: number;
  userEmail: string | null;
};

const UpdateUser: React.FC<Props> = ({ user_id, userEmail }) => {
  const [userId, setUserId] = useState(user_id);
  const [email, setEmail] = useState(userEmail);

  console.log("userEmail: " + userEmail);

  // console.log("props.userId: " + props.userId);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { email, userId };
      await fetch("/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/");
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <h1>Update Email</h1>
        <form onSubmit={submitData}>
          <input
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Title"
            type="text"
            value={email}
          />
          <input disabled={!email} type="submit" value="Register" />
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

export default UpdateUser;

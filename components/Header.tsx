import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";
import { Search } from "@material-ui/icons";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const [session, loading] = useSession();
  const [searching, setSearching] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    console.log("reset keyword");
    setSearching(false);
    setSearchKeyword("");
  }, [router.pathname]);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await Router.push(`/search/${searchKeyword}`);
    } catch (error) {
      console.error(error);
    }
  };

  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>

      <a className="search" onClick={() => setSearching(!searching)}>
        <Search />
      </a>

      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  if (loading) {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          .left a[data-active="true"] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/signin">
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
            background: #00e600;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive("/drafts")}>My drafts</a>
        </Link>

        <a className="search" onClick={() => setSearching(!searching)}>
          <Search />
        </a>

        <style jsx>{`
          .left {
            display: flex;
            flex-direction: row;
          }

          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
            margin-right: 1rem;
          }

          .left a[data-active="true"] {
            color: gray;
          }

          @media screen and (max-width: 600px) {
            .left {
              flex-direction: column;
              margin-top: 2rem;
            }

            a {
              margin-bottom: 1rem;
            }
          }

          @media screen and (max-width: 500px) {
            .left {
              flex-basis: 50%;
            }
          }

          @media screen and (max-width: 400px) {
            .left {
              flex-basis: 40%;
            }
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <div className="buttons">
          {!session.user.email && (
            <Link href="/update-user">
              <button>
                <a>Register Email</a>
              </button>
            </Link>
          )}
          {session.user.email && (
            <>
              <Link href="/update-user">
                <button>
                  <a>Update Email</a>
                </button>
              </Link>
              <Link href="/create">
                <button>
                  <a>New post</a>
                </button>
              </Link>
            </>
          )}
          <button onClick={() => signOut()}>
            <a>Log out</a>
          </button>
        </div>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }

          .right {
            margin-left: auto;
            display: flex;
            flex-direction: row;
          }

          .right a {
            border: none;
            padding: 0.5rem 1rem;
          }

          .buttons {
            display: flex;
            flex-direction: row;
          }

          button {
            border: 1px solid black;
            background: #00e600;
            border-radius: 3px;
            margin-left: 0.5rem;
          }

          @media screen and (max-width: 1000px) {
            .right {
              flex-direction: column;
            }
          }

          @media screen and (max-width: 500px) {
            .right {
              flex-basis: 50%;
            }

            .buttons {
              flex-direction: column;
            }

            button {
              margin-bottom: 0.5rem;
            }
          }

          @media screen and (max-width: 500px) {
            .right {
              flex-basis: 60%;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <nav>
        {left}
        {right}
        <style jsx>{`
          nav {
            display: flex;
            padding: 2rem;
            align-items: center;
          }
        `}</style>
      </nav>
      {searching && (
        <>
          <form onSubmit={submitData} className="seachForm">
            <input
              autoFocus
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search for users and posts."
              type="text"
              value={searchKeyword}
            />
            <input
              disabled={searchKeyword == ""}
              type="submit"
              value="Search"
            />
          </form>
          <style jsx>{`
            .seachForm {
              display: flex;
              flex-direction: row;
            }

            input[type="text"] {
              width: 90%;
              padding: 0.5rem;
              border-radius: 0.25rem;
              border: 0.125rem solid rgba(0, 0, 0, 0.2);
            }

            input[type="submit"] {
              background: #00e600;
              border: 1px solid black;
              border-radius: 3px;
              padding: 0.5rem 2rem;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default Header;

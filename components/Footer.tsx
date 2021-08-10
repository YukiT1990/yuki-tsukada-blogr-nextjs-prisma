import React from "react";
// flower1222.png

const Footer: React.FC = () => {
  return (
    <>
      <div className="copyrightcontainer">
        <p className="copyright">&copy; Yuki Tsukada</p>
      </div>

      <div className="imagecontainer">
        <img src={require("../public/flower1222.png")} className="image"></img>
      </div>
      <style jsx>{`
        .copyrightcontainer {
          font-size: 16px;
        }
        .copyright {
          text-align: center;
        }

        .imagecontainer {
          max-width: 100%;
        }

        .image {
          width: 100%;
        }

        @media screen and (max-width: 600px) {
          .copyrightcontainer {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;

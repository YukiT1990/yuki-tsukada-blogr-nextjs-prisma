import React from "react";
// flower1222.png

const Footer: React.FC = () => {
  return (
    <>
      <div className="imagecontainer">
        <img src={require("../public/flower1222.png")} className="image"></img>
      </div>
      <style jsx>{`
        .imagecontainer {
          max-width: 100%;
        }

        .image {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Footer;

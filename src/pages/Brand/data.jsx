import React from "react";
import PopUpCard from "./PopUpCard";

const Data = () => {
  const sampleData = {
    background: "background.jpg",
    logo: "logo.png",
    description: "Sample description",
    website: "https://example.com",
    images: ["img1.jpg", "img2.jpg"],
    socialLinks: {
      facebook: "https://facebook.com/example",
      twitter: "https://twitter.com/example",
      instagram: "https://instagram.com/example",
      linkedin: "https://linkedin.com/example",
    },
  };

  return (
    <div>
      <PopUpCard data={sampleData} onClose={() => console.log("Closed")} />
    </div>
  );
};

export default Data;
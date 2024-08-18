import React from "react";
import Introduction from "./homepage/Introduction";

const HomePage: React.FC = () => {
  return (
    <section>
      <div>
        <Introduction />
        <div className="my-8">{/* <BlogPosts /> */}</div>
      </div>
    </section>
  );
};

export default HomePage;

import React from 'react';
import Introduction from './homepage/Introduction';


const HomePage: React.FC = () => {
  return (

    <section>
      <div>
        <Introduction />
        
        <p className="mb-4">University of Tartu Alumni: <a href="https://figshare.com/articles/thesis/Multi-Factor_Authentication_MFA_on_a_Blockchain-based_Decentralised_Trust_Network_With_Customizable_Challenges/12578696" style={{ color: 'blue' }}>Master's thesis</a></p>
        <div className="my-8">{/* <BlogPosts /> */}</div>
      </div>

    </section>
  );
};

export default HomePage;
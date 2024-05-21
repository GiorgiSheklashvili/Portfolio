export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">{`I specialize in Spring Boot development and advocate for microservices architecture. With a primary focus on the fintech sector, I currently serve as a Software Architect for an Open Banking project in Georgia. `}</p>
      <p className="mb-4">University of Tartu Alumni: <a href="https://figshare.com/articles/thesis/Multi-Factor_Authentication_MFA_on_a_Blockchain-based_Decentralised_Trust_Network_With_Customizable_Challenges/12578696" style={{ color: 'blue' }}>Master's thesis</a></p>
      <div className="my-8">{/* <BlogPosts /> */}</div>
    </section>
  );
}

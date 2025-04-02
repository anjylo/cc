import Marquee from "react-fast-marquee";

const CardMarquee = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  
  const projects = [
    {
      imageUrl: imageUrl
    },
    {
      imageUrl: imageUrl
    },
    {
      imageUrl: imageUrl
    },
    {
      imageUrl: imageUrl
    },
    {
      imageUrl: imageUrl
    },
  ];
  
  const cards = projects.map((project, key) => {
    return <div key={key} className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img className="w-78 h-82 object-cover" src={project.imageUrl} alt="Card Image"/>
      </div>
  })

  return (
    <Marquee>
      <div className="flex gap-5 lg:gap-10">
        {cards}
      </div>
    </Marquee>
  );
};

export default CardMarquee;

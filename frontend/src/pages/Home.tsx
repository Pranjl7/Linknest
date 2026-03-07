import axios from "axios";
import { LinknestCard } from "../components/LinknestCard";
import { useEffect, useState } from "react";

export function Home() {
  interface tagstype{
    id: string,
    title: string,
  }

  interface useridtype{
    id: string,
    
  }

  type contenttype = {
    status: string;
    id: string;
    link: string;
    type: string;
    title: string;
    tags: tagstype[];
    userid: []
  };
  const [contents, setContents] = useState<contenttype[]>([]);

  async function fetchcontent() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/content`,
      );
      console.log(response.data.message);
      setContents(response.data.message);
    } catch (error) {
      console.log(error);
      alert("Something went wrong, plz try again later.");
    }
  }

  useEffect(() => {
    fetchcontent();
  }, []);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
      {contents.map((link, index) => (
        <LinknestCard
          key={index}
          title={link.title}
          url={link.link}
          status={link.status}
          author={"Pranjal"}
          type={link.type}
          tags={link.tags}
        />
      ))}
    </main>
  );
}

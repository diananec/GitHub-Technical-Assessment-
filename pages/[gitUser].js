import { useEffect, useState } from "react";
import Repos from "../components/Repos";

function gitUser() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedData"));
    if (data) setItems(data);
    console.log(data);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {items.map((elem) => (
        <Repos
          key={elem.node_id}
          id={elem.id}
          name={elem.name}
          fullName={elem.fullName}
          privacy={elem.private}
          commits={elem.commits}
          language={elem.language}
          contents_url={elem.clone_url}
          forks={elem.forks}
          pushed_at={elem.pushed_at}
        />
      ))}
    </div>
  );
}

export default gitUser;

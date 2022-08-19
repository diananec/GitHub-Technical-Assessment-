import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const inputRef = useRef(null);
  const router = useRouter();
  const sendRequest = async () => {
    const userName = inputRef.current.value;
    await axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        localStorage.setItem("savedData", JSON.stringify(res.data));
        console.log("Data is:", res.data);
        router.push(userName);
      });
  };

  return (
    <div className="">
      <h1 className="text-red-600">Git</h1>
      <input ref={inputRef} placeholder="Enter Username" />
      <button onClick={sendRequest}>Get Repos</button>
    </div>
  );
}

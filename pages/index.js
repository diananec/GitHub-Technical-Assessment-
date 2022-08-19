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
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("User not found");
        }
      });
  };

  return (
    <div className="bg-[url('../images/bg.png')] bg-contain flex flex-col justify-start items-center min-h-screen">
      <div className="text-gray-800 font-bold text-5xl flex align-top mt-40 mb-20">
        GitHub 2.0 Simplified
      </div>
      <div>
        <input
          className="w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md text-center text-3xl mb-20"
          ref={inputRef}
          placeholder="Enter Username"
        />
      </div>

      <button
        className="border-solid border-8 border-pink-300 bg-pink-200 rounded-3xl p-2 hover:bg-pink-100"
        onClick={() => sendRequest()}
      >
        View Repositories
      </button>
    </div>
  );
}

import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { colors } from "../components/ColorTags";
import moment from "moment";

function Repos({
  id,
  name,
  fullName,
  privacy,
  commits,
  language,
  contents_url,
  forks,
  pushed_at,
}) {
  const access = () => {};
  const AvColor = colors[language].color;
  const AvTag = colors[language].tag;
  return (
    <div className="bg-[url('../images/bg.png')] flex flex-col m-5 border-3 rounded-full justify-center w-10/12">
      <div className="flex flex-row items-center justify-evenly py-2 px-2 m-4">
        <span className="text-blue-500 text-xl font-bold w-3/12 break-words">
          {name} &nbsp; &nbsp;
        </span>
        <span className="text-gray-600 p-0.2 text-lg border-solid border-2 rounded-xl border-blue-900  p-1">
          {privacy ? "Private" : "Public"}
        </span>
        <span>
          <button
            onClick={access}
            className="border-solid border-2 rounded-xl border-pink-300 text-white p-1 bg-gray-700 hover:bg-gray-400"
          >
            <a href={contents_url}>View Repo Content</a>
          </button>
        </span>
      </div>

      <div className="flex justify-evenly items-center p-4">
        <span className="flex flex-col items-center justify-center w-1/12">
          <span>
            <Avatar
              sx={{
                bgcolor: `${AvColor}`,
              }}
            >
              {AvTag}
            </Avatar>
          </span>
          <div>{language}</div>
        </span>
        <span className="text-gray-400 text-sm  flex flex-col justify-center items-center">
          <span>ID</span>
          <div>{id}</div>
        </span>
        <span className="flex flex-col items-center justify-center">
          <span>Forks</span>
          <div>{forks}</div>
        </span>

        <span className="flex flex-row items-center justify-center">
          Updated on {moment(pushed_at).format("DD.MM.YY, hh:mm a")}
        </span>
      </div>
    </div>
  );
}

export default Repos;

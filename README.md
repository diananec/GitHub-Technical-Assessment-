This is a Next Js project which creates a simple GitHub website styled with Tailwind CSS using the GitHub Gist API

To run the development server you need to:

```bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Functionalities:
-On the start page, the user has to enter an existent GitHub username and to press the "View Repositories" button
-If the username does not exist, the user is alerted. Else, the user is redirected to a page which contains all the 
 repositories of the specific username.
 This page contains the names of the repositories, the privacy of them (but since you are not connected, you only can 
 see the public repos), the main programming language-filetype used in the project along with its respective tag(avatar),
 the ID number, the number of forks along with the last 3 forkers(their avatar), the date&time of the latest update
 and a button to open the content of the repository. 

It can be improved by using better styling and also by adding all the features of the original GitHub website.
It is good to know that the GitHub Gist API limits the request number/hour/IP to 50.


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>CICD JENKINS DEMO</h1>
      <p>Jenkins source code uses git repo and set branch /main poll scm triggers option * * * * * build step add build step <b>windows batch command</b> <u>call npm install</u><u>call npm run dev</u> rmdir "C:.....tomcat9\webapps\jenkinsfrontdemo xcopy path</p>
      <p>
        build step add build step <b>windows batch command</b>
        stop tomcat 9
        start tomcat 9
      </p>
    </div>
  );
}

export default App

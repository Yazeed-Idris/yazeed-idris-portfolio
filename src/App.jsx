import {Fragment, useEffect, useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Header} from "./components/Header.jsx";
import {About} from "./components/About.jsx";
import {Education} from "./components/Education.jsx";
import {Skills} from "./components/Skills.jsx";
import {Projects} from "./components/Projects.jsx";

function App() {
    const [data, setData] = useState({})
    const [theme, setTheme] = useState('default')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/my-data.json')
            const data = await response.json()
            setData(data)
        }
    fetchData()
    }, [])

    return (
      <Fragment>
          <HelmetProvider>
              <Helmet>
                  <title>{data['full_name']}</title>
              </Helmet>
          </HelmetProvider>
          <Header fullName={data['full_name']} socialBadges={data['social_badges']}/>
          <main className={`font-Oswald`}>
              <About fullName={data['full_name']} title={data['title']} subtitle={data['subtitle']} description={data['description']} pictureUrl={data['picture_url']}/>
              <Education educationTitle={data['education_title']} educationContent={data['education_content']}/>
              <Skills skillsTitle={data['skills_title']} skillsContent={data['skills_content']} skillBadges={data['skill_badges']}/>
              <Projects projectsTitle={data['projects_title']} projectsContent={data['projects_content']} projects={data['projects']}/>
          </main>
      </Fragment>
  )
}

export default App

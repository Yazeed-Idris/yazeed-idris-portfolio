import {Fragment} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Header} from "./components/Header.jsx";
import {About} from "./components/About.jsx";
import {Education} from "./components/Education.jsx";
import {Skills} from "./components/Skills.jsx";
import {Projects} from "./components/Projects.jsx";
import {Footer} from "./components/Footer.jsx";
import {data} from "./data/data.js";
function App() {

    return (
      <Fragment>
          <HelmetProvider>
              <Helmet>
                  <title>{data['full_name']}</title>
              </Helmet>
          </HelmetProvider>
          <Header fullName={data['full_name']} navigationLinks={data['navigation_links']}/>
          <main className={`font-Oswald`}>
              <About fullName={data['full_name']} title={data['title']} subtitle={data['subtitle']} description={data['description']} pictureUrl={data['picture_url']}/>
              <Education educationTitle={data['education_title']} educationContent={data['education_content']}/>
              <Skills skillsTitle={data['skills_title']} skillsContent={data['skills_content']} skillBadges={data['skill_badges']}/>
              <Projects projectsTitle={data['projects_title']} projectsContent={data['projects_content']} projects={data['projects']}/>
          </main>
          <Footer fullName={data['full_name']} socialBadges={data['social_badges']} socialTitle={data['social_title']}/>
      </Fragment>
  )
}

export default App

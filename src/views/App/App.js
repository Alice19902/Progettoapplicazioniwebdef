import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RickandMorty from "../RickandMorty/RickandMorty";
import Info from "../Info/Info";
import RickandMortyDetail from "../RickandMortyDetail/RickandMortyDetail";
import Logo from "../../assets/images/RMHome.png";

function App() {

    const nav = [
        {url: "/Progettoapplicazioniwebdef", text: "Home", exact: true},
        {url: "/characters", text: "Characters", exact: false},
        {url: "/info", text: "Info", exact: true}
    ];


    return (
    <body>
        <BrowserRouter>
            <MainTemplate
                footerCourseName="Applicazioni Web: Progettazione e Sviluppo"
                footerCourseLink="https://elearning.unimib.it/course/view.php?id=51512"
                navItems={nav}
                logo={Logo}>

                <Routes>
                    <Route path="/Progettoapplicazioniwebdef" element={<Home />}/>
                    <Route path="/characters" element={<RickandMorty />}/>
                    <Route path="/info" element={<Info />}/>
                    <Route path="/character/:id" element={<RickandMortyDetail />} />
                </Routes>
            </MainTemplate>
        </BrowserRouter>
    </body>
    );

}

export default App;





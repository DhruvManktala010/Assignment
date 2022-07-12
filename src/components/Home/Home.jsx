import Content from "../Content/Content";
import Header from "../Header/Header";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import "./Home.css";

const Home = (props) => {
    return (<div className="home">
        <LeftSideBar />
        <div className="leftContent">
            <Header user={props.data.current_user} changeHover={props.changeHover} selected={props.selected}/>
            <Content content={props.data}/>
        </div>
    </div>);
}

export default Home;
import Activity from "../Activity/Activity";
import RightCard from "../RightCard/RightCard";
import "./Content.css";
const Content = ({content}) => {
    return (<div className="content">
        <RightCard content={content.teams}/>
        <Activity activities={content.activities}/>
    </div>);
}
 
export default Content;
import Card from "../Card/Card";
import "./RightCard.css";
const RightCard = ({content}) => {
    return (<div className="rightCard">
            <div className="rightCard_header">
                <h2>All Teams</h2>
                <p>showing {content.length} out of {content.length} results</p>
            </div>
        <div className="original_content">    
        {content.map((obj)=>{
            return <Card data={obj} key={obj.id}/>
        })}
        </div>
    </div>);
}
 
export default RightCard;
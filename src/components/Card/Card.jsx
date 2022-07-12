import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./Card.css";
const Card = ({ data }) => {

    let { campaigns_count, created_at, description, id, image, leads_count, name, is_favorited } = data;

    return (<div className="card">
        <div className="top">
            <div className="info">

                <div className="upper_info">
                    <img src={image} alt="" height="40px" />
                    <div className="upper_little_info">
                        <h3 style={{ color: "#444444" }}>{name}</h3>
                        <h4 style={{ color: "#565656", fontWeight: 400 }}>Created on {created_at ? created_at : "20 April 2018"}</h4>
                    </div>

                    <div className="star">
                        {is_favorited ? <StarIcon style={{ color: "#F8CE43", cursor: "pointer" }} /> : <StarBorderIcon style={{
                        color: "#444444",
                        cursor: "pointer",
                        opacity: "0.4"
                    }} />}
                    </div>

                </div>

                <div className="lower_info" >
                    {description}
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className="campaign">
                <img src="Images/menu campaigns.png" height="48px" />
                {campaigns_count} Campaigns
            </div>
            <div className="leeds">
                <img src="Images/menu contacts.png" height="48px" />
                {leads_count} Leads
            </div>
        </div>

    </div>);
}

export default Card;
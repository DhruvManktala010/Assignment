import Avatar from '@mui/material/Avatar';
import "./Activity.css";

const Activity = ({ activities }) => {

    return (<div className="activity">
        <h2>Activity</h2>

        <div className="activities">
            {activities.map((activity) => {
                let { created_at, action, person, target, id } = activity;
                return (<div className="new_activity" key={id}>
                    <Avatar alt="Remy Sharp" src={person.avatar} style={{marginRight:"2px"}}/>
                    <div className="activity_info">
                    <p>{action} {target}</p>
                    <p className="createdAt">{created_at?created_at:"5 hours ago"}</p>
                    </div>
                    <br></br>
                </div>);
            })}
        </div>


    </div>);
}

export default Activity;
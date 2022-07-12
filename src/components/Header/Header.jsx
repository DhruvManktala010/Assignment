import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import "./Header.css";

const Header = ({ user, changeHover, selected }) => {


    const change = (selected) => {
        console.log(selected);
        changeHover(selected);
    }


    let { name, id, avatar, notifications_count } = user;
    return (<div className="header">
        <div className="top_header">
            <div className="user_team">NARWHAL</div>
            <div className="user_info">
                <p>Teams</p>
                <p className="user_data">
                    <Badge color="secondary" badgeContent={notifications_count} showZero>
                        <MailIcon style={{ color: "#3B3B3" }} />
                    </Badge>
                    Hello, {name} <Avatar alt="Remy Sharp" src={avatar} />
                </p>

            </div>


        </div>
        <div className="bottom_header">
            <div className="create_new_post">
                <div className="team_tab">
                    <img src="Images/icon companies.png" alt="" />
                    <h2>Teams</h2>
                </div>
                <Button variant="contained"  style={{maxWidth: '200px', maxHeight: '30px',backgroundColor:"#40D2BF"}}><AddIcon /> Create New Team</Button>
            </div>

            <div className="links">
                <div className="tabs">
                <p onClick={() => { change("All") }} key="1" className={selected === "All" ? "active" : ""}>All</p>
                <p onClick={() => { change("Favourite") }} key="2" className={selected === "Favourite" ? "active" : ""}>Favourite</p>
                <p onClick={() => { change("Archived") }} key="3" className={selected === "Archived" ? "active" : ""}>Archived</p>
                </div>
                 
                <input type="text" placeholder="Search Team Name"/>

            </div>
        </div>
    </div>);
}

export default Header;
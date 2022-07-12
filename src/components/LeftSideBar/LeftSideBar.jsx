import "./LeftSideBar.css";
const LeftSideBar = () => {
    return (<div className="leftSideBar">
        <div className="leftIcon">
            <img src="Images/logo.png" alt="logo"/>
        </div>

        <div className="leftIcon">
            <img src="Images/menu campaigns.png" alt="menu campaigns" />    
        </div>


        <div className="leftIcon">
            <img src="Images/icon-teams.png" alt="icon-teams"/>
        </div>

        <div className="leftIcon">
            <img src="Images/icon-leads.png" alt="icon-leads"/>
        </div>

        
        <div className="leftIcon">
            <img src="Images/menu reports.png" alt="menu reports" />
        </div>

        <div className="leftIcon">
            <img src="Images/icon-help.png" alt="icon-help" />
        </div>
    </div>);
}
 
export default LeftSideBar;
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <Link className="block underline text-blue-600 cursor-pointer" to='/'>Home</Link>
        </div>
    );
};

export default Dashboard;
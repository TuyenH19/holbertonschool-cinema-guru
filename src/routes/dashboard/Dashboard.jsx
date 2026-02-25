import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className='dashboard'>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className='dashboard-content'>
        <SideBar />
      </div>
    </div>
  );
}

export default Dashboard;

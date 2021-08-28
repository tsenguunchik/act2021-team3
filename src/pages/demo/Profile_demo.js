import "./profile_demo.css";
import Sidebar from '../../components/sidebar/Sidebar'

export default function Profile_demo() {
  return (
    <>
    <Sidebar />
  
      <div className="profile">
      <div className="card">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileUserImg"
                src="logo.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
                <span className="profileInfoDesc">In university/college</span>
            </div>
            <div className="profileInfo">
                <h3 classNAme="profileInfoDesc">In USA</h3>
            </div>

          </div>
          <div className="profileRightBottom">
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
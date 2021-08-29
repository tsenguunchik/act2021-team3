import "./profile_demo.css";
import Sidebar from '../../components/sidebar/Sidebar'
import { Container } from "@material-ui/core";


export default function Profile() {
    const style = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    };

    return (
        <div>
        <Sidebar/>
        <Container className='container'>
            <div className="profileInfo">
            <div>
            <img
                className="profileUserImg"
                src="logo1.png"
                alt="userImage"
              />
              </div>
              <div className="profileInfoName">
                Oyunbileg Davaanyam
              </div>
            </div>
            
        </Container>
        </div>
    );
}

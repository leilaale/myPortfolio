import React from 'react';
import avatar from './images/Me/me1.png';
import SocialBar from './socialBar';

const SideInfo = () => {
    
    return (
        <div className = "me_data">
            <img src={avatar}></img>
            <div>
                    <h1 className ="my_name"> Leila Martinez </h1>
                    <p>Software Engineer</p>
            </div>
            <div>
                    <h1 className ="my_contact_info">Contact Information</h1>
                    <p>Email:<br />leilaalemtz.11@gmail.com<br /><br />Phone:<br />(915)471-8850 <br /> <br /></p>
            </div>
            <SocialBar></SocialBar>
            <div>
                <p>Please contact me by: <br/> Email or LinkedIn</p>
            </div>
        </div>
    );

}


export default SideInfo;
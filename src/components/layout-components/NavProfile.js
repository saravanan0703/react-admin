import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { connect } from 'react-redux'
import { 
  EditOutlined, 
  SettingOutlined, 
  ShopOutlined, 
  QuestionCircleOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import { signOut } from 'redux/actions/Auth';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
function NavProfile({signOut}) {
  const [user,getUser] = useState();
let history = useHistory();
const menuItem = [
	
    
]

const editprofile = () => {
  history.push(`/app/user/edit/${user?.id}`)
}

const fetchUser = async() => {
	const userDetails = localStorage.getItem('user_id');
	const api = await axios.get(`http://lara.localhost/api/user-detail?&user_id=${userDetails}`);
	console.log(api.data.datas);
	getUser(api.data.datas)
};

useEffect(() => {
	fetchUser();
}, [])
	const userDetails = localStorage.getItem('user_id');
  const profileImg = `http://lara.localhost/${user?.images}`;
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <Avatar size={45} src={profileImg} />
          <div className="pl-3">
            <h4 className="mb-0">{user?.name}</h4>
            <span className="text-muted">{user?.role}</span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.length + 1} onClick={editprofile}>
          <span>
              <EditOutlined />
              <span className="font-weight-normal">Edit Profile</span>
            </span>
            </Menu.Item>

          <Menu.Item key={menuItem.length + 1} onClick={e => signOut()}>
            <span>
              <LogoutOutlined />
              <span className="font-weight-normal">Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          <Avatar src={profileImg} />
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
}

export default connect(null, {signOut})(NavProfile)

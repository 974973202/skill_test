import { Space, Input } from "antd";
import Header from "./component/Header";
import Menu from "./component/Menu";
import ContentLogo from './component/ContentLogo'
import List from './component/ContentList'
import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import Logo from "./asset/img/Logo.png";

import {os} from './utils/os'
import "./index.scss";

const { isPc, isTablet } = os();
console.log(os())

function App() {
  return (
    <>
      <Header/>
      <div className="main">
        {(isPc || isTablet) && <Menu />}
        <div className="content">
          <div className="content__box">
            {
              (isPc || isTablet) ? 
              <Input
                className="content__box__input"
                defaultValue="Ekas Pty Ltd"
                size="large"
              />:
              <Input
                addonBefore={<><DownOutlined className="downOutlined" /><img style={{width: 20, height: 20}} src={Logo} alt="logo" /></>} 
                addonAfter={<PlusOutlined style={{ fontSize: 20, color: '#478da5' }}/>}
                className="content__box__input"
                defaultValue="Ekas Pty Ltd"
                size="large"
              />
            }
          </div>
          <ContentLogo {...os()} />
          <div className="content__box">
            <Space className="content__box__space">
              <div className="content__box__title">Members</div>
            </Space>
          </div>
          <div className="content__tab content__divider">
            {/* <Divider/> */}
            <div className="content__tab__title">
              Name
            </div>
            <div className="content__tab__title">
              Email
            </div>
            <div className="content__tab__title">
              Permissions
            </div>
          </div>
          <List />
        </div>
      </div>
    </>
  );
}

export default App;

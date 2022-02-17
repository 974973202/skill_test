import { Space } from "antd";
import {
  QuestionCircleFilled,
} from "@ant-design/icons";
import Logo from "../asset/img/Logo.png";

export default function ContentLogo(props) {
  if (props.isPc) {
    return (
      <div className='content__box'>
        <Space className='content__box__space'>
          <div className='content__box__title'>Status</div>
          <div className='content__box__txt'>
            Private<QuestionCircleFilled />
          </div>
        </Space>
        <Space
          className='content__box__space'
          style={{ marginRight: "10%", alignItems: "center" }}
        >
          <img src={Logo} alt="logo" />
          <span className='content__box__text'>
            Change Logo
          </span>
        </Space>
      </div>
    );
  } else {
    return (
      <>
        <div className='content__box content__mobile'>
          <Space className='content__box__space content__mobile__title'>
            <img src={Logo} alt="logo" />
            <span className='content__box__text'>
              Change Logo
            </span>
          </Space>
        </div>
        <div className='content__box'>
          <Space className='content__box__space'>
            <div className='content__box__title'>Status</div>
            <div className='content__box__txt'>
              Private<QuestionCircleFilled />
            </div>
          </Space>
        </div>
      </>
    );
  }
}

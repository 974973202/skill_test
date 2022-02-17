import { Avatar, Space } from "antd";
import {
  MenuOutlined,
} from "@ant-design/icons";
import { os } from "../utils/os";
const { isPc, isTablet } = os();

export default function Header() {
  return (
    <div className='header'>
      <span className='header__title'>dataReachable</span>
      <Space>
        <Avatar style={{ backgroundColor: "#478da5" }}>YL</Avatar>
        {isPc && !isTablet ? (
          <>
            <span className='header__headlink'>
              Go to Dashboard
            </span>
            <Avatar shape='square' size='small'>
              A
            </Avatar>
            <Avatar shape='square' size='small'>
              文
            </Avatar>
          </>
        ) : (
          <MenuOutlined style={{color: '#fd6b0b'}} />
        )}
      </Space>
    </div>
  );
}

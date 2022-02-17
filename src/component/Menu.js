import { Space, Input, Button, Avatar, Divider, message  } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../asset/img/Logo.png";


function Menu() {
  const MenuList = useSelector((state) => state.organizationList);
  const dispatch = useDispatch();


  const [orgName, setOrgName] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    dispatch({ type: "getOrgInfo"})
  }, [])

  function onSubmit() {
    if(orgName == '') return message.error('please input organization')
    dispatch({ type: "addOrgInfo", value: { name: orgName } });
    setShow(true);
  }

  function onAdd() {
    setOrgName('')
    const inputDom = (
      <Space direction='vertical'>
        <Input
          size='small'
          placeholder='please input organization'
          onChange={(e) => setOrgName(e.target.value)}
        />
      </Space>
    );
    MenuList.push({ name: inputDom });
    dispatch({ type: "organization", value: MenuList });
    setShow(false);
  };
  return (
    <div className='aside'>
      <div className='aside__box'>
        <Space size={24}>
          <Avatar style={{ backgroundColor: "#478da5" }}>M</Avatar>
          <span className='aside__box__txt'>Michael Liu</span>
        </Space>
      </div>
      <div className='aside__box'>
        <Input placeholder='Search' prefix={<SearchOutlined />} />
      </div>
      <div className='aside__box aside__line'>
        <Space size={20}>
          <div style={{ backgroundColor: "#478da5", width: 14, height: 14 }} />
          <span className='aside__box__txt'>dataReachable Pty Ltd</span>
        </Space>
      </div>
      {/* <Divider/> */}
      {MenuList.map((ele, index) => (
        <div className='aside__box aside__focus' key={index}>
          <Space size={20}>
            <img src={Logo} style={{width: 20, height: 20}} alt='Logo' />
            <span className='aside__box__txt'>{ele.name}</span>
          </Space>
        </div>
      ))}
      {show ? (
        <div
          className='aside__box aside__focus aside__add'
          onClick={onAdd}
        >
          <Space size={20}>
            <PlusOutlined style={{ fontSize: 20 }} />
            <span className='aside__box__txt aside__add'>
              Create new organization
            </span>
          </Space>
        </div>
      ) : (
        <Button style={{ width: "100%" }} onClick={onSubmit}>
          Submit
        </Button>
      )}
    </div>
  );
}

export default Menu;

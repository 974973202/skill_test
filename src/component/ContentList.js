import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Input, Select, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

function List() {
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");

  useEffect(() => {
    dispatch({ type: "getUserInfo" });
  }, []);

  function changePermissions(e, id) {
    setPermissions(e);
    id && dispatch({ type: "addUserInfo", value: { id: id, permissions: e } });
  }

  function onSubmit() {
    if (!name || !email)
      return message.error(`${name == "" ? "name" : "email"} cannot be empty`);
    const userList = { name, email, permissions };
    dispatch({ type: "addUserInfo", value: userList });
    setShow(true);
  }

  function onAdd() {
    setName("");
    setEmail("");
    setPermissions("can edit");
    let ListObj = {
      name: (
        <Input
          size='small'
          style={{ width: "80%" }}
          placeholder='please input name'
          onChange={(e) => setName(e.target.value)}
        />
      ),
      email: (
        <Input
          size='small'
          style={{ width: "80%" }}
          placeholder='please input email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      ),
      permissions: "can edit",
    };

    userList.push(ListObj);
    dispatch({ type: "user", value: userList });
    setShow(false);
  }

  return (
    <>
      {userList.map((user, index) => {
        return (
          <div className='content__table' key={index}>
            <div className='content__table__title'>{user.name}</div>
            <div className='content__table__title'>{user.email}</div>
            <div className='content__table__title'>
              <Select
                defaultValue={user.permissions}
                bordered={false}
                size='small'
                style={{ width: 80 }}
                onChange={(e) => changePermissions(e, user.id)}
              >
                <Option value='can edit'>can edit</Option>
                <Option value='owner'>owner</Option>
              </Select>
            </div>
          </div>
        );
      })}
      {show ? (
        <div
          className='content__table content__add content__focus'
          onClick={onAdd}
          style={{ display: show, width: "20%" }}
        >
          <Space>
            <PlusOutlined style={{ fontSize: 20 }} />
            <span className='content__add'>Add member</span>
          </Space>
        </div>
      ) : (
        <Button style={{ display: show, width: "100%" }} onClick={onSubmit}>
          Submit
        </Button>
      )}
    </>
  );
}

export default List;

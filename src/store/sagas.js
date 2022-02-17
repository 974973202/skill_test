import { call, put, takeEvery } from "redux-saga/effects";
import {
  getUserInfo,
  addUserInfo,
  getOrgInfo,
  addOrgInfo,
} from "../utils/request";

// 函数生成器
function* getUser() {
  try {
    const { code, data = [] } = yield call(getUserInfo);
    if (code === 200) {
      yield put({ type: "getUser", value: data });
    } else {
      console.error(code);
    }
  } catch (e) {
    throw Error(e);
  }
}

function* addUser(action) {
  try {
    const { code } = yield call(addUserInfo, action.value);
    if (code === 200) {
      const { code, data = [] } = yield call(getUserInfo);
      if (code === 200) {
        yield put({ type: "getUser", value: data });
      } else {
        console.error(code);
      }
    } else {
      console.error(code);
    }
  } catch (e) {
    throw Error(e);
  }
}

function* getOrg() {
  try {
    const { code, data = [] } = yield call(getOrgInfo);
    if (code === 200) {
      yield put({ type: "getOrg", value: data });
    } else {
      console.error(code);
    }
  } catch (e) {
    throw Error(e);
  }
}

function* addOrg(action) {
  try {
    const { code } = yield call(addOrgInfo, action.value);
    if (code === 200) {
      const { code, data = [] } = yield call(getOrgInfo);
      if (code === 200) {
        yield put({ type: "getOrg", value: data });
      } else {
        console.error(code);
      }
    } else {
      console.error(code);
    }
  } catch (e) {
    throw Error(e);
  }
}

function* Saga() {
  yield takeEvery("getUserInfo", getUser);
  yield takeEvery("addUserInfo", addUser);
  yield takeEvery("getOrgInfo", getOrg);
  yield takeEvery("addOrgInfo", addOrg);
}

export default Saga;

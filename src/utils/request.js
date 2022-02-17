import request from './fetch';

export async function getUserInfo() {
  return request('/api/user/list');
}

export async function addUserInfo(params = {}) {
  return request('/api/user/add', params, 'post');
}

export async function getOrgInfo() {
  return request('/api/organization/list');
}

export async function addOrgInfo(params = {}) {
  return request('/api/organization/add', params, 'post');
}
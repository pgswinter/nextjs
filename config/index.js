/* eslint-disable camelcase */
import * as ENVS from './envs';

const currentEnvKey = process.env.NODE_ENV || 'development';
const currentEnv = ENVS[currentEnvKey] || ENVS.development;
// const currentEnv = ENVS[currentEnvKey] || ENVS['development'];
const mapAPI = 'https://maps.googleapis.com/maps/api';
const { mapAPIKey } = currentEnv;
// const mapAPIKey = currentEnv['mapAPIKey'];
const reloadProcessInterval = 10000;
const base_url = 'https://www.travel.co.jp/stay/';
const base_url_root = 'https://www.travel.co.jp';
export {
  base_url,
  base_url_root,
  currentEnvKey,
  currentEnv,
  mapAPI,
  mapAPIKey,
  reloadProcessInterval,
};

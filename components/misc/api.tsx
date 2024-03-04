import axios from 'axios';
import { storeToken } from '../../auth/storeToken';
import { EXPO_PUBLIC_BASE_URL } from './env';

const axiosInstance = axios.create({
    baseURL: `${EXPO_PUBLIC_BASE_URL}`,
});

const getKeycloakToken = async () => {
    const { getToken } = storeToken();
    return await getToken();
};

axiosInstance.interceptors.request.use(async (config) => {
    const keycloakToken = await getKeycloakToken();
    console.warn(keycloakToken?.accessToken)
    config.headers['Authorization'] = `Bearer ${keycloakToken?.accessToken}`;
    return config;
});

export default axiosInstance;

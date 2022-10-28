import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultHeaders = {
  'content-type': 'application/json',
  'Content-type': 'application/json',
};

export const URL: string = 'https://octanefitgarage.com/api/api';

class Network {
  service: any;

  constructor() {
    const service = axios.create();
    service.interceptors.request.use(
      async (service: any) => {
        return service;
      },
      (error) => Promise.reject(error)
    );
    service.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error)
    );
    // @ts-expect-error
    service.defaults.headers = defaultHeaders;
    this.service = service;
  }

  post(path: string, payload: any) {
    return this.service
      .request({
        method: 'POST',
        url: path,
        data: payload ? JSON.stringify(payload) : {},
      })
      .then((response: any) => response)
      .catch((error: any) => {
        return Promise.reject(error);
      });
  }
  async get(path: string) {
    const accessToken = await AsyncStorage.getItem('Authorization-token');
    console.log(accessToken);
    return this.service
      .get(path, {
        headers: {
          'Authorization-token': accessToken,
        },
      })
      .then((response: any) => response)
      .catch((error: any) => Promise.reject(error));
  }

  //   put(path: string, payload: Object) {
  //     return this.service
  //       .request({
  //         method: 'PUT',
  //         url: path,
  //         data: JSON.stringify(payload),
  //       })
  //       .then((response) => response)
  //       .catch((error) => Promise.reject(error));
  //   }

  //   delete(path: string, payload: Object) {
  //     return this.service
  //       .request({
  //         method: 'DELETE',
  //         url: path,
  //         data: JSON.stringify(payload),
  //       })
  //       .then((response) => response)
  //       .catch((error) => Promise.reject(error));
  //   }
}

export default new Network();

// var adalConfig = {
//     tenant: 'TechB2CDemo.onmicrosoft.com',
//     clientId: 'c8f13f17-5a24-47a0-818c-f162758b4050',
//     extraQueryParameter: 'nux=1',
//     disableRenewal: true,
//     endpoints: {
//         'https://localhost:44327/': 'https://TechB2CDemo.onmicrosoft.com/ToGoAPI'
//     }
//     // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost. 
//   };
  
//   module.exports = adalConfig;


import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
    tenant: 'TechB2CDemo.onmicrosoft.com',
   clientId: 'c8f13f17-5a24-47a0-818c-f162758b4050',
  endpoints: {
    api: 'https://TechB2CDemo.onmicrosoft.com/ToGoAPI',
  },
  //cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
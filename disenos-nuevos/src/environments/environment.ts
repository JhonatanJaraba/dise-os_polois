// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiPrueba: 'http://54.81.159.25/ticketingws_prod/api/',
  api: 'http://54.81.159.25/ticketingws_prod/api/',
  apiFiles : 'http://44.198.190.183:9000/fileMicroService/',
  // api: 'http://54.81.159.25/ticketingws-qruta/api/',
  //api : 'http://54.81.159.25/ticketingws-1.0/api/',
  //api: 'http://58c0-181-78-3-186.ngrok.io/xticketingws/api/',
  apiTransaction: 'http://3.94.74.165:8080/transactionws/v1/',
  apiParking: 'https://parking-srv.herokuapp.com/v1/admin',
  mapBoxToken: 'pk.eyJ1Ijoib21hcm11Z25vIiwiYSI6ImNrZ2w4YzV4cjAwZHEyeGwycms5ZjB4aWMifQ.hYl2TJMwbsNjSUs_e4l4lw',
  //apiCollect: 'http://181.48.48.139:5000/api/v1/',
  apiClearing : 'http://trackingservices.extreme.com.co:9002/api/v1/',
  //api:'http://192.168.0.174:8080/xticketingws/api/'
  apiCollect: 'https://recaudos-ws.extreme.com.co/collector/'
  // apiCollect: 'http://3db0-181-78-3-186.ngrok.io/collector/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

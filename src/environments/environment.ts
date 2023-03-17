// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Stock endpoints
  addstock: 'http://localhost:3000/stock/new-stock',
  allstock: 'http://localhost:3000/stock/all-stocks',
  singlestock: 'http://localhost:3000/stock/single-stock/',
  deletestock: 'http://localhost:3000/stock/delete-stock/',
  updatestock: 'http://localhost:3000/stock/update-stock/',

  
  // Cyber endpoints
  registercyberservice: 'http://localhost:3000/cyber/new-cyber-service',
  allcyberservices:'http://localhost:3000/cyber/all-cyber-services',
  todaycyberservices: 'http://localhost:3000/cyber/today-cyber-services',
  
  // Expenses endpoints
  newexpense:'http://localhost:3000/expenses/new-expense',
  allexpenses:'http://localhost:3000/expenses/all-expenses',
  todayexpenses: 'http://localhost:3000/expenses/today-expenses',
  
  // Sales endpoints
  newsale:'http://localhost:3000/sales/new-sale',
  allsales:'http://localhost:3000/sales/all-sales',
  todaysales: 'http://localhost:3000/sales/today-sales',
  
  // Staffs endpoints
  newstaff:'http://localhost:3000/staffs/new-staff',
  allstaffs:'http://localhost:3000/staffs/all-staffs',
  ceostaffs: 'http://localhost:3000/staffs/ceos',
  managementstaffs:'http://localhost:3000/staffs/management',
  supervisorstaffs:'http://localhost:3000/staffs/supervisors',
  attendantstaffs: 'http://localhost:3000/staffs/attendants',
  singlestaff: 'http://localhost:3000/staffs/staff/',
  deletestaff: 'http://localhost:3000/staffs/staff/',
  updatestaff: 'http://localhost:3000/staffs/staff/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

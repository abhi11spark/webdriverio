var xlsx = require("xlsx")
var wb =xlsx.readFile("./test/specs/testdata/commonexceldata.xlsx")

let totalsheet =wb.SheetNames;
console.log(totalsheet);
let ws= wb.Sheets['Grade'];
let excelData =xlsx.utils.sheet_to_json(ws)
// console.log(excelData);
console.log(excelData[4].VALUE);

// console.log(excelData[1].entername);
// // console.log(excelData[2].admissionfee);
// // console.log(excelData[3].hallcharge);
// // console.log(excelData[4].eMarks);
// // console.log(excelData[5].grade);



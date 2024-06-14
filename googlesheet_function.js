function doPost(e) {
  var sheetName = ""; //Enter your form name here, and your form name must be the same as your sheet name, if not the function would create a sheet for your form name.
  try {
    var data = e.parameter;
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    if (!sheet) {
      throw new Error("Sheet not found");
    }
    var headers = Object.keys(data);
    var lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      lastRow++;
    }
    var rowData = [];
    for (var i = 0; i < headers.length; i++) {
      rowData.push(data[headers[i]] || "");
    }
    sheet.appendRow(rowData);
  } catch (error) {
    Logger.log("Error in doPost: " + error.message);
  }
}

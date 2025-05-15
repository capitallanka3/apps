
function doPost(e) {
  const folder = DriveApp.getFolderById("YOUR_FOLDER_ID"); // Replace with your actual folder ID

  const data = e.parameter;
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    data.firstName,
    data.lastName,
    data.dob,
    data.nic,
    data.status,
    data.guarantor1_name,
    data.guarantor1_phone,
    data.guarantor2_name,
    data.guarantor2_phone,
    data.accountHolder,
    data.accountNumber,
    data.bank,
    data.branch,
    new Date()
  ]);

  // Unfortunately, Apps Script cannot access uploaded files through e.files directly from FormData in a browser.
  // File upload handling would require alternative methods, such as base64 or external file upload services.
  
  return ContentService.createTextOutput("Success");
}

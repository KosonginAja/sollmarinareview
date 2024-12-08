function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
        if (!sheet) throw new Error("Sheet 'Data' tidak ditemukan.");
        
        const newRow = sheet.getLastRow() + 1;
        const rowData = [
            e.parameter.name,
            e.parameter.no,
            e.parameter.address
        ];
        sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
        
        // Berikan respons sukses
        return ContentService.createTextOutput("success").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
        return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
}

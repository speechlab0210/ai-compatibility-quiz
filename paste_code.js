// Run this in the Apps Script editor browser console
// to set the editor content

const code = `function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp','PairingCode','AI_Name','Model','Platform','Duration','DailyUse','Customized','Language','BFI_H1','BFI_H2','BFI_H3','BFI_H4','BFI_H5','BFI_H6','BFI_H7','BFI_H8','BFI_H9','BFI_H10','BFI_H11','BFI_H12','BFI_H13','BFI_H14','BFI_H15','BFI_H16','BFI_H17','BFI_H18','BFI_H19','BFI_H20','BFI_ATTN','AI_Topics','AI_Style','AI_Error','AI_Proactive','AI_Traits','AI_Best','AI_Worst','AI_Pref','AI_Care','AI_Know','Me_Time','Me_Job','Me_Topics','Me_Style','Me_Mood','Me_Hate','Me_Traits','Me_Emoji','Me_Role','Me_Absent','AI_Response','Email']);
    }
    var b = data.bfi || {};
    sheet.appendRow([data.timestamp, data.pairingCode, data.aiName, data.model, data.platform, data.duration, data.dailyUse, data.customized, data.language, b.h1||'', b.h2||'', b.h3||'', b.h4||'', b.h5||'', b.h6||'', b.h7||'', b.h8||'', b.h9||'', b.h10||'', b.h11||'', b.h12||'', b.h13||'', b.h14||'', b.h15||'', b.h16||'', b.h17||'', b.h18||'', b.h19||'', b.h20||'', b.h_attn||'', data.aiTopics, data.aiStyle, data.aiError, data.aiProactive, data.aiTraits, data.aiBest, data.aiWorst, data.aiPref, b.ai_care||'', b.ai_know||'', data.meTime, data.meJob, data.meTopics, data.meStyle, data.meMood, data.meHate, data.meTraits, data.meEmoji, data.meRole, data.meAbsent, data.aiResponse, data.email]);
    return ContentService.createTextOutput(JSON.stringify({status: 'ok'})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({status: 'alive'})).setMimeType(ContentService.MimeType.JSON);
}`;

navigator.clipboard.writeText(code);
console.log('Code copied to clipboard! Now press Ctrl+A then Ctrl+V in the editor.');

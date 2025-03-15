chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "rtl",
    title: "RTL",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "ltr",
    title: "LTR",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab.id, {
    action: info.menuItemId
  });
}); 
chrome.runtime.onMessage.addListener((request) => {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const selectedElement = range.commonAncestorContainer.parentElement;

  if (request.action === "rtl") {
    selectedElement.style.direction = "rtl";
  } else if (request.action === "ltr") {
    selectedElement.style.direction = "ltr";
  }
});


document.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  if (selection.toString().length > 0) {
    
  }
}); 
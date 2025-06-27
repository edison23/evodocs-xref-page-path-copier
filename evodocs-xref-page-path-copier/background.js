function modifyUrl(url) {
  // Remove the base domain
  let path = url.replace(/^(https?:\/\/[^\/]+)(.*)$/, '$2');

  // Remove unwanted segments
  path = path.replace(/\/support-\d+\.\d+/, '');
  path = path.replace(/\/before-\d+\.\d+/, '');
  path = path.replace(/\/master/, '');

  // Ensure it starts with a slash
  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  return path;
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "copy-url") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      const modifiedUrl = modifyUrl(url);

      // Copy to clipboard
      navigator.clipboard.writeText(modifiedUrl).then(() => {
        console.log('URL copied to clipboard:', modifiedUrl);
      }).catch(err => {
        console.error('Could not copy URL: ', err);
      });
    });
  }
});


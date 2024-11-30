function getURL(dataSet) {
  const urls = dataSet.match(/(https?:\/\/[^\s]+)/g);
  return urls || [];
}

function greedyQuery(dataSet) {
  const greedyUrls = [];
  const urls = getURL(dataSet);

  for (const url of urls) {
    const queryParams = url.split('?')[1]?.split('&') || [];
    if (queryParams.length >= 3) {
      greedyUrls.push(url);
    }
  }
  return greedyUrls;
}

function notSoGreedy(dataSet) {
  const notSoGreedyUrls = [];
  const urls = getURL(dataSet);

  for (const url of urls) {
    const queryParams = url.split('?')[1]?.split('&') || [];
    if (queryParams.length >= 2 && queryParams.length <= 3) {
      notSoGreedyUrls.push(url);
    }
  }
  return notSoGreedyUrls;
}
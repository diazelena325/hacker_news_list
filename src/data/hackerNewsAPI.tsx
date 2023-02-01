export const mainUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${mainUrl}topstories.json`;

export const getListingIds = async () => {
  const result = await fetch(topStoriesUrl)
  .then(response => response.json())
  .then(data => data);
  return result;
}

function hackerNewsApi() {
  return (
    <div></div>
  )
}

export default hackerNewsApi
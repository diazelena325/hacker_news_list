export const mainUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${mainUrl}topstories.json`;
export const listingUrl = `${mainUrl}item/`;

//API call to get list of listing Ids of top stories
export async function getListingIds() {
  const result: number[] = await fetch(topStoriesUrl)
    .then(response => response.json())
    .then(data => data);

  return result;
}

//API call to get story details for each listing Id
export async function getEachStory(nsId : number) {
  const result :
    {
      by: string;
      descendants: number;
      id: number;
      kids: number[];
      score: number;
      time: number;
      title: string;
      type: string;
      url: string;
    }
    = await fetch(`${listingUrl + nsId}.json`)
      .then(response => response.json())
      .then((data) => data);

  return result;
}

export const mainUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${mainUrl}topstories.json`;
export const listingUrl = `${mainUrl}item/`;

export async function getListingIds() {
  const result: number[] = await fetch(topStoriesUrl)
    .then(response => response.json())
    .then(data => data);

  return result;
}
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

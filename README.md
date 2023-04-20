# Hacker News List

Displays Hacker News list top 500 stories.

## Description
![Hacker News Example](https://github.com/diazelena325/hacker_news_list/blob/main/hackernewslist_ex.png)

Live Demo can be found [here](https://hacker-news-ediaz.netlify.app/)

List of top news stories using [Hacker News API](https://github.com/HackerNews/API) created with React, Typescript, Material Ui icons, and styled components. Created this to learn more about typescript and testing with JEST. I'm most proud of overcoming the challenge of the API calls and implementing glassmorphism animation styling. 

### Hacker News API used:
Top Stories: https://hacker-news.firebaseio.com/v0/topstories.json \
Individual Story: https://hacker-news.firebaseio.com/v0/item/{itemId}.json

### Difficulties & Things to work on
I had some difficulty with setting the types for the data from the API call and mapping to Newstory in Listings.tsx leaving the type 'any' in order to load the stories.
```
export function NewsStory( { listingId }: { [key: string]: any })
```
Adding more thorough testing and edge cases using Jest. Also in smaller screens, looking at the responsiveness and infinite scrolling, making sure it is loading the next stories correctly. In hooks folder, useInfiniteScroll.tsx, I added math.trunc to scrolltop because it kept getting a 0.5 difference causing it to stop loading the next set of stories.

### Styling
Used styled components to do the css within each tsx file.

Before loading the first 30 stories, a loader is displayed. Infinite scrolling is then initiated to load the next 30 news stories. 

Each story is created with glassmorphism card style. If the story has a url, the card will be indented and has animation when hovering to mimick glass while it eases up. It then navigates to the url as a new tab. For stories without url, the card still displays the same information but is recessed.

### Testing
Unit testing files and snapshots located in `__test__` folder.

App.test.tsx: Test components and elements are rendered.
HackerNewsApi.test.tsx: Test fetch functionality.
Listings.test.tsx: Testing mock function of getListingIds from mock data in fixtures. Snapshot created.
NewsStory.test.tsx: Testing mock function of getEachStory from mock data in fixtures. Snapshot created.

## Getting Started

### Dependencies

This project was bootstrapped in Visual Studio Code with [Create React App](https://github.com/facebook/create-react-app).
```
npx create-react-app . --template typescript
```
Styled Components
```
npm i @types/styled-components
npm install --save styled-components
```

Material UI icons used to show when URL exist.
```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

### Executing program

* In order to run this in VS code, using terminal command:
```
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Help

Any advise for common problems or issues.


## Authors

Elena Diaz
[@twitter: elenadiaz32505](https://twitter.com/ElenaDiaz32505)
[@linkedin: elenadiazse](https://www.linkedin.com/in/elenadiazse/)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## Acknowledgments

Inspiration, code snippets, dependencies etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [Create-React-App-Typescript](https://create-react-app.dev/docs/adding-typescript/)
* [material-ui-icons](https://mui.com/material-ui/material-icons/)
* [Glassmorphism-icon-hover](https://codepen.io/GeeHsu/pen/jOMJMLe)
* [netlify](https://www.netlify.com/)
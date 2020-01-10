# Project Overview

![Gif or Blackjack](https://media.giphy.com/media/l1IXY77djUsHH6S8o/giphy.gif)

## Project Description

## Project Links

- Github Repo: https://github.com/lilspikey333/blackjack
- Deployed site: https://friendly-heisenberg-c02345.netlify.com
- Video presentation: https://youtu.be/Es5kJumQYdI

## Wireframes

### Wireframe

![Screenshot of game layout](https://res.cloudinary.com/ddxlt1pzx/image/upload/v1578343424/BlackJack%20Wireframes/Wireframe_of_Game_fssa4p.png)

### React Component Breakdown

![Screenshot of React Component hierarchy](https://res.cloudinary.com/ddxlt1pzx/image/upload/v1578343424/BlackJack%20Wireframes/React_Components_Heirarchy_tkla6y.png)

## MVP/PostMVP

### MVP

- Utilize an external API To generate cards
- Render cards to the GameBoard
- User can choose to 'stand' or 'hit' based on the cards in their hand
- Computer opponent will have logic to play their turn (based on soft 17)

### PostMVP

- Player will start with value of chips and can play until they are out of money
- Player will be able to 'double-down' and/or 'split'
- Player will be able to play against other humans as well

## Timeframes

| Component                     | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | -------- | -------------- | ------------- | ----------- |
| Getting API functioning       | H        | 3hrs           | 1.5hrs        | 1.5hrs      |
| Building React Router         | H        | 3hrs           | 1hrs          | 1hrs         |
| Creating GameBoard            | H        | 3hrs           | 8hrs          | 8hrs         |
| Adding Cards to the Board     | H        | 3hrs           | 3hrs          | 3hrs         |
| Creating Dealer logic         | H        | 8hrs           | 3hrs          | 3hrs         |
| Building button functionality | H        | 8hrs           | 5hrs          | 5hrs         |
| Establish winning conditions  | H        | 3hrs           | 2hrs          | 2hrs         |
| CSS Styling                   | H        | 8hrs           | 6hrs          | 6hrs         |
| **Total**                     | N/A      | **40hrs**      | **29.5hrs**   | **29.5hrs**     |

## Additional Libraries

I utilized React Bootstrap to help style my modals and buttons
https://react-bootstrap.github.io/getting-started/introduction/

## Code Snippet

Here is my code snippet that I am most proud of in this app ( I know it's more that 10 mines, but I think I could make it 10 lines if I ugly-fied it)
```
setFaceCardValues = array => {
    array.forEach(card => {
      if (
        card.value === "QUEEN" ||
        card.value === "KING" ||
        card.value === "JACK"
      ) {
        card.face = card.value;
        card.value = 10;
      } else if (card.value === "ACE") {
        card.face = "ACE";
        card.value = 11;
      } else {
        card.value = parseInt(card.value);
      }
    });
  };
  ```

  One huge issue that I faced for most of the week was how to get those darn face cards to be a number instead.  I love the above code because it is quite literally a little factory that sets all of the card values to equal the integers that I needed to add up the hands.  I used this several times throughout the course of my program and it worked beautifully each time.


## Issues and Resolutions

Initially I had a ton of errors because I was attempting to calculate and run logic too far down in my components and I was constantly writing callback functions to set the state higher up based on the props in my lower-level components.  On Thursday evening at 5:30pm, I decided to completely take everything back to the drawing board and I mapped out what I wanted each function to do.  I deleted almost all of my code and started over by placing my logic up higher in the components.  This better planning helped to get this project to MVP by 4am on Friday morning... PHEW!

I also finally mastered how to correct the "keys needed error' when mapping through and rendering components.  I now pass in 'idx' to my map function and set the key equal to the idx in props.

### Initial planning: react or just javascript?

### Project Overview

Space Exploration RPG

This project is heavily inspired by the game "Elite Dangerous." This will be a text based exploration game that plays on randomization of data to generate planets for a user to explore and observe.

Project's Purpose/Goal: Will allow users to "explore" space. They will choose a certain type of ship, travel to a star and have the opportunity to examine the planets within the star system. The star name, planet name, and planet traits will be randomly generated.

Minimum Features: 

A spaceship for the user to select with a certain jump-range in light years.
A personalized API or nested library with planet/star traits that will be randomly generated. The user will have a button that allows them to travel to the next star system.
Button with randomly generated star name and star sequence that allows the ussr to know where they are traveling.

Tools Used:
Personalized API with necessary planet and star features. 
JavaScript 
C# (TBD)
API calls
CSS for a dynamic and animated space background.

Stretch Goals:
Allow customization for the ship for longer jump ranges.
Create randomly generated 3D images for planets and stars (found CSS examples).
Have each background color match the sequence of the star, for example A stars are blue/white, while our sun (a G sequence star) is yellow.
Create authentication so a user's progress is saved.
Allow them to see a map of stars to travel to, and travel back to their previous star.
Additional features required for achieving the stretch goal:
SQL and databases to save user authentication.
Branching techniques that allow the program to detect what randomly generated feature is pulled from the API, and CSS styles that change with the star sequence.

### intially try this in javascript, refactor logic for react if I can

initial resources:

https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/

https://www.codegrepper.com/code-examples/javascript/react+select+random+item+from+array select random item

https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array take multiple random elements from array

https://www.youtube.com/watch?v=QwUZxCBtfLw chess game, not what I'm looking for but could be used as a reference

https://www.youtube.com/watch?v=ZGOaCxX8HIU tetris game example in react

https://www.youtube.com/watch?v=PkxA6m-NNCY login in JS and HTML tutorial

https://www.youtube.com/watch?v=kayFBMl06q8 - text based game with javascript - will help me start

https://codepen.io/beejaymorgan/pen/XpGKWJ - good example of what I'm looking to achieve, user input is minimal (use as CSS reference)

https://www.youtube.com/watch?v=ZZY9YE7rZJw - good example of procedural generation, potential use for my planet/star creation MVC

https://www.youtube.com/watch?v=Bed1z7f1EI4 -  example of what can be done in three.js

https://www.youtube.com/watch?v=2BvU23DkWPg -  more examples of how to possibly code planets

https://www.youtube.com/watch?v=pUgWfqWZWmM - potential three.js option

https://www.youtube.com/watch?v=3qJZGGHc3lg&t=42s - easy to follow blender planet tutorial, will be imported in three.js

https://www.youtube.com/watch?v=Zevn_LrfKb8 - resource for rendering

test commit on new computer
### Plan of attack


1. Create functionality to generate a random planet 
2. Start a basic text game
3. Create initial files
4. Create and store a username
5. Users will do this through a login or accoutn creation option
6. Upon logging in, will be redirected to the first page of the game
7. welcome user
8. 

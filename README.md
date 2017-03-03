# Pig Dice

#### By Tevin Aduma

## Description

This program creates a two player web game for Pig Dice. For more information about pig dice, visit https://en.wikipedia.org/wiki/Pig_(dice_game)

### Prequisites
1. You **need a Github account** to clone the project directory from my repository.

1. The webpage needs to be run on **Google Chrome** browser.

1. To view the raw code of the webpage you will probably need a text editor e..g **Atom** or **Brackets**

### Installing
* Using your **Terminal**, you will need to clone/fork the repository containing the root folder to your computer using this command: $ git clone https://github.com/kurosakiaduma/pigdice

OR

* Directly download the root folder to your computer using [this link](https://github.com/kurosakiaduma/pigdice/archive/master.zip)

## Known Bugs

* There are no know bugs for this project.

## Specifications

The program should... | Example Input | Example Output
----- | ----- | -----
If the dice rolls 1 the turn score becomes 0 | Dice: 5, Turn Score: 5 | Dice: 1, Turn Score: 0
If the dice rolls 1 it becomes the next player's turn | Dice: 5, Turn Score: 5, Player1 | Dice: 1, Turn Score: 0, "It's the next player's turn!"
If the player clicks "Hold" the turn score is transferred to the total score, and the turn score turns to 0 | Turn Score: 10 Total Score: 0  | Turn Score: 0 Total Score: 0
If the player clicks "Hold" it becomes the next player's turn | Dice: 5, Turn Score: 5, Player1 | "It's Player2's turn"

## Future Features

HTML | CSS | JavaScript
----- | ----- | -----
--- | --- | Fix bug
--- | --- | Clean up repetitive code, and fully separate the Business & UI Logic
--- | --- | Make the current player's "Roll" and "Hold" buttons disable when they roll a 1
--- | --- | Create an option on the landing page form for the player to play against an AI instead of another player

## Technologies Used

* HTML
* CSS
* Bootstrap
* Font Awesome
* jQuery
* JavaScript

## Author
The author of this project is Tevin Joel Aduma

You can reach me via my:
* [Facebook](https://facebook.com/taduma)

* [Outlook](mailto:tevin74@live.com)

* [Gmail](mailto:kurosakiaduma@gmail.com)

## License
MIT License

Copyright (c) 2017
Aduma Tevin Joel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Chukwuebuka Dikeocha**

Time spent: **3** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/QRmIvs5.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   - https://www.w3schools.com/cssref/default.asp
   - https://developer.mozilla.org/en-US/docs/Web/API/AudioParam

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   One of the biggest challenges I faced working on this project was figuring out how the audio code worked. I have worked with JavaScript and other languages before, but never with the double pipe (||) being used the way it was used here, and never dealing with audio libraries. I didn't understand the AudioContext class or its methods createOscillator and createGain. Additionally, I couldn't understand why we used the arguments we used. For example, the arguments of the setTimeout method, setValueAtTime method and setTargetAtTime method. Because much of the code that deals with the audio is given without much deep explanation for the sake of simplicity, I had to do my own research into the audio library we used. Essentially, I overcame my confusion by looking up various websites and documentation that explained the code. In doing this, I clarified that, one, setTimeout is not inherently a function used for audio purposes, but runs the given function, after the given delay in milliseconds. I learned that AudioContext createOcillator creates the sound wave we perceive as the tone, and createGain controls the volume through the setTargetAtTime and setValueAtTime methods. Lastly, the strange use of the ‘or’ operator near the end of the code determines how the generated audio will connect to the device’s speakers.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   I have a few questions:
First, I noticed here that we only used plain JavaScript, HTML and CSS to create the project, but how and when do libraries such as React.js come into play? Would it be easier or more difficult to make the project using React.js instead?
Second, at one point I downloaded and extracted the .js, .html, and .css files from Glitch to a folder on my computer at the end of completing the basic game, but when I opened the html file in my browser only raw html was rendered. No styling and no functionality. How come only html was rendered even though a link tag and script tag (with defer) was in the head and the html file could not access the other two files?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   If I had more time to work on this project, I would like to implement a settings screen for our game so that the app could be more configurable. Perhaps, directly opposite the start button, a ‘settings’ button will appear. During the game the settings button will disappear. In settings, the user will be able to change the difficulty between easy, medium, and difficult, change the overall appearance of the game such as the background color and game button colors, and maybe we could also keep track of how many games the user won and how many they lost and display it there.

## Interview Recording URL Link

[My 5-minute Interview Recording]https://youtu.be/cbUMeJ5o3Ak

## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

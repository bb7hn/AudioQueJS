# Purpose And Presentation
I created this module because I read some blog posts about **why you can't create an audio (playlist) que with JS**. Then I wanted to try 😊.
Soooo... , here I am with audioQueJs
## Functions
### play() :
| Parameter   | Description | Required    |
| ----------- | ----------- | ----------- |
|**fileName** (*string*)| file name of the audio (can contain folder path too). e.g. : 'audio/testAudios/audio.mp3'|true|
|**loop** (*boolean*)| it sets will the audio loop or don't. e.g. true (default is *false*)|false|
|**sourceUrl** (*string*)| full path of the website which contains audio files. e.g. 'https://batuhanozen.com' (default is *'/'*)|false|
### audioQue() :
| Parameter   | Description | Required    |
| ----------- | ----------- | ----------- |
|**que** (*string*)| file name of the audio (can contain folder path too). e.g. : 'audio/testAudios/audio.mp3'|true|
|**reversed** (*boolean*)| it sets will the que start from the end or from the beginning. e.g. true (default is *false*)|false|
|**sourceUrl** (*string*)| full path of the website which contains audio files. e.g. 'https://batuhanozen.com' (default is *'/'*)|false|

#### Author and Contributor : [Batuhan ÖZEN](https://batuhanozen.com)
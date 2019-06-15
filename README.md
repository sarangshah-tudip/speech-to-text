# node-speech-to-text

This npm module captures the real time audio and internally uses Google Cloud Speech to Text Service. This is just a wrapper to provide more familiar methods to work with in NodeJS application

Google Cloud Speech-to-Text enables developers to convert audio to text by applying powerful neural network models in an easy-to-use API. The API recognizes 120 languages and variants to support your global user base. You can enable voice command-and-control, transcribe audio from call centers, and more. It can process real-time streaming or prerecorded audio, using Google’s machine learning technology.

**Speech to Text Google Service Price** - https://cloud.google.com/speech-to-text/pricing

**Before you begin**

 1. Sign in to your [Google Account](https://accounts.google.com/Login/identifier?flowName=GlifWebSignIn&flowEntry=AddSession). If you don't already have one, [sign up for a new account](https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp).
 2. Set up a GCP Console project. [SET UP A PROJECT](https://accounts.google.com/signin/v2/identifier?passive=true&service=cloudconsole&continue=https://cloud.google.com/speech-to-text/docs/quickstart-client-libraries?refresh=1#client-libraries-install-nodejs&flowName=GlifWebSignIn&flowEntry=ServiceLogin)
    - Create or select a project.
    - Enable the Google Speech-to-Text API for that project.
    - Create a service account.
    - Download a private key as JSON. You can view and manage these resources at any time in the GCP Console.
3. Set the environment variable GOOGLE_APPLICATION_CREDENTIALS to the
    file path of the JSON file that contains your service account key.
    This variable only applies to your current shell session, so if you
    open a new session, set the variable again.
    - **Example:**  Linux or macOS
      - `export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"`
    - **Example:** Windows
      - `$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\[FILE_NAME].json"` 

## For Recording/Listening To Real Time Audio Stream

We have used node-record-lpcm-16. Records a 16-bit signed-integer linear pulse modulation code WAV audio file.

This module uses Node.js streams to minimize memory usage and optimize speed, perfect for embedded devices and "the internet of things".

These audio files are fully compatible with both the  [Google Speech to Text API (v2)](https://github.com/gillesdemey/google-speech-v2)  and the  [Wit.ai Speech API](https://wit.ai/docs/api#span-classtitle-verb-postspeech).


## Dependencies

This module requires you to install  [SoX](http://sox.sourceforge.net/)  and it must be available in your  `$PATH`.

### [](https://github.com/gillesdemey/node-record-lpcm16/blob/master/README.md#for-mac-os)For Mac OS

`brew install sox`

### [](https://github.com/gillesdemey/node-record-lpcm16/blob/master/README.md#for-most-linux-distos)For most linux disto's

`sudo apt-get install sox libsox-fmt-all`

### [](https://github.com/gillesdemey/node-record-lpcm16/blob/master/README.md#for-windows)For Windows

[download the binaries](http://sourceforge.net/projects/sox/files/latest/download)


## Usage

    var speechToText = require('node-speech-to-text');
    
    speechToText.speechToTextRealTimeTranscription();
    
    or
    
    speechToText.speechToTextRealTimeTranscription(encodingParam, sampleRateHertzParam, languageCodeParam, interimResultsParam);

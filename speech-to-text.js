const record = require('node-record-lpcm16');

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

const speechToText = {
    /**
     * 
     * @param {*} encodingParam 
     * @param {*} sampleRateHertzParam 
     * @param {*} languageCodeParam 
     * @param {*} interimResultsParam 
     */
    speechToTextTranscription: function (encodingParam, sampleRateHertzParam, languageCodeParam, interimResultsParam) {
        /**
         * TODO(developer): Uncomment the following lines before running the sample.
         */
        const encoding = encodingParam ? encodingParam : 'LINEAR16'//'Encoding of the audio file, e.g. LINEAR16';
        const sampleRateHertz = sampleRateHertzParam ? sampleRateHertzParam : 16000;
        const languageCode = languageCodeParam ? languageCodeParam : 'en-US'//'BCP-47 language code, e.g. en-US';

        const request = {
            config: {
                encoding: encoding,
                sampleRateHertz: sampleRateHertz,
                languageCode: languageCode,
            },
            interimResults: interimResultsParam ? interimResultsParam : false, // If you want interim results, set this to true
        };

        // Create a recognize stream
        const recognizeStream = client
            .streamingRecognize(request)
            .on('error', console.error)
            .on('data', data =>
                process.stdout.write(
                    data.results[0] && data.results[0].alternatives[0]
                        ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
                        : `\n\nReached transcription time limit, press Ctrl+C\n`
                )
            );

        // Start recording and send the microphone input to the Speech API
        record
            .start({
                sampleRateHertz: sampleRateHertz,
                threshold: 0,
                // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
                verbose: false,
                recordProgram: 'rec', // Try also "arecord" or "sox"
                silence: '10.0',
            })
            .on('error', console.error)
            .pipe(recognizeStream);

        console.log('Listening, press Ctrl+C to stop.');
    }
}

module.exports = speechToText;
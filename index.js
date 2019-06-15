var speechToText = require('./speech-to-text');

module.exports = {
    /**
     * 
     * @param {*} encodingParam 
     * @param {*} sampleRateHertzParam 
     * @param {*} languageCodeParam 
     * @param {*} interimResultsParam 
     */
    speechToTextRealTimeTranscription: function(encodingParam, sampleRateHertzParam, languageCodeParam, interimResultsParam) {
        speechToText.speechToTextTranscription(encodingParam, sampleRateHertzParam, languageCodeParam, interimResultsParam)
    }
}

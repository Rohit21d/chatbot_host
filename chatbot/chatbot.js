'use strict';
const dialogflow = require('@google-cloud/dialogflow');
const structjson = require('./structjson.js');

const config = require('../config/keys');

const projectID = config.googleProjectID;
const credentials ={
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
};

const sessionClient = new dialogflow.SessionsClient({projectID: projectID, credentials: credentials});

const sessionPath = sessionClient.projectAgentSessionPath(config.googleProjectID, config.dialogFlowSessionID);
const languageCode = config.dialogFlowSessionLanguageCode;

module.exports = {
    textQuery: async function(text, parameters = {}) {
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;



    },
        eventQuery: async function(event, parameters = {}) {
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters), //Dialogflow's v2 API uses gRPC. You'll need a jsonToStructProto method to convert your JavaScript object to a proto struct.
                    languageCode: languageCode,
                },
            }
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;

    },

    handleAction: function(responses){
        return responses;
    }


}
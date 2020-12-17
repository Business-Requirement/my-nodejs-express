import dotenv from 'dotenv';
import logger from '@shared/logger/Logger';
import connect from './configuration/db/mongoose.connect'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Set the env file
const envFile = `./env/${process.env.NODE_ENV}.env`;
const result = dotenv.config({
    path: envFile,
});

if (result.error) {
    throw result.error;
} else {
    logger.info(`Loaded environment: ${envFile}`)
}

/************************************************************************************
 *                              connect to mongo db
 ***********************************************************************************/
if (process.env.NODE_ENV === 'development') { //  : for test
    connect();
}


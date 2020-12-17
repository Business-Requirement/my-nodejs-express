import mongoose from 'mongoose';
import logger from '@shared/logger/Logger';


export default () => {
    logger.info(`MONGO # Connecting to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`);
    const connect = () => {
        mongoose
            .connect(
                process.env.MONGO_URL as string,
                {
                    dbName: process.env.MONGO_DB,
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindAndModify: false
                }
            )
            .then(() => {
                return logger.info(`MONGO # Successfully connected to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`);
            })
            .catch(error => {
                logger.error(`MONGO # Error connecting to ${process.env.MONGO_URL}/${process.env.MONGO_DB}`, error);
                return process.exit(1);
            });
    };
    connect();

    mongoose.connection.on('disconnected', connect);
};

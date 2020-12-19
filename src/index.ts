import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/logger/Logger';

// Start the server
const port = Number(process.env.PORT || 8080);
app.listen(port, () => {
    logger.info(`Express server started on ${process.env.HOST}:${process.env.PORT} `);
});

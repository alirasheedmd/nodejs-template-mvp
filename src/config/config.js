import dotenv from 'dotenv';
dotenv.config();
const config = {
    env: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'info',
    app: {
        name: process.env.APP_NAME || 'nodejs-template',
        port: parseInt(process.env.APP_PORT || '3000', 10),
    },
};
export default config;
//# sourceMappingURL=config.js.map
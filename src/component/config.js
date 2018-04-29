const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.PORT || 1337,
  host: env.HOST || 'bonnylive.biz',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};

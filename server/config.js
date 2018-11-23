const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://vendetta:Vendetta28@ds115434.mlab.com:15434/my-online-shop',
  port: process.env.PORT || 8000,
};

export default config;

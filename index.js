const app = require('./src/app');

const APP_PORT = process.env.PORT || 5000;

app.listen(APP_PORT, () => {
  console.log(`listening on port ${APP_PORT}`);
});

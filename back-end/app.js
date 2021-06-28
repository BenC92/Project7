const http= require('http');


const allowedOrigin = ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5501', 'http://127.0.0.1:5501','http://localhost:8080','http://127.0.01:8080']
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)
    if (allowedOrigin.indexOf(origin) === -1) {
      const message = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.'
      return callback(new Error(message), false)
    }
    return callback(null, true)
  },
  exposedHeaders: ['Origin, X-Requested-With, Content, Content-Length, Accept, Content-Type, Authorization'],
  credentials: true
}))

const Sequelize = require('sequelize');
const sequelize = new Sequelize('codeforgeek', 'postgres', 'shahid', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});
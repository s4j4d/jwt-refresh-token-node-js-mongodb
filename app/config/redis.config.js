const redis = require("redis");
const redisClient = redis.createClient();

(async () => {

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();


module.exports={
    redisClient
}
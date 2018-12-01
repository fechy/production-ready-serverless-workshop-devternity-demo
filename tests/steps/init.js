let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.BUILD_ID = "6u5zv4brql";
  process.env.TEST_ROOT = `https://${process.env.BUILD_ID}.execute-api.eu-west-1.amazonaws.com/dev`
  process.env.restaurants_api   = `https://${process.env.BUILD_ID}.execute-api.eu-west-1.amazonaws.com/dev/restaurants`
  process.env.restaurants_table = "restaurants-dev-fgiovanini"
  process.env.AWS_REGION        = "eu-west-1"
  process.env.restaurant_notification_topic = 'restaurants-dev-fgiovanini'
  
  initialized = true
}

module.exports = {
  init
}

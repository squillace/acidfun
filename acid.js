const { events } = require('libacid')

events.on("push", (acidEvent, project) => {
  console.log("Hello world!")
})

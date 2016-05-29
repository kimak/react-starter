var path = require("path")

const SRC_PATH = path.join(__dirname, "src")
const DIST_PATH = path.join(__dirname, "dist")
const TEST_PATH = path.join(__dirname, "test/mocha.setup.js")

module.exports = {
    src: SRC_PATH,
    test: TEST_PATH,
    dist:DIST_PATH,
}

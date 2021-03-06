const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open google': function (browser) {
    // load google
    browser
      .resizeWindow(1920, 1080)
      .url('http://mangukoobas.delfi.ee/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}mangukoobas.png`)
      .pause(1000)
      .click('a[href="/id/5/action/themes/channel/4/"]')
      .pause(1000)
      .click('[class="btn btn_red btn1"]')
      .end();
  },
};

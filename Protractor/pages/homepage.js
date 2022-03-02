let homepage = function() {

    let firstNo_input = element(by.model('first'));
    let secondNo_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url) {
        browser.get(url);
    };

    this.enterFirstNo = function(firstNo) {
        firstNo_input.sendKeys(firstNo);
    };

    this.enterSecondNo = function(secondNo) {
        secondNo_input.sendKeys(secondNo);
    };

    this.clickGo = function() {
        goButton.click();
    };

    this.verifyResult = function(result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual('result');
    };
};

module.exports = new homepage();
describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Julie!');
    });

    describe('todo list', function() {
        var todolist;

        beforeEach(function() {
            browser.get('http://www.angularjs.org');

            todolist = element.all(by.repeater('todo in todolist.todos'));
        });

        it('should list todos', function() {
            expect(todolist.count()).toEqual(2);
            expect(todolist.get(1).getText()).toEqual('build an AngularJS app');
        });

        it('should add a todo', function() {
            var addTodo = element(by.model('todolist.todoText'));
            var addButton = element(by.css('[value="add"]'));

            addTodo.sendKeys('write a protractor test');
            addButton.click();

            expect(todolist.count()).toEqual(3);
            expect(todolist.get(2).getText()).toEqual('write a protractor test');
        });

        });
});
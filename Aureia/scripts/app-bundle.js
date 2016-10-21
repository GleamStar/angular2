define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.items = [
                { framework: "Angular", year: 2009, used: true },
                { framework: "Angular2", year: 2016, used: true },
                { framework: "Aurelia", year: 2016, used: true },
                { framework: "React", year: 2015, used: false }
            ];
        }
        App.prototype.addItem = function (name, year, used) {
            if (name == null || name == undefined || name.trim() == "")
                return;
            if (year == null || year == undefined)
                return;
            this.items.push(new Item(name, year, used));
        };
        return App;
    }());
    exports.App = App;
    var Item = (function () {
        function Item(framework, year, used) {
            this.framework = framework;
            this.year = year;
            this.used = used;
        }
        return Item;
    }());
    exports.Item = Item;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment', 'bootstrap'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <div class=\"page-header\">\n    <h1> List of js frameworks  </h1>\n  </div>\n  <div class=\"panel\">\n    <div class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"  value.bind=\"name\" placeholder = \"Name\" />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-6\">\n          <input type=\"number\" class=\"form-control\" value.bind=\"year\" placeholder=\"Year\" />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-6\">\n          <input type=\"checkbox\" class=\"form-control\" value.bind=\"used\" placeholder=\"Using\" />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-md-offset-2 col-md-8\">\n          <button class=\"btn btn-default\" click.delegate=\"addItem(name, year, used)\">Add</button>\n        </div>\n      </div>\n    </div>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th> Name </th>\n      <th> Year </th>\n      <th> Are you use it ?</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr repeat.for=\"item of items\">\n      <td>${item.framework}</td>\n      <td>${item.year}</td>\n      <td><input type=\"checkbox\" value.bind=\"item.used\" /></td>\n    </tr>\n    </tbody>\n  </table>\n</template>\n"; });
define('text!style.css', ['module'], function(module) { module.exports = ""; });
//# sourceMappingURL=app-bundle.js.map
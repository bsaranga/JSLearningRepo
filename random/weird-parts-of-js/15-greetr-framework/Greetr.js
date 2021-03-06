(function(global){

    var Greetr = function(firsname, lastname, language){
        return new Greetr.init(firsname, lastname, language);
    }

    var supportedLanguages = ['en', 'es'];

    var greetings = {
        en: "Hello",
        es: "Hola"
    };

    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    var logMessages = {
        en: "Logged in",
        es: "Inicio sesion"
    }

    Greetr.prototype = {
        fullName: function() {
            return `${this.firsname} ${this.lastname}`;
        },
        validate: function(){
            if(supportedLanguages.indexOf(this.language) === -1){
                throw "Invalid Language";
            }
        },
        greeting: function(){
            return `${greetings[this.language]} ${this.firsname}!`;
        },
        formalGreeting: function(){
            return `${greetings[this.language]}, ${this.fullName()}`;
        },
        greet: function(formal){
            var msg;

            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }

            if(console){
                console.log(msg);
            }

            return this;
        },
        log: function(){
            if(console){
                console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            }

            return this;
        },
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        }
    };

    Greetr.init = function(firstname, lastname, language){
        var self = this;

        self.firsname = firstname || "";
        self.lastname = lastname || "";
        self.lastname = language || "en";

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})(window);
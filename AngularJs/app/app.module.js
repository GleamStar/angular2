/**
 * Created by Alexey on 10/13/2016.
 */
var AppModule = ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
    .Class({
        constructor: function() { }
    });
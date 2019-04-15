banchileApp.controller('BasicDemoCtrl', function DemoCtrl($mdDialog) {
  this.settings = {
    printLayout: true,
    showRuler: true,
    showSpellingSuggestions: true,
    presentationMode: 'edit'
  };
  this.sampleAction = function(name, ev) {
    $mdDialog.show($mdDialog.alert()
      .title(name)
      .textContent('You triggered the "' + name + '" action')
      .ok('Great')
      .targetEvent(ev)
    );
  };

});

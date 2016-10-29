(function ()
{
    'use strict';


    var main = 'jobs'; // Change this with containing folder name
    
    function ControllerFunction(){
      'ngInject';
      ///////////Initialization Checks///////////
      var self = this;     


      ///////////Methods Declarations///////////



      ///////////Method Definitions///////////

    }

  var name = main; // Change This with Component Name
  var templateUrl = 'app/customerComponents/pages/' + name + '/' + name + '.html';
  var controller = ControllerFunction;
  angular
  .module(name, [    

    ])
  .component(name,{
    templateUrl: templateUrl,
    controller: controller,
    controllerAs: name,
    bindings:{
      input:'<',
      output: '&',
    }
  })
  .config(config);
  var template = '<jobs><jobs/>';
  var state = 'app.'+name.toLowerCase();
  var stateUrl = '/'+main;
  var views = {
    'main@': {
          templateUrl: 'app/core/layouts/content-with-toolbar.html',
          controller: "MainController as self"
    },
    'content@app.jobs': {
      template: template,
    },     
    'toolbar@app.jobs':{
      template: '<landing-toolbar></landing-toolbar>',      
    },
     
  };
  /** @ngInject */
  function config($stateProvider)
  {
    // State
    $stateProvider
    .state(state, {
      url    : stateUrl,
      views  : views,

    });
  }

})();

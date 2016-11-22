(function() {
  'use strict';

  var main = 'pages'; // Change this with containing folder name
  var type = 'Toolbar'; // Change This with Component functionality Detail, Add, Remove, Delete, List etc.

  function ControllerFunction($scope,$reactive,AuthModals,jobService,$mdSidenav) {
    'ngInject';
    ///////////Data///////////
    var self = this;
    $reactive(self).attach($scope);
    self.helpers({
      isLoggedIn: function (){
        return !!Meteor.userId();
      },
      isSupplierLoggedIn: function(){
      return Roles.userIsInRole(Meteor.userId(),'supplier','supplier-group');
      }
    });


    ///////////Methods Declarations///////////
    self.openLogin = openLogin;
    self.openServiceListDialog=openServiceListDialog;
    self.toggleHorizontalMobileMenu=toggleHorizontalMobileMenu;


    ///////////Method Definitions///////////
    function openServiceListDialog(ev) {  
      jobService.openServiceListDialog(ev);
    }
    function openLogin(event){
      AuthModals.openLoginModal(event);
    }
function toggleHorizontalMobileMenu(){
      $mdSidenav('landing-sidenav').toggle();
    }

   
  }

  var name = main + type;
  var templateUrl = 'app/sharedComponents/toolbars/' + name + '/' + name + '.html';
  var controller = ControllerFunction;
  angular
    .module(name, [
      'angular-meteor',
      'AuthModals',
      'toolbarUser',
      'jobServiceModule',
      
      ])
    .component(name, {
      templateUrl: templateUrl,
      controller: controller,
      controllerAs: name,
      bindings: {
        index: '<',
        list: '=',
        done: '&',
      }
    });


})();

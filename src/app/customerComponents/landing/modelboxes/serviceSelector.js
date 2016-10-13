var serviceSelectorModelController = serviceSelectorModelController;

function serviceSelectorModelController($scope,$rootScope,$reactive,$mdDialog,category,$state){
    'ngInject';

    ///////////Data/////////////
    var self = this;
    $reactive(self).attach($scope);
    
    self.helpers({
        services: function(){
            if(category){
                return Services.find({
                    categoryIds: category._id
                });
            }
            else{
                return Services.find();
            }
        }
    });

    //////////////Method Declaration/////////////////
    self.goToQuestions = goToQuestions;


    /////////////Method Definication///////////////////    
    function goToQuestions(serviceId){
        $state.go('app.serviceQuestions',{serviceId:serviceId});
        $mdDialog.hide();
    }


}
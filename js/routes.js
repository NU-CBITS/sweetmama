angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.sweetMama', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sweetMama.html',
        controller: 'sweetMamaCtrl'
      }
    }
  })

  .state('menu.goals', {
    url: '/goals',
    views: {
      'side-menu21': {
        templateUrl: 'templates/goals.html',
        controller: 'goalsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.appointmentCancellation', {
    url: '/cancel',
    views: {
      'side-menu21': {
        templateUrl: 'templates/appointmentCancellation.html',
        controller: 'appointmentCancellationCtrl'
      }
    }
  })

  .state('menu.appointmentSuccess', {
    url: '/appointment_success',
    views: {
      'side-menu21': {
        templateUrl: 'templates/appointmentSuccess.html',
        controller: 'appointmentSuccessCtrl'
      }
    }
  })

  .state('menu.library', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/library.html',
        controller: 'libraryCtrl'
      }
    }
  })

  .state('menu.didactics', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/didactics.html',
        controller: 'didacticsCtrl'
      }
    }
  })

  .state('menu.needHelp', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/needHelp.html',
        controller: 'needHelpCtrl'
      }
    }
  })

  .state('menu.messages', {
    url: '/messages',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('menu.respond', {
    url: '/respond',
    views: {
      'side-menu21': {
        templateUrl: 'templates/respond.html',
        controller: 'respondCtrl'
      }
    }
  })

  .state('menu.newMessage', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newMessage.html',
        controller: 'newMessageCtrl'
      }
    }
  })

  .state('menu.aboutUs', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});
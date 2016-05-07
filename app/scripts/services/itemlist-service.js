'use strict';

/**
 * @ngdoc service
 * @name customerAppApp.ItemlistService
 * @description
 * # ItemlistService
 * Service in the customerAppApp.
 */
 //ItemList Service using Provider
function ItemService(optItems) {
  var items = optItems || [];
  this.list = function () {
    return items;
  };
  this.add = function(item) {
    items.push(item);
  };
  this.remove = function(item) {
    items.pop(item);
  };
}
angular.module('customerAppApp')
  .provider('ItemService',function () {
    var haveDefaultItems = true;
    this.disableDefaultItems = function () {
      haveDefaultItems = false;
    };
    //function gets dependencies, not the above provider
    this.$get = [function () {
      var optItems = [];
      if(haveDefaultItems){
        optItems =[
          {
            id: 1,
            label: 'Item 0'
          },
          {
            id: 2,
            label: 'Item 1'
          }
        ];
      }
      return new ItemService(optItems);
    }];
  })
  .config(['ItemServiceProvider',
    function(ItemServiceProvider){
      //To see how the provider can change configuration,
      // change the value of shouldHaveDefaults to true
      var shouldHaveDefaults = false;

      //Get configuration from server
      if(!shouldHaveDefaults){
        ItemServiceProvider.disableDefaultItems();
      }
    }])
  .controller('mainCtrl',[function () {
    var self = this;
    self.tab = 'first';
    self.open = function (tab) {
      self.tab = tab;
    };
  }])
  .controller('SubCtrl',
    ['ItemService',function (ItemService) {
      var self = this;
      self.list = function () {
        return ItemService.list();
      };
      self.add = function () {
        ItemService.add({
          id: self.list().length + 1,
          label: 'Item' + self.list().length
        });
      };
      self.remove = function () {
        ItemService.remove({
          id:self.list().length - 1,
          label: 'Item ' + self.list().length
        });
      };
    }]);


/*
angular.module('customerAppApp')
  .controller('mainCtrl',[function () {
    var self = this;service 
    self.tab = 'first';
    self.open = function (tab) {
      self.tab = tab;
    };
  }])
  .controller('SubCtrl',['ItemService',
    function (ItemService) {
      var self = this;
      self.list = function () {
        return ItemService.list();
      };
      self.add = function () {
        ItemService.add({
          id:self.list().length + 1,
          label: 'Item ' + self.list().length
        });
      };
      self.remove = function () {
        ItemService.remove({
          id:self.list().length - 1,
          label: 'Item ' + self.list().length
        });
      };
    }])
  .factory('ItemService',[function () {
    var items = [
      {
        id: 1,
        label: 'Item 0'
      },
      {
        id: 2,
        label: 'Item 1'
      }
    ];
    return{
      list: function(){
        return items;
      },
      add: function (item) {
        items.push(item);
      },
      remove: function (item) {
        items.pop(item);
      }
    };
  }]);
*/




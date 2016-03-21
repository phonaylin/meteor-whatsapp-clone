angular
  .module('Whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);
 
function ChatsCtrl ($scope, $reactive, NewChat) {
  $reactive(this).attach($scope);
  
  this.showNewChatModal = showNewChatModal;
  this.remove = remove;
  
  function showNewChatModal() {
    NewChat.showModal();
  }
  
  function remove (chat) {
    Meteor.call('removeChat', chat._id);
  }
  
  this.helpers({
    data() {
      return Chats.find();
    }
  });
  
}
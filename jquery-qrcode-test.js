if (Meteor.isClient) {
  Template.on_rendered.rendered = function(){
    $('#qr').qrcode({text: '1234567890',width: 50,height: 50,});
    $('#qr'+this.find('#qrcode_id').innerText).qrcode({text: this.find('#qrcode_id').innerText,width: 75,height: 75,});
  };

  Template.on_event.events({
    'click #submit': function(event, template){
      //$('#key_up_qrcode').empty();
      console.log(template.find("#keyup_qrcode_id").value.toString());
      $('#key_up_qrcode').qrcode({text: template.find("#keyup_qrcode_id").value.toString(),width: 100,height: 100,});
    },
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

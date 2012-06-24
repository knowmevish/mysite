$(document).ready(function() {
	console.log("my app")

	var MenuView = Backbone.View.extend({
  	
  	el:$('.mainblock'),

  	events: {
  		"mouseover .aboutme": "onMouseAbout",
  		"mouseover .things":"onMouseThings",
  		"mouseover .contact": "onMouseContact",
  		"mouseout .aboutme": "onMouseoutAbout",
  		"mouseout .things": "onMouseoutThings",
  		"mouseout .contact": "onMouseoutContact",
      "click .aboutme": "onClickAbout",
      "click .things": "onClickThings"
  	},

  	initialize: function () {
  		var self = this
  	},

  	onMouseAbout: function() {
  		var self = this
  		$('.aboutme').addClass('mover')
  	},

  	onMouseThings: function() {
  		var self = this
  		$('.things').addClass('mover')
  	},

  	onMouseContact: function() {
  		var self = this
  		$('.contact').addClass('mover')
  	},

  	onMouseoutAbout: function() {
  		var self = this
  		$('.aboutme').removeClass('mover')
  	},

  	onMouseoutThings:function() {
  		var self = this
  		$('.things').removeClass('mover')
  	},

  	onMouseoutContact: function() {
  		var self = this
  		$('.contact').removeClass('mover')
  	},

    onClickAbout: function() {
      var self = this
      $('.contact').removeClass('mclick')
      $('.things').removeClass('mclick')
      $('.aboutme').addClass('mclick')
      $('.tdo').fadeOut("slow",function() {
        $('.abtme').css('visibility','visible') 
        $('.abtme').show() 
      })
      
    },

    onClickThings: function() {
      var self = this
      $('.aboutme').removeClass('mclick')
      $('.things').addClass('mclick')
      $('.abtme').fadeOut("slow",function() {
        $('.tdo').css('visibility','visible')
        $('.tdo').show()
      })
    }
  })//menuitem closes

  // var ContentView = Backbone.View.extend({
  // 	el:$(''),
  // })//contentview closes
  var nview = new MenuView()
})
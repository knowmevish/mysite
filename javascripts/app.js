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
  		"mouseout .contact": "onMouseoutContact"
  	},

  	initialize: function () {
  		var self = this
  	},

  	onMouseAbout: function() {
  		var self = this
  		$('.aboutme').css('color','red')
  	},

  	onMouseThings: function() {
  		var self = this
  		$('.things').css('color','red')
  	},

  	onMouseContact: function() {
  		var self = this
  		$('.contact').css('color','red')
  	},

  	onMouseoutAbout: function() {
  		var self = this
  		$('.aboutme').css('color','#333')
  	},

  	onMouseoutThings:function() {
  		var self = this
  		$('.things').css('color','#333')
  	},

  	onMouseoutContact: function() {
  		var self = this
  		$('.contact').css('color','#333')
  	}
  })//menuitem closes

  var ContentView = Backbone.View.extend({
  	el:$(''),
  })//contentview closes
  var nview = new MenuView()
})
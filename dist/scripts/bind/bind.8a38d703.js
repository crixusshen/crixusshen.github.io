require(["domReady","OBapi"],function(a,b){a(function(){function a(){this.init_page()}var b=require("fragment"),c=require("fragmentPage"),d=require("scroller");a.prototype={init_page:function(){var a=c({name:"bind",url:"#",template:"#bind-script",init:function(a){d(".container",{scrollY:!0,bounce:!0,didTriggerToBottom:function(a){var b=this;b.loading(!1)}})},destory:function(a){}});b(".container").push(a).setDefault("bind").init()}},new a})});
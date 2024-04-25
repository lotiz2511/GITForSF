({
    handleLikeButtonClick : function (cmp) {
        cmp.set('v.liked', !cmp.get('v.liked'));
    },
    handleDisLikeButtonClick : function (cmp) {
        cmp.set('v.disliked', !cmp.get('v.disliked'));
    },
    afterScriptsLoaded: function(component,event,helper){
        console.log('Entra funcion js');
        console.log('vname:'+component.find("name").getElement());
        var vname = component.find("name").getElement();
        console.log('vname:'+vname);
    }
})
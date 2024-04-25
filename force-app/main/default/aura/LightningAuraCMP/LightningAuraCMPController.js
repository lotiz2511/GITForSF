({
    handleLikeButtonClick : function (cmp) {
        cmp.set('v.liked', !cmp.get('v.liked'));
    },
    handleDisLikeButtonClick : function (cmp) {
        cmp.set('v.disliked', !cmp.get('v.disliked'));
    },
    afterScriptsLoaded: function(component,event,helper){
        console.log('Entra funcion js');
        var os = platform.os;
        var version = platform.version;
        var description = platform.description;
        var layout = platform.layout;
        var manufacturer = platform.manufacturer;
        var name = platform.name;
        var product = platform.product;
        component.set('v.Name',name); 
        component.set('v.Version',version); 
        component.set('v.Layout',layout);
        component.set('v.OS',os);
        component.set('v.Description',description);
        component.set('v.Manufacturer',manufacturer);
        component.set('v.Product',product);
        
    }	
})
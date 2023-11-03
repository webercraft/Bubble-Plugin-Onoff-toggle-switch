function(instance, properties, context) {
    const toggleCheck = document.getElementById(instance.data.id)
	toggleCheck.checked = properties.autobinding;
	toggleCheck.addEventListener('change', function(){
       debugger;
        console.log('changed here')
        console.log("here changed")
        console.log( toggleCheck.checked)
        instance.publishState('value', toggleCheck.checked)
        instance.publishAutobinding(toggleCheck.checked)
        instance.triggerEvent('changed')
        
    });

}
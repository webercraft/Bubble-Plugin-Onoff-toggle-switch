function(instance, context) {

    instance.data.id = "onofftoggle-" + Math.random().toString(36).substring(2,16);

    const toggleDiv = document.createElement('div');
    toggleDiv.classList.add('toggle');

    const toggleCheckbox = document.createElement('input');
    toggleCheckbox.type = 'checkbox';
    toggleCheckbox.id = instance.data.id;

    const toggleLabel = document.createElement('label');
    toggleLabel.htmlFor = instance.data.id;
    

    toggleDiv.appendChild(toggleCheckbox);
    toggleDiv.appendChild(toggleLabel);
	instance.canvas.append(toggleDiv);

}
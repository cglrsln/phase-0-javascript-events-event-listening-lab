function callback (){
    console.log("I was successfully clicked.")
};

function addingEventListener() {
    document.querySelector('input').addEventListener('click', callback);
}

addingEventListener();



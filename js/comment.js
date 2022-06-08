document.getElementById("post").addEventListener('click',function(){
    //capture input
    let input = document.getElementById("comment-field");
// create p as comment
    const p = document.createElement('p');
    //set value of p is input.value
    p.innerText = input.value;
    //get the parent where i want to put p
    const div = document.getElementById('comment-div');
    //add p to the parent
    div.appendChild(p);
    //clear the value
    input.value = '';    
})
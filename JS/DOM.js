document.getElementById('btn-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends){
        friend.style.backgroundColor='lightBlue';
    }
})

// center-the-third button

document.getElementById('center-the-third').addEventListener('click', function(){
    const thirdbutton=Document.getElementById('center-the-third');
    thirdbutton.style.backgroundColor='blue';
})
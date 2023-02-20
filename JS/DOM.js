document.getElementById('btn-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightBlue';
    }




});


// center-the-third button
document.getElementById('center-the-third').addEventListener('click', function () {

    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})

// add new fried=nd button
document.getElementById('add-friend').addEventListener('click', function () {
    const friendsContainer = document.getElementById('friends');
    const friend =document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML=`
    <h3 class="friend-name"> New friend</h3>
    <p>something new added </p>
    `
    friendsContainer.appendChild(friend);
})
const submitBtn = document.querySelector('#submit');
const commentList = document.querySelector('#comment-list');
const userIdInput = document.querySelector('#userId');
const commentInput = document.querySelector('#comment');
submitBtn.addEventListener('click', () => {
    const userId = userIdInput.value;
    const comment = commentInput.value;

    if (userId !== '' && comment !== '') {
        createCommentList(userId, comment);
        userIdInput.value = '';
        commentInput.value = '';
    } else {
        alert('아이디와 댓글을 입력하세요.');
    }
});

function createCommentList(userId, comment) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${userId}</strong> - ${comment}`;
    commentList.append(li);
}

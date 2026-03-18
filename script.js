document.addEventListener('DOMContentLoaded', () => {
    // メッセージ変更ボタンの機能
    const changeTextBtn = document.getElementById('changeTextBtnBefore');
    const message = document.getElementById('message');
    changeTextBtn.addEventListener('click', () => {
        message.textContent = 'ボタンがクリックされました！';
    });

    // ログインフォームの機能
    const loginForm = document.getElementById('login');
    const loginStatus = document.getElementById('login-status');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // 簡単なバリデーション
        if (username === 'mabl' && password === 'password123') {
            loginStatus.textContent = 'ログイン成功！';
            loginStatus.style.color = 'green';
        } else {
            loginStatus.textContent = 'ユーザー名またはパスワードが違います。';
            loginStatus.style.color = 'red';
        }
    });
});

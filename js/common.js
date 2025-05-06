function addBackToTopButton() {
  const backToTopHTML = `
      <div style="position: fixed; top: 20px; right: 20px; z-index: 999;">
        <a href="../../index.html">
          <button id="backToTopBtn" style="border: none; outline: none; background-color: #007bff; color: white; cursor: pointer; padding: 10px 15px; border-radius: 5px; font-size: 16px;">
            目次に戻る
          </button>
        </a>
      </div>
    `;
  document.body.insertAdjacentHTML("beforeend", backToTopHTML);
}

// ページが読み込まれたらボタンを追加する
window.onload = addBackToTopButton;

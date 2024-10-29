export function initShowMore() {
  const showMoreButton = document.getElementById('showMoreButton');
  const productBtnBox = document.querySelector('.product-btn-box');

  // SP画面の場合のみボタンを表示
  if (window.innerWidth <= 768) {
    showMoreButton.classList.remove('hidden');

    showMoreButton.addEventListener('click', function() {
      const hiddenItems = document.querySelectorAll('.category-item.hidden');
      hiddenItems.forEach(item => {
        item.classList.remove('hidden'); // 'hidden' クラスを削除して表示
      });

      // すべてのアイテムを表示したらボタンを非表示にする
      if (document.querySelectorAll('.category-item.hidden').length === 0) {
        this.style.display = 'none'; // ボタンを非表示
        productBtnBox.classList.remove('hidden'); // ボタンボックスを表示
      }
    });
  }
}

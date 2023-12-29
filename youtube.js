document.addEventListener("DOMContentLoaded", function() {
    var firstButton = document.querySelector('.content_category .category_item');
    firstButton.classList.add('choose');
  });

function toggleChoose(button) {
    // Loại bỏ class 'choose' từ tất cả các button
    var buttons = document.querySelectorAll('.content_category .category_item');
    buttons.forEach(function(btn) {
      btn.classList.remove('choose');
    });

    // Thêm class 'choose' vào button được nhấp
    button.classList.add('choose');
  }

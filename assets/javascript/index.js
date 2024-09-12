// 1. Xử lí nút menu header navigation trên mobile và animation đóng mở
// Lấy element liên quan
const headerNavigationBtn = document.getElementById('js-header__navigation-btn');
const headerNavigationModal = document.querySelector(
    ".modal.header__navigation-modal");
const headerNavigationCancel = document.getElementById('js-header__navigation-cancel');
const headerNavigationList = document.getElementById('js-header__navigation-list');
const timeAnimation = 200;

// Khi click nút menu thì sổ cái header navigation modal, kích hoạt hiệu ứng mở
headerNavigationBtn.addEventListener('click', function() {
    headerNavigationModal.style.display = "flex";
    headerNavigationList.classList.remove('closeHeaderNavigation');
    headerNavigationList.classList.add('openHeaderNavigation');
})

// Click dấu nhân X để đóng cái cửa sổ header navigation modal, kích hoạt hiệu ứng đóng
headerNavigationCancel.addEventListener('click', function() {
    headerNavigationList.classList.remove('openHeaderNavigation');
    headerNavigationList.classList.add('closeHeaderNavigation');
    // Ẩn sau 0.19 < 0.2s(thời gian animation), tránh bị lỗi hiển thị (do flex)
    setTimeout(function() {
        headerNavigationModal.style.display = "none";
    }, timeAnimation)
})





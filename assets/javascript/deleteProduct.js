const deleteProducstMessage = document.getElementById(
  "js-delete-product-message"
);
const mobileCategory = document.getElementById("js-mobile-category");
let productItems = document.querySelectorAll(".product-item");

const deleleProductLinks = document.querySelectorAll(".js-delete-product");

deleleProductLinks.forEach(function (deleleProductLink) {
  deleleProductLink.addEventListener("click", function (e) {
    e.preventDefault();

    let currentProducts = products;

    // Ẩn mobile category
    mobileCategory.style.display = "none";
    // Xử lí đóng menu khi nhấn vào Xóa Sản Phẩm
    let headerNavigationModal = document.querySelector(
      ".modal.header__navigation-modal"
    );
    headerNavigationModal.style.display = "none";

    renderProducts(currentProducts);

    // Gắn lại sự kiện product-item click khi DOM thay đổi cập nhật
    function addProductItemClickEvent() {
      // Cập nhật lại DOM: mảng class product-item
      productItems = document.querySelectorAll(".product-item");

      // Xóa và đồng bộ thông tin lên localStorage
      productItems.forEach(function (productItem) {
        productItem.addEventListener("click", function (e) {
          e.preventDefault();

          let idProduct = productItem.getAttribute("data-id");
          currentProducts = currentProducts.filter(function (product) {
            return product.id !== parseInt(idProduct);
          });

          localStorage.setItem("products", JSON.stringify(currentProducts));
          renderProducts(currentProducts);

          // Gọi lại hàm addProductItemClickEvent(), đệ quy
          addProductItemClickEvent();
        });
      });
    }

    // Gọi hàm addProductItemClickEvent()
    addProductItemClickEvent();
  });
});

function displayMessageBlankProduct() {
  // Nếu xóa hết sản phẩm
  if (products.length === 0) {
    deleteProducstMessage.style.display = "block";
    deleteProducstMessage.innerHTML = "Danh sách trống";
  } else {
    deleteProducstMessage.innerHTML = "Click vào bất kì sản phẩm để xóa";
  }
}

//2.  Hiển thị js-delete-product-message khi click sang phần xóa sản phẩm
const categoryLinks = document.querySelectorAll(".category-item__link");
categoryLinks.forEach(function (categoryLink) {
  categoryLink.addEventListener("click", function () {
    if (categoryLink.classList.contains("js-delete-product")) {
      deleteProducstMessage.style.display = "block";
      displayMessageBlankProduct();
    } else {
      deleteProducstMessage.style.display = "none";
      displayMessageBlankProduct();
    }
  });
});

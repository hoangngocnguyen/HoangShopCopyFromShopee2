// Lấy element từ trang thêm sản phẩm
const addProductForm = document.getElementById("product-form");
const nameElement = document.getElementById("product-name");
const imageElement = document.getElementById("product-image");
const priceElement = document.getElementById("product-price");
const brandElement = document.getElementById("product-brand");
const originElement = document.getElementById("product-origin");
const categoryNameElement = document.getElementById("categoryName");

// Khởi tạo element liên quan đến product
let urlImage;

// Lấy element liên quan đến lỗi
const nameError = document.getElementById("nameError");
const imageError = document.getElementById("imageError");
const priceError = document.getElementById("priceError");
const brandError = document.getElementById("brandError");
const originError = document.getElementById("originError");
const categoryError = document.getElementById('categoryError');

// Lấy dữ liệu từ local Storage
const products = JSON.parse(localStorage.getItem("products")) || [];

function validateTextInput(inputElement, errorElement) {
  if (!inputElement.value) {
    errorElement.style.display = "block";
    return false;
  } else {
    errorElement.style.display = "none";
    return true;
  }
}

/**
 *
 * @param {*} inputElement Phần tử input cần validate, kiểu text
 * @param {*} errorElement Phần tử báo lỗi
 * Hàm vừa xử lí, vừa trả về boolean
 * Author: Hoang Nguyen 09/08/2024
 */
function validateNumberInput(inputElement, errorElement) {
  if (!inputElement.value) {
    errorElement.style.display = "block";
    return false;
  } else {
    errorElement.style.display = "none";
    if (isNaN(inputElement.value)) {
      errorElement.style.display = "block";
      errorElement.innerHTML = "Vui lòng nhập số";
      return false;
    } else {
      errorElement.style.display = "none";
      errorElement.innerHTML = "Vui lòng nhập giá";
      return true;
    }
  }
}

function validateFileInput(inputElement, errorElement) {
  if (!(inputElement.files && inputElement.files[0])) {
    errorElement.style.display = "block";
    return false;
  } else {
    errorElement.style.display = "none";
    return true;
  }
}

function validateTextContent(element, errorElement) {
  if (!element.textContent) {
    errorElement.style.display = "block";
    return false;
  } else {
    errorElement.style.display = "none";
    return true;
  }
}

// Validate tên sản phẩm
nameElement.addEventListener("blur", function () {
  validateTextInput(nameElement, nameError);
});

// Validate ảnh sản phẩm
imageElement.addEventListener('change', function() {
  validateFileInput(imageElement, imageError);
})

// Validate giá sản phẩm
priceElement.addEventListener("blur", function () {
  validateNumberInput(priceElement, priceError);
});

// Validate thương hiệu
brandElement.addEventListener("blur", function () {
  validateTextInput(brandElement, brandError);
});

// Validate xuất xứ
originElement.addEventListener("blur", function () {
  validateTextInput(originElement, originError);
});

// Validate danh mục


// Đọc ảnh lấy url
let promiseUrlImage;
imageElement.addEventListener("change", function () {
  promiseUrlImage = new Promise(function (resolve, reject) {
    if (imageElement.files && imageElement.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        urlImage = e.target.result;
        resolve(urlImage);
      };
      reader.readAsDataURL(imageElement.files[0]);
    } else {
      reject();
    }
  });
});



// Thêm các danh mục vào category list 
const categoryList = document.getElementById('js-category-list');

// Lấy dữ liệu danh mục từ local Storage
const categoryNameArray = JSON.parse(localStorage.getItem( "categoryNameArray"));


// Duyệt mảng và tạo phần tử con cho category list với textContent là tên danh mục
categoryNameArray.forEach(function(categoryName) {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('category-item');
  categoryItem.textContent = categoryName;

  categoryList.appendChild(categoryItem);
})

// Hiển thị tên danh mục đã click chọn ở category-name
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(function(categoryItem) {
  categoryItem.addEventListener('click', function() {
    categoryNameElement.textContent = categoryItem.textContent;
  })
})





// Xử lí sự kiện submit form
addProductForm.addEventListener("submit", function (e) {
  // Ngăn chặn hành vi load lại trang
  e.preventDefault();

  // Validate tên sản phẩm
  validateTextInput(nameElement, nameError);

  // Validate ảnh
  validateFileInput(imageElement, imageError);

  // Validate giá sản phẩm
  validateNumberInput(priceElement, priceError);

  // Validate thương hiệu
  validateTextInput(brandElement, brandError);

  // Validate xuất xứ
  validateTextInput(originElement, originError);

  // Validate danh mục
  validateTextContent(categoryNameElement, categoryError);
  
  

  // Kiểm tra điều kiện tổng hợp trước khi gửi dữ liệu
  if (
    validateTextInput(nameElement, nameError) &&
    validateFileInput(imageElement, imageError) &&
    validateNumberInput(priceElement, priceError) &&
    validateTextInput(brandElement, brandError) &&
    validateTextInput(originElement, originError) &&
    validateTextContent(categoryNameElement, categoryError)
  ) {
    // Tạo sản phẩm mới từ form, khi ảnh tải dữ liệu xong, có url
    promiseUrlImage
      .then(function (urlImage) {
        const newProduct = {
          name: nameElement.value,
          imgSrc: `${urlImage}`,
          oldPrice: parseInt(priceElement.value),
          currentPrice: parseInt(priceElement.value),
          isLiked: false,
          rating: 0,
          sold: 0,
          brand: brandElement.value,
          origin: originElement.value,
          saleOffLabel: "GIẢM",
          category: categoryNameElement.textContent,
        };
  
        // Thêm id
        let id;
        let idExist;
        // Kiểm tra xem id tạo ra có trùng lặp không, nếu tồn tại thì tạo lại id.
        do {
          id = Math.ceil(Math.random() * 100000000);
          idExist = products.find((product) => product.id === id);
        } while (idExist);
        newProduct.id = id;
        console.log(newProduct.id);
  
        // Đẩy sản phẩm mới vào products
        products.push(newProduct);
  
        // Gửi dữ liệu lên local Storage
        localStorage.setItem("products", JSON.stringify(products));
  
        alert("Thêm sản phẩm thành công");
      })
      .catch(function () {
        console.log("fail");
      });
  }
});



// BẢN XEM TRƯỚC SẢN PHẨM HIỂN THỊ
imageElement.addEventListener("change", function () {
  if (imageElement.files && imageElement.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(".product-item__img").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
    };
    reader.readAsDataURL(imageElement.files[0]);
  }
});


// Hàm định dạng số với dấu chấm phân cách
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "đ";
}

// $(selector), .text() : jquery, truyền chuỗi không truyền html
nameElement.addEventListener("input", function () {
  $(".product-item__name").text(nameElement.value);
});

// Hàm formatPrice ở productList
priceElement.addEventListener("input", function () {
  $(".product-item__price-current").text(
    formatPrice(parseInt(priceElement.value))
  );
});

brandElement.addEventListener("input", function () {
  $(".product-item__brand").text(brandElement.value);
});

originElement.addEventListener("input", function () {
  $(".product-item__origin-name").text(originElement.value);
});

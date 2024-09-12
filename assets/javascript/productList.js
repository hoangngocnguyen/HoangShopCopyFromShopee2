const products = JSON.parse(localStorage.getItem("products"));

// Hàm định dạng số với dấu chấm phân cách
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "đ";
}
const productList = document.getElementById("product-list");

function createProduct(product) {
  // Col
  const colDiv = document.createElement("div");
  colDiv.classList.add("col", "l-2-4", "m-4", "c-6");

  // Product Link
  const productLink = document.createElement("a");
  productLink.classList.add("product-item");
  // Tạo thuộc tính data-id lưu id của từng sản phẩm
  productLink.setAttribute("data-id", product.id);
  productLink.href = "#";

  // 1. Product Image
  const productImg = document.createElement("div");
  productImg.classList.add("product-item__img");
  productImg.style.backgroundImage = `url(${product.imgSrc})`;

  // 2. Product Name
  const productName = document.createElement("h4");
  productName.classList.add("product-item__name");
  productName.textContent = product.name;

  // 3. Product Price
  const productPrice = document.createElement("div");
  productPrice.classList.add("product-item__price");

  const productOldPrice = document.createElement("span");
  productOldPrice.classList.add("product-item__price-old");
  productOldPrice.textContent = formatPrice(product.oldPrice);

  // Nếu giá không đổi (giá cũ = giá mới) thì ẩn giá cũ
  if (product.oldPrice === product.currentPrice) {
    productOldPrice.style.display = "none";
  }

  const productCurrentPrice = document.createElement("span");
  productCurrentPrice.classList.add("product-item__price-current");
  productCurrentPrice.textContent = formatPrice(product.currentPrice);
  productPrice.appendChild(productOldPrice);
  productPrice.appendChild(productCurrentPrice);

  // 4. Product Action
  const productAction = document.createElement("div");
  productAction.classList.add("product-item__action");

  // 4.1. Action: Like
  const likeDiv = document.createElement("div");
  likeDiv.classList.add("product-item__like");
  if (product.isLiked === true) {
    likeDiv.classList.add("product-item__like--liked");
  }

  likeDiv.onclick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (product.isLiked === false) {
      likeDiv.classList.add("product-item__like--liked");
      product.isLiked = true;
    } else {
      likeDiv.classList.remove("product-item__like--liked");
      product.isLiked = false;
    }
  };

  const likeIconEmpty = document.createElement("i");
  likeIconEmpty.classList.add(
    "fa-regular",
    "fa-heart",
    "product-item__like-icon-emty"
  );

  const likeIconFill = document.createElement("i");
  likeIconFill.classList.add(
    "fa-solid",
    "fa-heart",
    "product-item__like-icon-fill"
  );
  likeDiv.appendChild(likeIconEmpty);
  likeDiv.appendChild(likeIconFill);

  // 4.2. Action: Rating
  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("product-item__rating");
  for (let i = 0; i < product.rating; i++) {
    const star = document.createElement("i");
    star.classList.add("product-item__star--gold", "fa-solid", "fa-star");
    ratingDiv.appendChild(star);
  }
  for (let i = product.rating; i < 5; i++) {
    const star = document.createElement("i");
    star.classList.add("fa-solid", "fa-star");
    ratingDiv.appendChild(star);
  }

  // 4.3. Action: Sold
  const soldSpan = document.createElement("span");
  soldSpan.classList.add("product-item__sold");
  soldSpan.textContent = `Đã bán ${product.sold}`;
  if (product.sold > 9999) {
    let roundValue = Math.round(product.sold / 1000).toFixed(1);
    soldSpan.textContent = `Đã bán ${parseFloat(roundValue)}N+`;
  }

  // Thêm class vào Product Action
  productAction.appendChild(likeDiv);
  productAction.appendChild(ratingDiv);
  productAction.appendChild(soldSpan);

  // 5. Product Origin
  const productOrigin = document.createElement("div");
  productOrigin.classList.add("product-item__origin");
  // 5.1 Brand
  const brandSpan = document.createElement("span");
  brandSpan.classList.add("product-item__brand");
  brandSpan.textContent = product.brand;
  // 5.2 Origin name
  const originNameSpan = document.createElement("span");
  originNameSpan.classList.add("product-item__origin-name");
  originNameSpan.textContent = product.origin;
  // Thêm class vào Product Origin
  productOrigin.appendChild(brandSpan);
  productOrigin.appendChild(originNameSpan);

  // 6. Product Favorite
  const productFavorite = document.createElement("div");
  productFavorite.classList.add("product-item__favorite");

  const favoriteIcon = document.createElement("i");
  favoriteIcon.classList.add("fa-solid", "fa-check");

  const favoriteSpan = document.createElement("span");
  favoriteSpan.textContent = "Yêu thích";

  // Thêm class vào Product Favorite
  productFavorite.appendChild(favoriteIcon);
  productFavorite.appendChild(favoriteSpan);

  // 7. Product Sale off
  const productSaleOff = document.createElement("div");
  productSaleOff.classList.add("product-item__sale-off");

  const saleOffPercent = document.createElement("span");
  saleOffPercent.classList.add("product-item__sale-off-percent");
  saleOffPercent.textContent = product.saleOffPercent + "%";

  const saleOffLabel = document.createElement("span");
  saleOffLabel.classList.add("product-item__sale-off-label");
  saleOffLabel.textContent = product.saleOffLabel;

  // Thêm class vào Product Sale off
  productSaleOff.appendChild(saleOffPercent);
  productSaleOff.appendChild(saleOffLabel);

  // Nếu giá không đổi (cũ = mới) thì ẩn saleOff
  if (product.oldPrice === product.currentPrice) {
    productSaleOff.style.display = "none";
  }

  // **Thêm class vào Product Link (Product-item)
  productLink.appendChild(productImg);
  productLink.appendChild(productName);
  productLink.appendChild(productPrice);
  productLink.appendChild(productAction);
  productLink.appendChild(productOrigin);
  productLink.appendChild(productFavorite);
  productLink.appendChild(productSaleOff);

  // Thêm class vào Col
  colDiv.appendChild(productLink);

  // ***Thêm col vào Product List
  productList.appendChild(colDiv);
}

function createProductList(products) {
  products.forEach(function (product, i) {
    createProduct(product);
  });
}

function renderProducts(products) {
  productList.innerHTML = "";
  createProductList(products);
}

// Tạo biến lưu sản phẩm lọc và sản phẩm theo danh mục
let filteredProduct = products.slice();
let categoryProduct = products.slice();

// **Tìm kiếm sản phẩm và hiển thị ở product list
const searchInput = document.getElementById("js-header-search-input");
const searchBtn = document.getElementById("js-header__search-btn");

function searchProduct(products) {
  const searchValue = searchInput.value.toLowerCase();
  filteredProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue)
  );
  renderProducts(filteredProduct);
}

// Xử lí sự kiện vừa nhập input vừa render
searchBtn.addEventListener("click", searchProduct);
searchInput.addEventListener("input", function () {
  document.getElementById("js-header__search-history").classList.add("hidden");
  searchProduct(products);
});

// Sắp xếp danh sách sản phẩm theo giá

// Giá thấp đến cao
let sortAscBtns = document.querySelectorAll(".js-sort-asc");
for (let sortAscBtn of sortAscBtns) {
  sortAscBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // Chỉ lấy dữ liệu từ categoryProduct, không sắp xếp nó
    const ascPriceProducts = categoryProduct.slice();
    ascPriceProducts.sort((a, b) => a.currentPrice - b.currentPrice);
    renderProducts(ascPriceProducts);
  });
}

// Giá cao đến thấp
let sortDescBtns = document.querySelectorAll(".js-sort-desc");
for (let sortDescBtn of sortDescBtns) {
  sortDescBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const descPriceProducts = categoryProduct.slice();
    descPriceProducts.sort((a, b) => b.currentPrice - a.currentPrice);
    renderProducts(descPriceProducts);
  });
}

// Xử lí khi click vào lịch sử tìm kiếm, giá trị hiển thị lên ô input
let historySearchLinks = document.querySelectorAll(
  ".header__search-history-item a"
);
historySearchLinks.forEach(function (historySearchLink) {
  historySearchLink.addEventListener("click", function (e) {
    searchInput.value = historySearchLink.textContent;
  });
});

// Sắp xếp các sản phẩm phổ biến: category mặc định
const popularBtns = document.querySelectorAll(".js-popularBtn");
popularBtns.forEach(function (popularBtn) {
  popularBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const popularProduct = categoryProduct;
    renderProducts(popularProduct);
  });
});

// Sắp xếp các sản phẩm bán chạy bestSeller
const bestSellerBtns = document.querySelectorAll(".js-bestSellerBtn");

bestSellerBtns.forEach(function (bestSellerBtn) {
  bestSellerBtn.addEventListener("click", function (e) {
    // Ngăn chặn hành vi mặc định thẻ a
    e.preventDefault();

    // Lưu danh sách đã sắp xếp
    const bestSellerProducts = categoryProduct.slice();
    bestSellerProducts.sort((a, b) => b.sold - a.sold);
    // Render sản phẩm vừa lọc
    renderProducts(bestSellerProducts);
  });
});

/**
 *
 * @param {*} arrayElement Danh sách phần tử cần xóa active
 * @param {*} currentElement Phần tử cần active
 * @param {*} className class để active
 * Author: HoangNguyen (26/7/2024)
 */
function activeElement(arrayElement, currentElement, className) {
  // Xóa tất cả active
  arrayElement.forEach(function (element) {
    element.classList.remove(className);
  });

  // Thêm active ở btn hiện tại
  currentElement.classList.add(className);
}
function activeParentElement(arrayElement, currentElement, className) {
  // Xóa tất cả active
  arrayElement.forEach(function (element) {
    // Lấy thẻ li
    element.parentElement.classList.remove(className);
  });
  // Thêm active ở btn hiện tại
  currentElement.parentElement.classList.add(className);
}

// Active nút filter ở thanh home-filer
const homeFilterBtns = document.querySelectorAll(".home-filter__btn");

homeFilterBtns.forEach(function (homeFilterBtn) {
  homeFilterBtn.addEventListener("click", function (e) {
    // Ngăn chặn hành vi thẻ a
    e.preventDefault();
    activeElement(homeFilterBtns, e.target, "btn--primary");
  });
});

// (MOBILE) Active nút filter ở header sort bar
const headerSortMobiles = document.querySelectorAll(".js-header-sort-mobile");

headerSortMobiles.forEach(function (headerSortMobile) {
  headerSortMobile.addEventListener("click", function (e) {
    // Ngăn chặn hành vi thẻ a
    e.preventDefault();
    activeParentElement(
      headerSortMobiles,
      e.target,
      "header-sort__item--active"
    );
  });
});

// Active danh mục trên PC
const categoryItemLinks = document.querySelectorAll(".category-item__link");

categoryItemLinks.forEach(function (categoryItemLink) {
  categoryItemLink.addEventListener("click", function (e) {
    e.preventDefault();
    activeParentElement(categoryItemLinks, e.target, "category-item--active");
  });
});



// Render sản phẩm danh mục trên PC + MOBILE
const categoryBtnAlls = document.querySelectorAll(".js-category-btn--all");
const categoryBtns = document.querySelectorAll(".js-category-btn");
categoryBtns.forEach(function (categoryBtn) {

  categoryBtn.addEventListener("click", function (e) {
    // Ngăn chặn hành vi thẻ a
    e.preventDefault();

    // Chuyển về nút filter đầu tiên (PC + Mobile): chưa lọc
    let homeFilterBtnFirst = document.querySelector(".home-filter__btn");
    let headerSortBarFirst = document.querySelector(".header-sort__link");
    homeFilterBtnFirst.click();
    headerSortBarFirst.click();


    // filter & render
    // Nếu danh mục là "tất cả" thì render lại toàn bộ sản phẩm
    if (categoryBtn.classList.contains("js-category-btn--all")) {
      categoryProduct = products.slice();
    } else {
      // Lấy phần tử con đầu tiên: categoryName
      const categoryName = categoryBtn.firstElementChild;
      categoryProduct = products.filter(
        (product) => product.category === categoryName.textContent
      );
    }
    renderProducts(categoryProduct);
  });
});

categoryBtns.forEach(function (categoryBtn) {
  if (categoryBtn.classList.contains('js-category-btn--all')) {
    categoryBtn.click();
  }
})


// Hiển thị số lượng sản phẩm ở category (pc + mobile)
// Category all, class riêng, còn lại duyệt sản phẩm và đến dựa vào tên danh mục

categoryBtns.forEach(function (categoryBtn) {
  let qntProductSpan = document.createElement("span");
  qntProductSpan.classList.add("category-item__qnt-product");
  // Category All
  if (categoryBtn.classList.contains("js-category-btn--all")) {
    qntProductSpan.innerHTML = ` (${products.length})`;
    categoryBtn.appendChild(qntProductSpan);
  } else {
    // Hàm đếm số lượng sản phẩm theo danh mục
    let qntProductByCategory = function () {
      let cnt = 0;
      products.forEach(function (product) {
        // Lấy phần tử con đầu tiên: categoryName
        const categoryName = categoryBtn.firstElementChild;
        if (categoryName.textContent === product.category) {
          cnt++;
        }
      });
      return cnt;
    };

    // Thêm số lượng vào phần tử
    qntProductSpan.innerHTML = ` (${qntProductByCategory()})`;
    categoryBtn.appendChild(qntProductSpan);
  }
});




// Lưu danh sách danh mục (lấy từ pc hoặc mobile) lưu vào storage

var categoryList = document.querySelectorAll('.category-item__link.js-category-btn');

let categoryNameArray = [];
categoryList.forEach(function(category) {
  if (!category.classList.contains('js-category-btn--all')) {
    let categoryName = category.firstElementChild.textContent;
    categoryNameArray.push(categoryName)
  }
})

localStorage.setItem("categoryNameArray", JSON.stringify(categoryNameArray));


let productOriginals = [
    {
        name: `Xiaozhubangchu keycaps Mario bàn phím cơ 124 
        phím keycaps chất lượng cao kết hợp`,
        imgSrc: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbk5-lmzewxxfis7u0b",
        oldPrice: 301000,
        currentPrice: 149000,
        isLiked: false,
        rating: 3,
        sold: 126,
        brand: "XiaoZhu",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM",
        category: "Phụ kiện"
    },
    {
        name: `Xiaozhubangchu Pikachu keycap MOA chiều cao PBT keycap năm mặt thăng"
            + "hoa dễ thương tùy chỉnh bộ keycap cá tính`,
        imgSrc: "https://down-vn.img.susercontent.com/file/sg-11134201-7rcf1-ltg5obospr6i3b",
        oldPrice: 267000,
        currentPrice: 141000,
        isLiked: true,
        rating: 5,
        sold: 193,
        brand: "XiaoZhu",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM",
        category: "Phụ kiện"
    },
    {
        name: `[Nhập ELHP15 giảm 15% tối đa 3TR] Laptop HP 15s-fq2712TU (7C0X2PA)/"
               + "Intel Core i3-1115G4 / RAM 8GB/ 256GB`,
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llsps9gol7tred",
        oldPrice: 19299600,
        currentPrice: 13590000,
        isLiked: false,
        rating: 4.3,
        sold: 643,
        brand: "HP",
        origin: "Việt Nam",
        saleOffLabel: "GIẢM",
        category: "Laptop"
    },
    {
        name: `Điện thoại Apple IPhone 14 128GB`,
        imgSrc: "https://down-vn.img.susercontent.com/file/sg-11134201-23020-q78nka801cnv83",
        oldPrice: 27900000,
        currentPrice: 16930000,
        isLiked: false,
        rating: 5,
        sold: 12045,
        brand: "Apple",
        origin: "USA",
        saleOffLabel: "GIẢM",
        category: "Điện thoại"
    },
    {
        name: `Màn hình Samsung 27 inch Cong LC27R500FHEXXV FHD AMD FreeSync 4ms Bảo
               vệ mắt Khử nhấp nháy`,
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lwcdqa92w3lb3a",
        oldPrice: 4120000,
        currentPrice: 3400000,
        isLiked: true,
        rating: 2,
        sold: 1234,
        brand: "Samsung",
        origin: "Việt Nam",
        saleOffLabel: "GIẢM",
        category: "PC"
    },
    {
        name: `Full Bộ Máy Tính PC Core i5, i7 Kèm Màn Full HD Chơi Mượt Mọi Game"
               + "FIFA, LOL, PUBG - Thiết Kế Đồ Họa`,
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqm6ddekvgone9",
        oldPrice: 7860000,
        currentPrice: 6340000,
        isLiked: false,
        rating: 5,
        sold: 45861,
        brand: "CGO",
        origin: "Việt Nam",
        saleOffLabel: "GIẢM",
        category: "PC"
    },
    {
        name: `Chuột Gaming không dây Rapoo VT960S Wireless 2.4G pin sạc`,
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfakrxoi6b9m8d",
        oldPrice: 170000,
        currentPrice: 149000,
        isLiked: false,
        rating: 5,
        sold: 512,
        brand: "Rapoo",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM",
        category: "Phụ kiện"
    },
    {
        name: `Apple iPad (Gen 9) WIFI Chính hãng (ZA/A)`,
        imgSrc: "https://down-vn.img.susercontent.com/file/ada38c6e6ea23c99065eba067b184b0f",
        oldPrice: 12900000,
        currentPrice: 11490000,
        isLiked: true,
        rating: 3,
        sold: 31400,
        brand: "Apple",
        origin: "USA",
        saleOffLabel: "GIẢM",
        category: "Điện thoại"
    },
    {
        name: `Máy tính xách tay Apple Macbook Air (2022) M2 chip, 13.6 inches, 8GB,"
               + "256GB SSD`,
        imgSrc: "https://down-vn.img.susercontent.com/file/1cba156175a5ef0b0d356b52451b4c42",
        oldPrice: 32900000,
        currentPrice: 27000000,
        isLiked: false,
        rating: 5,
        sold: 1026,
        brand: "Apple",
        origin: "USA",
        saleOffLabel: "GIẢM",
        category: "Laptop"
    },
    {
        name: `Tai nghe Apple AirPods 3rd gen lightning charge`,
        imgSrc: "https://down-vn.img.susercontent.com/file/f2f9ddaf332def792d62021325ca0198",
        oldPrice: 5310000,
        currentPrice: 4590000,
        isLiked: true,
        rating: 3,
        sold: 5162,
        brand: "Apple",
        origin: "USA",
        saleOffLabel: "GIẢM",
        category: "Phụ kiện"
    },
    {
        name: `Xiaomi Redmi 13 6GB/128GB`,
        imgSrc: "https://cdn.tgdd.vn/Products/Images/42/325800/redmi-13-blue-thumb-600x600.jpg",
        oldPrice: 4290000,
        currentPrice: 4290000,
        isLiked: false,
        rating: 0,
        sold: 0,
        brand: "Xiaomi",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM",
        category: "Điện thoại"
    },
    {
        name: `Sạc dự phòng Xmobile 20W Y73`,
        imgSrc: "https://cdn.tgdd.vn/Products/Images/57/308509/pin-sac-du-phong-10000mah-type-c-pd-qc3-0-20w-xmobile-y73-thumb-600x600.jpg",
        oldPrice: 800000,
        currentPrice: 400000,
        isLiked: false,
        rating: 3,
        sold: 1302,
        brand: "Xmobile",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM",
        category: "Phụ kiện"
    },
    {
        name: `ASUS AIO A3402WVAK i3 1315U/8GB/512GB/23.8"FullHD/Bàn phím/Chuột/Win11(WPC080W)`,
        imgSrc: "https://cdn.tgdd.vn/Products/Images/5698/326091/asus-aio-a3402wvak-i3-wpc080w-thumb-49-600x600.jpg",
        oldPrice: 17790000,
        currentPrice: 16290000,
        isLiked: false,
        rating: 4.3,
        sold: 91,
        brand: "ASUS",
        origin: "Đài Loan",
        saleOffLabel: "GIẢM",
        category: "PC"
    },
    {
        name: `Balo Laptop 15.6 inch HP Travel 25 Liter 15.6 Iron 6B8U4AA`,
        imgSrc: "https://cdn.tgdd.vn/Products/Images/7923/327791/balo-laptop-15-6-inch-hp-travel-25-liter-15-6-iron-6b8u4aa-110724-043737-600x600.jpg",
        oldPrice: 1290000,
        currentPrice: 1161000,
        isLiked: false,
        rating: 4,
        sold: 2005,
        brand: "HP",
        origin: "USA",
        saleOffLabel: "GIẢM",
        category: "Phụ kiện"
    },
    {
        name: `Tai nghe chụp tai Bluetooth AirPods Max Apple`,
        imgSrc: "https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-thumb3-600x600.jpeg",
        oldPrice: 13990000,
        currentPrice: 12990000,
        isLiked: false,
        rating: 5,
        sold: 6,
        brand: "Apple",
        origin: "USA",
        saleOffLabel: "GIẢM",
        category: "Phụ kiện"
    },
    {
        name: `Laptop Lenovo Ideapad Slim 3 15IAH8 i5 12450H/16GB/512GB/Win11 (83ER000EVN)`,
        imgSrc: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSFnXgtjPJNHb60oVmVRaDOzX3xRdsedrHLJY9_CFUvoDD9fYY_rc8eJzZ_usFF-uEBEgm4_x9R-c-WceHBy5Uzfpyk8_3nIoSoXsCYk2Jy-7XuEyOj3D9E&usqp=CAE",
        oldPrice: 15990000,
        currentPrice: 14390000,
        isLiked: false,
        rating: 5,
        sold: 21892,
        brand: "Lenovo",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM",
        category: "Laptop"
    },
    {
        name: `Điện thoại vivo Y28 8GB/128GB`,
        imgSrc: "https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg",
        oldPrice: 5790000,
        currentPrice: 5640000,
        isLiked: false,
        rating: 4,
        sold: 812,
        brand: "Vivo",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM",
        category: "Điện thoại"
    },
    {
        name: `Điện thoại Samsung Galaxy M54 5G 8GB/256GB`,
        imgSrc: "https://cdn.tgdd.vn/Products/Images/42/275953/samsung-galaxy-m54-bac-thumb-600x600.jpg",
        oldPrice: 8990000,
        currentPrice: 7990000,
        isLiked: false,
        rating: 4,
        sold: 4186,
        brand: "Samsung",
        origin: "Hàn Quốc",
        saleOffLabel: "GIẢM",
        category: "Điện thoại"
    }
]

productOriginals.forEach(product => 
    product.saleOffPercent = Math.round((1 - (product.currentPrice / product.oldPrice)) * 100)
);
productOriginals.forEach(function(product) {
    let id;
    let idExist;
    // Kiểm tra xem id tạo ra có trùng lặp không, nếu tồn tại thì tạo lại id.
    do {
        id = Math.ceil(Math.random()*100000000);
        idExist = productOriginals.find(product =>
            product.id === id
        )
    } while (idExist)
    product.id = id;
});
// Gửi dữ liệu lên local Storage
let isUpLoaded = JSON.parse(localStorage.getItem("isUpLoaded")) || '';
if (!isUpLoaded) {
    localStorage.setItem("products", JSON.stringify(productOriginals));
    isUpLoaded = true;
    localStorage.setItem("isUpLoaded", JSON.stringify(isUpLoaded));
}

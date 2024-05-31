import React from 'react';
import "./HomePage.scss";
import '../App.css';
import Carousel from './Bien';

export default function HomePage() {
  const images = [
    '../../public/banner-1.jpg',
    '../../public/banner-2.jpg',
    '../../public/banner-3.jpg',
    '../../public/banner-4.jpg',
    '../../public/banner-5.jpg'
  ];

  return (
    <div>
      <header>
        <div className='header-homepage'>
          <h1 className='header-homepage-text'>Rikkei_Shop</h1>
          <div className='header-homepage-search'>
            <input className='header-homepage-input' type="text" placeholder='Nhập để tìm kiếm' />
            <div><i className="fa-solid fa-magnifying-glass"></i></div>
          </div>
          <div><i className="fa-solid fa-cart-shopping"></i> Giỏ hàng</div>
          <div>Đăng nhập</div>
          <div>Đăng ký</div>
        </div>
      </header>
      <div className="App">
        <header className="App-header">
          <Carousel images={images} />
        </header>
      </div>
      <main>
        <div className='main-category'>
          <div className='main-category-text'>Danh mục sản phẩm</div>
          <div className='main-category-select'><i className="fa-solid fa-caret-right"></i> Tất cả sản phẩm</div>
          <div className='main-category-text-all'>Thiết bị điện tử</div>
          <div className='main-category-text-all'>Sách</div>
          <div className='main-category-text-all'>Đồ tiêu dùng</div>
          <div className='main-category-text-all'>Thời trang</div>
        </div>
        <div className='main-products'>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone 6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6plus.jpg" alt="" />
            <div className='main-products-product-name'>Iphone 6 Plus</div>
            <div className='main-products-product-price'>3.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>500 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/Iphone7.jpg" alt="" />
            <div className='main-products-product-name'>Iphone 7</div>
            <div className='main-products-product-price'>35.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>500 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone7plus.jpg" alt="" />
            <div className='main-products-product-name'>Iphone 7 Plus</div>
            <div className='main-products-product-price'>35.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>48 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/Iphone8.jpg" alt="" />
            <div className='main-products-product-name'>Iphone 8</div>
            <div className='main-products-product-price'>35.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>48 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone8plus.jpg" alt="" />
            <div className='main-products-product-name'>Iphone 8 Plus</div>
            <div className='main-products-product-price'>35.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>48 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>IphoneX</div>
            <div className='main-products-product-price'>35.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>48 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphonexr.jpg" alt="" />
            <div className='main-products-product-name'>Iphone Xr</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphonexs.jpg" alt="" />
            <div className='main-products-product-name'>Iphone Xs</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphonexsmax.jpg" alt="" />
            <div className='main-products-product-name'>Iphone Xs Max</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone12pro.jpg" alt="" />
            <div className='main-products-product-name'>Iphone 12 Pro</div>
            <div className='main-products-product-price'>35.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone12promax.jpg" alt="" />
            <div className='main-products-product-name'>Iphone 12 Pro Max</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/HoangTuBe.jpg" alt="" />
            <div className='main-products-product-name'>Hoàng tử bé</div>
            <div className='main-products-product-price'>53.700đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>7162 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div></div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/MuonKiepNhanSinh.jpg" alt="" />
            <div className='main-products-product-name'>Muôn khiếp nhân sinh</div>
            <div className='main-products-product-price'>109.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>4110 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div></div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/NhaGiaKim.jpg" alt="" />
            <div className='main-products-product-name'>Nhà giả kim</div>
            <div className='main-products-product-price'>55.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>9142 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div></div>
              <div>Hà Nội</div>
            </div>
          </div>
          
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/ToiTuHoc.jpg" alt="" />
            <div className='main-products-product-name'>Tôi tự học</div>
            <div className='main-products-product-price'>32.900đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>2412 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div></div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/DacNhanTam.jpg" alt="" />
            <div className='main-products-product-name'>Đắc nhân tâm</div>
            <div className='main-products-product-price'>56.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>16231 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div></div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/MatBiec.jpg" alt="" />
            <div className='main-products-product-name'>Mắt biếc</div>
            <div className='main-products-product-price'>76.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>9512 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div></div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/KhongGiaDinh.jpg" alt="" />
            <div className='main-products-product-name'>Không gia đình</div>
            <div className='main-products-product-price'>74.500đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>12345 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div></div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Your name</div>
            <div className='main-products-product-price'>45.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='main-products-product'>
            <img className='main-products-product-img' src="../../public/iphone6.jpg" alt="" />
            <div className='main-products-product-name'>Iphone6</div>
            <div className='main-products-product-price'>29.000.000đ</div>
            <div className='main-products-product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='main-products-product-address'>
              <div>Apple</div>
              <div>Hà Nội</div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <div className='footer-text'>CHĂM SÓC KHÁCH HÀNG</div>
          <div className='footer-text-blur'>Trung tâm trợ giúp</div>
          <div>Hướng dẫn mua hàng</div>
        </div>
        <div>
          <div className='footer-text'>Giới thiệu</div>
          <div className='footer-text-blur'>Điều khoản</div>
          <div>Chính sách bảo mật</div>
          <div>Tuyển dụng</div>
        </div>
        <div>
          <div className='footer-text'>DANH MỤC SẢN PHẨM</div>
          <div className='footer-text-blur'>Thời trang</div>
          <div>Đồ tiêu dùng</div>
          <div>Thiết bị điện tử</div>
          <div>Sách</div>
        </div>
        <div>
          <div className='footer-text'>THEO DÕI CHÚNG TÔI</div>
          <div className='footer-text-blur'><i className="fa-brands fa-facebook"></i> Facebook</div>
          <div><i className="fa-brands fa-instagram"></i> Instagram</div>
          <div><i className="fa-brands fa-twitter"></i> Twitter</div>
        </div>
        <div>
          <div className='footer-text'>ĐỘI NGŨ PHÁT TRIỂN</div>
          <div className='footer-author'>Nguyễn Thế Cường <br />Hải Phòng <br />0966109687</div>
        </div>
      </footer>
    </div>
  );
}
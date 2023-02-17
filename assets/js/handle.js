// <!-- Js modal logic -->
    // truy vấn lấy dữ liệu ở nút button
  const buyBtns = document.querySelectorAll('.js-buy-tickets')
    // truy vấn lấy dữ liệu hiện bảng modal để ấn nút button hiện ra
  const modal = document.querySelector('.js-modal')
    // truy vấn lấy dữ liệu icon dấu x 
  const modalClose = document.querySelector('.js-modal-close')
    // truy vấn lấy dữ liệu lấy thể layout bao gồm bảng để ngăn chặn nổi bọt 
  const modalContainer = document.querySelector('.js-modal-container')
    // truy vấn lấy dữ liệu nút button phụ trong bảng modal
  const subBtns = document.querySelector('.js-button')
   //Hàm hiện và add thêm class để hiện bảng modal
  function showBuyTickets() {
    // add thêm class open để js tự add thêm 
    modal.classList.add('open')
  }
  function hideBuyTickets() {
    modal.classList.remove('open')
  }
   // vòng lặp để lắng nghe sự kiện nút button
  for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets)
  }
   //lắng nghe sự kiện dấu x để tắt 
  modalClose.addEventListener('click',hideBuyTickets)
  //lắng nghe sự kiện để ấn vào khoảng trắng để tắt ko cần qua dấu x
  modal.addEventListener('click',hideBuyTickets)
  //lắng nghe sự kiện để ngăn hành vi nổi bọt để ấn vào ô input ko bị tắt
  modalContainer.addEventListener('click',function(e) {
        e.stopPropagation();
  })
  //lắng nghe sự nút button phụ để tắt bảng
  subBtns.addEventListener('click',hideBuyTickets)

/** Logic modal
 * B1 truy vấn dữ liệu cần lấy để lắng nghe sự kiện
 * B2 add lắng nghe sự kiện đó bằng hành vi gì(click) dùng hàm để thực hiền hành vi lắng nghe 
 * add class thêm thì phải css trước class đó rồi ms mới dùng js,js tự thêm cú pháp add classlist
**/

// Js moblie menu 

    // truy van du lieu header thanh navbar
  const header = document.getElementById("header");
    // truy van nut menumobile
  const menuMobile = document.getElementById('js-mobile-menu');
    // lay do dai hien tai san co o header
  const getHeight = header.clientHeight;
    // lang nghe su kien click o nut menubutton 
  menuMobile.onclick = function() {
        // neu co chieu cao = 46 thi dong tab va nguoc lai
      var isClosed = header.clientHeight === getHeight;
      if(isClosed) {
            header.style.height = 'auto';
      }else {
            header.style.height = null;
      }
  } 
    //Tu dong khi chon menu
    //  truy vấn lấy dữ liệu lay ra thong tin the a o menu
  const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    // dung vong for de lay ra tung the a
  for (var i = 0; i < menuItems.length; i++){
       var  menuItem = menuItems[i];
       // lang nghe su kien click o menu 
       menuItem.onclick = function (event) {
          // ktra thẻ anh em liền có phải class = subnav, nếu đúng thì click k bị đóng còn k ngược lại
          var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav")
            if(isParent){
              event.preventDefault();
            }else{
              header.style.height = null;  
            }
        }
  }
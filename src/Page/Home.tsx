import React from 'react'
import Header from '../Components/Header/Header'
import Sliders from '../Components/Slider/Sliders'
import './Home.scss'
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="body-page">
        <Sliders />
        <div className="history-club">
          <p className="title-name">TAEKWONDO là gì ?</p>
          <p>
            Trong tiếng Hàn Quốc, chữ "Tae" có nghĩa tiếng Việt là "đá bằng chân"; chữ "Kwon" có
            nghĩa là "đấm bằng tay" và chữ "Do" có nghĩa là "con đường" hay "nghệ thuật". Như vậy,
            Taekwondo có nghĩa là "cách thức hay nghệ thuật đấu võ bằng tay và chân". Môn võ thuật
            Taekwondo có lịch sử hơn 2000 năm, bắt đầu từ thời cổ đại của lịch sử Hàn Quốc (lịch sử
            Hàn Quốc ghi chép, có thể bắt đầu có từ thời kỳ Cao Câu Ly năm 37 trước Công nguyên). Sự
            phát triển và tiến bộ của Taekwondo gắn liền với sự phát triển của đất nước Hàn Quốc.
            Môn võ thuật Taekwondo đã chứng kiến và trải qua bao nhiêu thăng trầm cùng lịch sử Hàn
            Quốc. Theo thời gian, Taekwondo cũng giống như các môn võ thuật của các nước phương Đông
            khác, đều tiếp thu và chịu sự ảnh hưởng của các nền võ thuật từ các quốc gia lân cận như
            Nhật Bản, Trung Quốc.
          </p>
          <img
            className="img-history"
            src={
              'https://images.pexels.com/photos/7045620/pexels-photo-7045620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            alt=""
          />
          <p>
            Trong những năm 50 của thể kỷ XX, Taekwondo được biết đến rộng rãi nhờ một số võ sư Hàn
            Quốc tiên phong quyết định đến Hoa Kỳ truyền bá võ thuật. Những thập kỷ sau đó, võ thuật
            Taekwondo phát triển ngày càng mạnh mẽ và Taekwondo không chỉ là môn võ thuật đơn thuần,
            nó trở thành môn thể thao quốc tế.
          </p>
          <p>
            Võ thuật Taekwondo hiện đại phát triển mạnh mẽ được như ngày nay là nhờ công lớn của
            người được thừa nhận là cha đẻ của Taekwondo hiện đại - người sáng lập kiêm Chủ tịch của
            Liên đoàn Taekwondo quốc tế (ITF) - Thiếu tướng Choi Hong Hi. Nhờ sự nỗ lực và cống hiến
            hết mình của Ngài mà Taekwondo đã thành công, phát triển lớn mạnh như ngày hôm nay. Hiện
            nay, Liên đoàn Taekwondo quốc tế đã có 193 quốc gia thành viên thế giới, với khoảng
            50.000.000 người tập luyện. Và IOC đã công nhận Taekwondo là môn thể thao quốc tế tại
            đại hội lần thứ 83 năm 1980 và công nhận Taekwondo là môn thi đấu tại Thế vận hội 2000,
            2004, 2008, 2012, 2016.
          </p>
          <p>
            Võ thuật Taekwondo xuất hiện ở Việt Nam do được quân đội Nam Hàn truyền bá trong chiến
            tranh Việt Nam. Thời gian đầu, môn võ này được gọi là Võ Đại Hàn, sau đó được gọi là Túc
            Quyền Đạo, Thái Cực Đạo. Cho đến thời điểm hiện tại, Taekwondo là một trong những bộ môn
            võ thuật yêu thích của người Việt và thu hút được rất nhiều người tham gia tập luyện.
            Việt Nam cũng là nước có nhiều võ sĩ Taekwondo giỏi và giành được nhiều thứ hạng cao
            trong các cuộc thi đấu Quốc tế. Cụ thể, võ sĩ Trần Hiếu Ngân chính là vận động viên
            Taekwondo Việt Nam giành được huy chương bạc tại Olympic Sydney 2000 và là vận động viên
            Việt Nam đầu tiên giành huy chương tại đấu trường Olympic.
          </p>
        </div>
        <div className="taekwondo-rule">
          <p className="title-name">Trang phục và hệ thống đai trong Taekwondo</p>
          <p>
            Trang phục của môn võ Taekwondo hay còn được gọi là Dobok là đồng phục quần áo trắng và
            kèm theo 1 chiếc đai. Các học viên đều mặc đồng phục áo trắng giống nhau thể hiện mọi
            người đều bình đằng, dù bạn là ai, đến từ đâu, thuộc tôn giáo nào. Hơn nữa, đồng phục
            của Taekwondo giúp các học viên cảm thấy thoải mái và tập luyện dễ dàng hơn. Chiếc đai
            là đặc điểm duy nhất để phân biệt trên trang phục của học viên Taekwondo. Màu sắc đai
            lưng không phải chỉ để trang trí mà nó là một hệ thống xếp hạng của môn võ này. Mỗi màu
            sắc chiếc đai sẽ thể hiện mức độ kỹ năng Taekwondo của bạn. Khi lên một đai mới, tức là
            kỹ năng của bạn đang tiến bộ hơn. Đai trắng là cấp độ thấp nhất và đai màu đen sẽ là cấp
            độ cao nhất trong Taekwondo.
          </p>
          <img
            className="img-history"
            src={
              'https://images.pexels.com/photos/7045731/pexels-photo-7045731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            alt="anh"
          />
          <p>
            Thực tế, Taekwondo có 2 tổ chức lớn tồn tại riêng biệt đó là Liên đoàn Taekwondo quốc tế
            (ITF) và Liên đoàn Taekwondo thế giới (WTF). ITF là một hệ phái do cựu thiếu tướng Hàn
            Quốc, Choi Hong Hi sáng lập ngày 22 tháng 3 năm 1966. WTF là một tổ chức được Ủy ban
            Olympic Quốc tế (IOC) công nhận là Liên đoàn thể thao quản lý môn võ Taekwondo ở tầm
            quốc tế. Liên đoàn Taekwondo thế giới được thành lập trong hội nghị ngày 28 tháng 5 năm
            1973 tại Kukkiwon, Seoul, Hàn Quốc với 35 đại diện cho các quốc gia tham dự, sau khi
            Liên đoàn Taekwon-Do quốc tế rời khỏi Hàn Quốc. Hiện tại, WTF là tổ chức lớn mạnh nhất
            của Taekwondo và ITF đã bị tan rã ra thành nhiều phái nhỏ khi Tổ sư Choi Hong Hi qua đời
            vào năm 2002. Xét về thứ hạng cấp bậc đai trong 2 tổ chức ITF và WTF cũng gần giống
            nhau. Cụ thể: - Trường phái Taekwondo ITF có 19 bậc tiến gọi là 19 đẳng (dan) và cấp
            (geup hay kŭp). Khởi đầu, lúc chưa lên đai đen, môn sinh mang cấp 10, sau mỗi 3 tháng
            hoặc 6 tháng lại thi lên một cấp. Sau khi mang đai đen thì khoảng 2 năm lại thi lên đẳng
            một lần.
          </p>
          <img
            className="img-history"
            src={
              'https://www.thethaothientruong.vn/uploads/contents/cap-bac-dai-taekwondo-cua-itf.jpg'
            }
            alt="cap-dai"
            style={{ transform: 'scale(1)', width: '50%' }}
          />
        </div>
        <div className="div" style={{ height: '1000px' }}></div>
      </div>
    </div>
  )
}

export default Home

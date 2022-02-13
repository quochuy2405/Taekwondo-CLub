import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ImageShowFlex from '../Components/ImageShowFlex/ImageShowFlex'
import Sliders from '../Components/Slider/Sliders'
import SliderCustoms from '../Components/SliderCustoms/SliderCustoms'
import './Style/Introduce.scss'
function Introduce() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className="introduce">
      <Header />
      <div className="body-page">
        <Sliders />
        <ImageShowFlex />
        <div className="content-introduce" style={{ width: '80%', margin: '0 auto' }}>
          <p className="title-name">Lịch sử thành lập</p>
          <p>
            Chủ tịch Hồ Chí Minh từng nói: “Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt
            Nam. Sử ta dạy cho ta những chuyện vẻ vang của tổ tiên ta. Dân tộc ta là con Rồng cháu
            Tiên, có nhiều người tài giỏi đánh Bắc dẹp Nam, yên dân trị nước tiếng để muôn đời. Sử
            ta dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc
            lập, tự do. Trái lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn.” Vậy, các
            bạn đã biết được bao nhiêu sự kiện lịch sử? Bao nhiêu vị anh hung của lịch sử rồi nào?
            Và, bạn có yêu thích lịch sử hay không? Hôm nay, tụi mình xin ra mắt với mọi người 1
            CLUB mới, mang tên “CLUB Lịch sử”. Hi vọng mọi người sẽ ủng hộ…
          </p>
          <img
            className="img-intro"
            src={
              'https://images.pexels.com/photos/8038031/pexels-photo-8038031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            alt="history"
          />
          <p className="title-name">Thành tích đạt được</p>
          <ul>
            <li>
              03 lượt cá nhân được Bộ Giáo dục và Đào tạo công nhận là Chiến sĩ thi đua cấp Bộ.
            </li>
            <li> 24 lượt cá nhân được công nhận đạt danh hiệu Chiến sỹ thi đua cấp cơ sở.</li>
            <li>183 lượt cá nhân được công nhận đạt danh hiệu Lao động tiên tiến</li>
          </ul>
          <img
            className="img-intro"
            src={
              'https://images.pexels.com/photos/6827127/pexels-photo-6827127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1050&w=1040'
            }
            alt="medals"
          />
          <p className="title-name">Quá trình phát triển</p>
          <p>
            Cùng với quá trình xây dựng và trưởng thành của Ngành Xây dựng Việt Nam, Ngành Xây dựng
            Cao Bằng cũng được hình thành và có những bước phát triển vượt bậc, đóng góp tích cực
            vào sự nghiệp phát triển KT - XH địa phương. Ngày 29/4/1958 trên cơ sở quyết định của
            Nhà nước về việc tách Bộ Thủy lợi - Kiến trúc thành các Bộ Thủy lợi và Bộ kiến trúc, năm
            1958, Ty Thuỷ lợi - Kiến trúc được thành lập trực tiếp phụ trách công tác xây dựng, quy
            hoạch đô thị của tỉnh Cao Bằng. Tháng 1 năm 1960, Ty Kiến trúc Cao Bằng chính thức được
            thành lập, tiền thân của Sở Xây dựng ngày nay. Ngay sau khi được thành lập, ngành xây
            dựng Cao Bằng đã đảm nhận thiết kế, thi công các công trình của tỉnh như: Bệnh viện đa
            khoa tỉnh, doanh trại công an nhân dân vũ trang, Trụ sở Liên hiệp công đoàn tỉnh, Nhà
            trưng bày di tích lịch sử Hồ Chí Minh, UBND các huyện Bảo Lạc, Trùng Khánh, Hạ Lang...
            và nhiều công trình trọng điểm khác. Sau cuộc chiến tranh bảo vệ biên giới, ngành đã
            tiếp nhận và thi công hàng vạn mét vuông nhà tạm, khắc phục hậu quả chiến tranh khôi
            phục kinh tế. Trong thời kỳ đổi mới, ngành đã đã làm tốt chức năng tham mưu cho UBND
            tỉnh ban hành các văn bản quản lý xây dựng cơ bản, hoàn thành tập đơn giá xây dựng cơ
            bản, công tác quản lý Nhà đất được nâng cao, sâu sát. Quy hoạch tỉnh lỵ sau nhiều lần bổ
            sung, điều chỉnh đã chính thức phê duyệt làm cơ sở cho việc quản lý và phát triển đô
            thị. đặc biệt Công ty xây lắp nhận thầu Nhà trưng bày khu di tích lịch sử Pác Bó đã đảm
            bảo tiến độ thi công hoàn thành đúng thời hạn kịp thời phục vụ lễ kỷ niệm 100 năm ngày
            sinh Chủ Tịch Hồ Chí Minh vĩ đại. Tiếp theo đó xây mộ và khuôn viên Anh hùng Kim Đồng
            đạt chất lượng, mỹ thuật cao.
          </p>
          <img
            className="img-intro"
            src={
              'https://images.pexels.com/photos/7045585/pexels-photo-7045585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            alt=""
          />
          <p className="title-name">Mục tiêu hướng tới</p>
          <p>
            Xây dựng Công ty Cổ phần Cao Su Bà Rịa mạnh hơn, hiệu quả hơn trên cơ sở thực hiện tái
            cơ cấu, sử dụng hợp lý các nguồn lực; Nâng cao năng lực quản trị doanh nghiệp, liên kết
            cao hơn về tài chính, công nghệ và thị trường. Xây dựng đội ngũ lãnh đạo có bản lĩnh và
            chuyên nghiệp, đồng thời xây dựng đội ngũ quản lý, kinh doanh và chuyên gia giỏi. Thực
            hiện sắp xếp lại và thay đổi cơ cấu doanh nghiệp Nhà nước, tạo ra loại hình doanh nghiệp
            có nhiều chủ sở hữu, trong đó có đông đảo người lao động, để quản lý và sử dụng có hiệu
            quả vốn, tài sản của Nhà nước, tạo động lực mạnh mẽ và cơ chế quản lý năng động cho
            doanh nghiệp.
          </p>
          <img
            className="img-intro"
            src={
              'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            alt=""
          />
        </div>
      </div>{' '}
      <Footer />
    </div>
  )
}

export default Introduce

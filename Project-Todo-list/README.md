## This project practice about hook effect and how to fetch api with event.

# My first error and how to fix:

1. Khai báo state kiểu Array nhưng dữ liệu trả về lại là Object
   Lý do: Bạn khởi tạo state posts là một mảng rỗng useState([]), và ở giao diện dùng .map() để duyệt mảng. Tuy nhiên, API bạn gọi (/todos/1) chỉ trả về 1 object đơn lẻ ({ userId: 1, id: 1, title: "...", completed: false }).

Hậu quả: Sau khi setPosts(data), posts trở thành một Object. JavaScript sẽ báo lỗi runtime posts.length hoặc posts.map is not a function vì Object không có hàm .map() và không có đặc tính .length.

2. Hiển thị trực tiếp Boolean (post.completed) ra JSX
   Lý do: Khóa completed trả về giá trị kiểu Boolean (true hoặc false). Trong React, các giá trị Boolean sẽ bị bỏ qua và không hiển thị ra DOM.

Hậu quả: Thẻ <p>{post.completed}</p> sẽ để trống, không in ra dòng chữ nào.

Cách khắc phục
Để hiển thị danh sách (map qua các todo), bạn nên đổi API sang đường dẫn lấy danh sách nhiều todos (/todos) thay vì lấy 1 item (/todos/1), đồng thời chuyển đổi Boolean sang chuỗi để in ra màn hình.

# Điểm khác biệt cốt lõi giữa map và filter nằm ở mục đích sử dụng và kết quả trả về:

- map là dùng để BIẾN ĐỔI: Chuyển đổi mọi phần tử trong mảng thành một hình thức mới.

- filter là dùng để LỌC: Giữ lại một số phần tử và loại bỏ các phần tử còn lại dựa trên điều kiện.

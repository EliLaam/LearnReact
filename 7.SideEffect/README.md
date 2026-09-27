## Use Effect trong React là một hook dùng để xử lý các "side effect" (tác động phụ) trong component, ví dụ như:

- Gọi API
- Cập nhật DOM
- setTimeout
- setInterval
- Lắng nghe hoặc hủy lắng nghe event,..

## Sau khi React render xong component.

useEffect = "React ơi, sau khi render xong, hãy giúp tôi làm cái này nhé".

- Đối với fetch API:
  Nó sẽ chạy từ trên xuống sau khi render, gặp hàm Effect React sẽ chạy tiếp tục và khi nào fetch api xong thì nó sẽ đưa ra kết quả.

## Cách dùng cơ bản

import {useEffect} from "react"
_useEffect(callback, [deps])_

useEffect(()=>{
// code xử lý side effect ở đây
}, [dependency]);

1. Nếu **không truyền** dependency, hàm callback sẽ chạy _sau mỗi lần render_
2. Nếu mảng dependency là **[]** (rỗng), hàm chỉ _chạy 1 lần sau khi component mount_
3. Truyền **giá trị** => Chạy lại mỗi khi _giá trị_ trong mảng dependency _thay đổi_

## 1. Phương thức `map()` — Render & Cập nhật

Dùng để **biến đổi** từng phần tử trong mảng thành một hình thức mới. Trong React, `map` dùng để chuyển dữ liệu thành JSX hoặc tạo mảng mới đã cập nhật trạng thái.

- **Tính chất:** Luôn trả về mảng mới có **cùng số lượng phần tử** với mảng ban đầu.
- **Các hàm / Cú pháp hữu dụng:**

### Render danh sách ra UI

```jsx
{
	items.map((item, index) => <li key={item.id}>{item.name}</li>);
}
```

### Cập nhật 1 phần tử theo thuộc tính (Toggle State)

```jsx
const updatedList = items.map((item, index) => {
	if (index === targetIndex) {
		return { ...item, isCompleted: !item.isCompleted }; // Sửa phần tử cần tìm
	}
	return item; // Giữ nguyên các phần tử khác
});
```

---

## 2. Phương thức `filter()` — Xóa & Lọc dữ liệu

Dùng để **sàng lọc** các phần tử trong mảng dựa trên một điều kiện (đúng/sai).

- **Tính chất:** Luôn trả về mảng mới có số lượng phần tử **bé hơn hoặc bằng** mảng ban đầu. Không làm thay đổi mảng gốc.
- **Các hàm / Cú pháp hữu dụng:**

### Xóa 1 phần tử khỏi danh sách

```jsx
// Chỉ giữ lại những phần tử CÓ index KHÁC với index cần xóa
const updatedList = items.filter((_, index) => index !== deleteIndex);
```

### Lọc danh sách theo điều kiện (Ví dụ: Chỉ lấy các task đã xong)

```jsx
const completedTasks = items.filter((task) => task.isCompleted === true);
```

---

## 3. Cú pháp Spread Operator (`...`) — Thêm & Sao chép (Immutability)

Trong React, **không được sửa trực tiếp mảng state gốc** (như `push()`, `splice()`). Spread operator dùng để sao chép mảng cũ và tạo ra một mảng hoàn toàn mới.

- **Tính chất:** Trải các phần tử của mảng cũ vào mảng mới.
- **Các hàm / Cú pháp hữu dụng:**

### Thêm phần tử mới vào đầu mảng

```jsx
setItems([newItem, ...items]);
```

### Thêm phần tử mới vào cuối mảng

```jsx
setItems([...items, newItem]);
```

### Sao chép và đè thuộc tính của Object (Dùng bên trong `map`)

```jsx
const updatedObject = { ...originalObject, completed: true };
```

---

## Bảng tóm tắt công dụng trong React

| Thao tác          | Cú pháp kết hợp                  | Mục đích                                                     |
| ----------------- | -------------------------------- | ------------------------------------------------------------ |
| **Thêm mới**      | `[newItem, ...items]`            | Dùng **Spread** tạo mảng mới chứa phần tử mới.               |
| **Render UI**     | `items.map(...)`                 | Dùng **Map** biến từng item thành `<li>` hoặc `<Component>`. |
| **Sửa 1 phần tử** | `items.map(...)` + `{ ...item }` | Dùng **Map** tìm item + **Spread** sửa thuộc tính.           |
| **Xóa 1 phần tử** | `items.filter(...)`              | Dùng **Filter** lọc bỏ item có id/index trùng khớp.          |

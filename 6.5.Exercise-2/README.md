Exercise 2 about condition rendering

# Logic Operator

**Toán tử AND: biểu_thức1 && biểu_thức2**
Nếu biểu_thức1 là falsy → trả về biểu_thức1 (không cần kiểm tra tiếp).
Nếu biểu_thức1 là truthy → trả về biểu_thức2.
**Giá trị truthy và falsy**
Falsy: false, 0, "" (chuỗi rỗng), null, undefined, NaN
Truthy: tất cả giá trị khác falsy (ví dụ: số khác 0, chuỗi không rỗng, object, array...)

# Ví dụ

console.log("Hello" && "World"); // "World" (vì "Hello" truthy)
console.log(0 && "World"); // 0 (vì 0 falsy)
console.log(null && "JS"); // null

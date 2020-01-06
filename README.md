# Reactjs doc from CodersX

## 1. Single page application
> React là tools giúp build single page application  
Facebook phát triển và maintain

## 2. Setup

## 3. React.createElement

## 4. JSX stands for JavaScript XML

## 5. Create React App

## 6. Component

## 7. Props
> Dùng để truyền giá trị từ ngoài vào

## 8. Render a list

## 9. React Develop Tools

## 10. Dynamic class names
> npm install --save classnames  
> Thư viện hỗ trợ thêm nhiều class và điều kiện thêm class cho component

## 11. Conditional rendering

## 12. State
> State là trạng thái nội tại bên trong 1 component  
> State dùng để lưu các giá trị nội tại của 1 component (1 biến thay đổi liên tục thì set nó là state)  
> Muốn thay đổi state thì phải dùng setState   
> Khi state thay đổi thì hảm render() sẽ được gọi 1 cách tự động  

## 13. Handling events
> Component chỉ render lại khi props hoặc state thay đổi

## 14. Immutability
> Khả năng không thay đổi được trạng thái bên trong của 1 object  
> mutate an object: thay đổi trạng thái bên trong của 1 object  
> a mutable object: 1 object có thể thay đổi trạng thái bên trong  
> Làm app có performance tốt
<pre><code>const a = [2, 1, 3];
a.sort(); // a = [1, 2, 3]; => a bị mutate
</code></pre>
<pre><code>ha = { name: 'Ha', age: 21 }
haChild = Object.assign({}, ha); // => Sẽ copy toàn bộ object ha vào object haChild
</code></pre>

> onKeyUp không được trigger liên tục mà nó có 1 hàm là debounce để ngăn trigger liên tục giảm performance

## 15. props.children

## 16. propTypes
> Công cụ validate props của component  
> Giúp dễ dàng xem component như là interface  
> npm install --save prop-types

## 17. React.createRef()
> Ref trong React: Cấu trúc data trong app, các element trong DOM sẽ phản ánh data trong app  
componentDidMount() sẽ được gọi sau khi DOM được tạo  
trong render() là virtual DOM

## 18. Component Lifecycles
> Vòng đời của component  
> mount: khi react chạy (DOM, virtual DOM) -> virtual DOM được tạo ra trước thông qua các DOM API (tính toán ra các DOM element cần thiết để hiển thị lên trình duyệt)  
unmount: khi component không dùng nữa chuyển trang thì là unmount  

- componentDidMount(): được gọi đầu tiên (và chỉ gọi 1 lần duy nhất/component) khi component được khởi tạo rồi gắn vào DOM
- componentDidUpdate(): được gọi ngay sau khi render() được gọi (props, state)  
- componentWillUnmount(): được gọi trước khi component unmount -> có thể dùng để remove các listener (tránh tình trạng leak memory)
- #shouldComponentUpdate(): hàm dùng để tối ưu performace của app
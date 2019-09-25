import {Container} from 'reactstrap';

const BasePage = (props) => {
    const {className} = props;
    // CÁCH 1
    // Lấy giá trị thuộc tính className được truyền vào cho
    // component, nếu giá trị thuộc tính không được truyền vào
    // thì đặt chuỗi rỗng cho className
    // className = props.className || '';
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {props.children}
            </Container>
        </div>
    );
}

// CÁCH 2: 
// Đặt giá trị mặc định cho thuộc tính className
BasePage.defaultProps = {
    className: ''
}

export default BasePage;
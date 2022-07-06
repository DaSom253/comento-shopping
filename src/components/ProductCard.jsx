const ProductCard = ({name, description, thumbnail}) => {
    return  (
        <div>
          <img width={"200"} src={thumbnail} alt={name}/>
          <div>{name}</div>
          <div>{description}</div>
        </div>
    );

}
//똑같은 디자인이라서 같은 컴포넌트 사용
//컴포넌트 안에 변수 전달을 통해 값 변환
export default ProductCard;
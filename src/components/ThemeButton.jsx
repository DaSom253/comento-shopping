import styled from "styled-components";

const ThemeButton = ({themeName}) => {
    return  <ThemeButtonStyled className="theme-name">{themeName}</ThemeButtonStyled>;
}

const ThemeButtonStyled = styled.div`
width: fit-content;
padding: 24px 16px;

background: rgba(0, 0, 0, 0.5);
border-radius: 10px;

font-weight: 700;
font-size: 20px;
line-height: 26px;
color: #FFFFFF;
`;
//똑같은 디자인이라서 같은 컴포넌트 사용
//컴포넌트 안에 변수 전달을 통해 값 변환
export default ThemeButton;
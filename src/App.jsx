import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "@src/store/theme";
import Header from "@cmp/Header";
import Content from "@cmp/Content";
import Footer from "@cmp/Footer";
import "./style.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100%;
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Content />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
//       <div className="wrapper">
//         <header className="header">
//           <div className="header__container">
//             <a className="header__icon-link link-icon" href="/">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path
//                   fill={setStr("rgba(255, 255, 255, 0.9)", isActive)}
//                   d="m20.45 17.39-8.09 4.58V18.4l5.04-2.77 3.05 1.76m.55-.5V7.31L18.04 9v6.18L21 16.89m-17.45.5 8.09 4.57V18.4L6.6 15.63l-3.05 1.76m-.55-.5V7.31L5.96 9v6.18L3 16.89m.35-10.2L11.64 2v3.45L6.33 8.37l-.05.02-2.93-1.7m17.3 0L12.36 2v3.45l5.31 2.93.04.02 2.94-1.71m-9.01 10.9-4.97-2.74V9.44l4.97 2.87v5.28m.72 0 4.97-2.73V9.44l-4.97 2.87v5.28M7 8.81l5-2.75 5 2.75-5 2.88-5-2.88Z"
//                 />
//               </svg>
//             </a>
//             <Nav />
//             <button type="button" className={`header__button ${setStr("header__button_white-bg", isActive)} button`}>
//               Скачать
//             </button>
//             <div className={`header__burger ${setStr("header__burger_active", isActive)}`}>
//               <Burger backgroundColor={"#fff"} />
//             </div>
//           </div>
//         </header>
//         <main className="main">
//           <About about />

//           {/* <section className="about">
//             <div className="about__container">
//               <h2 className="about__title main-title">Почему webpack</h2>

//               <div className="about__catalog">
//                 <div className="about__card">
//                   <div className="about__content block-content">
//                     <h3 className="about__subtitle block-content__subtitle block-content__subtitle_blue">alias</h3>
//                     <p className="about__text block-content__text">Короткое, удобное для запоминания имя, использующееся вместо более длинного и сложного имени</p>
//                   </div>
//                 </div>

//                 <div className="about__card">
//                   <div className="about__content block-content">
//                     <h3 className="about__subtitle block-content__subtitle block-content__subtitle_blue">plugins</h3>
//                     <p className="about__text block-content__text">Независимо компилируемый программный модуль.</p>
//                     <p className="about__text block-content__text">
//                       Динамически подключаемый к основной программе и предназначенный для расширения и/или использования её возможностей.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="about__card">
//                   <div className="about__content block-content">
//                     <h3 className="about__subtitle block-content__subtitle block-content__subtitle_blue">loader</h3>
//                     <p className="about__text block-content__text">Гибкая концепция, которая позволяет нам импортировать.</p>
//                     <p className="about__text block-content__text">
//                       Мы можем импортировать в js модули css файлы и ts файлы и вебпак сможет их обрабатывать. Есть еще два способа указывать лоадер
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>  */}
//         </main>
//         <footer className="footer">
//           <div className="footer__container">
//             <span className="footer__copy copy">В разработке с 2022 &#169;</span>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

export default App;

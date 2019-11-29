import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/customScroll.css';
import '../styles/AboutPage.css';

const AboutPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="about-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -150]} duration={500} delay={800}>
            <p className="page-tag">About Me</p>
          </Anime>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <p>Привет! <span className="hand-wave">👋</span></p>
              <h1>Я Гапур Евлоев.</h1>
              {/* <p>But that's quite long! So, I like to use <strong>Gapur.</strong> With an extra optional 'a' :)</p> */}
              <p>Я 27-летний разработчик из России. Специализируюсь на JavaScript и мое основоное направление - Front-end разработка. Я люблю создавать инструменыт/сайты/приложения, которые решают реальные задачи и облечают кому-то жизнь. Я люблю минимализм и эффективность, но не в ущерб красоте.</p>
              <div className="skills">
                <h3>Скилы</h3>
                <ul>
                  <li><strong>HTML</strong></li>
                  <li><strong>CSS</strong></li>
                  <li><strong>JavaScript</strong></li>
                  <li><strong>JQuery</strong></li>
                  <li><strong>SASS/SCSS/Stylus</strong></li>
                  <li><strong>Jade/Pug</strong></li>
                  <li><strong>Bootstrap 3/4</strong></li>
                  <li>Worpress</li>
                  <li>Photoshop/Figma/Avocode/Illustrator</li>
                  <li>Gulp/Webpack</li>
                  <li>BEM</li>
                  <li>SVG/CSS-animation</li>
                  <li>Git/GitHub/Bitbucket/Gitlab</li>
                  <li>Jira/Trello</li>
                </ul>
                <p>Находясь в отрасли, которая развивается и меняется с огромной скоростью, не имеет значения, с какими фреймворками/инструментами я знаком, потому что они могут устареть в течение нескольких месяцев. Главное, насколько быстро я могу учиться и чувствовать себя комфортно с новыми технологиями, а я считаю, что я быстро учусь.</p>
              </div>
            </div>
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default AboutPage;
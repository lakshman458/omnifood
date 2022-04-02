import React from "react";
import post from "../images/post-img.jpg";
import laura from "../images/laura-jones.jpg";
import Related1 from "../images/related-1.jpg";
import Related2 from "../images/related-2.jpg";
import Related3 from "../images/related-3.jpg";
// import "../index.css"

export default function Index() {
    return (
        <div className="container">
            {/* <section className="section-hero">
                <div className="hero">
                    <div className="hero-text-box">
                        <h1 className="primary-heading">
                            A healthy meal delivered to your door,every single
                            day
                        </h1>
                        <p className="hero-description">
                            The flavor of your food is what most customers focus
                            on when they are deciding what to eat. The way you
                            engineer your menu can help build anticipation, and
                            a good menu description could even convince a
                        </p>
                        <a href="#">starting eating well</a>
                        <a href="#">learn more &darr;</a>
                    </div>
                    <div className="hero-img-box">
                <img src={pic} className="hero-img" alt="no img" />
            </div>
                </div>
            </section>
            */}
            <header className="main-header">
                <h1 >📘 The Code Magazine</h1>
                <nav>
                    <a href="#">Blog</a>
                    <a href="#">Challengers</a>
                    <a href="#">FlexBox</a>
                    <a href="#">CSS Grid</a>
                </nav>
            </header>
<article>
    <header className="post-header">
            <h2>The Basic Language of the web:HTML </h2>

            <img src={laura} height="50" width="50" />
            <p>
                Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027
            </p>

            <img src={post} height="200" width="500" />
            </header>
            
            <p>
                All modern websites and web applications are built using three{" "}
                <em>fundamental</em> technologies: HTML, CSS and JavaScript.
                These are the languages of the web.
            </p>
            <p>
                In this post, let's focus on HTML. We will learn what HTML is
                all about, and why you too should learn it.
            </p>
            <h3>What is html?</h3>
            <p>
                HTML stands for <strong>H</strong>yper <strong>T</strong>ext{" "}
                <strong>M</strong>arkup <strong>L</strong>anguage. It's a
                markup language that web developers use to structure and
                describe the content of a webpage (not a programming language).
            </p>
            <p>
                HTML consists of elements that describe different types of
                content: paragraphs, links, headings, images, video, etc. Web
                browsers understand HTML and render HTML code as websites.
            </p>

            <p>In HTML, each element is made up of 3 parts:</p>

            <ol>
                <li>The opening tag</li>
                <li>The closing tag</li>
                <li>The actual element</li>
            </ol>
            <p>
                we can learn more at the{" "}
                <a href="https://www.w3schools.com/html/" target="_blank">
                    MDN web docs
                </a>
            </p>

            <h3>Why should you learn HTML</h3>

            <p>
                There are countless reasons for learning the fundamental
                language of the web. Here are 5 of them:
            </p>
            <ul>
                <li>To be able to use the fundamental web dev language</li>
                <li>
                    To hand-craft beautiful websites instead of relying on tools
                    like Worpress or Wix
                </li>
                <li>To build web applications</li>
                <li>To impress friends</li>
                <li>To have fun 😃</li>
            </ul>
            <p>Hopefully you learned something new here. See you next time!</p>
            </article>

            <footer>
               
                <aside>
                <h4>Related post</h4>
                    <ul>
                        <li>
                            <img src={Related1} width={75} height={75}/>
                            <a href="#">How to learn webdevelopmenmt</a>
                            <p className="related-author">By jonash schmadanm</p>
                        </li>
                        <li>
                            <img src={Related2} width={75} height={75}/>
                            <a href="#">The unknown powers of css</a>
                            <p className="related-author">By Jim dillion</p>
                        </li>
                        <li>
                            <img src={Related3} width={75} height={75}/>
                            <a href="#">Why javascript is awesomr</a>
                            <p className="related-author">By miltda</p>
                        </li>
                    </ul>
                </aside>
               <p className="footer_content"> copyright &copy: 2017 by code magazine</p>
            </footer>
        </div>
    );
}

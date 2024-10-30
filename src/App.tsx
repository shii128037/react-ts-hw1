import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app">
      <div id="head">
        <h1>歡迎來到鍾珺如的自我介紹</h1>
        <p>---------------------------------------------------------------</p>
      </div>
      <h2>鍾珺如</h2>
      <h3>資管三C</h3>

      <p>MBTI:INFJ</p>
      <a href="https://www.16personalities.com/tw/infj-%E6%80%A7%E6%A0%BC">前往介紹INFJ的網站</a>
      <div>
        <img src="infj.png" alt="INFJ" height="200"/>
      </div>

      <p></p>

      <div className="container">
        <div className="left">
          <ul>
            <p>喜歡的運動</p>
            <li>游泳</li>
            <li>羽球</li>
          </ul>
        </div>
        <div className="right">
          <ol>
            <p>愛吃的食物</p>
            <li>豆花</li>
            <li>泰式打拋豬飯</li>
          </ol>
        </div>
      </div>


      <div>
        <p>愛打遊戲</p>
      </div>
      <span>喜歡泡茶</span>
      <form action="/submit" method="post">
          <label htmlFor="name">姓名:</label>
          <input type="text" id="name" name="name"/>
          <input type="submit" value="提交"/>
      </form>
          <table>
            <tr>
              <th>名稱</th>
              <th>年齡</th>
            </tr>
            <tr>
              <td>珺如</td>
              <td>20</td>
            </tr>
          </table>
          <strong>南部人</strong>
          <em>但個性相對於內向</em>
          <a href="index.html" target="_blank">回首頁</a>


        </div>
      
      )
}

      export default App

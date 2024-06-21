// import React, { useState, useEffect } from "react"
import iconTel from "../../image/iconTel.png"
import iconEmail from "../../image/iconEmail.png"
import iconHour from "../../image/iconHour.png"
// import logotip from "../../../public/Data/History/historyOfDetai.png"
import './Footer.scss'

export function Footer() {

    return (
        <div className="footer__container">
            <footer className="footer__footer">
                <div className="footer__footer__column">
                    <div className="footer__footer__column__flower">

                        <svg width="60" height="58" viewBox="0 0 69 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.2616 32.2031L9.01711e-05 33.9859C3.84894 31.4398 7.99898 29.8393 8.58632 27.1852C9.17366 24.531 3.67125 17.3966 3.67125 17.3966L31.2616 32.2031Z" fill="#B9B9B9" />
                            <path d="M37.1678 34.0622L64.7582 48.8688C62.343 44.9364 59.2558 41.7343 59.8431 39.0802C60.4305 36.4261 68.4293 32.2794 68.4293 32.2794L37.1678 34.0622Z" fill="#B9B9B9" />
                            <path d="M31.4351 34.1365L6.93085 53.6301C8.60531 49.3298 11.0714 45.6281 10.0197 43.1214C8.96807 40.6148 0.357462 37.9625 0.357462 37.9625L31.4351 34.1365Z" fill="#B9B9B9" />
                            <path d="M36.9942 32.129L68.0719 28.303C63.8304 26.4847 59.4613 25.6507 58.4096 23.1441C57.3579 20.6374 61.4985 12.6354 61.4985 12.6354L36.9942 32.129Z" fill="#B9B9B9" />
                            <path d="M32.6248 35.5717L23.1065 65.4023C22.1057 60.8973 22.0957 56.4493 19.8273 54.9514C17.559 53.4535 8.92826 56.0396 8.92826 56.0396L32.6248 35.5717Z" fill="#B9B9B9" />
                            <path d="M35.8045 30.6935L59.501 10.2256C54.9649 11.0743 50.8703 12.8118 48.6019 11.3138C46.3336 9.81592 45.3227 0.862973 45.3227 0.862973L35.8045 30.6935Z" fill="#B9B9B9" />
                            <path d="M34.4011 36.1028L42.9856 66.2153C39.6585 63.0174 37.1881 59.3185 34.4698 59.3265C31.7515 59.3346 25.995 66.2656 25.995 66.2656L34.4011 36.1028Z" fill="#B9B9B9" />
                            <path d="M34.0283 30.1628L42.4343 -2.67244e-05C39.1262 3.21756 36.6778 6.93102 33.9595 6.93907C31.2412 6.94712 25.4437 0.0502855 25.4437 0.0502855L34.0283 30.1628Z" fill="#B9B9B9" />
                            <path d="M36.4075 35.39L61.962 53.4851C57.3653 53.0764 53.1226 51.7406 51.0088 53.4497C48.8949 55.1587 48.7495 64.1674 48.7495 64.1674L36.4075 35.39Z" fill="#B9B9B9" />
                            <path d="M32.0218 30.8754L19.6799 2.09802C19.1167 6.67835 19.5344 11.1067 17.4205 12.8157C15.3067 14.5248 6.46734 12.7804 6.46734 12.7804L32.0218 30.8754Z" fill="#B9B9B9" />
                        </svg>
                    </div>
                </div>
                <div className="footer__footer__column">
                    <div className="footer__footer__column__text">info@aleksandriya-museum.by</div>
                    <div className="footer__footer__column__text">Copyright 2024; Designed by Belarusian Russian university</div>
                </div>
                <div className="footer__footer__column">
                    <div className="footer__footer__column__text">+375 (222) 77-88-99</div>
                    <div className="footer__footer__column__text">Пн-Пт с 09:00 до 17:00, Сб-Вс с 10:00 до 15:00</div>
                </div>
            </footer>
        </div>
    )
}

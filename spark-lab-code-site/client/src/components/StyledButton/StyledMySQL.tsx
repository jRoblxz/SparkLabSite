import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [{ name: "CSS", level: 4 }];

const Button = () => {
  return (
    <StyledPHP>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="button-container">
          <button className="brutalist-button openai button-1">
            <div className="openai-logo">
              <svg className="openai-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#00618A" d="M125.477 122.783l-2.616-2.537c-2.479-3.292-5.668-6.184-9.015-8.585-2.669-1.916-8.661-4.504-9.775-7.609l-.205-.195c1.893-.214 4.103-.898 5.85-1.367 2.934-.786 5.356-.583 8.386-1.365 1.366-.39 2.899-.781 3.899-1.171v-.78c-1-1.571-2.427-3.651-4.097-5.073-4.369-3.72-9.041-7.437-13.951-10.537-2.723-1.718-6.041-2.835-8.926-4.292-.971-.491-2.652-.746-3.294-1.562-1.517-1.932-2.328-4.382-3.498-6.633-2.449-4.717-4.849-9.868-7.019-14.831-1.48-3.384-2.443-6.72-4.289-9.756-8.86-14.567-18.395-23.358-33.167-32-3.145-1.838-6.929-2.563-10.929-3.513-2.144-.129-4.291-.26-6.437-.391-1.311-.546-2.674-2.149-3.902-2.927-4.896-3.092-17.449-9.817-21.074-.975-2.289 5.581 3.42 11.025 5.462 13.854 1.435 1.982 3.27 4.207 4.293 6.438.675 1.467.79 2.938 1.367 4.489 1.418 3.822 2.651 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.95 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.898 21.567 2.537 28.683 1.36 2.186 4.566 6.871 8.975 5.073 3.856-1.57 3.226-6.438 4.329-10.732.249-.972-.185-1.688.815-2.341v.195c1 2.341 2.11 4.683 3.282 7.024 2.6 4.187 6.889 8.562 10.798 11.514 2.027 1.531 3.92 4.177 5.92 5.073v-.101h.221c-.507-1-1.302-1.167-1.95-1.804-1.527-1.496-3.226-3.382-4.487-5.097-3.556-4.827-6.698-10.122-9.561-15.622-1.368-2.626-2.557-5.529-3.709-8.201-.443-1.03-.438-2.592-1.364-3.125-1.263 1.958-3.122 3.54-4.099 5.853-1.561 3.696-1.762 8.204-2.341 12.877-.343.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.555-6.07-3.029-15.843-.781-22.829.582-1.809 3.211-7.501 2.146-9.172-.508-1.665-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.123-5.464-2.091-4.731-3.066-10.044-5.268-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.684-6.635-.445-.968-1.051-2.518-.39-3.513.21-.671.507-.951 1.171-1.17 1.133-.873 4.283.29 5.463.779 3.129 1.3 5.741 2.5 8.392 4.256 1.271.844 2.559 1.89 4.097 2.89h1.756c2.747 0 5.824.232 8.391 1.012 4.535 1.379 8.6 3.542 12.292 5.873 11.246 7.102 20.441 17.22 26.732 29.278 1.012 1.942 1.45 3.799 2.341 5.858 1.798 4.153 4.064 8.428 5.853 12.489 1.786 4.053 3.526 8.142 6.05 11.514 1.327 1.772 6.451 2.724 8.78 3.709 1.633.689 4.308 1.409 5.854 2.34 2.953 1.782 5.814 3.904 8.586 5.855 1.384.974 5.64 3.114 5.853 4.878-6.863-.188-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.069 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.576 2.751 5.464 3.902 3.359 2.047 7.107 3.217 10.341 5.268 1.906 1.21 3.958 2.733 5.815 4.097.92.675.891 1.724 2.891 2.147v-.194c-.999-.795-.946-1.893-1.522-2.728zM29.514 23.465c-1.431-.027-2.514.157-3.514.389v.146h.198c.683 1 1.888 2.33 2.731 3.538l1.952 4.108.193-.187c1.209-.853 1.763-2.211 1.756-4.291-.483-.509-.556-1.146-.974-1.754-.558-.809-1.639-1.268-2.342-1.949z"/></svg>
            </div>
            <div className="button-text">
              <span> </span>
              <span>MySQL</span>
            </div>
            {skills.map((skill, index) => (
              <div className="w-3/4 h-2 bg-slate-700 rounded-full mt-2">
                <motion.div
                  className="h-full bg-[#044B6E] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            ))}
          </button>
        </div>
      </motion.div>
    </StyledPHP>
  );
};

const StyledPHP = styled.div`
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  /* Common styles for both buttons */
  .brutalist-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1600px;
    height: 150px;
    color: #044B6E;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Styles for the first button */
  .button-1 {
    background-color: #0899E0; /*F1662A*/
    border: 3px solid #044B6E;
    border-radius: 12px;
    box-shadow: 4px 4px 1px #000000;
  }

  .button-1:hover {
    background-color: #0899E0;
    border-color: #044B6E;
    transform: translate(-6px, -6px) rotate(1deg);
    box-shadow:
      10px 10px 0 #000000,
      15px 15px 20px rgba(64, 164, 122, 0.2);
  }

  .button-1::before,
  .button-1::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: 0.6s;
  }

  .button-1::before {
    left: -100%;
  }
  .button-1::after {
    left: 100%;
  }

  .button-1:hover::before {
    animation: swipeRight 1.5s infinite;
  }
  .button-1:hover::after {
    animation: swipeLeft 1.5s infinite;
  }

  @keyframes swipeRight {
    100% {
      transform: translateX(200%) skew(-45deg);
    }
  }

  @keyframes swipeLeft {
    100% {
      transform: translateX(-200%) skew(-45deg);
    }
  }

  /* Hover effects */
  .brutalist-button:hover .openai-logo {
    transform: translateY(-10px);
  }

  .brutalist-button:hover .openai-icon {
    width: 40px;
    height: 40px;
  }

  .bruta.brutalist-button:hover .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
  }

  /* Styles for the OpenAI logo and text */
  .openai-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  .openai-icon {
    width: 64px;
    height: 64px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .openai-text {
    font-size: 24px;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  .button-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
    text-align: center;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  .button-text span:first-child {
    font-size: 12px;
    font-weight: normal;
  }

  .button-text span:last-child {
    font-size: 16px;
  }

  /* Hover effects */
  .brutalist-button:hover .openai-logo {
    transform: translateY(-10px);
  }

  .brutalist-button:hover .openai-icon {
    width: 40px;
    height: 40px;
  }

  .brutalist-button:hover .button-text,
  .brutalist-button:hover .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
  }

  /* Animation for the OpenAI logo */
  @keyframes spin-and-zoom {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.1);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }

  .brutalist-button:hover .openai-icon {
    animation: spin-and-zoom 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  .brutalist-button:hover .openai-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .brutalist-button:active .openai-icon,
  .brutalist-button:active .openai-text,
  .brutalist-button:active .button-text {
    transform: scale(0.95);
  }
`;

export default Button;

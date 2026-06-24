"use client";

import Image from "next/image";
import Link from "next/link";
import heroBg from "./images/dtx-hero.webp";
import home2 from "./images/home2.webp";
import home3 from "./images/Home3.webp";
import HowItWorksSection from "@/components/Works";
import FinalCtaSection from "@/components/Cta";
import FaqSection from "@/components/Faq";

const Gold = "#C79A3A";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" fill="none">
      <circle cx="12" cy="12" r="9.2" stroke={Gold} strokeWidth="2" />
      <path
        d="M7.8 12.1l2.7 2.7 5.8-6"
        stroke={Gold}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="flex-shrink-0 sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]">
      <path d="M25 0C21.717 0 18.4661 0.646644 15.4329 1.90301C12.3998 3.15938 9.6438 5.00087 7.32233 7.32233C2.63392 12.0107 0 18.3696 0 25C0 31.6304 2.63392 37.9893 7.32233 42.6777C9.6438 44.9991 12.3998 46.8406 15.4329 48.097C18.4661 49.3534 21.717 50 25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25C50 22.1 49.475 19.225 48.475 16.525L44.475 20.525C44.825 22 45 23.5 45 25C45 30.3043 42.8929 35.3914 39.1421 39.1421C35.3914 42.8929 30.3043 45 25 45C19.6957 45 14.6086 42.8929 10.8579 39.1421C7.10714 35.3914 5 30.3043 5 25C5 19.6957 7.10714 14.6086 10.8579 10.8579C14.6086 7.10714 19.6957 5 25 5C26.5 5 28 5.175 29.475 5.525L33.5 1.5C30.775 0.525 27.9 0 25 0ZM42.5 0L32.5 10V13.75L26.125 20.125C25.75 20 25.375 20 25 20C23.6739 20 22.4021 20.5268 21.4645 21.4645C20.5268 22.4021 20 23.6739 20 25C20 26.3261 20.5268 27.5979 21.4645 28.5355C22.4021 29.4732 23.6739 30 25 30C26.3261 30 27.5979 29.4732 28.5355 28.5355C29.4732 27.5979 30 26.3261 30 25C30 24.625 30 24.25 29.875 23.875L36.25 17.5H40L50 7.5H42.5V0ZM25 10C21.0218 10 17.2064 11.5804 14.3934 14.3934C11.5804 17.2064 10 21.0218 10 25C10 28.9782 11.5804 32.7936 14.3934 35.6066C17.2064 38.4197 21.0218 40 25 40C28.9782 40 32.7936 38.4197 35.6066 35.6066C38.4197 32.7936 40 28.9782 40 25H35C35 27.6522 33.9464 30.1957 32.0711 32.0711C30.1957 33.9464 27.6522 35 25 35C22.3478 35 19.8043 33.9464 17.9289 32.0711C16.0536 30.1957 15 27.6522 15 25C15 22.3478 16.0536 19.8043 17.9289 17.9289C19.8043 16.0536 22.3478 15 25 15V10Z" fill="#C79A3A"/>
    </svg>
  );
}

function GrowthChartIcon() {
  return (
    <svg width="45" height="45" viewBox="0 0 55 55" fill="none" className="flex-shrink-0 sm:w-[50px] sm:h-[50px] lg:w-[55px] lg:h-[55px]">
      <path d="M51.7031 0L34.4297 6.48633L40.6289 10.3945C29.5547 24.3398 13.5352 32.9297 0 36.1992L3.83438 43.1836C19.043 38.2266 35.1445 29.2852 45.5156 13.4883L50.2383 16.4648L51.7031 0ZM52.6055 13.6758L52.043 20.0977L46.0313 16.3008C45.8203 16.6172 45.5977 16.9219 45.375 17.2383V54.6914H54.5156V13.6758H52.6055ZM34.957 28.6758C33.4688 29.9648 31.9336 31.1836 30.375 32.332V54.6914H39.5156V28.6758H34.957ZM20.4609 38.5195C18.7734 39.4102 17.0859 40.2305 15.375 41.0039V54.6914H24.5156V38.5195H20.4609ZM0.375 43.6758V54.6914H9.51562V43.6758H8.85C7.11328 44.3203 5.37773 44.918 3.65273 45.4688L2.82539 45.7266L1.70039 43.6758H0.375Z" fill="#C79A3A"/>
    </svg>
  );
}

function AlwaysOnIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="flex-shrink-0 sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]">
      <path d="M27.5 0.125V5.175C37.375 6.4 45 14.8 45 25C45 33.025 40.2 40 33.2 43.2L27.5 37.5V50H40L36.95 46.95C44.775 42.675 50 34.4 50 25C50 12.05 40.125 1.375 27.5 0.125ZM22.5 0C17.625 0.5 13 2.4 9.2 5.525L12.75 9.075C15.588 6.88796 18.9497 5.48295 22.5 5V0ZM5.5 9.2C2.4 13 0.5 17.625 0 22.5H5C5.475 18.95 6.875 15.575 9.075 12.75L5.5 9.2ZM10 15V20H17.5V22.5H15C12.25 22.5 10 24.75 10 27.5V35H22.5V30H15V27.5H17.5C20.275 27.5 22.5 25.275 22.5 22.5V20C22.5 18.6739 21.9732 17.4021 21.0355 16.4645C20.0979 15.5268 18.8261 15 17.5 15H10ZM25 15V27.5H32.5V35H37.5V27.5H40V22.5H37.5V15H32.5V22.5H30V15H25ZM0 27.5C0.5 32.375 2.425 37 5.55 40.8L9.1 37.25C6.90401 34.4146 5.49029 31.0527 5 27.5H0ZM12.775 40.925L9.2 44.475C12.9984 47.5763 17.6221 49.4971 22.5 50V45C18.9541 44.5289 15.5975 43.1225 12.775 40.925Z" fill="#C79A3A"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="40" height="45" viewBox="0 0 45 55" fill="none" className="flex-shrink-0 sm:w-[42px] sm:h-[48px] lg:w-[45px] lg:h-[55px]">
      <path d="M22.5 0L0 10V25C0 38.875 9.6 51.85 22.5 55C35.4 51.85 45 38.875 45 25V10L22.5 0ZM40 25C40 36.3 32.55 46.725 22.5 49.825C12.45 46.725 5 36.3 5 25V13.25L22.5 5.475L40 13.25V25ZM11.025 26.475L7.5 30L17.5 40L37.5 20L33.975 16.45L17.5 32.925L11.025 26.475Z" fill="#C79A3A"/>
    </svg>
  );
}

function RedXIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]">
      <path d="M4 4L14 14M14 4L4 14" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function GoldCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]">
      <path d="M3 9L7 13L15 4" stroke="#C79A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ===== BRAND LOGOS =====
function SonyLogo() {
  return (
    <svg width="80" height="14" viewBox="0 0 100 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-16 sm:w-20 lg:w-[80px]">
      <path d="M35.625 0C39.4625 0 42.5333 0.958336 44.8792 3.09167C46.4833 4.54584 47.3792 6.61667 47.3542 8.7875C47.3502 9.85893 47.1288 10.9184 46.7034 11.9018C46.278 12.8851 45.6574 13.7719 44.8792 14.5083C42.6833 16.525 39.2625 17.6 35.6292 17.6C31.9958 17.6 28.6292 16.525 26.4 14.5083C25.5946 13.7914 24.9532 12.9093 24.5196 11.922C24.086 10.9348 23.8704 9.86563 23.8875 8.7875C23.8875 6.62917 24.7958 4.55834 26.4 3.09167C28.4833 1.2 32.1667 0 35.625 0ZM35.6375 15.2917C37.5583 15.2917 39.3375 14.6208 40.5875 13.3833C41.8375 12.1333 42.3917 10.6333 42.3917 8.7875C42.3917 7.02083 41.775 5.36667 40.5875 4.19167C39.3625 2.98334 37.5333 2.3 35.6375 2.3C33.7417 2.3 31.9167 2.97917 30.6792 4.19167C29.4917 5.36667 28.8708 7.02083 28.8708 8.7875C28.8455 10.4977 29.4952 12.149 30.6792 13.3833C31.9167 14.6083 33.7333 15.2917 35.6375 15.2917ZM15.4667 7.09167C16.1333 7.26111 16.7806 7.4875 17.4083 7.77084C17.9902 8.03996 18.5238 8.40316 18.9875 8.84583C19.8083 9.70417 20.275 10.8542 20.2625 12.0417C20.2714 12.6679 20.1332 13.2875 19.8589 13.8505C19.5846 14.4136 19.182 14.9044 18.6833 15.2833C17.7995 15.9506 16.797 16.4441 15.7292 16.7375C14.1207 17.2441 12.4401 17.4834 10.7542 17.4458C9.2875 17.4458 8.47917 17.275 7.36667 17.0417L7.04583 16.975C5.81979 16.7044 4.62261 16.3165 3.47083 15.8167C3.41933 15.7818 3.35801 15.7642 3.29583 15.7667C3.20446 15.7688 3.11756 15.8067 3.05372 15.8721C2.98987 15.9375 2.95414 16.0253 2.95417 16.1167V16.9625H0.504167V10.8042H2.6875C2.70194 11.4283 2.90053 12.0342 3.25833 12.5458C4.14167 13.6292 5.09167 14.0458 5.99583 14.3792C7.525 14.8792 9.12917 15.1458 10.7292 15.1958C13.0333 15.1958 14.3792 14.6375 14.6708 14.5167L14.7083 14.5L14.7333 14.4917C14.9917 14.3958 16.0333 14.0167 16.0333 12.8583C16.0333 11.7167 15.0583 11.4667 14.4208 11.3042L14.3292 11.2833C13.6208 11.0917 11.9875 10.9167 10.2042 10.7292L9.57083 10.6625C7.8986 10.4914 6.23455 10.2481 4.58333 9.93334C2.50833 9.475 1.69167 8.71667 1.18333 8.24583L1.15 8.2125C0.408971 7.42237 -0.00237921 6.37909 7.33067e-07 5.29584C7.33067e-07 3.22917 1.41667 1.97917 3.15833 1.2125C5.05305 0.403628 7.09407 -0.00627696 9.15417 0.0083367C12.5708 0.0208367 15.35 1.13334 16.35 1.65C16.7542 1.86667 16.9542 1.6 16.9542 1.4V0.779168H19.15V6.14583H17.1833C17.0085 5.34877 16.5784 4.6305 15.9583 4.1C15.581 3.79724 15.1648 3.5464 14.7208 3.35417C13.0728 2.65646 11.2978 2.30884 9.50833 2.33333C7.6625 2.33333 5.89583 2.6875 5.00833 3.22917C4.45556 3.57361 4.17778 3.99861 4.175 4.50417C4.175 5.225 4.78333 5.5125 5.09167 5.6C5.90833 5.85 7.725 6.02917 9.1375 6.17084L9.9875 6.25834C11.35 6.39584 14.2042 6.775 15.4667 7.09167ZM91.1625 2.9375V0.94167H100V2.9H98.0167C97.3 2.9 97.0083 3.0375 96.4667 3.64583L90.5208 10.4375C90.4589 10.5214 90.4306 10.6255 90.4417 10.7292V13.8208C90.4509 13.9647 90.4676 14.1079 90.4917 14.25C90.5271 14.3406 90.5833 14.4217 90.6556 14.4868C90.7279 14.5519 90.8145 14.5992 90.9083 14.625C91.0878 14.6507 91.2687 14.6646 91.45 14.6667H93.475V16.625H82.75V14.6667H84.6667C84.8479 14.6646 85.0289 14.6507 85.2083 14.625C85.3039 14.5986 85.3924 14.5513 85.4673 14.4864C85.5423 14.4216 85.6019 14.3408 85.6417 14.25C85.6611 14.1118 85.6736 13.9728 85.6792 13.8333V10.7417C85.6792 10.6375 85.6792 10.6375 85.5417 10.475L79.6625 3.8C79.3458 3.47084 78.8042 2.94167 77.9708 2.94167H76.0625V0.983334H86.8458V2.94167H85.5458C85.2542 2.94167 85.0542 3.23333 85.3042 3.55L88.9667 7.92917C89.0042 7.97917 89.0292 7.97917 89.0792 7.94167C89.1292 7.90417 92.8042 3.5875 92.8292 3.55C92.86 3.51036 92.8826 3.46492 92.8955 3.41638C92.9085 3.36785 92.9116 3.3172 92.9046 3.26745C92.8976 3.21771 92.8807 3.16988 92.8548 3.1268C92.829 3.08371 92.7948 3.04627 92.7542 3.01667C92.681 2.96554 92.5934 2.93925 92.5042 2.94167L91.1625 2.9375ZM64.9792 2.925H67C67.9208 2.925 68.0833 3.27917 68.0958 4.1375L68.2125 10.6625L57.4542 0.979169H49.7667V2.9375H51.4833C52.7208 2.9375 52.8083 3.62083 52.8083 4.22917V13.45C52.8083 13.9833 52.8125 14.6792 52.05 14.6792H49.9417V16.625H58.9583V14.6667H56.7583C55.875 14.6667 55.8417 14.2625 55.825 13.4042V5.5625L68.2125 16.6083H71.3667L71.2 4.125C71.2167 3.21667 71.2792 2.9125 72.2125 2.9125H74.1833V0.954167H64.9792V2.925Z" fill="black" fillOpacity="0.5"/>
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="80" height="26" viewBox="0 0 100 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-16 sm:w-20 lg:w-[80px]">
      <path d="M69.4982 9.1875C71.4339 9.1875 72.9786 10.05 73.7821 11H73.9036V9.83214H77.2857V24.2857C77.2857 30.2857 73.7446 32.7536 69.5589 32.7536C65.6179 32.7536 63.2446 30.1018 62.3571 27.9482L65.4589 26.6589C66.0196 27.9839 67.3696 29.5536 69.5589 29.5536C72.2482 29.5536 73.9036 27.8875 73.9036 24.7732V23.6054H73.7821C72.9786 24.5786 71.4446 25.4536 69.4982 25.4536C65.4357 25.4536 61.7125 21.9125 61.7125 17.35C61.7125 12.7643 65.4357 9.1875 69.4982 9.1875ZM92.3482 9.19822C96.1179 9.19822 98.1696 11.8768 99.0446 13.7393L99.2304 14.1696L99.6732 15.2946L88.7964 19.7946C89.6232 21.4268 90.9125 22.2536 92.7375 22.2536C94.5625 22.2536 95.8268 21.3536 96.7411 20.0036L99.5143 21.8518L99.2643 22.2018C98.2446 23.5411 96.15 25.4536 92.7375 25.4536C88.1125 25.4536 84.6714 21.8768 84.6714 17.3268C84.6714 12.4839 88.1482 9.19822 92.3482 9.19822ZM52.1 9.19822C56.5786 9.19822 60.2286 12.6054 60.2286 17.3268C60.2286 22.0107 56.5786 25.4536 52.1018 25.4536C47.625 25.4536 43.9732 22.0107 43.9732 17.3268C43.9732 12.6179 47.6232 9.19822 52.1 9.19822ZM34.3518 9.15C38.8286 9.15 42.4786 12.5821 42.4786 17.2893C42.4786 21.975 38.8286 25.4179 34.3518 25.4179C29.875 25.4179 26.225 21.9625 26.225 17.2893C26.225 12.5821 29.875 9.15 34.3518 9.15ZM12.8607 0C16.525 0 19.2 1.3625 21.2321 3.19822L21.5482 3.49286L19.1018 5.93929C17.6196 4.55179 15.6107 3.46786 12.8607 3.46786C7.7625 3.46786 3.77143 7.58036 3.77143 12.6786C3.77143 17.7768 7.7625 21.8893 12.8607 21.8893C16.1714 21.8893 18.0571 20.5625 19.2482 19.3589C20.1589 18.4482 20.7982 17.1446 21.0839 15.2839L21.1464 14.8071H12.8607V11.425H24.4929C24.6018 12.0464 24.7 12.8857 24.7 13.7C24.7 16.3036 23.9946 19.5161 21.7071 21.8036C19.4804 24.1161 16.6321 25.3571 12.8607 25.3571C5.87857 25.3571 0 19.6625 0 12.6786C0 5.69464 5.87679 0 12.8607 0ZM82.9321 0.912499V24.7125H79.4268V0.912499H82.9321ZM52.0875 12.3982C49.6304 12.3982 47.5125 14.4071 47.5125 17.3268C47.5125 20.2214 49.6304 22.2554 52.0875 22.2554C54.5571 22.2554 56.6625 20.2107 56.6625 17.3268C56.6625 14.4071 54.5446 12.3982 52.0875 12.3982ZM69.8018 12.3857C67.3446 12.3857 65.2768 14.4786 65.2768 17.35C65.2768 20.1857 67.3446 22.2429 69.8036 22.2429C72.2357 22.2536 74.1464 20.1857 74.1464 17.35C74.1464 14.4786 72.2357 12.3857 69.8036 12.3857M34.35 12.3625C31.8929 12.3625 29.775 14.3696 29.775 17.2911C29.775 20.1857 31.8929 22.2179 34.35 22.2179C36.8071 22.2179 38.925 20.1857 38.925 17.2893C38.925 14.3696 36.8071 12.3625 34.35 12.3625ZM92.4589 12.325C90.6464 12.325 88.1286 13.9304 88.2125 17.0696L95.4768 14.0518C95.075 13.0411 93.8839 12.325 92.4589 12.325Z" fill="black" fillOpacity="0.5"/>
    </svg>
  );
}

function IBMLogo() {
  return (
    <svg width="70" height="28" viewBox="0 0 84 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-14 sm:w-[60px] lg:w-[70px]">
      <path d="M0 0V2.27917H16.2208V0H0ZM18.5208 0V2.27917H41.6333C41.6333 2.27917 39.2708 0 36.1458 0H18.5208ZM46.1708 0V2.27917H60.1542L59.3208 0H46.1708ZM70.1792 0L69.3458 2.27917H83.2042V0H70.1792ZM0 4.43333V6.71667H16.2208V4.43333H0ZM18.5208 4.4375V6.71667H44.3125C44.3125 6.71667 44.0167 4.9625 43.4917 4.4375H18.5208ZM46.1708 4.4375V6.71667H61.6875L60.9167 4.4375H46.1708ZM68.5208 4.4375L67.75 6.71667H83.2083V4.4375H68.5208ZM4.6625 8.875V11.1583H11.6875V8.875H4.6625ZM23.1792 8.875V11.1583H30.2083V8.875H23.1792ZM37.0375 8.875V11.1583H44.0625C44.0625 11.1583 44.5083 9.95 44.5083 8.875H37.0375ZM50.8292 8.875V11.1583H63.2875L62.4542 8.875H50.8292ZM66.9875 8.875L66.1542 11.1583H78.6708V8.875H66.9875ZM4.66667 13.3083V15.5875H11.6917V13.3083H4.66667ZM23.1833 13.3083V15.5875H41.1292C41.1292 15.5875 42.6292 14.4208 43.1083 13.3083H23.1833ZM50.8333 13.3083V15.5875H57.8583V14.3208L58.3042 15.5917H71.175L71.65 14.3208V15.5917H78.675V13.3083H65.4875L64.7875 15.2417L64.0875 13.3083H50.8333ZM4.66667 17.75V20.0292H11.6917V17.75H4.66667ZM23.1833 17.75V20.0292H43.1083C42.6292 18.9208 41.125 17.75 41.125 17.75H23.1833ZM50.8333 17.75V20.0292H57.8583V17.75H50.8333ZM59.1333 17.75L59.9833 20.0292H69.6333L70.4417 17.75H59.1333ZM71.65 17.75V20.0292H78.675V17.75H71.65ZM4.66667 22.1792V24.4583H11.6917V22.1792H4.66667ZM23.1833 22.1792V24.4583H30.2083V22.1792H23.1833ZM37.0417 22.1792V24.4583H44.5125C44.4767 23.6808 44.3265 22.9128 44.0667 22.1792H37.0417ZM50.8333 22.1792V24.4583H57.8583V22.1792H50.8333ZM60.7292 22.1792L61.5542 24.4583H68.0208L68.8542 22.1792H60.7292ZM71.65 22.1792V24.4583H78.675V22.1792H71.65ZM0.125 26.6125V28.9H16.3458V26.6125H0.125ZM18.5208 26.6125V28.9H43.4917C44.0167 28.375 44.3167 26.6125 44.3167 26.6125H18.5208ZM46.2958 26.6125V28.9H57.8542V26.6125H46.2958ZM62.325 26.6125L63.1708 28.9H66.4625L67.2542 26.6125H62.325ZM71.6458 26.6125V28.9H83.3333V26.6125H71.6458ZM0.125 31.0542V33.3333H16.3458V31.0542H0.125ZM18.5208 31.0542V33.3292H36.1458C39.2708 33.3292 41.6333 31.0542 41.6333 31.0542H18.5208ZM46.2958 31.0542V33.3333H57.8542V31.0542H46.2958ZM63.9292 31.0542L64.7417 33.3292H64.8833L65.7083 31.0542H63.9292ZM71.6458 31.0542V33.3333H83.3333V31.0542H71.6458Z" fill="black" fillOpacity="0.5"/>
    </svg>
  );
}

// ===== INTELLIGENT SYSTEMS ICONS =====
function BrandIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="12" y="14" width="46" height="35" rx="2" stroke="#C79A3A" strokeWidth="2" />
      <path d="M18 22H52M18 30H52M18 38H52" stroke="#C79A3A" strokeWidth="2" />
      <text x="21" y="34" fill="#C79A3A" fontSize="10" fontWeight="700">BRAND</text>
      <path d="M42 43L57 58M47 42L54 45L51 52" stroke="#C79A3A" strokeWidth="2" />
    </svg>
  );
}

function CrmIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="12" y="19" width="42" height="38" rx="3" stroke="black" strokeWidth="2" />
      <rect x="39" y="12" width="24" height="17" rx="3" stroke="black" strokeWidth="2" />
      <text x="43" y="24" fill="black" fontSize="9" fontWeight="800">CRM</text>
      <circle cx="26" cy="39" r="9" stroke="black" strokeWidth="2" />
      <path d="M26 30V39L33 45M39 35H50M39 43H50M39 51H50" stroke="black" strokeWidth="2" />
    </svg>
  );
}

function EcommerceIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="15" y="16" width="38" height="39" stroke="#C79A3A" strokeWidth="2" />
      <path d="M15 24H53" stroke="#C79A3A" strokeWidth="2" />
      <path d="M26 35H43L40 45H29L26 35Z" stroke="#C79A3A" strokeWidth="2" />
      <path d="M24 31H27L29 35" stroke="#C79A3A" strokeWidth="2" />
      <circle cx="31" cy="49" r="2" fill="#C79A3A" />
      <circle cx="39" cy="49" r="2" fill="#C79A3A" />
      <rect x="47" y="28" width="12" height="26" rx="2" stroke="#C79A3A" strokeWidth="2" />
      <path d="M51 35H55M52 41H54" stroke="#C79A3A" strokeWidth="2" />
    </svg>
  );
}

function AiSearchIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="15" y="13" width="40" height="44" rx="2" stroke="black" strokeWidth="2" />
      <path d="M21 23H49M21 31H42M21 39H36" stroke="black" strokeWidth="2" />
      <path d="M45 38L55 48M52 38L55 41L52 44" stroke="black" strokeWidth="2" />
      <text x="34" y="52" fill="black" fontSize="11" fontWeight="800">AI</text>
    </svg>
  );
}

function MediaIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="16" y="20" width="38" height="27" stroke="#C79A3A" strokeWidth="2" />
      <path d="M35 20V14M26 14L35 20L44 14" stroke="#C79A3A" strokeWidth="2" />
      <path d="M31 29L43 35L31 41V29Z" stroke="#C79A3A" strokeWidth="2" />
      <circle cx="35" cy="35" r="15" stroke="#C79A3A" strokeWidth="2" />
      <path d="M28 54H42M35 47V54" stroke="#C79A3A" strokeWidth="2" />
    </svg>
  );
}

function AdsIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="16" y="14" width="38" height="34" rx="2" stroke="black" strokeWidth="2" />
      <path d="M16 23H54" stroke="black" strokeWidth="2" />
      <path d="M31 30L43 36L31 42V30Z" stroke="black" strokeWidth="2" />
      <rect x="39" y="39" width="22" height="19" rx="2" stroke="black" strokeWidth="2" />
      <text x="43" y="53" fill="black" fontSize="10" fontWeight="800">ADS</text>
      <path d="M23 54H35M29 48V54" stroke="black" strokeWidth="2" />
    </svg>
  );
}

// ===== SECTION 4 FEATURE ICONS =====
function FeatureIcon({ type }: { type: "ai" | "target" | "systems" | "layers" | "growth" }) {
  if (type === "ai") {
    return (
      <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
        <path d="M12.5 1.8L15 6.6L20.3 7.4L16.4 11.1L17.3 16.4L12.5 13.9L7.7 16.4L8.6 11.1L4.7 7.4L10 6.6L12.5 1.8Z" stroke="#C79A3A" strokeWidth="2" />
        <text x="7" y="23" fill="#C79A3A" fontSize="8" fontWeight="800">AI</text>
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
        <circle cx="12.5" cy="12.5" r="9" stroke="#C79A3A" strokeWidth="2" />
        <circle cx="12.5" cy="12.5" r="4" stroke="#C79A3A" strokeWidth="2" />
        <path d="M12.5 12.5L21 4" stroke="#C79A3A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "systems") {
    return (
      <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
        <rect x="2.5" y="5" width="8" height="7" rx="1" stroke="#C79A3A" strokeWidth="2" />
        <rect x="14.5" y="5" width="8" height="7" rx="1" stroke="#C79A3A" strokeWidth="2" />
        <rect x="8.5" y="16" width="8" height="7" rx="1" stroke="#C79A3A" strokeWidth="2" />
        <path d="M10.5 8.5H14.5M12.5 12V16" stroke="#C79A3A" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "layers") {
    return (
      <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
        <path d="M12.5 3L22 8L12.5 13L3 8L12.5 3Z" stroke="#C79A3A" strokeWidth="2" />
        <path d="M5 12L12.5 16L20 12M5 16L12.5 20L20 16" stroke="#C79A3A" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
      <path d="M4 17L9 12L13 15L21 7" stroke="#C79A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7H21V12" stroke="#C79A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  const points = [
    "Unified Revenue & Digital Infrastructure",
    "Autonomous 24/7 AI-Powered Workforce",
    "Authority-Grade Media & Content Studios",
    "Built to Outperform, Outscale, and Outlast",
  ];

  const features = [
    { icon: <TargetIcon />, title: "AI-Powered Systems", desc: "Automate outreach and scale without limits." },
    { icon: <GrowthChartIcon />, title: "Proven Results", desc: "Data-driven strategies that deliver measurable ROI." },
    { icon: <AlwaysOnIcon />, title: "Always On", desc: "24/7 AI workforce keeps your pipeline moving." },
    { icon: <ShieldIcon />, title: "Built to Last", desc: "Infrastructure designed to outperform and outlast." },
  ];

  const comparisons = [
    { isNegative: true, text: "Slow campaigns kill your momentum." },
    { isNegative: false, text: "We deploy high-velocity systems that launch, test, and scale at a pace the competition can't track." },
    { isNegative: true, text: "You're capturing traffic, not revenue." },
    { isNegative: false, text: "Raw clicks don't pay the bills. We architect precision-engineered environments that transform interest into contracted revenue." },
    { isNegative: true, text: "Your budget is draining without returns." },
    { isNegative: false, text: "We optimize every dollar with data-driven precision to maximize ROI and eliminate waste." },
  ];

  const intelligentCards = [
    {
      icon: <BrandIcon />,
      title: "Authority Branding & Web",
      mission:
        "Architecting digital headquarters that command premium market positioning.",
      difference:
        "Built for speed, total brand authority, and unmatched user clarity.",
    },
    {
      icon: <CrmIcon />,
      title: "The DTX Hub (AI & CRM)",
      mission:
        "Deploying 24/7 AI-powered systems that manage your frontline and lead follow-up.",
      difference:
        "Custom-built intelligence hard-wired into your revenue operations.",
    },
    {
      icon: <EcommerceIcon />,
      title: "Elite E-Commerce",
      mission:
        "Building high-fidelity storefronts engineered for maximum conversion and frictionless scale.",
      difference:
        "Performance-driven builds designed for total market dominance.",
    },
    {
      icon: <AiSearchIcon />,
      title: "Search & AI Dominance",
      mission:
        "Owning the results with next-gen AEO and surgical SEO to ensure you are the first answer.",
      difference:
        "Data-driven search strategies that outperform and outlast the competition.",
    },
    {
      icon: <MediaIcon />,
      title: "Multi-Channel Media Supremacy",
      mission:
        "Dominating the scroll and the airwaves with Social Media, Reels, and Static Posting, backed by Podcast and TV/OTT Broadcasting.",
      difference:
        "We ensure your brand is omnipresent - from the smartphone in their hand to the TV in their living room.",
    },
    {
      icon: <AdsIcon />,
      title: "Surgical Advertising",
      mission:
        "Precision-targeted acquisition across all channels to capture demand with zero wasted spend.",
      difference:
        "Aggressive, data-backed scaling focused on measurable revenue growth and RO",
    },
  ];

  const speedFeatures = [
    {
      icon: "ai",
      text: "AI-Powered Execution — Launch faster, optimize instantly, and scale without human bottlenecks.",
    },
    {
      icon: "target",
      text: "Precision Targeting — Reach the right audience at the right time with higher conversion rates.",
    },
    {
      icon: "systems",
      text: "Integrated Growth Systems — Capture, nurture, and convert leads across every channel.",
    },
    {
      icon: "layers",
      text: "Organized & Scalable — Eliminate wasted spend and maximize ROI with every move.",
    },
    {
      icon: "growth",
      text: "Automated Scaling — Identify what works and amplify it instantly for exponential growth.",
    },
  ] as const;

  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <Image
          src={heroBg}
          alt="DTX Digital hero background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 items-center px-4 py-16 sm:px-6 sm:py-20 md:gap-8 lg:grid-cols-[minmax(0,720px)_minmax(0,575px)] lg:gap-[50px] lg:px-[50px] xl:grid-cols-[760px_575px] xl:gap-[80px] xl:px-[70px]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-[14px] font-extrabold uppercase leading-none tracking-[-0.2px] text-[#D4A33C] sm:mb-[30px] sm:text-[16px] lg:text-[18px]">
              SMARTER OUTREACH • FASTER SALES • BIGGER GROWTH
            </p>

            <h1 className="text-[32px] font-black uppercase leading-[1.15] tracking-[-1.5px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[60px]">
              <span className="block whitespace-nowrap">
                DOMINATE YOUR MARKET
              </span>

              <span className="block whitespace-nowrap">
                WITH <span className="text-[#D4A33C]">DTX DIGITAL!</span>
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.75] text-white sm:mx-auto sm:mt-[28px] sm:text-[18px] lg:mx-0">
              DTX Digital builds AI-powered sales and marketing systems that
              automate outreach, improve follow-up, and turn scattered workflows
              into scalable revenue infrastructure.
            </p>

            <div className="mx-auto mt-6 max-w-md space-y-3 sm:mt-8 sm:space-y-4 lg:mx-0">
              {points.map((item) => (
                <div key={item} className="flex items-center gap-3 sm:gap-4">
                  <CheckIcon />

                  <p className="text-[14px] font-extrabold leading-none text-white sm:text-[16px] lg:text-[18px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 lg:mx-0 lg:justify-start">
              <Link
                href="/contact"
                className="flex h-[50px] min-w-[180px] items-center justify-center rounded-[10px] bg-[#D4A33C] px-6 text-[14px] font-black uppercase text-black transition hover:opacity-90 sm:h-[56px] sm:min-w-[200px] sm:text-[16px] lg:h-[61px] lg:min-w-[224px] lg:px-7 lg:text-[18px]"
              >
                SCALE MY BRAND
              </Link>

              <Link
                href="/results"
                className="flex h-[50px] min-w-[170px] items-center justify-center rounded-[10px] border border-white/80 bg-black/10 px-6 text-[14px] font-black uppercase text-white transition hover:bg-white/10 sm:h-[56px] sm:min-w-[190px] sm:text-[16px] lg:h-[61px] lg:min-w-[205px] lg:px-7 lg:text-[18px]"
              >
                SEE THE PROOF
              </Link>
            </div>
          </div>

          {/* Form Card */}
          <div className="mt-8 w-full max-w-[575px] justify-self-center rounded-[26px] border border-white/25 bg-white/10 px-6 py-8 shadow-2xl backdrop-blur-md sm:mt-10 sm:px-8 sm:py-10 lg:mt-0 lg:justify-self-end lg:px-[40px] lg:py-[38px] xl:px-[48px] xl:py-[44px]">
            <h2 className="mb-6 text-[28px] font-extrabold leading-none tracking-[-0.5px] sm:mb-8 sm:text-[32px] lg:mb-[34px] lg:text-[36px] xl:text-[38px]">
              Start Your <span className="text-[#D4A33C]">Growth</span> Audit
            </h2>

            <form className="space-y-4 sm:space-y-5 lg:space-y-6">
              {["First Name", "Last Name", "Phone Number", "Email"].map(
                (placeholder) => (
                  <input
                    key={placeholder}
                    type="text"
                    placeholder={placeholder}
                    className="h-[48px] w-full rounded-[8px] border border-white/30 bg-[#666666] px-4 text-[15px] font-medium text-white outline-none placeholder:text-white sm:h-[52px] sm:px-5 sm:text-[16px] lg:h-[56px] lg:px-[27px] lg:text-[18px]"
                  />
                )
              )}

              <textarea
                placeholder="Tell us about your goals"
                className="h-[80px] w-full resize-none rounded-[8px] border border-white/30 bg-[#666666] px-4 py-3 text-[15px] font-medium text-white outline-none placeholder:text-white sm:h-[85px] sm:px-5 sm:text-[16px] lg:h-[91px] lg:px-[27px] lg:py-[15px] lg:text-[18px]"
              />

              <button
                type="submit"
                className="flex h-[50px] min-w-[160px] items-center justify-center rounded-[10px] bg-[#D4A33C] px-6 text-[14px] font-black uppercase text-black transition hover:opacity-90 sm:h-[55px] sm:min-w-[180px] sm:text-[16px] lg:h-[60px] lg:min-w-[196px] lg:px-7 lg:text-[17px]"
              >
                BOOK THE WIN
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: FEATURES & GROWTH ===== */}
      <section className="bg-white px-4 py-10 text-black sm:px-6 sm:py-14 lg:px-10 lg:py-16 xl:px-20 xl:py-20">
        <div className="mx-auto max-w-[1420px]">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="text-center lg:text-left">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C79A3A] sm:text-xs lg:text-sm">
                Why DTX
              </span>
              <h2 className="mt-2 text-xl font-bold leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Built for Brands Ready to{" "}
                <span className="text-[#C79A3A] whitespace-nowrap">Scale Smarter</span>
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-sm text-gray-600 sm:mt-3 sm:text-base lg:mx-0">
                We partner with ambitious businesses that demand growth, speed,
                and measurable results.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
              <SonyLogo />
              <GoogleLogo />
              <IBMLogo />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-center transition-all hover:border-[#C79A3A]/30 hover:bg-[#f5efe3] hover:shadow-lg sm:p-5 lg:text-left lg:p-6 ${
                  index < 3 ? "lg:border-r lg:border-gray-200" : ""
                }`}
              >
                <div className="flex justify-center lg:justify-start">
                  <div className="scale-75 sm:scale-90 lg:scale-100">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mt-2 text-base font-bold sm:mt-3 sm:text-lg">{feature.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Section - Growth Execution */}
          <div className="mt-10 grid items-center gap-6 sm:mt-14 sm:gap-8 lg:mt-16 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:mt-20">
            <div className="relative order-2 h-[200px] overflow-hidden rounded-2xl sm:h-[280px] md:h-[320px] lg:order-1 lg:h-[400px] xl:h-[480px]">
              <Image
                src={home2}
                alt="Growth operation dashboard room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 text-center lg:text-left lg:order-2">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C79A3A] sm:text-xs lg:text-sm">
                The Difference
              </span>
              <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Your Growth Isn't Stuck.
                <br />
                <span className="text-[#C79A3A]">Your Execution Is.</span>
              </h2>

              <div className="mx-auto mt-4 max-w-lg space-y-3 text-sm leading-relaxed text-gray-600 sm:mt-6 sm:space-y-4 sm:text-base lg:mx-0">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    {item.isNegative ? <RedXIcon /> : <GoldCheckIcon />}
                    <p className={!item.isNegative ? 'font-medium text-gray-800' : ''}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center lg:justify-start sm:mt-8">
                <button className="rounded-lg bg-[#C79A3A] px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-black transition-all hover:bg-[#D4A33C] hover:scale-105 sm:px-7 sm:py-3 sm:text-sm lg:px-8 lg:py-3.5">
                  Upgrade Your Growth Operation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: INTELLIGENT SYSTEMS ===== */}
      <section className="bg-[#F8F5F0] px-4 py-12 text-black sm:px-6 sm:py-16 lg:px-10 lg:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[2px] text-[#C79A3A] sm:text-xs lg:tracking-[3px]">
              Our Solutions
            </span>
            <h2 className="mt-3 text-2xl font-black leading-tight tracking-[-0.3px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px]">
              Intelligent Systems Built for <span className="text-[#C79A3A]">Scalable Growth</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed text-gray-500 sm:mt-4 sm:text-base lg:text-lg">
              Focused solutions designed to accelerate execution, improve
              precision, and drive measurable business impact.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6 xl:gap-8">
            {intelligentCards.map((card) => (
              <div
                key={card.title}
                className="group relative rounded-2xl bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100/80 hover:border-[#C79A3A]/30 sm:p-6 lg:text-left lg:p-7 xl:p-8"
              >
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C79A3A]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="flex justify-center lg:justify-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8F5F0] transition-colors group-hover:bg-[#C79A3A]/10 sm:h-16 sm:w-16">
                    {card.icon}
                  </div>
                </div>

                <h3 className="mt-4 text-base font-black leading-tight tracking-[-0.2px] sm:mt-5 sm:text-lg lg:text-xl">
                  {card.title}
                </h3>

                <div className="mt-3 sm:mt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C79A3A] sm:text-xs">
                    The Mission
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 sm:text-sm">
                    {card.mission}
                  </p>
                </div>

                <div className="my-3 h-px bg-gray-200 sm:my-4" />

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black sm:text-xs">
                    The Difference
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 sm:text-sm">
                    {card.difference}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center sm:mt-14 lg:mt-16">
            <p className="text-base font-semibold text-black sm:text-lg lg:text-xl">
              You Don't Need More Tools. You Need A System.
            </p>

            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-5 sm:flex-row sm:gap-4 lg:mt-6 lg:gap-5">
              <Link
                href="/contact"
                className="flex h-[46px] min-w-[180px] items-center justify-center rounded-lg bg-[#C79A3A] px-6 text-sm font-black uppercase tracking-wide text-black transition-all hover:bg-[#D4A33C] hover:scale-105 sm:h-[50px] sm:min-w-[200px] sm:text-sm lg:h-[56px] lg:min-w-[220px] lg:px-8 lg:text-base"
              >
                Claim The Advantage
              </Link>

              <Link
                href="/contact"
                className="flex h-[46px] min-w-[180px] items-center justify-center rounded-lg border-2 border-black bg-transparent px-6 text-sm font-black uppercase tracking-wide text-black transition-all hover:bg-black hover:text-white sm:h-[50px] sm:min-w-[200px] sm:text-sm lg:h-[56px] lg:min-w-[220px] lg:px-8 lg:text-base"
              >
                Set The New Standard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FEATURES BUILT FOR SPEED ===== */}
      <section className="bg-white px-4 py-12 text-black sm:px-6 sm:py-16 lg:px-10 lg:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 xl:gap-16">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[2px] text-[#C79A3A] sm:text-xs lg:tracking-[3px]">
                Why DTX
              </span>

              <h2 className="mt-3 text-2xl font-black leading-[1.2] tracking-[-0.3px] sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[42px]">
                Features Built for Speed.
                <br />
                <span className="text-[#C79A3A]">
                  Benefits That Drive Revenue.
                </span>
              </h2>

              <div className="mx-auto mt-6 max-w-lg space-y-0 divide-y divide-gray-100 sm:mt-8 lg:mx-0">
                {speedFeatures.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 sm:gap-4 sm:py-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C79A3A]/10 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                      <FeatureIcon type={item.icon} />
                    </div>

                    <p className="text-xs font-medium leading-relaxed text-gray-700 sm:text-sm lg:text-[15px] xl:text-[17px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center lg:justify-start sm:mt-8 lg:mt-10">
                <Link
                  href="/contact"
                  className="inline-flex h-[46px] w-full items-center justify-center rounded-lg bg-[#C79A3A] px-6 text-sm font-black uppercase tracking-wide text-black transition-all hover:bg-[#D4A33C] hover:scale-[1.02] sm:w-auto sm:min-w-[240px] sm:px-7 sm:text-sm lg:h-[52px] lg:min-w-[280px] lg:px-8 lg:text-base"
                >
                  Rebuild Your Growth Engine
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[240px] overflow-hidden rounded-2xl sm:h-[320px] md:h-[360px] lg:h-[440px] xl:h-[520px]">
              <Image
                src={home3}
                alt="Business analytics dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <HowItWorksSection/>
      <FinalCtaSection/>
      <FaqSection/>
    </>
  );
}
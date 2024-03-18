import { LogosProps } from "components/atoms/logos";

const Congratulations = (props: LogosProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M91.4001 51.3C91.4001 39.941 83.5941 30.7 74.0001 30.7C73.3301 30.7 72.6721 30.756 72.0211 30.843C69.8041 18.136 60.4261 9 49.4001 9C36.6071 9 26.2001 21.336 26.2001 36.5C26.2001 38.052 26.3221 39.64 26.5591 41.319C19.8921 42.305 14.8001 49.058 14.8001 57.2C14.8001 65.282 19.7331 71.892 26.4781 72.978L24.2001 76.1H27.3001V85.3C27.3001 85.853 27.7481 86.3 28.3001 86.3C28.8521 86.3 29.3001 85.853 29.3001 85.3V76.1H32.2001L29.9251 73.119C35.1691 72.437 39.5491 68.237 41.1991 62.329C42.9831 63.133 44.7981 63.662 46.5251 63.886L42.1001 70.1H48.6001V73.2C48.6001 74.142 47.7421 75 46.8001 75H44.6001C42.6381 75 41.1001 76.537 41.1001 78.6C41.1001 80.563 42.6381 82.1 44.6001 82.1H53.8001C54.6411 82.1 55.3001 82.759 55.3001 83.6C55.3001 84.441 54.6411 85.1 53.8001 85.1H50.1001C48.3911 85.1 47.0001 86.491 47.0001 88.201V94C47.0001 94.553 47.4481 95 48.0001 95C48.5521 95 49.0001 94.553 49.0001 94V88.2C49.0001 87.542 49.5691 87.099 50.1001 87.099H53.8001C55.7631 87.099 57.3001 85.562 57.3001 83.599C57.3001 81.636 55.7631 80.099 53.8001 80.099H44.6001C43.7591 80.099 43.1001 79.44 43.1001 78.499C43.1001 77.658 43.7591 76.999 44.6001 76.999H46.8001C48.8601 76.999 50.6001 75.259 50.6001 73.199V70.099H56.3001L51.4281 63.915C54.0571 63.582 56.5621 62.77 58.8961 61.486C61.5641 67.009 66.3221 70.93 71.8901 71.732L68.7001 76.2H73.0001V85.3C73.0001 85.853 73.4471 86.3 74.0001 86.3C74.5531 86.3 75.0001 85.853 75.0001 85.3V76.2H79.2001L75.6971 71.799C84.4981 70.785 91.4001 61.981 91.4001 51.3ZM83.2021 36.421C84.5751 39.299 85.4001 42.601 85.4001 46.2C85.4001 57.1 78.1001 65.9 69.0001 65.9C67.0081 65.9 65.0691 65.437 63.2861 64.634C60.4011 61.252 58.6001 56.529 58.6001 51.3C58.6001 41.044 65.5081 32.7 74.0001 32.7C77.4521 32.7 80.6311 34.095 83.2021 36.421ZM16.8001 57.2C16.8001 50.027 21.1881 44.093 26.9151 43.288C28.2671 49.855 31.7061 55.726 36.5161 59.512L36.5633 59.546L36.6135 59.5822C36.6688 59.6219 36.7244 59.6617 36.7791 59.702C35.8391 64.09 33.1771 67.624 29.3001 69.101C29.1501 69.151 29.0251 69.201 28.9001 69.251C28.7751 69.301 28.6501 69.351 28.5001 69.401C28.3501 69.451 28.1751 69.476 28.0001 69.501L28.0001 69.501L28 69.501C27.825 69.526 27.6501 69.551 27.5001 69.601C25.8041 69.862 24.1091 69.733 22.4691 69.256C19.0461 66.846 16.8001 62.37 16.8001 57.2ZM50.7001 62C50.4171 62 50.1341 62.026 49.8511 62.055C49.0611 62.134 48.3091 62.137 47.4831 62.004C45.3661 61.827 43.1121 61.139 40.9471 60.006C39.8228 59.4444 38.7895 58.693 37.7203 57.9156L37.7181 57.914C33.1001 54.279 29.8081 48.489 28.6861 42.036C28.3591 40.074 28.2001 38.263 28.2001 36.5C28.2001 22.439 37.7101 11 49.4001 11C59.4621 11 68.0361 19.474 70.0661 31.251C62.3631 33.371 56.6001 41.545 56.6001 51.3C56.6001 54.269 57.1441 57.085 58.1031 59.638C55.7741 60.949 53.2641 61.748 50.7001 62ZM48.9941 15.006C45.8261 15.345 42.3711 16.211 38.5831 20.203C34.6101 24.287 33.8611 28.532 33.6151 29.927C33.5191 30.471 33.8821 30.989 34.4261 31.086C34.4851 31.096 34.5431 31.101 34.6011 31.101C35.0781 31.101 35.4991 30.76 35.5851 30.275C35.8041 29.03 36.4731 25.241 40.0251 21.589C43.5441 17.88 46.6091 17.273 49.2061 16.995C49.7551 16.936 50.1531 16.444 50.0941 15.894C50.0361 15.344 49.5391 14.947 48.9941 15.006ZM58.6001 21.2C60.6431 21.2 62.3001 22.856 62.3001 24.9C62.3001 26.943 60.6431 28.6 58.6001 28.6C56.5561 28.6 54.9001 26.943 54.9001 24.9C54.9001 22.856 56.5571 21.2 58.6001 21.2ZM16.3131 37.451C17.3311 37.296 18.2471 36.748 18.8921 35.909C19.5401 35.066 19.8091 34.029 19.6501 32.986C19.4951 31.968 18.9471 31.052 18.1091 30.407C17.6711 30.069 17.0431 30.152 16.7071 30.59C16.3701 31.028 16.4521 31.655 16.8901 31.992C17.7681 32.668 17.9521 33.852 17.3071 34.689C16.9771 35.117 16.5171 35.396 16.0111 35.473C15.5131 35.547 15.0141 35.418 14.6091 35.106C14.1711 34.768 13.5431 34.851 13.2071 35.289C12.8701 35.727 12.9521 36.355 13.3901 36.691C14.0751 37.218 14.8881 37.494 15.7281 37.494C15.9221 37.496 16.1181 37.481 16.3131 37.451ZM75.8001 25.9C75.7041 25.9 75.6071 25.886 75.5111 25.857C74.9811 25.697 74.6831 25.139 74.8431 24.612L76.1431 20.312C76.2961 19.808 76.8121 19.512 77.3241 19.627L81.2091 20.517L82.2421 17.018C82.3991 16.489 82.9531 16.187 83.4841 16.342C84.0141 16.498 84.3161 17.054 84.1601 17.584L82.8601 21.984C82.7101 22.491 82.1951 22.794 81.6771 22.675L77.7861 21.783L76.7571 25.189C76.6261 25.621 76.2301 25.9 75.8001 25.9Z"
                  fill="black"/>
        </svg>

    )
}
export default Congratulations;
import { LogosProps } from "components/atoms/logos/index";

const Damchap= (props: LogosProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" {...props}>
            <path
                d="M32.3706 9.02738C32.0112 9.05166 31.6215 9.09536 31.5101 9.11964C31.3988 9.14878 31.2216 9.17306 31.1153 9.17306C31.0141 9.17306 30.7964 9.2022 30.6344 9.24104C30.4775 9.27989 30.2345 9.33817 30.0928 9.3673C29.2222 9.55183 28.8982 9.64895 27.9668 9.98401C27.5011 10.154 26.4533 10.6396 26.0433 10.8727C25.9066 10.9504 25.7548 11.0329 25.7143 11.0523C25.3954 11.198 24.1299 12.1207 23.6187 12.5771C23.0821 13.0627 23.0821 13.0627 22.8138 12.8345C22.5456 12.5965 22.1862 12.3198 22.0748 12.2615C22.0292 12.2372 21.8673 12.1255 21.7154 12.0187C21.4066 11.8002 21.2852 11.7225 21.1333 11.6496C21.0776 11.6205 20.9663 11.5574 20.8802 11.5088C20.7283 11.4165 19.5034 10.8241 19.2098 10.7027C18.1367 10.2608 16.7548 9.89661 15.3375 9.6878C13.9049 9.47413 13.4494 9.46442 6.60067 9.46442C0.683352 9.46442 0.0607424 9.47413 0.0303712 9.54212C0.0151856 9.58582 0 13.3055 0 17.8168C0 24.4598 0.0101237 26.0234 0.0658043 26.0623C0.16198 26.1399 7.22835 26.1399 7.32452 26.0623C7.3802 26.0185 7.39033 25.0765 7.39033 20.6381C7.39033 17.6856 7.39033 15.2382 7.39033 15.2042C7.39033 15.1071 12.8166 15.1217 13.4595 15.2236C15.0641 15.4762 16.1676 15.9326 17.185 16.7727C18.248 17.6516 18.8605 18.6277 19.2351 20.0505C19.473 20.9732 19.473 23.0127 19.2351 23.9353C19.0579 24.6103 18.7492 25.3581 18.4606 25.8049C18.162 26.2711 17.509 26.9703 17.0079 27.3588C16.5979 27.6744 15.545 28.2523 15.3678 28.2572C15.3375 28.2572 15.2666 28.2912 15.216 28.33C15.1603 28.3689 15.0742 28.4028 15.0236 28.4028C14.9781 28.4028 14.8616 28.432 14.7705 28.4708C14.6794 28.5097 14.4314 28.5728 14.2238 28.6165C13.3481 28.7962 12.8774 28.8399 11.6524 28.8447C10.5186 28.8496 10.4224 28.8545 10.3768 28.937C10.3465 28.9953 10.3262 30.1267 10.3262 31.9623C10.3262 34.5506 10.3363 34.905 10.4021 34.9585C10.5135 35.0459 14.0568 34.9827 14.649 34.8856C14.8718 34.8468 15.135 34.8128 15.2261 34.8128C15.3172 34.8128 15.5349 34.7836 15.707 34.7448C15.8791 34.7059 16.203 34.638 16.4258 34.5943C16.6485 34.5505 16.8864 34.4923 16.9522 34.4631C17.0231 34.4389 17.1699 34.4 17.2812 34.3757C17.4736 34.3369 17.5596 34.3126 18.0202 34.1572C18.7036 33.9193 19.7413 33.4628 20.3234 33.1375C20.4904 33.0452 20.6625 32.9529 20.703 32.9335C21.0523 32.7733 22.2823 31.8749 22.8189 31.3893L23.2188 31.0299L23.4415 31.2339C23.9831 31.7341 24.6614 32.2585 25.284 32.6567C25.5472 32.8267 25.7295 32.9286 26.2964 33.2394C26.6862 33.4531 27.7643 33.9387 27.8555 33.9387C27.8909 33.9387 27.9618 33.9678 28.0174 34.0067C28.0731 34.0407 28.1744 34.0844 28.2452 34.0989C28.3616 34.1232 28.4426 34.1475 28.9033 34.3029C28.9994 34.3369 29.2272 34.4 29.4094 34.4486C29.5917 34.4923 29.8549 34.5603 29.9966 34.5991C30.1384 34.638 30.3105 34.6671 30.3864 34.6671C30.4573 34.6671 30.5787 34.6914 30.6597 34.7205C30.7357 34.7496 30.9837 34.7933 31.2064 34.8176C31.4291 34.8371 31.7582 34.8808 31.9404 34.9099C32.4921 34.9924 35.3521 34.9779 35.9798 34.8856C37.2807 34.7011 38.0855 34.536 38.7486 34.3175C38.8346 34.2932 38.9713 34.2543 39.0523 34.2301C39.4117 34.1378 39.928 33.9387 40.5456 33.6619C40.7278 33.5793 40.91 33.4968 40.9505 33.4822C40.991 33.4677 41.0973 33.4094 41.1834 33.3608C41.2694 33.3123 41.4415 33.22 41.563 33.1569C41.9679 32.9481 42.5855 32.5402 43.2233 32.0594C43.613 31.7632 45 30.3987 45 30.3064C45 30.2578 44.9595 30.1899 44.9139 30.1462C44.7823 30.0442 44.0433 29.408 43.851 29.2429C43.7649 29.1701 43.4916 28.9273 43.2435 28.7136C43.0006 28.4951 42.6867 28.228 42.5501 28.1163C42.4134 28.0047 42.2767 27.8833 42.2413 27.8541C42.1856 27.8007 41.5782 27.2665 40.9303 26.7032C40.7582 26.5576 40.5658 26.3925 40.4949 26.3293L40.3735 26.2176L39.766 26.8052C39.2345 27.32 38.5411 27.8833 38.3183 27.9804C38.2778 27.9998 38.1766 28.0581 38.0905 28.1115C38.0096 28.16 37.7666 28.2814 37.5591 28.3834C37.3515 28.4805 37.1389 28.5777 37.0934 28.6019C36.8352 28.7282 36.0152 28.9467 35.3825 29.0536C34.5726 29.1992 33.1856 29.141 32.32 28.9322C32.2087 28.903 32.0366 28.8642 31.9404 28.8399C31.5861 28.7622 31.2722 28.6408 30.7255 28.3834C30.2447 28.1552 30.2396 28.1552 29.6575 27.7376C28.9893 27.2617 28.3718 26.5964 27.9567 25.902C27.8403 25.7029 27.5366 25.0959 27.5366 25.0522C27.5366 25.0328 27.5062 24.9502 27.4657 24.8725C27.0861 24.1393 26.838 22.2697 26.9798 21.2402C27.0101 20.9974 27.0557 20.6721 27.0759 20.5118C27.1316 20.0942 27.2531 19.6717 27.5163 18.9725C27.896 17.9673 28.716 16.9184 29.6575 16.2483C30.2447 15.8306 30.2447 15.8306 30.7255 15.6024C30.9331 15.5053 31.1659 15.3936 31.2418 15.3596C31.3127 15.3208 31.4089 15.2916 31.4544 15.2916C31.4949 15.2916 31.6063 15.2625 31.6974 15.2236C32.4921 14.8983 34.2688 14.7575 35.3774 14.9323C36.3543 15.0828 37.4173 15.4567 38.0905 15.8743C38.1766 15.9278 38.2778 15.986 38.3183 16.0055C38.5815 16.1171 39.1384 16.5736 39.8318 17.2437L40.3684 17.7633L40.5962 17.5691C40.7227 17.4574 41.0062 17.2146 41.2289 17.0252C41.4516 16.8358 41.6592 16.6562 41.6895 16.6319C42.1704 16.1948 42.3526 16.0346 42.6968 15.7432C43.1423 15.3645 43.2132 15.3062 43.8712 14.7283C44.1142 14.5098 44.4331 14.2379 44.5697 14.1262C44.7115 14.0096 44.8633 13.8785 44.9139 13.8397C45.0304 13.7377 45.0253 13.6406 44.8836 13.4949C44.8178 13.4269 44.6153 13.2084 44.428 13.0093C43.6789 12.2178 42.5652 11.3631 41.5579 10.8095C41.1226 10.5716 40.1659 10.1345 39.7357 9.9743C39.6091 9.9306 39.4522 9.86747 39.3813 9.84319C39.3105 9.81405 39.189 9.7752 39.1029 9.75578C39.0219 9.7315 38.8853 9.69265 38.7992 9.66837C38.1614 9.45471 37.1592 9.2459 36.1164 9.10508C35.4483 9.00796 33.3172 8.96911 32.3706 9.02738Z"
                fill="black"/>
        </svg>

    )
}

export default Damchap;
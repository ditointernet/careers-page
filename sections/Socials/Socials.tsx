import React from "react"
import styled from "styled-components"
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Socials = () => (
    <Section id="socials">
        <Title>A Dito por FERAS</Title>
        <Description>Acompanhe as nossas novidades.</Description>
        <WrapperSocials>
            <Glassdoor target="_blank" href="#glassdoor">
                <svg width="221" height="43" viewBox="0 0 221 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0CAA41" fillRule="evenodd" clipRule="evenodd" d="M221 9.94012C220.992 9.81593 220.953 9.69563 220.885 9.5904C220.817 9.48518 220.724 9.39855 220.613 9.33823C220.112 9.09098 219.382 8.92246 217.895 8.92246C214.54 8.92246 211.572 10.5564 210.277 13.2905V9.95084C210.277 9.88198 210.264 9.81374 210.237 9.75006C210.21 9.68638 210.171 9.62868 210.121 9.5799C210.072 9.53113 210.013 9.49236 209.948 9.46596C209.883 9.43955 209.814 9.42593 209.744 9.42593H204.719C204.649 9.42593 204.579 9.43955 204.514 9.46596C204.45 9.49236 204.391 9.53113 204.341 9.5799C204.292 9.62868 204.252 9.68638 204.226 9.75006C204.199 9.81374 204.186 9.88198 204.186 9.95084V32.465C204.186 32.7534 204.423 32.9881 204.719 32.9881H209.983C210.053 32.9881 210.122 32.9746 210.187 32.9483C210.252 32.922 210.311 32.8834 210.36 32.8348C210.41 32.7862 210.449 32.7286 210.476 32.6651C210.502 32.6016 210.516 32.5337 210.516 32.465V22.3385C210.516 17.8146 213.723 15.566 217.895 15.566C218.869 15.566 219.84 15.7775 220.328 15.9352C220.662 16.0427 221 15.7738 221 15.428V9.94012ZM187.366 27.4627C183.768 27.4627 180.986 24.967 180.986 21.1973C180.986 17.4276 183.77 14.93 187.366 14.93C190.962 14.93 193.744 17.4276 193.744 21.1973C193.744 24.967 190.962 27.4644 187.366 27.4644V27.4627ZM187.366 8.84898C179.98 8.84898 174.466 13.8461 174.466 21.1973C174.466 28.5485 179.982 33.5437 187.366 33.5437C194.749 33.5437 200.264 28.5485 200.264 21.1991C200.264 13.8461 194.749 8.84898 187.366 8.84898ZM158.081 27.4644C154.483 27.4644 151.701 24.967 151.701 21.1973C151.701 17.4276 154.483 14.93 158.081 14.93C161.677 14.93 164.457 17.4276 164.457 21.1973C164.457 24.967 161.677 27.4644 158.081 27.4644ZM158.081 8.84898C150.695 8.84898 145.179 13.8461 145.179 21.1973C145.179 28.5485 150.695 33.5437 158.081 33.5437C165.463 33.5437 170.979 28.5485 170.979 21.1973C170.979 13.8461 165.463 8.84898 158.081 8.84898ZM128.836 27.5217C125.239 27.5217 122.553 25.0243 122.553 21.208C122.553 17.39 125.239 14.8924 128.836 14.8924C132.386 14.8924 135.119 17.2968 135.119 21.208C135.119 25.0709 132.386 27.5217 128.836 27.5217ZM140.724 0.00174967H135.46C135.319 0.00174967 135.183 0.0569521 135.083 0.155065C134.983 0.253178 134.927 0.38615 134.927 0.524902V12.8194C133.296 10.5566 130.611 8.81136 126.872 8.81136C121.02 8.81136 116.032 13.2441 116.032 21.208C116.032 29.172 121.019 33.601 126.965 33.601C130.467 33.601 133.201 32.0924 134.929 29.6898V32.465C134.929 32.7534 135.166 32.9881 135.458 32.9881H140.724C141.016 32.9881 141.256 32.7552 141.256 32.465V0.524902C141.256 0.38646 141.2 0.253782 141.1 0.155721C141 0.0576596 140.865 0.00222379 140.724 0.00174967ZM112.546 25.8556C112.546 31.2306 108.566 33.5382 102.19 33.5382C97.7825 33.5382 93.9926 32.3737 91.8246 29.9621C91.7427 29.8675 91.6966 29.7481 91.6943 29.624C91.692 29.4999 91.7335 29.3787 91.8118 29.2812L94.8547 25.4005C94.9016 25.3418 94.9609 25.2939 95.0286 25.26C95.0963 25.2262 95.1706 25.2072 95.2465 25.2043C95.3225 25.2014 95.3981 25.2146 95.4683 25.2432C95.5384 25.2718 95.6013 25.3152 95.6528 25.3701C97.26 26.9879 99.7331 27.9769 102.813 27.9769C104.584 27.9769 106.023 27.5074 106.023 26.1869C106.023 24.9149 104.73 24.6319 100.701 23.7827C97.1524 23.0768 92.7396 21.4749 92.7396 16.3382C92.7396 11.5778 96.5788 8.84548 102.858 8.84548C106.991 8.84548 109.963 10.071 112.056 11.9988C112.257 12.1834 112.275 12.4951 112.105 12.7083L109.218 16.392C109.175 16.4486 109.122 16.4958 109.06 16.5309C108.998 16.566 108.929 16.5881 108.858 16.5959C108.787 16.6036 108.715 16.5969 108.647 16.576C108.579 16.5551 108.516 16.5203 108.462 16.4743C107.046 15.2327 104.692 14.4534 102.38 14.4534C100.414 14.4534 99.3112 15.0662 99.3112 16.1018C99.3112 17.2807 100.608 17.5637 104.875 18.4595C109.044 19.3553 112.546 20.9088 112.546 25.8573V25.8556ZM88.2064 25.8698C88.2064 31.243 84.2247 33.5526 77.8486 33.5526C73.4432 33.5526 69.6533 32.3879 67.4853 29.9745C67.4036 29.8803 67.3576 29.7612 67.3549 29.6375C67.3522 29.5138 67.3931 29.393 67.4707 29.2955L70.5136 25.4129C70.5608 25.3547 70.6203 25.3072 70.6881 25.2736C70.7558 25.2401 70.8302 25.2214 70.906 25.2187C70.9818 25.216 71.0574 25.2293 71.1274 25.2579C71.1974 25.2865 71.2603 25.3296 71.3118 25.3843C72.9209 27.0004 75.3939 27.9913 78.4714 27.9913C80.2449 27.9913 81.6842 27.5219 81.6842 26.1996C81.6842 24.9275 80.3892 24.6461 76.3619 23.7969C72.8113 23.0892 68.3985 21.4874 68.3985 16.3525C68.3985 11.592 72.2378 8.8597 78.5189 8.8597C82.6503 8.8597 85.6202 10.0834 87.7151 12.013C87.916 12.1976 87.9342 12.5075 87.7662 12.7225L84.8768 16.4063C84.6942 16.6392 84.3471 16.6858 84.1224 16.4887C82.7051 15.2471 80.3527 14.4659 78.0404 14.4659C76.0734 14.4659 74.9701 15.0804 74.9701 16.116C74.9701 17.2949 76.267 17.5781 80.5335 18.4739C84.7051 19.368 88.2046 20.923 88.2046 25.8698H88.2064ZM56.6582 23.469C56.6582 26.0598 54.503 28.3226 51.1442 28.3226C48.9378 28.3226 47.7397 27.3318 47.7397 25.8232C47.7397 24.5046 48.7478 23.5137 50.7131 23.2306L56.6582 22.5249V23.4673V23.469ZM52.4884 8.90628C47.4656 8.90628 43.6832 10.5582 41.9919 13.8244C41.9361 13.9377 41.9228 14.0668 41.9545 14.1888C41.9863 14.3107 42.061 14.4178 42.1653 14.491L46.0027 17.1857C46.2438 17.3542 46.5835 17.2985 46.7278 17.0423C47.7944 15.1574 50.1797 14.5142 52.4884 14.5142C55.3175 14.5142 56.6582 15.5033 56.6582 16.8704V17.2465C56.6582 17.8127 56.3239 18.0958 55.4125 18.1907L48.8428 18.7552C44.432 19.178 41.1717 21.8656 41.1717 26.153C41.1717 30.4889 44.527 33.5041 49.2739 33.5041C53.0145 33.5041 55.4125 31.7144 56.6582 29.8295V32.5098C56.6582 32.8001 56.8956 33.0347 57.1915 33.0347H62.4553C62.5968 33.0347 62.7325 32.9795 62.8325 32.8814C62.9325 32.7833 62.9887 32.6503 62.9887 32.5116V18.4722C62.9887 11.9219 59.4874 8.90628 52.4866 8.90628H52.4884ZM36.8285 0.523153V32.4632C36.8285 32.7517 36.591 32.9864 36.2952 32.9864H30.9838C30.8424 32.9864 30.7067 32.9312 30.6067 32.8331C30.5067 32.735 30.4505 32.602 30.4505 32.4632V0.514186C30.4505 0.229311 30.6843 0 30.9729 0H36.2952C36.5892 0 36.8285 0.232903 36.8285 0.523153ZM12.8034 27.4968C9.20531 27.4968 6.52043 24.9991 6.52043 21.1829C6.52043 17.3666 9.20713 14.8672 12.8034 14.8672C16.4015 14.8672 19.037 17.2717 19.037 21.1829C19.037 25.0457 16.3997 27.4968 12.8034 27.4968ZM24.6899 9.40078H19.4334C19.29 9.40078 19.1525 9.45683 19.0512 9.55628C18.9498 9.65574 18.8927 9.7905 18.8927 9.93115V12.7011C17.5503 10.5798 14.7686 8.83476 11.0774 8.83476C5.13049 8.83476 0 13.2189 0 21.0897C0 28.9103 4.89119 33.1979 11.2691 33.1979C14.7211 33.1979 17.406 31.7842 18.9895 29.5697V31.0782C18.9895 34.4698 17.3092 37.1574 11.9395 37.1574C9.23997 37.1574 7.07199 36.2741 5.17066 34.6204C5.11389 34.569 5.04618 34.5306 4.97245 34.508C4.89873 34.4853 4.82088 34.4789 4.74437 34.4894C4.66785 34.4998 4.59461 34.5268 4.53 34.5683C4.46539 34.6099 4.41099 34.6651 4.3707 34.7297L1.9872 38.6571C1.67853 39.1641 1.72046 39.4508 1.91407 39.6174C4.36516 41.7083 7.55054 43 12.1806 43C22.2498 43 25.2232 37.4889 25.2232 31.408V9.9259C25.2235 9.85705 25.2099 9.78881 25.1832 9.72513C25.1565 9.66145 25.1173 9.60352 25.0677 9.55475C25.0182 9.50598 24.9593 9.46721 24.8945 9.44081C24.8296 9.4144 24.7601 9.40078 24.6899 9.40078Z" />
                </svg>
            </Glassdoor>
            <Linkedin>
                <svg width="209" height="52" viewBox="0 0 209 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M205.858 48.728C205.86 48.728 205.862 48.728 205.867 48.728C206.38 48.728 206.803 48.3058 206.803 47.7927C206.803 47.7747 206.803 47.7568 206.801 47.7387C206.801 47.0373 206.378 46.702 205.507 46.702H204.103V50.3754H204.632V48.7741H205.281L205.295 48.7935L206.303 50.3754H206.869L205.785 48.7382L205.858 48.728ZM205.245 48.36H204.632V47.1184H205.41C205.81 47.1184 206.267 47.1837 206.267 47.7085C206.267 48.3119 205.806 48.36 205.243 48.36H205.245ZM0 8.56313H7.7995V36.9395H22.2393V44.1286H0V8.56313ZM25.6875 20.0141H33.1806V44.1153H25.6875V20.0141ZM29.4339 8.03223C31.8182 8.03268 33.78 9.99227 33.78 12.3737C33.78 14.7553 31.8178 16.7151 29.4333 16.7151C27.0488 16.7151 25.0866 14.7553 25.0866 12.3737C25.0866 9.99205 27.0488 8.03223 29.4333 8.03223C29.4335 8.03223 29.4337 8.03223 29.4339 8.03223ZM64.5245 8.5577H72.0175V29.8125L80.5096 20.0033H89.6963L79.8617 31.1613L89.4893 44.1255H80.0717L72.1174 32.212H72.019V44.1239H64.526L64.5245 8.5577ZM37.3352 20.0166H44.5308V23.3102H44.633C46.0954 20.8078 48.8289 19.3079 51.728 19.417C59.3264 19.417 60.7249 24.4102 60.7249 30.8969V44.1137H53.2319V32.3961C53.2319 29.5991 53.1805 26.0036 49.3294 26.0036C45.4347 26.0036 44.8337 29.0494 44.8337 32.1926V44.1108H37.3407L37.3352 20.0166Z" fill="#0A66C2" />
                    <path d="M105.474 28.8649C105.475 28.8296 105.475 28.7942 105.475 28.7589C105.475 26.2973 103.447 24.2718 100.983 24.2718C100.946 24.2718 100.91 24.2722 100.874 24.2731C98.1673 24.1048 95.7918 26.1647 95.5788 28.8649H105.474ZM111.821 39.5448C109.301 42.5969 105.535 44.3593 101.575 44.3401C94.0816 44.3401 88.0826 39.3444 88.0826 31.6088C88.0826 23.8733 94.0809 18.8801 101.575 18.8801C108.578 18.8801 112.97 23.8692 112.97 31.6088V33.9554H95.5788C96.0244 36.6944 98.448 38.7082 101.226 38.6477C103.39 38.6341 105.407 37.5238 106.573 35.7024L111.821 39.5448ZM128.588 25.4431C124.842 25.4431 122.594 27.9418 122.594 31.5824C122.594 35.223 124.841 37.7237 128.588 37.7237C132.336 37.7237 134.588 35.2291 134.588 31.5824C134.588 27.9354 132.339 25.4431 128.588 25.4431ZM141.486 43.7141H134.588V40.5178H134.486C132.733 42.8725 129.974 44.278 127.037 44.3128C119.837 44.3128 115.095 39.123 115.095 31.7841C115.095 25.0442 119.292 18.855 126.19 18.855C129.292 18.855 132.188 19.7024 133.887 22.0512H133.986V8.15854H141.485L141.486 43.7141ZM192.071 43.7281H184.578V32.008C184.578 29.2132 184.528 25.6155 180.681 25.6155C176.778 25.6155 176.181 28.6604 176.181 31.8045V43.7272H168.688V19.626H175.881V22.9197H175.982C177.447 20.4185 180.18 18.9191 183.079 19.0267C190.674 19.0267 192.074 24.0158 192.074 30.5066L192.071 43.7281ZM160.234 16.3315C160.233 16.3315 160.233 16.3315 160.233 16.3315C157.847 16.3315 155.885 14.3712 155.885 11.9887C155.885 9.60621 157.847 7.64572 160.233 7.64572C162.618 7.64572 164.581 9.60576 164.581 11.9878C164.581 11.988 164.581 11.9883 164.581 11.9887C164.581 14.3708 162.619 16.3313 160.234 16.3315ZM163.98 43.7281H156.479V19.626H163.98V43.7281ZM195.806 0.695867H152.714C150.691 0.67305 149.007 2.31591 148.983 4.33627V47.5549C149.006 49.5764 150.69 51.221 152.714 51.1994H195.806C197.835 51.2249 199.525 49.5804 199.552 47.5549V4.33333C199.525 2.30868 197.833 0.666045 195.806 0.692703V0.695867ZM205.309 44.669C203.429 44.6871 201.893 46.236 201.893 48.1129C201.893 50.0025 203.449 51.5572 205.34 51.5572C207.233 51.5572 208.79 50.0025 208.79 48.1129C208.79 46.236 207.254 44.6871 205.374 44.669H205.309ZM205.309 51.1628C205.29 51.163 205.275 51.1632 205.256 51.1632C203.599 51.1632 202.235 49.8 202.235 48.1432C202.235 46.4865 203.599 45.1231 205.256 45.1231C206.896 45.1231 208.254 46.4553 208.281 48.0928V48.1436C208.315 49.7641 207.009 51.1262 205.388 51.1612H205.309" fill="#0A66C2" />
                </svg>
            </Linkedin>
            <Instagram>
                <svg width="229" height="54" viewBox="0 0 229 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.4146 6.14718C65.0568 7.5495 61.3654 11.5112 60.1995 16.484C58.7231 22.7848 64.8674 25.4492 65.3713 24.5755C65.9645 23.549 64.2703 23.2019 63.9216 19.9328C63.4709 15.7104 65.4384 10.9924 67.9145 8.92232C68.3748 8.53771 68.3529 9.07302 68.3529 10.0632C68.3529 11.8338 68.2549 27.7289 68.2549 31.0463C68.2549 35.535 68.069 36.9525 67.7353 38.3531C67.3971 39.7725 66.8535 40.7316 67.2654 41.1011C67.7257 41.5143 69.6908 40.5313 70.8284 38.9472C72.1926 37.0473 72.6701 34.7656 72.7558 32.2878C72.8594 29.3008 72.855 24.561 72.8594 21.8575C72.8635 19.378 72.9013 12.1174 72.8158 7.75261C72.7949 6.68201 69.8189 5.5588 68.4145 6.14588L68.4146 6.14718ZM187.652 27.1542C187.543 29.4878 187.026 31.3119 186.383 32.5984C185.139 35.0892 182.558 35.8626 181.462 32.2821C180.864 30.3303 180.836 27.0707 181.266 24.3471C181.703 21.5724 182.924 19.477 184.945 19.666C186.938 19.8528 187.871 22.4155 187.652 27.1541V27.1542ZM154.046 41.6325C154.019 45.5099 153.407 48.9096 152.095 49.897C150.235 51.2971 147.735 50.2468 148.252 47.4175C148.71 44.9137 150.877 42.3568 154.051 39.2325C154.051 39.2325 154.058 39.945 154.046 41.6325H154.046ZM153.538 27.1317C153.424 29.2571 152.872 31.3923 152.269 32.5987C151.025 35.0895 148.425 35.8681 147.348 32.2824C146.611 29.8324 146.787 26.6615 147.152 24.6636C147.625 22.0714 148.771 19.6665 150.831 19.6665C152.833 19.6665 153.82 21.8579 153.538 27.1318V27.1317ZM134.07 27.0991C133.948 29.3502 133.507 31.232 132.801 32.5987C131.523 35.0723 128.995 35.8568 127.88 32.2824C127.076 29.7049 127.35 26.1904 127.684 24.2919C128.18 21.4747 129.423 19.4773 131.363 19.6665C133.355 19.8608 134.324 22.4158 134.07 27.0993V27.0991ZM223.287 29.7285C222.8 29.7285 222.577 30.2294 222.394 31.0726C221.756 34.0045 221.085 34.6666 220.221 34.6666C219.255 34.6666 218.387 33.2148 218.164 30.3087C217.988 28.0235 218.016 23.8165 218.241 19.6316C218.286 18.7717 218.049 17.921 215.737 17.0832C214.743 16.7228 213.297 16.1922 212.577 17.9259C210.543 22.8241 209.747 26.7128 209.56 28.2925C209.55 28.3743 209.45 28.391 209.432 28.2C209.313 26.9347 209.046 24.6355 209.013 19.8049C209.006 18.8624 208.806 18.0601 207.763 17.4033C207.087 16.9771 205.032 16.2233 204.293 17.1201C203.652 17.8535 202.91 19.8272 202.138 22.1667C201.511 24.0683 201.075 25.3546 201.075 25.3546C201.075 25.3546 201.083 20.2239 201.091 18.2777C201.094 17.5435 200.589 17.2989 200.437 17.2545C199.752 17.0562 198.402 16.7247 197.829 16.7247C197.122 16.7247 196.949 17.119 196.949 17.6934C196.949 17.7686 196.838 24.4485 196.838 29.1193C196.838 29.3222 196.838 29.5436 196.84 29.7787C196.449 31.9255 195.181 34.8397 193.802 34.8397C192.421 34.8397 191.769 33.6213 191.769 28.053C191.769 24.8045 191.867 23.392 191.915 21.0425C191.943 19.6893 191.997 18.6501 191.994 18.4142C191.984 17.691 190.73 17.3265 190.147 17.1918C189.561 17.056 189.052 17.0034 188.654 17.026C188.092 17.0576 187.693 17.426 187.693 17.9327C187.693 18.2043 187.697 18.7209 187.697 18.7209C186.972 17.5844 185.806 16.7934 185.03 16.5642C182.941 15.9452 180.761 16.4937 179.116 18.7895C177.809 20.6136 177.022 22.6796 176.712 25.6478C176.485 27.8179 176.559 30.0184 176.962 31.8794C176.475 33.9794 175.571 34.8397 174.581 34.8397C173.145 34.8397 172.103 32.5 172.224 28.4535C172.304 25.792 172.838 23.9243 173.421 21.2221C173.67 20.0703 173.468 19.4672 172.961 18.8892C172.496 18.3591 171.505 18.0883 170.081 18.4214C169.066 18.6589 167.616 18.9143 166.288 19.1104C166.288 19.1104 166.369 18.7917 166.434 18.2297C166.779 15.2823 163.569 15.5215 162.545 16.4628C161.934 17.0249 161.518 17.6877 161.36 18.8796C161.109 20.7709 162.655 21.663 162.655 21.663C162.148 23.9797 160.905 27.006 159.621 29.1941C158.933 30.3664 158.407 31.2351 157.728 32.1585C157.726 31.8146 157.724 31.4708 157.723 31.1286C157.707 26.258 157.772 22.4246 157.801 21.043C157.829 19.6897 157.883 18.6781 157.88 18.4423C157.872 17.9133 157.563 17.7135 156.919 17.4606C156.349 17.2369 155.676 17.0821 154.978 17.0281C154.096 16.9595 153.565 17.4259 153.579 17.9775C153.582 18.0816 153.582 18.7211 153.582 18.7211C152.857 17.5846 151.691 16.7937 150.915 16.5644C148.826 15.9456 146.646 16.4942 145.002 18.7897C143.695 20.6138 142.839 23.1735 142.597 25.6254C142.371 27.9107 142.413 29.8527 142.72 31.4887C142.388 33.1268 141.433 34.8399 140.353 34.8399C138.972 34.8399 138.187 33.6215 138.187 28.0532C138.187 24.8047 138.285 23.3922 138.333 21.043C138.361 19.6897 138.414 18.6503 138.411 18.4147C138.401 17.6915 137.148 17.327 136.565 17.192C135.954 17.0512 135.427 16.9995 135.023 17.0292C134.489 17.0689 134.114 17.5458 134.114 17.9014V18.7211C133.389 17.5846 132.223 16.7937 131.447 16.5644C129.358 15.9456 127.19 16.503 125.534 18.7897C124.453 20.2807 123.579 21.9337 123.129 25.5929C122.999 26.6504 122.941 27.6406 122.949 28.5662C122.518 31.1945 120.615 34.2239 119.059 34.2239C118.148 34.2239 117.281 32.4615 117.281 28.7055C117.281 23.7024 117.591 16.579 117.644 15.8925C117.644 15.8925 119.61 15.8591 119.991 15.8547C120.972 15.844 121.86 15.8671 123.167 15.8005C123.822 15.7671 124.453 13.4209 123.777 13.1306C123.47 12.9991 121.304 12.884 120.445 12.8658C119.723 12.8495 117.713 12.7011 117.713 12.7011C117.713 12.7011 117.893 7.97287 117.935 7.4734C117.971 7.05711 117.431 6.84278 117.121 6.71272C116.369 6.39508 115.695 6.24299 114.897 6.07879C113.794 5.85179 113.294 6.07383 113.196 7.00255C113.049 8.41204 112.972 12.5404 112.972 12.5404C112.163 12.5404 109.398 12.3826 108.589 12.3826C107.837 12.3826 107.025 15.6101 108.065 15.6498C109.261 15.696 111.346 15.736 112.729 15.7776C112.729 15.7776 112.667 23.0183 112.667 25.2538C112.667 25.4916 112.669 25.7206 112.67 25.9429C111.909 29.8991 109.229 32.0361 109.229 32.0361C109.805 29.4189 108.629 27.4534 106.512 25.7897C105.732 25.1766 104.192 24.0159 102.468 22.744C102.468 22.744 103.466 21.7627 104.351 19.7884C104.979 18.39 105.006 16.7896 103.466 16.4367C100.923 15.8531 98.8263 17.7166 98.2008 19.706C97.7162 21.2472 97.9747 22.3908 98.924 23.5788C98.9933 23.6656 99.0684 23.7543 99.146 23.8435C98.5719 24.9475 97.7833 26.4339 97.1153 27.5865C95.2613 30.7867 93.8608 33.3181 92.8023 33.3181C91.9562 33.3181 91.9676 30.7481 91.9676 28.3419C91.9676 26.2676 92.1211 23.149 92.2437 19.9201C92.2843 18.8523 91.7491 18.2439 90.852 17.6929C90.3069 17.3582 89.1435 16.7 88.4697 16.7C87.4612 16.7 84.5516 16.8369 81.8024 24.7712C81.4559 25.7712 80.7753 27.5934 80.7753 27.5934L80.8339 18.0522C80.8339 17.8285 80.7144 17.6122 80.441 17.4643C79.9777 17.2133 78.7404 16.7 77.6401 16.7C77.1159 16.7 76.8543 16.9433 76.8543 17.4282L76.7584 32.3555C76.7584 33.4897 76.788 34.8128 76.9004 35.3915C77.0124 35.9709 77.1938 36.4423 77.4185 36.7227C77.6428 37.0027 77.9024 37.2162 78.3303 37.3043C78.7285 37.3861 80.9093 37.6655 81.0226 36.834C81.1584 35.8376 81.1636 34.7598 82.3087 30.7402C84.0914 24.4821 86.4157 21.4288 87.5084 20.3444C87.6994 20.1548 87.9176 20.1435 87.9071 20.4537C87.8604 21.8258 87.6964 25.2541 87.5859 28.1667C87.29 35.9612 88.7112 37.406 90.7422 37.406C92.296 37.406 94.4863 35.8656 96.8343 31.9665C98.2981 29.5366 99.7194 27.154 100.741 25.4368C101.452 26.094 102.251 26.8014 103.049 27.5571C104.903 29.3132 105.512 30.9818 105.108 32.5649C104.799 33.775 103.636 35.0222 101.565 33.81C100.961 33.4564 100.703 33.1831 100.096 32.7844C99.7702 32.5702 99.2723 32.5062 98.9739 32.7306C98.1985 33.3139 97.755 34.0558 97.5018 34.9743C97.2555 35.8681 98.1526 36.3406 99.0826 36.7538C99.8834 37.1095 101.605 37.4318 102.702 37.4685C106.979 37.6112 110.405 35.4082 112.79 29.7258C113.217 34.6333 115.034 37.4103 118.191 37.4103C120.301 37.4103 122.417 34.6886 123.343 32.0111C123.608 33.1025 124.002 34.0516 124.509 34.8542C126.942 38.6994 131.661 37.8718 134.031 34.6066C134.764 33.5977 134.876 33.2351 134.876 33.2351C135.221 36.3183 137.71 37.3955 139.135 37.3955C140.731 37.3955 142.378 36.6428 143.533 34.049C143.668 34.3305 143.816 34.5993 143.977 34.8541C146.41 38.6993 151.129 37.8717 153.499 34.6065C153.611 34.4534 153.708 34.3144 153.793 34.1897L153.862 36.2149C153.862 36.2149 152.51 37.4525 151.68 38.2117C148.027 41.5558 145.249 44.0929 145.044 47.0474C144.782 50.8146 147.844 52.2147 150.161 52.3982C152.622 52.593 154.728 51.237 156.024 49.3393C157.163 47.6689 157.908 44.0739 157.854 40.5232C157.832 39.1014 157.796 37.2935 157.768 35.3556C159.052 33.8679 160.498 31.9876 161.83 29.7866C163.282 27.388 164.838 24.1669 165.634 21.6601C165.634 21.6601 166.986 21.6717 168.429 21.5774C168.89 21.5474 169.023 21.6413 168.937 21.9789C168.834 22.3866 167.115 29.0036 168.684 33.4117C169.758 36.4292 172.18 37.4001 173.615 37.4001C175.296 37.4001 176.904 36.1339 177.765 34.2536C177.869 34.4632 177.978 34.6661 178.096 34.8533C180.529 38.6985 185.231 37.8659 187.618 34.6057C188.157 33.8701 188.462 33.2342 188.462 33.2342C188.974 36.4251 191.462 37.4108 192.886 37.4108C194.37 37.4108 195.778 36.8039 196.921 34.1065C196.969 35.2941 197.044 36.2653 197.163 36.5715C197.235 36.7587 197.657 36.9938 197.964 37.1073C199.321 37.6095 200.706 37.372 201.218 37.2687C201.573 37.1971 201.849 36.913 201.887 36.1796C201.987 34.2539 201.926 31.0184 202.511 28.6138C203.493 24.5782 204.409 23.0128 204.844 22.2378C205.087 21.8036 205.362 21.732 205.371 22.1915C205.392 23.1214 205.438 25.8519 205.819 29.5205C206.098 32.2186 206.472 33.8133 206.759 34.3181C207.577 35.7614 208.588 35.8298 209.412 35.8298C209.936 35.8298 211.031 35.6853 210.933 34.7668C210.885 34.3191 210.969 31.5523 211.938 27.5765C212.57 24.9802 213.624 22.6342 214.004 21.7766C214.145 21.4603 214.21 21.7097 214.208 21.7582C214.128 23.5462 213.948 29.3946 214.678 32.5932C215.668 36.9263 218.531 37.4112 219.528 37.4112C221.658 37.4112 223.4 35.7948 223.987 31.5416C224.128 30.5181 223.919 29.7277 223.292 29.7277" fill="#262626" />
                    <path d="M23.0112 0.348633C13.5529 0.348633 10.7867 0.35839 10.249 0.402996C8.30799 0.564345 7.10017 0.869966 5.78434 1.52512C4.77028 2.02868 3.97053 2.61239 3.18123 3.43063C1.74378 4.92285 0.87259 6.75866 0.557221 8.94088C0.403892 10.0003 0.359288 10.2163 0.350227 15.6276C0.346743 17.4314 0.350227 19.8052 0.350227 22.9893C0.350227 32.4403 0.360682 35.2037 0.405983 35.7404C0.562797 37.6292 0.859 38.8175 1.48625 40.1174C2.68501 42.6056 4.97448 44.4734 7.67167 45.1704C8.60558 45.4109 9.63707 45.5433 10.9613 45.606C11.5223 45.6304 17.2408 45.6478 22.9627 45.6478C28.6847 45.6478 34.4066 45.6409 34.9537 45.613C36.487 45.5409 37.3774 45.4213 38.3618 45.1669C41.0764 44.4665 43.3241 42.6265 44.5472 40.1034C45.1623 38.835 45.4742 37.6013 45.6153 35.8111C45.646 35.4208 45.6589 29.198 45.6589 22.9834C45.6589 16.7678 45.6449 10.5565 45.6143 10.1661C45.4714 8.34706 45.1595 7.12388 44.5246 5.831C44.0036 4.77265 43.4251 3.98228 42.5853 3.17415C41.0865 1.74257 39.2535 0.87136 37.0693 0.55633C36.011 0.403345 35.8002 0.358042 30.3849 0.348633H23.0112Z" fill="url(#paint0_radial_659:2999)" />
                    <path d="M23.0112 0.348633C13.5529 0.348633 10.7867 0.35839 10.249 0.402996C8.30799 0.564345 7.10017 0.869966 5.78434 1.52512C4.77028 2.02868 3.97053 2.61239 3.18123 3.43063C1.74378 4.92285 0.87259 6.75866 0.557221 8.94088C0.403892 10.0003 0.359288 10.2163 0.350227 15.6276C0.346743 17.4314 0.350227 19.8052 0.350227 22.9893C0.350227 32.4403 0.360682 35.2037 0.405983 35.7404C0.562797 37.6292 0.859 38.8175 1.48625 40.1174C2.68501 42.6056 4.97448 44.4734 7.67167 45.1704C8.60558 45.4109 9.63707 45.5433 10.9613 45.606C11.5223 45.6304 17.2408 45.6478 22.9627 45.6478C28.6847 45.6478 34.4066 45.6409 34.9537 45.613C36.487 45.5409 37.3774 45.4213 38.3618 45.1669C41.0764 44.4665 43.3241 42.6265 44.5472 40.1034C45.1623 38.835 45.4742 37.6013 45.6153 35.8111C45.646 35.4208 45.6589 29.198 45.6589 22.9834C45.6589 16.7678 45.6449 10.5565 45.6143 10.1661C45.4714 8.34706 45.1595 7.12388 44.5246 5.831C44.0036 4.77265 43.4251 3.98228 42.5853 3.17415C41.0865 1.74257 39.2535 0.87136 37.0693 0.55633C36.011 0.403345 35.8002 0.358042 30.3849 0.348633H23.0112Z" fill="url(#paint1_radial_659:2999)" />
                    <path d="M23.0007 6.27295C18.458 6.27295 17.8879 6.29281 16.1037 6.37401C14.323 6.45556 13.1075 6.73748 12.044 7.15113C10.9439 7.57837 10.0106 8.14989 9.08091 9.07999C8.15048 10.0098 7.57898 10.943 7.15036 12.0428C6.73567 13.1067 6.45341 14.3226 6.37326 16.1027C6.29346 17.8869 6.27255 18.4574 6.27255 23.0002C6.27255 27.5431 6.29276 28.1115 6.37361 29.8957C6.4555 31.6765 6.73742 32.892 7.15071 33.9555C7.57829 35.0557 8.14978 35.9889 9.07986 36.9187C10.0092 37.8492 10.9425 38.4221 12.0419 38.8493C13.1061 39.263 14.322 39.5449 16.1023 39.6264C17.8865 39.7076 18.4563 39.7275 22.9986 39.7275C27.5417 39.7275 28.11 39.7076 29.8942 39.6264C31.6749 39.5449 32.8918 39.263 33.9561 38.8493C35.0558 38.4221 35.9877 37.8492 36.917 36.9187C37.8475 35.9889 38.419 35.0557 38.8476 33.9559C39.2588 32.892 39.541 31.6761 39.6247 29.896C39.7048 28.1118 39.7257 27.5431 39.7257 23.0002C39.7257 18.4574 39.7048 17.8873 39.6247 16.103C39.541 14.3223 39.2588 13.1067 38.8476 12.0432C38.419 10.943 37.8475 10.0098 36.917 9.07999C35.9866 8.14954 35.0562 7.57803 33.955 7.15113C32.8887 6.73748 31.6725 6.45556 29.8918 6.37401C28.1076 6.29281 27.5396 6.27295 22.9955 6.27295H23.0007ZM21.5002 9.28734C21.9455 9.28665 22.4425 9.28734 23.0007 9.28734C27.4668 9.28734 27.9961 9.30337 29.7597 9.38353C31.3906 9.4581 32.2757 9.73062 32.8653 9.95957C33.6459 10.2628 34.2024 10.6252 34.7875 11.2106C35.3729 11.7961 35.7354 12.3537 36.0392 13.1343C36.2682 13.7232 36.541 14.6084 36.6153 16.2393C36.6954 18.0026 36.7128 18.5323 36.7128 22.9964C36.7128 27.4605 36.6954 27.9902 36.6153 29.7535C36.5407 31.3844 36.2682 32.2696 36.0392 32.8585C35.7361 33.6391 35.3729 34.195 34.7875 34.7801C34.2021 35.3655 33.6463 35.7279 32.8653 36.0311C32.2764 36.2611 31.3906 36.5329 29.7597 36.6075C27.9964 36.6877 27.4668 36.7051 23.0007 36.7051C18.5343 36.7051 18.005 36.6877 16.2417 36.6075C14.6108 36.5322 13.7257 36.2597 13.1358 36.0308C12.3552 35.7276 11.7976 35.3652 11.2122 34.7797C10.6267 34.1943 10.2643 33.6381 9.96046 32.8571C9.73151 32.2682 9.45865 31.383 9.38443 29.7521C9.30428 27.9888 9.28825 27.4591 9.28825 22.9922C9.28825 18.5253 9.30428 17.9984 9.38443 16.2351C9.459 14.6042 9.73151 13.719 9.96046 13.1294C10.2636 12.3488 10.6267 11.7912 11.2122 11.2058C11.7976 10.6203 12.3552 10.2579 13.1358 9.95399C13.7254 9.72399 14.6108 9.45218 16.2417 9.37725C17.7848 9.30756 18.3827 9.28665 21.5002 9.28316V9.28734ZM31.9293 12.0648C30.8212 12.0648 29.9221 12.9628 29.9221 14.0713C29.9221 15.1795 30.8212 16.0786 31.9293 16.0786C33.0375 16.0786 33.9365 15.1795 33.9365 14.0713C33.9365 12.9632 33.0375 12.0641 31.9293 12.0641V12.0648ZM23.0007 14.4101C18.2569 14.4101 14.4108 18.2563 14.4108 23.0002C14.4108 27.7441 18.2569 31.5886 23.0007 31.5886C27.7445 31.5886 31.5892 27.7441 31.5892 23.0002C31.5892 18.2563 27.7441 14.4101 23.0004 14.4101H23.0007ZM23.0007 17.4245C26.0798 17.4245 28.5763 19.9207 28.5763 23.0002C28.5763 26.0794 26.0798 28.576 23.0007 28.576C19.9212 28.576 17.4251 26.0794 17.4251 23.0002C17.4251 19.9207 19.9212 17.4245 23.0007 17.4245Z" fill="white" />
                    <defs>
                        <radialGradient id="paint0_radial_659:2999" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.3843 49.1368) rotate(-90) scale(44.8949 41.7659)">
                            <stop stopColor="#FFDD55" />
                            <stop offset="0.1" stopColor="#FFDD55" />
                            <stop offset="0.5" stopColor="#FF543E" />
                            <stop offset="1" stopColor="#C837AB" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_659:2999" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-7.24102 3.61191) rotate(78.678) scale(20.0684 82.7412)">
                            <stop stopColor="#3771C8" />
                            <stop offset="0.128" stopColor="#3771C8" />
                            <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </Instagram>
        </WrapperSocials>
    </Section >
);

const Section = styled.section`
    margin: ${GRID(7)} auto ${GRID(12.75)};
    display: flex;
    max-width: ${GRID(180)};
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-width: 1024px) {
        margin: ${GRID(15)} auto 1000px};
    }
`;

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 ${GRID(2)};
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 36px;
        line-height: 54px;
    }
`;


const Description = styled.p`
    color: ${COLORS.GRAY_4};
    margin: 0 0 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        margin: 0 0 60px;
    }
`;

const WrapperSocials = styled.div`
    gap: ${GRID(3)};
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const ImageBox = styled.a`
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    width: 337px;
    height: 169px;
    border: 1px solid #EFF0F2;
    box-sizing: border-box;
    border-radius: 24px;

    svg {
        z-index: 1;

        path {
            filter: grayscale(100%);
        }
    }
    
    &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: grayscale(100%);
        content: "";
        position: absolute;
        border-radius: 24px;
        background-size: cover;
    }

    &:hover,
    &:focus,
    &:active {
        svg path {
            filter: none;
        }

        ::before {
            filter: none;
        }
    }
`;

const Glassdoor = styled(ImageBox)`
    &::before {
        background-image: url("./images/glassdoor-bg.svg");
    }

    &:hover,
    &:focus,
    &:active {
        box-shadow: 0px 3px 8px rgb(12 170 65 / 30%);
    }
`

const Linkedin = styled(ImageBox)`
    &::before {
        background-image: url("./images/linkedin-bg.svg");
    }

    &:hover,
    &:focus,
    &:active {
        box-shadow: 0px 3px 8px rgb(10 102 194 / 30%);
    }
`;

const Instagram = styled(ImageBox)`
    &::before {
        background-image: url("./images/instagram-bg.svg");
    }

    &:hover,
    &:focus,
    &:active {
        box-shadow: 0px 3px 8px #3771C8
    }
`;


export default Socials
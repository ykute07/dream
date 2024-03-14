import { StyledLogo } from './Logo.css';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

function Logo(): JSX.Element {
  const theme = useTheme();

  return (
    <StyledLogo>
      <Link to="/">
        <svg preserveAspectRatio="xMidYMid" version="1.0" viewBox="0 0 555 157" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(.1 0 0 -.1 -24 180)">
            <path
              fill={theme.colors.font.light}
              d="M 2220.009 1371.516 L 2220.009 741.516 L 2420.019 741.516 L 2420.019 897.526 L 2468.007 943.522 L 2515.014 990.529 L 2580.009 866.529 L 2645.019 741.519 L 2768.009 741.519 C 2836.009 741.519 2889.009 744.517 2887.009 749.517 C 2884.009 753.517 2832.007 838.512 2771.009 939.507 C 2710.009 1039.507 2660.019 1127.507 2660.019 1134.507 C 2660.019 1140.507 2711.023 1196.505 2772.019 1258.507 L 2885.019 1371.517 L 2615.019 1371.517 L 2520.009 1259.517 L 2425.014 1147.527 L 2422.011 1259.517 L 2419.008 1371.517 L 2320.014 1371.517 L 2220.009 1371.516 Z M 2940.009 1371.516 L 2940.009 741.516 L 3110.019 741.516 L 3110.019 794.514 L 3133.017 773.523 C 3207.017 704.523 3348.017 722.514 3404.017 809.514 C 3455.017 886.514 3464.016 1029.504 3423.016 1108.504 C 3375.016 1201.504 3266.026 1237.504 3166.026 1193.509 L 3120.015 1172.503 L 3120.015 1371.503 L 3030.015 1371.503 L 2940.009 1371.516 Z M 4323.009 1370.52 C 4318.009 1370.52 4278.009 1351.523 4233.009 1328.523 L 4150.011 1287.522 L 4150.011 1244.514 C 4150.011 1202.514 4150.011 1201.521 4115.016 1201.521 L 4080.006 1201.521 L 4080.006 1071.521 L 4150.011 1071.521 L 4150.011 950.521 C 4150.011 766.521 4177.015 731.531 4317.021 731.531 C 4434.021 731.531 4442.011 739.522 4424.011 831.521 C 4418.011 860.521 4415.009 862.522 4387.009 857.522 C 4337.009 847.522 4330.012 862.532 4330.012 972.522 L 4330.012 1071.516 L 4430.002 1071.516 L 4430.002 1201.506 L 4330.012 1201.506 L 4330.012 1286.511 C 4330.012 1333.511 4327.01 1371.505 4323.01 1370.505 L 4323.009 1370.52 Z M 3760.989 1210.63 C 3719.741 1210.004 3680 1205.505 3656.999 1197.505 C 3556.999 1161.505 3504.989 1081.495 3505.989 966.495 C 3506.989 812.495 3597.985 731.505 3768.989 731.505 C 3889.989 731.505 3948.999 756.495 4002.999 831.495 L 4029.996 869.493 L 4002.999 875.499 C 3986.999 878.499 3945.996 883.496 3909.996 887.496 C 3856.996 892.496 3840.997 890.502 3830.997 878.502 C 3791.997 831.502 3689.987 863.506 3689.987 922.506 C 3689.987 927.506 3765.989 931.5 3865.987 931.5 L 4042.987 931.5 L 4036.996 991.5 C 4024.996 1099.5 3963.99 1177.5 3873.986 1200.5 C 3844.986 1208 3802.235 1211.248 3760.986 1210.622 L 3760.989 1210.63 Z M 4734.989 1208.506 C 4620.989 1212.506 4573.009 1199.501 4527.009 1153.501 C 4472.009 1098.501 4483.999 1001.501 4551.999 957.501 C 4564.999 949.501 4619.003 933.502 4674.009 923.502 C 4728.009 912.502 4779.009 896.507 4787.009 888.507 C 4800.009 875.507 4800.003 871.501 4781.003 852.501 C 4751.003 822.501 4704.997 825.496 4673.003 857.496 C 4648.003 883.496 4643.013 883.502 4563.003 878.502 C 4517.003 875.502 4475.999 871.497 4473.999 868.497 C 4463.999 859.497 4499 804.501 4530 777.501 C 4574 740.501 4631 728.497 4740 733.497 C 4888 739.497 4960 790.503 4960 886.497 C 4960 972.497 4906.993 1013.497 4763.99 1036.497 C 4716.99 1044.497 4674.991 1053.492 4669.991 1056.492 C 4652.991 1067.492 4658.981 1099.502 4679.981 1106.502 C 4707.981 1115.502 4759.993 1102.496 4766.993 1085.496 C 4772.993 1070.496 4843.983 1066.498 4911.983 1077.498 L 4949.981 1084.5 L 4927.979 1123.494 C 4915.979 1144.494 4889.986 1172.49 4869.986 1184.49 C 4840.986 1202.49 4816.986 1206.499 4734.986 1208.499 L 4734.989 1208.506 Z M 3197.989 1091.506 C 3274.989 1091.506 3291.995 903.506 3218.995 862.506 C 3194.995 849.506 3189.993 849.498 3166.993 864.498 C 3114.993 898.498 3107.992 1020.508 3155.992 1068.508 C 3168.992 1080.508 3187.989 1091.506 3197.989 1091.506 Z M 3770.219 1089.968 C 3789.379 1090.573 3806.493 1084.25 3823.993 1070.5 C 3871.993 1033.5 3858.999 1021.501 3769.999 1021.501 C 3725.999 1021.501 3689.989 1024.507 3689.989 1027.507 C 3689.989 1043.507 3713.997 1073.501 3732.997 1081.501 C 3746.497 1086.751 3758.723 1089.604 3770.219 1089.967 L 3770.219 1089.968 Z"
            />

            <g stroke-width="7.5">
              <path
                fill={theme.colors.accent.light}
                d="m250.95 1790.5v-1570h480v197.99l0.9961 197.01 128.01 128.99 129.01 129.01 114.99-229c64-126 138-272.01 165-324.01l49.014-94.995 293-3.0029c259-2 292-0.9924 286 13.008-3 8-33.994 60.996-68.994 117.99-36 56-167 270-292 474.99l-227.01 372.99 128 134c71 74 198.01 207.02 283.01 295l153 159.99h-631.01l-43.989-52.002c-25-29-80.004-93.011-122.01-143.01-42-49-135.99-160-207.99-245l-132.01-154-2.9883 297-2.0068 297h-240z"
              />
            </g>
          </g>
        </svg>
      </Link>
    </StyledLogo>
  );
}

export default Logo;

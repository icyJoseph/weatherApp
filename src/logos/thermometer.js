import React from "react";
import { mapColorToTemp } from "../helpers";

// max temp is 46.818, lower temps need higher numbers, lowest happens at 176
const high = 46.818;
const low = 176;

const max = 150;
const min = -50;

const clamp = temp => {
  if (temp > low) return low;
  if (temp < high) return high;
  return temp;
};

const m = (high - low) / (max - min);
const k = high - m * max;

export const Thermometer = ({ celsius }) => {
  // y = m * x + b -> adjusting for SVG display
  const temp = clamp(celsius * m + k) || 100;
  const { r, g, b, a } = mapColorToTemp(celsius);
  const color = `rgb(${r}, ${g}, ${b}, ${a})`;

  return (
    <g>
      <path
        fill="#E4E7E7"
        d="M173.227,166.308V46.818C173.227,20.965,152.27,0,126.408,0S79.59,20.965,79.59,46.818v119.489
		c-17.107,13.728-28.091,34.777-28.091,58.42c0,41.369,33.541,74.909,74.909,74.909s74.909-33.541,74.909-74.909
		C201.317,201.093,190.335,180.035,173.227,166.308z"
      />
      <path
        fill="#E4E7E7"
        d="M201.317,65.545h37.455c5.178,0,9.364-4.186,9.364-9.364s-4.186-9.364-9.364-9.364h-37.455
		c-5.178,0-9.364,4.186-9.364,9.364S196.139,65.545,201.317,65.545z M238.772,84.273h-37.455c-5.178,0-9.364,4.195-9.364,9.364
		c0,5.178,4.186,9.364,9.364,9.364h37.455c5.178,0,9.364-4.186,9.364-9.364C248.135,88.477,243.951,84.273,238.772,84.273z
		 M238.772,121.727h-37.455c-5.178,0-9.364,4.195-9.364,9.364c0,5.178,4.186,9.364,9.364,9.364h37.455
		c5.178,0,9.364-4.186,9.364-9.364C248.135,125.932,243.951,121.727,238.772,121.727z"
      />
      <path
        strokeWidth="26"
        stroke={`${color}`}
        strokeLinecap="round"
        d={`M126 225 L126 ${temp}`}
      />
      <circle fill={`${color}`} cx="126" cy="225" r="43" />
      <path
        fill="#FFFFFF"
        d="M154.499,176.13V46.818c0-15.516-12.585-28.091-28.091-28.091S98.317,31.303,98.317,46.818V176.13
		c-16.77,9.719-28.091,27.819-28.091,48.597c0,31.022,25.16,56.182,56.182,56.182s56.182-25.16,56.182-56.182
		C182.59,203.949,171.279,185.849,154.499,176.13z M126.408,266.864c-23.231,0-42.136-18.905-42.136-42.136
		c0-14.944,8.081-28.915,21.087-36.453l7.004-4.054V46.818c0-7.744,6.302-14.045,14.045-14.045s14.045,6.302,14.045,14.045V184.22
		l7.004,4.064c13.006,7.538,21.087,21.499,21.087,36.453C168.544,247.968,149.639,266.864,126.408,266.864z"
      />
    </g>
  );
};

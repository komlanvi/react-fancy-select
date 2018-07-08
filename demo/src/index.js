import React, { Component } from "react";
import { render } from "react-dom";

import '../../src/react-fancy-select.css';
import FancySelect from "../../src";

const testData = [
  {
    id: 0,
    value: "AF",
    text: "Afghanistan"
  },
  {
    id: 1,
    value: "AL",
    text: "Albania"
  },
  {
    id: 2,
    value: "DZ",
    text: "Algeria"
  },
  {
    id: 3,
    value: "AS",
    text: "American Samoa"
  },
  {
    id: 4,
    value: "AD",
    text: "Andorra"
  },
  {
    id: 5,
    value: "AO",
    text: "Angola"
  },
  {
    id: 6,
    value: "AI",
    text: "Anguilla"
  },
  {
    id: 7,
    value: "AQ",
    text: "Antarctica"
  },
  {
    id: 8,
    value: "AG",
    text: "Antigua and Barbuda"
  },
  {
    id: 9,
    value: "AR",
    text: "Argentina"
  },
  {
    id: 10,
    value: "AM",
    text: "Armenia"
  },
  {
    id: 11,
    value: "AW",
    text: "Aruba"
  },
  {
    id: 12,
    value: "AU",
    text: "Australia"
  },
  {
    id: 13,
    value: "AT",
    text: "Austria"
  },
  {
    id: 14,
    value: "AZ",
    text: "Azerbaijan"
  },
  {
    id: 15,
    value: "BS",
    text: "Bahamas"
  },
  {
    id: 16,
    value: "BH",
    text: "Bahrain"
  },
  {
    id: 17,
    value: "BD",
    text: "Bangladesh"
  },
  {
    id: 18,
    value: "BB",
    text: "Barbados"
  },
  {
    id: 19,
    value: "BY",
    text: "Belarus"
  },
  {
    id: 20,
    value: "BE",
    text: "Belgium"
  },
  {
    id: 21,
    value: "BZ",
    text: "Belize"
  },
  {
    id: 22,
    value: "BJ",
    text: "Benin"
  },
  {
    id: 23,
    value: "BM",
    text: "Bermuda"
  },
  {
    id: 24,
    value: "BT",
    text: "Bhutan"
  },
  {
    id: 25,
    value: "BO",
    text: "Bolivia"
  },
  {
    id: 26,
    value: "BA",
    text: "Bosnia and Herzegovina"
  },
  {
    id: 27,
    value: "BW",
    text: "Botswana"
  },
  {
    id: 28,
    value: "BV",
    text: "Bouvet Island"
  },
  {
    id: 29,
    value: "BR",
    text: "Brazil"
  },
  {
    id: 30,
    value: "IO",
    text: "British Indian Ocean Territory"
  },
  {
    id: 31,
    value: "BN",
    text: "Brunei Darussalam"
  },
  {
    id: 32,
    value: "BG",
    text: "Bulgaria"
  },
  {
    id: 33,
    value: "BF",
    text: "Burkina Faso"
  },
  {
    id: 34,
    value: "BI",
    text: "Burundi"
  },
  {
    id: 35,
    value: "KH",
    text: "Cambodia"
  },
  {
    id: 36,
    value: "CM",
    text: "Cameroon"
  },
  {
    id: 37,
    value: "CA",
    text: "Canada"
  },
  {
    id: 38,
    value: "CV",
    text: "Cape Verde"
  },
  {
    id: 39,
    value: "KY",
    text: "Cayman Islands"
  },
  {
    id: 40,
    value: "CF",
    text: "Central African Republic"
  },
  {
    id: 41,
    value: "TD",
    text: "Chad"
  },
  {
    id: 42,
    value: "CL",
    text: "Chile"
  },
  {
    id: 43,
    value: "CN",
    text: "China"
  },
  {
    id: 44,
    value: "CX",
    text: "Christmas Island"
  },
  {
    id: 45,
    value: "CC",
    text: "Cocos (Keeling Islands)"
  },
  {
    id: 46,
    value: "CO",
    text: "Colombia"
  },
  {
    id: 47,
    value: "KM",
    text: "Comoros"
  },
  {
    id: 48,
    value: "CG",
    text: "Congo"
  },
  {
    id: 49,
    value: "CK",
    text: "Cook Islands"
  },
  {
    id: 50,
    value: "CR",
    text: "Costa Rica"
  },
  {
    id: 51,
    value: "CI",
    text: "Cote D'Ivoire (Ivory Coast)"
  },
  {
    id: 52,
    value: "HR",
    text: "Croatia (Hrvatska)"
  },
  {
    id: 53,
    value: "CU",
    text: "Cuba"
  },
  {
    id: 54,
    value: "CY",
    text: "Cyprus"
  },
  {
    id: 55,
    value: "CZ",
    text: "Czech Republic"
  },
  {
    id: 56,
    value: "DK",
    text: "Denmark"
  },
  {
    id: 57,
    value: "DJ",
    text: "Djibouti"
  },
  {
    id: 58,
    value: "DM",
    text: "Dominica"
  },
  {
    id: 59,
    value: "DO",
    text: "Dominican Republic"
  },
  {
    id: 60,
    value: "TP",
    text: "East Timor"
  },
  {
    id: 61,
    value: "EC",
    text: "Ecuador"
  },
  {
    id: 62,
    value: "EG",
    text: "Egypt"
  },
  {
    id: 63,
    value: "SV",
    text: "El Salvador"
  },
  {
    id: 64,
    value: "GQ",
    text: "Equatorial Guinea"
  },
  {
    id: 65,
    value: "ER",
    text: "Eritrea"
  },
  {
    id: 66,
    value: "EE",
    text: "Estonia"
  },
  {
    id: 67,
    value: "ET",
    text: "Ethiopia"
  },
  {
    id: 68,
    value: "FK",
    text: "Falkland Islands (Malvinas)"
  },
  {
    id: 69,
    value: "FO",
    text: "Faroe Islands"
  },
  {
    id: 70,
    value: "FJ",
    text: "Fiji"
  },
  {
    id: 71,
    value: "FI",
    text: "Finland"
  },
  {
    id: 72,
    value: "FR",
    text: "France"
  },
  {
    id: 73,
    value: "FX",
    text: "France, Metropolitan"
  },
  {
    id: 74,
    value: "GF",
    text: "French Guiana"
  },
  {
    id: 75,
    value: "PF",
    text: "French Polynesia"
  },
  {
    id: 76,
    value: "TF",
    text: "French Southern Territories"
  },
  {
    id: 77,
    value: "GA",
    text: "Gabon"
  },
  {
    id: 78,
    value: "GM",
    text: "Gambia"
  },
  {
    id: 79,
    value: "GE",
    text: "Georgia"
  },
  {
    id: 80,
    value: "DE",
    text: "Germany"
  },
  {
    id: 81,
    value: "GH",
    text: "Ghana"
  },
  {
    id: 82,
    value: "GI",
    text: "Gibraltar"
  },
  {
    id: 83,
    value: "GR",
    text: "Greece"
  },
  {
    id: 84,
    value: "GL",
    text: "Greenland"
  },
  {
    id: 85,
    value: "GD",
    text: "Grenada"
  },
  {
    id: 86,
    value: "GP",
    text: "Guadeloupe"
  },
  {
    id: 87,
    value: "GU",
    text: "Guam"
  },
  {
    id: 88,
    value: "GT",
    text: "Guatemala"
  },
  {
    id: 89,
    value: "GN",
    text: "Guinea"
  },
  {
    id: 90,
    value: "GW",
    text: "Guinea-Bissau"
  },
  {
    id: 91,
    value: "GY",
    text: "Guyana"
  },
  {
    id: 92,
    value: "HT",
    text: "Haiti"
  },
  {
    id: 93,
    value: "HM",
    text: "Heard and McDonald Islands"
  },
  {
    id: 94,
    value: "HN",
    text: "Honduras"
  },
  {
    id: 95,
    value: "HK",
    text: "Hong Kong"
  },
  {
    id: 96,
    value: "HU",
    text: "Hungary"
  },
  {
    id: 97,
    value: "IS",
    text: "Iceland"
  },
  {
    id: 98,
    value: "IN",
    text: "India"
  },
  {
    id: 99,
    value: "ID",
    text: "Indonesia"
  },
  {
    id: 100,
    value: "IR",
    text: "Iran"
  },
  {
    id: 101,
    value: "IQ",
    text: "Iraq"
  },
  {
    id: 102,
    value: "IE",
    text: "Ireland"
  },
  {
    id: 103,
    value: "IL",
    text: "Israel"
  },
  {
    id: 104,
    value: "IT",
    text: "Italy"
  },
  {
    id: 105,
    value: "JM",
    text: "Jamaica"
  },
  {
    id: 106,
    value: "JP",
    text: "Japan"
  },
  {
    id: 107,
    value: "JO",
    text: "Jordan"
  },
  {
    id: 108,
    value: "KZ",
    text: "Kazakhstan"
  },
  {
    id: 109,
    value: "KE",
    text: "Kenya"
  },
  {
    id: 110,
    value: "KI",
    text: "Kiribati"
  },
  {
    id: 111,
    value: "KP",
    text: "Korea (North)"
  },
  {
    id: 112,
    value: "KR",
    text: "Korea (South)"
  },
  {
    id: 113,
    value: "KW",
    text: "Kuwait"
  },
  {
    id: 114,
    value: "KG",
    text: "Kyrgyzstan"
  },
  {
    id: 115,
    value: "LA",
    text: "Laos"
  },
  {
    id: 116,
    value: "LV",
    text: "Latvia"
  },
  {
    id: 117,
    value: "LB",
    text: "Lebanon"
  },
  {
    id: 118,
    value: "LS",
    text: "Lesotho"
  },
  {
    id: 119,
    value: "LR",
    text: "Liberia"
  },
  {
    id: 120,
    value: "LY",
    text: "Libya"
  },
  {
    id: 121,
    value: "LI",
    text: "Liechtenstein"
  },
  {
    id: 122,
    value: "LT",
    text: "Lithuania"
  },
  {
    id: 123,
    value: "LU",
    text: "Luxembourg"
  },
  {
    id: 124,
    value: "MO",
    text: "Macau"
  },
  {
    id: 125,
    value: "MK",
    text: "Macedonia"
  },
  {
    id: 126,
    value: "MG",
    text: "Madagascar"
  },
  {
    id: 127,
    value: "MW",
    text: "Malawi"
  },
  {
    id: 128,
    value: "MY",
    text: "Malaysia"
  },
  {
    id: 129,
    value: "MV",
    text: "Maldives"
  },
  {
    id: 130,
    value: "ML",
    text: "Mali"
  },
  {
    id: 131,
    value: "MT",
    text: "Malta"
  },
  {
    id: 132,
    value: "MH",
    text: "Marshall Islands"
  },
  {
    id: 133,
    value: "MQ",
    text: "Martinique"
  },
  {
    id: 134,
    value: "MR",
    text: "Mauritania"
  },
  {
    id: 135,
    value: "MU",
    text: "Mauritius"
  },
  {
    id: 136,
    value: "YT",
    text: "Mayotte"
  },
  {
    id: 137,
    value: "MX",
    text: "Mexico"
  },
  {
    id: 138,
    value: "FM",
    text: "Micronesia"
  },
  {
    id: 139,
    value: "MD",
    text: "Moldova"
  },
  {
    id: 140,
    value: "MC",
    text: "Monaco"
  },
  {
    id: 141,
    value: "MN",
    text: "Mongolia"
  },
  {
    id: 142,
    value: "MS",
    text: "Montserrat"
  },
  {
    id: 143,
    value: "MA",
    text: "Morocco"
  },
  {
    id: 144,
    value: "MZ",
    text: "Mozambique"
  },
  {
    id: 145,
    value: "MM",
    text: "Myanmar"
  },
  {
    id: 146,
    value: "NA",
    text: "Namibia"
  },
  {
    id: 147,
    value: "NR",
    text: "Nauru"
  },
  {
    id: 148,
    value: "NP",
    text: "Nepal"
  },
  {
    id: 149,
    value: "NL",
    text: "Netherlands"
  },
  {
    id: 150,
    value: "AN",
    text: "Netherlands Antilles"
  },
  {
    id: 151,
    value: "NC",
    text: "New Caledonia"
  },
  {
    id: 152,
    value: "NZ",
    text: "New Zealand"
  },
  {
    id: 153,
    value: "NI",
    text: "Nicaragua"
  },
  {
    id: 154,
    value: "NE",
    text: "Niger"
  },
  {
    id: 155,
    value: "NG",
    text: "Nigeria"
  },
  {
    id: 156,
    value: "NU",
    text: "Niue"
  },
  {
    id: 157,
    value: "NF",
    text: "Norfolk Island"
  },
  {
    id: 158,
    value: "MP",
    text: "Northern Mariana Islands"
  },
  {
    id: 159,
    value: "NO",
    text: "Norway"
  },
  {
    id: 160,
    value: "OM",
    text: "Oman"
  },
  {
    id: 161,
    value: "PK",
    text: "Pakistan"
  },
  {
    id: 162,
    value: "PW",
    text: "Palau"
  },
  {
    id: 163,
    value: "PA",
    text: "Panama"
  },
  {
    id: 164,
    value: "PG",
    text: "Papua New Guinea"
  },
  {
    id: 165,
    value: "PY",
    text: "Paraguay"
  },
  {
    id: 166,
    value: "PE",
    text: "Peru"
  },
  {
    id: 167,
    value: "PH",
    text: "Philippines"
  },
  {
    id: 168,
    value: "PN",
    text: "Pitcairn"
  },
  {
    id: 169,
    value: "PL",
    text: "Poland"
  },
  {
    id: 170,
    value: "PT",
    text: "Portugal"
  },
  {
    id: 171,
    value: "PR",
    text: "Puerto Rico"
  },
  {
    id: 172,
    value: "QA",
    text: "Qatar"
  },
  {
    id: 173,
    value: "RE",
    text: "Reunion"
  },
  {
    id: 174,
    value: "RO",
    text: "Romania"
  },
  {
    id: 175,
    value: "RU",
    text: "Russian Federation"
  },
  {
    id: 176,
    value: "RW",
    text: "Rwanda"
  },
  {
    id: 177,
    value: "GS",
    text: "S. Georgia and S. Sandwich Isls."
  },
  {
    id: 178,
    value: "KN",
    text: "Saint Kitts and Nevis"
  },
  {
    id: 179,
    value: "LC",
    text: "Saint Lucia"
  },
  {
    id: 180,
    value: "VC",
    text: "Saint Vincent and The Grenadines"
  },
  {
    id: 181,
    value: "WS",
    text: "Samoa"
  },
  {
    id: 182,
    value: "SM",
    text: "San Marino"
  },
  {
    id: 183,
    value: "ST",
    text: "Sao Tome and Principe"
  },
  {
    id: 184,
    value: "SA",
    text: "Saudi Arabia"
  },
  {
    id: 185,
    value: "SN",
    text: "Senegal"
  },
  {
    id: 186,
    value: "SC",
    text: "Seychelles"
  },
  {
    id: 187,
    value: "SL",
    text: "Sierra Leone"
  },
  {
    id: 188,
    value: "SG",
    text: "Singapore"
  },
  {
    id: 189,
    value: "SK",
    text: "Slovak Republic"
  },
  {
    id: 190,
    value: "SI",
    text: "Slovenia"
  },
  {
    id: 191,
    value: "SB",
    text: "Solomon Islands"
  },
  {
    id: 192,
    value: "SO",
    text: "Somalia"
  },
  {
    id: 193,
    value: "ZA",
    text: "South Africa"
  },
  {
    id: 194,
    value: "ES",
    text: "Spain"
  },
  {
    id: 195,
    value: "LK",
    text: "Sri Lanka"
  },
  {
    id: 196,
    value: "SH",
    text: "St. Helena"
  },
  {
    id: 197,
    value: "PM",
    text: "St. Pierre and Miquelon"
  },
  {
    id: 198,
    value: "SD",
    text: "Sudan"
  },
  {
    id: 199,
    value: "SR",
    text: "Suriname"
  },
  {
    id: 200,
    value: "SJ",
    text: "Svalbard and Jan Mayen Islands"
  },
  {
    id: 201,
    value: "SZ",
    text: "Swaziland"
  },
  {
    id: 202,
    value: "SE",
    text: "Sweden"
  },
  {
    id: 203,
    value: "CH",
    text: "Switzerland"
  },
  {
    id: 204,
    value: "SY",
    text: "Syria"
  },
  {
    id: 205,
    value: "TW",
    text: "Taiwan"
  },
  {
    id: 206,
    value: "TJ",
    text: "Tajikistan"
  },
  {
    id: 207,
    value: "TZ",
    text: "Tanzania"
  },
  {
    id: 208,
    value: "TH",
    text: "Thailand"
  },
  {
    id: 209,
    value: "TG",
    text: "Togo"
  },
  {
    id: 210,
    value: "TK",
    text: "Tokelau"
  },
  {
    id: 211,
    value: "TO",
    text: "Tonga"
  },
  {
    id: 212,
    value: "TT",
    text: "Trinidad and Tobago"
  },
  {
    id: 213,
    value: "TN",
    text: "Tunisia"
  },
  {
    id: 214,
    value: "TR",
    text: "Turkey"
  },
  {
    id: 215,
    value: "TM",
    text: "Turkmenistan"
  },
  {
    id: 216,
    value: "TC",
    text: "Turks and Caicos Islands"
  },
  {
    id: 217,
    value: "TV",
    text: "Tuvalu"
  },
  {
    id: 218,
    value: "UM",
    text: "US Minor Outlying Islands"
  },
  {
    id: 219,
    value: "UG",
    text: "Uganda"
  },
  {
    id: 220,
    value: "UA",
    text: "Ukraine"
  },
  {
    id: 221,
    value: "AE",
    text: "United Arab Emirates"
  },
  {
    id: 222,
    value: "UK",
    text: "United Kingdom"
  },
  {
    id: 223,
    value: "US",
    text: "United States"
  },
  {
    id: 224,
    value: "UY",
    text: "Uruguay"
  },
  {
    id: 225,
    value: "UZ",
    text: "Uzbekistan"
  },
  {
    id: 226,
    value: "VU",
    text: "Vanuatu"
  },
  {
    id: 227,
    value: "VA",
    text: "Vatican City State (Holy See)"
  },
  {
    id: 228,
    value: "VE",
    text: "Venezuela"
  },
  {
    id: 229,
    value: "VN",
    text: "Viet Nam"
  },
  {
    id: 230,
    value: "VG",
    text: "Virgin Islands (British)"
  },
  {
    id: 231,
    value: "VI",
    text: "Virgin Islands (US)"
  },
  {
    id: 232,
    value: "WF",
    text: "Wallis and Futuna Islands"
  },
  {
    id: 233,
    value: "EH",
    text: "Western Sahara"
  },
  {
    id: 234,
    value: "YE",
    text: "Yemen"
  },
  {
    id: 235,
    value: "YU",
    text: "Yugoslavia"
  },
  {
    id: 236,
    value: "ZR",
    text: "Zaire"
  },
  {
    id: 237,
    value: "ZM",
    text: "Zambia"
  },
  {
    id: 238,
    value: "ZW",
    text: "Zimbabwe"
  }
];

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-fancy-select Demo</h1>

        <h2>Default options</h2>
        <FancySelect items={testData} />

        <h2>FancySelect with placeholder.</h2>
        <FancySelect items={testData} placeholder="Make a selection..." />

        <h2>onSelection callback</h2>
        <FancySelect
          items={testData}
          onSelection={item => alert(`You selected ${item.text}`)}
        />

        <h2>FancySelect with defaultValue</h2>
        <FancySelect
          items={testData}
          onSelection={item => alert(`You selected ${item.text}`)}
          defaultValue="UK"
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

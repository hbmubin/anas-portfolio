import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Swal from "sweetalert2";

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const countryCodes = {
    Afghanistan: "af",
    Albania: "al",
    Algeria: "dz",
    Andorra: "ad",
    Angola: "ao",
    Argentina: "ar",
    Armenia: "am",
    Australia: "au",
    Austria: "at",
    Azerbaijan: "az",
    Bahamas: "bs",
    Bahrain: "bh",
    Bangladesh: "bd",
    Barbados: "bb",
    Belarus: "by",
    Belgium: "be",
    Belize: "bz",
    Benin: "bj",
    Bhutan: "bt",
    Bolivia: "bo",
    "Bosnia and Herzegovina": "ba",
    Botswana: "bw",
    Brazil: "br",
    Brunei: "bn",
    Bulgaria: "bg",
    "Burkina Faso": "bf",
    Burundi: "bi",
    Cambodia: "kh",
    Cameroon: "cm",
    Canada: "ca",
    "Cape Verde": "cv",
    "Central African Republic": "cf",
    Chad: "td",
    Chile: "cl",
    China: "cn",
    Colombia: "co",
    Comoros: "km",
    Congo: "cg",
    "Costa Rica": "cr",
    Croatia: "hr",
    Cuba: "cu",
    Cyprus: "cy",
    "Czech Republic": "cz",
    Denmark: "dk",
    Djibouti: "dj",
    Dominica: "dm",
    "Dominican Republic": "do",
    "East Timor": "tl",
    Ecuador: "ec",
    Egypt: "eg",
    "El Salvador": "sv",
    "Equatorial Guinea": "gq",
    Eritrea: "er",
    Estonia: "ee",
    Eswatini: "sz",
    Ethiopia: "et",
    Fiji: "fj",
    Finland: "fi",
    France: "fr",
    Gabon: "ga",
    Gambia: "gm",
    Georgia: "ge",
    Germany: "de",
    Ghana: "gh",
    Greece: "gr",
    Grenada: "gd",
    Guatemala: "gt",
    Guinea: "gn",
    "Guinea-Bissau": "gw",
    Guyana: "gy",
    Haiti: "ht",
    Honduras: "hn",
    Hungary: "hu",
    Iceland: "is",
    India: "in",
    Indonesia: "id",
    Iran: "ir",
    Iraq: "iq",
    Ireland: "ie",
    Israel: "il",
    Italy: "it",
    Jamaica: "jm",
    Japan: "jp",
    Jordan: "jo",
    Kazakhstan: "kz",
    Kenya: "ke",
    Kiribati: "ki",
    "Korea, North": "kp",
    "Korea, South": "kr",
    Kosovo: "xk",
    Kuwait: "kw",
    Kyrgyzstan: "kg",
    Laos: "la",
    Latvia: "lv",
    Lebanon: "lb",
    Lesotho: "ls",
    Liberia: "lr",
    Libya: "ly",
    Liechtenstein: "li",
    Lithuania: "lt",
    Luxembourg: "lu",
    Madagascar: "mg",
    Malawi: "mw",
    Malaysia: "my",
    Maldives: "mv",
    Mali: "ml",
    Malta: "mt",
    "Marshall Islands": "mh",
    Mauritania: "mr",
    Mauritius: "mu",
    Mexico: "mx",
    Micronesia: "fm",
    Moldova: "md",
    Monaco: "mc",
    Mongolia: "mn",
    Montenegro: "me",
    Morocco: "ma",
    Mozambique: "mz",
    "Myanmar (Burma)": "mm",
    Namibia: "na",
    Nauru: "nr",
    Nepal: "np",
    Netherlands: "nl",
    "New Zealand": "nz",
    Nicaragua: "ni",
    Niger: "ne",
    Nigeria: "ng",
    "North Macedonia": "mk",
    Norway: "no",
    Oman: "om",
    Pakistan: "pk",
    Palau: "pw",
    Palestine: "ps",
    Panama: "pa",
    "Papua New Guinea": "pg",
    Paraguay: "py",
    Peru: "pe",
    Philippines: "ph",
    Poland: "pl",
    Portugal: "pt",
    Qatar: "qa",
    Romania: "ro",
    Russia: "ru",
    Rwanda: "rw",
    "Saint Kitts and Nevis": "kn",
    "Saint Lucia": "lc",
    "Saint Vincent and the Grenadines": "vc",
    Samoa: "ws",
    "San Marino": "sm",
    "Sao Tome and Principe": "st",
    "Saudi Arabia": "sa",
    Senegal: "sn",
    Serbia: "rs",
    Seychelles: "sc",
    "Sierra Leone": "sl",
    Singapore: "sg",
    Slovakia: "sk",
    Slovenia: "si",
    "Solomon Islands": "sb",
    Somalia: "so",
    "South Africa": "za",
    Spain: "es",
    "Sri Lanka": "lk",
    Sudan: "sd",
    Suriname: "sr",
    Sweden: "se",
    Switzerland: "ch",
    Syria: "sy",
    Taiwan: "tw",
    Tajikistan: "tj",
    Tanzania: "tz",
    Thailand: "th",
    Togo: "tg",
    Tonga: "to",
    "Trinidad and Tobago": "tt",
    Tunisia: "tn",
    Turkey: "tr",
    Turkmenistan: "tm",
    Tuvalu: "tv",
    Uganda: "ug",
    Ukraine: "ua",
    "United Arab Emirates": "ae",
    "United Kingdom": "gb",
    "United States": "us",
    Uruguay: "uy",
    Uzbekistan: "uz",
    Vanuatu: "vu",
    "Vatican City": "va",
    Venezuela: "ve",
    Vietnam: "vn",
    Yemen: "ye",
    Zambia: "zm",
    Zimbabwe: "zw",
  };

const ReviewDetails = () => {
    const review = useLoaderData()
    const navigate= useNavigate()
    const [handleLoading, setHandleLoading]= useState(false)

    // const count = useSelector(state=>state.count)
    // const dispatch = useDispatch()
    const [search, setSearch] = useState(review?.reviewerCountry);
    const [countryFocus, setCountryFocus] = useState(false)
    const [formError, setFormError] = useState('')

    const filteredCountries = countries.filter((country) => country.toLowerCase().includes(search.toLowerCase()));

    const handleSubmit = async (e) => {
      e.preventDefault();
      setFormError('')
      const form = e.target;
      const reviewerName = form.reviewerName?.value;
      const description = form.description?.value;
      const rating = form.rating?.value;
      const reviewerCountry = form.reviewerCountry?.value;

      const code = countryCodes[reviewerCountry];

      const flag = code ? `https://flagcdn.com/w320/${code}.png` : "https://via.placeholder.com/320x240?text=No+Flag";

      if (!filteredCountries.includes(reviewerCountry)) {
        setFormError("Enter valid Country");
        return;
      }
      setHandleLoading(true)


      const updateReview = { reviewerName, description, rating, reviewerCountry, flag };

          try {
            const Response = await fetch(`http://localhost:5000/reviews/${review.reviewerName}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateReview),
            });
            const addedData = await Response.json();
  
            if (Response.ok) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/admin-dashboard/reviews')
            } else {
              Swal.fire({
                position: "top",
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          } catch (error) {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 1500,
            });
          }
      setHandleLoading(false)
    };


const handleDelete = async (e) => {
      e.preventDefault();
      setHandleLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/reviews/delete/${review?.reviewerName}`, {
            method: "DELETE",
          });
          const data = await response.json();
          if (response) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Deleted Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/admin-dashboard/reviews");
            setHandleLoading(false);
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 1500,
            });
            setHandleLoading(false);
          }
      } catch (error) {
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
      }
      setHandleLoading(false);
    };


    return (
        <div className="h-full">
        <div className="bg-bodyGray w-full sm:p-10 p-7 sm:flex justify-center items-center h-full">
          <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:w-[50vw]`}>
            <input name="reviewerName" className="border border-textGray placeholder:text-neutral-700 placeholder:text-lg outline-none px-3 py-2" defaultValue={review?.reviewerName || 'Reviewer Name'} type="text" required />
            <textarea name="description" rows={4} className="border border-textGray placeholder:text-neutral-700 placeholder:text-lg outline-none px-3 py-2" defaultValue={review?.description || 'Review Description'} type="text" required />
            <div className="flex gap-5 md:flex-row flex-col-reverse">
              <div className="flex items-center gap-2">
                <div>Rating:</div>
                <select name="rating" defaultValue={review.rating || '0'} className="pr-12 pl-1 py-1 border border-textGray outline-none">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <div>Country:</div>
                <div onMouseLeave={()=>setCountryFocus(false)} className="relative">
                  <input name="reviewerCountry" type="text" value={search} onChange={(e) => setSearch(e.target.value)} 
                  onFocus={()=>setCountryFocus(true)} 
                  className="px-2 py-1 border border-textGray outline-none" />
                  {countryFocus && <ul
                  onClick={()=>{
                    setCountryFocus(false)}}
                  className="bg-white absolute top-8 border border-textGray left-0 w-full h-28 overflow-auto country-ul z-10">
                    {filteredCountries?.map(country=><li
                    onClick={()=>{setSearch(country)}} className="border-b py-1 px-2 hover:bg-bodyGray cursor-default" key={country}>{country}</li>)}
                  </ul>}
                </div>
              </div>
            </div>
            <p className="text-amber-600">{formError}</p>
            <div className="flex justify-between">
              <button onClick={handleDelete} className="bg-amber-600 text-white w-fit px-6 py-2 cursor-pointer" type="button" >{handleLoading ? <BounceLoader size={26} color="currentColor" /> : 'Delete'}</button>
              <button className="bg-bodyBlack text-white w-fit px-6 py-2 cursor-pointer" type="submit" >{handleLoading ? <BounceLoader size={26} color="currentColor" /> : 'Save Change'} </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default ReviewDetails;
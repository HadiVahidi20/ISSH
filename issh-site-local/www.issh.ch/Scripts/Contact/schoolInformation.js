let schoolInfo = [
  {
    schoolName: 'International School of Schaffhausen',
    shortSchoolName: 'ISSH', // used as a tooltip under the pin
    latLongs: '47.72432148601186, 8.630533082065778',
        address: 'Mühlentalstrasse 280, 8200 Schaffhausen, Switzerland, +41 52 624 17 07',
    customPinSrc: `data:image/svg+xml;base64,${btoa(
      "<svg xmlns='http://www.w3.org/2000/svg'\n" +
        " viewBox='0 0 36.23 51.76'>" +
        "<path d='M18.114 0A18.118 18.118 0 0 0 0 18.114C0 31.7 18.114 51.755 18.114 51.755S36.229 31.7 36.229 18.114A18.118 18.118 0 0 0 18.114 0Zm0 24.584a6.469 6.469 0 1 1 6.469-6.47 6.472 6.472 0 0 1-6.469 6.47Z' fill='#002B5C'></path>" +
        '</svg>'
    )}`,
    customPinSize: [35, 51],
    customPinSizeActive: [35, 51]
  } /* , // used in case we have more then one school (pins at the footer in /contact)
    {
        schoolName: 'Monkton Combe School',
        shortSchoolName: 'Monkton Combe School',
        latLongs: '51.358300,-2.324340',
        address: 'Church Ln, Monkton Combe, Bath BA2 7HG, United Kingdom',
        customPinSrc: 'data:image/svg+xml;base64,' + btoa("<svg version='1.0' xmlns='http://www.w3.org/2000/svg'\n" +
            " viewBox='0 0 58.000000 86.000000'\n" +
            " preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,86.000000) scale(0.100000,-0.100000)'\n" +
            "fill='#000000' stroke='none'><path d='M197 843 c-131 -44 -216 -194 -187 -329 13 -56 261 -509 280 -509 19\n" +
            "0 267 453 280 509 46 212 -164 398 -373 329z m146 -137 c53 -22 79 -59 85\n" +
            "-117 9 -95 -44 -154 -138 -154 -94 0 -147 59 -138 154 10 98 102 155 191 117z'/>\n" +
            "</g>\n" +
            "</svg>"),
        customPinSize: [29, 43],
        customPinSizeActive: [35, 51]
    } */
];

if (typeof schoolInfoExtension !== 'undefined' && schoolInfoExtension.length > 0) {
  const generateCustomPinSrc = (pinBgColor) => {
    const svgTemplate = `
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.000000 86.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,86.000000) scale(0.100000,-0.100000)" fill="${pinBgColor}" stroke="none">
          <path d="M197 843 c-131 -44 -216 -194 -187 -329 13 -56 261 -509 280 -509 19 0 267 453 280 509 46 212 -164 398 -373 329z m146 -137 c53 -22 79 -59 85 -117 9 -95 -44 -154 -138 -154 -94 0 -147 59 -138 154 10 98 102 155 191 117z"/>
        </g>
      </svg>`;
    return `data:image/svg+xml;base64,${btoa(svgTemplate.trim())}`;
  };

  schoolInfo = schoolInfoExtension.map((school) => ({
    schoolName: school.SchoolName,
    shortSchoolName: school.ShortSchoolName,
    latLongs: school.LatLong,
    address: school.SchoolAddress,
    customPinSrc: generateCustomPinSrc(school.PinBgColor),
    customPinSize: school.PinSize,
    customPinSizeActive: school.ActivePinSize
  }));
}

/*
Below you can add extra fields to the form or replace the existing ones.
*
 */
 //function getLocalFormFields() {
 //    return {
 //        //         customIntro: "Thank you for contacting " +  $("#ddlContact")[0].value + " . We will respond as soon as possible."
 //        departmentName: "General Enquiries",
 //        ddlContact: " info@issh.ch"
 //    }
 //}

function getLocalMapSettings() {
  return {
    maxZoom: 13,
    googleDomainForDirections: 'google.com'
  };
}

function getLocalFormFields() {
    return {
        departmentName: "General Enquiries",
        ddlContact: " admissions@issh.ch",
        childAge: $("#txtChildAge").val(),
        extraInfo: $("#ddlExtraInfo").val(),
        /*howCanHelp: $("#txtHowCanHelp").val(),*/
        howDidYouHear: $("#ddlHowDidYouHear").val(),
        ctTitle: " ",
        ddlTitle: " ",
        GDPRConsent: " ",
    };
}

function autoGdprConsent() {
    const checkbox = document.getElementById("gdprConsentCheckbox");
    const parent = document.querySelector(".contactGdpr__inner");

    if (checkbox && parent) {
        checkbox.checked = true;
        parent.classList.add("isChecked");

        const evt = new Event('change', { bubbles: true });
        checkbox.dispatchEvent(evt);

        if (window.contactForm) {
            contactForm.gdprConsent = true;
        }
    }
}

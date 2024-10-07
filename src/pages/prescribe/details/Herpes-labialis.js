import Head from "next/head";
import { useState} from 'react';
import CurrentDate from '../../../components/date';
import { MdPhp } from "react-icons/md";

const Details = () => {
  const [site, setSite] = useState(true);
 
  const handleClick = () => {
    setSite(prevSite => !prevSite);
  };

  return (
    <div>
      <Head>
        <title>Rx Hero | Condition</title>
        <meta name="keyword" content='Prescribe' />
      </Head>

      <div>
        <div className='formheader flex items-center justify-between'>
          <img 
            src="/bchealth.png"
            alt="BC Ministry of Health"
            className='formlogo'
            style={{ height: 'auto', maxHeight: '70px' }}
          />
          <h5>Minor Ailments and Contraception Service MACS Form</h5>
          <button 
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            onClick={handleClick}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {site ? "Service Plus Pharmacy" : "Park Pacific Pharmacy"}         
            </span>
          </button>
        </div>
        <table className="border-collapse border border-green-800 m-4">
          <tbody>
            <tr>
              <td className='formtitle'>Name of Patient:</td>
              <td><input className='border border-gray-400 p-2 rounded-md' style={{ resize: 'none', height: '20px' }}/></td>
              <td className='formtitle'>Patient's Phone No.:</td>
              <td><input className='border border-gray-400 p-2 rounded-md' style={{ resize: 'none', height: '20px' }}/></td>
              <td className='formtitle'>PHN:</td>
              <td><input className='border border-gray-400 p-2 rounded-md' style={{ resize: 'none', height: '20px' }}/></td>
              <td className='formtitle'>Informed Consent: YES</td>
            </tr>
            <tr className='formtitle'>
              <td colSpan={7}>Minor Ailment of Concern/Contraception:</td>
            </tr>
            <tr className='formtitle'>
              <td colSpan={7}>
                <textarea
                  className='forminput border border-gray-400 p-2 rounded-md'
                  style={{ width: '100%', height: '30px' }}
                  defaultValue={"Herpes labialis"}
                />
              </td>
            </tr>
            <tr className='flex items-center justify-between '>
              <td> Patient Assessment</td>
              <td> PharmaNET Checked: YES</td>
              <td>Patient eligible: YES</td>
            </tr>
            <tr>
              <td colSpan="7">
                <textarea
                  className='forminput border border-gray-400 p-2 rounded-md'
                  style={{ resize: 'none', width: '100%', minHeight: '200px', height: 'auto' }}
                  defaultValue={"Patient is experiencing a unilateral vesicular lesion on the lip since a day ago. It itches, tingles and burns. The symptoms align with that of cold sore. This has happened before in the past prior to this episode a couple years ago. So far, the patient has not attempted any medications to cope with the issue. It is reported that sun exposure and stress can worsen the symptoms and nothing can alleviate them. Patient is over 12 YO without fever, malaise, pharyngitis and stomatitis. The lesion is not red and swollen with pus. Hence, urgent referral is not required. Patient is currently on NO RELATED MEDICATIONS. Kidney or liver issues are also unremarkable. Patient is not pregnant and reports to have NO ALLERGIES to any medications."}
                />
              </td>
            </tr>
            <tr className='formtitle'>
              <td colSpan={7}>RECOMMENDATIONS</td>
            </tr>
            <tr><td colSpan={7}>Prescription issued? (YES)/no</td></tr>
            <tr><td colSpan={7}>Advised to seek medical attention from another healthcare professional? yes: (Family Doctor/Emergency) / (NO)</td></tr>
            <tr><td colSpan={7}>Details of prescription and/or other recommendations, with rationale:</td></tr>
            <tr>
              <td colSpan="7">
                <textarea
                  className='forminput border border-gray-400 p-2 rounded-md'
                  style={{ resize: 'none', width: '100%', minHeight: '200px', height: 'auto' }}
                  defaultValue={"Patient is counseled to avoid triggers such as sunlight and stress. Patient is also advised not to perform kissing or intimate activities or share personal items to prevent spreading of the virus. Proper hand hygiene is taught to the patient to prevent infections. VALACYCLOVIR 2000 MG TWICE DAILY FOR 1 DAY**** is prescribed to help alleviate the symptoms. Medical intervention is necessary to alleviate the symptoms as other non-pharmacological interventions have failed. The effectiveness of the prescription is supported by evidence as per RxTx, medsask and BC guidelines. The prescription is safe for the patient as the dosage is within the therapeutic range as per RxTx and the patient is not allergic to it. Adherence should not be an issue as the patient is young and aware. "}
                />
              </td>
            </tr>
            <tr className='formtitle'>
              <td colSpan={7}>MONITORING and FOLLOW-UP PLAN</td>
            </tr>
            <tr>
              <td colSpan="7">
                <textarea
                  className='forminput border border-gray-400 p-2 rounded-md'
                  style={{ resize: 'none', width: '100%', minHeight: '100px', height: 'auto' }}
                  defaultValue={"Patient should feel the alleviation and disappearance of pain and irritations within 24 hours. Lesion should also start to crust and recover within 3 days. Monitor for adverse effects of the medication, including, stomach upset, nausea and confusion. It should be taken with plenty of water to prevent renal complications."}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="1">PROVIDERS NOTIFIED (if applicable)</td>
              <td colSpan="3">Primary care Provider: <input className='border border-gray-400 p-2 rounded-md' /></td>
              <td colSpan="3">Date and method notified: Fax/Phone:<input className='border border-gray-400 p-2 rounded-md' /><CurrentDate /></td>
            </tr>
            <tr className='formtitle'>
              <td colSpan={7}>PHARMACY/PHARMACIST INFORMATION</td>
            </tr>
            <tr>
              <td colSpan="1">Pharmacy Name: {site ? "Service Plus Pharmacy" : "Park Pacific Pharmacy"}</td>
              <td colSpan="3">Pharmacy Address: {site ? "1560-4380 No. 3 Rd, Richmond, BC V6X 3V7" : "3700 No. 3 Rd #2260, Richmond, BC V6X 3X2"}</td>
              <td colSpan="3">Pharmacy Phone Number: {site ? "(604) 278-8830" : "(604) 273-9812"}</td>
            </tr>
            <tr>
              <td colSpan="1">Pharmacist: Paco Chan(lic:16308)</td>
              <td colSpan="3">Pharmacist Signature:<MdPhp /></td>
              <td colSpan="3">Date of Signage:<CurrentDate /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;

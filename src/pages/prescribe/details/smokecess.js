import Head from "next/head";
import CurrentDate from '../../../components/date';
import { MdPhp } from "react-icons/md";

const Smokecess = () => { 
  return (
    <div>
      <Head>
        <title>Rx Hero | SmokeCess Form</title>
        <meta name="keyword" content='Smokecess' />
      </Head>

      <div>
        <div className='formheader flex items-center justify-between'>
          <img 
            src="/bchealth.png"
            alt="BC "
            className='formlogo'
            style={{ height: 'auto', maxHeight: '70px' }}
          />
          <h5 className='font-bold'>BC SMOKING CESSATION PROGRAM DECLARATION AND NOTIFICATION</h5>
        </div>
       <div className="text-xs font-bold content-center text-center">
        This form must be completed each time a patient is dispensed a nicotine replacement therapy (NRT) 
product through the BC Smoking Cessation Program.
      </div>
        <table className="border-collapse border border-green-800 m-4">
          <tbody>
            <tr>
              <td colSpan="1" className='formtitle border border-green-800'>Name of Patient:</td>
              <td colSpan="3" className='formtitle border border-green-800'>Date of Birth:</td>
              <td colSpan="4" className='formtitle border border-green-800'>PHN:</td>
            </tr>
            <tr>
              <td className='text-xs'>
            <p>NRT Information</p>
            <p>Please affix or attach a label with the following information:</p>
            <p>• patient name</p>
            <p>• prescription number</p>
            <p>• pharmacist name</p>
            <p>• NPN</p>
            <p>• product name</p>
            <p>• manufacturer</p>
            <p>• product strength</p>
            <p>• quantity dispensed</p>
            <p>• date dispensed</p>
            <p>• directions</p>
            </td>
            </tr>
            <tr>
           <td colSpan="7" className='bg-black text-white'>
           <h4 className='font-bold'>PATIENT DECLARATION</h4>
           </td>
           </tr> 
           <tr>
           <td colSpan="7" className='text-xs'>
           <p>I declare that I have active, valid Medical Services Plan (MSP) coverage, that I am a resident of British Columbia, that I use tobacco, and that I
am eligible to enroll in Plan S (the Plan for nicotine replacement therapy) if dispensed nicotine replacement therapy. I declare that the eligible
nicotine replacement therapy dispensed to me through the BC Smoking Cessation Program (“the program”) will be used personally by me to
reduce or stop my use of tobacco. </p>
           <br/>
           <p>I understand that support and resources are available to me free of charge through QuitNow.ca that will help me plan my strategy to quit or
reduce smoking and increase my chances of success.</p>
           <br/>
           <p>I understand that the BC Ministry of Health may review my PharmaNet and other records to confirm my eligibility for the program and to
otherwise administer the program. I understand that the Ministry of Health may contact me for the purposes of program evaluation or planning. </p>
           <br/>
           <p>I understand that the pharmacist is collecting this information in accordance with the record keeping requirements in the Pharmaceutical
Services Act and that the pharmacy may be required to provide this information to the BC Ministry of Health for the purposes set out above.</p>
           </td>
           </tr>
           <br/>
            <tr className='text-xs'>
              <td colSpan="1">print name of patient:</td>
              <td colSpan="3">signature of patient: </td>
              <td colSpan="3">Date of Signage:<CurrentDate /></td>
            </tr>
                       <td colSpan="7" className='bg-black text-white'>
           <h4 className='font-bold'>PHARMACIST DECLARATION</h4>
           </td>
           <tr>
           <td colSpan="7" className='text-xs'>
            <p>I declare that the patient has received an eligible nicotine replacement therapy through the BC Smoking Cessation Program (“the program”)
according to program policy. I have updated PharmaNet with the patient’s address and telephone number. I understand that my dispensing
records may be subject to audit by the BC Ministry of Health and that the Ministry may contact me for the purposes of program evaluation or
planning.</p>
           </td>
           </tr>
            <tr>
              <td colSpan="1">Pharmacist: Paco Chan(lic:16308)</td>
              <td colSpan="3">Pharmacist Signature:<MdPhp /></td>
              <td colSpan="3">Date of Signage:<CurrentDate /></td>
            </tr>
          </tbody>
        </table>
        <div className='text-xs text-center'>Completed copies of this form must be retained on file in the pharmacy in accordance with recordkeeping requirements
established in the Pharmaceutical Services Act and any relevant bylaws of the College of Pharmacists of British Columbia.</div>
      </div>
      <div className='text-xs'>
        Personal information on this form is collected by the Ministry of Health under s.22 of the Pharmaceutical Services Act for the purpose of determining eligibility for
PharmaCare’s Smoking Cessation Program (Plan S).
If you have any questions about the collection of this personal information on this form, contact the Health Insurance BC (HIBC) Chief Privacy Officer at
PO Box 9035 STN Prov Govt, Victoria BC V8W 9E3; or call 604 683-7151 (Vancouver) or 1 800 663-7100 (toll free).
This information will be collected, used and disclosed in accordance with the Freedom of Information and Protection of Privacy Act and the Pharmaceutical Services Act
      </div>
    </div>
  );
};

export default Smokecess;

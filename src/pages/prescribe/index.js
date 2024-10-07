  import Head from "next/head";
  import { useState } from "react";
  import { useRouter } from 'next/navigation'
  import conditionsData from '../../components/data/conditions';

  export default function Prescribe() {
    const [answerInput, setAnswerInput] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const Router = useRouter();

    const handleAnswerSubmit = (e) => {
      e.preventDefault();
      if (answerInput.toLowerCase() === 'nemesis') {
        setIsAuthenticated(true);
      } else {
        alert('Incorrect answer. Access denied.');
        Router.push('/');
      }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Head>
          <title>Rx Hero|Prescribe</title>
          <meta name="keyword" content='BC Minor ailments prescribing'/>
        </Head>
        <div className="flex-grow">
          {isAuthenticated ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Acne</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/acne`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Allergic Rhinitis</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/allergic-rhinitis`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Conjunctivitis</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/conjunctivitis`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Atopic Dermatitis</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/atopic-dermatitis`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Dysmenorrhea</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/dysmenorrhea`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Dyspepsia</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Dyspepsia`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Fungal Infections</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Fungal-Infections`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Fungal Nails (Onychomycosis)</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Onychomycosis`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Headache</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Headache`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Hemorrhoids</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Hemorrhoids`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Herpes labialis</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Herpes-labialis`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Impetigo</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Impetigo`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Musculoskeletal pain</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Musculoskeletal-pain`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Nicotine dependence</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Nicotine-dependence`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Oral Ulcers</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Oral-Ulcers`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Shingles</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Shingles`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Urinary Tract Infections</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/uti`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Urticaria and Insect Bites</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/urticaria`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Emergency Contraception</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Emergency-Contraception`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Hormonal Contraception</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Hormonal-Contraception`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Oral thrush</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Oral-thrush`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">Vulvovaginal Candidiasis</h2>
                    <button 
                      onClick={() => window.open(`prescribe/details/Candidiasis`)} 
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Details 
                      </span>
                    </button>
                  </div>
               
              </div>
              <div className="text-center mt-4">
                <button onClick={() => {
                  const newWindow = window.open("https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/pharmacare/pharmacare-publications/pharmacare-policy-manual-2012/pharmacyfees-subsidies-providerpayment/minor-ailments-and-contraception-service", "_blank");
                  newWindow.focus();
                }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Cheat Sheet
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <form onSubmit={handleAnswerSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label htmlFor="answerInput" className="block text-gray-700 text-sm font-bold mb-2">Unlock Codex:</label>
                  <input
                    type="password"
                    id="answerInput"
                    value={answerInput}
                    onChange={(e) => setAnswerInput(e.target.value)}
                    className="form-input border border-gray-300 rounded-md px-4 py-2 mt-2 w-full focus:outline-none focus:ring focus:border-blue-300 bg-white text-black"
                    />
                </div>
                <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Proceed      
                </span>
                </button> 
              </form>
            </div>
          )}
        </div>

      </div>
    );
  }
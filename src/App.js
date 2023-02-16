import logo from "./logo.svg";
import "./App.css";
import heroimage from "./assets/illustration-hero.svg";
import iconmusic from "./assets/icon-music.svg"
function App() {
  return (
    <div className="App flex  justify-center text-center ">
      <div className=" flex flex-col shadow-xl rounded-b-2xl ">
        <div className="card max-w-md  ">
          <div>
            <img className="max-w-full rounded-t-3xl " src={heroimage} />
          </div>

          <div className=" px-20 mt-6">
            <h2 className="text-Dark_blue text-3xl font-bold	mb-4">
              Order Summary
            </h2>
            <span className="  text-Desaturated_blue text-base   pt-5">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anyhere you like
            </span>
          </div>

          <div className="flex flex-row mx-14 py-6  bg-Very_pale_blue
           items-center justify-around m-5 p-1 px-5 rounded-t-xl">

              <div className="basis-1/4">
                <img src={iconmusic}/>

              </div>
              <div  className=" flex flex-col items-start basis-1/2 ">
                  <span className="text-Dark_blue font-bold ">Annual Plan</span>
                  <span className="text-Desaturated_blue ">$59,99/year</span>

              </div>
              <div className="basis-1/4">
                  <span className="text-Change_purple font-medium hover:text-Button_purple cursor-pointer">Change</span>
              </div>
          </div>
      <div className="bg-Change_purple hover:bg-Button_purple cursor-pointer my-7 mx-11 py-3 rounded-xl">
      <span className="text-white font-bold">Proceed to Payment</span>

      </div>
    <div className="mb-7">
    <span className="text-Dark_blue font-bold cursor-pointer">Cancel Order</span>
      
    </div>

        </div>
      </div>
    </div>
  );
}

export default App;

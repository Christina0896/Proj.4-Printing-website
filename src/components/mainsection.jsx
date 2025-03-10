import TextSection from './textsection';

function Mainsection() {
  return (
    <main className=" flex flex-col justify-center m-auto items-center ">
      {/*Shopping by categories*/}
      <section className="flex flex-col ">
        <h1 className="mt-8 mb-5.5 font-bold font text-[28px]">Shopping by Categories</h1>
        <div className="category flex gap-19 ">
          <img src="src\assets\category-1.png" alt="Category 1" />
          <img src="src\assets\category-2.png" alt="Category 2" />
          <img src="src\assets\category-3.png" alt="Category 3" />
          <img src="src\assets\category-4.png" alt="Category 4" />
          <img src="src\assets\category-5.png" alt="Category 5" />
        </div>
      </section>
      {/*How to create custom shirts*/}
      <section className="flex flex-col items-center mt-23">
        <div className="pb-18">
          <TextSection
            title="How to create custom shirts."
            subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur unde maiores voluptatum nemo sed? Maiores
          iusto odit modi"
          />
        </div>
        {/* Main Section 1 */}
        <ul className="w-321 pb-29">
          {/* Step 1 */}
          <li className="flex mb-22 ">
            <img src="src\assets\customshirt1.png" alt="" />
            <div className="w-60  flex justify-center m-auto">
              <span className=" step-number font-bold flex items-center justify-center ">1</span>
            </div>
            <div className="flex flex-col  m-auto">
              <h1 className="font-bold text-[32px]"> Add your shirt design</h1>
              <p className="w-95 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur inventore commodi,
                tempora aliquid quos volupta.
              </p>
            </div>
          </li>
          {/* Step 2 */}
          <li className="flex flex-row-reverse  mb-22 ">
            <img src="src\assets\customshirt2.png" alt="" />
            <div className="w-60 flex justify-center m-auto">
              <span className=" step-number font-bold flex items-center justify-center ">2</span>
            </div>
            <div className="flex flex-col  m-auto">
              <h1 className="font-bold text-[32px]">Custom artwork &review </h1>
              <p className="w-95 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur inventore commodi,
                tempora aliquid quos volupta.
              </p>
            </div>
          </li>
          {/* Step 3 */}
          <li className="flex  ">
            <img src="src\assets\customshirt3.png" alt="" />
            <div className="w-60  flex justify-center m-auto">
              <span className=" step-number font-bold flex items-center justify-center ">3</span>
            </div>
            <div className="flex flex-col  m-auto">
              <h1 className="font-bold text-[32px]"> Enjoy your product</h1>
              <p className="w-95 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur inventore commodi,
                tempora aliquid quos volupta.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Main Section 2 */}
      <section className="mainSection2 flex-col ">
        <div className="flex pb-18">
          <img className="pe-20 p-4" src="src\assets\mainsection2-img1.png" alt="" />
          <div className="flex flex-col  m-auto">
            <h1 className="font-bold text-[48px] w-150"> Free and easy way to bring your ideas to life</h1>
            <p className="w-150 text-[18px] mt-5 mb-2.5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur inventore commod
            </p>
            <button className="defaultbtn font-bold"> Get Started</button>
          </div>
        </div>
        <div className="pb-10">
          <TextSection
            title="T-shirt printing made easy."
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, optio nostrum suscipit voluptas
            explicabo. "
          />
        </div>
      </section>
    </main>
  );
}
export default Mainsection;

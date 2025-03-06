function Mainsection() {
  return (
    <main className="">
      {/*Shopping by categories*/}
      <div className="container flex flex-col m-auto">
        <h1 className="mt-8 mb-5.5 ms-18 font-bold font text-[28px]">Shopping by Categories</h1>
        <div className="category flex justify-center gap-19 ">
          <img src="src\assets\category-1.png" alt="" />
          <img src="src\assets\category-2.png" alt="" />
          <img src="src\assets\category-3.png" alt="" />
          <img src="src\assets\category-4.png" alt="" />
          <img src="src\assets\category-5.png" alt="" />
        </div>
      </div>
      {/*How to create custom shirts*/}
      <div className="flex flex-col items-center mt-23">
        <h1 className="font-bold text-[40px] leading-12 ">How to create custom shirts</h1>
        <p className="w-150 text-center text-[18px] pb-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur unde maiores voluptatum nemo sed? Maiores
          iusto odit modi
        </p>
        <div className="container flex justify-center ">
          <div>
            <ul className="w-321 ">
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
          </div>
        </div>
      </div>
    </main>
  );
}
export default Mainsection;

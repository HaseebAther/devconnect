import Navbutton from "../../components/public/Navbutton";

const Home = () => {

  return (
    <>  
    <div className="flex flex-col py-15  items-center justify-center bg-purple-400"> 
        <p className="text-center bg-amber-50/10 font-boldtext-amber-50 rounded-2xl  p-0.5 w-max">✨ Join 10,000+ developers building together ✨</p>
            <h1 className="font-[sans] font-extrabold text-8xl text-white text-center">Where Developers <br/>
                Connect & Create</h1>
                <p className="w-[30%] text-xl text-center m-1 mb-3"> Showcase your projects, find collaborators, and build meaningful relationships in the developer community. Your next breakthrough starts here.</p>
        <div className="flex gap-5">
        <Navbutton to="auth/register" icon="➔" text="Start Building Together" classes="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-6 py-4 rounded-md hover:opacity-90 font-bold hover:translate-x-px hover:scale-x-102 hover:drop-shadow-2xl "/>

        <Navbutton to="auth/login" text=" Login" classes="bg-amber-50/10 text-lg border-amber-100 text-white px-7 font-bold py-3 rounded-md hover:opacity-90 hover:translate-x-px hover:scale-x-102 hover:drop-shadow-2xl " />
        </div>
      <div className="need">  </div>
</div>   
    </>
  );
};

export default Home;
import Button from "../Components/Button";

export default function Subscribe(){
    return (
        <section id="Contact Us" className="flex justify-between items-center max-lg:flex-col max-lg:gap-10">
            <h1 className="font-palanquin text-4xl font-bold lg:w-[28rem]">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h1>
            <div className="relative flex justify-between py-2 pe-3 w-[40%] border-[1px] border-slate-gray rounded-full max-lg:w-full">
                <input type="text" placeholder="Subscribe@nike.com" className="outline-none border-none bg-transparent ps-8 w-[63%] text-slate-gray"/>
                <div className="">
                    <Button className text={'Sign Up'}/>
                </div>
            </div>
        </section>
    )
}
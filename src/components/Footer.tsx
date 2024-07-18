import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";

const Footer = () => {
	return ( 
		<div className="md:px-[8vw] px-[6vw] pt-[10vh] pb-[6vh] bg-[#a36f78] text-white flex sm:flex-row flex-col gap-5 items-center justify-between">
			<h1 className="basis-1/2 text-center font-brush lg:text-4xl text-3xl">
				My Beautiful Nails
			</h1>
			<div className="sm:order-first flex basis-1/4 justify-start">
				<img src={instagram}
					alt="Instagram"
					className="w-[50px] cursor-pointer"
					onClick={() => window.open("https://www.instagram.com/mybeautifulnails.southend")}/>
				<img src={facebook}
					alt="Facebook"
					className="w-[50px] cursor-pointer"
					onClick={() => window.open("https://www.facebook.com/mybeautifulnailssouthend")}/>
			</div>
			<p className="text-[10px] text-right basis-1/4">
				© 2024 My Beautiful Nails.
			</p>
		</div>
	);
};

export default Footer;
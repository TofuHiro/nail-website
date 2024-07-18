import { motion, useCycle } from "framer-motion";
import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react"
import { fadeIn, NavMoveDown } from "./animations";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const path = useLocation();

	useEffect(() => {
			window.scrollTo(0, 0);},
			[path]
	);

	return (
		<motion.nav 
			className="z-50 fixed sm:flex-col flex flex-row w-full py-2 px-2 items-center bg-white"
			initial="hidden"
			animate="visible"
			variants={NavMoveDown}
			custom={0}
		>
			<Link to="/">
				<h1 className="sm:text-5xl text-3xl my-4 ml-6 cursor-pointer font-brush text-center text-[#fcaebb]"
					onClick={() => {
						window.scrollTo({ top: 0 })
						if (isOpen) {toggleOpen()}
					}}
				>
						My Beautiful Nails
				</h1>            
			</Link>

			<ul className="list-none sm:flex hidden flex-1 justify-end">
				{navLinks.map((nav) => (
					<Link key={nav.id} to={nav.id}>
						<li className="group nav-text text-base px-[6vw] text-center font-medium py-[8px] cursor-pointer duration-300">
							{nav.title}
							<hr className="border-[#bb6d77] w-0 group-hover:w-full duration-150"/>
						</li>
					</Link>
				))}
				<li 
					className="group nav-text text-base px-[6vw] text-center font-medium py-[8px] cursor-pointer duration-300"
					onClick={() => window.open("https://www.fresha.com/a/my-beautiful-nails-southend-on-sea-332-chartwell-north-tfcs2n16/booking?pId=1285288", "_blank")}
				>		
					Book
					<hr className="border-[#bb6d77] w-0 group-hover:w-full duration-150"/>
				</li>
			</ul>

			<div className="sm:hidden flex flex-1 justify-end mr-4">
				<motion.nav
					animate={isOpen ? "open" : "closed"}>
					<MenuButton toggle={toggleOpen}/>
				</motion.nav>

				<motion.div 
					className={`${isOpen ? "flex" : "hidden"} duration-150 top-[72px] right-0 bg-black/50 absolute w-full text-center h-[100vh]`}
					animate={isOpen ? "visible" : "hidden"}
					variants={fadeIn}
					onClick={() => { toggleOpen()}}>
					<ul className="list-none flex flex-1 flex-col duration-150">
						{navLinks.map((nav) => (
							<Link key={`${nav.id}-menu`} to={nav.id}
								className={`${isOpen ? "z-0" : "-z-10"}`}>
								<li className={`${isOpen ? "hover:bg-white active:bg-gray-200 bg-white" : "text-black/0 bg-black/0 active:bg-bg-black/0 hover:bg-black/0"} duration-150 text-[20px] font-medium px-3 py-[18px] cursor-pointer`}>
									{nav.title}
								</li>
							</Link>
						))}
						<li 
							className={`${isOpen ? "hover:bg-white active:bg-gray-200 bg-white" : "text-black/0 bg-black/0 active:bg-bg-black/0 hover:bg-black/0"} duration-150 text-[20px] font-medium px-3 py-[18px] cursor-pointer`}
							onClick={() => window.open("https://www.fresha.com/a/my-beautiful-nails-southend-on-sea-332-chartwell-north-tfcs2n16/booking?pId=1285288", "_blank")}	
						>
							Book
						</li>
					</ul>
				</motion.div>
			</div>
		</motion.nav>
	);
}

export default Navbar;
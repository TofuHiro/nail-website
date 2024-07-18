import { prices } from "../constants"
import { motion } from "framer-motion";
import pricesImage from "../assets/images/prices.jpg"
import { fadeIn, fadeInUp } from "../components/animations";

const Prices = () => {
	return (
		<motion.div 
			className="bg-cover bg-top" 
			style={{backgroundImage: `url(${pricesImage})`}}
      initial="hidden"
      animate="visible"
    	variants={fadeIn}
      custom={.2}
		>
			<motion.div 
				className="lg:mx-[14vw] md:mx-[10vw] sm:px-8 px-[8vw] sm:pt-[20vh] pt-[14vh] pb-[8vh] bg-gray-100/90 backdrop-blur-sm"
				initial="hidden"
				animate="visible"
				variants={fadeIn}
				custom={.3}
			>
				<h1 className="text-header font-semibold text-5xl text-center">
					PRICES
				</h1>
				<br/>
				<div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-8">
					{prices.map((service, i) => {
						return (
							<motion.div 
								key={service.id} 
								className="flex-1"
								initial="hidden"
								animate="visible"
								variants={fadeIn}
								custom={0.4 + i/4}
							>
								<h2 className="text-header font-semibold text-3xl mb-2">
									{service.title}
								</h2>
								{ service.prices.map((prices, j) => {
									return (
										<motion.div 
											key={prices.id} 
											className="flex flex-row mb-1"
											initial="hidden"
											whileInView="visible"
											variants={fadeInUp}
											viewport={{ once: true }}
											custom={0.4 + i/4 + j/8}
										>
											<p className="basis-2/3 text-primary">
												{prices.title}
											</p>
											<p className="basis-1/3 text-primary text-right font-medium">
												{prices.price}
											</p>
										</motion.div>
									)
								})}
							</motion.div>
						)
					})}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Prices
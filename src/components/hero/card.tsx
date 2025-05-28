import { FC, useState } from "react";
import { ICar } from "../../types";
import Button from "../button";
import { calcPrice } from "../../utils/calcPrice";
import Info from "./info";
import { motion } from "motion/react";
import generateImage from "../../utils/generateImage";
import Modal from "../modal";

type Props = {
  car: ICar;
};
const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="car-card group">
      {/* araba ismi*/}
      <h2 className="car-card-content-title">{car.model}</h2>

      {/* araba fiyati */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">{calcPrice(car)}</span>
        <span className="font-semibold self-end">/gun</span>
      </div>

      {/*Arac resmi */}
      <div>
        <img
          src={generateImage(car)}
          className="w-full object-contain min-h-[200px]"
        />
      </div>

      {/*Temel Bilgiler */}
      <div className="w-full">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          className="hidden group-hover:block"
        >
          <Button
            text="Daha Fazla"
            designs="w-full text-white mt-[0.5]"
            fn={() => setIsOpen(true)}
          />
        </motion.div>
      </div>
      <Modal isOpen={isOpen} car={car} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Card;

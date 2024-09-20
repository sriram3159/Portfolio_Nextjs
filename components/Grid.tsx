import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({title,className,description,id,img,imgClassName,spareImg,titleClassName}) => (
          <BentoGridItem
            title={title}
            id={id}
            key={id}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            spareImg={spareImg}
            titleClassName={titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

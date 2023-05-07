import { DarkRoast } from "./base/DarkRoast";
import { HouseBlend } from "./base/HouseBlend";
import { Espresso } from "./base/Espresso";
import { Mocha } from "./decorator/Mocha";
import { Whip } from "./decorator/Whip";

function main() {
  // beverage 1
  const espresso = new Espresso();
  console.log(`${espresso.Description} ${espresso.cost()}`);

  //beverage 2
  const darkRoast = new DarkRoast();
  console.log(`${darkRoast.Description} ${darkRoast.cost()}`);

  //House Blend with condiments
  let HouseBlendWithMocha = new HouseBlend();
  HouseBlendWithMocha = new Mocha(HouseBlendWithMocha);
  console.log(
    `${HouseBlendWithMocha.Description} ${HouseBlendWithMocha.cost()}`
  );

  // Dark Roast Coffee, Mocha, Mocha, Whip
  let DarkRoastWithDoubleMochaAndWhip = new DarkRoast();
  DarkRoastWithDoubleMochaAndWhip = new Mocha(DarkRoastWithDoubleMochaAndWhip);
  DarkRoastWithDoubleMochaAndWhip = new Mocha(DarkRoastWithDoubleMochaAndWhip);
  DarkRoastWithDoubleMochaAndWhip = new Whip(DarkRoastWithDoubleMochaAndWhip);
  console.log(
    `${
      DarkRoastWithDoubleMochaAndWhip.Description
    } ${DarkRoastWithDoubleMochaAndWhip.cost()}`
  );
}

main();

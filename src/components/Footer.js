import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-amazon_blue text-gray-200 mt-5">
      <a href="#top">
        <div
          id="backToTop"
          className="bg-amazon_blue-light flex justify-center items-center cursor-pointer hover:bg-amazon_blue-backToTop py-3 text-sm"
        >
          <span>Terug naar boven</span>
        </div>
      </a>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 text-center max-w-screen-xl mx-auto text-sm lg:text-base">
        <div className="m-5 p-5 space-y-3">
          <h2 className="font-bold">Over ons</h2>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">
              Werken bij Amazon
            </li>
            <li className="hover:underline cursor-pointer">Persberichten</li>
            <li className="hover:underline cursor-pointer">Over Amazon</li>
            <li className="hover:underline cursor-pointer">Contactgegevens</li>
          </ul>
        </div>
        <div className="m-5 p-5 space-y-3">
          <h2 className="font-bold">Verkoop bij ons</h2>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">
              Verkopen op Amazon
            </li>
            <li className="hover:underline cursor-pointer">
              Fulfillment by Amazon
            </li>
            <li className="hover:underline cursor-pointer">Word partner</li>
            <li className="hover:underline cursor-pointer">
              Uitgeven in eigen beheer
            </li>
          </ul>
        </div>
        <div className="m-5 p-5 space-y-3">
          <h2 className="font-bold">Amazon-betaalmethoden</h2>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">iDeal</li>
            <li className="hover:underline cursor-pointer">Cadeaubonnen</li>
          </ul>
        </div>
        <div className="m-5 p-5 space-y-3">
          <h2 className="font-bold">We helpen je graag</h2>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">
              Pakketten traceren of bestellingen bekijken
            </li>
            <li className="hover:underline cursor-pointer">
              Amazon en COVID-19
            </li>
            <li className="hover:underline cursor-pointer">
              Verzendtarieven en -beleid
            </li>
            <li className="hover:underline cursor-pointer">Amazon Prime</li>
            <li className="hover:underline cursor-pointer">
              Retourneren en vervangen
            </li>
            <li className="hover:underline cursor-pointer">Recycling</li>
            <li className="hover:underline cursor-pointer">
              Content en apparaten beheren
            </li>
            <li className="hover:underline cursor-pointer">Amazon-app</li>
            <li className="hover:underline cursor-pointer">Hulp</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-500 py-5 flex items-center justify-center">
        <div className="flex items-center mt-4">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

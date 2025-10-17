import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function CompanyPage() {
  return (
    <Container>
      <div className="py-16">
        {/* Company Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Qingdao Totem Candle Industry Co., Ltd.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            A distinguished manufacturer specializing in premium wax products, headquartered in the picturesque coastal city of Qingdao, Shandong, China.
          </p>
        </div>

        {/* Company Overview */}
        <SectionTitle
          preTitle="About Us"
          title="Excellence in Wax Manufacturing"
        >
          Strategically located just 78 kilometers from Qingdao Port, our state-of-the-art facility spans 3,000 square meters and is equipped with advanced production capabilities. Supported by a team of skilled technicians, dedicated production staff, and an exceptional management team, we uphold stringent quality control standards to ensure timely deliveries and competitive pricing, consistently delivering unparalleled service to our valued clients.
        </SectionTitle>

        {/* Core Offerings */}
        <div className="mb-16">
          <SectionTitle
            preTitle="Our Products"
            title="Our Core Offerings"
          >
            As the leading manufacturer of dental wax discs in China, we take pride in producing high-quality dental wax discs available in five distinct colors—blue, white, brown, gray, and porcelain white—and a range of sizes tailored to international standards.
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Dental Wax Discs */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Dental Wax Discs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our flagship product - high-quality dental wax discs available in five distinct colors:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Blue</li>
                <li>White</li>
                <li>Brown</li>
                <li>Gray</li>
                <li>Porcelain white</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Available in a range of sizes tailored to international standards.
              </p>
            </div>

            {/* Additional Products */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Additional Products
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our extensive portfolio includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>White candles, household candles, pillar candles</li>
                <li>Tealight candles and floating candles</li>
                <li>Artisanal craft candles</li>
                <li>Citronella oil candles and mosquito-repellent fragrance candles</li>
                <li>Industrial-grade machinable wax for specialized lathe applications</li>
                <li>Solid lubricants, including stick wax for cutting aluminum and non-ferrous metals</li>
                <li>Wax discs for dentistry CAD/CAM systems</li>
                <li>Textile wax rings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <SectionTitle
          preTitle="Global Presence"
          title="Global Reach and Trusted Partnerships"
        >
          For years, Qingdao Totem Candle Industry has proudly served clients worldwide, fostering enduring business relationships with domestic and international enterprises. Our commitment to excellence has earned us consistent praise and trust from customers across the globe.
        </SectionTitle>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-indigo-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Discover Our Quality and Craftsmanship
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Visit our website for more information about our products and services.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

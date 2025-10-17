import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCards } from "@/components/ProductCards";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <div id="products">
        <SectionTitle
          // preTitle="Our Products"
          title="Top Selling Products"
        >
          Discover our premium wax products designed for dental professionals and industrial applications worldwide.
        </SectionTitle>

        <ProductCards />
      </div>

      {/* Contact Us Section */}
      <div id="contact">
        <SectionTitle
          // preTitle="Get In Touch"
          title="Contact Us"
        >
          Ready to discuss your wax product needs? Get in touch with our team for quotes, custom orders, and technical support.
        </SectionTitle>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Address */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Company Address
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">Jiaonan Liwuguan, Qingdao, Shandong, China</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Phone</p>
                      <p className="text-gray-600 dark:text-gray-400">0086-532-85141988</p>
                      <p className="text-gray-600 dark:text-gray-400">15266210109</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Email</p>
                      <p className="text-gray-600 dark:text-gray-400">totemwax@126.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Additional Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Fax</p>
                      <p className="text-gray-600 dark:text-gray-400">0086-532-85141988</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                    </svg>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">ZIP Code</p>
                      <p className="text-gray-600 dark:text-gray-400">266416</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Website</p>
                      <a href="http://www.totemwax.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                        www.totemwax.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Contact us today for quotes, custom orders, or technical support. Our team is ready to help with your wax product needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <a
                  href="tel:0086-532-85141988"
                  className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
                >
                  Call Now
                </a> */}
                <a
                  href="mailto:totemwax@126.com"
                  className="inline-block px-8 py-3 text-indigo-600 bg-white border border-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-200"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta /> */}
    </Container>
  );
}

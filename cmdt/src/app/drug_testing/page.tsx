import BulletArticle from "@/components/Content/BulletArticle";
import InfoArticle from "@/components/Content/InfoArticle";
import PageTitlePicture from "@/components/Content/PageTitlePicture";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: "Drug Testing | Complete Mobile Drug Testing",
    description:
      "Complete Mobile Drug Testing provides DOT & Non-DOT drug testing, including pre-employment, reasonable suspicion, random, post-accident, and hair follicle testing. Ensuring compliance with DOT regulations.",
    openGraph: {
      siteName: "Complete Mobile Drug Testing",
      type: "website",
      title: "Drug Testing | Complete Mobile Drug Testing",
      description:
        "We offer DOT & Non-DOT drug testing, ensuring compliance with federal regulations. Services include pre-employment, random, post-accident, and hair follicle testing.",
      images: "https://cmdt.vercel.app/drug-test.jpg",
      url: "https://cmdt.vercel.app/drug_testing",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white size-full">
      <PageTitlePicture
        imagePath="/drug-test.jpg"
        imageAlt="An image of a drug test"
        title="Drug Testing"
        description="Drug testing programs for all"
      />

      <InfoArticle
        title="DOT & Non-DOT Drug Testing"
        paragraphs={[
          {
            text: "Whether you are looking to implement a new drug testing program or you simply need a facility to provide testing, Complete Mobile Drug Testing can meet your DOT compliance needs.",
          },
          {
            text: "The U.S. Department of Transportation (DOT), Federal Motor Carrier Safety Administration (FMCSA), adopted regulations requiring certain commercial motor vehicle operators to be subjected to alcohol and drug tests in order to reach the goal of an alcohol and drug-free transportation environment.",
          },
          {
            text: "The Federal Motor Carrier Safety Administration’s alcohol and drug testing rules apply to every person and to all employers of such persons who operate a commercial motor vehicle in commerce in any state, and is subject to: (1) the commercial driver’s license requirements of 49 CFR Part 383; (2) the Licencia Federal de Conductor (Mexico) requirements; or (3) the commercial driver’s license requirements of the Canadian National Safety Code.",
          },
          {
            text: "We are qualified to test for all agencies under the Department of Transportation: FMCSA, FAA, FRA, FTA, PHMSA & USCG. All samples are handled and processed by certified professional collectors for accuracy and follow DOT compliance. Only labs certified by the Department of Health and Human Services under the National Laboratory Certification Program are used.",
          },
          {
            text: "The following drug and alcohol tests apply to all persons who are required to have a CDL for the type of vehicle being operated:",
          },
          {
            component: (
              <BulletArticle
                menus={[
                  {
                    text: "Pre-Employment: This test is required and negative results must be received before a motor carrier allows a driver to perform a safety sensitive function. The pre-employment test is only required for controlled substances. Alcohol testing is permitted.",
                  },
                  {
                    text: "Reasonable Suspicion: This test is required when a trained supervisor/employer has reasonable suspicion to believe that the driver has used alcohol and/or controlled substances.",
                  },
                  {
                    text: "Random: This unannounced testing is based on a random selection of drivers. The selection must be made by a scientifically valid method and all drivers covered by this rule must have an equal chance of being tested. The names of drivers who are selected for testing must be kept confidential until such time that the carrier notifies the driver to take the test. (refer to DOT Consortium)",
                  },
                  {
                    text: "Post Accident: This drug/ alcohol test applies to all CDL drivers who are involved in fatal crashes. The test must also be conducted on all CDL drivers who are cited for moving violations arising in a crash that requires a vehicle being towed or an injury requiring medical attention away from the scene. The alcohol test must be conducted within 8 hours, and the controlled substances test must be conducted within 32 hours of the crash.",
                  },
                ]}
              />
            ),
          },
        ]}
      />
      <Separator className="w-2/3 h-1 mb-4 hover:ring-2 bg-blue-300 rounded-lg" />
      {/* //? QnA Section */}
      <InfoArticle
        title="FAQs from U.S. Dept of Transportation"
        paragraphs={[
          {
            paragraphTitle:
              "As an employee or employer, how do I know if I am subject to DOT testing?",
            text: "Generally, DOT regulations cover safety-sensitive transportation employers and employees. Each DOT agency (e.g. FRA, FMCSA, FTA, FAA, and PHMSA) and the USCG have specific drug and alcohol testing regulations that outline who is subject to their testing regulations.",
          },
          {
            paragraphTitle:
              "How does 49 CFR Part 40 differ from the DOT Agency specific regulations?",
            component: (
              <BulletArticle
                title="49 CFR Part 40 (commonly referred to as “Part 40″) states:"
                menus={[
                  { text: "how drug and alcohol testing is conducted," },
                  {
                    text: "who is authorized to participate in the drug and alcohol testing program, and",
                  },
                  {
                    text: "what employees must do before they may return-to-duty following a drug and/or alcohol violation.",
                  },
                ]}
              />
            ),
          },
          {
            paragraphTitle:
              "The DOT Agency and the USCG specific regulations state:",
            component: (
              <BulletArticle
                menus={[
                  {
                    text: "the agency’s prohibitions on drug and alcohol use,",
                  },
                  {
                    text: "who is subject to the regulations,",
                  },
                  {
                    text: "what testing is authorized,",
                  },
                  {
                    text: "when testing is authorized, and",
                  },
                  {
                    text: "the consequences of non-compliance.",
                  },
                ]}
              />
            ),
          },
        ]}
      />
      <br />
      <InfoArticle
        title="For more information, please click the following links for Employers and Employees:"
        paragraphs={[
          {
            text: "U.S. Department of Transportation Office of the Secretary:",
          },
          { text: "Office of Drug & Alcohol Policy & Compliance" },
          {
            component: (
              <Link
                className="underline hover:text-blue-500"
                href={`http://www.dot.gov/sites/dot.gov/files/docs/ODAPC%20EmployeeHandbook%20En.pdf`}
              >
                WHAT EMPLOYEES NEED TO KNOW ABOUT DOT DRUG & ALCOHOL TESTING
              </Link>
            ),
          },
          {
            component: (
              <Link
                className="underline hover:text-blue-500"
                href={`http://www.dot.gov/sites/dot.gov/files/docs/ODAPC%20EmployerGuidelinesOctober012010.pdf`}
              >
                WHAT EMPLOYERS NEED TO KNOW ABOUT DOT DRUG & ALCOHOL TESTING
              </Link>
            ),
          },
        ]}
      />
      <InfoArticle
        title="Hair Follicle Drug Testing"
        paragraphs={[
          {
            text: "Cocaine, methamphetamine, opiates, and Phencyclidine (PCP) are quickly excreted from the body, and are usually undetectable within urine samples 72 hours after use. Hair Follicle Testing for drugs one of the only ways to get an in depth assessment of up to 90 days in the past to determine is someone has been using drugs.",
          },
          {
            text: "There are currently no known adulterants for hair tests. Test results cannot be significantly altered with special shampoos, hair dyes, bleaches or other external chemicals. Because hair tests analyze the drugs inside the hair shaft, external contaminants/chemicals have absolutely no effect. The non-intrusive collection procedure basically eliminates the ability to avoid or delay the drug test. Because specimen collection can be directly observed, the risk of adulteration is even further reduced.",
          },
          {
            text: "The combination of being able to detect drugs for a greater period of time and the elimination of the ability to avoid or delay the drug test makes hair testing far more effective and accurate than urinalysis in correctly identifying drug users. When compared with urine specimen testing, hair testing provides up to 2.5 times the number of positives and a longer detection window.",
          },
          {
            component: (
              <BulletArticle
                title="Included in a standard Hair Drug Test, mandated for testing by the Federal Government are:"
                menus={[
                  { text: "Cocaine" },
                  { text: "Marijuana" },
                  {
                    text: "Opiates (Codeine, Morphine, & 6-momoacteyl morphine)",
                  },
                  {
                    text: "Methamphetamine (Meth/amphetamine & Ecstasy)",
                  },
                  {
                    text: "Phencyclidine (PCP)",
                  },
                ]}
              />
            ),
          },
          {
            text: "When compared with urine specimen testing, hair testing provides up to 2.5 times the number of positives and a longer detection window.",
          },
        ]}
      />
    </div>
  );
};

export default page;

import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "sea-air",
    label: "Sea And Air-FCL-LCL",
    img1: "https://saishipping.com/images/jcl-lcl-1.jpg",
    img2: "https://saishipping.com/images/jcl-lcl-2.jpg",
    img3: "https://saishipping.com/images/jcl-lcl-3.jpg",

    heading:
      "Sea and Air/FCL/LCL Services – SSS Sai Shipping Services Pvt Ltd.",

    intro:
      "At SSS Sai Shipping Services Pvt Ltd., we offer reliable FCL (Full-Container Load ) and LCL (Less-than-Container Load) services to ensure your cargo reaches its destination efficiently and cost-effectively. Our expertise in containerized freight solutions guarantees secure and timely deliveries, optimizing your supply chain with flexibility and efficiency.",

    intro2:
      "FCL and LCL services provide customized freight solutions based on cargo size and budget. With FCL, you get dedicated container space for your shipments, ensuring faster transit and added security. LCL, on the other hand, allows businesses to share container space, reducing shipping costs while maintaining reliability. Whether it’s a small consignment or full-container load, we offer tailored shipping solutions to meet diverse industry needs.",

    subHeading: "Tailored Containerized Shipping",

    subText:
      "At SSS Sai Shipping Services Pvt Ltd., we simplify FCL and LCL shipping with end-to-end logistics management. Our experts handle everything from cargo consolidation to customs documentation, ensuring seamless operations. With advanced tracking technology, we provide real-time shipment updates, enhancing visibility and control. Whether shipping small parcels or bulk cargo, our customized solutions prioritize cost-effectiveness, efficiency, and timely deliveries. Your cargo, our expertise—ensuring seamless shipping solutions.",

    bullets: [
      "Optimized Freight Consolidation For Cost Savings",
      "Seamless Customs Clearance & Documentation",
      "Real-Time Tracking For Complete Visibility",
      "Expert Support For Hassle-Free Logistics",
    ],

    faqTitle: "Helping You Understand FCL and LCL Services",

    faqs: [
      {
        q: "What is the difference between FCL and LCL?",
        a: "FCL (Full Container Load ) provides a dedicated container for your cargo, ensuring faster transit and added security. LCL (Less-than-Container Load) consolidates shipments from multiple customers into a shared container, offering a cost-effective shipping option.",
      },
      {
        q: "How do I choose between FCL and LCL shipping?",
        a: "If you have enough cargo to fill an entire container, FCL is the best choice for quicker and more secure transit. If your shipment is smaller, LCL allows you to share container space, reducing costs while still ensuring efficient delivery.",
      },
      {
        q: "Are LCL shipments secure?",
        a: "Yes, LCL shipments are securely packed and managed with strict handling protocols to prevent damage during transit. Our team ensures proper packaging, documentation, and tracking for each shipment.",
      },
      {
        q: "Can I track my shipment in real time?",
        a: "Absolutely! We provide real-time tracking for both FCL and LCL shipments, allowing you to monitor your cargo’s journey and stay informed at every stage of the shipping process.",
      },
    ],
  },

  {
    id: "odc",
    label: "ODC",
    img1: "https://saishipping.com/images/ODC-1.jpg",
    img2: "https://saishipping.com/images/ODC-2.jpg",
    img3: "https://saishipping.com/images/ODC-3.jpg",

    heading: "ODC Services – SSS Sai Shipping Services Pvt Ltd.",

    intro:
      "At SSS Sai Shipping Services Pvt Ltd., we specialize in handling Over Dimensional Cargo (ODC), ensuring safe and efficient transportation of oversized and heavy cargo. With our expertise in freight solutions, we manage complex logistics, ensuring seamless transit for large and unconventional shipments.",

    intro2:
      "ODC transportation requires meticulous planning, specialized equipment, and route optimization. Our team ensures smooth execution by managing permits, escorts, and real-time monitoring. Whether it’s heavy machinery, industrial equipment, or project cargo, we offer customized solutions to meet diverse industry needs.",

    subHeading: "Expert Handling for Oversized Shipments",

    subText:
      "At SSS Sai Shipping Services Pvt Ltd., we provide end-to-end ODC logistics, ensuring secure and timely delivery. Our team handles cargo planning, loading, and transportation with precision. With advanced tracking systems, we offer real-time updates, enhancing visibility and control. From factory relocation to infrastructure projects, our ODC solutions guarantee reliability and efficiency. Your cargo, our expertise—ensuring seamless heavy-lift transportation.",

    bullets: [
      "Custom Route Planning & Permit Assistance",
      "Specialized Equipment for Safe Handling",
      "Real-Time Tracking for Complete Visibility",
      "Expert Support for Complex Cargo Movements",
    ],

    faqTitle: "Helping You Understand ODC Services",

    faqs: [
      {
        q: "What qualifies as ODC?",
        a: "ODC refers to cargo that exceeds standard shipping dimensions in height, width, or weight. This includes heavy machinery, industrial equipment, wind turbines, and construction materials.",
      },
      {
        q:"How do you ensure safe ODC transportation?",
        a:"We use specialized trailers, cranes, and route planning to ensure safe handling. Our team secures permits and escorts to comply with regulations for smooth transit."
      },
      {
        q:"Do you provide real-time tracking ODC shipments?",
        a:"Yes, we offer real-time tracking and monitoring, ensuring full transparency and control throughout the transportation process."
      },
      {
        q:"Con you manage international ODC shipments?",
        a:"Absolutely! We handle both domestic and international ODC logistics, ensuring compliance with all legal and operational requirements."
      }
    ],
  },

  {
    id: "break-bulk",
    label: "Break Bulk",
    img1: "https://saishipping.com/images/break-bulk-1.jpg",
    img2: "https://saishipping.com/images/break-bulk-2.jpg",
    img3: "https://saishipping.com/images/break-bulk-3.jpg",

    heading: "Break Bulk Shipping Services",

    intro:
      "At SSS Sai Shipping Services Pvt Ltd., we provide break bulk shipping solutions to ensure your oversized and non-containerized cargo reaches its destination efficiently, securely, and on time. With our global logistics network and expertise, we manage every aspect of your shipment, from loading to final delivery.",

    intro2:
      "Break bulk shipping is ideal for large, heavy, or irregularly shaped cargo that cannot be containerized. Our specialized handling and lifting equipment ensure safe and cost-effective transport. Whether you need cranes, custom lashing, or direct port-to-site delivery, we have the right solution for your logistics needs.",

    subHeading: "Reliable Logistics Partner",

    subText:
      "At SSS Sai Shipping Services Pvt Ltd., we ensure a hassle-free break bulk shipping experience. From the moment you engage our services, our team manages everything with end-to-end coordination and real-time tracking. Our modern infrastructure and advanced logistics technology allow us to streamline operations, minimize delays, and enhance cost efficiency. We understand that every shipment is crucial, which is why we offer personalized solutions, expert guidance, and 24/7 support. Whether it’s heavy machinery, steel products, or project cargo, we ensure your goods reach their destination safely and on time.",

    bullets: [
      "Global Expertise, Local Efficiency",
      "Seamless Coordination from Start to Finish",
      "Innovative Solutions for Complex Logistics",
      "Dedicated Support Every Step of the Way",
    ],

    faqTitle: "Helping You Understand Break Bulk Services",

    faqs: [
      {
        q: "What is break bulk shipping , and shy is it used ?",
        a: "Break bulk shipping involves transporting oversized or heavy cargo that cannot be containerized. It is used for goods like machinery, steel structures, and construction materials, ensuring secure and efficient transport.",
      },
      {
        q:"What types of cargo require break bulk shipping?",
        a:"Break bulk is ideal for heavy machinery, industrial equipment, steel, pipes, and large construction materials that do not fit into standard containers."
      },
      {
        q:"How do you ensure the security of break bulk shipments?",
        a:"We use customized lashing, lifting techniques, and specialized equipment to secure cargo during transit, minimizing risk and ensuring safe delivery."
      },
      {
        q:"Can i track my break bulk shipment in real-time?",
        a:"Absolutely! We provide real-time tracking for all break bulk shipments, allowing you to monitor your cargo’s journey and stay informed at every stage of the shipping process."
      }
    ],
  },

  {
    id: "hazardous",
    label: "Hazardous",
    img1: "https://saishipping.com/images/hazardous-1.jpg",
    img2: "https://saishipping.com/images/hazardous-2.jpg",
    img3: "https://saishipping.com/images/hazardous-3.jpg",

    heading: "Hazardous Cargo Shipping – SSS Sai Shipping Services Pvt Ltd.",

    intro:
      "At SSS Sai Shipping Services Pvt Ltd., we specialize in the safe and compliant transportation of hazardous cargo, ensuring your dangerous goods are handled with the highest level of security and care. With our deep industry expertise and adherence to international safety standards, we manage every step of the process, from classification and packaging to final delivery.",

    intro2:
      "Shipping hazardous cargo is more than just transport—it’s about risk management, compliance, and precision handling. Our team ensures your shipments meet all regulatory requirements, minimizing delays and mitigating potential hazards. Whether transporting flammable materials, chemicals, or toxic substances, we provide secure and efficient logistics solutions tailored to your industry’s needs.",

    subHeading: "Safe, Compliant, and Reliable Transport",

    subText:
      "At SSS Sai Shipping Services Pvt Ltd., we take a meticulous approach to hazardous cargo logistics. From obtaining necessary permits to using specialized containers and protective equipment, we ensure every shipment is secured and compliant. Our real-time tracking and 24/7 support give you full visibility and peace of mind. With advanced handling techniques, trained professionals, and strategic global partnerships, we guarantee seamless operations. Your cargo’s safety is our priority, and we are committed to delivering secure, reliable, and efficient hazardous materials transport.",

    bullets: [
      "Regulatory Compliance at Every Step",
      "Advanced Safety Protocols for Secure Handling",
      "End-to-End Visibility and Real-Time Tracking",
      "Specialized Solutions for Diverse Hazardous Cargo",
    ],

    faqTitle: "Helping You Understand Hazardous Services",

    faqs: [
      {
        q: "What is hazardous cargo?",
        a: "Hazardous cargo shipping involves the transport of goods classified as dangerous, including chemicals, gases, flammable liquids, and toxic substances. Special handling and regulatory compliance ensure safe transportation.",
      },
      {
        q:"What types  of goods are considered hazardous cargo?",
        a:"Hazardous cargo includes explosives, corrosives, flammable materials, radioactive substances, and toxic chemicals that require strict safety measures during shipping."
      },
      {
        q:"How do you ensure the safe transport of hazardous cargo",
        a:"We follow strict international safety protocols, use specialized containers, and provide proper labeling, documentation, and secure packaging to prevent risks during transit."
      },
      {
        q:"Do you offer real-time tracking for hazardous shipments?",
        a:"Yes, we provide real-time tracking and monitoring for hazardous shipments, ensuring transparency, safety, and compliance throughout the journey."
      }
    ],
  },
];

// ICONS

const IconArrow = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e87722"
    strokeWidth="2"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="10" fill="#e87722" />

    <path
      d="M5.5 10.5l3 3 6-6"
      stroke="#fff"
      strokeWidth="1.8"
      fill="none"
    />
  </svg>
);

// FAQ

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && <p className="faq-ans">{a}</p>}

      <div className="faq-hr"></div>
    </div>
  );
}

// SERVICE SECTION

function ServiceSection({ svc }) {
  return (
    <div>

      <div className="svc-img-hero">
        <img src={svc.img1} alt={svc.label} />
      </div>

      <h2 className="svc-h2">{svc.heading}</h2>

      <p className="svc-p">{svc.intro}</p>

      <p className="svc-p">{svc.intro2}</p>

      <h3 className="svc-h3">{svc.subHeading}</h3>

      <p className="svc-p">{svc.subText}</p>

      <div className="svc-bullets">
        {svc.bullets.map((b, i) => (
          <div className="svc-bullet" key={i}>
            <IconCheck />
            <span>{b}</span>
          </div>
        ))}
      </div>

      <div className="svc-img-pair">
        <img src={svc.img2} alt="" />
        <img src={svc.img3} alt="" />
      </div>

      <div className="faq-wrap">

        <h3 className="faq-title">{svc.faqTitle}</h3>

        {svc.faqs.map((f, i) => (
          <FaqItem key={i} q={f.q} a={f.a} />
        ))}

      </div>

    </div>
  );
}

// MAIN PAGE

export default function FreightForwarding() {

  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`

      .ff *{
        box-sizing:border-box;
        margin:0;
        padding:0;
      }

      .ff{
        font-family:'Segoe UI',sans-serif;
        background:#fff;
      }

      /* HERO */

      .ff-hero{
        position:relative;
        min-height:420px;
        overflow: "hidden",
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        padding:70px 200px;

        background-image:url("https://saishipping.com/images/about-banner.jpg");
        background-size:cover;
        background-position:center;
      }

      .ff-hero::before{
        content:"";
        position:absolute;
        inset:0;
        background:rgba(255,255,255,.55);
      }

      .ff-hero-inner{
        position:relative;
        z-index:2;
      }

      .ff-hero-tag{
        font-size:15px;
        color:#e87722;
        margin-bottom:10px;
        font-weight:600;
      }

      .ff-hero h1{
        font-family:Georgia,serif;
        font-size:72px;
        font-weight:900;
        color:#111;
      }

      /* BODY */

      .ff-body{
        display:flex;
        max-width:1260px;
        margin:auto;
        padding:48px 24px;
      }

      /* SIDEBAR */

      .ff-sb{
        width:290px;
        padding-right:28px;
      }

      .sb-box{
        border:1px solid #ddd;
        border-radius:8px;
        overflow:hidden;
        margin-bottom:26px;
      }

      .sb-title{
        padding:18px 22px;
        font-weight:700;
        border-bottom:1px solid #eee;
      }

      .sb-list{
        list-style:none;
      }

      .sb-btn{
        width:100%;
        border:none;
        background:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:16px 22px;
        cursor:pointer;
        font-size:15px;
      }

      .sb-btn.active{
        color:#e87722;
        font-weight:700;
      }

      /* NEED HELP */

      .nh-card{
        background:#e87722;
        border-radius:14px;
        padding:32px 24px;
        text-align:center;
      }

      .nh-card h4{
        font-family:Georgia,serif;
        font-size:28px;
        color:#fff;
        margin:16px 0 12px;
      }

      .nh-card p{
        color:#fff;
        line-height:1.7;
        font-size:14px;
        margin-bottom:22px;
      }

      .nh-btn{
        display:inline-block;
        background:#fff;
        color:#e87722;
        text-decoration:none;
        padding:12px 28px;
        border-radius:4px;
        font-weight:700;
      }

      /* MAIN */

      .ff-main{
        flex:1;
      }

      .svc-img-hero img{
        width:100%;
        height:420px;
        object-fit:cover;
        border-radius:10px;
      }

      .svc-h2{
        margin:24px 0 14px;
        font-size:28px;
        font-family:Georgia,serif;
      }

      .svc-h3{
        margin:24px 0 14px;
        font-size:24px;
        font-family:Georgia,serif;
      }

      .svc-p{
        line-height:1.8;
        color:#555;
        margin-bottom:14px;
      }

      .svc-bullets{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:14px;
        margin:24px 0;
      }

      .svc-bullet{
        display:flex;
        gap:10px;
        align-items:center;
      }

      .svc-img-pair{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:18px;
        margin-bottom:40px;
      }

      .svc-img-pair img{
        width:100%;
        height:280px;
        object-fit:cover;
        border-radius:10px;
      }

      /* FAQ */

      .faq-title{
        font-size:24px;
        margin-bottom:20px;
      }

      .faq-q{
        width:100%;
        background:none;
        border:none;
        padding:18px 0;
        display:flex;
        justify-content:space-between;
        cursor:pointer;
        font-weight:700;
      }

      .faq-ans{
        padding-bottom:18px;
        color:#555;
        line-height:1.7;
      }

      .faq-hr{
        height:1px;
        background:#e8e8e8;
      }

      /* RESPONSIVE */

      @media(max-width:980px){

        .ff-body{
          flex-direction:column;
        }

        .ff-sb{
          width:100%;
          margin-bottom:30px;
          padding-right:0;
        }
      }

      @media(max-width:600px){

        .svc-bullets{
          grid-template-columns:1fr;
        }

        .svc-img-pair{
          grid-template-columns:1fr;
        }

        .ff-hero h1{
          font-size:34px;
        }

        .ff-hero{
          padding:60px 20px;
        }
      }

      `}</style>

      <div className="ff">

        {/* HERO */}

        <div className="ff-hero">

          <div className="ff-hero-inner">

            <p className="ff-hero-tag">
              Freight Forwarding
            </p>

            <h1>{services[active].label}</h1>

          </div>

        </div>

        {/* BODY */}

        <div className="ff-body">

          {/* SIDEBAR */}

          <aside className="ff-sb">

            <div className="sb-box">

              <div className="sb-title">
                Included Services
              </div>

              <ul className="sb-list">

                {services.map((s, i) => (

                  <li key={s.id}>

                    <button
                      className={`sb-btn ${
                        active === i ? "active" : ""
                      }`}
                      onClick={() => setActive(i)}
                    >
                      <span>{s.label}</span>

                      <IconArrow />
                    </button>

                  </li>

                ))}

              </ul>

            </div>

            {/* NEED HELP */}

            <div className="nh-card">

              <h4>Need Help ?</h4>

              <p>
               Schedule your initial consultation today and start your journey towards seamless, stress-free freight forwarding. Let us handle your logistics with expertise and efficiency. Contact us now!
              </p>

              <Link to="/contact" className="nh-btn">
                Contact Us
              </Link>

            </div>

          </aside>

          {/* MAIN */}

          <main className="ff-main">

            <ServiceSection
              key={active}
              svc={services[active]}
            />

          </main>

        </div>

      </div>
    </>
  );
}
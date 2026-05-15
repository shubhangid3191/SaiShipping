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
      "At SSS Sai Shipping Services Pvt Ltd., we offer reliable FCL and LCL services to ensure your cargo reaches its destination efficiently and cost-effectively.",

    intro2:
      "FCL and LCL services provide customized freight solutions based on cargo size and budget.",

    subHeading: "Tailored Containerized Shipping",

    subText:
      "At SSS Sai Shipping Services Pvt Ltd., we simplify FCL and LCL shipping with end-to-end logistics management.",

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
        a: "FCL provides dedicated container space while LCL allows shared container shipping.",
      },
      {
        q: "How do I choose between FCL and LCL shipping?",
        a: "Choose based on shipment size and urgency.",
      },
      {
        q: "Are LCL shipments secure?",
        a: "Yes, LCL shipments are securely packed and managed.",
      },
      {
        q: "Can I track my shipment in real time?",
        a: "Absolutely! We provide real-time tracking.",
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
      "We specialize in handling Over Dimensional Cargo with safe and efficient transportation.",

    intro2:
      "ODC transportation requires specialized equipment and route planning.",

    subHeading: "Expert Handling for Oversized Shipments",

    subText:
      "We provide end-to-end ODC logistics ensuring secure and timely delivery.",

    bullets: [
      "Custom Route Planning",
      "Specialized Equipment",
      "Real-Time Tracking",
      "Expert Cargo Support",
    ],

    faqTitle: "Helping You Understand ODC Services",

    faqs: [
      {
        q: "What qualifies as ODC?",
        a: "ODC refers to oversized cargo exceeding standard dimensions.",
      },
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
      "We provide break bulk shipping solutions for oversized cargo.",

    intro2:
      "Break bulk shipping is ideal for heavy or irregular cargo.",

    subHeading: "Reliable Logistics Partner",

    subText:
      "We ensure hassle-free break bulk shipping with real-time tracking.",

    bullets: [
      "Global Expertise",
      "End-to-End Coordination",
      "Innovative Logistics",
      "24/7 Support",
    ],

    faqTitle: "Helping You Understand Break Bulk Services",

    faqs: [
      {
        q: "What is break bulk shipping?",
        a: "Break bulk shipping transports oversized cargo.",
      },
    ],
  },

  {
    id: "hazardous",
    label: "Hazardous",
    img1: "https://saishipping.com/images/hazardous-1.jpg",
    img2: "https://saishipping.com/images/hazardous-2.jpg",
    img3: "https://saishipping.com/images/hazardous-3.jpg",

    heading: "Hazardous Cargo Shipping",

    intro:
      "We specialize in safe transportation of hazardous cargo.",

    intro2:
      "Shipping hazardous cargo requires compliance and precision handling.",

    subHeading: "Safe, Compliant & Reliable",

    subText:
      "We ensure secure handling using international safety standards.",

    bullets: [
      "Regulatory Compliance",
      "Advanced Safety Protocols",
      "Real-Time Tracking",
      "Specialized Solutions",
    ],

    faqTitle: "Helping You Understand Hazardous Services",

    faqs: [
      {
        q: "What is hazardous cargo?",
        a: "Hazardous cargo includes dangerous goods requiring special handling.",
      },
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
                Schedule your initial consultation today and
                start your journey towards seamless,
                stress-free freight forwarding.
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
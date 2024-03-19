import { SectionProps } from "@/components/home/HomeSection";
import { Company } from "@/components/home/CompanyCarousel";
import { SlideProps } from "@/components/home/Slide";

export const homeSections: SectionProps[] = [
    {
      title: "Revolutionize Your Strategy with Advanced Business Intelligence",
      subTitle: "Harness the Power of AI for Unmatched Data Insights!",
      content: (
        <div>
          Discover the cutting-edge in business intelligence with Cyberoni`s AI
          solutions. Our technology empowers businesses to make data-backed
          decisions, elevating strategies with precise, actionable insights. From
          boosting operational efficiency to customizing customer interactions,
          our AI tools are a game-changer. Explore success stories that showcase
          tangible, transformative results with our AI partnerships.
        </div>
      ),
      image: "/images/key-sections/background-removed/Data-3d.png",
      imageFirst: false,
      linkTo: "/blogs",
    },
    {
      title: "Transform Your Marketing with AI-Driven Automation",
      subTitle: "Effortless Marketing Automation for Optimal Results!",
      content: (
        <div>
          Embrace the new era of business with Cyberoni`s AI-driven marketing
          automation. Our tools are designed to streamline your marketing efforts,
          enhancing efficiency and effectiveness. Dive into the future of
          automated marketing strategies, where you can focus on strategic growth
          while our AI takes care of the rest, delivering outstanding results.
        </div>
      ),
      image: "/images/key-sections/background-removed/Automation.png",
      imageFirst: true,
      linkTo: "/blogs",
    },
    {
      title: "Custom AI Solutions for Unique Business Challenges",
      subTitle: "Precision-Driven AI Tailored to Your Business Needs!",
      content: (
        <div>
          At Cyberoni, we recognize the uniqueness of each business. Our AI models
          are expertly crafted to match your specific data and operational needs,
          offering unparalleled accuracy and relevance. Experience the benefit of
          customized AI solutions that drive smarter strategies and amplify
          efficiency across your business operations.
        </div>
      ),
      image: "/images/key-sections/background-removed/Tailored.png",
      imageFirst: false,
      linkTo: "/blogs",
    },
    {
      title: "Redefine Customer Support with AI Innovation",
      subTitle: "Elevate Your Customer Experience with Smart AI Solutions!",
      content: (
        <div>
          Meet the modern demands of customer support with Cyberoni`s AI
          solutions. Our technology ensures quick, precise, and individualized
          support, seamlessly integrating into your systems. Enhance customer
          satisfaction and operational effectiveness while proactively addressing
          issues with our predictive analytics. Step into the future of customer
          support with Cyberoni.
        </div>
      ),
      image: "/images/key-sections/background-removed/Support.png",
      imageFirst: true,
      linkTo: "/blogs",
    },
  ];
  
  export const companies: Company[] = [
    { name: "google", image: "/images/Google cloud.png" },
    { name: "", image: "/images/Ebay.png" },
    { name: "", image: "/images/Tux.png" },
    { name: "", image: "/images/Spotify.png" },
    { name: "", image: "/images/Airbnb.png" },
    { name: "", image: "/images/Facebook.png" },
    { name: "", image: "/images/Coca Cola.png" },
    { name: "", image: "/images/Zoom.png" },
    { name: "", image: "/images/Creative Cloud.png" },
    { name: "", image: "/images/Netflix.png" },
    { name: "", image: "/images/Discord.png" },
    { name: "", image: "/images/Figma.png" },
    { name: "", image: "/images/Paypal.png" },
    { name: "", image: "/images/Adobe.png" },
  ];
  
  const images = [
    "/images/reviews/Black Shirt.png",
    "/images/reviews/Green_Shirt.png",
    "/images/reviews/Pink_Girl.jpg",
  ];
  function getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  let imageIndex = 0;
  function getNextImage(): string {
    const selectedImage = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
    return selectedImage;
  }
  export const sildes: SlideProps[] = [
    {
      name: "Angel Charles",
      designation: "Satisfied Customer",
      image: getNextImage(), // Replace with actual image path
      content:
        "Awesome work they do honestly love how I can easily get unstuck help out and don’t use it for malicious intent",
    },
    {
      name: "Rotunda Coleman",
      designation: "Happy Customer",
      image: getNextImage(), // Replace with actual image path
      content:
        "Restructured my whole website for me at a reasonable price and implemented what I asked for in a timely manner, definitely recommend. Response from the owner: Thank you Rotunda, a pleasure working with you!",
    },
    {
      name: "Eduardo C",
      designation: "Content User",
      image: getNextImage(), // Replace with actual image path
      content:
        "Cyberoni was amazing they took our static website and turned It into something beautiful",
    },
    {
      name: "Dee Simon",
      designation: "Regular Client",
      image: getRandomImage(), // Replace with actual image path
      content: "Easy to use site! Competitive prices too",
    },
    // New slides
  
    {
      name: "Rotunda Coleman",
      designation: "Happy Customer",
      image: getRandomImage(), // Default image path
      content:
        "Restructured my whole website for me at a reasonable price and implemented what I asked for in a timely manner, definitely recommend",
    },
    {
      name: "Eduardo C",
      designation: "Content User",
      image: getRandomImage(), // Default image path
      content:
        "Cyberoni was amazing they took our static website and turned it into something beautiful",
    },
    {
      name: "Dee Simon",
      designation: "Regular Client",
      image: getRandomImage(), // Default image path
      content: "Easy to use site! Competitive prices too",
    },
    {
      name: "Uncle Smiley The DJ",
      designation: "Professional DJ",
      image: getRandomImage(), // Default image path
      content:
        "The team at Cyberoni worked wonders on my DJ website. Their attention to detail and understanding of the music industry really helped bring my site to life. It's not just a website, it's a digital showcase of my DJ career!",
    },
    {
      name: "Zachary George",
      designation: "Corporate Partner",
      image: getRandomImage(), // Default image path
      content:
        "Working with Cyberoni to create custom software for Comcast was a game-changer. Their expertise in software solutions and proactive approach to problem-solving made the entire process seamless and highly effective.",
    },
    {
      name: "Jerome Jones",
      designation: "Grateful Parent",
      image: getRandomImage(), // Default image path
      content:
        "As a single dad, setting up surveillance at home was daunting. Cyberoni made it simple, affordable, and secure. Their team was empathetic and professional, ensuring my home was safe for my kids. Highly recommend their services!",
    },
    // Add more slides as needed
  ];
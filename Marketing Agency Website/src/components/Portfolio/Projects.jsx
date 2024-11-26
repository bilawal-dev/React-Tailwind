import { useEffect } from 'react';
import image1 from '../../assets/images/portfolio/image1.jpg';
import image2 from '../../assets/images/portfolio/image2.jpg';
import image3 from '../../assets/images/portfolio/image3.jpg';
import image4 from '../../assets/images/portfolio/image4.jpg';
import image5 from '../../assets/images/portfolio/image5.jpg';
import image6 from '../../assets/images/portfolio/image6.jpg';
import image7 from '../../assets/images/portfolio/image7.jpg';
import image8 from '../../assets/images/portfolio/image8.jpg';

import ProjectCard from './ProjectCard';

const Projects = () => {
  const preloadImages = (imageSources) => {
    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  useEffect(() => {
    // Preload all project images
    preloadImages([
      image1, image2, image3, image4, 
      image5, image6, image7, image8,
    ]);
  }, []);

  return (
    <div className="px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-14 max-md:gap-10 py-20">
      <ProjectCard
        src={image1}
        title="Strategic Growth"
        description="Transforming your online presence."
      />
      <ProjectCard
        src={image2}
        title="Distinctive Branding"
        description="Crafting memorable brand identities."
      />
      <ProjectCard
        src={image3}
        title="Engaging Audiences"
        description="Boosting engagement through social media."
      />
      <ProjectCard
        src={image4}
        title="Search Visibility"
        description="Enhancing organic search performance."
      />
      <ProjectCard
        src={image5}
        title="Compelling Content"
        description="Crafting stories that connect."
      />
      <ProjectCard
        src={image6}
        title="Visual Storytelling"
        description="Engaging audiences with dynamic visuals."
      />
      <ProjectCard
        src={image7}
        title="Targeted Outreach"
        description="Building relationships through email."
      />
      <ProjectCard
        src={image8}
        title="Collaborative Growth"
        description="Partnering with influencers for impact."
      />
    </div>
  );
};

export default Projects;
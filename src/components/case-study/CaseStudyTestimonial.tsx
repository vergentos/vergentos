import { ICaseStudy } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';

const bgColors = [
  'bg-gradient-to-br from-pink-500 to-purple-600',
  'bg-gradient-to-br from-cyan-500 to-blue-600',
  'bg-gradient-to-br from-green-500 to-teal-600',
  'bg-gradient-to-br from-orange-500 to-red-600',
  'bg-gradient-to-br from-indigo-500 to-purple-600',
  'bg-gradient-to-br from-yellow-500 to-orange-600',
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .filter((word) => /^[A-Za-z]/.test(word))
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const CaseStudyTestimonial = ({ userReview }: { userReview: ICaseStudy['userReview'] }) => {
  const initials = getInitials(userReview.userName);
  const colorIndex = userReview.userName.length % bgColors.length;

  return (
    <section>
      <div className="max-w-[950px] mx-auto">
        <div className="space-y-14">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h4 className="text-heading-2" id="testimonials-title">
                About this project
              </h4>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="bg-secondary dark:bg-background-6 p-8 rounded-[20px] space-y-6 max-w-[950px]">
              <figure className={`inline-flex size-14 items-center justify-center rounded-full ${bgColors[colorIndex]}`}>
                <span className="text-xl font-bold text-white">{initials}</span>
              </figure>
              <blockquote>
                <p className="text-white dark:text-accent/60">{userReview.reviewText}</p>
              </blockquote>
              <div className="pb-4">
                <p className="text-white text-lg font-medium leading-[150%]">{userReview.userName}</p>
                <p className="text-tagline-2 text-accent/60">{userReview.userRole}</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTestimonial;

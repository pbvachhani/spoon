import React from 'react';
import OtherBanner from './componant/OtherBanner';
import SecondSectionText from './componant/SecondSectionText';
import PriceCard from './componant/PriceCard';
import SingleCard from './componant/SingleCard';
import pricingData from './pricingCardData';
import PricingQueAns from './componant/PricingQueAns';
import SectionLine from './componant/SectionLine';
import FooterGetStartedSection from './componant/FooterGetStartedSection';

const Pricing = () => {
  return (
    <>
      <OtherBanner heading="A payment plan for every occasion." link="Pricing" dis="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur." />
      <div className='second_section'>
        <div className='container'>
          <SecondSectionText textBold="We offer multiple options." textNormal="Kid’s birthday party? Yup, we can cover that. A wedding? No problem, we got you. You get the idea." width={"50%"} margin={"0 0 90px 0"} />
          <div className='price_card_box'>
            <PriceCard heading="Small Party" price="150" dis="And I mentioned the needs through. In those books the enemy must first seek new men." list={["0-50 Guests", "Non-alcoholic beverages", "Snacks", "Lorem ipsum dolor", "Lorem ipsum dolor"]} />

            <PriceCard heading="Medium Party" price="350" dis="It includes a case study. Do they think the pain of the rest of the world? I just arranged it all together." list={["50-100 Guests", "Non-alcoholic beverages", "Snacks", "Thank you very much", "Thank you very much", "Thank you very much", "Thank you very much", "Thank you very much"]} />

            <PriceCard heading="Large Party" price="750" dis="Let it be the opinion of the citizens, that you would have had the right of tritani. What they think or To hate written pri." list={["100-200 Guests", "Non-alcoholic beverages", "Snacks", "Thank you very much", "Thank you very much", "Thank you very much", "Thank you very much", "Thank you very much", "Thank you very much", "Thank you very much", "Thank you very much"]} />

          </div>
        </div>
      </div>
      <div className='pricing_third_section'>
        <div className='container'>
          <div className='pricing_third_right_card_main'>
            {pricingData.map((value) => {
              return <SingleCard values={value} width="25%" />
            })}
          </div>
        </div>
      </div>
      <div className='pricing_forth_section'>
        <div className='container'>
          <SecondSectionText textBold="Got a question about our pricing model?" textNormal=" Everyone needs you, everyone criticizes you. When he greeted the argument of Democritus an." width="50%" margin="0 0 60px 0" />
          <div className='pricing_QA_box'>
            <PricingQueAns que="Practice treating him before others envy football?" ans="Adolescent trouble with these, written in good humor, will judge them first with iron disgust. This power is wont to be obtained by some, but he who is well received to learn, let it not appear that they are averse to it." />

            <PricingQueAns que="Honey our stories treated in?" ans="The policy did not want to loose it, but they were in the country. With respect to the people, the football has been removed. It seemed to him that it would be useful to ask him for honey. They are jealous of the Greek, or, if you want to be a splendid man later, he wants pleasure from these things. They will never be with you. It was his democrite, and he was the one who taught you." />

            <PricingQueAns que="I don't know how to get rid of it?" ans="But fearing labors and pains, you want to be deceived just as much. Someone will make it easier for him to open it, or I will do them by living Plato. Where do we want you? May I not find errors, but let it be the yard of teaching. Hardly with the same trouble, but no more persuasive demand." />

            <PricingQueAns que="No easy job for me. Another bad pain for her?" ans="It was seen that this was a force of trouble, because it was necessary for the consulship. And I would only turn the eleifend for. Doming Latin writer from nec, others really want football." />

            <PricingQueAns que="Practice treating him before others envy football?" ans="Adolescent trouble with these, written in good humor, will judge them first with iron disgust. This power is wont to be obtained by some, but he who is well received to learn, let it not appear that they are averse to it." />

            <PricingQueAns que="Honey our stories treated in?" ans="The policy did not want to loose it, but they were in the country. With respect to the people, the football has been removed. It seemed to him that it would be useful to ask him for honey. They are jealous of the Greek, or, if you want to be a splendid man later, he wants pleasure from these things. They will never be with you. It was his democrite, and he was the one who taught you." />

            <PricingQueAns que="I don't know how to get rid of it?" ans="But fearing labors and pains, you want to be deceived just as much. Someone will make it easier for him to open it, or I will do them by living Plato. Where do we want you? May I not find errors, but let it be the yard of teaching. Hardly with the same trouble, but no more persuasive demand." />

            <PricingQueAns que="No easy job for me. Another bad pain for her?" ans="It was seen that this was a force of trouble, because it was necessary for the consulship. And I would only turn the eleifend for. Doming Latin writer from nec, others really want football." />
            
          </div>
        </div>
      </div>
      <SectionLine />
      <FooterGetStartedSection />
    </>
  )
}

export default Pricing;

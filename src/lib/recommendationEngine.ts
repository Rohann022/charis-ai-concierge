import { products } from "@/data/products";

type Preferences = {
  budget: number | string;
  interests: string[];
  personality: string;
  occasion: string;
  emotionalGoal?: string;
  relationship?: string;
};


export function recommendProducts(preferences: Preferences) {

  const budget =
    typeof preferences.budget === "number"
      ? preferences.budget
      : Number(
          String(preferences.budget).replace(/[^\d]/g, "")
        ) || 0;


  const normalize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .trim();


  const scoredProducts = products.map((product) => {

    let score = 0;


    // Budget matching
    if (budget > 0) {

      if (product.price <= budget) {
        score += 30;
      }

      else if (product.price <= budget * 1.2) {
        score += 15;
      }

    }



    // Interest matching
    const productInterests =
      product.interests.map(normalize);


    preferences.interests?.forEach((interest)=>{

      const userInterest = normalize(interest);


      productInterests.forEach((item)=>{

        if(
          item.includes(userInterest) ||
          userInterest.includes(item)
        ){
          score += 20;
        }

      });

    });



    // Personality matching
    if(preferences.personality){

      const personality =
        normalize(preferences.personality);


      product.personalities.forEach((p)=>{

        const productPersonality = normalize(p);


        if(
          personality.includes(productPersonality) ||
          productPersonality.includes(personality)
        ){
          score += 25;
        }

      });

    }




    // Occasion matching
    if(preferences.occasion){

      const occasion =
        normalize(preferences.occasion);


      product.occasions.forEach((o)=>{

        const productOccasion =
          normalize(o);


        if(
          occasion.includes(productOccasion) ||
          productOccasion.includes(occasion)
        ){
          score += 25;
        }

      });

    }



    // Emotional goal matching
    if(preferences.emotionalGoal){

      const emotion =
        normalize(preferences.emotionalGoal);


      if(
        product.description
          ?.toLowerCase()
          .includes(emotion)
      ){
        score += 15;
      }

    }



    return {
      ...product,
      score
    };

  });



  return scoredProducts
    .sort((a,b)=>b.score-a.score)
    .slice(0,3);

}